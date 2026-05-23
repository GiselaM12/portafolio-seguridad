import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FaShieldAlt, FaInfoCircle, FaCheckCircle, FaTimesCircle, 
    FaFilePdf, FaTerminal, FaUsers, FaEye, FaArrowRight,
    FaSlidersH, FaFileAlt, FaLock, FaCheckSquare, FaRedo, FaCertificate
} from 'react-icons/fa';
import { jsPDF } from 'jspdf';

const metricsDefinition = {
    AV: {
        name: "Attack Vector (AV)",
        description: "Refleja el contexto en el que es posible la explotación de la vulnerabilidad.",
        options: [
            { code: "N", name: "Network (Red)", value: 0.85, desc: "La vulnerabilidad se puede explotar a través de la red (remotamente)." },
            { code: "A", name: "Adjacent (Red Adyacente)", value: 0.62, desc: "La explotación se limita a la red local o adyacente (mismo segmento)." },
            { code: "L", name: "Local (Local)", value: 0.55, desc: "Requiere acceso directo a la máquina (consola, SSH local, etc.)." },
            { code: "P", name: "Physical (Físico)", value: 0.20, desc: "Requiere interacción física directa con el hardware (ej: puerto USB)." }
        ]
    },
    AC: {
        name: "Attack Complexity (AC)",
        description: "Describe las condiciones fuera del control del atacante que deben existir para explotar la vulnerabilidad.",
        options: [
            { code: "L", name: "Low (Baja)", value: 0.77, desc: "No se requieren condiciones especiales. Explotación altamente repetible." },
            { code: "H", name: "High (Alta)", value: 0.44, desc: "Requiere evadir protecciones complejas o sincronización temporal precisa." }
        ]
    },
    PR: {
        name: "Privileges Required (PR)",
        description: "Define el nivel de privilegios que debe poseer un atacante antes de explotar la vulnerabilidad.",
        options: [
            { code: "N", name: "None (Ninguno)", value: 0.85, desc: "Un atacante no autenticado puede explotar la vulnerabilidad." },
            { code: "L", name: "Low (Bajos)", value: 0.62, desc: "Requiere privilegios de usuario básico sin capacidades administrativas." },
            { code: "H", name: "High (Altos)", value: 0.27, desc: "Requiere privilegios de administrador o acceso root del sistema." }
        ]
    },
    UI: {
        name: "User Interaction (UI)",
        description: "Especifica si se requiere la participación activa de un usuario legítimo (distinto del atacante).",
        options: [
            { code: "N", name: "None (Ninguna)", value: 0.85, desc: "La vulnerabilidad se explota de manera totalmente silenciosa." },
            { code: "R", name: "Required (Requerida)", value: 0.62, desc: "Se requiere que el usuario haga clic, abra un enlace o ejecute un archivo." }
        ]
    },
    S: {
        name: "Scope (S)",
        description: "Determina si una vulnerabilidad en un componente puede afectar los recursos de otro componente o autorización.",
        options: [
            { code: "U", name: "Unchanged (Sin Cambios)", desc: "El componente afectado y el componente vulnerable son el mismo." },
            { code: "C", name: "Changed (Cambiado)", desc: "El atacante puede vulnerar otros sistemas o recursos fuera de la frontera original." }
        ]
    },
    C: {
        name: "Confidentiality (C)",
        description: "Mide el impacto en la confidencialidad de la información gestionada por el sistema.",
        options: [
            { code: "N", name: "None (Ninguno)", value: 0.0, desc: "No hay pérdida de confidencialidad en absoluto." },
            { code: "L", name: "Low (Bajo)", value: 0.22, desc: "Acceso limitado a información no sensible o parcial." },
            { code: "H", name: "High (Alto)", value: 0.56, desc: "Acceso total a archivos sensibles o base de datos confidencial." }
        ]
    },
    I: {
        name: "Integrity (I)",
        description: "Mide el impacto en la integridad (modificación de datos) del sistema.",
        options: [
            { code: "N", name: "None (Ninguno)", value: 0.0, desc: "No hay modificación de datos no autorizada." },
            { code: "L", name: "Low (Bajo)", value: 0.22, desc: "Modificaciones limitadas que no afectan la operación principal." },
            { code: "H", name: "High (Alto)", value: 0.56, desc: "Control total o alteración masiva de la información del sistema." }
        ]
    },
    A: {
        name: "Availability (A)",
        description: "Mide el impacto en la disponibilidad (interrupción de servicios) del sistema.",
        options: [
            { code: "N", name: "None (Ninguno)", value: 0.0, desc: "No hay denegación de servicio o degradación." },
            { code: "L", name: "Low (Bajo)", value: 0.22, desc: "Pérdida parcial o temporal de rendimiento, sin interrupción total." },
            { code: "H", name: "High (Alto)", value: 0.56, desc: "Apagado total del sistema, degradación crítica de servicios." }
        ]
    }
};

const caseJustifications = {
    AV: { selection: "N", text: "La vulnerabilidad se explota de forma remota, interactuando a través de los puertos de red del servicio expuesto." },
    AC: { selection: "L", text: "No se requiere evadir protecciones especiales de aleatoriedad o condiciones externas para consolidar el ataque." },
    PR: { selection: "H", text: "Solo usuarios con roles administrativos de alto nivel o bypass maestro del sistema pueden detonar la falla." },
    UI: { selection: "N", text: "El ataque se ejecuta directamente por el sistema afectado sin requerir clics ni acciones del usuario víctima." },
    S: { selection: "U", text: "La falla se limita al ámbito lógico de almacenamiento del componente de software afectado, sin saltar a sistemas anfitriones." },
    C: { selection: "L", text: "El impacto en la privacidad es limitado; el atacante solo extrae registros aislados y metadatos no críticos." },
    I: { selection: "L", text: "Las modificaciones de archivos permitidas por la falla son superficiales y no alteran la base de datos central de transacciones." },
    A: { selection: "L", text: "La degradación del servicio es leve y temporal, sin congelar el servidor ni tumbar los demonios de red principales." }
};

const qaData = [
    {
        id: "A",
        question: "¿Por qué, a pesar de requerir privilegios elevados, la vulnerabilidad sigue siendo relevante?",
        answer: "La vulnerabilidad continúa siendo relevante porque, aunque el atacante necesita privilegios elevados para explotarla, una vez obtenidos dichos privilegios puede comprometer información, modificar datos o afectar servicios internos del sistema. En entornos corporativos, un atacante puede obtener privilegios mediante robo de credenciales, ataques internos o escalamiento previo, por lo que la vulnerabilidad representa un riesgo real para la organización."
    },
    {
        id: "B",
        question: "¿Qué tipo de atacante podría explotarla?",
        answer: "Podría ser explotada principalmente por un atacante interno, un administrador malicioso o un ciberdelincuente que previamente haya comprometido una cuenta con privilegios elevados. También podría aprovecharla un atacante externo que haya logrado acceso administrativo mediante phishing, robo de credenciales o escalamiento de privilegios."
    },
    {
        id: "C",
        question: "¿Qué significa que el impacto sea bajo en las tres dimensiones?",
        answer: "Significa que la vulnerabilidad produce afectaciones limitadas en la confidencialidad, integridad y disponibilidad del sistema. La información comprometida sería parcial o poco sensible, las modificaciones realizadas serían reducidas y el impacto sobre la operación o disponibilidad del servicio sería mínimo, sin causar una interrupción crítica de los sistemas."
    }
];

const CvssCalculator = () => {
    const [calcMode, setCalcMode] = useState('case'); // 'case' or 'free'
    const [selectedMetrics, setSelectedMetrics] = useState({
        AV: 'N', AC: 'L', PR: 'H', UI: 'N', S: 'U', C: 'L', I: 'L', A: 'L'
    });
    const [selectedQA, setSelectedQA] = useState(null);

    // Apply Case Study variables when mode is set to 'case'
    useEffect(() => {
        if (calcMode === 'case') {
            setSelectedMetrics({
                AV: 'N', AC: 'L', PR: 'H', UI: 'N', S: 'U', C: 'L', I: 'L', A: 'L'
            });
        }
    }, [calcMode]);

    const handleMetricChange = (metricKey, optionCode) => {
        if (calcMode === 'case') return; // Locked in case study mode
        setSelectedMetrics(prev => ({
            ...prev,
            [metricKey]: optionCode
        }));
    };

    const getPRValue = (code, scopeCode) => {
        if (code === "N") return 0.85;
        if (code === "L") return scopeCode === "C" ? 0.68 : 0.62;
        if (code === "H") return scopeCode === "C" ? 0.50 : 0.27;
        return 0;
    };

    const runCalculation = () => {
        const { AV, AC, PR, UI, S, C, I, A } = selectedMetrics;
        
        const avVal = metricsDefinition.AV.options.find(o => o.code === AV).value;
        const acVal = metricsDefinition.AC.options.find(o => o.code === AC).value;
        const prVal = getPRValue(PR, S);
        const uiVal = metricsDefinition.UI.options.find(o => o.code === UI).value;
        
        const cVal = metricsDefinition.C.options.find(o => o.code === C).value;
        const iVal = metricsDefinition.I.options.find(o => o.code === I).value;
        const aVal = metricsDefinition.A.options.find(o => o.code === A).value;
        
        const exploitability = 8.22 * avVal * acVal * prVal * uiVal;
        const iss = 1 - ((1 - cVal) * (1 - iVal) * (1 - aVal));
        
        let impact = 0;
        if (S === "U") {
            impact = 6.42 * iss;
        } else {
            impact = 7.52 * (iss - 0.029) - 3.25 * Math.pow((iss - 0.029), 15);
        }
        
        let baseScore = 0;
        if (impact > 0) {
            if (S === "U") {
                baseScore = Math.min((impact + exploitability), 10);
            } else {
                baseScore = Math.min(1.08 * (impact + exploitability), 10);
            }
        }
        
        const roundup = (val) => {
            const value = Math.round(val * 100000) / 100000;
            const integerPart = Math.floor(value * 10);
            const decimalPart = (value * 10) - integerPart;
            if (decimalPart > 0.00001) {
                return (integerPart + 1) / 10;
            }
            return integerPart / 10;
        };
        
        const finalScore = baseScore === 0 ? 0 : roundup(baseScore);
        
        let severity = "Baja";
        let colorClass = "text-green-400 border-green-500/30 bg-green-500/10";
        if (finalScore === 0) {
            severity = "Informativa";
            colorClass = "text-gray-400 border-gray-500/30 bg-gray-500/10";
        } else if (finalScore >= 0.1 && finalScore <= 3.9) {
            severity = "Baja";
            colorClass = "text-green-400 border-green-500/30 bg-green-500/10";
        } else if (finalScore >= 4.0 && finalScore <= 6.9) {
            severity = "Media";
            colorClass = "text-yellow-400 border-yellow-500/30 bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.1)]";
        } else if (finalScore >= 7.0 && finalScore <= 8.9) {
            severity = "Alta";
            colorClass = "text-orange-400 border-orange-500/30 bg-orange-500/10 shadow-[0_0_15px_rgba(251,146,60,0.15)] animate-pulse";
        } else if (finalScore >= 9.0 && finalScore <= 10.0) {
            severity = "Crítica";
            colorClass = "text-red-400 border-red-500/30 bg-red-500/10 shadow-[0_0_20px_rgba(239,68,68,0.2)] animate-pulse font-bold";
        }
        
        const vectorStr = `CVSS:3.1/AV:${AV}/AC:${AC}/PR:${PR}/UI:${UI}/S:${S}/C:${C}/I:${I}/A:${A}`;
        
        return {
            score: finalScore.toFixed(1),
            severity,
            colorClass,
            exploitability: exploitability.toFixed(2),
            impact: impact.toFixed(2),
            vector: vectorStr
        };
    };

    const results = runCalculation();
    const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
    const originalPdfUrl = `${baseUrl}parcial3/act17-Equipo1.pdf`;

    const handleExportPDF = () => {
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        const accentColor = [234, 179, 8]; // Amber theme for Medium (4.7) severity
        
        // Custom Header layout
        doc.setFillColor(6, 10, 20);
        doc.rect(0, 0, 210, 48, 'F');
        
        // Document Title
        doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
        doc.setFont('courier', 'bold');
        doc.setFontSize(14);
        doc.text('EVALUACION DE VULNERABILIDADES CON CVSS v3.1', 15, 14);
        
        doc.setTextColor(160, 160, 160);
        doc.setFontSize(8.5);
        doc.setFont('courier', 'normal');
        doc.text('UNIVERSIDAD POLITECNICA DE SAN LUIS POTOSI (UPSLP)', 15, 20);
        doc.text('MATERIA: CNO V - SEGURIDAD INFORMATICA | EVALUACION DE RIESGOS', 15, 24);
        doc.text('EQUIPO 1: Aguilar J. | Jasso P. | Moreno G. | Palomo A. | Zarate D. | Zorrilla E.', 15, 28);
        doc.text('AUDITOR DE SEGURIDAD GENERAL: GISELA GERALDINE MORENO SOLIS (176522)', 15, 32);
        doc.text(`FECHA DE EMISION: ${new Date().toLocaleDateString()} | METODO: ESTANDAR CVSS v3.1`, 15, 36);
        doc.text('DOCUMENTO INTEGRADO EN PORTAFOLIO WEB DE SEGURIDAD', 15, 40);
        
        // Line break
        doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
        doc.setLineWidth(0.8);
        doc.line(0, 48, 210, 48);

        // Section: CVSS Calculator Output
        doc.setTextColor(20, 20, 20); 
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.text('1. VECTOR DE SEVERIDAD Y PUNTUACION BASE', 15, 58);
        
        doc.setFontSize(9.5);
        doc.setFont('courier', 'bold');
        doc.setTextColor(100, 100, 100);
        doc.text(`VECTOR: ${results.vector}`, 15, 66);
        
        doc.setFillColor(245, 245, 245);
        doc.rect(15, 71, 180, 22, 'F');
        doc.setDrawColor(220, 220, 220);
        doc.setLineWidth(0.3);
        doc.rect(15, 71, 180, 22, 'S');
        
        doc.setTextColor(30, 41, 59);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.text('Puntuacion Base:', 20, 78);
        doc.setFontSize(16);
        doc.setTextColor(217, 119, 6); // Orange-ish
        doc.text(`${results.score}`, 20, 88);
        
        doc.setTextColor(30, 41, 59);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.text('Clasificacion de Gravedad:', 70, 78);
        doc.setFontSize(11);
        doc.setTextColor(180, 83, 9);
        doc.text(`${results.severity.toUpperCase()} (Base)`, 70, 86);
        
        doc.setTextColor(100, 100, 100);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.text(`Sub-Metricas Calculadas: Impacto=${results.impact} | Explotabilidad=${results.exploitability}`, 115, 86);

        // Section: Metrics Justifications
        doc.setTextColor(20, 20, 20); 
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.text('2. JUSTIFICACIONES DE PARAMETROS (CASO ESTUDIO)', 15, 105);

        let currentY = 113;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        
        const justifications = [
            { title: "Attack Vector (AV:N - Network)", desc: caseJustifications.AV.text },
            { title: "Attack Complexity (AC:L - Low)", desc: caseJustifications.AC.text },
            { title: "Privileges Required (PR:H - High)", desc: caseJustifications.PR.text },
            { title: "User Interaction (UI:N - None)", desc: caseJustifications.UI.text },
            { title: "Scope (S:U - Unchanged)", desc: caseJustifications.S.text },
            { title: "Confidentiality (C:L - Low)", desc: caseJustifications.C.text },
            { title: "Integrity (I:L - Low)", desc: caseJustifications.I.text },
            { title: "Availability (A:L - Low)", desc: caseJustifications.A.text }
        ];

        justifications.forEach((item) => {
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(15, 23, 42);
            doc.text(`- ${item.title}:`, 15, currentY);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(71, 85, 105);
            doc.text(item.desc, 65, currentY);
            currentY += 6.5;
        });

        // Section: QA Technical answers
        doc.setTextColor(20, 20, 20); 
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.text('3. INTERPRETACION TECNICA (EVALUACION)', 15, 175);

        let qaY = 183;
        qaData.forEach((qa) => {
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(15, 23, 42);
            const qLines = doc.splitTextToSize(`${qa.id}) ${qa.question}`, 180);
            doc.text(qLines, 15, qaY);
            qaY += (qLines.length * 4.5);
            
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(71, 85, 105);
            doc.setFontSize(8);
            const aLines = doc.splitTextToSize(qa.answer, 180);
            doc.text(aLines, 15, qaY);
            qaY += (aLines.length * 4) + 3;
            doc.setFontSize(8.5);
        });

        // Footer signatures
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.4);
        doc.line(15, 260, 90, 260);
        doc.line(120, 260, 195, 260);
        
        doc.setFont('courier', 'normal');
        doc.setFontSize(7.5);
        doc.setTextColor(100, 100, 100);
        doc.text('Gisela G. Moreno Solis', 15, 264);
        doc.text('FIRMA AUDITOR (MATRICULA: 176522)', 15, 267);
        
        doc.text('Mtro. Servando Lopez Contreras', 120, 264);
        doc.text('VO.BO. DOCENTE DE SEGURIDAD', 120, 267);

        doc.save(`reporte-cvss-v3.1-act17.pdf`);
    };

    return (
        <div className="flex flex-col gap-8">
            
            {/* 1. Academic Header / Team & Institution Block */}
            <div className="bg-[#070b16] border border-cyan-500/30 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    
                    {/* Left: Academic Info */}
                    <div className="lg:col-span-8 space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center gap-3">
                            <span className="px-3 py-1 text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded">
                                INST: UPSLP
                            </span>
                            <span className="px-3 py-1 text-[10px] font-mono font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded">
                                MATERIA: CNO V - SEGURIDAD INFORMÁTICA
                            </span>
                            <span className="px-3 py-1 text-[10px] font-mono font-bold text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 rounded">
                                ACT17: EVALUACIÓN CVSS V3.1
                            </span>
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-mono font-black text-white tracking-tight uppercase">
                            Universidad Politécnica de San Luis Potosí
                        </h2>
                        
                        <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                            Esta sección presenta el análisis y desglose de la <strong>Actividad 17: Evaluación de Vulnerabilidades con CVSS v3.1</strong>. A través del calculador dinámico inferior, se clasifica de forma precisa la severidad de las fallas, se justifica el vector asignado por el equipo y se da respuesta detallada al marco de preguntas forenses.
                        </p>

                        {/* Team Grid */}
                        <div className="border-t border-gray-900 pt-4 mt-6">
                            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 mb-3">
                                <FaUsers /> MIEMBROS DE EQUIPO 1
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                {[
                                    { name: "Moreno Solís Gisela Geraldine", id: "176522", role: "Auditor Líder" },
                                    { name: "Aguilar Espinoza Juan Diego", id: "173877", role: "Analista de Riesgo" },
                                    { name: "Jasso Dávila Pedro Damián", id: "176658", role: "Ing. Forense" },
                                    { name: "Palomo Cerdá José Armando", id: "17593", role: "Especialista OSINT" },
                                    { name: "Zarate Domínguez David", id: "175842", role: "Pentester Principal" },
                                    { name: "Zorrilla Rivera Eduardo", id: "175877", role: "Asesor de Cumplimiento" }
                                ].map((member, idx) => (
                                    <div key={idx} className="bg-black/40 border border-gray-800/80 rounded-xl p-3 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300">
                                        <div className="font-mono text-xs text-white font-bold tracking-tight truncate">
                                            {member.name}
                                        </div>
                                        <div className="flex justify-between items-center mt-2 text-[10px] font-mono">
                                            <span className="text-gray-500">{member.id}</span>
                                            <span className="text-cyan-400/80 font-bold px-1.5 py-0.5 rounded bg-cyan-500/5 border border-cyan-500/10">
                                                {member.role}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Direct Document visualization section */}
                    <div className="lg:col-span-4 bg-[#0a1022]/80 border border-cyan-500/20 p-5 rounded-2xl flex flex-col justify-between h-full gap-4 text-center lg:text-left">
                        <div>
                            <div className="flex items-center justify-center lg:justify-start gap-2 text-cyan-400 mb-2">
                                <FaFilePdf className="text-xl" />
                                <span className="font-mono text-xs font-bold uppercase tracking-wider">EXPEDIENTE ORIGINAL</span>
                            </div>
                            <h4 className="text-white font-mono text-sm font-bold">act17-Equipo1.pdf</h4>
                            <p className="text-gray-500 text-[11px] font-mono mt-1.5 leading-relaxed">
                                Documento académico original enviado por el equipo con la redacción teórica, justificaciones de cálculo y firmas formales.
                            </p>
                        </div>
                        <a
                            href={`${baseUrl}#/visor-pdf/17`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2.5 w-full py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 font-mono text-xs font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.05)] active:scale-[0.98] text-center animate-pulse"
                        >
                            <FaEye className="text-sm" />
                            <span>VISUALIZAR EXPEDIENTE</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* 2. Interactive CVSS Calculator HUD */}
            <div className="bg-[#050913]/90 border border-cyan-500/20 rounded-3xl overflow-hidden shadow-2xl relative">
                
                {/* HUD Header */}
                <div className="bg-[#081222]/90 border-b border-cyan-500/10 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)] animate-pulse">
                            <FaSlidersH />
                        </span>
                        <div>
                            <h4 className="text-white font-mono text-xs font-bold tracking-widest uppercase">
                                CVSS_v3.1_DECISION_ENGINE
                            </h4>
                            <p className="text-[10px] text-cyan-400/80 font-mono tracking-wider flex items-center gap-1.5 mt-0.5">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                                LIVE THREAT AUDITOR ENGINE
                            </p>
                        </div>
                    </div>

                    {/* Mode selector */}
                    <div className="flex bg-black/40 border border-gray-800 p-1 rounded-lg">
                        <button
                            onClick={() => setCalcMode('case')}
                            className={`px-4 py-1.5 text-[10px] font-mono rounded transition-all whitespace-nowrap ${
                                calcMode === 'case'
                                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20 font-bold'
                                : 'text-gray-500 hover:text-gray-300'
                            }`}
                        >
                            CASO ESTUDIO (ACT17)
                        </button>
                        <button
                            onClick={() => setCalcMode('free')}
                            className={`px-4 py-1.5 text-[10px] font-mono rounded transition-all whitespace-nowrap ${
                                calcMode === 'free'
                                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20 font-bold'
                                : 'text-gray-500 hover:text-gray-300'
                            }`}
                        >
                            SIMULADOR LIBRE
                        </button>
                    </div>

                    {/* PDF Export button */}
                    <button
                        onClick={handleExportPDF}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 font-mono text-xs rounded-lg transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)] active:scale-95"
                    >
                        <FaFilePdf className="text-sm" />
                        <span>EXPORTAR ACTA (PDF)</span>
                    </button>
                </div>

                {/* Main HUD Body */}
                <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Left: Interactive Metric Controllers */}
                    <div className="lg:col-span-8 space-y-6">
                        
                        {calcMode === 'case' && (
                            <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-4 text-xs font-mono text-cyan-300 flex items-start gap-3">
                                <FaInfoCircle className="text-base flex-shrink-0 mt-0.5 animate-pulse" />
                                <div>
                                    <strong className="text-white block uppercase tracking-wider mb-0.5">MODO CASO ESTUDIO ACTIVO</strong>
                                    Los parámetros se encuentran prefijados y bloqueados según la evaluación final del Equipo 1 para la Actividad 17. Selecciona el "Simulador Libre" en la barra superior para explorar otras configuraciones del vector CVSS.
                                </div>
                            </div>
                        )}

                        <div className="space-y-5">
                            <h4 className="text-white font-mono text-xs font-bold uppercase tracking-widest border-b border-gray-900 pb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                                Métricas de Explotabilidad (Contexto del Ataque)
                            </h4>

                            {/* Attack Vector */}
                            <div className="bg-black/30 border border-gray-900 p-4 rounded-xl space-y-3">
                                <div className="flex justify-between items-start gap-2">
                                    <div>
                                        <span className="font-mono text-xs font-bold text-gray-200 block">{metricsDefinition.AV.name}</span>
                                        <p className="text-[10px] text-gray-500 leading-normal">{metricsDefinition.AV.description}</p>
                                    </div>
                                    <span className="px-2 py-0.5 text-[10px] font-mono text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 rounded">AV:{selectedMetrics.AV}</span>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                    {metricsDefinition.AV.options.map(opt => (
                                        <button
                                            key={opt.code}
                                            disabled={calcMode === 'case'}
                                            onClick={() => handleMetricChange('AV', opt.code)}
                                            className={`p-2.5 rounded-lg border text-left flex flex-col justify-between transition-all ${
                                                selectedMetrics.AV === opt.code
                                                ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300 font-bold'
                                                : calcMode === 'case'
                                                ? 'bg-transparent border-gray-950 text-gray-600 cursor-not-allowed'
                                                : 'bg-black/40 border-gray-900 text-gray-400 hover:border-gray-800'
                                            }`}
                                        >
                                            <span className="text-[10px] font-mono uppercase font-bold">{opt.name}</span>
                                            <span className="text-[9px] font-mono text-gray-500 block mt-1.5">Factor: {opt.value}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Attack Complexity */}
                            <div className="bg-black/30 border border-gray-900 p-4 rounded-xl space-y-3">
                                <div className="flex justify-between items-start gap-2">
                                    <div>
                                        <span className="font-mono text-xs font-bold text-gray-200 block">{metricsDefinition.AC.name}</span>
                                        <p className="text-[10px] text-gray-500 leading-normal">{metricsDefinition.AC.description}</p>
                                    </div>
                                    <span className="px-2 py-0.5 text-[10px] font-mono text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 rounded">AC:{selectedMetrics.AC}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {metricsDefinition.AC.options.map(opt => (
                                        <button
                                            key={opt.code}
                                            disabled={calcMode === 'case'}
                                            onClick={() => handleMetricChange('AC', opt.code)}
                                            className={`p-2.5 rounded-lg border text-left flex flex-col justify-between transition-all ${
                                                selectedMetrics.AC === opt.code
                                                ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300 font-bold'
                                                : calcMode === 'case'
                                                ? 'bg-transparent border-gray-950 text-gray-600 cursor-not-allowed'
                                                : 'bg-black/40 border-gray-900 text-gray-400 hover:border-gray-800'
                                            }`}
                                        >
                                            <span className="text-[10px] font-mono uppercase font-bold">{opt.name}</span>
                                            <span className="text-[9px] font-mono text-gray-500 block mt-1.5">Factor: {opt.value}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Privileges Required */}
                            <div className="bg-black/30 border border-gray-900 p-4 rounded-xl space-y-3">
                                <div className="flex justify-between items-start gap-2">
                                    <div>
                                        <span className="font-mono text-xs font-bold text-gray-200 block">{metricsDefinition.PR.name}</span>
                                        <p className="text-[10px] text-gray-500 leading-normal">{metricsDefinition.PR.description}</p>
                                    </div>
                                    <span className="px-2 py-0.5 text-[10px] font-mono text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 rounded">PR:{selectedMetrics.PR}</span>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    {metricsDefinition.PR.options.map(opt => {
                                        const val = getPRValue(opt.code, selectedMetrics.S);
                                        return (
                                            <button
                                                key={opt.code}
                                                disabled={calcMode === 'case'}
                                                onClick={() => handleMetricChange('PR', opt.code)}
                                                className={`p-2.5 rounded-lg border text-left flex flex-col justify-between transition-all ${
                                                    selectedMetrics.PR === opt.code
                                                    ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300 font-bold'
                                                    : calcMode === 'case'
                                                    ? 'bg-transparent border-gray-950 text-gray-600 cursor-not-allowed'
                                                    : 'bg-black/40 border-gray-900 text-gray-400 hover:border-gray-800'
                                                }`}
                                            >
                                                <span className="text-[10px] font-mono uppercase font-bold">{opt.name}</span>
                                                <span className="text-[9px] font-mono text-gray-500 block mt-1.5">Factor: {val}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* User Interaction */}
                            <div className="bg-black/30 border border-gray-900 p-4 rounded-xl space-y-3">
                                <div className="flex justify-between items-start gap-2">
                                    <div>
                                        <span className="font-mono text-xs font-bold text-gray-200 block">{metricsDefinition.UI.name}</span>
                                        <p className="text-[10px] text-gray-500 leading-normal">{metricsDefinition.UI.description}</p>
                                    </div>
                                    <span className="px-2 py-0.5 text-[10px] font-mono text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 rounded">UI:{selectedMetrics.UI}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {metricsDefinition.UI.options.map(opt => (
                                        <button
                                            key={opt.code}
                                            disabled={calcMode === 'case'}
                                            onClick={() => handleMetricChange('UI', opt.code)}
                                            className={`p-2.5 rounded-lg border text-left flex flex-col justify-between transition-all ${
                                                selectedMetrics.UI === opt.code
                                                ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300 font-bold'
                                                : calcMode === 'case'
                                                ? 'bg-transparent border-gray-950 text-gray-600 cursor-not-allowed'
                                                : 'bg-black/40 border-gray-900 text-gray-400 hover:border-gray-800'
                                            }`}
                                        >
                                            <span className="text-[10px] font-mono uppercase font-bold">{opt.name}</span>
                                            <span className="text-[9px] font-mono text-gray-500 block mt-1.5">Factor: {opt.value}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <h4 className="text-white font-mono text-xs font-bold uppercase tracking-widest border-b border-gray-900 pt-4 pb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                                Métrica de Alcance e Impacto (Cosecuencias del Ataque)
                            </h4>

                            {/* Scope */}
                            <div className="bg-black/30 border border-gray-900 p-4 rounded-xl space-y-3">
                                <div className="flex justify-between items-start gap-2">
                                    <div>
                                        <span className="font-mono text-xs font-bold text-gray-200 block">{metricsDefinition.S.name}</span>
                                        <p className="text-[10px] text-gray-500 leading-normal">{metricsDefinition.S.description}</p>
                                    </div>
                                    <span className="px-2 py-0.5 text-[10px] font-mono text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 rounded">S:{selectedMetrics.S}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {metricsDefinition.S.options.map(opt => (
                                        <button
                                            key={opt.code}
                                            disabled={calcMode === 'case'}
                                            onClick={() => handleMetricChange('S', opt.code)}
                                            className={`p-2.5 rounded-lg border text-left flex flex-col justify-between transition-all ${
                                                selectedMetrics.S === opt.code
                                                ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300 font-bold'
                                                : calcMode === 'case'
                                                ? 'bg-transparent border-gray-950 text-gray-600 cursor-not-allowed'
                                                : 'bg-black/40 border-gray-900 text-gray-400 hover:border-gray-800'
                                            }`}
                                        >
                                            <span className="text-[10px] font-mono uppercase font-bold">{opt.name}</span>
                                            <span className="text-[8px] font-mono text-gray-500 block mt-1.5">{opt.desc}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Confidentiality, Integrity, Availability Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                
                                {/* Confidentiality */}
                                <div className="bg-black/30 border border-gray-900 p-4 rounded-xl space-y-3">
                                    <div className="flex justify-between items-start">
                                        <span className="font-mono text-[11px] font-bold text-gray-200 block">C (Confidencialidad)</span>
                                        <span className="px-1.5 py-0.5 text-[9px] font-mono text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 rounded">C:{selectedMetrics.C}</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {metricsDefinition.C.options.map(opt => (
                                            <button
                                                key={opt.code}
                                                disabled={calcMode === 'case'}
                                                onClick={() => handleMetricChange('C', opt.code)}
                                                className={`p-2 rounded border text-left flex justify-between items-center transition-all ${
                                                    selectedMetrics.C === opt.code
                                                    ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300 font-bold'
                                                    : calcMode === 'case'
                                                    ? 'bg-transparent border-gray-950 text-gray-600 cursor-not-allowed'
                                                    : 'bg-black/40 border-gray-900 text-gray-400 hover:border-gray-800'
                                                }`}
                                            >
                                                <span className="text-[10px] font-mono font-bold">{opt.name}</span>
                                                <span className="text-[9px] font-mono text-gray-500">{opt.value.toFixed(2)}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Integrity */}
                                <div className="bg-black/30 border border-gray-900 p-4 rounded-xl space-y-3">
                                    <div className="flex justify-between items-start">
                                        <span className="font-mono text-[11px] font-bold text-gray-200 block">I (Integridad)</span>
                                        <span className="px-1.5 py-0.5 text-[9px] font-mono text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 rounded">I:{selectedMetrics.I}</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {metricsDefinition.I.options.map(opt => (
                                            <button
                                                key={opt.code}
                                                disabled={calcMode === 'case'}
                                                onClick={() => handleMetricChange('I', opt.code)}
                                                className={`p-2 rounded border text-left flex justify-between items-center transition-all ${
                                                    selectedMetrics.I === opt.code
                                                    ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300 font-bold'
                                                    : calcMode === 'case'
                                                    ? 'bg-transparent border-gray-950 text-gray-600 cursor-not-allowed'
                                                    : 'bg-black/40 border-gray-900 text-gray-400 hover:border-gray-800'
                                                }`}
                                            >
                                                <span className="text-[10px] font-mono font-bold">{opt.name}</span>
                                                <span className="text-[9px] font-mono text-gray-500">{opt.value.toFixed(2)}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Availability */}
                                <div className="bg-black/30 border border-gray-900 p-4 rounded-xl space-y-3">
                                    <div className="flex justify-between items-start">
                                        <span className="font-mono text-[11px] font-bold text-gray-200 block">A (Disponibilidad)</span>
                                        <span className="px-1.5 py-0.5 text-[9px] font-mono text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 rounded">A:{selectedMetrics.A}</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {metricsDefinition.A.options.map(opt => (
                                            <button
                                                key={opt.code}
                                                disabled={calcMode === 'case'}
                                                onClick={() => handleMetricChange('A', opt.code)}
                                                className={`p-2 rounded border text-left flex justify-between items-center transition-all ${
                                                    selectedMetrics.A === opt.code
                                                    ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300 font-bold'
                                                    : calcMode === 'case'
                                                    ? 'bg-transparent border-gray-950 text-gray-600 cursor-not-allowed'
                                                    : 'bg-black/40 border-gray-900 text-gray-400 hover:border-gray-800'
                                                }`}
                                            >
                                                <span className="text-[10px] font-mono font-bold">{opt.name}</span>
                                                <span className="text-[9px] font-mono text-gray-500">{opt.value.toFixed(2)}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* Right: Results Engine, Justifications & Q&A Panel */}
                    <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                        
                        {/* Score Diagnostic Box */}
                        <div className="bg-black/70 border border-cyan-500/10 rounded-2xl p-5 font-mono flex flex-col gap-4">
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold">Base severity meter</span>
                            
                            <div className="flex items-end justify-between">
                                <div className="space-y-1">
                                    <span className="text-[9px] text-cyan-400/80 uppercase">SCORE_CALCULATED</span>
                                    <h3 className="text-4xl text-white font-bold leading-none font-sans">
                                        {results.score}
                                    </h3>
                                </div>
                                <div className={`px-4 py-1.5 rounded-lg border font-bold text-xs uppercase ${results.colorClass}`}>
                                    {results.severity}
                                </div>
                            </div>

                            {/* Score progress bar */}
                            <div className="h-2 bg-gray-950 border border-gray-900 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full rounded-full transition-all duration-700 ${
                                        results.severity === 'Baja' ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' :
                                        results.severity === 'Media' ? 'bg-yellow-500 shadow-[0_0_8px_#eab308]' :
                                        results.severity === 'Alta' ? 'bg-orange-500 shadow-[0_0_8px_#f97316]' :
                                        'bg-red-600 shadow-[0_0_12px_#ef4444]'
                                    }`} 
                                    style={{ width: `${parseFloat(results.score) * 10}%` }}
                                />
                            </div>

                            <div className="border-t border-gray-900 pt-3.5 space-y-2 text-[10px] text-gray-400">
                                <div className="flex justify-between">
                                    <span>Vector de Vector:</span>
                                    <span className="text-cyan-400 text-right text-[8px] font-bold max-w-[200px] truncate">{results.vector}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Métrica de Explotabilidad:</span>
                                    <span className="text-white">{results.exploitability}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Métrica de Impacto:</span>
                                    <span className="text-white">{results.impact}</span>
                                </div>
                            </div>
                        </div>

                        {/* Parameter Justifications */}
                        <div className="bg-[#070d18] border border-cyan-500/10 rounded-2xl p-5 flex flex-col gap-4 flex-grow">
                            <h5 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2 border-b border-gray-900 pb-2">
                                <FaFileAlt />
                                <span>Justificaciones del Vector</span>
                            </h5>

                            <div className="space-y-4 overflow-y-auto max-h-[300px] pr-1.5 scrollbar-thin scrollbar-thumb-gray-900">
                                {Object.keys(caseJustifications).map((key) => {
                                    const details = metricsDefinition[key];
                                    const optCode = selectedMetrics[key];
                                    const opt = details.options.find(o => o.code === optCode);
                                    const defaultJust = caseJustifications[key];
                                    
                                    const isCaseMatch = optCode === defaultJust.selection;

                                    return (
                                        <div key={key} className="text-xs space-y-1 border-b border-gray-900/50 pb-2.5 last:border-b-0">
                                            <div className="flex justify-between items-center">
                                                <strong className="text-gray-300 font-mono text-[10px] uppercase">{details.name}</strong>
                                                <span className={`px-1.5 py-0.2 font-mono text-[8px] rounded ${
                                                    isCaseMatch 
                                                    ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400' 
                                                    : 'bg-amber-500/10 border border-amber-500/30 text-amber-400'
                                                }`}>
                                                    {key}:{optCode}
                                                </span>
                                            </div>
                                            <p className="text-[10px] text-gray-500 italic">
                                                Seleccionado: "{opt?.name || opt?.code}"
                                            </p>
                                            <p className="text-[10px] text-gray-400 font-mono leading-relaxed bg-black/20 p-2 rounded border border-gray-950 mt-1">
                                                {isCaseMatch 
                                                    ? defaultJust.text 
                                                    : "Simulación libre: El cálculo y severidad de este parámetro se actualiza en tiempo real de acuerdo a la matriz base de CVSS."
                                                }
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>

                </div>

                {/* Interactive Status Bar at the Bottom */}
                <div className="border-t border-gray-900 bg-black/40 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-gray-500">
                    <div className="flex items-center gap-2">
                        <span>CALCULATOR: CVSS v3.1 STANDARDS VALIDATED</span>
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span>AUDIT_CLEARANCE_LVL_5</span>
                        <FaLock className="text-cyan-500" />
                    </div>
                </div>

            </div>

            {/* 3. QA Panel: Technical evaluation answers */}
            <div className="bg-[#050913]/90 border border-cyan-500/20 rounded-3xl p-6 shadow-2xl relative">
                <div className="flex items-center justify-between border-b border-gray-900 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                            <FaTerminal />
                        </span>
                        <div>
                            <h4 className="text-white font-mono text-xs font-bold tracking-widest uppercase">
                                CVSS_INTERPRETATION_DIAGNOSTICS
                            </h4>
                            <p className="text-[9px] text-gray-500 font-mono tracking-wider">
                                DECODED QUESTIONS FROM FORENSIC FILE ACT17
                            </p>
                        </div>
                    </div>
                    <span className="text-[9px] font-mono text-gray-500 tracking-widest uppercase hidden md:inline">
                        Haz clic en una pregunta para decodificar
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Left: Questions list */}
                    <div className="lg:col-span-5 space-y-3">
                        {qaData.map((qa, index) => (
                            <button
                                key={qa.id}
                                onClick={() => setSelectedQA(index)}
                                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-4 hover:bg-white/5 ${
                                    selectedQA === index
                                    ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                                    : 'bg-black/30 border-gray-900 text-gray-400'
                                }`}
                            >
                                <span className="font-mono text-xs font-bold text-cyan-500 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded flex-shrink-0">
                                    Q_0{qa.id}
                                </span>
                                <div className="space-y-1">
                                    <span className="text-white font-mono text-[11px] block font-bold leading-tight">
                                        {qa.question}
                                    </span>
                                    <span className="text-[8px] font-mono text-gray-600 uppercase tracking-wider block font-bold">
                                        {selectedQA === index ? '● DECODIFICANDO EN PANTALLA' : '○ CLIC PARA ANALIZAR'}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right: Decoded detailed answer card */}
                    <div className="lg:col-span-7 flex">
                        <AnimatePresence mode="wait">
                            {selectedQA !== null ? (
                                <motion.div
                                    key={selectedQA}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-black/40 border border-gray-900 rounded-2xl p-6 flex flex-col justify-between w-full relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[50px] rounded-full pointer-events-none" />
                                    
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-[9px] font-mono border-b border-gray-900 pb-3">
                                            <span className="text-gray-500 uppercase tracking-widest">DIAGNOSTICO_RESPUESTA // Q_0{qaData[selectedQA].id}</span>
                                            <span className="text-green-400 font-bold flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                                                ANALYSIS_NOMINAL
                                            </span>
                                        </div>
                                        
                                        <div className="space-y-3">
                                            <strong className="text-white font-mono text-xs block leading-tight">
                                                {qaData[selectedQA].question}
                                            </strong>
                                            
                                            <p className="text-gray-300 text-xs leading-relaxed font-mono">
                                                {qaData[selectedQA].answer}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-900 pt-4 mt-6 flex justify-between items-center text-[9px] font-mono text-gray-500">
                                        <span>MARCO: CVSS v3.1 INTERPRETACIÓN TÉCNICA</span>
                                        <span className="flex items-center gap-1">
                                            <FaCertificate className="text-cyan-500" />
                                            EVALUACIÓN AUTORIZADA
                                        </span>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="bg-black/20 border border-dashed border-gray-900 rounded-2xl p-8 flex flex-col items-center justify-center text-center w-full text-gray-600 font-mono text-xs">
                                    <FaTerminal className="text-3xl text-gray-800 mb-3 animate-pulse" />
                                    <span>CONEXIÓN LISTA PARA ANÁLISIS FORENSE</span>
                                    <p className="text-[10px] text-gray-700 mt-1.5 max-w-xs">
                                        Selecciona una de las preguntas de interpretación de la columna izquierda para cargar la justificación oficial del equipo.
                                    </p>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default CvssCalculator;

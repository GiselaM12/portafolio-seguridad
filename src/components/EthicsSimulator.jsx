import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FaShieldAlt, FaInfoCircle, FaCheckCircle, FaTimesCircle, 
    FaFilePdf, FaTerminal, FaBalanceScale, FaGavel, FaLock, 
    FaUserSecret, FaRegFileAlt, FaSkullCrossbones,
    FaArrowRight, FaCodeBranch, FaExclamationTriangle, FaEye, FaUsers
} from 'react-icons/fa';
import { jsPDF } from 'jspdf';

const scenariosData = [
    {
        id: 1,
        title: "Escenario 01: Acceso No Autorizado Interno",
        description: "Un especialista en ciberseguridad corporativa detecta en los logs de auditoría que un compañero de TI accedió a la bandeja de entrada de correos privados del Director General (CEO) utilizando credenciales administrativas de bypass, alegando posteriormente que buscaba interceptar fugas de información interna de forma proactiva.",
        technicalDetails: "Vector de acceso: Puerto IMAP/S de producción (IP origen: 10.128.45.12). Protocolo vulnerado: Autenticación LDAP. logs de auditoría confirman la visualización de 14 hilos de correos confidenciales durante un lapso de 45 minutos sin ticket de soporte autorizado o requerimiento formal de auditoría.",
        dilema: "Decidir entre avalar un acceso no autorizado a información confidencial justificándolo en una presunta intención protectora y preventiva (seguridad reactiva informal), o aplicar estrictamente las políticas de confidencialidad y control de accesos reportando formalmente el incidente para sancionar la transgresión de la privacidad.",
        ethicalAction: {
            title: "Reportar y Auditar el Acceso de Forma Oficial",
            description: "Documentar la evidencia de los logs de forma forense, generar una alerta de seguridad formal en la consola SIEM y transferir el caso al comité de cumplimiento legal, recursos humanos y directores afectados, recomendando revocar los privilegios del analista infractor inmediatamente.",
            cia: { c: 100, i: 100, a: 100 },
            moralFrameworks: { util: 95, rights: 100, commonGood: 95 },
            violatedCommandments: [],
            respectedCommandments: [
                "No utilizarás una computadora para dañar a otros",
                "Siempre utilizarás las computadoras respetando los derechos de los demás",
                "Usarás la tecnología con responsabilidad y ética"
            ],
            crimeClassification: "Ninguno (Cumplimiento de políticas y reporte responsable bajo debido proceso)",
            legalImpact: "Protege la privacidad corporativa, fortalece la confianza laboral interna y cumple con los controles de acceso de la norma ISO 27001 (A.9) y la directiva de gobernanza corporativa."
        },
        unethicalAction: {
            title: "Encubrir o Justificar la Acción Informal",
            description: "Ignorar la alerta en los logs de seguridad o redactar un reporte informal que justifique el acceso del compañero argumentando su 'intención preventiva'. Esto permite que continúe el husmeo informal y sin supervisión de cuentas confidenciales.",
            cia: { c: 20, i: 80, a: 90 },
            moralFrameworks: { util: 15, rights: 0, commonGood: 10 },
            violatedCommandments: [
                "No utilizarás una computadora para dañar a otros",
                "No interferirás con el trabajo informático de otras personas",
                "No husmearás en archivos ajenos",
                "No utilizarás recursos informáticos sin autorización",
                "Siempre utilizarás las computadoras respetando los derechos de los demás"
            ],
            respectedCommandments: [],
            crimeClassification: "Cómplice o encubrimiento de Acceso Ilícito a Sistemas y Violación de la Privacidad Digital (Art. 211 bis 1, Código Penal Federal)",
            legalImpact: "Transgresión grave de la confidencialidad. Incumple con las directrices de la ISO 27001 (A.12.6.1) y expone a la empresa a demandas penales por violación de datos personales bajo el GDPR/LFPDPPP."
        }
    },
    {
        id: 2,
        title: "Escenario 02: Vulnerabilidad Crítica No Reportada",
        description: "Durante una auditoría de intrusión autorizada (Pentesting) a una plataforma de banca electrónica, se localiza una vulnerabilidad crítica del tipo race condition en el endpoint de transferencias. La vulnerabilidad permite extraer y transferir capital hacia cuentas de prueba de forma ilimitada sin dejar alertas inmediatas en el balance financiero. El contrato final aún no ha sido firmado por el cliente.",
        technicalDetails: "Endpoint vulnerable: `/api/v1/accounts/transfer` (Método POST). Gravedad técnica: CVSS 10.0 (Crítica). La falla permite la inyección de peticiones concurrentes para duplicar el retiro de fondos de una cuenta antes de actualizar su balance local en la base de datos distribuida.",
        dilema: "Balancear el beneficio egoísta (explotar la vulnerabilidad de manera ilícita para beneficio financiero personal, u ocultar temporalmente la falla crítica para usarla como palanca de negociación comercial) frente al deber ético y profesional de reportar de forma transparente el hallazgo crítico al cliente para que aplique parches de mitigación urgentes.",
        ethicalAction: {
            title: "Reporte de Divulgación Responsable Inmediato",
            description: "Suspender las pruebas intrusivas en ese endpoint específico, redactar una hoja de mitigación de emergencia (Workaround) y contactar al director de TI del cliente vía canales de comunicación cifrados para coordinar el parcheo antes de que sea explotado externamente.",
            cia: { c: 100, i: 100, a: 100 },
            moralFrameworks: { util: 98, rights: 100, commonGood: 98 },
            violatedCommandments: [],
            respectedCommandments: [
                "No utilizarás una computadora para robar",
                "Pensarás en las consecuencias sociales de los sistemas que desarrolles o evalúes",
                "Usarás la tecnología con responsabilidad y ética"
            ],
            crimeClassification: "Ninguno (Divulgación responsable y auditoría autorizada bajo contrato ético)",
            legalImpact: "Establece altos estándares de integridad profesional, previene pérdidas financieras masivas y cumple con el principio de debida diligencia de marcos normativos como NIST CSF y OWASP."
        },
        unethicalAction: {
            title: "Explotar u Ocultar el Fallo Financiero",
            description: "Aprovechar la vulnerabilidad de concurrencia para transferir capital a cuentas fantasmas antes de que el cliente note el fallo, o retrasar el reporte de seguridad en el informe final para presionar económicamente a la firma del contrato.",
            cia: { c: 10, i: 10, a: 50 },
            moralFrameworks: { util: 5, rights: 0, commonGood: 5 },
            violatedCommandments: [
                "No utilizarás una computadora para robar",
                "No utilizarás recursos informáticos para cometer fraude",
                "No te apropiarás del trabajo o recursos ajenos",
                "No usarás tecnología para causar daño"
            ],
            respectedCommandments: [],
            crimeClassification: "Fraude Informático, Acceso Ilícito a Sistemas y Robo de Activos Financieros (Art. 211 bis 8, Código Penal Federal)",
            legalImpact: "Delito penal grave que conlleva de 3 a 30 años de prisión bajo las leyes de instituciones de crédito. Infracción directa a leyes financieras e inhabilitación permanente de la licencia profesional."
        }
    },
    {
        id: 3,
        title: "Escenario 03: Uso de Herramientas OSINT",
        description: "Se detecta una fuga de propiedad intelectual crítica en el repositorio corporativo. Para identificar al responsable, el director de seguridad ordena utilizar herramientas OSINT de recolección de metadatos e información personal (redes sociales públicas, repositorios privados, foros, historial de IPs de registros) sobre un empleado sospechoso, utilizando la información recopilada para chantajearlo emocionalmente en un interrogatorio informal para forzar una confesión.",
        technicalDetails: "Herramientas utilizadas: Metadatos EXIF de fotos públicas en redes sociales, de-anonimization de cuentas de GitHub personales y perfiles de conducta psicológicos fuera del alcance corporativo.",
        dilema: "Decidir si el fin legítimo de mitigar la fuga de propiedad intelectual y proteger los activos industriales de la empresa justifica la utilización de métodos invasivos, acoso psicológico y extorsión personal basados en datos de fuentes abiertas.",
        ethicalAction: {
            title: "Investigar bajo el Debido Proceso y Protección de Privacidad",
            description: "Utilizar herramientas de auditoría OSINT exclusivamente para recopilar evidencia técnica y metadatos asociados a la fuga. Presentar las pruebas al departamento legal y recursos humanos para iniciar una entrevista formal de cumplimiento, garantizando los derechos laborales del empleado.",
            cia: { c: 100, i: 100, a: 100 },
            moralFrameworks: { util: 90, rights: 100, commonGood: 95 },
            violatedCommandments: [],
            respectedCommandments: [
                "Siempre utilizarás las computadoras respetando los derechos y dignidad de los demás",
                "Pensarás en las consecuencias sociales de tus acciones digitales"
            ],
            crimeClassification: "Ninguno (Investigación forense técnica apegada a la ley y derechos humanos)",
            legalImpact: "Asegura la validez y admisibilidad de las evidencias recolectadas en juicios laborales y protege a la empresa de demandas corporativas o reclamaciones de acoso."
        },
        unethicalAction: {
            title: "Coacción, Perfilado Invasivo y Chantaje Informativo",
            description: "Construir un perfil psicológico profundo con la información privada del empleado (deudas bancarias, relaciones familiares, gustos personales) e intimidarlo en una sala privada, amenazándolo con arruinar su vida personal si no firma una renuncia voluntaria inmediata.",
            cia: { c: 60, i: 90, a: 100 },
            moralFrameworks: { util: 20, rights: 10, commonGood: 15 },
            violatedCommandments: [
                "No utilizarás tecnología para dañar o acosar a otros",
                "No invadirás la privacidad de las personas",
                "No utilizarás información digital para perjudicar la dignidad humana"
            ],
            respectedCommandments: [],
            crimeClassification: "Acoso Laboral, Extorsión, Intimidación y Uso Ilícito de Información Privada (LFPDPPP y Código Penal Federal)",
            legalImpact: "Invalida legalmente la evidencia bajo la doctrina de los frutos del árbol envenenado. Expone a los ejecutivos a denuncias penales individuales por extorsión, acoso y amenazas."
        }
    }
];

const EthicsSimulator = () => {
    const [selectedScenarioId, setSelectedScenarioId] = useState(1);
    const [isEthical, setIsEthical] = useState(true);
    
    // Terminal Shell State
    const [terminalHistory, setTerminalHistory] = useState([]);
    const [terminalInput, setTerminalInput] = useState('');
    const terminalContainerRef = useRef(null);

    const scenario = scenariosData.find(s => s.id === selectedScenarioId);
    const currentAction = isEthical ? scenario.ethicalAction : scenario.unethicalAction;

    // Trigger initial terminal logs on mount/scenario change
    useEffect(() => {
        const welcomeLogs = [
            `[SYS] SECURE SECOPS SHELL INITIALIZED.`,
            `[SYS] AUDITOR: G. Moreno Solis | EQUIPO 1 (CNO V - UPSLP)`,
            `[SYS] SCENARIO TARGET: ESCENARIO 0${scenario.id} - ${scenario.title.split(': ')[1]}`,
            `[SYS] Status check: ${isEthical ? 'COMPLIANT (NOMINAL)' : 'VIOLATION (ALERT)'}`,
            `[SYS] Type 'help' for console controls or click the decision buttons.`,
            `guest@seops:~/audit$ `
        ];
        setTerminalHistory(welcomeLogs);
    }, [selectedScenarioId]);

    // Handle dynamically outputting logs on ethical posture change
    const logPostures = (ethicalPosture) => {
        const status = ethicalPosture ? 'ETHICAL_COMPLIANCE' : 'SECURITY_VIOLATION';
        const action = ethicalPosture ? scenario.ethicalAction : scenario.unethicalAction;
        const newLogs = [
            `guest@seops:~/audit$ decide ${ethicalPosture ? 'ethical' : 'unethical'}`,
            `[AUDIT] Action: "${action.title}"`,
            `[AUDIT] CIA Impact Matrix: C=${action.cia.c}%, I=${action.cia.i}%, A=${action.cia.a}%`,
            `[AUDIT] Moral Framework Assessment: Utilitarianism=${action.moralFrameworks.util}/100, Rights=${action.moralFrameworks.rights}/100`,
            `[AUDIT] Compliance Status: ${ethicalPosture ? 'OK - SECURE OPERATION' : 'CRITICAL WARNING - ETHICAL VIOLATIONS DETECTED'}`,
            `[AUDIT] Crime Classification: ${action.crimeClassification}`,
            `[SYS] Posture updated to: [${status}]`,
            `guest@seops:~/audit$ `
        ];
        setTerminalHistory(prev => [...prev.slice(0, -1), ...newLogs]);
    };

    // Scroll terminal to bottom
    useEffect(() => {
        if (terminalContainerRef.current) {
            terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
        }
    }, [terminalHistory]);

    // Handle terminal input commands
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const rawCmd = terminalInput.trim();
            const cmd = rawCmd.toLowerCase();
            let response = [];

            if (cmd) {
                response.push(`guest@seops:~/audit$ ${rawCmd}`);
                
                if (cmd === 'help') {
                    response.push(
                        `Available commands:`,
                        `  help                           - Show this help directory.`,
                        `  status                         - Print current CIA metrics and ethical scores.`,
                        `  decide [ethical | unethical]   - Toggle auditor decision posture.`,
                        `  cat scenario.txt               - Display full context text of the scenario.`,
                        `  export                         - Trigger PDF formal audit report download.`,
                        `  clear                          - Clear terminal history.`,
                        `  switch [1 | 2 | 3]             - Switch active audit scenario.`
                    );
                } else if (cmd === 'status') {
                    response.push(
                        `--- COMPLIANCE POSTURE REPORT ---`,
                        `Target Scenario: 0${scenario.id} - ${scenario.title}`,
                        `Current Choice:  ${isEthical ? 'ETHICAL (SAFE)' : 'UNETHICAL (VIOLATION)'}`,
                        `CIA Triad:       C=${currentAction.cia.c}%, I=${currentAction.cia.i}%, A=${currentAction.cia.a}%`,
                        `Ethical Scores:  Utilitarianism: ${currentAction.moralFrameworks.util}/100`,
                        `                 Rights Focus:   ${currentAction.moralFrameworks.rights}/100`,
                        `                 Common Good:    ${currentAction.moralFrameworks.commonGood}/100`,
                        `Crime Class:     ${currentAction.crimeClassification}`,
                        `Status:          ${isEthical ? 'SECURE_NOMINAL' : 'COMPROMISED_ALERT'}`
                    );
                } else if (cmd === 'decide ethical') {
                    setIsEthical(true);
                    logPostures(true);
                    response.push(
                        `[AUDIT] Toggling posture to ETHICAL...`,
                        `[SYS] Re-running compliance scanner...`,
                        `[SYS] Posture updated to: [ETHICAL_COMPLIANCE]`
                    );
                } else if (cmd === 'decide unethical') {
                    setIsEthical(false);
                    logPostures(false);
                    response.push(
                        `[AUDIT] Toggling posture to UNETHICAL...`,
                        `[SYS] WARNING: Policy breach detected. Staging compliance alerts...`,
                        `[SYS] Posture updated to: [SECURITY_VIOLATION]`
                    );
                } else if (cmd === 'cat scenario.txt') {
                    response.push(
                        `--- SCENARIO_0${scenario.id}_CONTEXT.txt ---`,
                        ...scenario.description.split('. ')
                    );
                } else if (cmd === 'clear') {
                    setTerminalHistory([`guest@seops:~/audit$ `]);
                    setTerminalInput('');
                    return;
                } else if (cmd === 'export') {
                    response.push(`[SYS] Generating PDF report...`, `[SYS] Download initiated.`);
                    setTimeout(() => {
                        handleExportPDF();
                    }, 500);
                } else if (cmd.startsWith('switch ')) {
                    const arg = cmd.split(' ')[1];
                    const num = parseInt(arg);
                    if (num >= 1 && num <= 3) {
                        setSelectedScenarioId(num);
                        setIsEthical(true);
                        return;
                    } else {
                        response.push(`[SYS] Invalid scenario index. Select 1, 2, or 3.`);
                    }
                } else {
                    response.push(`sh: command not found: ${cmd}. Type 'help' for support.`);
                }
                
                response.push(`guest@seops:~/audit$ `);
                setTerminalHistory(prev => [...prev.slice(0, -1), ...response]);
            }
            setTerminalInput('');
        }
    };

    // PDF Report Generator (UPSLP Official format)
    const handleExportPDF = () => {
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        const primaryColor = [22, 189, 212];
        const errorColor = [239, 68, 68];
        const accentColor = isEthical ? primaryColor : errorColor;

        // Custom Header layout
        doc.setFillColor(6, 10, 20);
        doc.rect(0, 0, 210, 48, 'F');
        
        // Document Title
        doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
        doc.setFont('courier', 'bold');
        doc.setFontSize(14);
        doc.text('DICTAMEN TECNICO DE AUDITORIA DE SEGURIDAD', 15, 14);
        
        doc.setTextColor(160, 160, 160);
        doc.setFontSize(8.5);
        doc.setFont('courier', 'normal');
        doc.text('UNIVERSIDAD POLITECNICA DE SAN LUIS POTOSI (UPSLP)', 15, 20);
        doc.text('MATERIA: CNO V - SEGURIDAD INFORMATICA | PROYECTO PARCIAL 3', 15, 24);
        doc.text('EQUIPO 1: Aguilar J. | Jasso P. | Moreno G. | Palomo A. | Zarate D. | Zorrilla E.', 15, 28);
        doc.text('AUDITOR PRINCIPAL DE AUDITORIA: GISELA GERALDINE MORENO SOLIS (176522)', 15, 32);
        doc.text(`FECHA DE EMISION: ${new Date().toLocaleDateString()} | STATUS POSTURA: ${isEthical ? 'COMPLIANT' : 'BREACH_VIOLATION'}`, 15, 36);
        doc.text('DOCUMENTO INTEGRADO EN PORTAFOLIO WEB DE SEGURIDAD', 15, 40);
        
        // Line break
        doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
        doc.setLineWidth(0.8);
        doc.line(0, 48, 210, 48);

        // Body Content
        doc.setTextColor(20, 20, 20); 
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.text(`REF: INCIDENTE_0${scenario.id} - ${scenario.title.toUpperCase()}`, 15, 58);
        
        // Scenario Description
        doc.setFontSize(9);
        doc.text('SINOPSIS COMPLETA DEL CASO:', 15, 66);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(60, 60, 60);
        const descText = doc.splitTextToSize(scenario.description, 180);
        doc.text(descText, 15, 71);

        let currentY = 71 + (descText.length * 4.5) + 5;

        // Dilema Ético
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(20, 20, 20);
        doc.text('DILEMA ETICO EVALUADO:', 15, currentY);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(60, 60, 60);
        const dilemaText = doc.splitTextToSize(scenario.dilema, 180);
        doc.text(dilemaText, 15, currentY + 4.5);

        currentY = currentY + 4.5 + (dilemaText.length * 4.5) + 5;

        // Decision Selected
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(20, 20, 20);
        doc.text('DICTAMEN / ACCION APLICADA POR EL AUDITOR:', 15, currentY);
        doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
        doc.text(`${currentAction.title.toUpperCase()} [${isEthical ? 'NOMINAL / COMPLIANT' : 'ALERTA / VIOLADO'}]`, 15, currentY + 4.5);
        
        doc.setTextColor(60, 60, 60);
        doc.setFont('helvetica', 'normal');
        const actionDesc = doc.splitTextToSize(currentAction.description, 180);
        doc.text(actionDesc, 15, currentY + 9);

        currentY = currentY + 9 + (actionDesc.length * 4.5) + 6;

        // Draw Metrics Table block
        doc.setFillColor(242, 245, 249);
        doc.rect(15, currentY, 180, 50, 'F');
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.2);
        doc.rect(15, currentY, 180, 50, 'D');

        // Table headers
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(20, 20, 20);
        doc.text('EVALUACION DE RIESGOS (CIA TRIAD)', 20, currentY + 6);
        doc.setFont('helvetica', 'normal');
        doc.text(`Confidencialidad: ${currentAction.cia.c}%`, 20, currentY + 12);
        doc.text(`Integridad:       ${currentAction.cia.i}%`, 20, currentY + 17);
        doc.text(`Disponibilidad:   ${currentAction.cia.a}%`, 20, currentY + 22);

        doc.setFont('helvetica', 'bold');
        doc.text('ANALISIS DE MARCOS MORALES', 105, currentY + 6);
        doc.setFont('helvetica', 'normal');
        doc.text(`Etica Utilitarista:      ${currentAction.moralFrameworks.util}/100`, 105, currentY + 12);
        doc.text(`Enfoque de Derechos:    ${currentAction.moralFrameworks.rights}/100`, 105, currentY + 17);
        doc.text(`Enfoque del Bien Comun:  ${currentAction.moralFrameworks.commonGood}/100`, 105, currentY + 22);

        // Classification Row
        doc.setFont('helvetica', 'bold');
        doc.text('CLASIFICACION DEL DELITO:', 20, currentY + 30);
        doc.setFont('helvetica', 'normal');
        doc.text(currentAction.crimeClassification, 20, currentY + 35);

        doc.setFont('helvetica', 'bold');
        doc.text('IMPACTO REGULATORIO Y LEGAL:', 20, currentY + 41);
        doc.setFont('helvetica', 'normal');
        const legalSplit = doc.splitTextToSize(currentAction.legalImpact, 170);
        doc.text(legalSplit, 20, currentY + 45);

        currentY = currentY + 50 + 6;

        // Commandments Section
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(20, 20, 20);
        doc.text('MANDAMIENTOS DE ETICA INFORMATICA APLICABLES:', 15, currentY);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(60, 60, 60);

        let cmdY = currentY + 5;
        const commandments = isEthical ? currentAction.respectedCommandments : currentAction.violatedCommandments;
        
        if (commandments.length > 0) {
            commandments.forEach((cmd) => {
                doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
                doc.text(isEthical ? '[OK] ' : '[!]  ', 15, cmdY);
                doc.setTextColor(60, 60, 60);
                const splitCmd = doc.splitTextToSize(cmd, 160);
                doc.text(splitCmd, 27, cmdY);
                cmdY += (splitCmd.length * 4.5) + 1;
            });
        } else {
            doc.text('No se registran transgresiones éticas directas en esta postura.', 15, cmdY);
            cmdY += 6;
        }

        // Footer lines
        doc.setDrawColor(180, 180, 180);
        doc.line(15, 264, 90, 264);
        doc.line(120, 264, 195, 264);
        
        doc.setFontSize(8);
        doc.setTextColor(80, 80, 80);
        doc.text('Gisela Geraldine Moreno Solis', 25, 268);
        doc.text('FIRMA DEL AUDITOR (EQUIPO 1)', 25, 271);
        
        doc.text('Mtro. Servando Lopez Contreras', 130, 268);
        doc.text('FIRMA / APROBACION DEL DOCENTE', 130, 271);

        doc.save(`reporte-auditoria-dilema-${scenario.id}.pdf`);
    };

    const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
    const originalPdfUrl = `${baseUrl}parcial3/act16-Equipo1.pdf`;

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
                                PARCIAL 3: PROYECTO DILEMAS ÉTICOS
                            </span>
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-mono font-black text-white tracking-tight uppercase">
                            Universidad Politécnica de San Luis Potosí
                        </h2>
                        
                        <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                            Esta plataforma integra el análisis técnico y legal de la <strong>Actividad 16: Dilemas Éticos en Ciberseguridad</strong>. A través del panel unificado inferior, se evalúa de manera interactiva el comportamiento ético del analista, la afectación a la Tríada de Seguridad (CIA) y la aplicabilidad de los 10 Mandamientos de la Ética Informática en escenarios del mundo real.
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

                    {/* Right: Direct Document download section */}
                    <div className="lg:col-span-4 bg-[#0a1022]/80 border border-cyan-500/20 p-5 rounded-2xl flex flex-col justify-between h-full gap-4 text-center lg:text-left">
                        <div>
                            <div className="flex items-center justify-center lg:justify-start gap-2 text-cyan-400 mb-2">
                                <FaFilePdf className="text-xl" />
                                <span className="font-mono text-xs font-bold uppercase tracking-wider">EXPEDIENTE ORIGINAL</span>
                            </div>
                            <h4 className="text-white font-mono text-sm font-bold">Act16-Equipo1.pdf</h4>
                            <p className="text-gray-500 text-[11px] font-mono mt-1.5 leading-relaxed">
                                Documento académico original enviado por el equipo con la redacción teórica, firmas y cuestionarios formales de la actividad.
                            </p>
                        </div>
                        <a
                            href={originalPdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2.5 w-full py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 font-mono text-xs font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.05)] active:scale-[0.98]"
                        >
                            <FaEye />
                            <span>VISUALIZAR PDF ORIGINAL</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* 2. Unified SecOps Console Dashboard Grid (Balanced Columns) */}
            <div className="bg-[#050913]/90 border border-cyan-500/20 rounded-3xl overflow-hidden shadow-2xl relative">
                
                {/* Console HUD Header */}
                <div className="bg-[#081222]/90 border-b border-cyan-500/10 px-6 py-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)] animate-pulse">
                            <FaTerminal />
                        </span>
                        <div>
                            <h4 className="text-white font-mono text-xs font-bold tracking-widest uppercase">
                                SEC_DECISION_CONSOLE_v3.0.0
                            </h4>
                            <p className="text-[10px] text-cyan-400/80 font-mono tracking-wider flex items-center gap-1.5 mt-0.5">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                                LIVE CONSOLE // UNIFIED AUDITOR POSTURE
                            </p>
                        </div>
                    </div>

                    {/* Scenario Switcher Tabs */}
                    <div className="flex bg-black/40 border border-gray-800 p-1 rounded-lg self-center overflow-x-auto scrollbar-none max-w-full">
                        {scenariosData.map(s => (
                            <button
                                key={s.id}
                                type="button"
                                onClick={() => {
                                    setSelectedScenarioId(s.id);
                                    setIsEthical(true);
                                }}
                                className={`px-4 py-2 text-[10px] font-mono rounded transition-all whitespace-nowrap ${
                                    selectedScenarioId === s.id
                                    ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20 font-bold'
                                    : 'text-gray-500 hover:text-gray-300'
                                }`}
                            >
                                {`CASO_0${s.id}`}
                            </button>
                        ))}
                    </div>
                    
                    {/* Dynamic PDF Export */}
                    <button
                        type="button"
                        onClick={handleExportPDF}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 font-mono text-xs rounded-lg transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)] active:scale-95 self-center"
                    >
                        <FaFilePdf className="text-sm" />
                        <span>EXPORTAR DICTAMEN (PDF)</span>
                    </button>
                </div>

                {/* Main Unified Workspace (Balanced Split Screen Grid 1:1) */}
                <div className="p-6 md:p-8 bg-[#03060c] grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* LEFT PANEL: Shell, CIA, Ethics Frameworks, and Compliance Laws */}
                    <div className="flex flex-col gap-6">
                        
                        {/* 1. Unix Terminal Shell */}
                        <div className="bg-black/90 rounded-2xl border border-gray-900 p-5 flex flex-col justify-between h-[300px] shadow-inner font-mono text-xs">
                        <div className="flex items-center justify-between border-b border-gray-900 pb-2 mb-3">
                                <span className="text-[10px] text-gray-500 tracking-wider">SHELL_INTEGRATION.log</span>
                                <span className="flex items-center gap-1.5 text-green-400 text-[10px] font-bold">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                    ONLINE
                                </span>
                        </div>
                        <div className="p-6 bg-[#03060c] h-[300px] flex flex-col font-mono text-xs sm:text-sm shadow-inner relative">
                            <div ref={terminalContainerRef} className="flex-grow overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-cyan-900 pr-2">
                                {terminalHistory.map((line, idx) => {
                                    let color = "text-green-400";
                                    if (line.includes('[WARN]')) color = "text-amber-500";
                                    if (line.includes('[SYS]')) color = "text-cyan-400";
                                    if (line.includes('[AUDIT]')) color = "text-indigo-400";
                                    if (line.includes('WARNING - ETHICAL')) color = "text-red-500 font-bold";
                                    if (line.includes('guest@seops')) color = "text-white/80";

                                    return (
                                        <div key={idx} className={`${color} leading-relaxed whitespace-pre-wrap`}>
                                            {line}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex items-center gap-2 border-t border-gray-900 pt-3 mt-3 w-full">
                                <span className="text-cyan-500/50 mr-2 shrink-0">guest@seops:~/audit$</span>
                                <input
                                    type="text"
                                    value={terminalInput}
                                    onChange={(e) => setTerminalInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    spellCheck="false"
                                    className="flex-grow bg-transparent text-white focus:outline-none border-none caret-cyan-400 font-mono text-xs"
                                />
                            </div>
                        </div>
                    </div>

                        {/* 2. Interactive Toggles (Decisor Posture) & CIA Triad Risk Meters */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            {/* Decision Toggles */}
                            <div className="bg-[#070c18] border border-cyan-500/10 p-5 rounded-2xl flex flex-col justify-between font-mono gap-3">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest block">AUDITOR_DECISION_POSTURE</span>
                                <div className="flex flex-col gap-2.5">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsEthical(true);
                                            logPostures(true);
                                        }}
                                        className={`py-3.5 rounded-xl font-bold border transition-all flex items-center justify-center gap-2 uppercase text-xs w-full ${
                                            isEthical
                                            ? 'bg-green-500/10 text-green-400 border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.15)]'
                                            : 'bg-black text-gray-500 border-gray-900 hover:text-gray-400 hover:border-gray-800'
                                        }`}
                                    >
                                        <FaCheckCircle className="text-sm" />
                                        <span>Acción Ética</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsEthical(false);
                                            logPostures(false);
                                        }}
                                        className={`py-3.5 rounded-xl font-bold border transition-all flex items-center justify-center gap-2 uppercase text-xs w-full ${
                                            !isEthical
                                            ? 'bg-red-500/10 text-red-400 border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.15)]'
                                            : 'bg-black text-gray-500 border-gray-900 hover:text-gray-400 hover:border-gray-800'
                                        }`}
                                    >
                                        <FaSkullCrossbones className="text-sm" />
                                        <span>Acción Negligente</span>
                                    </button>
                                </div>
                            </div>

                            {/* CIA Meters */}
                            <div className="bg-[#070c18] border border-cyan-500/10 p-5 rounded-2xl space-y-3 flex flex-col justify-between">
                                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest block">CIA TRIAD POSTURE</span>
                                <div className="space-y-2.5">
                                    {/* C */}
                                    <div>
                                        <div className="flex justify-between text-[10px] font-mono mb-0.5">
                                            <span className="text-gray-400">CONFIDENCIALIDAD</span>
                                            <span className={currentAction.cia.c > 50 ? 'text-green-400' : 'text-red-400 font-bold'}>{currentAction.cia.c}%</span>
                                        </div>
                                        <div className="h-1.5 bg-black rounded-full overflow-hidden border border-gray-900">
                                            <div className={`h-full rounded-full transition-all duration-700 ${currentAction.cia.c > 50 ? 'bg-gradient-to-r from-green-500 to-emerald-400 shadow-[0_0_10px_#10b981]' : 'bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_10px_#ef4444]'}`} style={{ width: `${currentAction.cia.c}%` }}></div>
                                        </div>
                                    </div>
                                    {/* I */}
                                    <div>
                                        <div className="flex justify-between text-[10px] font-mono mb-0.5">
                                            <span className="text-gray-400">INTEGRIDAD</span>
                                            <span className={currentAction.cia.i > 50 ? 'text-green-400' : 'text-red-400 font-bold'}>{currentAction.cia.i}%</span>
                                        </div>
                                        <div className="h-1.5 bg-black rounded-full overflow-hidden border border-gray-900">
                                            <div className={`h-full rounded-full transition-all duration-700 ${currentAction.cia.i > 50 ? 'bg-gradient-to-r from-green-500 to-emerald-400 shadow-[0_0_10px_#10b981]' : 'bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_10px_#ef4444]'}`} style={{ width: `${currentAction.cia.i}%` }}></div>
                                        </div>
                                    </div>
                                    {/* A */}
                                    <div>
                                        <div className="flex justify-between text-[10px] font-mono mb-0.5">
                                            <span className="text-gray-400">DISPONIBILIDAD</span>
                                            <span className={currentAction.cia.a > 50 ? 'text-green-400' : 'text-red-400 font-bold'}>{currentAction.cia.a}%</span>
                                        </div>
                                        <div className="h-1.5 bg-black rounded-full overflow-hidden border border-gray-900">
                                            <div className={`h-full rounded-full transition-all duration-700 ${currentAction.cia.a > 50 ? 'bg-gradient-to-r from-green-500 to-emerald-400 shadow-[0_0_10px_#10b981]' : 'bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_10px_#ef4444]'}`} style={{ width: `${currentAction.cia.a}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* 3. Ethical Frameworks Justification & Scores */}
                        <div className="bg-[#070d18] border border-cyan-500/10 p-6 rounded-2xl space-y-4">
                            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                                <FaBalanceScale />
                                <span>Justificación desde Marcos Éticos Generales</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-black/40 p-3.5 border border-gray-950 rounded-xl space-y-1.5 flex flex-col justify-between">
                                    <h5 className="text-cyan-300 font-mono text-[11px] font-bold uppercase">A) Ética Utilitarista</h5>
                                    <p className="text-gray-400 text-[10px] leading-relaxed flex-grow">
                                        {isEthical 
                                            ? "Incorrecto violar la norma. El perjuicio sistémico potencial supera las intenciones preventivas del empleado, rompiendo la confianza." 
                                            : "Falsa utilidad. Pretender proteger los activos usando canales ilegítimos debilita la seguridad y provoca daños severos colaterales."
                                        }
                                    </p>
                                </div>
                                <div className="bg-black/40 p-3.5 border border-gray-950 rounded-xl space-y-1.5 flex flex-col justify-between">
                                    <h5 className="text-cyan-300 font-mono text-[11px] font-bold uppercase">B) Enfoque de Derechos</h5>
                                    <p className="text-gray-400 text-[10px] leading-relaxed flex-grow">
                                        {isEthical 
                                            ? "Correcto. Respeta inalienablemente los derechos del director/cliente a la privacidad y el debido proceso de auditoría autorizada." 
                                            : "Violado. Toda persona tiene derecho a la confidencialidad de sus comunicaciones y a no ser coaccionada o manipulada."
                                        }
                                    </p>
                                </div>
                                <div className="bg-black/40 p-3.5 border border-gray-950 rounded-xl space-y-1.5 flex flex-col justify-between">
                                    <h5 className="text-cyan-300 font-mono text-[11px] font-bold uppercase">C) Enfoque del Bien Común</h5>
                                    <p className="text-gray-400 text-[10px] leading-relaxed flex-grow">
                                        {isEthical 
                                            ? "Protegido. Fomenta un ambiente corporativo de confianza, reglas claras, gobernanza y transparencia." 
                                            : "Afectado. Crea un ambiente insostenible de desconfianza mutua y vigilancia arbitraria, destruyendo la cohesión."
                                        }
                                    </p>
                                </div>
                            </div>

                            <div className="bg-black/30 rounded-xl p-3 flex flex-wrap gap-4 justify-between items-center text-[11px] font-mono">
                                <span className="text-gray-500 uppercase tracking-widest text-[9px]">Puntuaciones morales (Postura Actual)</span>
                                <div className="flex gap-4">
                                    <span className="text-cyan-400">UTILIT: {currentAction.moralFrameworks.util}/100</span>
                                    <span className="text-cyan-400">DERECH: {currentAction.moralFrameworks.rights}/100</span>
                                    <span className="text-cyan-400">B_COMUN: {currentAction.moralFrameworks.commonGood}/100</span>
                                </div>
                            </div>
                        </div>

                        {/* 4. Legal Compliance & 10 Commandments */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            
                            {/* Legal Panel */}
                            <div className="bg-[#070d18] border border-cyan-500/10 p-5 rounded-2xl flex flex-col justify-between gap-4">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                                        <FaGavel />
                                        <span>Marco Regulatorio</span>
                                    </div>
                                    <div className="space-y-3 font-mono text-xs">
                                        <div>
                                            <span className="text-[10px] text-gray-500 block uppercase">Clasificación Jurídica</span>
                                            <p className="text-white font-bold mt-0.5 leading-tight">{currentAction.crimeClassification}</p>
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-gray-500 block uppercase">Consecuencias</span>
                                            <p className="text-gray-400 text-[10px] leading-relaxed mt-0.5">{currentAction.legalImpact}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-black/30 border border-gray-950 p-3 rounded-lg flex items-center gap-2.5">
                                    <FaLock className="text-cyan-400 flex-shrink-0 text-sm animate-pulse" />
                                    <div className="text-[9px] font-mono text-gray-500 leading-normal">
                                        Cumplimiento: <strong className="text-white">ISO 27001</strong> y directivas <strong className="text-white">NIST SP 800-53</strong>.
                                    </div>
                                </div>
                            </div>

                            {/* 10 Commandments Panel */}
                            <div className="bg-[#070d18] border border-cyan-500/10 p-5 rounded-2xl flex flex-col justify-between gap-4">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                                        <FaRegFileAlt />
                                        <span>10 Mandamientos de Ética</span>
                                    </div>
                                    
                                    <div className="space-y-2 text-xs font-mono">
                                        {isEthical ? (
                                            <>
                                                <span className="text-[10px] text-green-400 block uppercase font-bold">✔ Respetados:</span>
                                                <div className="space-y-1.5">
                                                    {scenario.ethicalAction.respectedCommandments.map((cmd, idx) => (
                                                        <div key={idx} className="flex items-start gap-2 text-gray-400 p-2 bg-green-500/5 rounded border border-green-500/10 text-[9px] leading-tight">
                                                            <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                                                            <span>{cmd}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-[10px] text-red-500 block uppercase font-bold">⚠ Violados:</span>
                                                <div className="space-y-1.5">
                                                    {scenario.unethicalAction.violatedCommandments.map((cmd, idx) => (
                                                        <div key={idx} className="flex items-start gap-2 text-gray-400 p-2 bg-red-500/5 rounded border border-red-500/10 text-[9px] leading-tight">
                                                            <FaTimesCircle className="text-red-500 mt-0.5 flex-shrink-0 animate-pulse" />
                                                            <span>{cmd}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT PANEL: Image, Case details, Technical logs & Specialized Action Paths */}
                    <div className="flex flex-col gap-6">
                        
                        {/* 1. Cyber Threat Illustration Card */}
                        <div className="relative aspect-[16/6] md:aspect-[16/5] rounded-3xl overflow-hidden border border-cyan-500/20 bg-black/60 group shadow-lg flex items-end p-6">
                            <img
                                src={`${baseUrl}parcial3/scenario${scenario.id}.png`}
                                alt={scenario.title}
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                                    isEthical 
                                    ? 'filter hue-rotate-0 saturate-100 group-hover:scale-105' 
                                    : 'filter hue-rotate-[140deg] saturate-150 brightness-[0.8] group-hover:scale-105 contrast-125'
                                }`}
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                                isEthical 
                                ? 'from-cyan-950/90 via-cyan-950/40 to-transparent opacity-95' 
                                : 'from-red-950/95 via-red-950/50 to-transparent opacity-95'
                            }`} />
                            
                            {/* Overlay texts */}
                            <div className="relative z-10 font-mono flex flex-col gap-1.5 w-full">
                                <div className="flex items-center justify-between">
                                    <span className={isEthical ? 'text-cyan-400 font-bold text-xs flex items-center gap-1.5' : 'text-red-400 font-bold text-xs flex items-center gap-1.5 animate-pulse'}>
                                        <span className={`w-2 h-2 rounded-full ${isEthical ? 'bg-cyan-400' : 'bg-red-500 animate-ping'}`} />
                                        {isEthical ? 'SYS_INTEGRITY: NOMINAL_SAFE' : 'SYS_ALERT: ETHICAL_COMPROMISE'}
                                    </span>
                                    <span className="text-gray-500 text-[10px]">SCENARIO_RECON_IMAGE</span>
                                </div>
                                <h3 className="text-white text-base md:text-xl font-bold font-mono tracking-tight leading-tight mt-1">
                                    {scenario.title}
                                </h3>
                            </div>
                        </div>

                        {/* 2. Detailed Case Summary & Technical details */}
                        <div className="bg-[#070d18] border border-cyan-500/10 p-6 rounded-2xl space-y-4">
                            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                                <FaInfoCircle />
                                <span>Resumen del Dilema y Contexto Técnico</span>
                            </div>
                            
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {scenario.description}
                            </p>

                            <div className="bg-black/30 border border-gray-900 rounded-xl p-4 space-y-2 text-xs font-mono">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold">Diagnóstico Técnico Forense</span>
                                <p className="text-gray-400 leading-relaxed">
                                    {scenario.technicalDetails}
                                </p>
                            </div>

                            <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-4 space-y-2">
                                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold">Dilema Ético Identificado</span>
                                <p className="text-white text-xs font-mono leading-relaxed">
                                    {scenario.dilema}
                                </p>
                            </div>
                        </div>

                        {/* 3. Specialized Plans of Action */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
                            
                            {/* Ethical path */}
                            <div className="bg-[#070d18] border border-green-500/20 p-5 rounded-2xl flex flex-col justify-between gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-green-400 font-mono text-xs font-bold uppercase tracking-wider">
                                        <FaCheckCircle />
                                        <span>Criterio Ético</span>
                                    </div>
                                    <h4 className="text-white font-mono text-sm font-bold leading-tight">
                                        {scenario.ethicalAction.title}
                                    </h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        {scenario.ethicalAction.description}
                                    </p>
                                </div>
                                <div className="bg-green-950/20 border border-green-500/10 p-3 rounded-lg text-[10px] font-mono text-green-400/80 mt-auto">
                                    POSTURA DE CONTROL DEFENSIVO Y AUDITORÍA TRANSPARENTE
                                </div>
                            </div>

                            {/* Unethical path */}
                            <div className="bg-[#070d18] border border-red-500/20 p-5 rounded-2xl flex flex-col justify-between gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
                                        <FaTimesCircle />
                                        <span>Criterio Negligente</span>
                                    </div>
                                    <h4 className="text-white font-mono text-sm font-bold leading-tight">
                                        {scenario.unethicalAction.title}
                                    </h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        {scenario.unethicalAction.description}
                                    </p>
                                </div>
                                <div className="bg-red-950/20 border border-red-500/10 p-3 rounded-lg text-[10px] font-mono text-red-400/80 mt-auto">
                                    VULNERACIÓN DIRECTA DE NORMAS INTERNAS Y DE LEYES VIGENTES
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Interactive Status Bar at the Bottom */}
                <div className="border-t border-gray-900 bg-black/40 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-gray-500">
                    <div className="flex items-center gap-2">
                        <span>SECURITY_SYSTEMS: ACTIVE</span>
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span>AUDIT_ENCRYPTION_KEY: SHA-256</span>
                        <FaLock className="text-cyan-500" />
                    </div>
                    <div>
                        <span>CLEARANCE LEVEL 5 // SECURE ARCHIVE</span>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default EthicsSimulator;

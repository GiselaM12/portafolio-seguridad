import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FaShieldAlt, FaInfoCircle, FaCheckCircle, FaTimesCircle, 
    FaFilePdf, FaTerminal, FaBalanceScale, FaGavel, FaLock, 
    FaUserSecret, FaRegFileAlt, FaLockOpen, FaSkullCrossbones 
} from 'react-icons/fa';
import { jsPDF } from 'jspdf';

const scenariosData = [
    {
        id: 1,
        title: "Escenario 01: Acceso No Autorizado Interno",
        description: "Un especialista en ciberseguridad corporativa detecta en los logs que un compañero accedió a correos privados del Director General sin autorización, alegando que buscaba detectar posibles fugas de información.",
        ethicalAction: {
            title: "Reportar y Auditar el Acceso",
            description: "Documentar la evidencia en los logs y reportar el incidente al comité de cumplimiento, recursos humanos o la alta dirección de inmediato, recomendando una auditoría completa de los privilegios del empleado.",
            cia: { c: 100, i: 100, a: 100 },
            moralFrameworks: { util: 95, rights: 100, commonGood: 95 },
            violatedCommandments: [],
            respectedCommandments: [
                "No utilizarás una computadora para dañar a otros",
                "Siempre utilizarás las computadoras respetando los derechos de los demás",
                "Usarás la tecnología con responsabilidad y ética"
            ],
            crimeClassification: "Ninguno (Cumplimiento de políticas y reporte responsable)",
            legalImpact: "Protege la privacidad corporativa, fortalece la confianza interna y cumple con los controles de control de acceso ISO 27001 (A.9) y la directiva de gobernanza."
        },
        unethicalAction: {
            title: "Encubrir o Justificar la Acción",
            description: "Ignorar la alerta o justificar el acceso del compañero argumentando la 'intención preventiva'. Esto permite que continúe el husmeo informal sin autorización formal.",
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
            crimeClassification: "Cómplice o encubrimiento de Acceso Ilícito a Sistemas y Violación de la Privacidad Digital",
            legalImpact: "Violación grave de la confidencialidad. Incumple con las directrices de la ISO 27001 (A.12.6.1) y expone a la empresa a demandas por violación de datos personales bajo el GDPR/LFPDPPP."
        }
    },
    {
        id: 2,
        title: "Escenario 02: Vulnerabilidad Crítica No Reportada",
        description: "Durante una prueba de penetración se localiza una falla crítica en un sistema financiero que permite extraer capital sin ser detectado. El contrato final aún no ha sido firmado por el cliente.",
        ethicalAction: {
            title: "Reportar y Mitigar la Falla",
            description: "No explotar la falla. Documentarla técnicamente de inmediato, informar al cliente de manera confidencial y coordinar la mitigación prioritaria antes de cualquier formalidad.",
            cia: { c: 100, i: 100, a: 100 },
            moralFrameworks: { util: 98, rights: 100, commonGood: 98 },
            violatedCommandments: [],
            respectedCommandments: [
                "No utilizarás una computadora para robar",
                "Pensarás en las consecuencias sociales de los sistemas que desarrolles o evalúes",
                "Usarás la tecnología con responsabilidad y ética"
            ],
            crimeClassification: "Ninguno (Divulgación responsable y auditoría autorizada)",
            legalImpact: "Establece altos estándares profesionales, previene pérdidas multimillonarias para la entidad financiera y sus ahorradores, y cumple con el principio de debida diligencia de NIST CSF."
        },
        unethicalAction: {
            title: "Explotar u Ocultar la Falla",
            description: "Aprovechar la falla para extraer dinero sin ser detectado, o retener la información para presionar económicamente al cliente a firmar un contrato más jugoso.",
            cia: { c: 10, i: 10, a: 50 },
            moralFrameworks: { util: 5, rights: 0, commonGood: 5 },
            violatedCommandments: [
                "No utilizarás una computadora para robar",
                "No utilizarás recursos informáticos para cometer fraude",
                "No te apropiarás del trabajo o recursos ajenos",
                "No usarás tecnología para causar daño"
            ],
            respectedCommandments: [],
            crimeClassification: "Fraude Informático, Acceso Ilícito a Sistemas de Información y Robo de Activos Financieros",
            legalImpact: "Delito penal grave sancionable con prisión. Infracción directa a leyes financieras, el Código Penal y directivas de ciberseguridad, inhabilitando la licencia profesional."
        }
    },
    {
        id: 3,
        title: "Escenario 03: Uso de Herramientas OSINT",
        description: "Se recopila información pública en redes sociales e internet (OSINT) de un empleado sospechoso de fuga de datos, y se utiliza para chantajearlo o presionarlo psicológicamente para que confiese.",
        ethicalAction: {
            title: "Investigar bajo el Debido Proceso",
            description: "Usar OSINT únicamente para reunir evidencia técnica formal. Entregar los hallazgos a los departamentos legal y de RRHH para una entrevista transparente y conforme al debido proceso corporativo.",
            cia: { c: 100, i: 100, a: 100 },
            moralFrameworks: { util: 90, rights: 100, commonGood: 95 },
            violatedCommandments: [],
            respectedCommandments: [
                "Siempre utilizarás las computadoras respetando los derechos y dignidad de los demás",
                "Pensarás en las consecuencias sociales de tus acciones digitales"
            ],
            crimeClassification: "Ninguno (Investigación técnica conforme a derechos)",
            legalImpact: "Asegura la admisibilidad legal de la evidencia recolectada y protege a la empresa de contrademandas laborales o denuncias por acoso."
        },
        unethicalAction: {
            title: "Coacción y Manipulación Psicológica",
            description: "Utilizar los datos personales obtenidos vía OSINT (gustos, familia, deudas) para acosar psicológicamente al sospechoso en una entrevista informal, buscando forzar una confesión rápida.",
            cia: { c: 60, i: 90, a: 100 },
            moralFrameworks: { util: 20, rights: 10, commonGood: 15 },
            violatedCommandments: [
                "No utilizarás tecnología para dañar o acosar a otros",
                "No invadirás la privacidad de las personas",
                "No utilizarás información digital para perjudicar la dignidad humana"
            ],
            respectedCommandments: [],
            crimeClassification: "Acoso Laboral, Coacción, Extorsión e Intimidación Asistida por Medios Tecnológicos",
            legalImpact: "Invalida legalmente cualquier confesión obtenida bajo coacción. Expone a la organización a demandas penales por extorsión, acoso e invasión ilícita de la privacidad."
        }
    }
];

const EthicsSimulator = () => {
    const [selectedScenarioId, setSelectedScenarioId] = useState(1);
    const [isEthical, setIsEthical] = useState(true);

    const scenario = scenariosData.find(s => s.id === selectedScenarioId);
    const currentAction = isEthical ? scenario.ethicalAction : scenario.unethicalAction;

    const handleExportPDF = () => {
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        // Styles
        doc.setFillColor(6, 10, 20); // Deep dark background for header
        doc.rect(0, 0, 210, 40, 'F');
        
        // Header Text
        doc.setTextColor(22, 189, 212); // Cyan primary
        doc.setFont('courier', 'bold');
        doc.setFontSize(16);
        doc.text('AUDITORIA DE INCIDENTES - DILEMAS ETICOS', 15, 18);
        
        doc.setTextColor(150, 150, 150);
        doc.setFontSize(9);
        doc.setFont('courier', 'normal');
        doc.text('UNIVERSIDAD POLITECNICA DE SAN LUIS POTOSI (UPSLP)', 15, 25);
        doc.text(`AUDITOR: GISELA GERALDINE MORENO SOLIS (176522) | FECHA: ${new Date().toLocaleDateString()}`, 15, 30);
        
        // Horizontal line separator
        doc.setDrawColor(22, 189, 212);
        doc.setLineWidth(0.8);
        doc.line(0, 40, 210, 40);

        // Body Content
        doc.setTextColor(0, 0, 0); // Black text for document readability
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(13);
        doc.text(`ANALISIS: ${scenario.title.toUpperCase()}`, 15, 52);
        
        // Section: Description
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.text('DESCRIPCION DEL ESCENARIO:', 15, 62);
        doc.setFont('helvetica', 'normal');
        const descText = doc.splitTextToSize(scenario.description, 180);
        doc.text(descText, 15, 67);

        const currentY = 67 + (descText.length * 5) + 5;

        // Section: Action Chosen
        doc.setFont('helvetica', 'bold');
        doc.text('DECISION SELECCIONADA POR EL AUDITOR:', 15, currentY);
        doc.setTextColor(isEthical ? 34 : 220, isEthical ? 197 : 38, isEthical ? 94 : 38); // Green or Red
        doc.text(`${currentAction.title.toUpperCase()} (${isEthical ? 'ACCION ETICA / RESPONSABLE' : 'ACCION INADECUADA / NEGLIGENTE'})`, 15, currentY + 5);
        
        doc.setTextColor(0, 0, 0);
        doc.setFont('helvetica', 'normal');
        const actionDesc = doc.splitTextToSize(currentAction.description, 180);
        doc.text(actionDesc, 15, currentY + 10);

        const nextY = currentY + 10 + (actionDesc.length * 5) + 8;

        // Draw Metrics Table / Breakdown
        doc.setFillColor(240, 243, 248);
        doc.rect(15, nextY, 180, 50, 'F');
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.2);
        doc.rect(15, nextY, 180, 50, 'D');

        doc.setFont('helvetica', 'bold');
        doc.text('METRICA DE SEGURIDAD (CIA TRIAD)', 20, nextY + 7);
        doc.setFont('helvetica', 'normal');
        doc.text(`- Confidencialidad: ${currentAction.cia.c}%`, 20, nextY + 13);
        doc.text(`- Integridad:       ${currentAction.cia.i}%`, 20, nextY + 18);
        doc.text(`- Disponibilidad:   ${currentAction.cia.a}%`, 20, nextY + 23);

        doc.setFont('helvetica', 'bold');
        doc.text('EVALUACION DE MARCOS ETICOS', 110, nextY + 7);
        doc.setFont('helvetica', 'normal');
        doc.text(`- Utilitarismo:       ${currentAction.moralFrameworks.util}/100`, 110, nextY + 13);
        doc.text(`- Enfoque de Derechos: ${currentAction.moralFrameworks.rights}/100`, 110, nextY + 18);
        doc.text(`- Bien Comun:          ${currentAction.moralFrameworks.commonGood}/100`, 110, nextY + 23);

        // Classification
        doc.setFont('helvetica', 'bold');
        doc.text('CLASIFICACION DEL DELITO:', 20, nextY + 33);
        doc.setFont('helvetica', 'normal');
        doc.text(currentAction.crimeClassification, 20, nextY + 38);
        
        doc.setFont('helvetica', 'bold');
        doc.text('IMPACTO NORMATIVO:', 20, nextY + 44);
        doc.setFont('helvetica', 'normal');
        const legalSplit = doc.splitTextToSize(currentAction.legalImpact, 170);
        doc.text(legalSplit, 20, nextY + 49); // Wait, nextY + 49 is near the bottom border of the gray box, let's adjust or make it wider

        const commandmentsY = nextY + 50 + (legalSplit.length * 5) + 10;

        // Commandments Section
        doc.setFont('helvetica', 'bold');
        doc.text('MANDAMIENTOS DE ETICA INFORMATICA:', 15, commandmentsY);
        doc.setFont('helvetica', 'normal');
        
        let cmdY = commandmentsY + 6;
        const commandments = isEthical ? currentAction.respectedCommandments : currentAction.violatedCommandments;
        
        if (commandments.length > 0) {
            commandments.forEach((cmd) => {
                doc.setTextColor(isEthical ? 34 : 220, isEthical ? 150 : 38, isEthical ? 94 : 38);
                doc.text(isEthical ? '[OK] ' : '[VIOLADO] ', 15, cmdY);
                doc.setTextColor(0, 0, 0);
                const cmdText = doc.splitTextToSize(cmd, 165);
                doc.text(cmdText, 30, cmdY);
                cmdY += (cmdText.length * 5) + 1;
            });
        } else {
            doc.text('No se registran violaciones directas bajo esta toma de decision responsable.', 15, cmdY);
            cmdY += 8;
        }

        // Footer signature
        doc.setDrawColor(200, 200, 200);
        doc.line(15, 260, 90, 260);
        doc.line(120, 260, 195, 260);
        doc.setFontSize(8);
        doc.text('Gisela Geraldine Moreno Solis', 25, 264);
        doc.text('AUDITOR DE SEGURIDAD CNO V', 25, 268);
        doc.text('Firma / Vo.Bo. Docente', 135, 264);
        doc.text('Mtro. Servando Lopez Contreras', 130, 268);

        doc.save(`auditoria-etica-escenario-${selectedScenarioId}.pdf`);
    };

    return (
        <div className="bg-[#070b14] border border-cyan-500/20 rounded-2xl overflow-hidden shadow-2xl relative">
            {/* Terminal Header */}
            <div className="bg-[#0b132b]/80 border-b border-cyan-500/20 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 animate-pulse">
                        <FaTerminal />
                    </span>
                    <div>
                        <h4 className="text-white font-mono text-sm font-bold tracking-widest uppercase">
                            AUDITORÍA_ÉTICA_SIMULATOR_v1.0.4
                        </h4>
                        <p className="text-[10px] text-cyan-400/70 font-mono tracking-wider">
                            SECURE CORE NODE // COMPLIANCE MATRIX
                        </p>
                    </div>
                </div>
                
                {/* Export Button */}
                <button
                    onClick={handleExportPDF}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-mono text-xs rounded transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:scale-105"
                >
                    <FaFilePdf className="text-sm" />
                    <span>EXPORTAR AUDITORÍA (PDF)</span>
                </button>
            </div>

            {/* Scenario Selector tabs */}
            <div className="flex border-b border-cyan-500/10 overflow-x-auto scrollbar-none bg-[#040810]/60">
                {scenariosData.map((s) => (
                    <button
                        key={s.id}
                        onClick={() => {
                            setSelectedScenarioId(s.id);
                            setIsEthical(true); // reset to ethical action view by default
                        }}
                        className={`px-6 py-3.5 font-mono text-xs tracking-wider border-r border-cyan-500/10 transition-all whitespace-nowrap flex-1 text-center ${
                            selectedScenarioId === s.id
                                ? 'bg-[#070b14]/90 text-cyan-400 border-b-2 border-b-cyan-500 shadow-[inset_0_-2px_10px_rgba(6,182,212,0.05)]'
                                : 'text-gray-500 hover:text-cyan-400/80 hover:bg-[#070b14]/20'
                        }`}
                    >
                        {`ESCENARIO_0${s.id}`}
                    </button>
                ))}
            </div>

            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Panel: Scenario Context & Choice */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="bg-[#030712]/80 border border-gray-800 p-5 rounded-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <FaInfoCircle className="text-cyan-400 text-sm" />
                            <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">CONCURSO_INCIDENTE</span>
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2 font-mono">{scenario.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-sans">{scenario.description}</p>
                    </div>

                    {/* Decision Selection Toggle */}
                    <div className="bg-[#030712]/50 border border-gray-800 rounded-xl p-4 flex flex-col gap-3">
                        <span className="font-mono text-gray-500 text-[10px] tracking-widest uppercase">AUDITOR_DECISION_SWITCH</span>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setIsEthical(true)}
                                className={`py-3 px-4 rounded font-mono text-xs tracking-wider border transition-all flex items-center justify-center gap-2 uppercase ${
                                    isEthical
                                        ? 'bg-green-500/10 text-green-400 border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.1)]'
                                        : 'bg-[#030712] text-gray-500 border-gray-800 hover:border-gray-700 hover:text-gray-400'
                                }`}
                            >
                                <FaCheckCircle />
                                <span>Acción Ética</span>
                            </button>
                            <button
                                onClick={() => setIsEthical(false)}
                                className={`py-3 px-4 rounded font-mono text-xs tracking-wider border transition-all flex items-center justify-center gap-2 uppercase ${
                                    !isEthical
                                        ? 'bg-red-500/10 text-red-400 border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.1)]'
                                        : 'bg-[#030712] text-gray-500 border-gray-800 hover:border-gray-700 hover:text-gray-400'
                                }`}
                            >
                                <FaSkullCrossbones />
                                <span>Acción Negligente</span>
                            </button>
                        </div>
                        <div className="mt-2 p-4 bg-[#050914] border border-cyan-500/5 rounded-lg">
                            <h4 className="text-white font-bold font-mono text-xs mb-1 text-cyan-300 uppercase">
                                {currentAction.title}
                            </h4>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                {currentAction.description}
                            </p>
                        </div>
                    </div>

                    {/* Legal impact / compliance */}
                    <div className="bg-[#030712]/80 border border-gray-800 p-5 rounded-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <FaGavel className="text-cyan-400 text-sm" />
                            <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">EVALUACIÓN_LEGAL_Y_MARCO</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <span className="text-[10px] text-gray-500 font-mono block mb-1">CLASIFICACIÓN DEL DELITO:</span>
                                <p className="text-white text-xs font-mono font-bold leading-relaxed">
                                    {currentAction.crimeClassification}
                                </p>
                            </div>
                            <div>
                                <span className="text-[10px] text-gray-500 font-mono block mb-1">IMPACTO DIRECTO:</span>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    {currentAction.legalImpact}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Dynamic Metrics & Commandments */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    {/* Security Metric meters (CIA) */}
                    <div className="bg-[#030712]/80 border border-gray-800 p-5 rounded-xl">
                        <div className="flex items-center gap-2 mb-4">
                            <FaShieldAlt className="text-cyan-400 text-sm" />
                            <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">ESTADO_TRIADA_CIA</span>
                        </div>
                        <div className="space-y-4">
                            {/* Confidencialidad */}
                            <div>
                                <div className="flex justify-between text-xs font-mono mb-1">
                                    <span className="text-gray-400">CONFIDENCIALIDAD</span>
                                    <span className={currentAction.cia.c > 50 ? 'text-green-400' : 'text-red-500'}>
                                        {currentAction.cia.c}%
                                    </span>
                                </div>
                                <div className="h-2 bg-gray-950 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: `${currentAction.cia.c}%` }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className={`h-full rounded-full ${currentAction.cia.c > 50 ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-red-500 shadow-[0_0_8px_#ef4444]'}`} 
                                    />
                                </div>
                            </div>
                            
                            {/* Integridad */}
                            <div>
                                <div className="flex justify-between text-xs font-mono mb-1">
                                    <span className="text-gray-400">INTEGRIDAD</span>
                                    <span className={currentAction.cia.i > 50 ? 'text-green-400' : 'text-red-500'}>
                                        {currentAction.cia.i}%
                                    </span>
                                </div>
                                <div className="h-2 bg-gray-950 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: `${currentAction.cia.i}%` }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className={`h-full rounded-full ${currentAction.cia.i > 50 ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-red-500 shadow-[0_0_8px_#ef4444]'}`} 
                                    />
                                </div>
                            </div>

                            {/* Disponibilidad */}
                            <div>
                                <div className="flex justify-between text-xs font-mono mb-1">
                                    <span className="text-gray-400">DISPONIBILIDAD</span>
                                    <span className={currentAction.cia.a > 50 ? 'text-green-400' : 'text-red-500'}>
                                        {currentAction.cia.a}%
                                    </span>
                                </div>
                                <div className="h-2 bg-gray-950 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: `${currentAction.cia.a}%` }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className={`h-full rounded-full ${currentAction.cia.a > 50 ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-red-500 shadow-[0_0_8px_#ef4444]'}`} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Moral frameworks scoring */}
                    <div className="bg-[#030712]/80 border border-gray-800 p-5 rounded-xl">
                        <div className="flex items-center gap-2 mb-4">
                            <FaBalanceScale className="text-cyan-400 text-sm" />
                            <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">ANÁLISIS_MARCOS_ÉTICOS</span>
                        </div>
                        <div className="space-y-4">
                            {/* Utilitarismo */}
                            <div>
                                <div className="flex justify-between text-xs font-mono mb-1">
                                    <span className="text-gray-400">UTILITARISMO</span>
                                    <span className="text-cyan-400">{currentAction.moralFrameworks.util}/100</span>
                                </div>
                                <div className="h-1.5 bg-gray-950 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: `${currentAction.moralFrameworks.util}%` }}
                                        className="h-full bg-cyan-400" 
                                    />
                                </div>
                            </div>
                            
                            {/* Derechos */}
                            <div>
                                <div className="flex justify-between text-xs font-mono mb-1">
                                    <span className="text-gray-400">ENFOQUE DE DERECHOS</span>
                                    <span className="text-cyan-400">{currentAction.moralFrameworks.rights}/100</span>
                                </div>
                                <div className="h-1.5 bg-gray-950 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: `${currentAction.moralFrameworks.rights}%` }}
                                        className="h-full bg-cyan-400" 
                                    />
                                </div>
                            </div>

                            {/* Bien Comun */}
                            <div>
                                <div className="flex justify-between text-xs font-mono mb-1">
                                    <span className="text-gray-400">ENFOQUE DEL BIEN COMÚN</span>
                                    <span className="text-cyan-400">{currentAction.moralFrameworks.commonGood}/100</span>
                                </div>
                                <div className="h-1.5 bg-gray-950 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: `${currentAction.moralFrameworks.commonGood}%` }}
                                        className="h-full bg-cyan-400" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Computer ethics commandments */}
                    <div className="bg-[#030712]/80 border border-gray-800 p-5 rounded-xl flex-grow">
                        <div className="flex items-center gap-2 mb-3">
                            <FaRegFileAlt className="text-cyan-400 text-sm" />
                            <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">MANDAMIENTOS_COMPLIANCE</span>
                        </div>
                        
                        <div className="space-y-3 font-sans text-xs">
                            {isEthical ? (
                                <>
                                    <span className="text-[10px] text-green-400 font-mono block uppercase">✔ MANDAMIENTOS RESPETADOS:</span>
                                    {scenario.ethicalAction.respectedCommandments.map((cmd, idx) => (
                                        <div key={idx} className="flex items-start gap-2 text-gray-400 p-2 bg-green-500/5 rounded border border-green-500/10">
                                            <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>{cmd}</span>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <span className="text-[10px] text-red-500 font-mono block uppercase">⚠ MANDAMIENTOS VIOLADOS:</span>
                                    {scenario.unethicalAction.violatedCommandments.map((cmd, idx) => (
                                        <div key={idx} className="flex items-start gap-2 text-gray-400 p-2 bg-red-500/5 rounded border border-red-500/10">
                                            <FaTimesCircle className="text-red-500 mt-0.5 flex-shrink-0" />
                                            <span>{cmd}</span>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Ambient visual background glow */}
            <div className={`absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-[100px] pointer-events-none opacity-40 transition-all duration-700 ${
                isEthical ? 'bg-green-500/20' : 'bg-red-500/20'
            }`} />
        </div>
    );
};

export default EthicsSimulator;

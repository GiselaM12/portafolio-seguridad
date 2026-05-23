import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FaShieldAlt, FaInfoCircle, FaCheckCircle, FaTimesCircle, 
    FaFilePdf, FaTerminal, FaBalanceScale, FaGavel, FaLock, 
    FaUserSecret, FaRegFileAlt, FaLockOpen, FaSkullCrossbones,
    FaArrowRight, FaCodeBranch, FaExclamationTriangle
} from 'react-icons/fa';
import { jsPDF } from 'jspdf';

const scenariosData = [
    {
        id: 1,
        title: "Escenario 01: Acceso No Autorizado Interno",
        description: "Un especialista en ciberseguridad corporativa detecta en los logs que un compañero accedió a correos privados del Director General sin autorización, alegando que buscaba detectar posibles fugas de información.",
        dilema: "Decidir entre avalar un acceso no autorizado basándose en una intención presuntamente protectora, o aplicar de manera irrestricta las políticas de acceso y confidencialidad corporativas, reportando y sancionando la violación a la privacidad.",
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
            legalImpact: "Protege la privacidad corporativa, fortalece la confianza interna y cumple con los controles de acceso de ISO 27001 (A.9) y la directiva de gobernanza corporativa."
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
        dilema: "Balancear el beneficio egoísta (explotar la falla para ganancia económica personal o profesional, o retener el hallazgo como palanca de negociación) frente al deber profesional de reportar y mitigar una falla crítica de manera inmediata para proteger los activos del cliente y sus usuarios.",
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
            legalImpact: "Establece altos estándares profesionales, previene pérdidas financieras y cumple con el principio de debida diligencia de NIST CSF."
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
        dilema: "Decidir si el fin legítimo de proteger los activos de información de la empresa justifica el uso de métodos coercitivos y de manipulación psicológica basados en la recolección masiva de datos personales de fuentes públicas.",
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
    const [activeTab, setActiveTab] = useState('AUDIT_SHELL');
    
    // Terminal Shell State
    const [terminalHistory, setTerminalHistory] = useState([]);
    const [terminalInput, setTerminalInput] = useState('');
    const terminalEndRef = useRef(null);

    const scenario = scenariosData.find(s => s.id === selectedScenarioId);
    const currentAction = isEthical ? scenario.ethicalAction : scenario.unethicalAction;

    // Trigger initial terminal logs on mount/scenario change
    useEffect(() => {
        const welcomeLogs = [
            `[SYS] SECURE SECOPS SHELL INITIALIZED.`,
            `[SYS] AUDITOR IDENTIFIED: G. Moreno Solis (ID: 176522)`,
            `[SYS] TARGET: ESCENARIO 0${scenario.id} - ${scenario.title.split(': ')[1]}`,
            `[SYS] Running diagnostic scan...`,
            `[WARN] Potential ethical anomaly detected. Security policies require auditing.`,
            `[SYS] Type 'help' to list console commands.`,
            `[SYS] Ready. Current posture: [${isEthical ? 'ETHICAL_COMPLIANCE' : 'SECURITY_VIOLATION'}]`,
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
            `[AUDIT] Action applied: "${action.title}"`,
            `[AUDIT] CIA Impact Matrix calculated: C=${action.cia.c}%, I=${action.cia.i}%, A=${action.cia.a}%`,
            `[AUDIT] Moral Framework Assessment: Utilitarianism=${action.moralFrameworks.util}/100, Rights=${action.moralFrameworks.rights}/100`,
            `[AUDIT] Compliance Check: ${ethicalPosture ? 'OK - SECURE OPERATION' : 'CRITICAL WARNING - VIOLATIONS DETECTED'}`,
            `[AUDIT] Classification: ${action.crimeClassification}`,
            `[SYS] Current posture updated to: [${status}]`,
            `guest@seops:~/audit$ `
        ];
        setTerminalHistory(prev => [...prev.slice(0, -1), ...newLogs]);
    };

    // Scroll terminal to bottom
    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [terminalHistory]);

    // Handle terminal input commands
    const handleTerminalCommand = (e) => {
        if (e.key === 'Enter') {
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
                    response.push(
                        `[AUDIT] Toggling posture to ETHICAL...`,
                        `[SYS] Re-running compliance scanner...`,
                        `[SYS] Posture updated to: [ETHICAL_COMPLIANCE]`
                    );
                } else if (cmd === 'decide unethical') {
                    setIsEthical(false);
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
                        return; // Welcome logs handle state resetting
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

        // Background / Styling variables
        const primaryColor = [22, 189, 212]; // Cyan
        const errorColor = [239, 68, 68]; // Red
        const accentColor = isEthical ? primaryColor : errorColor;

        // Custom Header layout
        doc.setFillColor(6, 10, 20); // Dark theme header card
        doc.rect(0, 0, 210, 42, 'F');
        
        // Document Title
        doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
        doc.setFont('courier', 'bold');
        doc.setFontSize(15);
        doc.text('DICTAMEN TECNICO DE AUDITORIA DE SEGURIDAD', 15, 16);
        
        doc.setTextColor(160, 160, 160);
        doc.setFontSize(9);
        doc.setFont('courier', 'normal');
        doc.text('UNIVERSIDAD POLITECNICA DE SAN LUIS POTOSI', 15, 23);
        doc.text('MATERIA: CNO V - SEGURIDAD INFORMATICA', 15, 27);
        doc.text(`AUDITOR: GISELA GERALDINE MORENO SOLIS (176522)`, 15, 31);
        doc.text(`EQUIPO 1 | FECHA: ${new Date().toLocaleDateString()} | STATUS: AUDITADO`, 15, 35);
        
        // Line break
        doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
        doc.setLineWidth(0.8);
        doc.line(0, 42, 210, 42);

        // Body Content
        doc.setTextColor(20, 20, 20); 
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.text(`REF: INCIDENTE_0${scenario.id} - ${scenario.title.toUpperCase()}`, 15, 54);
        
        // Scenario Description
        doc.setFontSize(10);
        doc.text('SINOPSIS DEL ESCENARIO:', 15, 64);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(60, 60, 60);
        const descText = doc.splitTextToSize(scenario.description, 180);
        doc.text(descText, 15, 69);

        let currentY = 69 + (descText.length * 5) + 6;

        // Dilema Ético
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(20, 20, 20);
        doc.text('DILEMA ETICO DETECTADO:', 15, currentY);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(60, 60, 60);
        const dilemaText = doc.splitTextToSize(scenario.dilema, 180);
        doc.text(dilemaText, 15, currentY + 5);

        currentY = currentY + 5 + (dilemaText.length * 5) + 6;

        // Decision Selected
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(20, 20, 20);
        doc.text('DICTAMEN / ACCION SELECCIONADA POR EL AUDITOR:', 15, currentY);
        doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
        doc.text(`${currentAction.title.toUpperCase()} [${isEthical ? 'NOMINAL / RESPONSABLE' : 'ALERTA / NEGLIGENTE'}]`, 15, currentY + 5);
        
        doc.setTextColor(60, 60, 60);
        doc.setFont('helvetica', 'normal');
        const actionDesc = doc.splitTextToSize(currentAction.description, 180);
        doc.text(actionDesc, 15, currentY + 10);

        currentY = currentY + 10 + (actionDesc.length * 5) + 8;

        // Draw Metrics Table block
        doc.setFillColor(242, 245, 249);
        doc.rect(15, currentY, 180, 52, 'F');
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.2);
        doc.rect(15, currentY, 180, 52, 'D');

        // Table headers
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(20, 20, 20);
        doc.text('EVALUACION TECNICA (TRIA-CIA)', 20, currentY + 7);
        doc.setFont('helvetica', 'normal');
        doc.text(`Confidencialidad: ${currentAction.cia.c}%`, 20, currentY + 13);
        doc.text(`Integridad:       ${currentAction.cia.i}%`, 20, currentY + 18);
        doc.text(`Disponibilidad:   ${currentAction.cia.a}%`, 20, currentY + 23);

        doc.setFont('helvetica', 'bold');
        doc.text('MARCOS DE ETICA PROFESIONAL', 105, currentY + 7);
        doc.setFont('helvetica', 'normal');
        doc.text(`Etica Utilitarista:      ${currentAction.moralFrameworks.util}/100`, 105, currentY + 13);
        doc.text(`Enfoque de Derechos:    ${currentAction.moralFrameworks.rights}/100`, 105, currentY + 18);
        doc.text(`Enfoque del Bien Comun:  ${currentAction.moralFrameworks.commonGood}/100`, 105, currentY + 23);

        // Classification Row
        doc.setFont('helvetica', 'bold');
        doc.text('CLASIFICACION LEGAL DEL DELITO:', 20, currentY + 32);
        doc.setFont('helvetica', 'normal');
        doc.text(currentAction.crimeClassification, 20, currentY + 37);

        doc.setFont('helvetica', 'bold');
        doc.text('IMPACTO REGULATORIO:', 20, currentY + 43);
        doc.setFont('helvetica', 'normal');
        doc.text(currentAction.legalImpact, 20, currentY + 48);

        currentY = currentY + 52 + 10;

        // Commandments Section
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(20, 20, 20);
        doc.text('MANDAMIENTOS DE ETICA INFORMATICA APLICADOS:', 15, currentY);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(60, 60, 60);

        let cmdY = currentY + 6;
        const commandments = isEthical ? currentAction.respectedCommandments : currentAction.violatedCommandments;
        
        if (commandments.length > 0) {
            commandments.forEach((cmd) => {
                doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
                doc.text(isEthical ? '[RESPETADO] ' : '[VIOLADO]   ', 15, cmdY);
                doc.setTextColor(60, 60, 60);
                const splitCmd = doc.splitTextToSize(cmd, 160);
                doc.text(splitCmd, 42, cmdY);
                cmdY += (splitCmd.length * 5) + 1;
            });
        } else {
            doc.text('No se registran transgresiones éticas directas en esta postura.', 15, cmdY);
            cmdY += 7;
        }

        // Footer lines
        doc.setDrawColor(180, 180, 180);
        doc.line(15, 262, 90, 262);
        doc.line(120, 262, 195, 262);
        
        doc.setFontSize(8);
        doc.setTextColor(80, 80, 80);
        doc.text('Gisela Geraldine Moreno Solis', 25, 266);
        doc.text('ALUMNA - FIRMA DEL AUDITOR', 25, 270);
        
        doc.text('Mtro. Servando Lopez Contreras', 130, 266);
        doc.text('FIRMA / APROBACION DEL DOCENTE', 130, 270);

        doc.save(`reporte-auditoria-dilema-${scenario.id}.pdf`);
    };

    return (
        <div className="bg-[#050913]/90 border border-cyan-500/20 rounded-3xl overflow-hidden shadow-2xl relative">
            
            {/* Console HUD Header */}
            <div className="bg-[#081222]/90 border-b border-cyan-500/10 px-6 py-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)] animate-pulse">
                        <FaTerminal />
                    </span>
                    <div>
                        <h4 className="text-white font-mono text-xs font-bold tracking-widest uppercase">
                            AUDIT_MATRIX_CONSOLE_v2.0.1
                        </h4>
                        <p className="text-[10px] text-cyan-400/80 font-mono tracking-wider flex items-center gap-1.5 mt-0.5">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                            SECURE NODE // PARCIAL 3 COMPLIANCE
                        </p>
                    </div>
                </div>

                {/* Subtitle / Scenarios tabs */}
                <div className="flex bg-black/40 border border-gray-800 p-1 rounded-lg">
                    {scenariosData.map(s => (
                        <button
                            key={s.id}
                            onClick={() => {
                                setSelectedScenarioId(s.id);
                                setIsEthical(true);
                            }}
                            className={`px-3 py-1 text-[10px] font-mono rounded transition-all ${
                                selectedScenarioId === s.id
                                ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20 font-bold'
                                : 'text-gray-500 hover:text-gray-300'
                            }`}
                        >
                            {`CASO_0${s.id}`}
                        </button>
                    ))}
                </div>
                
                {/* Export button */}
                <button
                    onClick={handleExportPDF}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 font-mono text-xs rounded transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)] active:scale-95"
                >
                    <FaFilePdf className="text-sm" />
                    <span>EXPORTAR DICTAMEN (PDF)</span>
                </button>
            </div>

            {/* Custom Tabbed Hub Layout */}
            <div className="flex border-b border-gray-900 bg-black/20 text-xs font-mono">
                {[
                    { id: 'AUDIT_SHELL', label: 'AUDIT_SHELL.log', icon: <FaTerminal /> },
                    { id: 'CASE_DETAILS', label: 'CASE_DETAILS.txt', icon: <FaRegFileAlt /> },
                    { id: 'ETHICAL_MATRIX', label: 'ETHICAL_MATRIX.db', icon: <FaBalanceScale /> },
                    { id: 'COMPLIANCE_LAWS', label: 'COMPLIANCE_LAWS.sys', icon: <FaGavel /> }
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-5 py-3.5 border-r border-gray-950 flex items-center gap-2 tracking-wide transition-all ${
                            activeTab === tab.id
                            ? 'bg-[#070c18] text-cyan-400 border-b-2 border-b-cyan-500 font-bold'
                            : 'text-gray-500 hover:text-gray-300 hover:bg-white/3'
                        }`}
                    >
                        {tab.icon}
                        <span>{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Main Interactive Screen */}
            <div className="p-6 md:p-8 min-h-[460px] bg-[#03060c] flex flex-col justify-between">
                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab + '_' + selectedScenarioId}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex-grow flex flex-col"
                    >
                        {/* TAB 1: Terminal Shell */}
                        {activeTab === 'AUDIT_SHELL' && (
                            <div className="flex-grow flex flex-col justify-between font-mono text-xs text-green-400 bg-black/80 rounded-xl border border-gray-900 p-5 shadow-inner">
                                <div className="h-[320px] overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-gray-800 pr-2">
                                    {terminalHistory.map((line, idx) => {
                                        let color = "text-green-400";
                                        if (line.includes('[WARN]')) color = "text-amber-500";
                                        if (line.includes('[SYS]')) color = "text-cyan-400";
                                        if (line.includes('[AUDIT]')) color = "text-indigo-400";
                                        if (line.includes('WARNING - VIOLATIONS')) color = "text-red-500 font-bold";
                                        if (line.includes('guest@seops')) color = "text-white/80";

                                        return (
                                            <div key={idx} className={`${color} leading-relaxed whitespace-pre-wrap`}>
                                                {line}
                                            </div>
                                        );
                                    })}
                                    <div ref={terminalEndRef} />
                                </div>
                                <div className="flex items-center gap-2 border-t border-gray-900 pt-3 mt-3">
                                    <span className="text-white/70">guest@seops:~/audit$</span>
                                    <input
                                        type="text"
                                        value={terminalInput}
                                        onChange={(e) => setTerminalInput(e.target.value)}
                                        onKeyDown={handleTerminalCommand}
                                        placeholder="Type 'help' for instructions..."
                                        className="flex-grow bg-transparent text-white focus:outline-none border-none caret-cyan-400 font-mono text-xs"
                                    />
                                </div>
                            </div>
                        )}

                        {/* TAB 2: Case Details */}
                        {activeTab === 'CASE_DETAILS' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                                <div className="bg-[#070d18] border border-cyan-500/10 p-5 rounded-xl flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3 text-cyan-400">
                                            <FaInfoCircle />
                                            <span className="font-mono text-xs uppercase tracking-wider">RESUMEN DEL CASO</span>
                                        </div>
                                        <h3 className="text-white font-bold text-base mb-2 font-mono">{scenario.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">{scenario.description}</p>
                                    </div>
                                    <div className="bg-black/40 border border-gray-800 p-4 rounded-lg">
                                        <span className="text-[10px] text-gray-500 font-mono block mb-1">DILEMA ÉTICO IDENTIFICADO:</span>
                                        <p className="text-white text-xs leading-relaxed font-mono">{scenario.dilema}</p>
                                    </div>
                                </div>

                                <div className="bg-[#070d18] border border-cyan-500/10 p-5 rounded-xl flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3 text-cyan-400">
                                            <FaUserSecret />
                                            <span className="font-mono text-xs uppercase tracking-wider">PLAN DE ACCIÓN DEL ESPECIALISTA</span>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                            Como analista y responsable de ciberseguridad, se definen los siguientes cursos de acción posibles:
                                        </p>
                                        <div className="space-y-3">
                                            <div className="p-3 bg-green-500/5 rounded border border-green-500/10">
                                                <span className="text-green-400 font-bold text-xs font-mono block">✔ ACCIÓN ÉTICA Y CUMPLIMIENTO:</span>
                                                <p className="text-xs text-gray-400 leading-relaxed mt-1">{scenario.ethicalAction.title} - {scenario.ethicalAction.description}</p>
                                            </div>
                                            <div className="p-3 bg-red-500/5 rounded border border-red-500/10">
                                                <span className="text-red-400 font-bold text-xs font-mono block">❌ ACCIÓN NEGLIGENTE Y RIESGO:</span>
                                                <p className="text-xs text-gray-400 leading-relaxed mt-1">{scenario.unethicalAction.title} - {scenario.unethicalAction.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* TAB 3: Ethical Matrix & CIA */}
                        {activeTab === 'ETHICAL_MATRIX' && (
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-grow">
                                <div className="lg:col-span-8 bg-[#070d18] border border-cyan-500/10 p-5 rounded-xl flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4 text-cyan-400">
                                            <FaBalanceScale />
                                            <span className="font-mono text-xs uppercase tracking-wider">JUSTIFICACIÓN DESDE MARCOS ÉTICOS</span>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="bg-black/30 p-4 border border-gray-800 rounded-lg h-full flex flex-col justify-between">
                                                <h4 className="text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider mb-2">A) Ética Utilitarista</h4>
                                                <p className="text-xs text-gray-400 leading-relaxed">
                                                    {isEthical 
                                                        ? "Incorrecto violar la norma. El perjuicio sistémico potencial supera las intenciones preventivas del empleado, rompiendo la confianza." 
                                                        : "Falsa utilidad. Pretender proteger los activos usando canales ilegítimos debilita la seguridad y provoca daños severos colaterales."
                                                    }
                                                </p>
                                            </div>
                                            <div className="bg-black/30 p-4 border border-gray-800 rounded-lg h-full flex flex-col justify-between">
                                                <h4 className="text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider mb-2">B) Enfoque de Derechos</h4>
                                                <p className="text-xs text-gray-400 leading-relaxed">
                                                    {isEthical 
                                                        ? "Correcto. Respeta inalienablemente los derechos del director/cliente a la privacidad y el debido proceso de auditoría autorizada." 
                                                        : "Violado. Toda persona tiene derecho a la confidencialidad de sus comunicaciones y a no ser coaccionada o manipulada."
                                                    }
                                                </p>
                                            </div>
                                            <div className="bg-black/30 p-4 border border-gray-800 rounded-lg h-full flex flex-col justify-between">
                                                <h4 className="text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider mb-2">C) Bien Común</h4>
                                                <p className="text-xs text-gray-400 leading-relaxed">
                                                    {isEthical 
                                                        ? "Protegido. Fomenta un ambiente corporativo de confianza, reglas claras, gobernanza y transparencia." 
                                                        : "Afectado. Crea un ambiente insostenible de desconfianza mutua y vigilancia arbitraria, destruyendo la cohesión."
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-3.5 bg-black/40 rounded-lg border border-gray-800 flex items-center justify-between text-xs font-mono">
                                        <span className="text-gray-500">PUNTUACIÓN DE MARCOS ÉTICOS:</span>
                                        <div className="flex gap-4">
                                            <span className="text-cyan-400">UTILIT: {currentAction.moralFrameworks.util}/100</span>
                                            <span className="text-cyan-400">DERECH: {currentAction.moralFrameworks.rights}/100</span>
                                            <span className="text-cyan-400">B_COMUN: {currentAction.moralFrameworks.commonGood}/100</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-4 bg-[#070d18] border border-cyan-500/10 p-5 rounded-xl flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4 text-cyan-400">
                                            <FaShieldAlt />
                                            <span className="font-mono text-xs uppercase tracking-wider">MÉTRICA AMBIENTAL CIA</span>
                                        </div>
                                        <div className="space-y-5">
                                            {/* C */}
                                            <div>
                                                <div className="flex justify-between text-xs font-mono mb-1">
                                                    <span className="text-gray-500">CONFIDENCIALIDAD</span>
                                                    <span className={currentAction.cia.c > 50 ? 'text-green-400' : 'text-red-400'}>{currentAction.cia.c}%</span>
                                                </div>
                                                <div className="h-1.5 bg-black rounded-full overflow-hidden">
                                                    <div className={`h-full rounded-full ${currentAction.cia.c > 50 ? 'bg-green-500 shadow-[0_0_6px_#22c55e]' : 'bg-red-500 shadow-[0_0_6px_#ef4444]'}`} style={{ width: `${currentAction.cia.c}%` }}></div>
                                                </div>
                                            </div>
                                            {/* I */}
                                            <div>
                                                <div className="flex justify-between text-xs font-mono mb-1">
                                                    <span className="text-gray-500">INTEGRIDAD</span>
                                                    <span className={currentAction.cia.i > 50 ? 'text-green-400' : 'text-red-400'}>{currentAction.cia.i}%</span>
                                                </div>
                                                <div className="h-1.5 bg-black rounded-full overflow-hidden">
                                                    <div className={`h-full rounded-full ${currentAction.cia.i > 50 ? 'bg-green-500 shadow-[0_0_6px_#22c55e]' : 'bg-red-500 shadow-[0_0_6px_#ef4444]'}`} style={{ width: `${currentAction.cia.i}%` }}></div>
                                                </div>
                                            </div>
                                            {/* A */}
                                            <div>
                                                <div className="flex justify-between text-xs font-mono mb-1">
                                                    <span className="text-gray-500">DISPONIBILIDAD</span>
                                                    <span className={currentAction.cia.a > 50 ? 'text-green-400' : 'text-red-400'}>{currentAction.cia.a}%</span>
                                                </div>
                                                <div className="h-1.5 bg-black rounded-full overflow-hidden">
                                                    <div className={`h-full rounded-full ${currentAction.cia.a > 50 ? 'bg-green-500 shadow-[0_0_6px_#22c55e]' : 'bg-red-500 shadow-[0_0_6px_#ef4444]'}`} style={{ width: `${currentAction.cia.a}%` }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`p-4 rounded-lg border text-center text-xs font-mono mt-4 ${
                                        isEthical 
                                        ? 'bg-green-500/5 border-green-500/20 text-green-400'
                                        : 'bg-red-500/5 border-red-500/20 text-red-400'
                                    }`}>
                                        {isEthical 
                                            ? '>>> SISTEMA NOMINAL Y RESPONSABLE'
                                            : '>>> ALERTA: COMPROMISO EN COMPLIANCE'
                                        }
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* TAB 4: Compliance Laws & Commandments */}
                        {activeTab === 'COMPLIANCE_LAWS' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                                <div className="bg-[#070d18] border border-cyan-500/10 p-5 rounded-xl flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3 text-cyan-400">
                                            <FaGavel />
                                            <span className="font-mono text-xs uppercase tracking-wider">MARCO PENAL Y REGULATORIO</span>
                                        </div>
                                        <div className="space-y-4 text-xs">
                                            <div>
                                                <span className="text-[10px] text-gray-500 font-mono block">CLASIFICACIÓN DEL DELITO:</span>
                                                <p className="text-white font-mono font-bold mt-1">{currentAction.crimeClassification}</p>
                                            </div>
                                            <div>
                                                <span className="text-[10px] text-gray-500 font-mono block">IMPACTO DIRECTO E INFRACCIONES:</span>
                                                <p className="text-gray-400 leading-relaxed mt-1">{currentAction.legalImpact}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-black/30 border border-gray-800 p-4 rounded-lg flex items-center gap-3">
                                        <FaLock className="text-cyan-400 text-lg flex-shrink-0" />
                                        <div className="text-[10px] font-mono leading-relaxed text-gray-500">
                                            Cumplimiento de estándares corporativos internacionales: <strong class="text-white">ISO 27001</strong> y gobernanza de datos <strong class="text-white">NIST SP 800-50</strong>.
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#070d18] border border-cyan-500/10 p-5 rounded-xl flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3 text-cyan-400">
                                            <FaRegFileAlt />
                                            <span className="font-mono text-xs uppercase tracking-wider">10 MANDAMIENTOS DE ÉTICA INFORMÁTICA</span>
                                        </div>
                                        <div className="space-y-2 text-xs">
                                            {isEthical ? (
                                                <>
                                                    <span className="text-[10px] text-green-400 font-mono block uppercase">✔ Mandamientos Respetados:</span>
                                                    {scenario.ethicalAction.respectedCommandments.map((cmd, idx) => (
                                                        <div key={idx} className="flex items-start gap-2 text-gray-400 p-2.5 bg-green-500/5 rounded border border-green-500/10 font-mono text-[11px]">
                                                            <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                                                            <span>{cmd}</span>
                                                        </div>
                                                    ))}
                                                </>
                                            ) : (
                                                <>
                                                    <span className="text-[10px] text-red-500 font-mono block uppercase">⚠ Mandamientos Violados:</span>
                                                    {scenario.unethicalAction.violatedCommandments.map((cmd, idx) => (
                                                        <div key={idx} className="flex items-start gap-2 text-gray-400 p-2.5 bg-red-500/5 rounded border border-red-500/10 font-mono text-[11px]">
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
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Interactive Toggles Bar at the Bottom */}
                <div className="border-t border-gray-900 pt-5 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="text-gray-500">AUDITOR_DECISION:</span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    setIsEthical(true);
                                    logPostures(true);
                                }}
                                className={`px-4 py-1.5 rounded text-[10px] font-bold border transition-all flex items-center gap-1.5 uppercase ${
                                    isEthical
                                    ? 'bg-green-500/10 text-green-400 border-green-500/30 shadow-[0_0_10px_rgba(34,197,94,0.1)]'
                                    : 'bg-black text-gray-500 border-gray-800 hover:text-gray-400 hover:border-gray-700'
                                }`}
                            >
                                <FaCheckCircle />
                                <span>Ético</span>
                            </button>
                            <button
                                onClick={() => {
                                    setIsEthical(false);
                                    logPostures(false);
                                }}
                                className={`px-4 py-1.5 rounded text-[10px] font-bold border transition-all flex items-center gap-1.5 uppercase ${
                                    !isEthical
                                    ? 'bg-red-500/10 text-red-400 border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.1)]'
                                    : 'bg-black text-gray-500 border-gray-800 hover:text-gray-400 hover:border-gray-700'
                                }`}
                            >
                                <FaSkullCrossbones />
                                <span>Negligente</span>
                            </button>
                        </div>
                    </div>

                    <div className="text-[10px] text-gray-500 font-mono flex items-center gap-1">
                        <span>CLEARANCE_LVL_5</span>
                        <FaLock className="text-cyan-500 animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EthicsSimulator;

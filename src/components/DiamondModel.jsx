import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserSecret, FaServer, FaCode, FaCrosshairs, FaShieldAlt, FaProjectDiagram, FaFilePdf, FaTerminal, FaNetworkWired, FaInfoCircle, FaBug, FaSearch } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const DiamondModel = () => {
    const [activeNode, setActiveNode] = useState(null);
    const [activeThread, setActiveThread] = useState('all');

    const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

    const nodes = {
        adversary: {
            id: 'adversary',
            icon: FaUserSecret,
            title: 'Adversario',
            color: 'text-rose-500',
            bg: 'bg-rose-500/10',
            border: 'border-rose-500/30',
            desc: 'El actor o grupo responsable de llevar a cabo el ataque.',
            example: 'Un grupo de ciberdelincuencia o una APT (Amenaza Persistente Avanzada).'
        },
        capability: {
            id: 'capability',
            icon: FaCode,
            title: 'Capacidad',
            color: 'text-amber-500',
            bg: 'bg-amber-500/10',
            border: 'border-amber-500/30',
            desc: 'Herramientas, técnicas, software o conocimientos utilizados por el atacante.',
            example: 'Un malware tipo troyano (RAT) o un exploit de día cero.'
        },
        infrastructure: {
            id: 'infrastructure',
            icon: FaServer,
            title: 'Infraestructura',
            color: 'text-cyan-500',
            bg: 'bg-cyan-500/10',
            border: 'border-cyan-500/30',
            desc: 'Los recursos físicos o lógicos que permiten la comunicación entre el adversario y la víctima.',
            example: 'Direcciones IP, servidores de Comando y Control (C2) o nombres de dominio.'
        },
        victim: {
            id: 'victim',
            icon: FaCrosshairs,
            title: 'Víctima',
            color: 'text-emerald-500',
            bg: 'bg-emerald-500/10',
            border: 'border-emerald-500/30',
            desc: 'El objetivo del ataque, que puede ser una persona, un dispositivo o una organización entera.',
            example: 'El servidor de base de datos de una institución financiera o el equipo de un administrador.'
        }
    };

    const killChainMap = [
        { event: 'Envío de phishing', phase: 'Distribución (Delivery)' },
        { event: 'Ejecución del malware', phase: 'Explotación / Instalación' },
        { event: 'Conexión a C2', phase: 'Comando y Control (C2)' },
        { event: 'Detección de malware', phase: 'Acciones sobre objetivos (etapa de post-compromiso)' }
    ];

    const handleExportPDF = () => {
        const doc = new jsPDF('p', 'mm', 'a4');
        
        doc.setFillColor(3, 7, 18);
        doc.rect(0, 0, 210, 297, 'F');

        doc.setDrawColor(79, 70, 229);
        doc.setLineWidth(0.5);
        doc.line(15, 20, 195, 20);
        
        doc.setFont('courier', 'bold');
        doc.setTextColor(129, 140, 248);
        doc.setFontSize(14);
        doc.text('ACTIVIDAD 18: MODELO DIAMANTE (REPORTE FORENSE)', 15, 30);
        
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(200, 200, 200);
        doc.setFontSize(10);
        doc.text('Equipo 1 - Análisis de Intrusiones y Pivoting', 15, 38);

        doc.line(15, 45, 195, 45);

        // Nodos
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(255, 255, 255);
        doc.text('1. NODOS DEL MODELO DIAMANTE', 15, 55);

        let y = 65;
        Object.values(nodes).forEach(node => {
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(129, 140, 248);
            doc.text(`${node.title.toUpperCase()}:`, 15, y);
            
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(180, 180, 180);
            doc.text(`Desc: ${node.desc}`, 20, y + 6);
            doc.text(`Ejemplo: ${node.example}`, 20, y + 12);
            y += 22;
        });

        // Kill Chain
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(255, 255, 255);
        doc.text('2. RELACION CON CYBER KILL CHAIN', 15, y + 10);
        
        y += 20;
        killChainMap.forEach(kc => {
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(200, 200, 200);
            doc.text(`> Evento: ${kc.event}`, 15, y);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(150, 150, 150);
            doc.text(`  Fase KC: ${kc.phase}`, 15, y + 5);
            y += 12;
        });

        // Preguntas Clave
        y += 10;
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(255, 255, 255);
        doc.text('3. RESPUESTAS CLAVE DEL ANALISIS', 15, y);

        const qa = [
            { q: '¿Quién es el adversario?', a: 'El actor identificado a través de la investigación de WHOIS/IP.' },
            { q: '¿Cuál es la capacidad utilizada?', a: 'Malware con funciones de conexión remota a centros de mando.' },
            { q: '¿Qué tipo de infraestructura se emplea?', a: 'Dominios C2 y servidores externos con IP públicas.' },
            { q: '¿Quién es la víctima primaria?', a: 'El host inicial donde se detectó la presencia del malware.' },
            { q: '¿Existe evidencia de movimiento lateral?', a: 'Sí, los logs muestran que múltiples hosts se conectan a IPs sospechosas.' }
        ];

        y += 10;
        qa.forEach(item => {
            if(y > 270) {
                doc.addPage();
                doc.setFillColor(3, 7, 18);
                doc.rect(0, 0, 210, 297, 'F');
                y = 20;
            }
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(129, 140, 248);
            const qLines = doc.splitTextToSize(item.q, 180);
            doc.text(qLines, 15, y);
            y += (qLines.length * 5);
            
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(180, 180, 180);
            const aLines = doc.splitTextToSize(item.a, 180);
            doc.text(aLines, 15, y);
            y += (aLines.length * 5) + 3;
        });

        doc.save(`reporte-modelo-diamante-act18.pdf`);
    };

    return (
        <div className="flex flex-col gap-8">
            
            {/* Header Block */}
            <div className="bg-[#050914] border border-indigo-500/30 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                    <div className="lg:col-span-8 space-y-4">
                        <div className="flex gap-3">
                            <span className="px-3 py-1 text-[10px] font-mono font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded">
                                INST: UPSLP
                            </span>
                            <span className="px-3 py-1 text-[10px] font-mono font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded">
                                MATERIA: CNO V
                            </span>
                            <span className="px-3 py-1 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded">
                                ACT18: MODELO DIAMANTE
                            </span>
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-mono font-black text-white tracking-tight uppercase">
                            Análisis de Intrusiones Avanzado
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                            Esta herramienta simula un entorno de Threat Intelligence basado en el Modelo Diamante. Permite mapear eventos anómalos (infección de malware, conexiones C2) y descubrir hilos de actividad complejos como el "Pivoting" dentro de la red corporativa.
                        </p>

                        <div className="border-t border-gray-900 pt-4 mt-6">
                            <h3 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2 mb-3">
                                <FaShieldAlt /> MIEMBROS DE EQUIPO 1
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[10px] font-mono text-gray-400">
                                <div>Aguilar Espinoza Juan Diego (173877)</div>
                                <div>Jasso Dávila Pedro Damián (176658)</div>
                                <div>Moreno Solís Gisela Geraldine (176522)</div>
                                <div>Palomo Cerdá José Armando (17593)</div>
                                <div>Zarate Domínguez David (175842)</div>
                                <div>Zorrilla Rivera Eduardo (175877)</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 bg-[#0a0f1c]/80 border border-indigo-500/20 p-5 rounded-2xl flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 text-indigo-400 mb-2">
                                <FaFilePdf className="text-xl" />
                                <span className="font-mono text-xs font-bold uppercase tracking-wider">EXPEDIENTE ORIGINAL</span>
                            </div>
                            <h4 className="text-white font-mono text-sm font-bold">act18-Equipo1.pdf</h4>
                            <p className="text-gray-500 text-[11px] font-mono mt-1.5 leading-relaxed">
                                Documento con el análisis de intrusiones, mapeo del evento y relación con la Kill Chain.
                            </p>
                        </div>
                        <a
                            href={`${baseUrl}#/visor-pdf/18`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 flex items-center justify-center gap-2.5 w-full py-3 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold rounded-xl transition-all"
                        >
                            <FaSearch className="text-sm" />
                            <span>VISUALIZAR EXPEDIENTE</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Interactive HUD */}
            <div className="bg-[#03060f]/90 border border-indigo-500/20 rounded-3xl overflow-hidden shadow-2xl relative">
                
                {/* HUD Header */}
                <div className="bg-[#060a16]/90 border-b border-indigo-500/10 px-6 py-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            <FaProjectDiagram />
                        </span>
                        <div>
                            <h4 className="text-white font-mono text-xs font-bold tracking-widest uppercase">
                                DIAMOND_MODEL_VISUALIZER
                            </h4>
                            <p className="text-[10px] text-indigo-400/80 font-mono tracking-wider flex items-center gap-1.5 mt-0.5">
                                <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-ping" />
                                APT THREAT TRACKING ACTIVE
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleExportPDF}
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 font-mono text-xs rounded-lg transition-all"
                    >
                        <FaFilePdf /> EXPORTAR ACTA (PDF)
                    </button>
                </div>

                <div className="p-6 md:p-10 flex flex-col xl:flex-row gap-10">
                    
                    {/* Left: Interactive Diamond */}
                    <div className="xl:w-1/2 flex flex-col items-center justify-center">
                        <h5 className="text-indigo-400 font-mono text-xs font-bold uppercase tracking-widest mb-12">Topología del Evento</h5>
                        
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            {/* Lines connecting nodes */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                                <line x1="50%" y1="10%" x2="90%" y2="50%" stroke="rgba(99,102,241,0.2)" strokeWidth="2" />
                                <line x1="90%" y1="50%" x2="50%" y2="90%" stroke="rgba(99,102,241,0.2)" strokeWidth="2" />
                                <line x1="50%" y1="90%" x2="10%" y2="50%" stroke="rgba(99,102,241,0.2)" strokeWidth="2" />
                                <line x1="10%" y1="50%" x2="50%" y2="10%" stroke="rgba(99,102,241,0.2)" strokeWidth="2" />
                                <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="rgba(99,102,241,0.1)" strokeWidth="1" strokeDasharray="4" />
                                <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="rgba(99,102,241,0.1)" strokeWidth="1" strokeDasharray="4" />
                            </svg>

                            {/* Nodes */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                <DiamondNode node={nodes.adversary} active={activeNode?.id === 'adversary'} onClick={() => setActiveNode(nodes.adversary)} />
                            </div>
                            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10">
                                <DiamondNode node={nodes.capability} active={activeNode?.id === 'capability'} onClick={() => setActiveNode(nodes.capability)} />
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
                                <DiamondNode node={nodes.victim} active={activeNode?.id === 'victim'} onClick={() => setActiveNode(nodes.victim)} />
                            </div>
                            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                <DiamondNode node={nodes.infrastructure} active={activeNode?.id === 'infrastructure'} onClick={() => setActiveNode(nodes.infrastructure)} />
                            </div>
                        </div>

                        {/* Node Info Panel */}
                        <div className="mt-16 w-full max-w-md h-32">
                            <AnimatePresence mode="wait">
                                {activeNode ? (
                                    <motion.div
                                        key={activeNode.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className={`p-4 border rounded-xl ${activeNode.bg} ${activeNode.border}`}
                                    >
                                        <h6 className={`font-mono font-bold text-sm mb-2 ${activeNode.color} flex items-center gap-2`}>
                                            <activeNode.icon /> {activeNode.title}
                                        </h6>
                                        <p className="text-gray-300 text-xs mb-2 leading-relaxed">{activeNode.desc}</p>
                                        <div className="text-[10px] text-gray-500 font-mono bg-black/40 p-2 rounded border border-gray-800">
                                            <span className="text-gray-400">Ejemplo:</span> {activeNode.example}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="h-full flex items-center justify-center border border-dashed border-gray-800 rounded-xl text-gray-600 font-mono text-xs text-center p-4">
                                        Selecciona un nodo del diamante para visualizar su contexto teórico y práctico.
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right: Analysis & Activity Threads */}
                    <div className="xl:w-1/2 flex flex-col gap-6">
                        
                        {/* Event Details */}
                        <div className="bg-[#060a16] border border-gray-800 rounded-2xl p-5">
                            <h5 className="text-white font-mono text-sm font-bold uppercase tracking-widest border-b border-gray-900 pb-3 mb-4 flex items-center gap-2">
                                <FaTerminal className="text-indigo-400" /> Escenario de Infección
                            </h5>
                            <ul className="space-y-2 text-xs text-gray-400 font-mono">
                                <li className="flex gap-2"><span className="text-indigo-500">&gt;</span> La víctima detecta malware.</li>
                                <li className="flex gap-2"><span className="text-indigo-500">&gt;</span> El malware contiene dominios de Comando y Control (C2).</li>
                                <li className="flex gap-2"><span className="text-indigo-500">&gt;</span> Los dominios resuelven a direcciones IP externas.</li>
                                <li className="flex gap-2"><span className="text-indigo-500">&gt;</span> Logs muestran múltiples hosts conectándose a esas IP.</li>
                                <li className="flex gap-2"><span className="text-indigo-500">&gt;</span> WHOIS/IP revela posible origen del atacante.</li>
                            </ul>
                        </div>

                        {/* Pivoting Animation */}
                        <div className="bg-[#050810] border border-indigo-500/20 rounded-2xl p-5 overflow-hidden relative group">
                            <h5 className="text-white font-mono text-sm font-bold uppercase tracking-widest mb-4 flex items-center justify-between">
                                <span className="flex items-center gap-2"><FaNetworkWired className="text-rose-400" /> Hilos de Actividad (Pivoting)</span>
                                <span className="text-[9px] text-gray-500 bg-gray-900 px-2 py-1 rounded">SIMULACIÓN VISUAL</span>
                            </h5>
                            
                            <div className="flex flex-col gap-6 mt-6">
                                {/* Thread 1 */}
                                <div className="relative">
                                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-800 -translate-y-1/2"></div>
                                    <div className="relative z-10 flex justify-between items-center px-4">
                                        <div className="bg-black border border-rose-500/30 p-2 rounded-lg flex flex-col items-center gap-1 shadow-[0_0_15px_rgba(244,63,94,0.15)]">
                                            <FaUserSecret className="text-rose-500 text-xl" />
                                            <span className="text-[8px] font-mono text-gray-400">Atacante Ext.</span>
                                        </div>
                                        <div className="text-[9px] font-mono text-cyan-500 bg-[#050810] px-2">1. Phishing</div>
                                        <div className="bg-black border border-emerald-500/50 p-2 rounded-lg flex flex-col items-center gap-1 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                                            <FaServer className="text-emerald-500 text-xl" />
                                            <span className="text-[8px] font-mono text-gray-400">Víctima 1 (Proxy)</span>
                                        </div>
                                    </div>
                                    {/* Animation dot */}
                                    <motion.div 
                                        className="absolute top-1/2 left-10 w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)]"
                                        animate={{ x: [0, 200] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>

                                {/* Thread 2 */}
                                <div className="relative ml-16 sm:ml-32 mt-4">
                                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-800 -translate-y-1/2"></div>
                                    <div className="relative z-10 flex justify-between items-center px-4">
                                        <div className="bg-black border border-emerald-500/50 p-2 rounded-lg flex flex-col items-center gap-1 opacity-50">
                                            <FaServer className="text-emerald-500 text-xl" />
                                        </div>
                                        <div className="text-[9px] font-mono text-rose-400 bg-[#050810] px-2">2. Pivoting (Túnel)</div>
                                        <div className="bg-black border border-amber-500/50 p-2 rounded-lg flex flex-col items-center gap-1 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                                            <FaServer className="text-amber-500 text-xl" />
                                            <span className="text-[8px] font-mono text-gray-400">Víctima 2 (Objetivo)</span>
                                        </div>
                                    </div>
                                    {/* Animation dot */}
                                    <motion.div 
                                        className="absolute top-1/2 left-10 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                                        animate={{ x: [0, 150] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                                    />
                                </div>
                            </div>
                            <p className="text-[10px] text-gray-500 mt-6 font-mono leading-relaxed bg-black/30 p-3 rounded border border-gray-900">
                                <strong className="text-emerald-400">Relación:</strong> El atacante utiliza el host comprometido (Víctima 1) como un proxy. Esto le permite ocultar su origen real y utilizar la confianza de la red interna para lanzar un ataque contra la segunda víctima, evadiendo controles perimetrales.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

const DiamondNode = ({ node, active, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-16 h-16 md:w-20 md:h-20 rotate-45 flex items-center justify-center transition-all duration-300 shadow-xl border-2 ${
                active 
                ? `${node.bg} ${node.border} scale-110 shadow-[0_0_30px_rgba(99,102,241,0.3)]` 
                : 'bg-[#0a0f1c] border-gray-800 hover:border-gray-600'
            }`}
        >
            <div className="-rotate-45 flex flex-col items-center gap-1">
                <node.icon className={`text-lg md:text-2xl ${active ? node.color : 'text-gray-600'}`} />
                <span className={`text-[8px] font-mono font-bold uppercase tracking-wider ${active ? node.color : 'text-gray-600'}`}>
                    {node.id.substring(0,3)}
                </span>
            </div>
        </button>
    );
};

export default DiamondModel;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserSecret, FaServer, FaCode, FaCrosshairs, FaShieldAlt, FaProjectDiagram, FaFilePdf, FaTerminal, FaNetworkWired, FaInfoCircle, FaBug, FaSearch } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
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
                        <div className="flex gap-4">
                            <span className="px-4 py-1.5 text-xs font-mono font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 rounded">
                                INST: UPSLP
                            </span>
                            <span className="px-4 py-1.5 text-xs font-mono font-bold text-rose-300 bg-rose-500/10 border border-rose-500/30 rounded">
                                MATERIA: CNO V
                            </span>
                            <span className="px-4 py-1.5 text-xs font-mono font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded">
                                ACT18: MODELO DIAMANTE
                            </span>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl font-mono font-black text-white tracking-tight uppercase shadow-indigo-500/20 drop-shadow-lg">
                            Análisis de Intrusiones Avanzado
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl">
                            Esta herramienta simula un entorno de Threat Intelligence basado en el Modelo Diamante. Permite mapear eventos anómalos (infección de malware, conexiones C2) y descubrir hilos de actividad complejos como el "Pivoting" dentro de la red corporativa.
                        </p>

                        <div className="border-t border-gray-800 pt-6 mt-8">
                            <h3 className="text-sm font-mono font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-3 mb-4">
                                <FaShieldAlt className="text-lg" /> MIEMBROS DEL EQUIPO 1
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs md:text-sm font-mono text-gray-300">
                                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>Aguilar Espinoza Juan Diego (173877)</div>
                                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>Jasso Dávila Pedro Damián (176658)</div>
                                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>Moreno Solís Gisela Geraldine (176522)</div>
                                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>Palomo Cerdá José Armando (17593)</div>
                                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>Zarate Domínguez David (175842)</div>
                                <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>Zorrilla Rivera Eduardo (175877)</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 bg-[#0a0f1c]/80 border border-indigo-500/20 p-5 rounded-2xl flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 text-indigo-400 mb-3">
                                <FaFilePdf className="text-2xl" />
                                <span className="font-mono text-sm font-bold uppercase tracking-wider">EXPEDIENTE ORIGINAL</span>
                            </div>
                            <h4 className="text-white font-mono text-base md:text-lg font-bold">act18-Equipo1.pdf</h4>
                            <p className="text-gray-400 text-xs md:text-sm font-mono mt-2 leading-relaxed">
                                Documento con el análisis de intrusiones, mapeo del evento y relación con la Kill Chain.
                            </p>
                        </div>
                        <a
                            href={`${baseUrl}#/visor-pdf/18`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 flex items-center justify-center gap-3 w-full py-4 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 hover:text-white font-mono text-sm font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(99,102,241,0.2)]"
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
                        <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                            <FaProjectDiagram className="text-xl" />
                        </span>
                        <div>
                            <h4 className="text-white font-mono text-sm md:text-base font-bold tracking-widest uppercase drop-shadow-md">
                                DIAMOND_MODEL_VISUALIZER
                            </h4>
                            <p className="text-xs text-indigo-400 font-mono tracking-wider flex items-center gap-2 mt-1">
                                <span className="w-2 h-2 bg-rose-500 rounded-full animate-ping shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                                APT THREAT TRACKING ACTIVE
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleExportPDF}
                        className="flex items-center gap-3 px-6 py-3 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/40 hover:border-indigo-400 text-indigo-300 hover:text-white font-mono text-sm rounded-xl transition-all shadow-[0_0_15px_rgba(99,102,241,0.15)]"
                    >
                        <FaFilePdf /> EXPORTAR ACTA (PDF)
                    </button>
                </div>

                <div className="p-6 md:p-10 flex flex-col xl:flex-row gap-12">
                    
                    {/* Left: Interactive Diamond */}
                    <div className="xl:w-5/12 flex flex-col items-center justify-start border-b xl:border-b-0 xl:border-r border-indigo-500/10 pb-12 xl:pb-0 xl:pr-12">
                        <h5 className="text-indigo-300 font-mono text-base font-bold uppercase tracking-widest mb-16 flex items-center gap-3">
                            <FaSearch /> Topología del Evento
                        </h5>
                        
                        <div className="relative w-72 h-72 md:w-96 md:h-96 my-8">
                            {/* Lines connecting nodes */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_10px_rgba(99,102,241,0.3)]" style={{ zIndex: 0 }}>
                                <line x1="50%" y1="10%" x2="90%" y2="50%" stroke="rgba(99,102,241,0.4)" strokeWidth="3" />
                                <line x1="90%" y1="50%" x2="50%" y2="90%" stroke="rgba(99,102,241,0.4)" strokeWidth="3" />
                                <line x1="50%" y1="90%" x2="10%" y2="50%" stroke="rgba(99,102,241,0.4)" strokeWidth="3" />
                                <line x1="10%" y1="50%" x2="50%" y2="10%" stroke="rgba(99,102,241,0.4)" strokeWidth="3" />
                                <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="rgba(99,102,241,0.2)" strokeWidth="2" strokeDasharray="6" />
                                <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="rgba(99,102,241,0.2)" strokeWidth="2" strokeDasharray="6" />
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
                        <div className="mt-16 w-full min-h-[180px]">
                            <AnimatePresence mode="wait">
                                {activeNode ? (
                                    <motion.div
                                        key={activeNode.id}
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                        className={`p-6 border-2 rounded-2xl ${activeNode.bg} ${activeNode.border} shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden`}
                                    >
                                        <div className={`absolute top-0 right-0 w-32 h-32 ${activeNode.bg.replace('/10', '/20')} blur-3xl -z-10`} />
                                        <h6 className={`font-mono font-black text-lg md:text-xl mb-3 ${activeNode.color} flex items-center gap-3 drop-shadow-md`}>
                                            <activeNode.icon className="text-2xl" /> {activeNode.title}
                                        </h6>
                                        <p className="text-gray-200 text-sm md:text-base mb-4 leading-relaxed font-sans">{activeNode.desc}</p>
                                        <div className="text-xs md:text-sm text-gray-300 font-mono bg-[#03050a]/80 p-4 rounded-xl border border-gray-700/50">
                                            <span className={`font-bold ${activeNode.color}`}>EJEMPLO:</span> {activeNode.example}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-gray-800 rounded-2xl text-gray-500 font-mono text-sm text-center p-8 bg-[#0a0f1c]/50">
                                        <FaInfoCircle className="text-3xl mb-4 text-gray-600" />
                                        <p>Selecciona un nodo del diamante para visualizar su contexto teórico y práctico de forma ampliada.</p>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right: Analysis & Activity Threads */}
                    <div className="xl:w-7/12 flex flex-col gap-8">
                        
                        {/* Event Details */}
                        <div className="bg-[#060a16] border-2 border-indigo-900/50 rounded-2xl p-6 shadow-lg">
                            <h5 className="text-white font-mono text-base md:text-lg font-bold uppercase tracking-widest border-b border-indigo-900/50 pb-4 mb-5 flex items-center gap-3">
                                <FaTerminal className="text-indigo-400 text-xl" /> Escenario de Infección
                            </h5>
                            <ul className="space-y-4 text-sm md:text-base text-gray-300 font-mono leading-relaxed">
                                <li className="flex gap-3 items-start"><span className="text-indigo-400 mt-1">&gt;</span> <span>La víctima detecta malware.</span></li>
                                <li className="flex gap-3 items-start"><span className="text-indigo-400 mt-1">&gt;</span> <span>El malware contiene dominios de <strong className="text-white font-black bg-indigo-900/40 px-1 rounded">Comando y Control (C2)</strong>.</span></li>
                                <li className="flex gap-3 items-start"><span className="text-indigo-400 mt-1">&gt;</span> <span>Los dominios resuelven a direcciones IP externas.</span></li>
                                <li className="flex gap-3 items-start"><span className="text-indigo-400 mt-1">&gt;</span> <span>Logs muestran múltiples hosts conectándose a esas IP.</span></li>
                                <li className="flex gap-3 items-start"><span className="text-indigo-400 mt-1">&gt;</span> <span>WHOIS/IP revela posible origen del atacante.</span></li>
                            </ul>
                        </div>

                        {/* Pivoting Animation */}
                        <div className="bg-[#050810] border-2 border-indigo-500/30 rounded-2xl p-6 md:p-8 overflow-hidden relative group shadow-[0_0_25px_rgba(99,102,241,0.1)]">
                            <h5 className="text-white font-mono text-base md:text-lg font-bold uppercase tracking-widest mb-6 flex items-center justify-between">
                                <span className="flex items-center gap-3"><FaNetworkWired className="text-rose-400 text-xl" /> Hilos de Actividad <span className="text-indigo-300">(Pivoting)</span></span>
                                <span className="text-[10px] md:text-xs font-bold text-gray-400 bg-gray-900 border border-gray-700 px-3 py-1.5 rounded-full drop-shadow-lg">SIMULACIÓN VISUAL</span>
                            </h5>
                            
                            <div className="flex flex-col gap-10 mt-10">
                                {/* Thread 1 */}
                                <div className="relative">
                                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-indigo-900/40 -translate-y-1/2"></div>
                                    <div className="relative z-10 flex justify-between items-center px-2 md:px-6">
                                        <div className="bg-[#03050a] border-2 border-rose-500/50 p-3 md:p-4 rounded-xl flex flex-col items-center gap-2 shadow-[0_0_20px_rgba(244,63,94,0.3)] z-20">
                                            <FaUserSecret className="text-rose-500 text-3xl" />
                                            <span className="text-[10px] md:text-xs font-mono font-bold text-rose-300 whitespace-nowrap">Atacante Ext.</span>
                                        </div>
                                        <div className="text-[10px] md:text-xs font-mono font-bold text-cyan-400 bg-[#050810] border border-cyan-900/50 px-3 py-1 rounded-full z-20 shadow-md">1. Phishing</div>
                                        <div className="bg-[#03050a] border-2 border-emerald-500/50 p-3 md:p-4 rounded-xl flex flex-col items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] z-20">
                                            <FaServer className="text-emerald-500 text-3xl" />
                                            <span className="text-[10px] md:text-xs font-mono font-bold text-emerald-300 whitespace-nowrap">Víctima 1 (Proxy)</span>
                                        </div>
                                    </div>
                                    {/* Animation dot */}
                                    <motion.div 
                                        className="absolute top-1/2 left-20 w-3 h-3 bg-rose-500 rounded-full shadow-[0_0_15px_rgba(244,63,94,1)] z-10"
                                        animate={{ x: [0, 250, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </div>

                                {/* Thread 2 */}
                                <div className="relative ml-20 sm:ml-40 mt-4">
                                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-amber-900/40 -translate-y-1/2"></div>
                                    <div className="relative z-10 flex justify-between items-center px-2 md:px-6">
                                        <div className="bg-[#03050a] border-2 border-emerald-500/20 p-3 md:p-4 rounded-xl flex flex-col items-center gap-2 opacity-60 z-20">
                                            <FaServer className="text-emerald-500 text-3xl" />
                                        </div>
                                        <div className="text-[10px] md:text-xs font-mono font-bold text-amber-400 bg-[#050810] border border-amber-900/50 px-3 py-1 rounded-full z-20 shadow-md">2. Túnel C2</div>
                                        <div className="bg-[#03050a] border-2 border-amber-500/50 p-3 md:p-4 rounded-xl flex flex-col items-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.3)] z-20">
                                            <FaDatabase className="text-amber-500 text-3xl" />
                                            <span className="text-[10px] md:text-xs font-mono font-bold text-amber-300 whitespace-nowrap">Víctima 2 (Target)</span>
                                        </div>
                                    </div>
                                    {/* Animation dot */}
                                    <motion.div 
                                        className="absolute top-1/2 left-20 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,1)] z-10"
                                        animate={{ x: [0, 200, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                    />
                                </div>
                            </div>
                            
                            <div className="mt-12 bg-black/50 p-5 rounded-xl border border-emerald-900/30 flex gap-4 items-start">
                                <FaInfoCircle className="text-emerald-500 text-2xl flex-shrink-0 mt-1" />
                                <p className="text-xs md:text-sm text-gray-300 font-mono leading-relaxed">
                                    <strong className="text-emerald-400 text-sm md:text-base tracking-wide uppercase block mb-1">Impacto del Pivoting</strong>
                                    El atacante utiliza el host comprometido (Víctima 1) como un proxy. Esto le permite ocultar su origen real y utilizar la confianza de la red interna para lanzar un ataque contra la segunda víctima (Base de Datos), evadiendo completamente los firewalls perimetrales de la organización.
                                </p>
                            </div>
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
            className={`w-20 h-20 md:w-28 md:h-28 rotate-45 flex items-center justify-center transition-all duration-300 shadow-xl border-2 ${
                active 
                ? `${node.bg} ${node.border} scale-110 shadow-[0_0_40px_rgba(99,102,241,0.4)] z-50` 
                : 'bg-[#0a0f1c] border-gray-700/50 hover:border-gray-500/80 hover:bg-[#0c1222]'
            }`}
        >
            <div className="-rotate-45 flex flex-col items-center gap-2">
                <node.icon className={`text-2xl md:text-3xl transition-colors ${active ? node.color : 'text-gray-500'}`} />
                <span className={`text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest ${active ? node.color : 'text-gray-500'}`}>
                    {node.id.substring(0,3)}
                </span>
            </div>
        </button>
    );
};

export default DiamondModel;

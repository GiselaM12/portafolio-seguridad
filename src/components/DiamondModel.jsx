import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserSecret, FaServer, FaCode, FaCrosshairs, FaShieldAlt, FaProjectDiagram, FaFilePdf, FaTerminal, FaNetworkWired, FaInfoCircle, FaBug, FaSearch, FaDatabase } from 'react-icons/fa';
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                {[
                                    { name: "Moreno Solís Gisela Geraldine", id: "176522", role: "Auditor Líder" },
                                    { name: "Aguilar Espinoza Juan Diego", id: "173877", role: "Analista de Riesgo" },
                                    { name: "Jasso Dávila Pedro Damián", id: "176658", role: "Ing. Forense" },
                                    { name: "Palomo Cerdá José Armando", id: "17593", role: "Especialista OSINT" },
                                    { name: "Zarate Domínguez David", id: "175842", role: "Pentester Principal" },
                                    { name: "Zorrilla Rivera Eduardo", id: "175877", role: "Asesor de Cumplimiento" }
                                ].map((member, idx) => (
                                    <div key={idx} className="bg-black/40 border border-indigo-900/40 rounded-xl p-3 flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 shadow-sm">
                                        <div className="font-mono text-xs text-white font-bold tracking-tight truncate">
                                            {member.name}
                                        </div>
                                        <div className="flex justify-between items-center mt-2 text-[10px] font-mono">
                                            <span className="text-gray-500">{member.id}</span>
                                            <span className="text-indigo-300 font-bold px-1.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                                                {member.role}
                                            </span>
                                        </div>
                                    </div>
                                ))}
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

                <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-stretch">
                    
                    {/* =========================================
                        PANEL 1: TOPOLOGÍA (IZQUIERDA - 3 cols) 
                    ========================================== */}
                    <div className="lg:col-span-3 flex flex-col items-center xl:border-r border-indigo-500/10 xl:pr-6">
                        <h5 className="text-indigo-400 font-mono text-sm font-bold uppercase tracking-widest mb-10 flex items-center gap-2 bg-indigo-900/20 px-4 py-2 rounded-lg border border-indigo-500/30 w-full justify-center">
                            <FaSearch /> Topología del Evento
                        </h5>
                        
                        {/* Interactive Diamond Graph */}
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64 my-6 shrink-0">
                            {/* Lines connecting nodes */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]" style={{ zIndex: 0 }}>
                                <line x1="50%" y1="10%" x2="90%" y2="50%" stroke="rgba(99,102,241,0.4)" strokeWidth="2" />
                                <line x1="90%" y1="50%" x2="50%" y2="90%" stroke="rgba(99,102,241,0.4)" strokeWidth="2" />
                                <line x1="50%" y1="90%" x2="10%" y2="50%" stroke="rgba(99,102,241,0.4)" strokeWidth="2" />
                                <line x1="10%" y1="50%" x2="50%" y2="10%" stroke="rgba(99,102,241,0.4)" strokeWidth="2" />
                                <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="rgba(99,102,241,0.15)" strokeWidth="1" strokeDasharray="4" />
                                <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="rgba(99,102,241,0.15)" strokeWidth="1" strokeDasharray="4" />
                            </svg>

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
                        <div className="mt-12 w-full flex-grow">
                            <AnimatePresence mode="wait">
                                {activeNode ? (
                                    <motion.div
                                        key={activeNode.id}
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                        className={`p-5 border border-indigo-500/30 rounded-xl bg-[#060a16] shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden h-full flex flex-col`}
                                    >
                                        <div className={`absolute top-0 left-0 w-full h-1 ${activeNode.bg.replace('/10', '')}`} />
                                        <h6 className={`font-mono font-black text-sm md:text-base mb-3 ${activeNode.color} flex items-center gap-2 drop-shadow-md uppercase tracking-wider`}>
                                            <activeNode.icon className="text-lg" /> {activeNode.title}
                                        </h6>
                                        <p className="text-gray-300 text-xs md:text-sm mb-4 leading-relaxed flex-grow">{activeNode.desc}</p>
                                        <div className="text-[10px] md:text-xs text-gray-400 font-mono bg-black/50 p-3 rounded-lg border border-gray-800">
                                            <span className={`font-bold ${activeNode.color} block mb-1`}>EJEMPLO TÉCNICO:</span> {activeNode.example}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="h-full min-h-[150px] flex flex-col items-center justify-center border border-dashed border-indigo-500/20 rounded-xl text-indigo-400/50 font-mono text-xs text-center p-6 bg-[#03050a]/50">
                                        <FaInfoCircle className="text-2xl mb-3" />
                                        <p>Seleccione un nodo operativo del diamante para examinar los artefactos técnicos asociados.</p>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* =========================================
                        PANEL 2: SIMULACIÓN (CENTRO - 5 cols) 
                    ========================================== */}
                    <div className="lg:col-span-5 flex flex-col gap-6 xl:border-r border-indigo-500/10 xl:pr-6">
                        <div className="bg-[#050810] border border-indigo-500/30 rounded-xl p-6 h-full flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full pointer-events-none" />
                            
                            <h5 className="text-white font-mono text-sm md:text-base font-bold uppercase tracking-widest mb-8 flex items-center justify-between border-b border-indigo-900/50 pb-3">
                                <span className="flex items-center gap-2">
                                    <FaNetworkWired className="text-rose-400 text-lg" /> HILOS DE ACTIVIDAD <span className="text-indigo-400/60 hidden sm:inline">(PIVOTING)</span>
                                </span>
                                <span className="text-[9px] md:text-[10px] font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-900 px-2 py-1 rounded flex items-center gap-1.5 animate-pulse">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" /> LIVE SIMULATION
                                </span>
                            </h5>
                            
                            <div className="flex-grow flex flex-col justify-center gap-12 sm:gap-16 py-8">
                                {/* Thread 1 */}
                                <div className="relative">
                                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-indigo-900/60 -translate-y-1/2"></div>
                                    <div className="relative z-10 flex justify-between items-center">
                                        <div className="bg-[#03050a] border border-rose-500/40 p-3 rounded-lg flex flex-col items-center gap-1.5 shadow-[0_0_15px_rgba(244,63,94,0.15)] z-20">
                                            <FaUserSecret className="text-rose-500 text-xl md:text-2xl" />
                                            <span className="text-[9px] md:text-[10px] font-mono font-bold text-rose-300">Atacante</span>
                                        </div>
                                        <div className="text-[9px] md:text-[10px] font-mono font-bold text-cyan-400 bg-[#050810] border border-cyan-900/50 px-2 py-0.5 rounded-full z-20">1. Compromiso Inicial</div>
                                        <div className="bg-[#03050a] border border-emerald-500/40 p-3 rounded-lg flex flex-col items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.15)] z-20">
                                            <FaServer className="text-emerald-500 text-xl md:text-2xl" />
                                            <span className="text-[9px] md:text-[10px] font-mono font-bold text-emerald-300">Proxy (V1)</span>
                                        </div>
                                    </div>
                                    <motion.div 
                                        className="absolute top-1/2 left-8 w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,1)] z-10"
                                        animate={{ x: [0, '250%', 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </div>

                                {/* Thread 2 */}
                                <div className="relative ml-8 sm:ml-16">
                                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-amber-900/60 -translate-y-1/2"></div>
                                    <div className="relative z-10 flex justify-between items-center">
                                        <div className="bg-[#03050a] border border-emerald-500/20 p-3 rounded-lg flex flex-col items-center gap-1.5 opacity-40 z-20">
                                            <FaServer className="text-emerald-500 text-xl md:text-2xl" />
                                        </div>
                                        <div className="text-[9px] md:text-[10px] font-mono font-bold text-amber-400 bg-[#050810] border border-amber-900/50 px-2 py-0.5 rounded-full z-20">2. Túnel C2 / Mov. Lateral</div>
                                        <div className="bg-[#03050a] border border-amber-500/40 p-3 rounded-lg flex flex-col items-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.15)] z-20">
                                            <FaDatabase className="text-amber-500 text-xl md:text-2xl" />
                                            <span className="text-[9px] md:text-[10px] font-mono font-bold text-amber-300">Objetivo (V2)</span>
                                        </div>
                                    </div>
                                    <motion.div 
                                        className="absolute top-1/2 left-8 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)] z-10"
                                        animate={{ x: [0, '250%', 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                    />
                                </div>
                            </div>
                            
                            <div className="mt-4 bg-indigo-950/20 p-4 rounded-lg border border-indigo-900/30">
                                <h6 className="text-[10px] md:text-xs text-indigo-300 font-mono font-bold uppercase mb-2 flex items-center gap-2">
                                    <FaInfoCircle /> Impacto del Movimiento Lateral (Pivoting)
                                </h6>
                                <p className="text-[10px] md:text-xs text-gray-400 font-sans leading-relaxed">
                                    El adversario utiliza el host comprometido inicialmente (Proxy V1) como un "trampolín" dentro de la red corporativa. Esta técnica permite evadir firewalls perimetrales y sistemas IDS/IPS, ya que el ataque a la Base de Datos (V2) parece provenir de una dirección IP interna confiable en lugar del exterior.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* =========================================
                        PANEL 3: ANÁLISIS FORENSE (DERECHA - 4 cols) 
                    ========================================== */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        
                        {/* MITRE ATT&CK Mapping */}
                        <div className="bg-[#0a0c16] border border-gray-800 rounded-xl p-5">
                            <h5 className="text-white font-mono text-xs md:text-sm font-bold uppercase tracking-widest border-b border-gray-800 pb-3 mb-4 flex items-center gap-2">
                                <FaShieldAlt className="text-indigo-500" /> Tácticas y Técnicas (MITRE)
                            </h5>
                            <div className="flex flex-col gap-3">
                                <div className="bg-black/50 border border-gray-800 rounded px-3 py-2 flex items-center justify-between">
                                    <span className="text-[10px] text-gray-400 font-mono">T1566.001 - Phishing</span>
                                    <span className="text-[9px] bg-rose-500/20 text-rose-300 px-2 rounded font-bold">Initial Access</span>
                                </div>
                                <div className="bg-black/50 border border-gray-800 rounded px-3 py-2 flex items-center justify-between">
                                    <span className="text-[10px] text-gray-400 font-mono">T1090 - Connection Proxy</span>
                                    <span className="text-[9px] bg-amber-500/20 text-amber-300 px-2 rounded font-bold">C2 / Evasion</span>
                                </div>
                                <div className="bg-black/50 border border-gray-800 rounded px-3 py-2 flex items-center justify-between">
                                    <span className="text-[10px] text-gray-400 font-mono">T1105 - Ingress Tool Transfer</span>
                                    <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 rounded font-bold">Lateral Move</span>
                                </div>
                            </div>
                        </div>

                        {/* SOC Telemetry Logs */}
                        <div className="bg-[#05060a] border border-red-900/30 rounded-xl p-5 shadow-[0_0_20px_rgba(153,27,27,0.1)] flex-grow">
                            <h5 className="text-white font-mono text-xs md:text-sm font-bold uppercase tracking-widest border-b border-red-900/50 pb-3 mb-4 flex items-center justify-between">
                                <span className="flex items-center gap-2"><FaTerminal className="text-red-500" /> Event Telemetry</span>
                                <span className="text-xs text-red-500 animate-pulse">● REC</span>
                            </h5>
                            <div className="font-mono text-[9px] sm:text-[10px] space-y-2 h-48 overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: '#374151 transparent' }}>
                                <div className="text-gray-500"><span className="text-gray-600">[08:42:15]</span> <span className="text-cyan-600">INFO:</span> Payload delivered via Email attachment.</div>
                                <div className="text-amber-500"><span className="text-gray-600">[08:45:02]</span> <span className="text-amber-600">WARN:</span> Execution detected (T1204).</div>
                                <div className="text-rose-500"><span className="text-gray-600">[08:46:33]</span> <span className="text-rose-600 font-bold">ALERT:</span> DNS request to suspicious C2 domain.</div>
                                <div className="text-rose-500"><span className="text-gray-600">[08:46:34]</span> <span className="text-rose-600 font-bold">ALERT:</span> Outbound traffic anomaly detected on Port 443.</div>
                                <div className="text-gray-500"><span className="text-gray-600">[09:12:10]</span> <span className="text-cyan-600">INFO:</span> Internal scan from Proxy V1 started.</div>
                                <div className="text-rose-500 bg-red-900/20 border-l-2 border-red-500 pl-2 py-1 mt-2">
                                    <span className="text-gray-600">[09:15:45]</span> <span className="text-red-500 font-bold">CRITICAL:</span> Lateral movement attempt to Database Server (10.0.5.20).
                                </div>
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
            className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rotate-45 flex items-center justify-center transition-all duration-300 shadow-xl border-2 ${
                active 
                ? `${node.bg} ${node.border} scale-110 shadow-[0_0_40px_rgba(99,102,241,0.4)] z-50` 
                : 'bg-[#0a0f1c] border-gray-700/50 hover:border-gray-500/80 hover:bg-[#0c1222]'
            }`}
        >
            <div className="-rotate-45 flex flex-col items-center gap-1 md:gap-1.5">
                <node.icon className={`text-xl md:text-2xl transition-colors ${active ? node.color : 'text-gray-500'}`} />
                <span className={`text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest ${active ? node.color : 'text-gray-500'}`}>
                    {node.id.substring(0,3)}
                </span>
            </div>
        </button>
    );
};

export default DiamondModel;

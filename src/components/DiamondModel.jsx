import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserSecret, FaServer, FaCode, FaCrosshairs, FaShieldAlt, FaProjectDiagram, FaFilePdf, FaTerminal, FaNetworkWired, FaInfoCircle, FaBug, FaSearch, FaDatabase } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const DiamondModel = () => {
    const [activeNodeKey, setActiveNodeKey] = useState('adversary');
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
            desc: 'El actor o grupo de amenaza persistente avanzada (APT) responsable de la intrusión.',
            details: [
                { label: 'Identificador', value: 'APT-37 / Group 12 (Espionaje Dirigido)' },
                { label: 'Motivación', value: 'Exfiltración de propiedad intelectual y espionaje industrial' },
                { label: 'Tácticas Clave', value: 'Spear-phishing dirigido, suplantación de servicios Saas y evasión defensiva' },
                { label: 'Origen Probable', value: 'Actor estatal con recursos avanzados y herramientas propietarias' }
            ],
            example: 'Grupo APT-37 que utiliza spear-phishing temático para comprometer sistemas críticos en la red interna.'
        },
        capability: {
            id: 'capability',
            icon: FaCode,
            title: 'Capacidad',
            color: 'text-amber-500',
            bg: 'bg-amber-500/10',
            border: 'border-amber-500/30',
            desc: 'Herramientas, payloads y técnicas operativas empleadas durante la intrusión.',
            details: [
                { label: 'Vector Inicial', value: 'Correo con PDF malicioso conteniendo exploit para Adobe Reader' },
                { label: 'Malware Principal', value: 'SombraRAT (Troyano de Acceso Remoto compilado a medida)' },
                { label: 'Herramienta Pivoting', value: 'Chisel & Socat para redirección de puertos y túneles reverse-TCP' },
                { label: 'Persistencia', value: 'Modificación de claves de registro Run (HKCU) y tareas programadas' }
            ],
            example: 'Payload SombraRAT con capacidades de evasión de sandbox de red y registro de teclas (keylogging).'
        },
        infrastructure: {
            id: 'infrastructure',
            icon: FaServer,
            title: 'Infraestructura',
            color: 'text-cyan-500',
            bg: 'bg-cyan-500/10',
            border: 'border-cyan-500/30',
            desc: 'Recursos lógicos y servidores de red utilizados para controlar el malware y realizar pivoting.',
            details: [
                { label: 'Servidor C2', value: '185.220.101.44 (IP pública enmascarada tras nodos Tor y CDN)' },
                { label: 'Dominio Phishing', value: 'drive-goog1e.com (Typosquatting registrado para entrega del payload)' },
                { label: 'Nodo de Pivoting', value: '10.0.5.15 (Host interno comprometido usado como túnel de reenvío)' },
                { label: 'Protocolos C2', value: 'HTTPS en puerto 443 con tráfico cifrado simulando telemetría legítima' }
            ],
            example: 'Uso de un dominio de typosquatting drive-goog1e.com para evadir alertas DNS y establecer el canal de C2.'
        },
        victim: {
            id: 'victim',
            icon: FaCrosshairs,
            title: 'Víctima',
            color: 'text-emerald-500',
            bg: 'bg-emerald-500/10',
            border: 'border-emerald-500/30',
            desc: 'Los activos, usuarios y sistemas afectados que fueron el objetivo de la intrusión.',
            details: [
                { label: 'Víctima Primaria', value: 'moreno.g@empresa.com (Gisela Geraldine - Auditor Líder, Host: DESKTOP-GGM18)' },
                { label: 'Víctima Secundaria', value: 'SRV-DB-PROD (Servidor de base de datos de producción - IP: 10.0.5.20)' },
                { label: 'Datos Comprometidos', value: 'Credenciales del dominio de red y registros confidenciales del servidor de BD' },
                { label: 'Ubicación Física', value: 'Segmento de red corporativo interno UPSLP' }
            ],
            example: 'Compromiso inicial de la estación de trabajo local y subsiguiente acceso no autorizado a la base de datos central.'
        }
    };

    const activeNode = nodes[activeNodeKey];
    const setActiveNode = (node) => setActiveNodeKey(node.id);

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
            if (y > 240) {
                doc.addPage();
                doc.setFillColor(3, 7, 18);
                doc.rect(0, 0, 210, 297, 'F');
                y = 20;
            }
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(129, 140, 248);
            doc.text(`${node.title.toUpperCase()}:`, 15, y);
            y += 6;
            
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(200, 200, 200);
            const descLines = doc.splitTextToSize(`Descripción: ${node.desc}`, 180);
            doc.text(descLines, 15, y);
            y += descLines.length * 5 + 2;

            node.details.forEach(detail => {
                if (y > 275) {
                    doc.addPage();
                    doc.setFillColor(3, 7, 18);
                    doc.rect(0, 0, 210, 297, 'F');
                    y = 20;
                }
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(150, 150, 150);
                doc.text(`  * ${detail.label}:`, 15, y);
                const labelWidth = doc.getTextWidth(`  * ${detail.label}: `);
                
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(180, 180, 180);
                const valLines = doc.splitTextToSize(detail.value, 180 - labelWidth);
                doc.text(valLines, 15 + labelWidth, y);
                y += valLines.length * 5;
            });

            if (y > 275) {
                doc.addPage();
                doc.setFillColor(3, 7, 18);
                doc.rect(0, 0, 210, 297, 'F');
                y = 20;
            }
            doc.setFont('helvetica', 'italic');
            doc.setTextColor(140, 140, 140);
            const exLines = doc.splitTextToSize(`Firma Técnica: ${node.example}`, 180);
            doc.text(exLines, 15, y);
            y += exLines.length * 5 + 6;
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
                        PANEL 1: TOPOLOGÍA (IZQUIERDA - 4 cols) 
                    ========================================== */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:border-r border-indigo-500/10 lg:pr-6">
                        <h5 className="text-indigo-400 font-mono text-sm font-bold uppercase tracking-widest mb-10 flex items-center gap-2 bg-indigo-900/20 px-4 py-2 rounded-lg border border-indigo-500/30 w-full justify-center">
                            <FaSearch /> Topología del Evento
                        </h5>
                        
                        {/* Interactive Diamond Graph - Controlled safe boundaries to prevent any overflow */}
                        <div className="relative w-full max-w-[280px] aspect-square my-6 mx-auto select-none shrink-0">
                            
                            {/* Axis Label Masks - Blueprint Technical Overlay */}
                            <div 
                                className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[7px] sm:text-[8px] text-indigo-400/40 uppercase tracking-widest bg-[#03060f]/90 px-1 select-none pointer-events-none whitespace-nowrap rotate-90 origin-center"
                                style={{ zIndex: 5 }}
                            >
                                Eje Socio-Político
                            </div>
                            <div 
                                className="absolute left-[33%] top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[7px] sm:text-[8px] text-indigo-400/40 uppercase tracking-widest bg-[#03060f]/90 px-1 select-none pointer-events-none whitespace-nowrap"
                                style={{ zIndex: 5 }}
                            >
                                Eje Técnico
                            </div>

                            {/* Outer Node Labels (Adversary, Capability, Victim, Infrastructure) */}
                            <div className="absolute top-[2%] left-1/2 -translate-x-1/2 font-mono text-[9px] sm:text-[10px] font-bold text-rose-400 bg-rose-500/10 border border-rose-500/30 px-2 py-0.5 rounded tracking-widest uppercase shadow-sm z-20">
                                Adversario
                            </div>
                            <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 font-mono text-[9px] sm:text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded tracking-widest uppercase shadow-sm z-20">
                                Víctima
                            </div>
                            <div className="absolute left-[-2%] top-1/2 -translate-y-1/2 font-mono text-[8px] sm:text-[9px] font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-1.5 py-0.5 rounded tracking-wider uppercase text-center max-w-[85px] leading-tight shadow-sm z-20">
                                Infraestructura
                            </div>
                            <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-mono text-[8px] sm:text-[9px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-1.5 py-0.5 rounded tracking-wider uppercase text-center max-w-[85px] leading-tight shadow-sm z-20">
                                Capacidad
                            </div>

                            {/* Lines connecting nodes - perfectly aligned to percentage coordinates */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]" style={{ zIndex: 1 }}>
                                <line x1="50%" y1="20%" x2="80%" y2="50%" stroke="rgba(244,63,94,0.4)" strokeWidth="2" />
                                <line x1="80%" y1="50%" x2="50%" y2="80%" stroke="rgba(16,185,129,0.4)" strokeWidth="2" />
                                <line x1="50%" y1="80%" x2="20%" y2="50%" stroke="rgba(6,182,212,0.4)" strokeWidth="2" />
                                <line x1="20%" y1="50%" x2="50%" y2="20%" stroke="rgba(245,158,11,0.4)" strokeWidth="2" />
                                <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="rgba(99,102,241,0.15)" strokeWidth="1" strokeDasharray="4" />
                                <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="rgba(99,102,241,0.15)" strokeWidth="1" strokeDasharray="4" />
                            </svg>

                            {/* Nodes centered exactly at percentage coordinates */}
                            <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
                                <DiamondNode node={nodes.adversary} active={activeNode?.id === 'adversary'} onClick={() => setActiveNode(nodes.adversary)} />
                            </div>
                            <div className="absolute top-[50%] left-[80%] -translate-x-1/2 -translate-y-1/2 z-10">
                                <DiamondNode node={nodes.capability} active={activeNode?.id === 'capability'} onClick={() => setActiveNode(nodes.capability)} />
                            </div>
                            <div className="absolute top-[80%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
                                <DiamondNode node={nodes.victim} active={activeNode?.id === 'victim'} onClick={() => setActiveNode(nodes.victim)} />
                            </div>
                            <div className="absolute top-[50%] left-[20%] -translate-x-1/2 -translate-y-1/2 z-10">
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
                                        className={`p-5 border border-indigo-500/30 rounded-xl bg-[#060a16] shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col gap-4`}
                                    >
                                        <div className={`absolute top-0 left-0 w-full h-1 ${activeNode.bg.replace('/10', '')}`} />
                                        
                                        <div>
                                            <h6 className={`font-mono font-black text-sm md:text-base mb-1.5 ${activeNode.color} flex items-center gap-2 drop-shadow-md uppercase tracking-wider`}>
                                                <activeNode.icon className="text-lg animate-pulse" /> {activeNode.title}
                                            </h6>
                                            <p className="text-gray-300 text-[11px] sm:text-xs leading-relaxed">{activeNode.desc}</p>
                                        </div>

                                        <div className="border-t border-indigo-500/10 pt-3 space-y-2">
                                            <span className="text-[9px] font-mono font-bold text-indigo-400 tracking-widest block uppercase">
                                                TELEMETRÍA Y ARTEFACTOS:
                                            </span>
                                            <div className="space-y-1.5">
                                                {activeNode.details.map((detail, idx) => (
                                                    <div key={idx} className="bg-black/35 border border-gray-800/80 rounded p-2 flex flex-col gap-0.5 hover:border-indigo-500/30 transition-all">
                                                        <span className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">
                                                            {detail.label}
                                                        </span>
                                                        <span className="text-[10px] font-mono text-gray-200 font-medium leading-tight">
                                                            {detail.value}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="text-[10px] text-gray-400 font-mono bg-black/50 p-3 rounded-lg border border-gray-800">
                                            <span className={`font-bold ${activeNode.color} block mb-1 uppercase tracking-wider text-[8px]`}>
                                                Firma Técnica / Evidencia:
                                            </span> 
                                            {activeNode.example}
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
                    <div className="lg:col-span-4 flex flex-col gap-6 lg:border-r border-indigo-500/10 lg:pr-6">
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
            className={`w-12 h-12 sm:w-14 sm:h-14 rotate-45 flex items-center justify-center transition-all duration-300 shadow-lg border border-dashed rounded-md ${
                active 
                ? `${node.bg} ${node.border.replace('/30', '/80')} scale-110 shadow-[0_0_25px_rgba(99,102,241,0.3)] z-50 border-solid` 
                : 'bg-[#0a0f1c]/90 border-indigo-500/20 hover:border-indigo-400/50 hover:bg-[#0c1222] hover:scale-105'
            }`}
        >
            <div className="-rotate-45 flex flex-col items-center justify-center">
                <node.icon className={`text-base sm:text-lg transition-colors ${active ? node.color : 'text-gray-500'}`} />
                <span className={`text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider mt-0.5 ${active ? node.color : 'text-gray-500'}`}>
                    {node.id.substring(0,3)}
                </span>
            </div>
        </button>
    );
};

export default DiamondModel;

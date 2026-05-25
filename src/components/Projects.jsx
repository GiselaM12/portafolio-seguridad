import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFolderPlus, FaLock, FaHourglassHalf, FaTerminal, FaDatabase, FaExternalLinkAlt, FaShieldAlt, FaBug, FaNetworkWired, FaServer, FaSearch, FaUserSecret, FaBalanceScale, FaProjectDiagram, FaFileAlt, FaKeyboard, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { activities } from '../data/activities';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('parcial1');

    const lockedCard = {
        icon: <FaLock />,
        title: "Acceso Restringido",
        description: "Contenido encriptado. Se desbloqueará al finalizar el periodo.",
        status: "Locked"
    };

    // Helper to select icon based on activity ID or keyword
    const getIconForActivity = (id) => {
        switch (String(id)) {
            case "1": return <FaBug />; // Ciberataque
            case "2": return <FaShieldAlt />; // X.800
            case "3": return <FaTerminal />; // IPTables
            case "4": return <FaServer />; // Defensa en Red
            case "5": return <FaUserSecret />; // Pentesting
            case "6": return <FaNetworkWired />; // VPN
            case "8": return <FaDatabase />; // SQL Injection
            case "10": return <FaShieldAlt />; // Datos y Privacidad
            case "11": return <FaFileAlt />; // Reporte Napping
            case "12": return <FaTerminal />; // Simulador Napping
            case "13": return <FaKeyboard />; // Keylogger Telegram
            case "14": return <FaUserSecret />; // Ingeniería Social
            case "15": return <FaEnvelope />; // Phishing Evasivo
            case "16": return <FaBalanceScale />; // Dilemas Éticos
            case "17": return <FaShieldAlt />; // CVSS v3.1
            case "18": return <FaProjectDiagram />; // Modelo Diamante
            case "PR02": return <FaUserSecret />; // Phishing / Engineering Social
            case "PR03": return <FaShieldAlt />; // SGSI ISO 27001
            default: return <FaFolderPlus />;
        }
    };

    // Transform activities to project card format
    const projectsByParcial = {
        parcial1: activities.filter(act => typeof act.id === 'number' && act.id <= 6)
            .sort((a, b) => parseInt(a.id) - parseInt(b.id))
            .map(act => ({
            id: act.id,
            icon: getIconForActivity(act.id),
            title: act.title,
            description: act.description,
            status: "Available",
            link: `/actividades/${act.id}`,
            isActivity: true
        })),
        parcial2: activities.filter(act => act.id === "PR02" || String(act.id) === "8" || String(act.id) === "9" || String(act.id) === "10")
            .sort((a, b) => (String(a.id).startsWith("PR") ? 1 : String(b.id).startsWith("PR") ? -1 : parseInt(a.id) - parseInt(b.id)))
            .map(act => ({
            id: act.id,
            icon: getIconForActivity(act.id),
            title: act.title,
            description: act.description,
            status: "Available",
            link: `/actividades/${act.id}`,
            isActivity: act.id !== "PR02"
        })).concat([lockedCard]),
        parcial3: activities.filter(act => String(act.id) === "11" || String(act.id) === "12" || String(act.id) === "13" || String(act.id) === "14" || String(act.id) === "15" || String(act.id) === "16" || String(act.id) === "17" || String(act.id) === "18" || String(act.id) === "PR03")
            .sort((a, b) => (String(a.id).startsWith("PR") ? 1 : String(b.id).startsWith("PR") ? -1 : parseInt(a.id) - parseInt(b.id)))
            .map(act => ({
            id: act.id,
            icon: getIconForActivity(act.id),
            title: act.title,
            description: act.description,
            status: "Available",
            link: `/actividades/${act.id}`,
            isActivity: String(act.id) !== "PR03"
        })),
        final: [lockedCard, lockedCard, lockedCard]
    };

    const projectsData = projectsByParcial;

    const tabs = [
        { id: 'parcial1', label: 'PF01', fullLabel: 'Parcial 1' },
        { id: 'parcial2', label: 'PF02', fullLabel: 'Parcial 2' },
        { id: 'parcial3', label: 'PF03', fullLabel: 'Parcial 3' },
        { id: 'final', label: 'FINAL', fullLabel: 'Final' },
    ];

    return (
        <section id="proyectos" className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden bg-[#030712]">
            {/* Background effects */}
            <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />
            <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-500/5 rounded-full blur-[100px] sm:blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-violet-600/5 rounded-full blur-[100px] sm:blur-[150px]" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12"
                >
                    {/* Terminal badge */}
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-500/5 border border-cyan-500/30 rounded mb-4 sm:mb-6 shadow-[0_0_15px_rgba(20,184,166,0.1)]">
                        <FaDatabase className="text-cyan-400 text-xs sm:text-sm animate-pulse" />
                        <span className="font-mono text-cyan-400 text-[10px] sm:text-xs tracking-widest uppercase">PROJECT_ARCHIVE</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        <span className="text-gradient-cyber drop-shadow-[0_0_35px_rgba(99,102,241,0.15)]">Proyectos y Evidencias</span>
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm max-w-2xl mx-auto mb-8 sm:mb-10 font-mono uppercase tracking-widest px-2">
                        // Repositorio de prácticas y proyectos CNO V
                    </p>

                    {/* Tabs Navigation - IDE File Style */}
                    <div className="flex border-b border-cyan-500/20 max-w-xl mx-auto overflow-x-auto scrollbar-none mb-8 justify-center">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 sm:px-6 py-2.5 font-mono text-xs transition-all duration-300 border-t border-x rounded-t relative -bottom-[1px] flex items-center gap-2 whitespace-nowrap ${activeTab === tab.id
                                    ? 'bg-[#070b14]/90 border-cyan-500/30 border-b-transparent text-cyan-400 shadow-[0_-4px_12px_rgba(20,184,166,0.05)]'
                                    : 'bg-transparent border-transparent text-gray-500 hover:text-cyan-400/80 hover:bg-[#070b14]/30'
                                    }`}
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
                                <span>{tab.fullLabel}.log</span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
                    >
                        {projectsData[activeTab].map((project, index) => {
                            const isLink = !!project.link;
                            const Wrapper = isLink ? Link : 'div';
                            const wrapperProps = isLink
                                ? { to: project.link }
                                : {};                            return (
                                <Wrapper
                                    key={index}
                                    {...wrapperProps}
                                    className={`bg-[#070b14]/90 backdrop-blur-xl rounded border relative overflow-hidden group transition-all duration-500 flex flex-col h-full ${project.status === 'Locked'
                                        ? 'border-red-500/10 hover:border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.02)]'
                                        : !project.isActivity && project.id === 'PR03'
                                            ? 'border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] cursor-pointer corner-borders'
                                            : !project.isActivity && project.id === 'PR02'
                                                ? 'border-violet-500/20 hover:border-violet-500/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] cursor-pointer corner-borders'
                                                : 'border-cyan-500/15 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(20,184,166,0.12)] cursor-pointer corner-borders'
                                        }`}
                                >
                                    {/* Terminal Header */}
                                    <div className={`px-4 py-2 border-b flex items-center justify-between flex-shrink-0 ${project.status === 'Locked'
                                        ? 'bg-[#0f0b0c] border-red-500/10'
                                        : !project.isActivity && project.id === 'PR03'
                                            ? 'bg-[#030a06] border-emerald-500/10'
                                            : !project.isActivity && project.id === 'PR02'
                                                ? 'bg-[#08050c] border-violet-500/10'
                                                : 'bg-[#090e1a] border-cyan-500/10'
                                        }`}>
                                        <div className="flex items-center gap-1.5">
                                            <span className={`w-2 h-2 rounded-full ${project.status === 'Locked'
                                                ? 'bg-red-500/80 animate-pulse'
                                                : !project.isActivity && project.id === 'PR03'
                                                    ? 'bg-emerald-500/80 animate-pulse'
                                                    : !project.isActivity && project.id === 'PR02'
                                                        ? 'bg-violet-500/80 animate-pulse'
                                                        : 'bg-green-500/80'
                                                }`} />
                                            <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                                            <span className="w-2 h-2 rounded-full bg-gray-700" />
                                        </div>
                                        <span className={`px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-mono border flex items-center gap-1 uppercase tracking-widest ${project.status === 'Locked'
                                            ? 'bg-red-500/10 text-red-400 border-red-500/20'
                                            : !project.isActivity && project.id === 'PR03'
                                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                                : !project.isActivity && project.id === 'PR02'
                                                    ? 'bg-violet-500/10 text-violet-400 border-violet-500/20'
                                                    : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                                            }`}>
                                            {project.status === 'Locked'
                                                ? <FaLock className="text-[7px]" />
                                                : <span className={`w-1 h-1 rounded-full animate-ping ${
                                                    !project.isActivity && project.id === 'PR03'
                                                        ? 'bg-emerald-400'
                                                        : !project.isActivity && project.id === 'PR02'
                                                            ? 'bg-violet-400'
                                                            : 'bg-cyan-400'
                                                }`} />
                                            }
                                            <span>{project.status}</span>
                                        </span>
                                    </div>

                                    <div className="p-5 sm:p-6 flex-grow flex flex-col">
                                        {/* Code identifier */}
                                        <div className={`text-[9px] font-mono mb-3 sm:mb-4 flex justify-between tracking-wider ${
                                            !project.isActivity && project.id === 'PR03'
                                                ? 'text-emerald-500/50'
                                                : !project.isActivity && project.id === 'PR02'
                                                    ? 'text-violet-500/50'
                                                    : 'text-cyan-500/50'
                                        }`}>
                                            <span>
                                                {project.isActivity
                                                    ? `[ACT-${String(index + 1).padStart(3, '0')}]`
                                                    : `[PROJ-${String(index + 1).padStart(3, '0')}]`
                                                }
                                            </span>
                                            {isLink && <FaExternalLinkAlt className={`opacity-0 group-hover:opacity-100 transition-opacity text-xs ${
                                                !project.isActivity && project.id === 'PR03'
                                                    ? 'text-emerald-400'
                                                    : !project.isActivity && project.id === 'PR02'
                                                        ? 'text-violet-400'
                                                        : 'text-cyan-400'
                                            }`} />}
                                        </div>

                                        <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded flex items-center justify-center mb-3 sm:mb-4 text-xl sm:text-2xl transition-all duration-300 group-hover:scale-105 ${project.status === 'Locked'
                                            ? 'bg-red-500/5 text-red-500/40 border border-red-500/10'
                                            : !project.isActivity && project.id === 'PR03'
                                                ? 'bg-emerald-500/5 text-emerald-400 border border-emerald-500/10 group-hover:border-emerald-400/30 shadow-[0_0_10px_rgba(16,185,129,0.1)]'
                                                : !project.isActivity && project.id === 'PR02'
                                                    ? 'bg-violet-500/5 text-violet-400 border border-violet-500/10 group-hover:border-violet-400/30 shadow-[0_0_10px_rgba(139,92,246,0.1)]'
                                                    : 'bg-cyan-500/5 text-cyan-400 border border-cyan-500/10 group-hover:border-cyan-400/30 shadow-[0_0_10px_rgba(20,184,166,0.1)]'
                                            }`}>
                                            {project.icon}
                                        </div>

                                        <div className="flex items-center justify-between transition-transform mb-2">
                                            <h3 className={`text-sm sm:text-base font-bold font-mono transition-all duration-300 line-clamp-2 ${
                                                project.status === 'Locked'
                                                    ? 'text-gray-500'
                                                    : !project.isActivity && project.id === 'PR03'
                                                        ? 'text-white group-hover:text-emerald-400'
                                                        : !project.isActivity && project.id === 'PR02'
                                                            ? 'text-white group-hover:text-violet-400'
                                                            : 'text-white group-hover:text-cyan-400'
                                            }`}>
                                                <span className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1 ${
                                                    !project.isActivity && project.id === 'PR03'
                                                        ? 'text-emerald-400'
                                                        : !project.isActivity && project.id === 'PR02'
                                                            ? 'text-violet-400'
                                                            : 'text-cyan-400'
                                                }`}>[</span>
                                                {project.title}
                                                <span className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1 ${
                                                    !project.isActivity && project.id === 'PR03'
                                                        ? 'text-emerald-400'
                                                        : !project.isActivity && project.id === 'PR02'
                                                            ? 'text-violet-400'
                                                            : 'text-cyan-400'
                                                }`}>]</span>
                                            </h3>
                                        </div>

                                        <p className="text-gray-500 mb-4 font-mono text-[10px] sm:text-xs leading-relaxed line-clamp-3 flex-grow">
                                            {project.status === 'Locked' ? '>>> ENCRYPTED_BLOCK // ACCESS_DENIED' : project.description}
                                        </p>

                                        {/* Progress bar */}
                                        <div className="w-full h-0.5 bg-gray-950 rounded-full overflow-hidden mt-auto">
                                            <div className={`h-full transition-all duration-500 ${project.status === 'Locked'
                                                ? 'bg-red-950 w-full'
                                                : !project.isActivity && project.id === 'PR03'
                                                    ? 'bg-emerald-500 w-full animate-pulse shadow-[0_0_4px_#10b981]'
                                                    : !project.isActivity && project.id === 'PR02'
                                                        ? 'bg-violet-500 w-full animate-pulse shadow-[0_0_4px_#8b5cf6]'
                                                        : 'bg-cyan-500 w-full animate-pulse shadow-[0_0_4px_#22d3ee]'
                                                }`} style={{ width: project.status === 'Locked' ? '15%' : '100%' }}></div>
                                        </div>
                                    </div>
                                </Wrapper>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* Bottom Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-8 sm:mt-12"
                >
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#070b14]/90 border border-cyan-500/20 rounded shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                        <FaTerminal className="text-cyan-400 text-xs sm:text-sm animate-pulse" />
                        <span className="text-gray-500 font-mono text-[10px] sm:text-xs">
                            <span className="text-cyan-400">$</span> ls -la /archives/activities/{activeTab}
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

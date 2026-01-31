import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFolderPlus, FaShieldAlt, FaCode, FaLock, FaBug, FaNetworkWired, FaHourglassHalf, FaTerminal, FaDatabase } from 'react-icons/fa';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('parcial1');

    const lockedCard = {
        icon: <FaLock />,
        title: "Acceso Restringido",
        description: "Contenido encriptado. Se desbloqueará al finalizar el periodo correspondiente.",
        status: "Locked"
    };

    const comingSoonCard = {
        icon: <FaHourglassHalf />,
        title: "En Progreso",
        description: "Decodificando información... Los datos estarán disponibles próximamente.",
        status: "Loading"
    };

    const projectsData = {
        parcial1: [comingSoonCard, lockedCard, lockedCard],
        parcial2: [lockedCard, lockedCard, lockedCard],
        parcial3: [lockedCard, lockedCard, lockedCard],
        final: [lockedCard, lockedCard, lockedCard]
    };

    const tabs = [
        { id: 'parcial1', label: 'PF01', fullLabel: 'Parcial 1' },
        { id: 'parcial2', label: 'PF02', fullLabel: 'Parcial 2' },
        { id: 'parcial3', label: 'PF03', fullLabel: 'Parcial 3' },
        { id: 'final', label: 'FINAL', fullLabel: 'Entrega Final' },
    ];

    return (
        <section id="proyectos" className="py-20 px-6 relative overflow-hidden bg-[#030712]">
            {/* Background effects */}
            <div className="absolute inset-0 scanlines pointer-events-none opacity-50" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px]" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    {/* Terminal badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full mb-6">
                        <FaDatabase className="text-violet-400" />
                        <span className="font-mono text-violet-400 text-sm tracking-wider">PROJECT_ARCHIVE</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">Proyectos y Evidencias</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 font-mono">
                        // Repositorio de prácticas, laboratorios y proyectos del curso CNO V
                    </p>

                    {/* Tabs Navigation - Terminal Style */}
                    <div className="bg-[#0a0f1a]/80 border border-violet-500/20 rounded-lg inline-flex p-1 backdrop-blur-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-md font-mono text-sm transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-violet-500/20 text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                                    : 'text-gray-500 hover:text-violet-400'
                                    }`}
                            >
                                <span className="hidden md:inline">{tab.fullLabel}</span>
                                <span className="md:hidden">{tab.label}</span>
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
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
                    >
                        {projectsData[activeTab].map((project, index) => (
                            <div
                                key={index}
                                className={`bg-[#0a0f1a]/80 backdrop-blur-sm rounded-lg border relative overflow-hidden group transition-all duration-500 ${project.status === 'Locked'
                                    ? 'border-red-500/20 hover:border-red-500/40'
                                    : 'border-violet-500/20 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]'
                                    }`}
                            >
                                {/* Terminal Header */}
                                <div className="bg-[#0d1321] px-4 py-2 border-b border-violet-500/10 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                        <div className={`w-2 h-2 rounded-full ${project.status === 'Locked' ? 'bg-red-500/70' : 'bg-green-500/70'}`} />
                                        <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                                        <div className="w-2 h-2 rounded-full bg-gray-600" />
                                    </div>
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono border flex items-center gap-1 ${project.status === 'Locked'
                                        ? 'bg-red-500/10 text-red-400 border-red-500/20'
                                        : 'bg-violet-500/10 text-violet-400 border-violet-500/20'
                                        }`}>
                                        {project.status === 'Locked' ? <FaLock className="text-[8px]" /> : <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse"></div>}
                                        {project.status}
                                    </span>
                                </div>

                                <div className="p-6">
                                    {/* Code identifier */}
                                    <div className="text-xs font-mono text-violet-500/50 mb-4">
                                        [PROJ-{String(index + 1).padStart(3, '0')}]
                                    </div>

                                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-2xl transition-all duration-300 group-hover:scale-110 ${project.status === 'Locked'
                                        ? 'bg-red-500/10 text-red-500/50'
                                        : 'bg-violet-500/10 text-violet-400'
                                        }`}>
                                        {project.icon}
                                    </div>

                                    <h3 className={`text-lg font-bold mb-2 font-mono transition-colors ${project.status === 'Locked' ? 'text-gray-500' : 'text-white group-hover:text-violet-400'
                                        }`}>
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 font-mono text-xs leading-relaxed">
                                        {project.status === 'Locked' ? '>>> ENCRYPTED_DATA_PACKET_v2.0' : project.description}
                                    </p>

                                    {/* Progress bar */}
                                    <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                                        <div className={`h-full transition-all duration-500 ${project.status === 'Locked'
                                            ? 'bg-red-900/50 w-full'
                                            : 'bg-violet-500 w-2/3 animate-pulse'
                                            }`}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Bottom Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a0f1a]/80 border border-violet-500/20 rounded-lg backdrop-blur-sm">
                        <FaTerminal className="text-violet-400" />
                        <span className="text-gray-500 font-mono text-xs">
                            <span className="text-violet-400">$</span> ls -la /evidencias/{activeTab}
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

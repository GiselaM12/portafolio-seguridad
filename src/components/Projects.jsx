import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFolderPlus, FaShieldAlt, FaCode, FaLock, FaBug, FaNetworkWired, FaHourglassHalf } from 'react-icons/fa';

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
        { id: 'parcial1', label: 'Parcial 1' },
        { id: 'parcial2', label: 'Parcial 2' },
        { id: 'parcial3', label: 'Parcial 3' },
        { id: 'final', label: 'Final' },
    ];

    return (
        <section id="proyectos" className="py-20 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-secondary/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">Proyectos y Evidencias</span>
                    </h2>
                    <p className="text-cyber-muted text-lg max-w-2xl mx-auto mb-10">
                        Repositorio de prácticas, laboratorios y proyectos realizados durante el curso CNO V.
                    </p>

                    {/* Tabs Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-full font-mono text-sm transition-all duration-300 border ${activeTab === tab.id
                                    ? 'bg-cyber-primary/20 border-cyber-primary text-cyber-primary shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                                    : 'bg-cyber-surface/50 border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                                    }`}
                            >
                                {tab.label}
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
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    >
                        {projectsData[activeTab].map((project, index) => (
                            <div
                                key={index}
                                className={`glass-card rounded-2xl p-8 border relative overflow-hidden group transition-all duration-500 ${project.status === 'Locked'
                                        ? 'border-red-500/10 hover:border-red-500/30'
                                        : 'border-cyber-primary/20 hover:border-cyber-primary/50'
                                    }`}
                            >
                                {/* Scanline effect */}
                                <div className="absolute inset-0 bg-scanline opacity-5 pointer-events-none"></div>

                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-mono border flex items-center gap-2 ${project.status === 'Locked'
                                            ? 'bg-red-500/10 text-red-400 border-red-500/20'
                                            : 'bg-cyber-primary/10 text-cyber-primary border-cyber-primary/20'
                                        }`}>
                                        {project.status === 'Locked' ? <FaLock className="text-[10px]" /> : <div className="w-2 h-2 bg-cyber-primary rounded-full animate-pulse"></div>}
                                        {project.status}
                                    </span>
                                </div>

                                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-3xl transition-transform duration-300 group-hover:scale-110 ${project.status === 'Locked'
                                        ? 'bg-red-500/5 text-red-500/50'
                                        : 'bg-cyber-primary/10 text-cyber-primary'
                                    }`}>
                                    {project.icon}
                                </div>

                                <h3 className={`text-xl font-bold mb-3 transition-colors ${project.status === 'Locked' ? 'text-gray-500' : 'text-white group-hover:text-cyber-primary'
                                    }`}>
                                    {project.title}
                                </h3>

                                <p className="text-gray-500 mb-6 leading-relaxed font-mono text-sm">
                                    {project.status === 'Locked' ? '>>> ENCRYPTED_DATA_PACKET_v2.0' : project.description}
                                </p>

                                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                                    <div className={`h-full ${project.status === 'Locked'
                                            ? 'bg-red-900/30 w-full'
                                            : 'bg-cyber-primary w-2/3 animate-pulse'
                                        }`}></div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;

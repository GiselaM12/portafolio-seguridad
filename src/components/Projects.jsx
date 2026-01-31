import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFolderPlus, FaShieldAlt, FaCode, FaLock, FaBug, FaNetworkWired } from 'react-icons/fa';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('parcial1');

    const projectsData = {
        parcial1: [
            {
                icon: <FaShieldAlt />,
                title: "Evidencia de Aprendizaje 1",
                description: "Próximamente: Resultados de análisis de vulnerabilidades y seguridad lógica.",
                status: "En desarrollo"
            },
            {
                icon: <FaCode />,
                title: "Laboratorios Técnicos",
                description: "Próximamente: Documentación de prácticas de pentesting y hardening.",
                status: "Pendiente"
            },
            {
                icon: <FaFolderPlus />,
                title: "Proyecto Integrador",
                description: "Próximamente: Solución integral de seguridad para entorno corporativo simulado.",
                status: "Planificación"
            }
        ],
        parcial2: [
            {
                icon: <FaBug />,
                title: "Análisis de Malware",
                description: "Espacio reservado para evidencias del segundo parcial.",
                status: "Bloqueado"
            },
            {
                icon: <FaNetworkWired />,
                title: "Seguridad en Redes",
                description: "Prácticas futuras sobre configuración segura de redes.",
                status: "Bloqueado"
            }
        ],
        parcial3: [
            {
                icon: <FaLock />,
                title: "Criptografía Aplicada",
                description: "Espacio reservado para evidencias del tercer parcial.",
                status: "Bloqueado"
            },
            {
                icon: <FaShieldAlt />,
                title: "Proyecto Final",
                description: "Defensa integral de infraestructura crítica.",
                status: "Bloqueado"
            }
        ]
    };

    const tabs = [
        { id: 'parcial1', label: 'Parcial 1' },
        { id: 'parcial2', label: 'Parcial 2' },
        { id: 'parcial3', label: 'Parcial 3' },
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
                                className="glass-card rounded-2xl p-8 border border-white/5 relative overflow-hidden group hover:border-cyber-primary/30 transition-all duration-300"
                            >
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-mono border ${project.status === 'Bloqueado'
                                            ? 'bg-red-500/10 text-red-400 border-red-500/20'
                                            : 'bg-white/5 text-cyber-accent border-white/10'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>

                                <div className="w-14 h-14 bg-cyber-surface rounded-xl flex items-center justify-center mb-6 text-2xl text-cyber-primary group-hover:scale-110 transition-transform duration-300">
                                    {project.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-secondary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm text-cyber-muted font-mono opacity-50">
                                    {project.status !== 'Bloqueado' && (
                                        <>
                                            <div className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse"></div>
                                            Coming Soon
                                        </>
                                    )}
                                    {project.status === 'Bloqueado' && (
                                        <>
                                            <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                            Bloqueado
                                        </>
                                    )}
                                </div>

                                {/* Decorative gradient line */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;

import { motion } from 'framer-motion';
import { FaFolderPlus, FaShieldAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
    const placeholders = [
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
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">Proyectos y Evidencias</span>
                    </h2>
                    <p className="text-cyber-muted text-lg max-w-2xl mx-auto">
                        Repositorio de prácticas, laboratorios y proyectos realizados durante el curso CNO V.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {placeholders.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="glass-card rounded-2xl p-8 border border-white/5 relative overflow-hidden group"
                        >
                            <div className="absolute top-4 right-4">
                                <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-cyber-accent border border-white/10">
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
                                <div className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse"></div>
                                Coming Soon
                            </div>

                            {/* Decorative gradient line */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

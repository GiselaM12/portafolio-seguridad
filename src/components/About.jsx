import { motion } from 'framer-motion';
import { FaShieldAlt, FaBug, FaLock, FaSearch } from 'react-icons/fa';

const About = () => {
    const features = [
        {
            icon: <FaShieldAlt />,
            title: 'Seguridad Informática',
            description: 'Fundamentos de protección de sistemas y datos',
        },
        {
            icon: <FaBug />,
            title: 'Pruebas de Penetración',
            description: 'Técnicas de ethical hacking y pentesting',
        },
        {
            icon: <FaSearch />,
            title: 'Análisis de Vulnerabilidades',
            description: 'Identificación y evaluación de riesgos',
        },
        {
            icon: <FaLock />,
            title: 'Ciberseguridad',
            description: 'Protección contra amenazas digitales',
        },
    ];

    return (
        <section id="presentacion" className="min-h-screen py-20 px-6">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">Sobre el Portafolio</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-cyber mx-auto mb-8"></div>
                </motion.div>

                {/* Propósito del Portafolio */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl p-8 md:p-12 mb-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-cyber-primary mb-6">
                        ¿Qué es este sitio?
                    </h3>
                    <p className="text-cyber-text text-lg leading-relaxed mb-6">
                        Este es mi espacio personal donde voy a ir subiendo todo lo que aprenda en mi clase de <span className="text-cyber-secondary font-semibold">Seguridad Informática</span>. Lo uso para guardar mis prácticas y tareas importantes.
                    </p>
                    <p className="text-cyber-text text-lg leading-relaxed">
                        Aquí vas a encontrar desde lo básico que voy viendo en teoría, hasta ejercicios prácticos donde intento aplicar técnicas de <span className="text-cyber-primary font-semibold">ciberseguridad</span> y <span className="text-cyber-primary font-semibold">hacking ético</span> que vemos en el curso.
                    </p>
                </motion.div>

                {/* Enfoque del Curso */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-cyber-secondary mb-8 text-center">
                        Enfoque del Curso
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="glass-card rounded-xl p-6 text-center hover:bg-cyber-surface/80 transition-all duration-300 hover:glow-primary"
                            >
                                <div className="text-5xl text-cyber-primary mb-4 flex justify-center">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold text-cyber-text mb-3">
                                    {feature.title}
                                </h4>
                                <p className="text-cyber-muted">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Evidencias de Aprendizaje */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl p-8 md:p-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-cyber-accent mb-6">
                        Mis Evidencias
                    </h3>
                    <p className="text-cyber-text text-lg leading-relaxed">
                        Aquí iré poniendo mis reportes (PF01, PF02, PF03). Son básicamente las tareas grandes y el proyecto final que demuestran que le estoy entendiendo a la materia. Verás investigaciones, laboratorios que hago en clase y análisis de casos reales.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

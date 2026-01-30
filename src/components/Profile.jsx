import { motion } from 'framer-motion';
import { FaUserShield, FaNetworkWired, FaUserSecret, FaBug } from 'react-icons/fa';

const Profile = () => {
    const interests = [
        {
            icon: <FaUserShield />,
            title: 'Análisis Forense Digital',
            description: 'Investigación de incidentes de seguridad y recuperación de evidencias digitales',
        },
        {
            icon: <FaNetworkWired />,
            title: 'Seguridad de Redes',
            description: 'Protección de infraestructuras de red y prevención de intrusiones',
        },
        {
            icon: <FaUserSecret />,
            title: 'Ingeniería Social y Phishing',
            description: 'Análisis de técnicas de manipulación y ataques de phishing',
        },
        {
            icon: <FaBug />,
            title: 'Pentesting y Ethical Hacking',
            description: 'Pruebas de penetración y evaluación de vulnerabilidades',
        },
    ];

    return (
        <section id="perfil" className="min-h-screen py-20 px-6 bg-cyber-darker/50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">Perfil del Estudiante</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-cyber mx-auto mb-8"></div>
                </motion.div>

                {/* Semblanza Académica */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="glass-strong rounded-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-cyber rounded-full flex items-center justify-center">
                            <FaUserShield className="text-3xl text-cyber-dark" />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-cyber-text">
                                Gisela Geraldine Moreno Solis
                            </h3>
                            <p className="text-cyber-muted">Estudiante de Seguridad Informática</p>
                        </div>
                    </div>

                    <div className="space-y-4 text-cyber-text text-lg leading-relaxed">
                        <p>
                            Estudiante comprometida con el aprendizaje de la{' '}
                            <span className="text-cyber-primary font-semibold">Seguridad Informática</span>,
                            enfocada en desarrollar habilidades técnicas y analíticas para proteger sistemas
                            y datos en entornos digitales.
                        </p>
                        <p>
                            Mi formación académica se centra en comprender las amenazas cibernéticas actuales
                            y aplicar metodologías de protección, detección y respuesta ante incidentes de
                            seguridad. Busco constantemente expandir mis conocimientos en tecnologías emergentes
                            y mejores prácticas de la industria.
                        </p>
                        <p>
                            A través de este portafolio, documento mi progreso en el curso{' '}
                            <span className="text-cyber-secondary font-semibold">CNO V - Seguridad Informática</span>,
                            demostrando la aplicación práctica de conceptos teóricos en proyectos y ejercicios
                            de laboratorio.
                        </p>
                    </div>
                </motion.div>

                {/* Intereses */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-cyber-secondary mb-8 text-center">
                        Áreas de Interés en Seguridad Informática
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {interests.map((interest, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300 hover:glow-secondary"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl text-cyber-secondary mt-1">
                                        {interest.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-cyber-text mb-2">
                                            {interest.title}
                                        </h4>
                                        <p className="text-cyber-muted leading-relaxed">
                                            {interest.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Objetivos */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12 glass-strong rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-cyber-accent mb-6 text-center">
                        Objetivos de Aprendizaje
                    </h3>
                    <ul className="space-y-4 text-cyber-text text-lg">
                        <li className="flex items-start gap-3">
                            <span className="text-cyber-primary text-2xl">→</span>
                            <span>Dominar técnicas de identificación y mitigación de vulnerabilidades</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-cyber-primary text-2xl">→</span>
                            <span>Desarrollar habilidades en pentesting ético y pruebas de seguridad</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-cyber-primary text-2xl">→</span>
                            <span>Comprender y aplicar protocolos de seguridad en redes</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-cyber-primary text-2xl">→</span>
                            <span>Adquirir experiencia práctica en análisis forense digital</span>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Profile;

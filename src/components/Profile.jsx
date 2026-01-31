import { motion } from 'framer-motion';
import { FaUserShield, FaNetworkWired, FaUserSecret, FaBug, FaLaptopCode, FaFingerprint, FaLock, FaServer } from 'react-icons/fa';
import profileImage from '../assets/profile.png';

const Profile = () => {
    const interests = [
        {
            icon: <FaBug />,
            title: 'Ethical Hacking',
            description: 'Exploración de vulnerabilidades y técnicas de pentesting ético.',
            color: 'text-cyber-primary'
        },
        {
            icon: <FaNetworkWired />,
            title: 'Seguridad de Redes',
            description: 'Configuración segura de infraestructuras y monitoreo de tráfico.',
            color: 'text-cyber-secondary'
        },
        {
            icon: <FaFingerprint />,
            title: 'Análisis Forense',
            description: 'Metodologías para la recuperación y análisis de evidencia digital.',
            color: 'text-cyber-accent'
        },
        {
            icon: <FaLock />,
            title: 'Criptografía',
            description: 'Implementación de algoritmos para protección de datos.',
            color: 'text-white'
        },
    ];

    return (
        <section id="perfil" className="min-h-screen py-20 px-6 relative">
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
                    <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto mb-8 rounded-full"></div>
                </motion.div>

                {/* Semblanza Académica */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-3xl p-8 md:p-12 mb-20 max-w-5xl mx-auto border-t border-white/10"
                >
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="relative group shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                            <div className="w-48 h-48 rounded-full overflow-hidden relative z-10 border-4 border-white/10 group-hover:scale-105 transition-transform duration-300">
                                <img
                                    src={profileImage}
                                    alt="Gisela Moreno"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="text-center md:text-left flex-1">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                Gisela Geraldine Moreno Solis
                            </h3>
                            <p className="text-cyber-primary text-xl font-mono mb-6">Ingeniería en Tecnologías de la Información</p>

                            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                                <p>
                                    Hola! Soy estudiante de <span className="text-white font-semibold">Ingeniería en Tecnologías de la Información</span> y me encanta todo lo que tiene que ver con proteger sistemas y datos.
                                </p>
                                <p>
                                    Ahora mismo estoy cursando <span className="text-white font-semibold">Seguridad Informática</span>. Me da mucha curiosidad entender cómo funcionan los ataques para saber cómo prevenirlos.
                                </p>
                                <p>
                                    Quiero aprender mucho sobre ciberseguridad, defensa de sistemas y las mejores formas de mantener segura la información en internet. ¡Apenas voy empezando pero con muchas ganas de aprender!
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Intereses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {interests.map((interest, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-8 rounded-2xl hover:bg-cyber-surface/80 group"
                        >
                            <div className={`text-4xl mb-6 ${interest.color} transform group-hover:scale-110 transition-transform duration-300`}>
                                {interest.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">
                                {interest.title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {interest.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Profile;

import { motion } from 'framer-motion';
import { FaUserShield, FaNetworkWired, FaBug, FaFingerprint, FaLock, FaTerminal, FaUserSecret, FaCode } from 'react-icons/fa';
import profileImage from '../assets/profile.png';

const Profile = () => {
    const interests = [
        {
            icon: <FaBug />,
            title: 'Ethical Hacking',
            description: 'Exploración de vulnerabilidades y técnicas de pentesting ético.',
            code: 'ETH-001',
        },
        {
            icon: <FaNetworkWired />,
            title: 'Seguridad de Redes',
            description: 'Configuración segura de infraestructuras y monitoreo de tráfico.',
            code: 'NET-002',
        },
        {
            icon: <FaFingerprint />,
            title: 'Análisis Forense',
            description: 'Metodologías para la recuperación y análisis de evidencia digital.',
            code: 'FOR-003',
        },
        {
            icon: <FaLock />,
            title: 'Criptografía',
            description: 'Implementación de algoritmos para protección de datos.',
            code: 'CRY-004',
        },
    ];

    return (
        <section id="perfil" className="min-h-screen py-20 px-6 relative bg-[#030712] overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 scanlines pointer-events-none opacity-50" />
            <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[180px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px]" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    {/* Terminal badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full mb-6">
                        <FaUserSecret className="text-violet-400" />
                        <span className="font-mono text-violet-400 text-sm tracking-wider">AGENT_PROFILE</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">Perfil del Estudiante</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full" />
                </motion.div>

                {/* Semblanza Académica - Terminal Style */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20 max-w-5xl mx-auto"
                >
                    <div className="bg-[#0a0f1a]/80 border border-violet-500/20 rounded-lg overflow-hidden backdrop-blur-sm">
                        {/* Terminal Header */}
                        <div className="bg-[#0d1321] px-6 py-3 border-b border-violet-500/20 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                            </div>
                            <span className="text-xs font-mono text-gray-500">agent_profile.config</span>
                        </div>

                        <div className="p-8 md:p-12">
                            <div className="flex flex-col md:flex-row items-center gap-10">
                                <div className="relative group shrink-0">
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

                                    {/* Hexagonal frame effect */}
                                    <div className="relative">
                                        <div className="w-48 h-48 rounded-full overflow-hidden relative z-10 border-4 border-violet-500/30 group-hover:border-violet-400/50 group-hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                                            <img
                                                src={profileImage}
                                                alt="Gisela Moreno"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Status indicator */}
                                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-violet-500/20 border border-violet-500/30 rounded-full">
                                            <span className="flex items-center gap-1 text-xs font-mono text-violet-400">
                                                <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                                                ACTIVO
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center md:text-left flex-1">
                                    <div className="text-xs font-mono text-violet-500/60 mb-2">[ID: AGENT-001]</div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
                                        Gisela Geraldine Moreno Solis
                                    </h3>
                                    <p className="text-violet-400 text-xl font-mono mb-6 flex items-center gap-2 justify-center md:justify-start">
                                        <FaCode /> Ingeniería en Tecnologías de la Información
                                    </p>

                                    <div className="space-y-4 text-gray-400 text-lg leading-relaxed font-mono">
                                        <p>
                                            <span className="text-violet-400">$</span> Estudiante apasionada por la <span className="text-white font-semibold">Ciberseguridad</span> y la protección de activos digitales.
                                            Actualmente cursando la materia de <span className="text-white font-semibold">Seguridad Informática</span>, donde desarrollo
                                            competencias clave para identificar, analizar y mitigar riesgos en entornos tecnológicos.
                                        </p>
                                        <p>
                                            <span className="text-violet-400">$</span> Mi objetivo es especializarme en la defensa proactiva de sistemas y contribuir a crear entornos digitales más seguros
                                            mediante la aplicación de estándares internacionales y mejores prácticas de la industria.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Intereses Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-purple-400 font-mono flex items-center justify-center gap-3">
                        <FaTerminal />
                        Áreas de Interés
                    </h3>
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
                            className="bg-[#0a0f1a]/80 border border-violet-500/20 p-8 rounded-lg hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 group backdrop-blur-sm"
                        >
                            {/* Code badge */}
                            <div className="text-xs font-mono text-violet-500/60 mb-4">
                                [{interest.code}]
                            </div>
                            <div className="text-4xl text-violet-400 mb-6 group-hover:text-violet-300 transition-colors">
                                {interest.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3 font-mono">
                                {interest.title}
                            </h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
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

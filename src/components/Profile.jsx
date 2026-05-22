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
        <section id="perfil" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 relative bg-[#030712] overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />
            <div className="absolute top-20 left-0 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-cyan-500/5 rounded-full blur-[120px] sm:blur-[180px]" />
            <div className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-violet-600/5 rounded-full blur-[100px] sm:blur-[150px]" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-16"
                >
                    {/* Terminal badge */}
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-500/5 border border-cyan-500/30 rounded mb-4 sm:mb-6 shadow-[0_0_15px_rgba(20,184,166,0.1)]">
                        <FaUserSecret className="text-cyan-400 text-xs sm:text-sm animate-pulse" />
                        <span className="font-mono text-cyan-400 text-[10px] sm:text-xs tracking-widest uppercase">AGENT_PROFILE</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        <span className="text-gradient-cyber drop-shadow-[0_0_35px_rgba(99,102,241,0.15)]">Perfil del Estudiante</span>
                    </h2>
                    <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-cyan-500 via-violet-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                {/* Semblanza Académica - Terminal Style */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12 sm:mb-20 max-w-5xl mx-auto"
                >
                    <div className="bg-[#070b14]/90 border border-cyan-500/20 rounded shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden backdrop-blur-xl">
                        {/* Terminal Header */}
                        <div className="bg-[#090e1a] px-4 py-2.5 border-b border-cyan-500/10 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500/80" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                                <div className="w-2 h-2 rounded-full bg-green-500/80" />
                            </div>
                            <span className="text-[10px] font-mono text-gray-500 tracking-wider">agent_profile.config</span>
                            <div className="w-8" />
                        </div>

                        <div className="p-6 sm:p-10 md:p-12">
                            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
                                <div className="relative group shrink-0">
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-600 rounded blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

                                    {/* Profile image */}
                                    <div className="relative">
                                        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded overflow-hidden relative z-10 border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.15)] bg-slate-950">
                                            <img
                                                src={profileImage}
                                                alt="Gisela Moreno"
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                            />
                                            {/* Laser scanning line */}
                                            <div className="absolute left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_8px_#22d3ee] opacity-70 animate-laser-scan" />
                                        </div>
                                        {/* Status indicator */}
                                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-cyan-500/10 border border-cyan-500/30 rounded shadow-[0_0_8px_rgba(20,184,166,0.2)]">
                                            <span className="flex items-center gap-1 text-[9px] font-mono text-cyan-400 tracking-widest">
                                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_4px_#22d3ee]" />
                                                ACTIVE
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center md:text-left flex-1">
                                    <div className="text-[9px] font-mono text-cyan-500/70 mb-1.5 tracking-widest flex items-center gap-2 justify-center md:justify-start">
                                        <span>[ID: G-MORENO.TI]</span>
                                        <span className="text-gray-700">|</span>
                                        <span className="text-violet-400 font-semibold">ACCESS: LEVEL_4</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 font-mono uppercase tracking-wider">
                                        Gisela Geraldine Moreno Solis
                                    </h3>
                                    <p className="text-cyan-400 text-xs font-mono mb-4 sm:mb-6 flex items-center gap-2 justify-center md:justify-start flex-wrap uppercase tracking-widest">
                                        <FaCode className="shrink-0 text-cyan-400" />
                                        <span>Ingeniería en Tecnologías de la Información</span>
                                    </p>

                                    <div className="space-y-3 text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed font-mono">
                                        <p>
                                            <span className="text-cyan-500/70 font-semibold">$</span> Estudiante apasionada por la <span className="text-white font-semibold">Ciberseguridad</span> y la protección de activos digitales.
                                        </p>
                                        <p className="hidden sm:block">
                                            <span className="text-cyan-500/70 font-semibold">$</span> Mi objetivo es especializarme en la defensa proactiva de sistemas y crear entornos digitales más seguros.
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
                    className="text-center mb-8 sm:mb-12"
                >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 font-mono flex items-center justify-center gap-2 sm:gap-3 uppercase tracking-widest">
                        <FaTerminal className="text-cyan-400" />
                        Áreas de Interés
                    </h3>
                </motion.div>

                {/* Intereses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
                    {interests.map((interest, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -2 }}
                            className="bg-[#070b14]/90 border border-cyan-500/10 p-5 rounded hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(20,184,166,0.15)] transition-all duration-300 group backdrop-blur-sm corner-borders relative"
                        >
                            {/* Code badge */}
                            <div className="text-[10px] font-mono text-cyan-500/60 mb-3 sm:mb-4">
                                [{interest.code}]
                            </div>
                            <div className="text-3xl text-cyan-400 mb-4 sm:mb-6 group-hover:text-cyan-300 transition-colors drop-shadow-[0_0_10px_rgba(20,184,166,0.2)]">
                                {interest.icon}
                            </div>
                            <h4 className="text-sm sm:text-base font-bold text-white mb-2 sm:mb-3 font-mono uppercase tracking-wider">
                                {interest.title}
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                {interest.description}
                            </p>
                            
                            <div className="mt-4 flex items-center justify-between text-[9px] font-mono text-cyan-500/70 border-t border-cyan-500/5 pt-3">
                                <span>METRIC_STATUS</span>
                                <span className="text-cyan-400 font-semibold tracking-wider">VERIFIED</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Profile;

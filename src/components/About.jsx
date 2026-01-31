import { motion } from 'framer-motion';
import { FaShieldAlt, FaBug, FaLock, FaSearch, FaTerminal, FaServer, FaDatabase, FaEye } from 'react-icons/fa';

const About = () => {
    const features = [
        {
            icon: <FaShieldAlt />,
            title: 'Seguridad Informática',
            description: 'Fundamentos de protección de sistemas y datos',
            code: 'SEC-001',
        },
        {
            icon: <FaBug />,
            title: 'Pruebas de Penetración',
            description: 'Técnicas de ethical hacking y pentesting',
            code: 'PEN-002',
        },
        {
            icon: <FaSearch />,
            title: 'Análisis de Vulnerabilidades',
            description: 'Identificación y evaluación de riesgos',
            code: 'VUL-003',
        },
        {
            icon: <FaLock />,
            title: 'Ciberseguridad',
            description: 'Protección contra amenazas digitales',
            code: 'CYB-004',
        },
    ];

    return (
        <section id="presentacion" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-[#030712] relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 scanlines pointer-events-none opacity-50" />
            <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-violet-600/5 rounded-full blur-[100px] sm:blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-purple-600/5 rounded-full blur-[100px] sm:blur-[150px]" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-16"
                >
                    {/* Terminal badge */}
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-violet-500/10 border border-violet-500/30 rounded-full mb-4 sm:mb-6">
                        <FaDatabase className="text-violet-400 text-xs sm:text-sm" />
                        <span className="font-mono text-violet-400 text-[10px] sm:text-sm tracking-wider">SYSTEM_INFO</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        <span className="text-gradient">Sobre el Portafolio</span>
                    </h2>
                    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto" />
                </motion.div>

                {/* Propósito del Portafolio - Terminal Style */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-10 sm:mb-12"
                >
                    <div className="bg-[#0a0f1a]/80 border border-violet-500/20 rounded-lg overflow-hidden backdrop-blur-sm">
                        {/* Terminal Header */}
                        <div className="bg-[#0d1321] px-3 sm:px-6 py-2 sm:py-3 border-b border-violet-500/20 flex items-center justify-between">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-red-500/70" />
                                <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500/70" />
                            </div>
                            <span className="text-[10px] sm:text-xs font-mono text-gray-500">purpose.md</span>
                        </div>

                        <div className="p-4 sm:p-8 md:p-10">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-violet-400 mb-4 sm:mb-6 font-mono flex items-center gap-2 sm:gap-3">
                                <FaTerminal className="text-lg sm:text-xl" />
                                <span className="break-words">Propósito del Portafolio</span>
                            </h3>
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 font-mono">
                                <span className="text-violet-400">$</span> Este portafolio digital es la{' '}
                                <span className="text-purple-400 font-semibold">portada técnica</span> de mi
                                trayectoria académica en Seguridad Informática.
                            </p>
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-mono">
                                <span className="text-violet-400">$</span> Cada apartado refleja el proceso de aprendizaje en{' '}
                                <span className="text-violet-400 font-semibold">ciberseguridad</span>,{' '}
                                <span className="text-violet-400 font-semibold">ethical hacking</span> y{' '}
                                <span className="text-violet-400 font-semibold">análisis de vulnerabilidades</span>.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Enfoque del Curso - Grid Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-10 sm:mb-12"
                >
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400 mb-6 sm:mb-8 text-center font-mono flex items-center justify-center gap-2 sm:gap-3">
                        <FaServer className="text-lg sm:text-xl" />
                        Módulos del Curso
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="bg-[#0a0f1a]/80 border border-violet-500/20 rounded-lg p-4 sm:p-6 hover:border-violet-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] backdrop-blur-sm group"
                            >
                                {/* Code badge */}
                                <div className="text-[10px] sm:text-xs font-mono text-violet-500/60 mb-3 sm:mb-4">
                                    [{feature.code}]
                                </div>
                                <div className="text-3xl sm:text-4xl text-violet-400 mb-3 sm:mb-4 group-hover:text-violet-300 transition-colors">
                                    {feature.icon}
                                </div>
                                <h4 className="text-base sm:text-lg font-bold text-gray-200 mb-2 font-mono">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-500 text-xs sm:text-sm">{feature.description}</p>
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
                >
                    <div className="bg-[#0a0f1a]/80 border border-violet-500/20 rounded-lg overflow-hidden backdrop-blur-sm">
                        {/* Terminal Header */}
                        <div className="bg-[#0d1321] px-3 sm:px-6 py-2 sm:py-3 border-b border-violet-500/20 flex items-center justify-between">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-red-500/70" />
                                <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500/70" />
                            </div>
                            <span className="text-[10px] sm:text-xs font-mono text-gray-500">evidence.log</span>
                        </div>

                        <div className="p-4 sm:p-8 md:p-10">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-400 mb-4 sm:mb-6 font-mono flex items-center gap-2 sm:gap-3">
                                <FaEye className="text-lg sm:text-xl" />
                                <span>Evidencias de Aprendizaje</span>
                            </h3>
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-mono">
                                <span className="text-violet-400">$</span> Este portafolio documenta mi progreso a través de los apartados{' '}
                                <span className="text-violet-400">(PF01, PF02, PF03 y entrega final)</span>. Las
                                evidencias incluyen investigaciones, prácticas de laboratorio y proyectos aplicados.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

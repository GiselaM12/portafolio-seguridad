import { motion } from 'framer-motion';
import { FaShieldAlt, FaBug, FaLock, FaSearch, FaTerminal, FaServer, FaDatabase, FaEye } from 'react-icons/fa';

const About = () => {
    const features = [
        {
            icon: <FaShieldAlt />,
            title: 'Seguridad Informática',
            description: 'Fundamentos de protección de sistemas y datos',
            code: 'SEC-001',
            level: '90%',
        },
        {
            icon: <FaBug />,
            title: 'Pruebas de Penetración',
            description: 'Técnicas de ethical hacking y pentesting',
            code: 'PEN-002',
            level: '85%',
        },
        {
            icon: <FaSearch />,
            title: 'Análisis de Vulnerabilidades',
            description: 'Identificación y evaluación de riesgos',
            code: 'VUL-003',
            level: '95%',
        },
        {
            icon: <FaLock />,
            title: 'Ciberseguridad',
            description: 'Protección contra amenazas digitales',
            code: 'CYB-004',
            level: '90%',
        },
    ];

    return (
        <section id="presentacion" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-[#030712] relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />
            <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-500/5 rounded-full blur-[100px] sm:blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-violet-600/5 rounded-full blur-[100px] sm:blur-[150px]" />

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
                        <FaDatabase className="text-cyan-400 text-xs sm:text-sm animate-pulse" />
                        <span className="font-mono text-cyan-400 text-[10px] sm:text-xs tracking-widest uppercase">SYSTEM_INFO</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        <span className="text-gradient-cyber drop-shadow-[0_0_35px_rgba(99,102,241,0.15)]">Sobre el Portafolio</span>
                    </h2>
                    <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-cyan-500 via-violet-500 to-purple-500 mx-auto" />
                </motion.div>

                {/* Propósito del Portafolio - Terminal Style */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-10 sm:mb-12"
                >
                    <div className="bg-[#070b14]/90 border border-cyan-500/20 rounded shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden backdrop-blur-xl">
                        {/* Terminal Header */}
                        <div className="bg-[#090e1a] px-4 py-2.5 border-b border-cyan-500/10 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500/80" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                                <div className="w-2 h-2 rounded-full bg-green-500/80" />
                            </div>
                            <span className="text-[10px] font-mono text-gray-500 tracking-wider">purpose.md</span>
                            <div className="w-8" />
                        </div>

                        <div className="p-5 sm:p-8 md:p-10">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-4 sm:mb-6 font-mono flex items-center gap-2 sm:gap-3 uppercase tracking-wider">
                                <FaTerminal className="text-cyan-400" />
                                <span className="break-words">Propósito del Portafolio</span>
                            </h3>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-mono">
                                <span className="text-cyan-500/70 font-semibold">$</span> Este portafolio digital es la{' '}
                                <span className="text-cyan-400 font-semibold">portada técnica</span> de mi
                                trayectoria académica en Seguridad Informática.
                            </p>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-mono">
                                <span className="text-cyan-500/70 font-semibold">$</span> Cada apartado refleja el proceso de aprendizaje en{' '}
                                <span className="text-cyan-400 font-semibold">ciberseguridad</span>,{' '}
                                <span className="text-violet-400 font-semibold">ethical hacking</span> y{' '}
                                <span className="text-purple-400 font-semibold">análisis de vulnerabilidades</span>.
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
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-6 sm:mb-8 text-center font-mono flex items-center justify-center gap-2 sm:gap-3 uppercase tracking-widest">
                        <FaServer className="text-cyan-400" />
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
                                whileHover={{ scale: 1.02, y: -2 }}
                                className="bg-[#070b14]/90 border border-cyan-500/10 rounded p-4 sm:p-6 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(20,184,166,0.15)] transition-all duration-300 backdrop-blur-sm group corner-borders relative"
                            >
                                {/* Code badge */}
                                <div className="text-[10px] font-mono text-cyan-500/60 mb-3 sm:mb-4">
                                    [{feature.code}]
                                </div>
                                <div className="text-3xl text-cyan-400 mb-3 sm:mb-4 group-hover:text-cyan-300 transition-colors drop-shadow-[0_0_10px_rgba(20,184,166,0.2)]">
                                    {feature.icon}
                                </div>
                                <h4 className="text-sm sm:text-base font-bold text-gray-200 mb-2 font-mono uppercase tracking-wider">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-500 text-xs leading-relaxed mb-4">{feature.description}</p>
                                
                                {/* level bar */}
                                <div className="mt-auto pt-2">
                                    <div className="flex justify-between text-[9px] font-mono text-cyan-500/70 mb-1">
                                        <span>LEVEL</span>
                                        <span>{feature.level}</span>
                                    </div>
                                    <div className="w-full bg-cyan-950/40 rounded-full h-1 overflow-hidden">
                                        <div className="bg-cyan-500 h-full rounded-full transition-all duration-500" style={{ width: feature.level }} />
                                    </div>
                                </div>
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
                    <div className="bg-[#070b14]/90 border border-cyan-500/20 rounded shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden backdrop-blur-xl">
                        {/* Terminal Header */}
                        <div className="bg-[#090e1a] px-4 py-2.5 border-b border-cyan-500/10 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500/80" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                                <div className="w-2 h-2 rounded-full bg-green-500/80" />
                            </div>
                            <span className="text-[10px] font-mono text-gray-500 tracking-wider">evidence.log</span>
                            <div className="w-8" />
                        </div>

                        <div className="p-5 sm:p-8 md:p-10">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-4 sm:mb-6 font-mono flex items-center gap-2 sm:gap-3 uppercase tracking-wider">
                                <FaEye className="text-cyan-400" />
                                <span>Evidencias de Aprendizaje</span>
                            </h3>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-mono">
                                <span className="text-cyan-500/70 font-semibold">$</span> Este portafolio documenta mi progreso a través de los apartados{' '}
                                <span className="text-cyan-400 font-semibold">(PF01, PF02, PF03 y entrega final)</span>. Las
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

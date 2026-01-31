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
        <section id="presentacion" className="min-h-screen py-20 px-6 bg-[#030712] relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 scanlines pointer-events-none opacity-50" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px]" />

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
                        <FaDatabase className="text-violet-400" />
                        <span className="font-mono text-violet-400 text-sm tracking-wider">SYSTEM_INFO</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">Sobre el Portafolio</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto" />
                </motion.div>

                {/* Propósito del Portafolio - Terminal Style */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="bg-[#0a0f1a]/80 border border-violet-500/20 rounded-lg overflow-hidden backdrop-blur-sm">
                        {/* Terminal Header */}
                        <div className="bg-[#0d1321] px-6 py-3 border-b border-violet-500/20 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                            </div>
                            <span className="text-xs font-mono text-gray-500">purpose.md</span>
                        </div>

                        <div className="p-8 md:p-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-violet-400 mb-6 font-mono flex items-center gap-3">
                                <FaTerminal />
                                Propósito del Portafolio Digital
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-mono">
                                <span className="text-violet-400">$</span> Este portafolio digital funciona como la{' '}
                                <span className="text-purple-400 font-semibold">portada técnica</span> de mi
                                trayectoria académica en Seguridad Informática. Su propósito es documentar y presentar
                                de manera organizada las evidencias de aprendizaje adquiridas a lo largo del curso.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed font-mono">
                                <span className="text-violet-400">$</span> Cada apartado refleja el proceso de aprendizaje, desde los fundamentos teóricos hasta
                                la aplicación práctica de técnicas de{' '}
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
                    className="mb-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-8 text-center font-mono flex items-center justify-center gap-3">
                        <FaServer />
                        Módulos del Curso
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="bg-[#0a0f1a]/80 border border-violet-500/20 rounded-lg p-6 hover:border-violet-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] backdrop-blur-sm group"
                            >
                                {/* Code badge */}
                                <div className="text-xs font-mono text-violet-500/60 mb-4">
                                    [{feature.code}]
                                </div>
                                <div className="text-4xl text-violet-400 mb-4 group-hover:text-violet-300 transition-colors">
                                    {feature.icon}
                                </div>
                                <h4 className="text-lg font-bold text-gray-200 mb-2 font-mono">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-500 text-sm">{feature.description}</p>
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
                        <div className="bg-[#0d1321] px-6 py-3 border-b border-violet-500/20 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                            </div>
                            <span className="text-xs font-mono text-gray-500">evidence.log</span>
                        </div>

                        <div className="p-8 md:p-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-6 font-mono flex items-center gap-3">
                                <FaEye />
                                Evidencias del Proceso de Aprendizaje
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed font-mono">
                                <span className="text-violet-400">$</span> Este portafolio documenta mi progreso a través de diferentes apartados{' '}
                                <span className="text-violet-400">(PF01, PF02, PF03 y entrega final)</span>, cada uno representando una etapa del proceso de aprendizaje. Las
                                evidencias incluyen investigaciones, prácticas de laboratorio, análisis de casos de
                                estudio y proyectos aplicados que demuestran la comprensión y aplicación de los
                                principios de seguridad informática en escenarios reales.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

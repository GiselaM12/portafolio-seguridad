import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaServer, FaTerminal, FaLock, FaShieldAlt } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiVercel, SiNetlify } from 'react-icons/si';

const TechStack = () => {
    const technologies = [
        { name: 'React', icon: <FaReact />, color: 'text-[#61DAFB]' },
        { name: 'Vite', icon: <SiVite />, color: 'text-[#646CFF]' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-[#06B6D4]' },
        { name: 'JavaScript', icon: <FaJs />, color: 'text-[#F7DF1E]' },
        { name: 'HTML5', icon: <FaHtml5 />, color: 'text-[#E34F26]' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-[#1572B6]' },
    ];

    const techInfo = [
        {
            title: 'Lenguajes',
            items: ['React 18', 'JavaScript ES6+', 'Tailwind CSS'],
            icon: <FaJs />,
            code: 'LANG-001',
        },
        {
            title: 'Plataformas',
            items: ['GitHub Pages', 'Vercel', 'Netlify'],
            icon: <FaServer />,
            code: 'PLAT-002',
        },
        {
            title: 'Control de Versiones',
            items: ['Git', 'GitHub'],
            icon: <FaGithub />,
            code: 'VCS-003',
        },
    ];

    return (
        <section id="tecnologias" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-[#030712] relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 scanlines pointer-events-none opacity-50" />
            <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-violet-600/5 rounded-full blur-[100px] sm:blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-purple-600/5 rounded-full blur-[100px] sm:blur-[150px]" />

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
                        <FaTerminal className="text-violet-400 text-xs sm:text-sm" />
                        <span className="font-mono text-violet-400 text-[10px] sm:text-sm tracking-wider">TECH_STACK</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        <span className="text-gradient">Información Técnica</span>
                    </h2>
                    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mb-6 sm:mb-8" />
                    <p className="text-gray-500 text-sm sm:text-lg max-w-2xl mx-auto font-mono px-2">
                        // Tecnologías utilizadas en este portafolio
                    </p>
                </motion.div>

                {/* Technologies Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-10 sm:mb-16"
                >
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400 mb-6 sm:mb-8 text-center font-mono">
                        &lt;Stack Tecnológico /&gt;
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 max-w-5xl mx-auto">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, y: -10 }}
                                className="bg-[#0a0f1a]/80 border border-violet-500/20 rounded-lg p-3 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 backdrop-blur-sm"
                            >
                                <div className={`text-3xl sm:text-5xl ${tech.color}`}>
                                    {tech.icon}
                                </div>
                                <p className="text-gray-300 font-semibold text-[10px] sm:text-sm text-center font-mono">
                                    {tech.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technical Information Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-10 sm:mb-12">
                    {techInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-[#0a0f1a]/80 border border-violet-500/20 rounded-lg p-4 sm:p-6 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 backdrop-blur-sm"
                        >
                            <div className="text-[10px] sm:text-xs font-mono text-violet-500/60 mb-2 sm:mb-3">
                                [{info.code}]
                            </div>
                            <div className="text-2xl sm:text-4xl text-violet-400 mb-3 sm:mb-4">
                                {info.icon}
                            </div>
                            <h4 className="text-base sm:text-xl font-bold text-gray-200 mb-3 sm:mb-4 font-mono">
                                {info.title}
                            </h4>
                            <ul className="space-y-1.5 sm:space-y-2">
                                {info.items.map((item, i) => (
                                    <li key={i} className="text-gray-500 flex items-center gap-2 font-mono text-xs sm:text-sm">
                                        <span className="text-violet-400">▸</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Deployment Info - Terminal Style */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-[#0a0f1a]/80 border border-violet-500/20 rounded-lg overflow-hidden backdrop-blur-sm">
                        {/* Terminal Header */}
                        <div className="bg-[#0d1321] px-3 sm:px-6 py-2 sm:py-3 border-b border-violet-500/20 flex items-center justify-between">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-red-500/70" />
                                <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500/70" />
                            </div>
                            <span className="text-[10px] sm:text-xs font-mono text-gray-500">security.config</span>
                        </div>

                        <div className="p-4 sm:p-8 md:p-10">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-400 mb-4 sm:mb-6 text-center font-mono flex items-center justify-center gap-2 sm:gap-3">
                                <FaShieldAlt className="text-lg sm:text-xl" />
                                Despliegue y Seguridad
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-gray-300">
                                <div>
                                    <h4 className="text-base sm:text-xl font-semibold text-violet-400 mb-2 sm:mb-3 font-mono flex items-center gap-2">
                                        <FaLock className="text-sm" /> Protocolo
                                    </h4>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-mono">
                                        <span className="text-violet-400">$</span> Sitio con{' '}
                                        <span className="text-purple-400 font-bold">HTTPS</span> y
                                        encriptación de datos.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-base sm:text-xl font-semibold text-violet-400 mb-2 sm:mb-3 font-mono flex items-center gap-2">
                                        <FaShieldAlt className="text-sm" /> Certificado
                                    </h4>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-mono">
                                        <span className="text-violet-400">$</span> SSL/TLS automático
                                        para conexiones seguras.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4 sm:gap-6 text-gray-500">
                                <SiVercel className="text-2xl sm:text-4xl hover:text-violet-400 transition-colors cursor-pointer" />
                                <SiNetlify className="text-2xl sm:text-4xl hover:text-violet-400 transition-colors cursor-pointer" />
                                <FaGithub className="text-2xl sm:text-4xl hover:text-violet-400 transition-colors cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;

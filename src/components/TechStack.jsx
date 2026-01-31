import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaServer, FaTerminal, FaLock, FaShieldAlt } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiVercel, SiNetlify } from 'react-icons/si';

const TechStack = () => {
    const technologies = [
        { name: 'React', icon: <FaReact />, color: 'text-[#61DAFB]' },
        { name: 'Vite', icon: <SiVite />, color: 'text-[#646CFF]' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-[#06B6D4]' },
        { name: 'JavaScript', icon: <FaJs />, color: 'text-[#F7DF1E]' },
        { name: 'HTML5', icon: <FaHtml5 />, color: 'text-[#E34F26]' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-[#1572B6]' },
    ];

    const techInfo = [
        {
            title: 'Lenguajes y Tecnologías',
            items: ['React 18', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS'],
            icon: <FaJs />,
            code: 'LANG-001',
        },
        {
            title: 'Plataforma de Publicación',
            items: ['GitHub Pages', 'Vercel', 'Netlify'],
            icon: <FaServer />,
            code: 'PLAT-002',
        },
        {
            title: 'Control de Versiones',
            items: ['Git', 'GitHub', 'Repositorio público'],
            icon: <FaGithub />,
            code: 'VCS-003',
        },
    ];

    return (
        <section id="tecnologias" className="min-h-screen py-20 px-6 bg-[#030712] relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 scanlines pointer-events-none opacity-50" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px]" />

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
                        <FaTerminal className="text-violet-400" />
                        <span className="font-mono text-violet-400 text-sm tracking-wider">TECH_STACK</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">Información Técnica</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mb-8" />
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto font-mono">
                        // Tecnologías y herramientas utilizadas en el desarrollo de este portafolio digital
                    </p>
                </motion.div>

                {/* Technologies Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-8 text-center font-mono">
                        &lt;Stack Tecnológico /&gt;
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, y: -10 }}
                                className="bg-[#0a0f1a]/80 border border-violet-500/20 rounded-lg p-6 flex flex-col items-center justify-center gap-3 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 backdrop-blur-sm"
                            >
                                <div className={`text-5xl ${tech.color}`}>
                                    {tech.icon}
                                </div>
                                <p className="text-gray-300 font-semibold text-sm text-center font-mono">
                                    {tech.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technical Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                    {techInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-[#0a0f1a]/80 border border-violet-500/20 rounded-lg p-6 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 backdrop-blur-sm"
                        >
                            <div className="text-xs font-mono text-violet-500/60 mb-3">
                                [{info.code}]
                            </div>
                            <div className="text-4xl text-violet-400 mb-4">
                                {info.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-200 mb-4 font-mono">
                                {info.title}
                            </h4>
                            <ul className="space-y-2">
                                {info.items.map((item, i) => (
                                    <li key={i} className="text-gray-500 flex items-center gap-2 font-mono text-sm">
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
                        <div className="bg-[#0d1321] px-6 py-3 border-b border-violet-500/20 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                            </div>
                            <span className="text-xs font-mono text-gray-500">security.config</span>
                        </div>

                        <div className="p-8 md:p-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-6 text-center font-mono flex items-center justify-center gap-3">
                                <FaShieldAlt />
                                Despliegue y Seguridad
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                                <div>
                                    <h4 className="text-xl font-semibold text-violet-400 mb-3 font-mono flex items-center gap-2">
                                        <FaLock /> Protocolo de Seguridad
                                    </h4>
                                    <p className="text-gray-500 leading-relaxed font-mono">
                                        <span className="text-violet-400">$</span> El sitio web se despliega con protocolo{' '}
                                        <span className="text-purple-400 font-bold">HTTPS</span>, garantizando
                                        la encriptación de datos y cumpliendo con los estándares de seguridad web.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-violet-400 mb-3 font-mono flex items-center gap-2">
                                        <FaShieldAlt /> Certificado SSL
                                    </h4>
                                    <p className="text-gray-500 leading-relaxed font-mono">
                                        <span className="text-violet-400">$</span> Certificado SSL/TLS automático proporcionado por la plataforma de hosting,
                                        asegurando conexiones seguras y autenticadas.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8 flex items-center justify-center gap-6 text-gray-500">
                                <SiVercel className="text-4xl hover:text-violet-400 transition-colors cursor-pointer" />
                                <SiNetlify className="text-4xl hover:text-violet-400 transition-colors cursor-pointer" />
                                <FaGithub className="text-4xl hover:text-violet-400 transition-colors cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;

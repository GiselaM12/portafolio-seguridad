import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaServer } from 'react-icons/fa';
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
        },
        {
            title: 'Plataforma de Publicación',
            items: ['GitHub Pages', 'Vercel', 'Netlify'],
            icon: <FaServer />,
        },
        {
            title: 'Control de Versiones',
            items: ['Git', 'GitHub', 'Repositorio público'],
            icon: <FaGithub />,
        },
    ];

    return (
        <section id="tecnologias" className="min-h-screen py-20 px-6">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">Información Técnica</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-cyber mx-auto mb-8"></div>
                    <p className="text-cyber-muted text-lg max-w-2xl mx-auto">
                        Tecnologías y herramientas utilizadas en el desarrollo de este portafolio digital
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
                    <h3 className="text-2xl md:text-3xl font-bold text-cyber-secondary mb-8 text-center">
                        Stack Tecnológico
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
                                className="glass-card rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-cyber-surface/80 transition-all duration-300 hover:glow-primary"
                            >
                                <div className={`text-5xl ${tech.color}`}>
                                    {tech.icon}
                                </div>
                                <p className="text-cyber-text font-semibold text-sm text-center">
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
                            className="glass-card rounded-xl p-6 hover:glow-secondary transition-all duration-300"
                        >
                            <div className="text-4xl text-cyber-primary mb-4">
                                {info.icon}
                            </div>
                            <h4 className="text-xl font-bold text-cyber-text mb-4">
                                {info.title}
                            </h4>
                            <ul className="space-y-2">
                                {info.items.map((item, i) => (
                                    <li key={i} className="text-cyber-muted flex items-center gap-2">
                                        <span className="text-cyber-secondary">▸</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Deployment Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-cyber-accent mb-6 text-center">
                        Despliegue y Seguridad
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-cyber-text">
                        <div>
                            <h4 className="text-xl font-semibold text-cyber-primary mb-3">
                                Protocolo de Seguridad
                            </h4>
                            <p className="text-cyber-muted leading-relaxed">
                                El sitio web se despliega con protocolo{' '}
                                <span className="text-cyber-secondary font-bold">HTTPS</span>, garantizando
                                la encriptación de datos y cumpliendo con los estándares de seguridad web.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-cyber-primary mb-3">
                                Certificado SSL
                            </h4>
                            <p className="text-cyber-muted leading-relaxed">
                                Certificado SSL/TLS automático proporcionado por la plataforma de hosting,
                                asegurando conexiones seguras y autenticadas.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-3 text-cyber-secondary">
                        <div className="flex gap-4 text-4xl">
                            <SiVercel className="hover:text-cyber-primary transition-colors" />
                            <SiNetlify className="hover:text-cyber-primary transition-colors" />
                            <FaGithub className="hover:text-cyber-primary transition-colors" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;

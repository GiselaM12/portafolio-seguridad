import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaShieldAlt, FaLock, FaTerminal, FaServer } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#020509] border-t border-violet-500/20 py-12 px-6 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-violet-600/30">
                                <FaShieldAlt />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white font-mono">Gisela Moreno</h3>
                                <p className="text-violet-400 text-xs font-mono">SecOps Portfolio</p>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed font-mono">
                            <span className="text-violet-400">$</span> Portafolio digital de evidencias de aprendizaje en Seguridad Informática y Ciberseguridad.
                        </p>
                    </motion.div>

                    {/* Enlaces Rápidos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-bold text-gray-200 mb-4 font-mono flex items-center gap-2">
                            <FaTerminal className="text-violet-400" /> Navegación
                        </h4>
                        <ul className="space-y-2 font-mono text-sm">
                            {[
                                { name: 'Inicio', href: '#inicio' },
                                { name: 'Presentación', href: '#presentacion' },
                                { name: 'Perfil', href: '#perfil' },
                                { name: 'Proyectos', href: '#proyectos' },
                                { name: 'Tecnologías', href: '#tecnologias' },
                                { name: 'Contacto', href: '#contacto' },
                            ].map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-gray-500 hover:text-violet-400 transition-colors flex items-center gap-2">
                                        <span className="text-violet-500/50">▸</span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Seguridad y Redes */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-bold text-gray-200 mb-4 font-mono flex items-center gap-2">
                            <FaServer className="text-violet-400" /> Sistema
                        </h4>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2 text-gray-500 font-mono text-sm">
                                <FaLock className="text-violet-400" />
                                <span>Certificado SSL/TLS</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 font-mono text-sm">
                                <FaShieldAlt className="text-violet-400" />
                                <span>Protocolo HTTPS</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                                <span className="text-violet-400 font-mono text-xs">ONLINE</span>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-sm font-semibold text-gray-400 mb-3 font-mono">// Redes</h5>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/GiselaM12"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-violet-400 text-2xl transition-colors hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-violet-400 text-2xl transition-colors hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="#contacto"
                                    className="text-gray-500 hover:text-violet-400 text-2xl transition-colors hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                                >
                                    <FaEnvelope />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright - Terminal Style */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-violet-500/10 text-center"
                >
                    <div className="inline-block bg-[#0a0f1a]/80 border border-violet-500/20 rounded-lg px-6 py-3 backdrop-blur-sm">
                        <p className="text-gray-500 text-sm font-mono">
                            <span className="text-violet-400">©</span> {currentYear} Gisela Geraldine Moreno Solis
                            <span className="text-violet-500/50 mx-2">|</span>
                            CNO V - Seguridad Informática
                        </p>
                        <p className="text-gray-600 text-xs mt-1 font-mono">
                            &lt;React /&gt; + Vite + Tailwind CSS
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;

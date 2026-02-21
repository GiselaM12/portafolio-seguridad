import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaShieldAlt, FaLock, FaTerminal, FaServer } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const location = useLocation();
    const navigate = useNavigate();

    const quickLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Presentación', path: '/#presentacion' },
        { name: 'Actividades', path: '/#actividades' },
        { name: 'Perfil', path: '/#perfil' },
        { name: 'Tecnologías', path: '/#tecnologias' },
        { name: 'Contacto', path: '/#contacto' },
    ];

    const handleNavigation = (e, item) => {
        e.preventDefault();

        // Case 1: Standard Route (Actividades is not here but just in case)
        if (!item.path.startsWith('/#') && item.path !== '/') {
            navigate(item.path);
            return;
        }

        // Case 2: Home Page (Scroll to Top)
        if (item.path === '/') {
            if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                navigate('/');
            }
            return;
        }

        // Case 3: Section Anchor (/#section)
        const targetId = item.path.substring(2);
        if (location.pathname === '/') {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/', { state: { targetId } });
        }
    };

    return (
        <footer className="bg-[#020509] border-t border-violet-500/20 py-8 sm:py-12 px-4 sm:px-6 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center sm:text-left"
                    >
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 justify-center sm:justify-start">
                            <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-violet-600/30 text-sm sm:text-base">
                                <FaShieldAlt />
                            </div>
                            <div>
                                <h3 className="text-base sm:text-xl font-bold text-white font-mono">Gisela Moreno</h3>
                                <p className="text-violet-400 text-[10px] sm:text-xs font-mono">SecOps Portfolio</p>
                            </div>
                        </div>
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-mono">
                            <span className="text-violet-400">$</span> Portafolio de Seguridad Informática
                        </p>
                    </motion.div>

                    {/* Enlaces Rápidos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-center sm:text-left"
                    >
                        <h4 className="text-sm sm:text-lg font-bold text-gray-200 mb-3 sm:mb-4 font-mono flex items-center gap-2 justify-center sm:justify-start">
                            <FaTerminal className="text-violet-400 text-xs sm:text-sm" /> Navegación
                        </h4>
                        <div className="flex flex-wrap gap-2 sm:gap-0 sm:flex-col sm:space-y-1.5 justify-center sm:justify-start font-mono text-xs sm:text-sm">
                            {quickLinks.map((link, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => handleNavigation(e, link)}
                                    className="text-gray-500 hover:text-violet-400 transition-colors px-2 sm:px-0 text-left"
                                >
                                    <span className="text-violet-500/50 hidden sm:inline mr-1">▸</span>
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Seguridad y Redes */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center sm:text-left sm:col-span-2 md:col-span-1"
                    >
                        <h4 className="text-sm sm:text-lg font-bold text-gray-200 mb-3 sm:mb-4 font-mono flex items-center gap-2 justify-center sm:justify-start">
                            <FaServer className="text-violet-400 text-xs sm:text-sm" /> Sistema
                        </h4>
                        <div className="flex flex-wrap gap-3 sm:gap-0 sm:flex-col sm:space-y-2 mb-4 sm:mb-6 justify-center sm:justify-start">
                            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500 font-mono text-[10px] sm:text-sm">
                                <FaLock className="text-violet-400 text-[10px] sm:text-xs" />
                                <span>SSL/TLS</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500 font-mono text-[10px] sm:text-sm">
                                <FaShieldAlt className="text-violet-400 text-[10px] sm:text-xs" />
                                <span>HTTPS</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-violet-400 rounded-full animate-pulse" />
                                <span className="text-violet-400 font-mono text-[10px] sm:text-xs">ONLINE</span>
                            </div>
                        </div>
                        <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                            <a
                                href="https://github.com/GiselaM12"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-violet-400 text-xl sm:text-2xl transition-colors hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-violet-400 text-xl sm:text-2xl transition-colors hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                            >
                                <FaLinkedin />
                            </a>
                            <button
                                onClick={(e) => handleNavigation(e, { path: '/#contacto' })}
                                className="text-gray-500 hover:text-violet-400 text-xl sm:text-2xl transition-colors hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                            >
                                <FaEnvelope />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright - Terminal Style */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="pt-6 sm:pt-8 border-t border-violet-500/10 text-center"
                >
                    <div className="inline-block bg-[#0a0f1a]/80 border border-violet-500/20 rounded-lg px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm">
                        <p className="text-gray-500 text-[10px] sm:text-sm font-mono">
                            <span className="text-violet-400">©</span> {currentYear} Gisela Moreno
                            <span className="text-violet-500/50 mx-1 sm:mx-2">|</span>
                            <span className="hidden sm:inline">CNO V -</span> Seguridad
                        </p>
                        <p className="text-gray-600 text-[8px] sm:text-xs mt-1 font-mono">
                            React + Vite + Tailwind
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;

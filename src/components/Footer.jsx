import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaShieldAlt, FaLock } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-cyber-darker border-t border-cyber-surface py-12 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <FaShieldAlt className="text-cyber-primary text-3xl" />
                            <div>
                                <h3 className="text-xl font-bold text-cyber-text">Gisela Moreno</h3>
                                <p className="text-cyber-muted text-sm">Seguridad Informática</p>
                            </div>
                        </div>
                        <p className="text-cyber-muted text-sm leading-relaxed">
                            Portafolio digital de evidencias de aprendizaje en Seguridad Informática y Ciberseguridad.
                        </p>
                    </motion.div>

                    {/* Enlaces Rápidos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-bold text-cyber-text mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#inicio" className="text-cyber-muted hover:text-cyber-primary transition-colors">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="#presentacion" className="text-cyber-muted hover:text-cyber-primary transition-colors">
                                    Presentación
                                </a>
                            </li>
                            <li>
                                <a href="#perfil" className="text-cyber-muted hover:text-cyber-primary transition-colors">
                                    Perfil
                                </a>
                            </li>
                            <li>
                                <a href="#tecnologias" className="text-cyber-muted hover:text-cyber-primary transition-colors">
                                    Tecnologías
                                </a>
                            </li>
                            <li>
                                <a href="#contacto" className="text-cyber-muted hover:text-cyber-primary transition-colors">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Seguridad y Redes */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-bold text-cyber-text mb-4">Seguridad</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-cyber-muted">
                                <FaLock className="text-cyber-primary" />
                                <span className="text-sm">Certificado SSL/TLS</span>
                            </div>
                            <div className="flex items-center gap-2 text-cyber-muted">
                                <FaShieldAlt className="text-cyber-primary" />
                                <span className="text-sm">Protocolo HTTPS</span>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h5 className="text-sm font-semibold text-cyber-text mb-3">Sígueme</h5>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyber-muted hover:text-cyber-primary text-2xl transition-colors"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyber-muted hover:text-cyber-secondary text-2xl transition-colors"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="#contacto"
                                    className="text-cyber-muted hover:text-cyber-accent text-2xl transition-colors"
                                >
                                    <FaEnvelope />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-cyber-surface text-center"
                >
                    <p className="text-cyber-muted text-sm">
                        © {currentYear} Gisela Geraldine Moreno Solis. CNO V - Seguridad Informática.
                    </p>
                    <p className="text-cyber-muted text-xs mt-2">
                        Desarrollado con React, Vite y Tailwind CSS
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;

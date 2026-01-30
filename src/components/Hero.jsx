import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = 'Especialista en Seguridad Informática';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-primary/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-cyber-muted text-lg md:text-xl mb-4 font-mono">
                            Hola, soy
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="text-gradient">Gisela Geraldine</span>
                            <br />
                            <span className="text-cyber-text">Moreno Solis</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mb-8"
                    >
                        <p className="text-2xl md:text-3xl text-cyber-secondary font-mono min-h-[40px]">
                            {displayText}
                            <span className="animate-pulse">|</span>
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-cyber-muted text-lg md:text-xl max-w-2xl mx-auto mb-12"
                    >
                        Portafolio Digital - CNO V: Seguridad Informática
                        <br />
                        Documentación de evidencias de aprendizaje
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="flex flex-wrap gap-4 justify-center mb-12"
                    >
                        <a
                            href="#presentacion"
                            className="px-8 py-4 bg-gradient-cyber text-cyber-dark font-bold rounded-lg hover:shadow-lg hover:shadow-cyber-primary/50 transition-all duration-300 transform hover:scale-105"
                        >
                            Ver Portafolio
                        </a>
                        <a
                            href="#contacto"
                            className="px-8 py-4 glass-strong text-cyber-text font-bold rounded-lg hover:glow-primary transition-all duration-300 transform hover:scale-105"
                        >
                            Contacto
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6, duration: 0.8 }}
                        className="flex gap-6 justify-center"
                    >
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyber-muted hover:text-cyber-primary text-3xl transition-colors duration-300 transform hover:scale-110"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyber-muted hover:text-cyber-secondary text-3xl transition-colors duration-300 transform hover:scale-110"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="#contacto"
                            className="text-cyber-muted hover:text-cyber-accent text-3xl transition-colors duration-300 transform hover:scale-110"
                        >
                            <FaEnvelope />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-cyber-primary rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-cyber-primary rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

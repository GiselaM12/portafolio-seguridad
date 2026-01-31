import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = 'Estudiante de Ingeniería en Tecnologías de la Información';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 80);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated Background - Aurora Effect */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-primary/20 rounded-full blur-[100px] animate-float"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-secondary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-cyber-accent/10 rounded-full blur-[120px] animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-cyber-accent font-mono text-lg md:text-xl mb-6 tracking-wide">
                            &lt; Hello World /&gt;
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                            <span className="text-gray-100">Soy </span>
                            <span className="text-gradient">Gisela Moreno</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mb-10 h-20 md:h-16"
                    >
                        <p className="text-xl md:text-2xl text-cyber-muted font-light leading-relaxed">
                            {displayText}
                            <span className="animate-pulse text-cyber-secondary">_</span>
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
                    >
                        Portafolio Digital · CNO V: Seguridad Informática
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="flex flex-wrap gap-4 justify-center mb-16"
                    >
                        <a
                            href="#presentacion"
                            className="px-8 py-4 bg-cyber-primary hover:bg-indigo-600 text-white font-bold rounded-lg shadow-lg shadow-cyber-primary/25 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Ver Proyectos
                        </a>
                        <a
                            href="#contacto"
                            className="px-8 py-4 glass-card text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300"
                        >
                            Contactar
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6, duration: 0.8 }}
                        className="flex gap-8 justify-center items-center"
                    >
                        <a
                            href="https://github.com/GiselaM12"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white text-3xl transition-all duration-300 hover:scale-110"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 text-3xl transition-all duration-300 hover:scale-110"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="#contacto"
                            className="text-gray-400 hover:text-cyber-secondary text-3xl transition-all duration-300 hover:scale-110"
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
                <div className="w-5 h-9 border-2 border-cyber-muted/30 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-1 bg-cyber-accent rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

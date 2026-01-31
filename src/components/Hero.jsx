import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal, FaShieldAlt, FaLock } from 'react-icons/fa';
import { useEffect, useState } from 'react';

// Binary rain component
const BinaryRain = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            {Array.from({ length: 20 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute text-violet-500 font-mono text-xs"
                    style={{
                        left: `${i * 5}%`,
                        animation: `matrix-fall ${8 + Math.random() * 10}s linear infinite`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                >
                    {Array.from({ length: 30 }).map((_, j) => (
                        <div key={j} style={{ opacity: 1 - (j * 0.03) }}>
                            {Math.random() > 0.5 ? '1' : '0'}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
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
        }, 60);

        // Cursor blink
        const cursorTimer = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => {
            clearInterval(timer);
            clearInterval(cursorTimer);
        };
    }, []);

    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-[#030712]">
            {/* Binary Rain Background */}
            <BinaryRain />

            {/* Scanlines overlay */}
            <div className="absolute inset-0 scanlines pointer-events-none z-10" />

            {/* Glowing orbs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[180px]" />

            {/* Content */}
            <div className="container mx-auto px-6 z-20">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Terminal badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full mb-8"
                    >
                        <FaTerminal className="text-violet-400" />
                        <span className="font-mono text-violet-400 text-sm tracking-wider">SECURITY_ANALYST_v1.0</span>
                        <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-violet-400 font-mono text-lg md:text-xl mb-6 tracking-wide">
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
                        className="mb-8"
                    >
                        {/* Terminal-like text display */}
                        <div className="inline-block bg-[#0a0f1a]/80 border border-violet-500/20 rounded-lg px-6 py-4 backdrop-blur-sm">
                            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono mb-2">
                                <FaLock className="text-violet-400" />
                                <span>secure-terminal</span>
                            </div>
                            <p className="text-xl md:text-2xl text-gray-300 font-mono">
                                <span className="text-violet-400">$</span> {displayText}
                                <span className={`text-violet-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>█</span>
                            </p>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-mono"
                    >
                        <span className="text-violet-400">//</span> Portafolio Digital · CNO V: Seguridad Informática
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
                            className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-lg shadow-lg shadow-violet-600/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
                        >
                            <FaShieldAlt />
                            Ver Proyectos
                        </a>
                        <a
                            href="#contacto"
                            className="px-8 py-4 bg-[#0a0f1a]/80 border border-violet-500/30 text-violet-400 font-semibold rounded-lg hover:bg-violet-500/10 hover:border-violet-400 transition-all duration-300 flex items-center gap-2"
                        >
                            <FaTerminal />
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
                            className="text-gray-500 hover:text-violet-400 text-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-violet-400 text-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="#contacto"
                            className="text-gray-500 hover:text-violet-400 text-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
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
                <div className="w-6 h-10 border-2 border-violet-500/30 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

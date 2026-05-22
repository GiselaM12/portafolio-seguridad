import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal, FaShieldAlt, FaLock } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const BinaryRain = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            {Array.from({ length: 15 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute text-cyan-500 font-mono text-[10px] sm:text-xs"
                    style={{
                        left: `${i * 7}%`,
                        animation: `matrix-fall ${8 + Math.random() * 10}s linear infinite`,
                        animationDelay: `${Math.random() * 5}s`
                      }}
                >
                    {Array.from({ length: 20 }).map((_, j) => (
                        <div key={j} style={{ opacity: 1 - (j * 0.05) }}>
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
    const fullText = 'Estudiante de Ingeniería en TI';
    const fullTextDesktop = 'Estudiante de Ingeniería en Tecnologías de la Información';
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const text = isMobile ? fullText : fullTextDesktop;
        let index = 0;
        setDisplayText('');

        const timer = setInterval(() => {
            if (index <= text.length) {
                setDisplayText(text.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 60);

        const cursorTimer = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => {
            clearInterval(timer);
            clearInterval(cursorTimer);
        };
    }, [isMobile]);

    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 pb-10 bg-[#030712]">
            <BinaryRain />
            <div className="absolute inset-0 scanlines pointer-events-none z-10" />

            {/* Glowing orbs - smaller on mobile */}
            <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-500/10 rounded-full blur-[80px] sm:blur-[120px] animate-pulse" />
            <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-violet-600/10 rounded-full blur-[100px] sm:blur-[150px]" />

            <div className="container mx-auto px-4 sm:px-6 z-20">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Terminal badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-500/5 border border-cyan-500/30 rounded mb-6 sm:mb-8 shadow-[0_0_15px_rgba(20,184,166,0.1)]"
                    >
                        <FaTerminal className="text-cyan-400 text-xs sm:text-sm animate-pulse" />
                        <span className="font-mono text-cyan-400 text-[10px] sm:text-xs tracking-widest uppercase">SECURITY_ANALYST</span>
                        <div className="w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 bg-cyan-400 rounded-full animate-ping" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-cyan-400/80 font-mono text-xs sm:text-sm mb-4 sm:mb-6 tracking-[0.2em] uppercase">
                            &lt; System Access Approved /&gt;
                        </h2>
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 tracking-tight">
                            <span className="text-gray-100">Soy </span>
                            <span className="text-gradient-cyber drop-shadow-[0_0_35px_rgba(99,102,241,0.15)]">Gisela Moreno</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mb-8 sm:mb-10 max-w-2xl mx-auto px-4"
                    >
                        {/* Terminal-like text display */}
                        <div className="w-full bg-[#070b14]/90 border border-cyan-500/20 rounded shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl text-left overflow-hidden">
                            {/* Terminal Header Bar */}
                            <div className="flex items-center justify-between px-4 py-2 bg-[#090e1a] border-b border-cyan-500/10">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                                    <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                                    <span className="w-2 h-2 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-[9px] text-gray-500 font-mono tracking-widest uppercase">gisela@secops:~</span>
                                <div className="w-8" />
                            </div>
                            {/* Terminal Body */}
                            <div className="p-4 sm:p-5">
                                <p className="text-xs sm:text-base md:text-lg text-gray-300 font-mono break-words leading-relaxed">
                                    <span className="text-cyan-400 font-semibold">gisela@secops:~$</span> {displayText}
                                    <span className={`inline-block w-1.5 h-3.5 bg-cyan-400 ml-1.5 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-gray-500 text-xs sm:text-sm max-w-2xl mx-auto mb-8 sm:mb-12 font-mono uppercase tracking-[0.15em] px-2"
                    >
                        <span className="text-cyan-500/60">//</span> Portafolio Digital · Computación Forense
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-16 px-4"
                    >
                        <a
                            href="#proyectos"
                            className="px-6 sm:px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-mono text-xs uppercase tracking-widest border border-cyan-400/30 hover:border-cyan-300/60 font-bold rounded shadow-[0_0_20px_rgba(20,184,166,0.25)] hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                        >
                            <FaShieldAlt className="text-sm" />
                            Ver Actividades
                        </a>
                        <a
                            href="#contacto"
                            className="px-6 sm:px-8 py-3.5 bg-transparent border border-cyan-500/30 hover:border-cyan-500/70 text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold rounded hover:bg-cyan-500/5 transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.05)] hover:shadow-[0_0_20px_rgba(20,184,166,0.15)] flex items-center justify-center gap-2"
                        >
                            <FaTerminal className="text-sm" />
                            Contactar
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6, duration: 0.8 }}
                        className="flex gap-6 sm:gap-8 justify-center items-center"
                    >
                        <a
                            href="https://github.com/GiselaM12"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-cyan-400 text-2xl sm:text-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-cyan-400 text-2xl sm:text-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="#contacto"
                            className="text-gray-500 hover:text-cyan-400 text-2xl sm:text-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                        >
                            <FaEnvelope />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator - hidden on small screens */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
            >
                <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-cyan-500/25 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-cyan-400 rounded-full mt-2 shadow-[0_0_6px_#22d3ee]"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

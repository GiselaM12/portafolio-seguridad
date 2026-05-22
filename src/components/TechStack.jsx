import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaServer, FaTerminal, FaLock, FaShieldAlt, FaPlay } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiVercel, SiNetlify } from 'react-icons/si';

const TechStack = () => {
    const [diagLogs, setDiagLogs] = useState([]);
    const [isChecking, setIsChecking] = useState(false);

    const runDiagnostics = () => {
        if (isChecking) return;
        setIsChecking(true);
        setDiagLogs([]);
        const logs = [
            '[INFO] Conectando a SECOPS_NODE_01...',
            '[INFO] Verificando túnel cifrado...',
            '[OK] Protocolo HTTPS establecido de forma segura.',
            '[OK] Certificado SSL verificado (AES_256_GCM).',
            '[OK] Políticas de seguridad HSTS validadas.',
            '[SUCCESS] Estado del sistema: 100% NOMINAL.'
        ];
        logs.forEach((log, index) => {
            setTimeout(() => {
                setDiagLogs(prev => [...prev, log]);
                if (index === logs.length - 1) {
                    setIsChecking(false);
                }
            }, (index + 1) * 600);
        });
    };

    const technologies = [
        { name: 'React', icon: <FaReact />, color: 'text-[#61DAFB]', shadow: 'hover:shadow-[0_0_20px_rgba(97,218,251,0.25)] hover:border-[#61DAFB]/40' },
        { name: 'Vite', icon: <SiVite />, color: 'text-[#646CFF]', shadow: 'hover:shadow-[0_0_20px_rgba(100,108,255,0.25)] hover:border-[#646CFF]/40' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-[#06B6D4]', shadow: 'hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:border-[#06B6D4]/40' },
        { name: 'JavaScript', icon: <FaJs />, color: 'text-[#F7DF1E]', shadow: 'hover:shadow-[0_0_20px_rgba(247,223,30,0.25)] hover:border-[#F7DF1E]/40' },
        { name: 'HTML5', icon: <FaHtml5 />, color: 'text-[#E34F26]', shadow: 'hover:shadow-[0_0_20px_rgba(227,79,38,0.25)] hover:border-[#E34F26]/40' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-[#1572B6]', shadow: 'hover:shadow-[0_0_20px_rgba(21,114,182,0.25)] hover:border-[#1572B6]/40' },
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
            <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />
            <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-500/5 rounded-full blur-[100px] sm:blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-violet-600/5 rounded-full blur-[100px] sm:blur-[150px]" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-16"
                >
                    {/* Terminal badge */}
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-500/5 border border-cyan-500/30 rounded mb-4 sm:mb-6 shadow-[0_0_15px_rgba(20,184,166,0.1)]">
                        <FaTerminal className="text-cyan-400 text-xs sm:text-sm animate-pulse" />
                        <span className="font-mono text-cyan-400 text-[10px] sm:text-xs tracking-widest uppercase">TECH_STACK</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        <span className="text-gradient-cyber drop-shadow-[0_0_35px_rgba(99,102,241,0.15)]">Información Técnica</span>
                    </h2>
                    <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-cyan-500 via-violet-500 to-purple-500 mx-auto mb-6 sm:mb-8" />
                    <p className="text-gray-500 text-xs sm:text-sm max-w-2xl mx-auto font-mono uppercase tracking-widest px-2">
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
                    <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-6 sm:mb-8 text-center font-mono uppercase tracking-widest">
                        &lt;Stack Tecnológico /&gt;
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 max-w-5xl mx-auto">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -4 }}
                                className={`bg-[#070b14]/90 border border-cyan-500/10 rounded p-3 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 transition-all duration-300 backdrop-blur-sm group ${tech.shadow}`}
                            >
                                <div className={`text-3xl sm:text-5xl transition-transform duration-300 group-hover:scale-105 ${tech.color}`}>
                                    {tech.icon}
                                </div>
                                <p className="text-gray-400 font-semibold text-[10px] sm:text-xs text-center font-mono tracking-wider">
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
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#070b14]/90 border border-cyan-500/10 rounded p-4 sm:p-6 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(20,184,166,0.15)] transition-all duration-300 backdrop-blur-sm corner-borders relative"
                        >
                            <div className="text-[10px] font-mono text-cyan-500/60 mb-2 sm:mb-3">
                                [{info.code}]
                            </div>
                            <div className="text-2xl sm:text-3xl text-cyan-400 mb-3 sm:mb-4">
                                {info.icon}
                            </div>
                            <h4 className="text-sm sm:text-base font-bold text-gray-200 mb-3 sm:mb-4 font-mono uppercase tracking-wider">
                                {info.title}
                            </h4>
                            <ul className="space-y-1.5 sm:space-y-2">
                                {info.items.map((item, i) => (
                                    <li key={i} className="text-gray-500 flex items-center gap-2 font-mono text-xs">
                                        <span className="text-cyan-400 font-bold">▸</span>
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
                    <div className="bg-[#070b14]/90 border border-cyan-500/20 rounded shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden backdrop-blur-xl">
                        {/* Terminal Header */}
                        <div className="bg-[#090e1a] px-4 py-2.5 border-b border-cyan-500/10 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500/80" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                                <div className="w-2 h-2 rounded-full bg-green-500/80" />
                            </div>
                            <span className="text-[10px] font-mono text-gray-500 tracking-wider">security.config</span>
                            <div className="w-8" />
                        </div>

                        <div className="p-6 sm:p-8 md:p-10">
                            <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-6 text-center font-mono flex items-center justify-center gap-2 sm:gap-3 uppercase tracking-wider">
                                <FaShieldAlt className="text-cyan-400 animate-pulse" />
                                Despliegue y Seguridad
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 mb-6">
                                <div>
                                    <h4 className="text-sm sm:text-base font-semibold text-cyan-400 mb-2 font-mono flex items-center gap-2 uppercase tracking-wider">
                                        <FaLock className="text-xs" /> Protocolo
                                    </h4>
                                    <p className="text-gray-500 text-xs leading-relaxed font-mono">
                                        <span className="text-cyan-500/60">$</span> Sitio con{' '}
                                        <span className="text-cyan-400 font-bold">HTTPS</span> y
                                        encriptación de datos en tránsito.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm sm:text-base font-semibold text-cyan-400 mb-2 font-mono flex items-center gap-2 uppercase tracking-wider">
                                        <FaShieldAlt className="text-xs" /> Certificado
                                    </h4>
                                    <p className="text-gray-500 text-xs leading-relaxed font-mono">
                                        <span className="text-cyan-500/60">$</span> SSL/TLS automático
                                        para conexiones seguras.
                                    </p>
                                </div>
                            </div>

                            {/* Interactive Diagnostics Terminal */}
                            <div className="border border-cyan-500/15 bg-[#030712] rounded p-4 mb-6 font-mono text-xs text-gray-400 relative">
                                <div className="absolute top-2 right-3 text-[10px] text-cyan-500/40 tracking-widest select-none">DIAGNOSTICS</div>
                                <div className="space-y-1.5 min-h-[100px] flex flex-col justify-start">
                                    {diagLogs.length === 0 ? (
                                        <span className="text-gray-600">// Presiona el botón para iniciar diagnóstico de seguridad...</span>
                                    ) : (
                                        diagLogs.map((log, i) => (
                                            <div key={i} className={
                                                log.startsWith('[OK]') ? 'text-cyan-400' :
                                                log.startsWith('[SUCCESS]') ? 'text-green-400 font-semibold' :
                                                'text-gray-400'
                                            }>
                                                {log}
                                            </div>
                                        ))
                                    )}
                                    {isChecking && (
                                        <div className="flex items-center gap-1.5 text-cyan-400 mt-1">
                                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                                            <span className="animate-pulse">Analizando...</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-cyan-500/5 pt-6">
                                <motion.button
                                    onClick={runDiagnostics}
                                    disabled={isChecking}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`px-4 py-2 border font-mono text-xs font-bold rounded flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                                        isChecking 
                                        ? 'bg-gray-800/40 border-gray-700 text-gray-600 cursor-not-allowed' 
                                        : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)]'
                                    }`}
                                >
                                    <FaPlay className="text-[10px]" />
                                    <span>RUN_SECURITY_CHECK</span>
                                </motion.button>
                                
                                <div className="flex items-center gap-6 text-gray-500">
                                    <SiVercel className="text-xl hover:text-cyan-400 transition-all duration-300 hover:scale-110 cursor-pointer" />
                                    <SiNetlify className="text-xl hover:text-cyan-400 transition-all duration-300 hover:scale-110 cursor-pointer" />
                                    <FaGithub className="text-xl hover:text-cyan-400 transition-all duration-300 hover:scale-110 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;

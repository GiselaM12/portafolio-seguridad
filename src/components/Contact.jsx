import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { FaEnvelope, FaUser, FaPaperPlane, FaCheckCircle, FaTerminal, FaExclamationTriangle, FaFingerprint, FaLock, FaServer, FaUserSecret } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [typingText, setTypingText] = useState('');

    const fullText = "> Iniciando canal seguro...";

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i <= fullText.length) {
                setTypingText(fullText.slice(0, i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }, []);

    // EMAILJS CONFIGURATION
    const SERVICE_ID = 'service_rvgwlp8';
    const TEMPLATE_ID = 'template_le5udpj';
    const PUBLIC_KEY = 'bKBUrJaMgGD-9ZX65';

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        try {
            const result = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: data.name,
                    from_email: data.email,
                    subject: data.subject,
                    message: data.message
                },
                PUBLIC_KEY
            );

            if (result.text === 'OK') {
                setSubmitStatus('success');
                reset();
                setTimeout(() => setSubmitStatus(null), 8000);
            }
        } catch (error) {
            console.error("EmailJS Error:", error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 8000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contacto" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-[#030712] relative overflow-hidden">
            {/* Scanlines overlay */}
            <div className="absolute inset-0 scanlines pointer-events-none opacity-50 z-10" />

            {/* Glowing orbs - smaller on mobile */}
            <div className="absolute top-10 left-5 w-32 sm:w-64 h-32 sm:h-64 bg-violet-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-5 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/5 rounded-full blur-2xl sm:blur-3xl" />

            <div className="container mx-auto relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12"
                >
                    {/* Forensic Header */}
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-violet-500/10 border border-violet-500/30 rounded-full mb-4 sm:mb-6">
                        <FaFingerprint className="text-violet-400 animate-pulse text-sm" />
                        <span className="font-mono text-violet-400 text-[10px] sm:text-sm tracking-wider">SECURE_CHANNEL</span>
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-violet-500 rounded-full animate-ping" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                        <span className="text-gray-100">Secure </span>
                        <span className="text-gradient">Communication</span>
                    </h2>

                    <p className="text-violet-500/80 font-mono text-xs sm:text-sm mb-2">
                        {typingText}<span className="animate-ping">_</span>
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Terminal glow effect - subtle on mobile */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/10 sm:from-violet-500/20 via-purple-500/10 sm:via-purple-500/20 to-violet-500/10 sm:to-violet-500/20 rounded-lg blur-lg sm:blur-xl opacity-50" />

                        <div className="relative bg-[#0a0f1a]/95 backdrop-blur-xl border border-violet-500/30 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.1)] sm:shadow-[0_0_50px_rgba(139,92,246,0.15)]">
                            {/* Terminal Header - simplified on mobile */}
                            <div className="bg-[#0d1321] px-3 sm:px-6 py-2 sm:py-3 border-b border-violet-500/20 flex items-center justify-between">
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-red-500" />
                                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-500" />
                                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="flex items-center gap-2 sm:gap-4 text-[8px] sm:text-xs font-mono text-violet-500/60">
                                    <span className="hidden sm:flex items-center gap-1">
                                        <FaLock className="text-[10px]" /> SSL
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaServer className="text-[8px] sm:text-[10px]" /> SECURE
                                    </span>
                                </div>
                            </div>

                            {/* Terminal Info Bar - hidden on small mobile */}
                            <div className="hidden sm:flex bg-violet-500/5 px-4 sm:px-6 py-2 border-b border-violet-500/10 items-center justify-between text-[10px] sm:text-xs font-mono">
                                <div className="flex items-center gap-2 sm:gap-4 text-violet-500/60">
                                    <span className="flex items-center gap-1">
                                        <FaUserSecret className="text-[10px]" /> Agente: GiselaM
                                    </span>
                                    <span className="hidden md:inline">|</span>
                                    <span className="hidden md:inline">Acceso: NIVEL-5</span>
                                </div>
                                <div className="text-violet-400/60 flex items-center">
                                    <span className="inline-block w-1.5 sm:w-2 h-1.5 sm:h-2 bg-violet-500 rounded-full mr-1.5 sm:mr-2 animate-pulse" />
                                    ACTIVO
                                </div>
                            </div>

                            <div className="p-4 sm:p-8 md:p-10">
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-6 sm:mb-8 p-3 sm:p-4 bg-green-500/10 border border-green-500/40 rounded font-mono text-green-400 flex items-start gap-2 sm:gap-3"
                                    >
                                        <FaCheckCircle className="mt-0.5 sm:mt-1 text-base sm:text-lg shrink-0" />
                                        <div>
                                            <p className="font-bold text-green-300 text-sm sm:text-base">[ TRANSMISIÓN EXITOSA ]</p>
                                            <p className="text-xs sm:text-sm opacity-80">Mensaje enviado correctamente.</p>
                                        </div>
                                    </motion.div>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-6 sm:mb-8 p-3 sm:p-4 bg-red-500/10 border border-red-500/40 rounded font-mono text-red-400 flex items-start gap-2 sm:gap-3"
                                    >
                                        <FaExclamationTriangle className="mt-0.5 sm:mt-1 text-base sm:text-lg shrink-0" />
                                        <div>
                                            <p className="font-bold text-red-300 text-sm sm:text-base">[ ERROR ]</p>
                                            <p className="text-xs sm:text-sm opacity-80">Reintente la conexión.</p>
                                        </div>
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                        {/* Nombre */}
                                        <div className="group">
                                            <label className="block text-violet-500/70 text-[10px] sm:text-xs font-mono mb-1.5 sm:mb-2 uppercase tracking-wider">
                                                <FaUser className="inline mr-1 sm:mr-2" />Nombre
                                            </label>
                                            <input
                                                type="text"
                                                {...register('name', { required: true, minLength: 3 })}
                                                className="w-full bg-[#020617] border border-violet-500/20 rounded px-3 sm:px-4 py-2.5 sm:py-3 text-violet-100 font-mono text-sm placeholder-violet-500/30 focus:outline-none focus:border-violet-400 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all"
                                                placeholder="Tu nombre..."
                                            />
                                            {errors.name && <p className="text-red-400 text-[10px] sm:text-xs mt-1 font-mono">! Campo requerido</p>}
                                        </div>

                                        {/* Email */}
                                        <div className="group">
                                            <label className="block text-violet-500/70 text-[10px] sm:text-xs font-mono mb-1.5 sm:mb-2 uppercase tracking-wider">
                                                <FaEnvelope className="inline mr-1 sm:mr-2" />Email
                                            </label>
                                            <input
                                                type="email"
                                                {...register('email', {
                                                    required: true,
                                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                                })}
                                                className="w-full bg-[#020617] border border-violet-500/20 rounded px-3 sm:px-4 py-2.5 sm:py-3 text-violet-100 font-mono text-sm placeholder-violet-500/30 focus:outline-none focus:border-violet-400 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all"
                                                placeholder="correo@ejemplo.com"
                                            />
                                            {errors.email && <p className="text-red-400 text-[10px] sm:text-xs mt-1 font-mono">! Email inválido</p>}
                                        </div>
                                    </div>

                                    {/* Asunto */}
                                    <div className="group">
                                        <label className="block text-violet-500/70 text-[10px] sm:text-xs font-mono mb-1.5 sm:mb-2 uppercase tracking-wider">
                                            <FaTerminal className="inline mr-1 sm:mr-2" />Asunto
                                        </label>
                                        <input
                                            type="text"
                                            {...register('subject', { required: true })}
                                            className="w-full bg-[#020617] border border-violet-500/20 rounded px-3 sm:px-4 py-2.5 sm:py-3 text-violet-100 font-mono text-sm placeholder-violet-500/30 focus:outline-none focus:border-violet-400 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all"
                                            placeholder="Asunto del mensaje..."
                                        />
                                        {errors.subject && <p className="text-red-400 text-[10px] sm:text-xs mt-1 font-mono">! Campo requerido</p>}
                                    </div>

                                    {/* Mensaje */}
                                    <div className="group">
                                        <label className="block text-violet-500/70 text-[10px] sm:text-xs font-mono mb-1.5 sm:mb-2 uppercase tracking-wider">
                                            <span className="text-purple-400">&gt;</span> Mensaje
                                        </label>
                                        <textarea
                                            {...register('message', { required: true, minLength: 10 })}
                                            rows="4"
                                            className="w-full bg-[#020617] border border-violet-500/20 rounded px-3 sm:px-4 py-2.5 sm:py-3 text-violet-100 font-mono text-sm placeholder-violet-500/30 focus:outline-none focus:border-violet-400 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all resize-none"
                                            placeholder="Escribe tu mensaje..."
                                        />
                                        {errors.message && <p className="text-red-400 text-[10px] sm:text-xs mt-1 font-mono">! Mínimo 10 caracteres</p>}
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        className={`w-full py-3 sm:py-4 rounded font-mono font-bold text-sm sm:text-lg flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 border-2 ${isSubmitting
                                            ? 'bg-gray-800/50 border-gray-700 text-gray-500 cursor-not-allowed'
                                            : 'bg-violet-500/10 border-violet-500/50 text-violet-400 hover:bg-violet-500/20 hover:border-violet-400 hover:text-violet-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                                <span className="animate-pulse text-xs sm:text-base">Enviando...</span>
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane />
                                                <span>ENVIAR MENSAJE</span>
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </div>

                            {/* Terminal Footer - simplified on mobile */}
                            <div className="bg-[#0d1321] px-3 sm:px-6 py-2 sm:py-3 border-t border-violet-500/20 flex justify-between items-center text-[8px] sm:text-[10px] text-violet-500/50 font-mono">
                                <div className="flex items-center gap-2 sm:gap-4">
                                    <span>HTTPS</span>
                                    <span className="hidden sm:inline">|</span>
                                    <span className="hidden sm:inline">AES-256</span>
                                </div>
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <span className="text-violet-400">⬤</span>
                                    <span>443</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

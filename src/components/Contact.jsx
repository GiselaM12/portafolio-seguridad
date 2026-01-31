import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState, useRef } from 'react';
import { FaEnvelope, FaUser, FaPaperPlane, FaCheckCircle, FaTerminal, FaShieldAlt, FaExclamationTriangle, FaCode } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const form = useRef();

    // EMAILJS CONFIGURATION
    const SERVICE_ID = 'service_z79j8ij'; // Reemplaza con tu Service ID real (ej. service_zvi...)
    const TEMPLATE_ID = 'template_le5udpj';
    const PUBLIC_KEY = 'oW7EVDlsttEgzi1tR';

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
            console.error("Error sending email:", error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 8000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contacto" className="min-h-screen py-20 px-4 md:px-6 bg-[#020617] relative overflow-hidden">
            {/* Background Binary Rain Effect (Static for now, could be animated) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none font-mono text-xs overflow-hidden select-none text-cyber-primary">
                {Array.from({ length: 100 }).map((_, i) => (
                    <div key={i} className="absolute" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: Math.random()
                    }}>
                        {Math.random() > 0.5 ? '1' : '0'}
                    </div>
                ))}
            </div>

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4 text-cyber-primary">
                        <FaTerminal />
                        <span className="font-mono text-sm tracking-widest">SECURE_CHANNEL_ESTABLISHED</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-white">Contact & </span>
                        <span className="text-cyber-primary">Uplink</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
                        // Envía un mensaje encriptado directamente a mi terminal.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-[#0f172a]/80 backdrop-blur-xl border border-cyber-primary/30 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.15)]"
                    >
                        {/* Terminal Header */}
                        <div className="bg-[#1e293b]/50 px-6 py-3 border-b border-cyber-primary/20 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="text-xs font-mono text-cyber-muted lowercase">
                                root@portfolio:~/send-message.sh
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="mb-8 p-4 bg-green-500/10 border border-green-500/30 rounded font-mono text-green-400 flex items-start gap-3"
                                >
                                    <FaCheckCircle className="mt-1" />
                                    <div>
                                        <p className="font-bold">TRANSMISSION_COMPLETE</p>
                                        <p className="text-sm opacity-80">El mensaje ha sido encriptado y enviado exitosamente.</p>
                                    </div>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded font-mono text-red-400 flex items-start gap-3"
                                >
                                    <FaExclamationTriangle className="mt-1" />
                                    <div>
                                        <p className="font-bold">CONNECTION_ERROR</p>
                                        <p className="text-sm opacity-80">Fallo en la transmisión. Verifique sus credenciales (Service ID) o intente más tarde.</p>
                                    </div>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Nombre */}
                                    <div className="group">
                                        <label className="block text-cyber-primary text-xs font-mono mb-2 group-focus-within:text-white transition-colors">
                                            &lt;input type="name" /&gt;
                                        </label>
                                        <div className="relative">
                                            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 group-focus-within:text-cyber-primary transition-colors" />
                                            <input
                                                type="text"
                                                {...register('name', { required: true, minLength: 3 })}
                                                className="w-full bg-[#020617] border border-gray-800 rounded px-12 py-3 text-white font-mono focus:outline-none focus:border-cyber-primary focus:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all"
                                                placeholder="Nombre de Usuario"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="group">
                                        <label className="block text-cyber-primary text-xs font-mono mb-2 group-focus-within:text-white transition-colors">
                                            &lt;input type="email" /&gt;
                                        </label>
                                        <div className="relative">
                                            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 group-focus-within:text-cyber-primary transition-colors" />
                                            <input
                                                type="email"
                                                {...register('email', {
                                                    required: true,
                                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                                })}
                                                className="w-full bg-[#020617] border border-gray-800 rounded px-12 py-3 text-white font-mono focus:outline-none focus:border-cyber-primary focus:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all"
                                                placeholder="correo@dominio.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Asunto */}
                                <div className="group">
                                    <label className="block text-cyber-primary text-xs font-mono mb-2 group-focus-within:text-white transition-colors">
                                        &lt;input type="subject" /&gt;
                                    </label>
                                    <div className="relative">
                                        <FaCode className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 group-focus-within:text-cyber-primary transition-colors" />
                                        <input
                                            type="text"
                                            {...register('subject', { required: true })}
                                            className="w-full bg-[#020617] border border-gray-800 rounded px-12 py-3 text-white font-mono focus:outline-none focus:border-cyber-primary focus:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all"
                                            placeholder="Asunto de la transmisión"
                                        />
                                    </div>
                                </div>

                                {/* Mensaje */}
                                <div className="group">
                                    <label className="block text-cyber-primary text-xs font-mono mb-2 group-focus-within:text-white transition-colors">
                                        &lt;textarea&gt;
                                    </label>
                                    <textarea
                                        {...register('message', { required: true, minLength: 10 })}
                                        rows="6"
                                        className="w-full bg-[#020617] border border-gray-800 rounded px-4 py-3 text-white font-mono focus:outline-none focus:border-cyber-primary focus:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all resize-none"
                                        placeholder="Ingrese el payload del mensaje..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className={`w-full py-4 rounded font-mono font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 border ${isSubmitting
                                            ? 'bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed'
                                            : 'bg-cyber-primary/10 border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                            Encrypting & Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            EXECUTE_TRANSMISSION
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>

                        {/* Terminal Footer */}
                        <div className="bg-[#020617] px-6 py-3 border-t border-cyber-primary/20 flex justify-between items-center text-[10px] text-gray-500 font-mono">
                            <div className="flex gap-4">
                                <span>STATUS: ONLINE</span>
                                <span>ENCRYPTION: AES-256</span>
                            </div>
                            <div>
                                PORT: 443
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

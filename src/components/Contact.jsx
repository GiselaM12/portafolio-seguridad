import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FaEnvelope, FaUser, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        // Simulación de envío (EmailJS se configurará después)
        try {
            // Aquí iría la integración con EmailJS
            // await emailjs.send('service_id', 'template_id', data, 'public_key');

            // Simulación de delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            setSubmitStatus('success');
            reset();

            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        } catch (error) {
            setSubmitStatus('error');
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contacto" className="min-h-screen py-20 px-6 bg-cyber-darker/50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">Contacto</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-cyber mx-auto mb-8"></div>
                    <p className="text-cyber-muted text-lg max-w-2xl mx-auto">
                        ¿Tienes alguna pregunta o comentario? Envíame un mensaje
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass-strong rounded-2xl p-8 md:p-12"
                    >
                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6 p-4 bg-cyber-primary/20 border border-cyber-primary rounded-lg flex items-center gap-3"
                            >
                                <FaCheckCircle className="text-cyber-primary text-2xl" />
                                <p className="text-cyber-primary font-semibold">
                                    ¡Mensaje enviado exitosamente! Recibirás una respuesta automática.
                                </p>
                            </motion.div>
                        )}

                        {submitStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6 p-4 bg-cyber-accent/20 border border-cyber-accent rounded-lg"
                            >
                                <p className="text-cyber-accent font-semibold">
                                    Hubo un error al enviar el mensaje. Por favor intenta de nuevo.
                                </p>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Nombre */}
                            <div>
                                <label className="block text-cyber-text font-semibold mb-2">
                                    Nombre Completo
                                </label>
                                <div className="relative">
                                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyber-muted" />
                                    <input
                                        type="text"
                                        {...register('name', {
                                            required: 'El nombre es requerido',
                                            minLength: { value: 3, message: 'Mínimo 3 caracteres' }
                                        })}
                                        className="w-full pl-12 pr-4 py-3 bg-cyber-dark/50 border border-cyber-surface rounded-lg text-cyber-text focus:outline-none focus:border-cyber-primary transition-colors"
                                        placeholder="Tu nombre completo"
                                    />
                                </div>
                                {errors.name && (
                                    <p className="text-cyber-accent text-sm mt-1">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-cyber-text font-semibold mb-2">
                                    Correo Electrónico
                                </label>
                                <div className="relative">
                                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyber-muted" />
                                    <input
                                        type="email"
                                        {...register('email', {
                                            required: 'El email es requerido',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Email inválido'
                                            }
                                        })}
                                        className="w-full pl-12 pr-4 py-3 bg-cyber-dark/50 border border-cyber-surface rounded-lg text-cyber-text focus:outline-none focus:border-cyber-primary transition-colors"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-cyber-accent text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Asunto */}
                            <div>
                                <label className="block text-cyber-text font-semibold mb-2">
                                    Asunto
                                </label>
                                <input
                                    type="text"
                                    {...register('subject', {
                                        required: 'El asunto es requerido',
                                        minLength: { value: 5, message: 'Mínimo 5 caracteres' }
                                    })}
                                    className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-surface rounded-lg text-cyber-text focus:outline-none focus:border-cyber-primary transition-colors"
                                    placeholder="Asunto del mensaje"
                                />
                                {errors.subject && (
                                    <p className="text-cyber-accent text-sm mt-1">{errors.subject.message}</p>
                                )}
                            </div>

                            {/* Mensaje */}
                            <div>
                                <label className="block text-cyber-text font-semibold mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    {...register('message', {
                                        required: 'El mensaje es requerido',
                                        minLength: { value: 10, message: 'Mínimo 10 caracteres' }
                                    })}
                                    rows="6"
                                    className="w-full px-4 py-3 bg-cyber-dark/50 border border-cyber-surface rounded-lg text-cyber-text focus:outline-none focus:border-cyber-primary transition-colors resize-none"
                                    placeholder="Escribe tu mensaje aquí..."
                                />
                                {errors.message && (
                                    <p className="text-cyber-accent text-sm mt-1">{errors.message.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${isSubmitting
                                        ? 'bg-cyber-muted cursor-not-allowed'
                                        : 'bg-gradient-cyber text-cyber-dark hover:shadow-lg hover:shadow-cyber-primary/50'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-cyber-dark border-t-transparent rounded-full animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        Enviar Mensaje
                                    </>
                                )}
                            </motion.button>
                        </form>

                        {/* Info adicional */}
                        <div className="mt-8 pt-8 border-t border-cyber-surface">
                            <p className="text-cyber-muted text-center">
                                <FaCheckCircle className="inline text-cyber-primary mr-2" />
                                Recibirás una respuesta automática confirmando la recepción de tu mensaje
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserSecret, FaPhoneAlt, FaBitcoin, FaSearchDollar, FaCheckCircle, FaTimesCircle, FaDesktop, FaGavel, FaFingerprint } from 'react-icons/fa';

const Act14SocialEngineering = () => {
    const [selectedQ, setSelectedQ] = useState(null);

    // Questions Data (With user's original answers and my corrections/explanations)
    const questions = [
        {
            id: 1,
            q: "¿Cuál fue el principal vector de ataque utilizado por Lam Malone?",
            original: "Una operación de ingeniería social multietapa, hicieron escala de permisos logrando obtener credenciales de las que solo a víctima tenía acceso.",
            correction: "Ataque Vishing (Voice Phishing) y suplantación de soporte técnico.",
            status: "partial",
            explanation: "Tú respuesta es correcta en que fue multietapa, pero técnicamente el vector de entrada se denomina 'Vishing' (Ingeniería Social por teléfono), haciéndose pasar por soporte técnico."
        },
        {
            id: 2,
            q: "¿Qué principio psicológico explotó para lograr transferencias millonarias?",
            original: "El principio psicológico fue a creación de un estado de urgencia y miedo, lograron hacer creer a la victima que sus cuentas habían sido vulneradas.",
            status: "correct"
        },
        {
            id: 3,
            q: "¿Qué tipo de ataque de ingeniería social se identifica en este caso?",
            original: "Multietapa.",
            correction: "Tech Support Scam y Vishing.",
            status: "partial",
            explanation: "Multietapa describe la complejidad, pero el tipo específico de fraude es 'Tech Support Scam' (fraude de soporte técnico) usando llamadas de voz (Vishing)."
        },
        {
            id: 4,
            q: "¿Qué debilidad de seguridad informática facilitó el fraude?",
            original: "No cubrir el rastro posible de la IP con VPN ya que al no hacerlo fue sencillo rastrear hasta donde había llegado el dinero aunque haya sido dividio.",
            correction: "El factor humano (miedo) y permitir pantalla compartida con AnyDesk para exponer claves privadas.",
            status: "incorrect",
            explanation: "¡Ojo aquí! Lo que contestaste fue lo que ayudó a 'atraparlos', no lo que facilitó el robo. Lo que facilitó el fraude fue la vulnerabilidad humana de la víctima y el haber permitido compartir pantalla, lo que dejó ver sus claves privadas."
        },
        {
            id: 5,
            q: "¿Cómo complementaban Chetal Veer y Serrano Jeandiel el ataque iniciado por Lam?",
            original: "Ellos eran el brazo técnico y operativo. Chetal Veer (Wiz) se encargaba de la suplantación inicial... Serrano Jeandiel (Box) intervenía después haciéndose pasar por soporte de Gemini...",
            status: "correct",
            explanation: "¡Respuesta excelente y muy detallada!"
        },
        {
            id: 6,
            q: "¿Cuál fue el resultado económico total del esquema fraudulento?",
            original: "Lograron sustraer 4,064 Bitcoins, que en el momento del robo equivalían a aproximadamente 230 millones de dólares.",
            status: "correct"
        },
        {
            id: 7,
            q: "¿Qué evento marcó el punto de quiebre del caso?",
            original: "El gasto de dinero irresponsable y sin medido.",
            status: "correct"
        },
        {
            id: 8,
            q: "¿Qué evidencia física encontraron las autoridades al detener a Chetal Veer?",
            original: "Bienes (autos y joyas).",
            status: "correct"
        },
        {
            id: 9,
            q: "¿Qué decisión tomó Chetal Veer frente al proceso judicial?",
            original: "Decidió cooperar con las autoridades y declararse culpable.",
            status: "correct"
        },
        {
            id: 10,
            q: "¿Qué consecuencias legales enfrenta el grupo por estos hechos?",
            original: "Enfrentan cargos por lavado de dinero y fraude.",
            status: "correct"
        },
        {
            id: 11,
            q: "¿Qué empresas fueron suplantadas durante el ataque?",
            original: "Google y la plataforma Gemini.",
            status: "correct"
        },
        {
            id: 12,
            q: "¿Qué herramienta de acceso remoto fue utilizada para comprometer a la víctima?",
            original: "Anydesk esto ayudo a poder visualizar lo que hacía la víctima.",
            status: "correct"
        },
        {
            id: 13,
            q: "¿Qué acción realizaron inmediatamente después del robo para ocultar los fondos?",
            original: "Dividieron el dinero por varias plataformas para a poder perder el rastro.",
            status: "correct",
            explanation: "Correcto, técnica conocida en ciberseguridad como 'Coin Mixing' y 'Chain Hopping'."
        },
        {
            id: 14,
            q: "¿Quién contribuyó al rastreo de las transacciones y exposición del caso?",
            original: "Zachxbt la plataforma donde se realizo el desvió de dinero.",
            correction: "ZachXBT es un investigador independiente (detective de blockchain), no una plataforma.",
            status: "incorrect",
            explanation: "¡Error crítico! ZachXBT no es una plataforma de dinero. Es el apodo de un famoso investigador independiente de blockchain que publica en Twitter/X. Él fue el 'héroe' que logró desenmascarar a los ladrones."
        },
        {
            id: 15,
            q: "¿Cuál fue el detallito que tuvo con Skylar Harrison?",
            original: "Un bolso caro de Hermes Store que ayudo a rastrear el flujo del dinero.",
            status: "correct"
        }
    ];

    const getStatusColor = (status) => {
        if (status === 'correct') return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30';
        if (status === 'partial') return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30';
        return 'text-red-500 bg-red-500/10 border-red-500/30';
    };

    return (
        <div className="w-full flex flex-col gap-12 font-sans relative">
            
            {/* Header / Case File Theme */}
            <div className="bg-[#111111] border border-red-900/50 rounded-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(220,38,38,0.15)] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-blend-overlay">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/20 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute -left-10 top-10 w-40 h-8 bg-yellow-500/80 -rotate-45 flex items-center justify-center border-y border-dashed border-black shadow-lg">
                    <span className="text-black font-bold font-mono tracking-widest text-xs">TOP SECRET</span>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between relative z-10 pl-8">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950 border border-red-900 text-red-400 font-mono text-xs mb-4">
                            <FaFingerprint /> EXPEDIENTE FBI - CASO CIBERNÉTICO
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2 uppercase tracking-wide">El Atraco de los $243M</h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl border-l-2 border-red-800 pl-4 py-1">
                            Análisis de una operación real de ingeniería social donde estafadores lograron robar 4,064 Bitcoins haciéndose pasar por soporte técnico de Google y Gemini.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 flex-shrink-0">
                        <div className="bg-black/50 border border-gray-800 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                            <FaBitcoin className="text-yellow-500 text-3xl mb-2" />
                            <span className="text-[10px] text-gray-500 font-mono uppercase">Monto Robado</span>
                            <span className="text-yellow-400 font-bold tracking-widest">4,064 BTC</span>
                        </div>
                        <div className="bg-black/50 border border-gray-800 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                            <FaPhoneAlt className="text-red-500 text-2xl mb-2 mt-1" />
                            <span className="text-[10px] text-gray-500 font-mono uppercase">Vector Primario</span>
                            <span className="text-red-400 font-bold tracking-widest mt-1">VISHING</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Kill Chain (Attack Flow) - Detailed Breakdown */}
            <div className="bg-[#0a0f1a] border border-gray-800 rounded-2xl p-6 md:p-10 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-200 font-mono mb-8 flex items-center gap-3 border-b border-gray-800 pb-4">
                    <FaDesktop className="text-blue-500" /> Anatomía del Ataque (Ingeniería Social Multietapa)
                </h3>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
                    
                    {/* Fase 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0a0f1a] bg-blue-500 text-black font-bold z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                            1
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#111827] border border-blue-500/30 p-5 rounded-xl shadow-md relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 blur-[30px] rounded-full pointer-events-none" />
                            <h4 className="font-bold text-blue-400 mb-2 font-mono relative z-10">Fase 1: Vishing y Spoofing (Google)</h4>
                            <p className="text-sm text-gray-300 leading-relaxed relative z-10">
                                El atacante apodado <strong>"Wiz" (Chetal Veer)</strong> inició la operación mediante una llamada telefónica (Vishing) falsificando el número de origen (Spoofing) para hacerse pasar por el área de soporte oficial de Google. Alertaron a la víctima sobre un falso inicio de sesión no autorizado, logrando obtener de forma verbal el acceso y control inicial a sus cuentas críticas (Google e iCloud).
                            </p>
                        </div>
                        <div className="hidden md:flex w-[calc(50%-2.5rem)] justify-center items-center px-8">
                            <img src="/portafolio-seguridad/parcial3/act14_images/phase1.png" alt="Spoofed Google Call" className="rounded-2xl opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.2)] object-cover w-full max-h-48" />
                        </div>
                    </div>

                    {/* Fase 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0a0f1a] bg-yellow-500 text-black font-bold z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                            2
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#111827] border border-yellow-500/30 p-5 rounded-xl shadow-md relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 blur-[30px] rounded-full pointer-events-none" />
                            <h4 className="font-bold text-yellow-400 mb-2 font-mono relative z-10">Fase 2: Tácticas de Miedo (Urgencia)</h4>
                            <p className="text-sm text-gray-300 leading-relaxed relative z-10">
                                Habiendo penetrado la primera capa, los estafadores explotaron el factor psicológico induciendo pánico extremo. Convencieron a la víctima de que el "hacker" estaba a punto de vaciar todos sus activos en la plataforma criptográfica Gemini, forzando un estado mental de <strong>urgencia</strong> en el que la víctima dejó de verificar la legitimidad de las indicaciones.
                            </p>
                        </div>
                        <div className="hidden md:flex w-[calc(50%-2.5rem)] justify-center items-center px-8">
                            <img src="/portafolio-seguridad/parcial3/act14_images/phase2.png" alt="Urgency Warning" className="rounded-2xl opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 border border-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.2)] object-cover w-full max-h-48" />
                        </div>
                    </div>

                    {/* Fase 3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0a0f1a] bg-orange-500 text-black font-bold z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                            3
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#111827] border border-orange-500/30 p-5 rounded-xl shadow-md relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 blur-[30px] rounded-full pointer-events-none" />
                            <h4 className="font-bold text-orange-400 mb-2 font-mono relative z-10">Fase 3: Tech Support Scam (Gemini)</h4>
                            <p className="text-sm text-gray-300 leading-relaxed relative z-10">
                                Entra en juego <strong>"Box" (Serrano Jeandiel)</strong>, un segundo actor que fingió ser un especialista en seguridad de la plataforma Gemini. Instruyó a la víctima para resetear el Doble Factor de Autenticación (2FA). Para "ayudarle" a asegurar sus 4,064 BTC, lo convenció de instalar <strong>AnyDesk</strong>, una herramienta legítima de acceso remoto.
                            </p>
                        </div>
                        <div className="hidden md:flex w-[calc(50%-2.5rem)] justify-center items-center px-8">
                            <img src="/portafolio-seguridad/parcial3/act14_images/phase3.png" alt="Anydesk screen share" className="rounded-2xl opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 border border-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.2)] object-cover w-full max-h-48" />
                        </div>
                    </div>

                    {/* Fase 4 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0a0f1a] bg-red-500 text-white font-bold z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                            4
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#111827] border border-red-500/30 p-5 rounded-xl shadow-md relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 blur-[30px] rounded-full pointer-events-none" />
                            <h4 className="font-bold text-red-400 mb-2 font-mono relative z-10">Fase 4: Screen-sharing & Exfiltración</h4>
                            <p className="text-sm text-gray-300 leading-relaxed relative z-10">
                                Con AnyDesk activo, los atacantes le pidieron a la víctima que abriera sus carteras para "transferir sus fondos a un entorno seguro". Al compartir la pantalla, los atacantes visualizaron las <strong>Claves Privadas</strong> en texto plano. En cuestión de segundos, tomaron control de las carteras, robaron $243 MDD y comenzaron un rápido proceso de lavado (Mixers y Chain Hopping) para perder el rastro.
                            </p>
                        </div>
                        <div className="hidden md:flex w-[calc(50%-2.5rem)] justify-center items-center px-8">
                            <img src="/portafolio-seguridad/parcial3/act14_images/phase4.png" alt="Bitcoin exfiltration" className="rounded-2xl opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.2)] object-cover w-full max-h-48" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Interactive Evaluation / Corrections */}
            <div className="mt-8 border-t border-gray-800 pt-10">
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-200 font-mono mb-2 flex items-center gap-3">
                            <FaSearchDollar className="text-emerald-500" /> Revisión del Cuestionario
                        </h3>
                        <p className="text-gray-400 text-sm">Corrección inteligente de tus respuestas. Las respuestas erróneas fueron tachadas y corregidas.</p>
                    </div>
                    <div className="text-right hidden sm:block">
                        <span className="text-sm font-bold text-emerald-500">12 Correctas</span>
                        <span className="text-gray-500 mx-2">|</span>
                        <span className="text-sm font-bold text-red-500">3 Errores</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {questions.map((q) => (
                        <div 
                            key={q.id}
                            onClick={() => setSelectedQ(q)}
                            className={`cursor-pointer border rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] ${getStatusColor(q.status)}`}
                        >
                            <div className="flex justify-between items-start mb-3">
                                <span className="font-mono font-bold text-lg opacity-80">Q{q.id}</span>
                                {q.status === 'correct' ? <FaCheckCircle className="text-xl" /> : <FaTimesCircle className="text-xl" />}
                            </div>
                            <h4 className="text-sm font-bold text-gray-100 mb-3 line-clamp-2">{q.q}</h4>
                            
                            {q.status === 'incorrect' || q.status === 'partial' ? (
                                <div>
                                    <p className="text-xs text-red-300/70 line-through mb-2 line-clamp-2">{q.original}</p>
                                    <p className="text-xs font-bold text-emerald-400 mt-2 line-clamp-2">Corr: {q.correction}</p>
                                </div>
                            ) : (
                                <p className="text-xs opacity-80 line-clamp-3">{q.original}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Detail View */}
            <AnimatePresence>
                {selectedQ && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedQ(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    >
                        <motion.div 
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className={`max-w-2xl w-full rounded-2xl border p-6 md:p-8 shadow-2xl bg-[#0a0f1a] ${getStatusColor(selectedQ.status)}`}
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <span className="font-mono text-xl font-bold">Pregunta {selectedQ.id}</span>
                                <button onClick={() => setSelectedQ(null)} className="text-gray-400 hover:text-white">Cerrar</button>
                            </div>
                            
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">{selectedQ.q}</h3>
                            
                            <div className="space-y-6">
                                <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                                    <span className="text-[10px] uppercase font-mono text-gray-500 mb-1 block">Tu Respuesta:</span>
                                    <p className={`text-sm ${selectedQ.status === 'correct' ? 'text-emerald-400' : 'text-red-400 line-through'}`}>
                                        {selectedQ.original}
                                    </p>
                                </div>

                                {(selectedQ.status === 'incorrect' || selectedQ.status === 'partial') && (
                                    <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                                        <span className="text-[10px] uppercase font-mono text-blue-400 mb-1 block">Corrección Oficial:</span>
                                        <p className="text-sm text-blue-100 font-bold">
                                            {selectedQ.correction}
                                        </p>
                                    </div>
                                )}

                                {selectedQ.explanation && (
                                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex items-start gap-3">
                                        <FaGavel className="text-gray-400 mt-1 flex-shrink-0" />
                                        <p className="text-sm text-gray-300 italic">
                                            {selectedQ.explanation}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Act14SocialEngineering;

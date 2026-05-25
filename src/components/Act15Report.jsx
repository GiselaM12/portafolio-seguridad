import React from 'react';
import { FaEnvelope, FaServer, FaShieldAlt, FaTerminal, FaFilePdf, FaCheckCircle, FaExclamationTriangle, FaRoute, FaUserSecret } from 'react-icons/fa';

const Act15Report = () => {
    return (
        <div className="w-full flex flex-col gap-12 font-sans relative">
            
            {/* HUD / Resumen Ejecutivo */}
            <div className="bg-[#050913]/90 border border-indigo-500/30 rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(99,102,241,0.15)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none" />
                <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between relative z-10">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs mb-4">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                            REPORTE DE PRÁCTICA — PHISHING EVASIVO
                        </div>
                        <h2 className="text-3xl font-bold text-gray-100 mb-2">Evasión de Filtros con SET & Relay SMTP</h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                            ¿Alguna vez te has preguntado cómo los ciberdelincuentes logran que sus correos falsos lleguen a tu bandeja principal de Gmail o Outlook sin caer en SPAM? En esta práctica de laboratorio demostramos cómo los atacantes utilizan servidores intermedios (Relays) para robar reputación y evadir los filtros de seguridad.
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-3 flex-shrink-0 min-w-[200px]">
                        <a 
                            href="/portafolio-seguridad/#/pdf/parcial3/act15-Equipo1.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-3 rounded-xl transition-all flex items-center justify-center gap-3 font-bold shadow-lg shadow-indigo-500/20"
                        >
                            <FaFilePdf className="text-xl" /> Ver PDF Original
                        </a>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-[#0a0f1a] border border-gray-800 p-2 rounded-lg flex flex-col items-center justify-center text-center">
                                <span className="text-[10px] text-gray-500 font-mono uppercase">MTA Local</span>
                                <span className="text-gray-300 font-bold text-xs">Postfix</span>
                            </div>
                            <div className="bg-[#0a0f1a] border border-gray-800 p-2 rounded-lg flex flex-col items-center justify-center text-center">
                                <span className="text-[10px] text-gray-500 font-mono uppercase">Relay Nube</span>
                                <span className="text-gray-300 font-bold text-xs">Brevo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Teoría y Concepto: Por qué necesitamos un Relay */}
            <div className="bg-[#0a0f1a] border-l-4 border-indigo-500 rounded-r-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-200 mb-4 flex items-center gap-3">
                    <FaExclamationTriangle className="text-yellow-500" /> El Problema: El Error 550 (Rechazo)
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Si un atacante (o un estudiante en Kali Linux) intenta enviar un correo electrónico malicioso directamente desde su computadora, los servidores de Google o Microsoft lo <strong>bloquearán inmediatamente</strong> (Error 550). ¿Por qué? Porque la dirección IP residencial no tiene reputación, ni firmas criptográficas de dominio (SPF, DKIM, DMARC).
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                    <strong>La Solución (Evasión):</strong> En lugar de enviar el correo directo a la víctima, el atacante envía el correo a un <em>Relay SMTP (Servidor Inteligente)</em>. Este servidor de terceros sí tiene buena reputación y certificados. El Relay firma el correo y lo entrega a la víctima. El filtro de Spam de Google confía en el Relay y deja pasar el mensaje a la bandeja de entrada.
                </p>
            </div>

            {/* Diagrama de Flujo / Anatomía de la Evasión (Con Imágenes) */}
            <div>
                <h3 className="text-2xl font-bold text-gray-200 font-mono mb-8 flex items-center gap-3 border-b border-gray-800 pb-4">
                    <FaRoute className="text-indigo-500" /> Anatomía de la Evasión: Paso a Paso
                </h3>
                
                <div className="grid grid-cols-1 gap-12">
                    
                    {/* Paso 1: SET */}
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-[#111827] p-6 rounded-2xl border border-gray-800 shadow-xl">
                        <div className="w-full md:w-1/3">
                            <img src="/portafolio-seguridad/parcial3/act15_images/act15_1.png" alt="Generación SET" className="w-full rounded-xl border border-gray-700 shadow-lg object-cover aspect-video" />
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="inline-block px-3 py-1 bg-red-500/10 text-red-400 font-bold font-mono text-xs rounded-full mb-3 border border-red-500/30">PASO 1: CREACIÓN DEL PAYLOAD</div>
                            <h4 className="text-xl font-bold text-gray-200 mb-3">Social-Engineer Toolkit (SET)</h4>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                Iniciamos la herramienta <code>setoolkit</code> en Kali Linux utilizando el módulo <em>Mass Mailer Attack</em>. Se diseña el correo trampa (Phishing) y se le indica a la herramienta que utilice nuestro servidor local (localhost:25) en lugar de intentar conectarse directo a internet.
                            </p>
                        </div>
                    </div>

                    {/* Paso 2: Postfix */}
                    <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-[#111827] p-6 rounded-2xl border border-gray-800 shadow-xl">
                        <div className="w-full md:w-1/3">
                            <img src="/portafolio-seguridad/parcial3/act15_images/act15_2.png" alt="Postfix Routing" className="w-full rounded-xl border border-gray-700 shadow-lg object-cover aspect-video" />
                        </div>
                        <div className="w-full md:w-2/3 text-left md:text-right">
                            <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 font-bold font-mono text-xs rounded-full mb-3 border border-blue-500/30">PASO 2: ENRUTAMIENTO LOCAL</div>
                            <h4 className="text-xl font-bold text-gray-200 mb-3">Postfix (Mail Transfer Agent)</h4>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                Postfix recibe el correo malicioso que generó SET. Gracias a la configuración en el archivo <code>main.cf</code>, Postfix sabe que no debe enviarlo directamente a la víctima. En su lugar, empaqueta el correo, lo cifra y lo canaliza utilizando autenticación SASL hacia nuestro Relay contratado.
                            </p>
                            <div className="bg-[#050913] rounded-lg p-3 border border-gray-800 inline-block text-left">
                                <span className="text-[10px] text-indigo-400 font-mono">/etc/postfix/main.cf</span>
                                <pre className="text-xs font-mono text-gray-300 mt-1">relayhost = [smtp-relay.brevo.com]:587</pre>
                            </div>
                        </div>
                    </div>

                    {/* Paso 3: Brevo Relay */}
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-[#111827] p-6 rounded-2xl border border-gray-800 shadow-xl">
                        <div className="w-full md:w-1/3">
                            <img src="/portafolio-seguridad/parcial3/act15_images/act15_3.png" alt="Brevo Relay" className="w-full rounded-xl border border-gray-700 shadow-lg object-cover aspect-video" />
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="inline-block px-3 py-1 bg-green-500/10 text-green-400 font-bold font-mono text-xs rounded-full mb-3 border border-green-500/30">PASO 3: LAVADO DE REPUTACIÓN</div>
                            <h4 className="text-xl font-bold text-gray-200 mb-3">Relay SMTP (Plataforma Brevo)</h4>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                El paquete llega a los servidores de la nube de Brevo. Aquí ocurre la magia: Brevo toma nuestro correo malicioso y lo "firma" con sus claves criptográficas válidas. Como Brevo es una plataforma de marketing legítima, los servidores del mundo confían ciegamente en ella. 
                                <br/><br/>
                                <em>Técnica de Evasión:</em> Se usa el <strong>Display Name Spoofing</strong> (Falsificar Nombre a Mostrar), enviando el correo desde una dirección legítima pero haciendo que la víctima lea "Soporte Institucional" en el remitente.
                            </p>
                        </div>
                    </div>

                    {/* Paso 4: Inbox */}
                    <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-[#111827] p-6 rounded-2xl border border-gray-800 shadow-xl">
                        <div className="w-full md:w-1/3">
                            <img src="/portafolio-seguridad/parcial3/act15_images/act15_4.png" alt="Inbox Evasion" className="w-full rounded-xl border border-gray-700 shadow-lg object-cover aspect-video" />
                        </div>
                        <div className="w-full md:w-2/3 text-left md:text-right">
                            <div className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-400 font-bold font-mono text-xs rounded-full mb-3 border border-yellow-500/30">PASO 4: ENTREGA EXITOSA</div>
                            <h4 className="text-xl font-bold text-gray-200 mb-3">Evadiendo la Bandeja de SPAM</h4>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                El servidor de la víctima (Gmail/Outlook) recibe el correo, inspecciona las firmas y determina que proviene de un servidor seguro (Brevo). El correo trampa aterriza cómodamente en la <strong>Bandeja de Entrada Principal</strong> de la víctima en lugar de irse a Spam.
                            </p>
                            <div className="bg-black/80 rounded-xl p-4 border border-gray-800 font-mono text-[10px] sm:text-xs text-gray-400 leading-relaxed inline-block text-left shadow-inner">
                                <div className="text-emerald-500 mb-2">// Log de la Inyección Exitosa (Kali)</div>
                                <div>to=&lt;<span className="text-blue-400">correo_victima@gmail.com</span>&gt;,</div>
                                <div>relay=<span className="text-yellow-400">smtp-relay.brevo.com</span>[...]:587,</div>
                                <div className="text-emerald-400 font-bold">status=sent (250 2.0.0 OK: queued...)</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-5 flex items-center gap-4">
                <FaCheckCircle className="text-emerald-500 text-3xl shrink-0" />
                <p className="text-sm text-emerald-100/70 m-0">
                    <strong>Reflexión Final:</strong> Este ejercicio de Red Teaming nos enseña que las defensas tecnológicas perimetrales son insuficientes por sí solas. La concientización del usuario es la única barrera real cuando los atacantes logran evadir los filtros automáticos aprovechando la infraestructura legítima.
                </p>
            </div>

        </div>
    );
};

export default Act15Report;

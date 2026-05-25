import React from 'react';
import { FaEnvelope, FaServer, FaShieldAlt, FaTerminal, FaFilePdf, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

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
                            Documentación técnica sobre la configuración de una arquitectura de evasión. Se utilizó un MTA local (Postfix) retransmitiendo hacia un Relay autenticado (Brevo) para dotar de reputación criptográfica (SPF/DKIM) a correos generados con Social-Engineer Toolkit (SET), logrando evadir los filtros perimetrales y ejecutar Display Name Spoofing.
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
                                <span className="text-[10px] text-gray-500 font-mono uppercase">MTA</span>
                                <span className="text-gray-300 font-bold text-xs">Postfix</span>
                            </div>
                            <div className="bg-[#0a0f1a] border border-gray-800 p-2 rounded-lg flex flex-col items-center justify-center text-center">
                                <span className="text-[10px] text-gray-500 font-mono uppercase">Relay</span>
                                <span className="text-gray-300 font-bold text-xs">Brevo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Metodología Bento Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Fase 1: Brevo */}
                <div className="bg-[#0a0f1a] border border-gray-800 hover:border-indigo-500/30 transition-colors rounded-2xl p-6 shadow-lg flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                            <FaServer className="text-xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-200">Fase 1: Relay SMTP (Brevo)</h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-6 flex-1">
                        Para dotar al correo de la reputación necesaria que le permitiera sortear los filtros perimetrales, se configuró un Smart Host utilizando la plataforma Brevo. Se validó un dominio legítimo para cumplir las políticas de identidad del remitente.
                    </p>
                    <div className="bg-black/50 rounded-xl p-4 border border-gray-800">
                        <ul className="space-y-2 text-xs font-mono text-gray-300">
                            <li><span className="text-indigo-400">Servidor:</span> smtp-relay.brevo.com</li>
                            <li><span className="text-indigo-400">Puerto:</span> 587 (TLS)</li>
                            <li><span className="text-indigo-400">Autenticación:</span> SASL Habilitado</li>
                        </ul>
                    </div>
                </div>

                {/* Fase 2: Postfix */}
                <div className="bg-[#0a0f1a] border border-gray-800 hover:border-indigo-500/30 transition-colors rounded-2xl p-6 shadow-lg flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                            <FaTerminal className="text-xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-200">Fase 2: Enrutamiento Local</h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-6 flex-1">
                        Se configuró Postfix en Kali Linux como MTA local. Se compilaron las credenciales en formato <code>.cdb</code> y se modificó <code>main.cf</code> para forzar la retransmisión por el Relay.
                    </p>
                    <div className="bg-[#050913] rounded-xl p-4 border border-gray-800 overflow-x-auto">
                        <pre className="text-xs font-mono text-gray-300 leading-relaxed">
<span className="text-indigo-400">relayhost</span> = [smtp-relay.brevo.com]:587<br/>
<span className="text-indigo-400">smtp_sasl_auth_enable</span> = yes<br/>
<span className="text-indigo-400">smtp_sasl_password_maps</span> = cdb:/etc/postfix/sasl_passwd<br/>
<span className="text-indigo-400">smtp_tls_security_level</span> = encrypt
                        </pre>
                    </div>
                </div>

                {/* Fase 3: SET */}
                <div className="bg-[#0a0f1a] border border-gray-800 hover:border-indigo-500/30 transition-colors rounded-2xl p-6 shadow-lg flex flex-col lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
                            <FaEnvelope className="text-xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-200">Fase 3: Campaña SET & Spoofing</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm text-gray-400 mb-4">
                                Utilizando <strong>Social-Engineer Toolkit (SET)</strong>, se configuró un ataque de <em>Mass Mailer</em>. La clave del éxito radicó en el enrutamiento: se forzó a SET a usar el <code>localhost:25</code> como servidor SMTP, dejando que Postfix se encargara de la encriptación y entrega a Brevo.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                    <FaExclamationTriangle className="text-yellow-500 mt-1 shrink-0" />
                                    <p className="text-xs text-gray-300">Al intentar usar un dominio no verificado en el "FROM", Brevo rechazaba el paquete (Error 550).</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <FaShieldAlt className="text-emerald-500 mt-1 shrink-0" />
                                    <p className="text-xs text-gray-300">Se mitigó aplicando <strong>Display Name Spoofing</strong>: El correo real verificado se mantuvo en la cabecera, pero el nombre mostrado a la víctima se falsificó (Ej: "Soporte Institucional").</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-black/80 rounded-xl p-4 border border-gray-800 font-mono text-[10px] sm:text-xs text-gray-400 leading-relaxed overflow-x-auto">
                            <div className="text-emerald-500 mb-2">// Registro de Transacción Exitosa (journalctl)</div>
                            <div>kali postfix/smtp[106693]: 7D159C00E5:</div>
                            <div className="pl-4">to=&lt;<span className="text-blue-400">correo_victima@gmail.com</span>&gt;,</div>
                            <div className="pl-4">relay=<span className="text-yellow-400">smtp-relay.brevo.com</span>[1.179.119.1]:587,</div>
                            <div className="pl-4">delay=1.4, tls=encrypt, dsn=2.0.0,</div>
                            <div className="pl-4 text-emerald-400 font-bold">status=sent (250 2.0.0 OK: queued as ...)</div>
                        </div>
                    </div>
                </div>

            </div>
            
            <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-5 flex items-center gap-4">
                <FaCheckCircle className="text-emerald-500 text-3xl shrink-0" />
                <p className="text-sm text-emerald-100/70 m-0">
                    <strong>Conclusión:</strong> El ejercicio demostró cómo los atacantes externalizan la reputación criptográfica (SPF/DKIM) para evadir las defensas perimetrales, haciendo indispensable la auditoría manual de cabeceras por parte del usuario final.
                </p>
            </div>

        </div>
    );
};

export default Act15Report;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaShieldAlt, FaServer, FaBug, FaNetworkWired, FaKey, FaSkullCrossbones, FaSearch, FaExclamationTriangle, FaChevronRight, FaTimes } from 'react-icons/fa';
import Act12Simulator from './Act12Simulator';

const Act12Report = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const stages = [
        {
            id: 'recon',
            icon: <FaSearch />,
            title: '1. Reconocimiento',
            color: 'text-cyan-400',
            borderColor: 'border-cyan-500/30',
            bgColor: 'bg-cyan-500/10',
            desc: 'Identificación pasiva/activa del objetivo y superficies de ataque (netdiscover, nmap).',
            details: [
                'Se ejecutó `netdiscover` para identificar hosts en 192.168.56.0/24.',
                'El objetivo fue identificado en 192.168.56.103.',
                'Escaneo agresivo con `nmap` reveló los puertos 22 (SSH) y 80 (HTTP).'
            ],
            images: [
                { src: '/portafolio-seguridad/parcial2/act11_images/page_5_img_1.png', caption: 'netdiscover identificando al objetivo' },
                { src: '/portafolio-seguridad/parcial2/act11_images/page_5_img_2.png', caption: 'nmap - escaneo agresivo' }
            ]
        },
        {
            id: 'enum',
            icon: <FaNetworkWired />,
            title: '2. Enumeración',
            color: 'text-blue-400',
            borderColor: 'border-blue-500/30',
            bgColor: 'bg-blue-500/10',
            desc: 'Descubrimiento de servicios, directorios y vectores de ataque web (gobuster, inspección).',
            details: [
                '`gobuster` encontró los directorios /config.php, /welcome.php, /register.php, y /login.php.',
                'Inspección web en /welcome.php reveló una vulnerabilidad crítica: **Tabnabbing**.',
                'Los enlaces enviados por el usuario se renderizan con `target="_blank"` sin los atributos de seguridad `rel="noopener noreferrer"`.'
            ],
            images: [
                { src: '/portafolio-seguridad/parcial2/act11_images/page_7_img_1.png', caption: 'gobuster - fuzzing de directorios' },
                { src: '/portafolio-seguridad/parcial2/act11_images/page_8_img_1.png', caption: 'Vulnerabilidad Tabnabbing descubierta en /welcome.php' }
            ]
        },
        {
            id: 'exploit',
            icon: <FaBug />,
            title: '3. Explotación Inicial',
            color: 'text-orange-400',
            borderColor: 'border-orange-500/30',
            bgColor: 'bg-orange-500/10',
            desc: 'Ejecución de vectores para comprometer la autenticación mediante phishing (Tabnabbing).',
            details: [
                'Se creó una réplica de login maliciosa (fake_login.html).',
                'Al hacer clic en el enlace inyectado, la pestaña original fue secuestrada y redirigida (Reverse Tabnabbing).',
                'Se capturaron las credenciales de `daniel` en texto plano mediante un listener de Netcat.',
                'Con las credenciales obtenidas (`daniel: C@ughtm3napping123`), se estableció una sesión SSH inicial.'
            ],
            images: [
                { src: '/portafolio-seguridad/parcial2/act11_images/page_9_img_1.png', caption: 'Preparación del script malicioso (fake login)' },
                { src: '/portafolio-seguridad/parcial2/act11_images/page_10_img_2.png', caption: 'Captura de credenciales enviadas por método POST' },
                { src: '/portafolio-seguridad/parcial2/act11_images/page_11_img_1.png', caption: 'Acceso exitoso como el usuario daniel por SSH' }
            ]
        },
        {
            id: 'privesc',
            icon: <FaSkullCrossbones />,
            title: '4. Post-Explotación & PrivEsc',
            color: 'text-red-500',
            borderColor: 'border-red-500/30',
            bgColor: 'bg-red-500/10',
            desc: 'Movimiento lateral y escalada a root abusando de cron jobs y sudoers.',
            details: [
                'En el home de daniel, se descubrió `query.py` con permisos `777`.',
                'Este script es ejecutado periódicamente por el usuario `adrian` vía cron.',
                'Se inyectó una **Reverse Shell** de Python dentro del script, consiguiendo una terminal como `adrian`.',
                'Se verificó que `adrian` puede ejecutar `/usr/bin/vim` como root sin contraseña.',
                'Se abusó de `vim` ejecutando `:!/bin/sh` según documenta GTFOBins, obteniendo así una shell 100% root.'
            ],
            images: [
                { src: '/portafolio-seguridad/parcial2/act11_images/page_13_img_1.png', caption: 'Verificación de permisos inseguros (777) en query.py' },
                { src: '/portafolio-seguridad/parcial2/act11_images/page_14_img_1.png', caption: 'Shell reversa obtenida como usuario adrian' },
                { src: '/portafolio-seguridad/parcial2/act11_images/page_15_img_1.png', caption: 'sudo -l muestra permisos sobre VIM. Explotación final a root.' }
            ]
        }
    ];

    return (
        <div className="w-full flex flex-col gap-12 font-sans relative">
            
            {/* HUD / Resumen Ejecutivo */}
            <div className="bg-[#050913]/90 border border-emerald-500/30 rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
                <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between relative z-10">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-4">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            RED TEAM REPORT — NAPPING 101
                        </div>
                        <h2 className="text-3xl font-bold text-gray-100 mb-2">Pentesting de Napping</h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                            Evaluación tipo Caja Gris (Grey-box testing) documentando un compromiso total del sistema.
                            Se explotó una falla lógica de "Tabnabbing" para obtener acceso inicial, seguida por un movimiento lateral mediante un cron job vulnerable, culminando en la obtención de acceso root explotando permisos mal configurados de <code>sudo</code> en el binario <code>vim</code>.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 flex-shrink-0">
                        <div className="bg-[#0a0f1a] border border-red-500/30 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                            <FaExclamationTriangle className="text-red-500 text-2xl mb-2" />
                            <span className="text-[10px] text-gray-500 font-mono uppercase">Riesgo Global</span>
                            <span className="text-red-500 font-bold tracking-widest">CRÍTICO</span>
                        </div>
                        <div className="bg-[#0a0f1a] border border-emerald-500/30 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                            <FaTerminal className="text-emerald-500 text-2xl mb-2" />
                            <span className="text-[10px] text-gray-500 font-mono uppercase">Acceso Final</span>
                            <span className="text-emerald-400 font-bold tracking-widest">root (UID 0)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline Sections */}
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 hidden md:block" />
                
                <div className="space-y-16 relative">
                    {stages.map((stage, idx) => (
                        <div key={stage.id} className={`flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} relative`}>
                            {/* Connector Node */}
                            <div className={`hidden md:flex absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full ${stage.bgColor} ${stage.borderColor} border-2 items-center justify-center ${stage.color} text-xl shadow-[0_0_15px_currentColor] z-10 bg-[#030712]`}>
                                {stage.icon}
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 md:w-1/2 md:px-12 pt-2">
                                <div className={`border ${stage.borderColor} bg-[#0a0f1a]/60 backdrop-blur p-6 rounded-xl relative overflow-hidden group hover:border-opacity-100 transition-colors`}>
                                    <div className={`absolute top-0 left-0 w-1 h-full ${stage.bgColor.replace('/10', '')}`} />
                                    
                                    <h3 className={`text-xl font-bold font-mono mb-3 ${stage.color} flex items-center gap-3`}>
                                        <span className="md:hidden">{stage.icon}</span>
                                        {stage.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed font-semibold">
                                        {stage.desc}
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        {stage.details.map((detail, i) => (
                                            <li key={i} className="text-gray-500 text-xs flex items-start gap-2">
                                                <FaChevronRight className={`mt-0.5 text-[8px] flex-shrink-0 ${stage.color}`} />
                                                <span dangerouslySetInnerHTML={{__html: detail.replace(/`([^`]+)`/g, '<code class="text-gray-300 bg-gray-900 px-1 rounded">$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong class="text-gray-200">$1</strong>')}} />
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    {/* Mini Image Gallery */}
                                    <div className="grid grid-cols-2 gap-3 mt-4">
                                        {stage.images.map((img, i) => (
                                            <div 
                                                key={i} 
                                                className="group/img cursor-pointer relative rounded-lg overflow-hidden border border-gray-800"
                                                onClick={() => setSelectedImage(img)}
                                            >
                                                <img src={img.src} alt={img.caption} className="w-full h-24 object-cover object-top opacity-70 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-500" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-2">
                                                    <span className="text-[9px] text-white font-mono truncate">{img.caption}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Empty space for alternating layout */}
                            <div className="hidden md:block flex-1" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Matriz de Impacto y Recomendaciones */}
            <div className="grid md:grid-cols-2 gap-8 mt-4">
                <div className="bg-[#0a0f1a] border border-gray-800 rounded-xl p-6">
                    <h3 className="text-gray-300 font-bold mb-4 font-mono flex items-center gap-2">
                        <FaShieldAlt className="text-blue-500" /> Matriz de Impacto CIA
                    </h3>
                    <div className="space-y-4">
                        <div className="bg-[#030712] border border-gray-800/50 rounded-lg p-3">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-semibold text-gray-400">Confidencialidad</span>
                                <span className="text-xs font-mono font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded">CRÍTICO</span>
                            </div>
                            <div className="w-full h-1 bg-gray-900 rounded-full mt-2"><div className="w-full h-full bg-red-500 rounded-full" /></div>
                        </div>
                        <div className="bg-[#030712] border border-gray-800/50 rounded-lg p-3">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-semibold text-gray-400">Integridad</span>
                                <span className="text-xs font-mono font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded">CRÍTICO</span>
                            </div>
                            <div className="w-full h-1 bg-gray-900 rounded-full mt-2"><div className="w-full h-full bg-red-500 rounded-full" /></div>
                        </div>
                        <div className="bg-[#030712] border border-gray-800/50 rounded-lg p-3">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-semibold text-gray-400">Disponibilidad</span>
                                <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded">ALTO</span>
                            </div>
                            <div className="w-full h-1 bg-gray-900 rounded-full mt-2"><div className="w-[80%] h-full bg-orange-400 rounded-full" /></div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#0a0f1a] border border-gray-800 rounded-xl p-6">
                    <h3 className="text-gray-300 font-bold mb-4 font-mono flex items-center gap-2">
                        <FaKey className="text-emerald-500" /> Remediaciones Técnicas
                    </h3>
                    <ul className="space-y-3 font-mono text-xs">
                        <li className="flex gap-3 text-gray-400">
                            <span className="text-emerald-500">01.</span>
                            Implementar <code>rel="noopener noreferrer"</code> en enlaces para mitigar Tabnabbing.
                        </li>
                        <li className="flex gap-3 text-gray-400">
                            <span className="text-emerald-500">02.</span>
                            Restringir los permisos del script <code>query.py</code> a 700 para evitar inyecciones.
                        </li>
                        <li className="flex gap-3 text-gray-400">
                            <span className="text-emerald-500">03.</span>
                            Eliminar la política NOPASSWD de <code>sudo</code> asociada al binario <code>/usr/bin/vim</code>.
                        </li>
                        <li className="flex gap-3 text-gray-400">
                            <span className="text-emerald-500">04.</span>
                            Aplicar siempre el Principio de Privilegio Mínimo (PoLP) y Autenticación Multifactor (MFA).
                        </li>
                    </ul>
                </div>
            </div>

            {/* Interactive Simulator Enclosure */}
            <div className="mt-8">
                <Act12Simulator />
            </div>

            {/* Image Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                    >
                        <button 
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <FaTimes className="text-3xl" />
                        </button>
                        <div 
                            className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
                            onClick={e => e.stopPropagation()}
                        >
                            <img 
                                src={selectedImage.src} 
                                alt={selectedImage.caption} 
                                className="max-h-[85vh] object-contain rounded-lg shadow-2xl border border-gray-700" 
                            />
                            <p className="text-center text-gray-300 font-mono mt-4 bg-black/50 px-4 py-2 rounded-full border border-gray-800">
                                {selectedImage.caption}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Act12Report;

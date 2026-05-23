import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShieldAlt, FaServer, FaUsers, FaLock, FaExclamationTriangle, FaFilePdf, FaSearch, FaNetworkWired, FaBook, FaCheckCircle, FaLaptop } from 'react-icons/fa';

const PR03Dashboard = () => {
    const [activeTab, setActiveTab] = useState('riesgos');
    const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

    return (
        <div className="flex flex-col gap-8">
            
            {/* Header Block Profesional (Estilo Actividad 18) */}
            <div className="bg-[#050914] border border-emerald-500/30 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                    <div className="lg:col-span-8 space-y-4">
                        <div className="flex gap-4">
                            <span className="px-4 py-1.5 text-xs font-mono font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded">
                                INST: UPSLP
                            </span>
                            <span className="px-4 py-1.5 text-xs font-mono font-bold text-rose-300 bg-rose-500/10 border border-rose-500/30 rounded">
                                MATERIA: CNO V
                            </span>
                            <span className="px-4 py-1.5 text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded">
                                PR03: SGSI ISO 27001
                            </span>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl font-mono font-black text-white tracking-tight uppercase shadow-emerald-500/20 drop-shadow-lg">
                            Diseño e Implementación SGSI
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl">
                            Implementación integral de un Sistema de Gestión de Seguridad de la Información (SGSI) bajo la norma ISO/IEC 27001:2022 para la empresa Inspección Certificada SL. Incluye evaluación de 12 riesgos críticos, 40 activos tecnológicos y 10 políticas de seguridad operativas.
                        </p>

                        <div className="border-t border-gray-800 pt-6 mt-8">
                            <h3 className="text-sm font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-3 mb-4">
                                <FaShieldAlt className="text-lg" /> MIEMBROS DEL EQUIPO 1
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                {[
                                    { name: "Aguilar Espinoza Juan Diego", id: "173877", role: "CISO / Evaluador de Riesgos" },
                                    { name: "Jasso Dávila Pedro Damian", id: "176658", role: "Arquitecto de Seguridad" },
                                    { name: "Moreno Solís Gisela Geraldine", id: "176522", role: "Líder de Cumplimiento" },
                                    { name: "Palomo Cerda Jose Armando", id: "175932", role: "Ingeniero de Controles" },
                                    { name: "Zarate Dominguez David", id: "175842", role: "Auditor Interno" },
                                    { name: "Zorrilla Rivera Eduardo", id: "175877", role: "Especialista en BCP" }
                                ].map((member, idx) => (
                                    <div key={idx} className="bg-black/40 border border-emerald-900/40 rounded-xl p-3 flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300 shadow-sm">
                                        <div className="font-mono text-xs text-white font-bold tracking-tight truncate">
                                            {member.name}
                                        </div>
                                        <div className="flex justify-between items-center mt-2 text-[10px] font-mono">
                                            <span className="text-gray-500">{member.id}</span>
                                            <span className="text-emerald-300 font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                                                {member.role}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 bg-[#0a0f1c]/80 border border-emerald-500/20 p-5 rounded-2xl flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 text-emerald-400 mb-3">
                                <FaFilePdf className="text-2xl" />
                                <span className="font-mono text-sm font-bold uppercase tracking-wider">EXPEDIENTE OFICIAL</span>
                            </div>
                            <h4 className="text-white font-mono text-base md:text-lg font-bold">PR03-Equipo1.pdf</h4>
                            <p className="text-gray-400 text-xs md:text-sm font-mono mt-2 leading-relaxed">
                                Documento completo (170 págs) con el inventario de activos, evaluación de riesgos, SoA y políticas de seguridad operacionales.
                            </p>
                        </div>
                        <a
                            href={`${baseUrl}PR03.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 flex items-center justify-center gap-3 w-full py-4 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:text-white font-mono text-sm font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                        >
                            <FaSearch className="text-sm" />
                            <span>VISUALIZAR EXPEDIENTE</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Dashboard interactivo ISO 27001 */}
            <div className="bg-[#03060f]/90 border border-emerald-500/20 rounded-3xl overflow-hidden shadow-2xl">
                {/* Tabs de Navegación */}
                <div className="flex flex-wrap border-b border-gray-800 bg-[#060a16]">
                    <button 
                        onClick={() => setActiveTab('riesgos')}
                        className={`flex items-center gap-2 px-6 py-4 font-mono text-sm font-bold transition-all ${activeTab === 'riesgos' ? 'text-emerald-400 border-b-2 border-emerald-500 bg-emerald-500/5' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
                    >
                        <FaExclamationTriangle /> MAPA DE RIESGOS
                    </button>
                    <button 
                        onClick={() => setActiveTab('activos')}
                        className={`flex items-center gap-2 px-6 py-4 font-mono text-sm font-bold transition-all ${activeTab === 'activos' ? 'text-emerald-400 border-b-2 border-emerald-500 bg-emerald-500/5' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
                    >
                        <FaServer /> INVENTARIO DE ACTIVOS
                    </button>
                    <button 
                        onClick={() => setActiveTab('politicas')}
                        className={`flex items-center gap-2 px-6 py-4 font-mono text-sm font-bold transition-all ${activeTab === 'politicas' ? 'text-emerald-400 border-b-2 border-emerald-500 bg-emerald-500/5' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
                    >
                        <FaBook /> POLÍTICAS Y CONTROLES
                    </button>
                </div>

                <div className="p-6 md:p-8 min-h-[500px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'riesgos' && (
                            <motion.div 
                                key="riesgos"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex flex-col gap-8"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div className="bg-[#0a0c16] border border-gray-800 rounded-2xl p-6">
                                        <h5 className="text-white font-mono font-bold mb-6 flex items-center gap-2 border-b border-gray-800 pb-3">
                                            <FaExclamationTriangle className="text-rose-500" /> MATRIZ DE CALOR (RISK HEATMAP)
                                        </h5>
                                        <div className="aspect-video bg-[#05060a] border border-gray-800 rounded-xl p-4 flex flex-col">
                                            <div className="flex text-[10px] text-gray-500 font-mono mb-2 pl-6">
                                                <div className="flex-1 text-center">Impacto 1</div>
                                                <div className="flex-1 text-center">2</div>
                                                <div className="flex-1 text-center">3</div>
                                                <div className="flex-1 text-center">4</div>
                                                <div className="flex-1 text-center">5</div>
                                            </div>
                                            <div className="flex-1 flex flex-col gap-1">
                                                {[5, 4, 3, 2, 1].map((prob, i) => (
                                                    <div key={i} className="flex-1 flex items-stretch gap-1">
                                                        <div className="w-6 flex items-center justify-center text-[10px] text-gray-500 font-mono">{prob}</div>
                                                        {[1, 2, 3, 4, 5].map((imp, j) => {
                                                            const val = prob * imp;
                                                            let bgClass = "bg-green-500/20 border-green-500/30";
                                                            let riskId = null;
                                                            
                                                            if (val >= 20) bgClass = "bg-rose-600/40 border-rose-500/50";
                                                            else if (val >= 12) bgClass = "bg-orange-500/40 border-orange-500/50";
                                                            else if (val >= 8) bgClass = "bg-amber-500/30 border-amber-500/40";
                                                            else if (val >= 4) bgClass = "bg-yellow-500/20 border-yellow-500/30";

                                                            if (prob === 5 && imp === 5) riskId = "RGS-01";
                                                            if (prob === 4 && imp === 5) riskId = "RGS-04";
                                                            if (prob === 4 && imp === 4) riskId = "RGS-02";
                                                            if (prob === 5 && imp === 3) riskId = "RGS-03";
                                                            if (prob === 3 && imp === 4) riskId = "RGS-05, RGS-07";

                                                            return (
                                                                <div key={j} className={`flex-1 border rounded flex items-center justify-center ${bgClass} relative group cursor-crosshair transition-colors hover:brightness-125`}>
                                                                    {riskId && (
                                                                        <span className="text-[9px] font-bold font-mono text-white/90 drop-shadow-md text-center px-1">
                                                                            {riskId}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="text-center text-[10px] text-gray-500 font-mono mt-2">Probabilidad (Y) vs Impacto (X)</div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-[#0a0c16] border border-gray-800 rounded-2xl p-6 flex flex-col">
                                        <h5 className="text-white font-mono font-bold mb-6 flex items-center gap-2 border-b border-gray-800 pb-3">
                                            <FaLock className="text-emerald-500" /> RIESGOS PRIORITARIOS (TOP 3)
                                        </h5>
                                        <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                                            <div className="bg-black/50 border border-rose-900/50 rounded-xl p-4 relative overflow-hidden">
                                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-600"></div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h6 className="text-rose-400 font-bold text-sm">RGS-01: Acceso no autorizado (VPN/AD)</h6>
                                                    <span className="bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">25 (EXTREMO)</span>
                                                </div>
                                                <p className="text-xs text-gray-400 mb-3">Atacante que explota credenciales comprometidas para acceder a los sistemas de ISL sin autorización.</p>
                                                <div className="bg-rose-950/30 text-rose-300 text-[10px] p-2 rounded border border-rose-900/30 font-mono">
                                                    <strong>Tratamiento:</strong> Implementar Autenticación Multifactor (MFA) obligatoria (YubiKey 5C) para todos los accesos.
                                                </div>
                                            </div>
                                            
                                            <div className="bg-black/50 border border-rose-900/50 rounded-xl p-4 relative overflow-hidden">
                                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-600"></div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h6 className="text-rose-400 font-bold text-sm">RGS-04: Ataque de Ransomware</h6>
                                                    <span className="bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">20 (EXTREMO)</span>
                                                </div>
                                                <p className="text-xs text-gray-400 mb-3">Cifrado de todos los datos operativos, parálisis del negocio y extorsión por ausencia de segmentación de red.</p>
                                                <div className="bg-rose-950/30 text-rose-300 text-[10px] p-2 rounded border border-rose-900/30 font-mono">
                                                    <strong>Tratamiento:</strong> Regla 3-2-1 de respaldos (local/AWS/offline), segmentación de red VLAN y software EDR activo.
                                                </div>
                                            </div>

                                            <div className="bg-black/50 border border-orange-900/50 rounded-xl p-4 relative overflow-hidden">
                                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h6 className="text-orange-400 font-bold text-sm">RGS-02: Robo/extravío de Tablets</h6>
                                                    <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">16 (MUY ALTO)</span>
                                                </div>
                                                <p className="text-xs text-gray-400 mb-3">Pérdida de dispositivos móviles en campo exponiendo planos técnicos e información del cliente.</p>
                                                <div className="bg-orange-950/30 text-orange-300 text-[10px] p-2 rounded border border-orange-900/30 font-mono">
                                                    <strong>Tratamiento:</strong> Configurar MDM con borrado remoto y cifrado de disco completo activo en todos los equipos.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'activos' && (
                            <motion.div 
                                key="activos"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-[#0a0c16] border border-gray-800 rounded-2xl p-6">
                                        <h5 className="text-white font-mono font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-3">
                                            <FaServer className="text-cyan-500" /> ACTIVOS INTERNOS CRÍTICOS
                                        </h5>
                                        <ul className="space-y-3">
                                            {[
                                                { id: "ACT-INT-001", name: "BD de Clientes SQL Server", owner: "Dir. General", level: "ALTO" },
                                                { id: "ACT-INT-003", name: "Servidor Dell PowerEdge T550", owner: "TI", level: "ALTO" },
                                                { id: "ACT-INT-005", name: "Tablets Samsung Galaxy en Campo", owner: "Operaciones", level: "ALTO" },
                                                { id: "ACT-INT-007", name: "Credenciales Active Directory", owner: "TI", level: "ALTO" },
                                                { id: "ACT-INT-014", name: "Expedientes de Personal (Cifrado)", owner: "Dir. General", level: "MEDIO" }
                                            ].map(asset => (
                                                <li key={asset.id} className="bg-black/40 border border-gray-800 rounded p-3 flex justify-between items-center hover:border-cyan-500/30 transition-colors">
                                                    <div>
                                                        <span className="text-cyan-400 font-mono text-[10px]">{asset.id}</span>
                                                        <p className="text-sm text-gray-200">{asset.name}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="block text-[10px] text-gray-500">Resp: {asset.owner}</span>
                                                        <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 px-1.5 rounded">{asset.level}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-[#0a0c16] border border-gray-800 rounded-2xl p-6">
                                        <h5 className="text-white font-mono font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-3">
                                            <FaNetworkWired className="text-amber-500" /> ACTIVOS EXTERNOS Y NUBE
                                        </h5>
                                        <ul className="space-y-3">
                                            {[
                                                { id: "ACT-EXT-001", name: "Instancia AWS EC2 (Portal)", owner: "AWS", level: "ALTO" },
                                                { id: "ACT-EXT-005", name: "Microsoft 365 Business Premium", owner: "Microsoft", level: "ALTO" },
                                                { id: "ACT-EXT-007", name: "Red VPN Acceso Remoto IPsec", owner: "TI", level: "ALTO" },
                                                { id: "ACT-EXT-010", name: "Repositorio GitHub Plan Pro", owner: "GitHub", level: "MEDIO" },
                                                { id: "ACT-EXT-013", name: "Pasarela de Pagos Stripe", owner: "Stripe", level: "ALTO" }
                                            ].map(asset => (
                                                <li key={asset.id} className="bg-black/40 border border-gray-800 rounded p-3 flex justify-between items-center hover:border-amber-500/30 transition-colors">
                                                    <div>
                                                        <span className="text-amber-400 font-mono text-[10px]">{asset.id}</span>
                                                        <p className="text-sm text-gray-200">{asset.name}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="block text-[10px] text-gray-500">Resp: {asset.owner}</span>
                                                        <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 px-1.5 rounded">{asset.level}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'politicas' && (
                            <motion.div 
                                key="politicas"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <div className="bg-[#0a0c16] border border-gray-800 rounded-2xl p-6">
                                    <h5 className="text-white font-mono font-bold mb-6 flex items-center gap-2 border-b border-gray-800 pb-3">
                                        <FaCheckCircle className="text-indigo-500" /> IMPLEMENTACIÓN DE CONTROLES (SOA)
                                    </h5>
                                    
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-sm text-gray-300">
                                            <thead className="bg-[#05060a] text-xs uppercase font-mono text-indigo-400">
                                                <tr>
                                                    <th className="px-4 py-3 border-b border-gray-800 rounded-tl-lg">Política SGSI</th>
                                                    <th className="px-4 py-3 border-b border-gray-800">Descripción / Control</th>
                                                    <th className="px-4 py-3 border-b border-gray-800 text-center">Resp. Principal</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-800">
                                                <tr className="hover:bg-white/5 transition-colors">
                                                    <td className="px-4 py-4 font-bold text-indigo-300">POL-01: Gestión de Accesos</td>
                                                    <td className="px-4 py-4">MFA obligatorio, revisión trimestral de Active Directory y VPN.</td>
                                                    <td className="px-4 py-4 text-center font-mono text-xs">TI</td>
                                                </tr>
                                                <tr className="hover:bg-white/5 transition-colors">
                                                    <td className="px-4 py-4 font-bold text-indigo-300">POL-03: Seg. Infraestructura</td>
                                                    <td className="px-4 py-4">Parcheo semanal dominical, escaneos de vulnerabilidades OpenVAS.</td>
                                                    <td className="px-4 py-4 text-center font-mono text-xs">TI</td>
                                                </tr>
                                                <tr className="hover:bg-white/5 transition-colors">
                                                    <td className="px-4 py-4 font-bold text-indigo-300">POL-05: Dispositivos Móviles</td>
                                                    <td className="px-4 py-4">Agente MDM activo en campo, cifrado BitLocker, sin almacenamiento local.</td>
                                                    <td className="px-4 py-4 text-center font-mono text-xs">Operaciones</td>
                                                </tr>
                                                <tr className="hover:bg-white/5 transition-colors">
                                                    <td className="px-4 py-4 font-bold text-indigo-300">POL-07: Incidentes</td>
                                                    <td className="px-4 py-4">Detección y reporte en &lt; 2 hrs. Contención y erradicación forense.</td>
                                                    <td className="px-4 py-4 text-center font-mono text-xs">TI / Operaciones</td>
                                                </tr>
                                                <tr className="hover:bg-white/5 transition-colors">
                                                    <td className="px-4 py-4 font-bold text-indigo-300">POL-08: Continuidad (BCP)</td>
                                                    <td className="px-4 py-4">Regla 3-2-1 de respaldos diarios/semanales. RTO de 4 horas para AWS.</td>
                                                    <td className="px-4 py-4 text-center font-mono text-xs">Dirección / TI</td>
                                                </tr>
                                                <tr className="hover:bg-white/5 transition-colors">
                                                    <td className="px-4 py-4 font-bold text-indigo-300">POL-10: Concientización</td>
                                                    <td className="px-4 py-4">Simulacros de phishing trimestrales (tasa &lt; 5%). Capacitación anual.</td>
                                                    <td className="px-4 py-4 text-center font-mono text-xs">Operaciones / TI</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default PR03Dashboard;

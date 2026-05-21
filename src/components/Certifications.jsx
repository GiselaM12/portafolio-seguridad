import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FaShieldAlt, 
    FaNetworkWired, 
    FaLaptopCode, 
    FaTerminal, 
    FaFilePdf, 
    FaExternalLinkAlt, 
    FaCertificate, 
    FaUserShield,
    FaWifi
} from 'react-icons/fa';

const Certifications = () => {
    const [activeTab, setActiveTab] = useState(0);

    const certificationsData = [
        {
            title: "Introducción a la Ciberseguridad",
            issuer: "Cisco Networking Academy / Skills for All",
            code: "CS-INTRO",
            date: "2025",
            themeColor: "from-emerald-500 to-teal-600",
            glowColor: "rgba(16, 185, 129, 0.25)",
            badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
            icon: <FaShieldAlt />,
            badgeText: "SEC-INTRO",
            pdfPath: "./certificaciones/intro_cybersecurity.pdf",
            verifyUrl: "https://www.credly.com/organizations/cisco/badges",
            learnings: "Este curso fundamental marcó mi inicio formal en la seguridad informática. Profundicé en los conceptos clave que rigen la protección de la información, analizando en detalle la tríada de seguridad CID: Confidencialidad, Integridad y Disponibilidad. Estudié la anatomía de los ataques informáticos contemporáneos, comprendiendo el funcionamiento de diversos tipos de malware (virus, gusanos, troyanos y el devastador impacto del ransomware) y desglosando las técnicas de ingeniería social como el phishing.",
            challenges: "El reto más grande en esta etapa fue comprender que el factor humano suele ser el eslabón más débil en la cadena de seguridad, lo que me obligó a adoptar una mentalidad analítica y defensiva para identificar vulnerabilidades no técnicas.",
            application: "En el ámbito práctico, este curso me capacitó para diseñar directrices de seguridad sólidas para redes domésticas y personales, formulando políticas de contraseñas robustas y concientizando a mi entorno directo sobre las mejores prácticas de higiene digital.",
            comment: "En lo personal, este curso fue sumamente revelador. Consolidó mi deseo de especializarme en ciberseguridad, sentando las bases teóricas indispensables para abordar las certificaciones más complejas del trayecto formativo."
        },
        {
            title: "Dispositivos de Red y Configuración Inicial",
            issuer: "Cisco Networking Academy / Skills for All",
            code: "NET-CONFIG",
            date: "2025",
            themeColor: "from-purple-500 to-indigo-600",
            glowColor: "rgba(139, 92, 246, 0.25)",
            badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
            icon: <FaTerminal />,
            badgeText: "NET-DEV",
            pdfPath: "./certificaciones/networking_devices.pdf",
            verifyUrl: "https://www.credly.com/organizations/cisco/badges",
            learnings: "Este módulo práctico me permitió dar el salto del conocimiento teórico de redes a la interacción real y configuración de equipos de comunicación Cisco. Estudié routers, switches, puntos de acceso inalámbricos (WAPs) y dispositivos de seguridad perimetral. Aprendí a acceder al sistema operativo Cisco IOS mediante conexiones de consola y red cifrada (SSH), y dominé la interfaz de línea de comandos (CLI) para realizar configuraciones iniciales de seguridad.",
            challenges: "El reto más significativo fue familiarizarme con la sintaxis de comandos de Cisco y comprender cómo la configuración de interfaces de red y el enrutamiento estático afectan directamente el flujo de tráfico de datos de forma bidireccional.",
            application: "Apliqué estos conceptos configurando switches y routers en entornos virtuales de Packet Tracer, asignando nombres de host, contraseñas cifradas para el modo EXEC privilegiado, banners de advertencia y protegiendo accesos VTY.",
            comment: "Esta experiencia fue sumamente enriquecedora, ya que me otorgó habilidades técnicas tangibles. Configurar mis primeros dispositivos de red me dio la satisfacción de saber que puedo administrar y asegurar la puerta de entrada a la infraestructura digital."
        },
        {
            title: "Seguridad en Terminales",
            issuer: "Cisco Networking Academy / Skills for All",
            code: "END-SEC",
            date: "2025",
            themeColor: "from-rose-500 to-red-600",
            glowColor: "rgba(244, 63, 94, 0.25)",
            badgeColor: "text-rose-400 border-rose-500/30 bg-rose-500/10",
            icon: <FaLaptopCode />,
            badgeText: "END-SEC",
            pdfPath: "./certificaciones/endpoint_security.pdf",
            verifyUrl: "https://www.credly.com/organizations/cisco/badges",
            learnings: "Esta certificación se centró en la protección de los dispositivos finales (endpoints), como computadoras, portátiles y servidores, los cuales representan el principal objetivo de los atacantes cibernéticos. Aprendí el valor de la defensa en profundidad, explorando cómo asegurar los sistemas operativos Windows, Linux y macOS. Estudié la implementación de firewalls personales, sistemas de prevención de intrusos (HIDS), cifrado de disco completo y políticas de grupo (GPOs).",
            challenges: "El mayor reto consistió en asimilar la cantidad de vectores de ataque que afectan a un endpoint y cómo equilibrar de manera óptima las severas restricciones de seguridad con la usabilidad necesaria para los usuarios finales de la organización.",
            application: "Realicé laboratorios enfocados en el endurecimiento (hardening) de sistemas operativos, la auditoría de políticas de seguridad locales, análisis de vulnerabilidades del sistema y la configuración segura de servicios de red en servidores Linux.",
            comment: "En lo personal, esta formación transformó por completo mi forma de interactuar con mis propios dispositivos. Me hizo comprender que un endpoint comprometido es la puerta de entrada a toda una red corporativa, impulsándome a aplicar el principio de menor privilegio."
        },
        {
            title: "Administración de Amenazas Cibernéticas",
            issuer: "Cisco Networking Academy / Skills for All",
            code: "THREAT-MGMT",
            date: "2025",
            themeColor: "from-amber-500 to-orange-600",
            glowColor: "rgba(245, 158, 11, 0.25)",
            badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
            icon: <FaUserShield />,
            badgeText: "THR-MGMT",
            pdfPath: "./certificaciones/cyber_threat_mgmt.pdf",
            verifyUrl: "https://www.credly.com/organizations/cisco/badges",
            learnings: "Este curso me preparó para enfrentar el panorama táctico de la ciberdefensa moderna, dotándome de habilidades para la detección, análisis y mitigación de amenazas cibernéticas en entornos organizacionales. Aprendí a utilizar marcos de trabajo profesionales como el NIST y la taxonomía de ataques cibernéticos para comprender las fases de una intrusión (Cyber Kill Chain). Estudié el funcionamiento de los SOC, sistemas SIEM e inteligencia de amenazas.",
            challenges: "El reto más complejo fue aprender a correlacionar alertas y logs de seguridad procedentes de múltiples fuentes (como firewalls, routers e IDS) para identificar patrones de ataque sutiles que de otro modo pasarían desapercibidos en la red.",
            application: "Analicé tráfico de red sospechoso utilizando herramientas como Wireshark, interpretando capturas de paquetes para descifrar ataques de denegación de servicio (DoS) y escaneos de puertos, formulando planes de respuesta a incidentes.",
            comment: "Esta certificación me brindó una visión estratégica espectacular. Me enseñó que la seguridad no es estática, sino una disciplina activa de monitoreo e investigación, inspirándome a desarrollar la mentalidad analítica necesaria en un SOC."
        },
        {
            title: "Carrera de Analista Junior en Ciberseguridad",
            issuer: "Cisco Networking Academy / Skills for All",
            code: "JR-ANALYST",
            date: "2025",
            themeColor: "from-violet-500 to-fuchsia-600",
            glowColor: "rgba(168, 85, 247, 0.25)",
            badgeColor: "text-violet-400 border-violet-500/30 bg-violet-500/10",
            icon: <FaCertificate />,
            badgeText: "JR-ANALYST",
            pdfPath: "./certificaciones/jr_analyst.pdf",
            verifyUrl: "https://www.credly.com/organizations/cisco/badges",
            learnings: "Esta trayectoria profesional de Cisco es la culminación integradora de los conocimientos del trayecto formativo. El programa me capacitó en las responsabilidades clave de un Analista de Ciberseguridad Junior dentro de un SOC. Aprendí a monitorear redes corporativas, clasificar la gravedad de las alertas de seguridad, realizar análisis iniciales de malware, aplicar metodologías forenses digitales básicas y a cumplir con los estándares ISO 27001.",
            challenges: "El reto primordial fue consolidar todas las disciplinas previas (redes, sistemas operativos, criptografía y análisis de amenazas) y aplicarlas bajo la presión simulada de un escenario de brecha de seguridad real, tomando decisiones rápidas de contención.",
            application: "Realicé prácticas de investigación forense digital, análisis de bitácoras de cortafuegos y sistemas de detección de intrusos (IDS), y elaboré informes técnicos de incidentes estructurados bajo estándares regulatorios y normativos de la industria.",
            comment: "Este recorrido formativo fue sumamente motivador, ya que me permitió proyectar mis competencias directo al mercado laboral. Me dio una comprensión clara de la ética profesional del analista y la importancia de la respuesta a incidentes."
        },
        {
            title: "Defensa de Redes",
            issuer: "Cisco Networking Academy / Skills for All",
            code: "NET-DEFENSE",
            date: "2025",
            themeColor: "from-cyan-500 to-blue-600",
            glowColor: "rgba(6, 182, 212, 0.25)",
            badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
            icon: <FaWifi />,
            badgeText: "NET-DEF",
            pdfPath: "./certificaciones/network_defense.pdf",
            verifyUrl: "https://www.credly.com/organizations/cisco/badges",
            learnings: "Este curso me brindó las herramientas y metodologías necesarias para defender activamente una infraestructura de red frente a ataques cibernéticos sofisticados. Estudié en profundidad el diseño de arquitecturas de red seguras, aprendiendo a implementar ACLs (Listas de Control de Acceso), firewalls de próxima generación (NGFW), sistemas de detección y prevención de intrusos basados en red (NIDS/NIPS) y técnicas de segmentación mediante VLANs.",
            challenges: "El mayor desafío fue aprender a diseñar topologías de red que incorporen capas de seguridad redundantes sin comprometer el rendimiento ni la disponibilidad de los servicios críticos de la organización, equilibrando la seguridad con la operatividad.",
            application: "Configuré reglas de firewall en entornos simulados de Packet Tracer y GNS3, implementé listas de acceso extendidas para filtrar tráfico malicioso por protocolo, puerto y dirección IP, y diseñé zonas desmilitarizadas (DMZ) para aislar los servicios públicos de la red interna.",
            comment: "Esta certificación solidificó mi comprensión de la seguridad perimetral y de red. Me enseñó que proteger una red no solo implica reaccionar ante los ataques, sino anticiparse a ellos mediante una arquitectura bien planificada, reforzando mi visión proactiva de la ciberseguridad."
        }
    ];

    const currentCert = certificationsData[activeTab];

    return (
        <section id="certificaciones" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 relative bg-[#030712] overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 scanlines pointer-events-none opacity-40" />
            <div className="absolute top-20 right-10 w-72 sm:w-[600px] h-72 sm:h-[600px] bg-violet-600/5 rounded-full blur-[130px] sm:blur-[200px]" />
            <div className="absolute bottom-20 left-10 w-72 sm:w-[600px] h-72 sm:h-[600px] bg-purple-600/5 rounded-full blur-[130px] sm:blur-[200px]" />

            <div className="container mx-auto relative z-10 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-violet-500/10 border border-violet-500/30 rounded-full mb-4 sm:mb-6">
                        <FaTerminal className="text-violet-400 text-xs sm:text-sm" />
                        <span className="font-mono text-violet-400 text-[10px] sm:text-xs tracking-wider">ACADEMIC_CREDENTIALS</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-mono">
                        <span className="text-gradient">Certificaciones Oficiales</span>
                    </h2>
                    <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full mb-4" />
                    <p className="text-gray-500 text-xs sm:text-sm max-w-2xl mx-auto font-mono px-2">
                        // Evidencia formal y reflexión académica de competencias adquiridas (Cisco NetAcad / Skills for All)
                    </p>
                </motion.div>

                {/* Dashboard Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left: Tab Selector */}
                    <div className="lg:col-span-4 flex flex-col gap-2 order-2 lg:order-1">
                        <div className="bg-[#0a0f1a]/80 border border-violet-500/20 rounded-lg p-3 backdrop-blur-sm">
                            <div className="text-[10px] font-mono text-violet-500/60 mb-2 px-2 flex items-center justify-between">
                                <span>[SYS_SELECT: CERTIFICATIONS]</span>
                                <span className="animate-pulse">● SECURE</span>
                            </div>
                            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-1.5 pb-2 lg:pb-0">
                                {certificationsData.map((cert, index) => {
                                    const isActive = activeTab === index;
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => setActiveTab(index)}
                                            className={`w-full text-left font-mono text-xs sm:text-sm p-3 rounded-lg border transition-all duration-300 flex items-center justify-between gap-3 shrink-0 lg:shrink whitespace-nowrap lg:whitespace-normal ${
                                                isActive
                                                    ? 'bg-gradient-to-r from-violet-600/20 to-purple-600/10 border-violet-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.15)]'
                                                    : 'bg-transparent border-violet-500/10 text-gray-400 hover:text-violet-400 hover:bg-violet-500/5 hover:border-violet-500/30'
                                            }`}
                                        >
                                            <div className="flex items-center gap-2.5 truncate lg:truncate-none">
                                                <span className={`text-xs ${isActive ? 'text-violet-400' : 'text-gray-600'}`}>
                                                    0{index + 1}.
                                                </span>
                                                <span className="truncate">{cert.title}</span>
                                            </div>
                                            <span className={`text-[10px] hidden md:inline px-1.5 py-0.5 rounded border font-bold shrink-0 ${
                                                isActive
                                                    ? 'bg-violet-500/20 border-violet-500/40 text-violet-300'
                                                    : 'bg-gray-500/5 border-gray-500/10 text-gray-500'
                                            }`}>
                                                {cert.code}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right: Detail Panel */}
                    <div className="lg:col-span-8 order-1 lg:order-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-[#0a0f1a]/85 border border-violet-500/20 rounded-lg overflow-hidden backdrop-blur-md relative shadow-2xl shadow-violet-950/20"
                            >
                                {/* Cyber corner accents */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-violet-500/60" />
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-violet-500/60" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-violet-500/60" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-violet-500/60" />

                                {/* Console Header */}
                                <div className="bg-[#0d1321]/80 px-4 sm:px-6 py-3 border-b border-violet-500/20 flex items-center justify-between text-[10px] sm:text-xs font-mono">
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                                        <span className="text-gray-500 ml-2">credential_decrypted.cfg</span>
                                    </div>
                                    <span className="text-violet-400/80 hidden sm:inline">SECURITY_LEVEL: VERIFIED</span>
                                </div>

                                <div className="p-5 sm:p-8">
                                    {/* Certificate Header */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-violet-500/10">
                                        <div className="flex-1">
                                            <span className="text-[10px] font-mono text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-full border border-violet-500/20 inline-block mb-3">
                                                ★ CERTIFICATE OFFICIAL
                                            </span>
                                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 font-mono tracking-tight leading-tight">
                                                {currentCert.title}
                                            </h3>
                                            <p className="text-gray-400 text-xs sm:text-sm font-mono flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                                                <span>Emisor:</span>
                                                <span className="text-violet-300 font-semibold">{currentCert.issuer}</span>
                                            </p>
                                        </div>

                                        {/* Animated Badge */}
                                        <div className="shrink-0 flex items-center justify-center">
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="relative group cursor-pointer"
                                                style={{ filter: `drop-shadow(0 0 15px ${currentCert.glowColor})` }}
                                            >
                                                <div className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 flex flex-col items-center justify-center relative p-2 ${currentCert.badgeColor}`}>
                                                    <div className="absolute inset-1 rounded-full border border-dashed border-white/10 animate-[spin_40s_linear_infinite]" />
                                                    <div className="absolute inset-0 rounded-full border border-white/5" />
                                                    <span className="text-3xl sm:text-4xl mb-1.5">
                                                        {currentCert.icon}
                                                    </span>
                                                    <span className="text-[10px] font-mono font-bold tracking-widest text-center uppercase text-white/90">
                                                        {currentCert.badgeText}
                                                    </span>
                                                    <span className="text-[8px] font-mono text-white/40 mt-0.5">
                                                        CISCO SEC
                                                    </span>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Structured Reflections */}
                                    <div className="py-6 space-y-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="bg-violet-950/10 border border-violet-500/5 rounded-lg p-4 font-mono">
                                                <h4 className="text-violet-400 text-xs sm:text-sm font-bold mb-2 flex items-center gap-2">
                                                    <span>🛡️</span> APRENDIZAJES CLAVE
                                                </h4>
                                                <p className="text-gray-400 text-xs leading-relaxed text-justify">
                                                    {currentCert.learnings}
                                                </p>
                                            </div>
                                            <div className="bg-violet-950/10 border border-violet-500/5 rounded-lg p-4 font-mono">
                                                <h4 className="text-violet-400 text-xs sm:text-sm font-bold mb-2 flex items-center gap-2">
                                                    <span>🎯</span> RETOS SUPERADOS
                                                </h4>
                                                <p className="text-gray-400 text-xs leading-relaxed text-justify">
                                                    {currentCert.challenges}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="bg-violet-950/10 border border-violet-500/5 rounded-lg p-4 font-mono">
                                                <h4 className="text-violet-400 text-xs sm:text-sm font-bold mb-2 flex items-center gap-2">
                                                    <span>💻</span> APLICACIÓN PRÁCTICA
                                                </h4>
                                                <p className="text-gray-400 text-xs leading-relaxed text-justify">
                                                    {currentCert.application}
                                                </p>
                                            </div>
                                            <div className="bg-violet-950/10 border border-violet-500/5 rounded-lg p-4 font-mono">
                                                <h4 className="text-violet-400 text-xs sm:text-sm font-bold mb-2 flex items-center gap-2">
                                                    <span>💬</span> COMENTARIO PERSONAL
                                                </h4>
                                                <p className="text-gray-400 text-xs leading-relaxed text-justify">
                                                    {currentCert.comment}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="pt-4 border-t border-violet-500/10 flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
                                            <span>[STATUS: VERIFIED]</span>
                                            <span>|</span>
                                            <span>ID: {currentCert.code}-{String(activeTab + 1).padStart(3, '0')}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <motion.a
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                href={currentCert.pdfPath}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded font-mono text-xs font-semibold flex items-center gap-2 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] border border-violet-500/40 transition-all duration-300"
                                            >
                                                <FaFilePdf className="text-sm" />
                                                <span>Ver Evidencia PDF</span>
                                            </motion.a>
                                            <motion.a
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                href={currentCert.verifyUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="px-4 py-2 bg-transparent hover:bg-violet-500/10 text-violet-400 border border-violet-500/20 hover:border-violet-500/50 rounded font-mono text-xs font-semibold flex items-center gap-2 transition-all duration-300"
                                            >
                                                <FaExternalLinkAlt className="text-xs" />
                                                <span>Verificar Credencial</span>
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Certifications;

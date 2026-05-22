import { useState, useEffect } from 'react';
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
    FaTimes,
    FaExpand,
    FaLock,
    FaEye,
    FaAward,
    FaQrcode
} from 'react-icons/fa';

const Certifications = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeDossier, setActiveDossier] = useState(0);

    // Disable body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const certificationsData = [
        {
            title: "Introducción a la Ciberseguridad",
            issuer: "Cisco Networking Academy / Skills for All",
            code: "CS-INTRO",
            date: "2025",
            themeColor: "from-emerald-500 to-teal-600",
            glowColor: "rgba(16, 185, 129, 0.2)",
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
            glowColor: "rgba(139, 92, 246, 0.2)",
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
            title: "Defensa de Red (Network Defense)",
            issuer: "Cisco Networking Academy / Skills for All",
            code: "NET-DEFENSE",
            date: "2025",
            themeColor: "from-cyan-500 to-blue-600",
            glowColor: "rgba(6, 182, 212, 0.2)",
            badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
            icon: <FaNetworkWired />,
            badgeText: "NET-DEF",
            pdfPath: "./certificaciones/network_defense.pdf",
            verifyUrl: "https://www.credly.com/organizations/cisco/badges",
            learnings: "Esta certificación se enfoca en las metodologías y herramientas necesarias para proteger la infraestructura de comunicación de una organización contra accesos no autorizados, ataques y filtraciones de datos. Aprendí los principios de la defensa perimetral, analizando cortafuegos tradicionales y de próxima generación (NGFW), así como sistemas IDS/IPS y el diseño de VPNs seguras mediante IPsec.",
            challenges: "El desafío principal consistió en asimilar la complejidad de la configuración de políticas de acceso a la red y comprender cómo se realiza el monitoreo continuo para identificar anomalías en tiempo real y mitigar riesgos proactivamente.",
            application: "Simulé topologías de red seguras en Cisco Packet Tracer, configurando reglas avanzadas de filtrado de tráfico (Listas de Control de Acceso - ACLs) en routers y switches, y analizando flujos de tráfico sospechoso.",
            comment: "Esta formación fue un pilar clave en mi desarrollo académico. Me dio las herramientas para entender que una defensa de red efectiva es multifacética y requiere no solo barreras perimetrales, sino una estrategia integral de monitoreo."
        },
        {
            title: "Seguridad en Terminales",
            issuer: "Cisco Networking Academy / Skills for All",
            code: "END-SEC",
            date: "2025",
            themeColor: "from-rose-500 to-red-600",
            glowColor: "rgba(244, 63, 94, 0.2)",
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
            glowColor: "rgba(245, 158, 11, 0.2)",
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
            title: "Carrera Profesional de Analista Junior en Ciberseguridad",
            issuer: "Cisco Networking Academy / Skills for All",
            code: "JR-ANALYST-PATH",
            date: "2025",
            themeColor: "from-violet-500 to-fuchsia-600",
            glowColor: "rgba(168, 85, 247, 0.2)",
            badgeColor: "text-violet-400 border-violet-500/30 bg-violet-500/10",
            icon: <FaCertificate />,
            badgeText: "JR-ANALYST",
            pdfPath: "./certificaciones/jr_analyst.pdf",
            verifyUrl: "https://www.credly.com/organizations/cisco/badges",
            learnings: "Esta trayectoria profesional de Cisco es la culminación integradora de los conocimientos del trayecto formativo. El programa me capacitó en las responsabilidades clave de un Analista de Ciberseguridad Junior dentro de un SOC. Aprendí a monitorear redes corporativas, clasificar la gravedad de las alertas de seguridad, realizar análisis iniciales de malware, aplicar metodologías forenses digitales básicas y a cumplir con los estándares ISO 27001.",
            challenges: "El reto primordial fue consolidar todas las disciplinas previas (redes, sistemas operativos, criptografía y análisis de amenazas) y aplicarlas bajo la presión simulada de un escenario de brecha de seguridad real, tomando decisiones rápidas de contención.",
            application: "Realicé prácticas de investigación forense digital, análisis de bitácoras de cortafuegos y sistemas de detección de intrusos (IDS), y elaboré informes técnicos de incidentes estructurados bajo estándares regulatorios y normativos de la industria.",
            comment: "Este recorrido formativo fue sumamente motivador, ya que me permitió proyectar mis competencias directo al mercado laboral. Me dio una comprensión clara de la ética profesional del analista y la importancia de la respuesta a incidentes."
        }
    ];

    const currentCert = certificationsData[activeTab];

    const dossierSections = [
        { emoji: '🛡️', label: '01 // Aprendizajes Clave', key: 'learnings' },
        { emoji: '🎯', label: '02 // Retos Superados', key: 'challenges' },
        { emoji: '💻', label: '03 // Aplicación Práctica', key: 'application' },
        { emoji: '💬', label: '04 // Comentario Personal', key: 'comment' },
    ];

    return (
        <section id="certificaciones" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-[#030712] overflow-hidden">
            {/* Background design accents */}
            <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />
            <div className="absolute top-20 right-10 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-violet-600/5 rounded-full blur-[130px] sm:blur-[200px]" />
            <div className="absolute bottom-20 left-10 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-purple-600/5 rounded-full blur-[130px] sm:blur-[200px]" />

            <div className="container mx-auto relative z-10 max-w-7xl">

                {/* ── Header Section ─────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full mb-5 shadow-[0_0_20px_rgba(139,92,246,0.08)]">
                        <FaTerminal className="text-violet-400 text-[10px]" />
                        <span className="font-mono text-violet-400 text-[10px] tracking-[0.25em] uppercase font-semibold">Academic_Credentials</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 tracking-tight text-white leading-[1.1]">
                        <span className="cert-title-gradient">Certificaciones</span>
                        <br className="hidden sm:block" />
                        <span className="cert-title-gradient-alt"> Oficiales</span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-5">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-violet-600/60" />
                        <div className="w-2 h-2 rounded-full bg-violet-500/40 animate-pulse" />
                        <div className="w-16 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full" />
                        <div className="w-2 h-2 rounded-full bg-purple-500/40 animate-pulse" />
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-purple-600/60" />
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm max-w-2xl mx-auto font-mono leading-relaxed tracking-wide">
                        <span className="text-violet-500/70">//</span> Evidencia curricular y reflexiones analíticas validadas por <span className="text-violet-400/80 font-semibold">Cisco Networking Academy</span>
                    </p>
                </motion.div>

                {/* ── Main Dashboard Layout ───────────────────────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                    {/* ── Left Column — Navigation Menu ───────────────────── */}
                    <div className="lg:col-span-4 order-2 lg:order-1 lg:sticky lg:top-24">
                        <div className="bg-[#080c14]/90 border border-violet-500/10 rounded-xl p-5 backdrop-blur-md">

                            {/* Panel title bar */}
                            <div className="text-[8px] font-mono text-violet-500/50 mb-5 tracking-[0.2em] flex items-center justify-between border-b border-violet-500/10 pb-3 font-semibold">
                                <span className="text-violet-400/60">[CREDENTIALS_LIST]</span>
                                <span className="flex items-center gap-1.5 text-emerald-400/70">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_4px_rgba(52,211,153,0.5)]" />
                                    VERIFIED
                                </span>
                            </div>

                            {/* Desktop Menu — Timeline Style */}
                            <nav className="hidden lg:flex flex-col gap-1.5 relative pl-7">
                                {/* Timeline vertical line */}
                                <div className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/40 via-violet-500/15 to-transparent pointer-events-none" />

                                {certificationsData.map((cert, index) => {
                                    const isActive = activeTab === index;
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => setActiveTab(index)}
                                            className={`relative w-full text-left transition-all duration-300 flex items-start gap-3 px-4 py-3.5 rounded-lg border cursor-pointer group ${
                                                isActive
                                                    ? 'border-violet-500/25 text-white bg-violet-500/10'
                                                    : 'border-transparent text-slate-500 hover:text-slate-200 hover:bg-white/[0.03]'
                                            }`}
                                        >
                                            {/* Active accent bar */}
                                            <div className={`absolute left-0 top-3 bottom-3 w-0.5 rounded-r-full transition-all duration-300 ${
                                                isActive ? 'bg-violet-500' : 'bg-transparent group-hover:bg-violet-500/30'
                                            }`} />

                                            {/* Timeline dot */}
                                            <div className="absolute left-[-24px] top-1/2 -translate-y-1/2 flex items-center justify-center">
                                                {isActive ? (
                                                    <div className="relative flex items-center justify-center">
                                                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-violet-400 opacity-50" />
                                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-400" />
                                                    </div>
                                                ) : (
                                                    <div className="h-1.5 w-1.5 rounded-full bg-violet-500/20 group-hover:bg-violet-500/50 transition-colors" />
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between gap-2 mb-1.5">
                                                    <span className={`text-[9px] font-mono font-bold tracking-[0.2em] ${isActive ? 'text-violet-400' : 'text-violet-500/40 group-hover:text-violet-500/60'}`}>
                                                        CASE 0{index + 1}
                                                    </span>
                                                    <span className={`text-[7px] font-mono uppercase tracking-[0.15em] px-2 py-0.5 rounded-sm border transition-colors duration-300 ${isActive ? 'text-violet-300 bg-violet-500/10 border-violet-500/25' : 'text-slate-600 bg-white/[0.02] border-white/5 group-hover:text-slate-500'}`}>
                                                        {cert.badgeText}
                                                    </span>
                                                </div>
                                                <p className={`text-[13px] font-semibold leading-snug tracking-[-0.01em] transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                                                    {cert.title}
                                                </p>
                                            </div>
                                        </button>
                                    );
                                })}
                            </nav>

                            {/* Mobile/Tablet Menu — Horizontal Slider */}
                            <div className="flex lg:hidden overflow-x-auto gap-2 pb-1 scrollbar-none -mx-1 px-1">
                                {certificationsData.map((cert, index) => {
                                    const isActive = activeTab === index;
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => setActiveTab(index)}
                                            className={`py-2 px-3.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all duration-300 border flex items-center gap-2 cursor-pointer shrink-0 ${
                                                isActive
                                                    ? 'bg-violet-500/10 border-violet-500/40 text-white font-semibold'
                                                    : 'bg-black/20 border-violet-500/10 text-slate-400 hover:text-white hover:border-violet-500/25'
                                            }`}
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-violet-400 animate-pulse' : 'bg-violet-500/30'}`} />
                                            <span>0{index + 1}. {cert.badgeText}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Footer */}
                            <div className="hidden lg:flex items-center gap-2 text-[8px] font-mono text-gray-600 mt-5 border-t border-violet-500/10 pt-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-500/40 animate-pulse" />
                                <span>SECURE ACCESS SHELL V1.0</span>
                            </div>
                        </div>
                    </div>

                    {/* ── Right Column — Dossier Detail Pane ──────────────── */}
                    <div className="lg:col-span-8 order-1 lg:order-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.28 }}
                                className="bg-[#080c14]/90 border border-violet-500/15 rounded-xl overflow-hidden backdrop-blur-md w-full shadow-2xl shadow-violet-950/10"
                            >
                                {/* ── Card Top Bar ──────────────────────────── */}
                                <div className="bg-[#0c101c] px-5 sm:px-7 py-3.5 border-b border-violet-500/10 flex items-center justify-between text-[9px] sm:text-[10px] font-mono">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse shadow-[0_0_6px_rgba(139,92,246,0.5)]" />
                                        <span className="text-gray-400 tracking-[0.15em] font-medium">DOSSIER_SYS://<span className="text-violet-400/70">{currentCert.code}</span></span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600 tracking-[0.12em]">
                                        <span className="font-medium">CISCO_NETACAD</span>
                                        <span className="text-emerald-400/80 flex items-center gap-1.5 font-semibold">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block shadow-[0_0_4px_rgba(52,211,153,0.5)]" />
                                            VERIFIED
                                        </span>
                                    </div>
                                </div>

                                {/* ── Card Body ─────────────────────────────── */}
                                <div className="p-5 sm:p-7">

                                    {/* Section 1 — Certificate Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-violet-500/10 mb-6">
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                                <span className="text-[7px] font-mono text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-full border border-violet-500/20 font-bold tracking-[0.2em] uppercase">
                                                    VERIFICATION_LEVEL_01
                                                </span>
                                                <span className="text-[7px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-bold tracking-[0.2em] uppercase flex items-center gap-1.5">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                                    STATUS: VERIFIED
                                                </span>
                                                <span className="text-[7px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 font-bold tracking-[0.2em] uppercase">
                                                    DATE: {currentCert.date}
                                                </span>
                                            </div>
                                            <h3 className="text-xl sm:text-2xl md:text-[1.7rem] font-extrabold text-white mb-2.5 tracking-[-0.02em] leading-tight flex items-start gap-3">
                                                <span className="text-violet-400 text-lg sm:text-xl shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]">{currentCert.icon}</span>
                                                <span className="cert-detail-title">{currentCert.title}</span>
                                            </h3>
                                            <p className="text-slate-500 text-[11px] font-mono tracking-wide">
                                                <span className="text-slate-600">Organismo Certificador:</span> <span className="text-violet-400 font-semibold">{currentCert.issuer}</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Section 2 — Dossier Tabs + Content */}
                                    <div className="mb-6">

                                        {/* Dossier Tab Bar */}
                                        <div className="flex items-center gap-1 mb-0 border-b border-violet-500/10 overflow-x-auto scrollbar-none">
                                            {dossierSections.map(({ emoji, label }, index) => {
                                                const isActive = activeDossier === index;
                                                return (
                                                    <button
                                                        key={index}
                                                        onClick={() => setActiveDossier(index)}
                                                        className={`relative px-4 py-3 text-[9px] sm:text-[10px] font-mono font-semibold tracking-[0.1em] uppercase whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer shrink-0 ${
                                                            isActive
                                                                ? 'text-violet-300'
                                                                : 'text-slate-600 hover:text-slate-400'
                                                        }`}
                                                    >
                                                        <span className="text-sm">{emoji}</span>
                                                        <span className="hidden sm:inline">{label}</span>
                                                        <span className="sm:hidden">0{index + 1}</span>
                                                        {/* Active underline */}
                                                        {isActive && (
                                                            <motion.div
                                                                layoutId="dossierTab"
                                                                className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
                                                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                                            />
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        {/* Dossier Content + Certificate Mockup Side by Side */}
                                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start pt-5">

                                            {/* Active Dossier Content — Full Width */}
                                            <div className="lg:col-span-8">
                                                <AnimatePresence mode="wait">
                                                    <motion.div
                                                        key={`${activeTab}-${activeDossier}`}
                                                        initial={{ opacity: 0, y: 8 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -5 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="bg-[#05070c]/50 border border-white/[0.04] rounded-xl p-6 relative overflow-hidden"
                                                    >
                                                        {/* Decorative left accent */}
                                                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-violet-500/50 via-purple-500/30 to-transparent rounded-l-xl" />

                                                        {/* Section label */}
                                                        <div className="flex items-center gap-2.5 mb-4">
                                                            <span className="text-lg">{dossierSections[activeDossier].emoji}</span>
                                                            <h4 className="text-violet-400/90 font-mono text-[9px] font-bold tracking-[0.2em] uppercase">
                                                                {dossierSections[activeDossier].label}
                                                            </h4>
                                                            <div className="flex-1 h-px bg-gradient-to-r from-violet-500/15 to-transparent" />
                                                        </div>

                                                        {/* Text content — nice readable typography */}
                                                        <p className="text-slate-300/90 text-[14px] sm:text-[15px] leading-[1.85] tracking-[0.005em] pl-1">
                                                            {currentCert[dossierSections[activeDossier].key]}
                                                        </p>

                                                        {/* Section counter */}
                                                        <div className="flex items-center justify-between mt-5 pt-3 border-t border-white/[0.04]">
                                                            <span className="text-[8px] font-mono text-slate-600 tracking-[0.15em]">
                                                                SECTION {String(activeDossier + 1).padStart(2, '0')} / {String(dossierSections.length).padStart(2, '0')}
                                                            </span>
                                                            <div className="flex items-center gap-1.5">
                                                                {dossierSections.map((_, i) => (
                                                                    <div
                                                                        key={i}
                                                                        className={`h-1 rounded-full transition-all duration-300 ${
                                                                            i === activeDossier
                                                                                ? 'w-5 bg-violet-500/60'
                                                                                : 'w-1 bg-slate-700/50'
                                                                        }`}
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                </AnimatePresence>
                                            </div>

                                            {/* Certificate Mockup Card */}
                                            <div className="lg:col-span-4 flex">
                                                <motion.div
                                                    onClick={() => setIsModalOpen(true)}
                                                    whileHover={{ y: -3, borderColor: 'rgba(139, 92, 246, 0.4)' }}
                                                    className="w-full relative bg-gradient-to-br from-[#0c111d] to-[#04060c] border border-violet-500/20 rounded-xl p-5 flex flex-col justify-between overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] transition-all duration-300 backdrop-blur-sm select-none min-h-[280px]"
                                                >
                                                    {/* Grid overlay */}
                                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:14px_14px] opacity-50 pointer-events-none" />

                                                    {/* Scan laser */}
                                                    <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500/25 to-transparent top-0 animate-scan-fast pointer-events-none" />

                                                    {/* Corner accents */}
                                                    <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-violet-500/40" />
                                                    <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-violet-500/40" />
                                                    <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-violet-500/40" />
                                                    <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-violet-500/40" />

                                                    {/* Mockup Header */}
                                                    <div className="relative z-10 w-full flex items-center justify-between text-[8px] font-mono text-violet-500/40 pb-2 border-b border-violet-500/10">
                                                        <span>[CREDENTIAL_SECURE_ID]</span>
                                                        <span className="flex items-center gap-1 text-emerald-400/80">
                                                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                                            VERIFIED
                                                        </span>
                                                    </div>

                                                    {/* Certificate Face */}
                                                    <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center py-4 px-2">
                                                        {/* Digital Seal */}
                                                        <div className="relative mb-4">
                                                            <div className="absolute inset-[-6px] rounded-full border border-dashed border-violet-500/35 animate-[spin_40s_linear_infinite]" />
                                                            <div className="w-12 h-12 rounded-full bg-violet-950/50 border border-violet-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                                                                <FaAward className="text-xl text-violet-400" />
                                                            </div>
                                                        </div>

                                                        <span className="text-[6px] font-mono text-violet-400/50 uppercase tracking-[0.35em] block mb-1.5">
                                                            CISCO NETWORKING ACADEMY
                                                        </span>
                                                        <span className="text-[8px] font-mono text-slate-300/80 font-bold uppercase tracking-[0.2em] block mb-3">
                                                            CERTIFICATE OF COMPLETION
                                                        </span>

                                                        <h5 className="text-[10px] font-extrabold text-white uppercase tracking-[0.08em] px-3 leading-snug border-y border-violet-500/15 py-2.5 w-full max-w-[180px] line-clamp-2 my-1 cert-mockup-title">
                                                            {currentCert.title}
                                                        </h5>

                                                        <p className="text-[7px] font-mono text-slate-500/80 uppercase tracking-[0.25em] mt-3 mb-1">
                                                            Otorgado con distinción a:
                                                        </p>
                                                        <p className="text-[12px] font-bold text-white tracking-[0.1em] cert-name-text">
                                                            Gisela M.
                                                        </p>
                                                    </div>

                                                    {/* Mockup Footer */}
                                                    <div className="relative z-10 pt-2.5 border-t border-violet-500/10 flex items-end justify-between">
                                                        <div className="flex flex-col gap-0.5 font-mono text-[6px] text-slate-600 tracking-[0.15em]">
                                                            <span>DATE: <span className="text-slate-500">2025</span></span>
                                                            <span>CODE: <span className="text-violet-400/50">{currentCert.code}</span></span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex flex-col items-end gap-0.5 font-mono text-[5px] text-slate-700 tracking-[0.2em]">
                                                                <span className="h-px w-8 bg-slate-700/60 rounded" />
                                                                <span>SIGNATURE</span>
                                                            </div>
                                                            <div className="w-6 h-6 border border-violet-500/20 rounded bg-black/40 flex items-center justify-center text-violet-500/50 p-0.5">
                                                                <FaQrcode className="text-xs" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Hover Overlay */}
                                                    <div className="absolute inset-0 bg-[#020407]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-sm z-20 rounded-xl">
                                                        <div className="w-12 h-12 rounded-full bg-violet-500/15 border border-violet-500/40 flex items-center justify-center">
                                                            <FaEye className="text-xl text-violet-300" />
                                                        </div>
                                                        <p className="text-[11px] font-mono text-violet-300 text-center px-4 leading-relaxed tracking-wide">
                                                            Click para ver<br />
                                                            <span className="text-violet-500/80 text-[10px] tracking-[0.1em]">certificado completo</span>
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Section 3 — Action Buttons Footer */}
                                    <div className="pt-5 border-t border-violet-500/10 flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex items-center gap-2.5 text-[8px] font-mono text-gray-600 tracking-[0.12em]">
                                            <span className="text-gray-500">[ENCRYPTION_HASH: <span className="text-emerald-500/70">OK</span>]</span>
                                            <span className="text-violet-500/30">│</span>
                                            <span className="text-violet-400/50 font-semibold">00{activeTab + 1}-VRY</span>
                                        </div>

                                        <div className="flex items-center gap-3 flex-wrap">
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.97 }}
                                                onClick={() => setIsModalOpen(true)}
                                                className="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-mono text-xs font-semibold flex items-center gap-2 hover:shadow-[0_0_18px_rgba(139,92,246,0.35)] border border-violet-500/30 transition-all duration-300 cursor-pointer"
                                            >
                                                <FaExpand className="text-xs" />
                                                <span>Ver en Grande</span>
                                            </motion.button>

                                            <motion.a
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.97 }}
                                                href={currentCert.pdfPath}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="px-4 py-2 bg-transparent hover:bg-violet-500/5 text-violet-400 border border-violet-500/20 hover:border-violet-500/40 rounded-lg font-mono text-xs font-semibold flex items-center gap-2 transition-all duration-300"
                                            >
                                                <FaFilePdf className="text-sm" />
                                                <span>Descargar PDF</span>
                                            </motion.a>

                                            <motion.a
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.97 }}
                                                href={currentCert.verifyUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="px-4 py-2 bg-transparent text-gray-500 hover:text-violet-400 rounded-lg font-mono text-xs flex items-center gap-2 transition-all duration-300"
                                            >
                                                <FaExternalLinkAlt className="text-[9px]" />
                                                <span>Credencial</span>
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            {/* ── Full-Screen PDF Lightbox Modal ─────────────────────────── */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#020408]/95 backdrop-blur-md"
                    >
                        {/* Backdrop close */}
                        <div className="absolute inset-0" onClick={() => setIsModalOpen(false)} />

                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.96, y: 10, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.96, y: 10, opacity: 0 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            className="bg-[#060a12] border border-violet-500/30 rounded-xl w-full max-w-5xl h-[85vh] sm:h-[90vh] overflow-hidden flex flex-col shadow-2xl shadow-violet-950/30 relative z-10"
                        >
                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-violet-500/50" />
                            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-violet-500/50" />
                            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-violet-500/50" />
                            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-violet-500/50" />

                            {/* Modal Header */}
                            <div className="bg-[#0a0e1a] px-4 sm:px-6 py-3.5 border-b border-violet-500/15 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping" />
                                    <div>
                                        <h4 className="font-mono text-xs sm:text-sm font-bold text-white leading-none">
                                            [DECRYPTED_DOCUMENT: {currentCert.code}]
                                        </h4>
                                        <p className="text-[8px] sm:text-[9px] font-mono text-violet-400 mt-1 uppercase tracking-wider">
                                            {currentCert.title}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="w-8 h-8 rounded-full bg-red-500/5 border border-red-500/20 flex items-center justify-center text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer"
                                >
                                    <FaTimes className="text-sm" />
                                </button>
                            </div>

                            {/* PDF Viewer */}
                            <div className="flex-1 bg-[#020408] p-1 sm:p-3 flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                                <iframe
                                    src={`${currentCert.pdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
                                    title={currentCert.title}
                                    className="w-full h-full rounded-lg border border-violet-500/10 bg-[#020408] relative z-10"
                                />
                            </div>

                            {/* Modal Footer */}
                            <div className="bg-[#0a0e1a] px-4 sm:px-6 py-3 border-t border-violet-500/15 flex items-center justify-between flex-wrap gap-3">
                                <div className="flex items-center gap-2 font-mono text-[9px] sm:text-xs text-gray-500">
                                    <span>[SECURE_ACCESS_GRANTED]</span>
                                    <span>|</span>
                                    <span>VITE_DEPL_ONLINE</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <motion.a
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        href={currentCert.pdfPath}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-4 py-1.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-mono text-[10px] sm:text-xs font-semibold flex items-center gap-2 hover:shadow-[0_0_15px_rgba(139,92,246,0.25)] border border-violet-500/35 transition-all duration-300"
                                    >
                                        <FaFilePdf className="text-sm" />
                                        <span>Descargar Evidencia Oficial</span>
                                    </motion.a>

                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-1.5 bg-transparent hover:bg-violet-500/5 text-gray-400 hover:text-white border border-violet-500/15 rounded-lg font-mono text-[10px] sm:text-xs transition-all duration-300 cursor-pointer"
                                    >
                                        Cerrar Visor
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;

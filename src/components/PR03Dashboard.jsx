import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FaShieldAlt, FaServer, FaUsers, FaLock, FaExclamationTriangle, 
    FaFilePdf, FaSearch, FaNetworkWired, FaBook, FaCheckCircle, 
    FaLaptop, FaBuilding, FaHistory, FaBullseye, FaClipboardList, 
    FaListAlt, FaInfoCircle, FaCheckSquare, FaFolderOpen, FaArrowRight 
} from 'react-icons/fa';

const PR03Dashboard = () => {
    const [activeTab, setActiveTab] = useState('general');
    const [focusedRisk, setFocusedRisk] = useState(null);
    const [selectedAuditChk, setSelectedAuditChk] = useState(null);
    const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

    // Data definitions
    const members = [
        { name: "Aguilar Espinoza Juan Diego", id: "173877", role: "CISO / Evaluador de Riesgos" },
        { name: "Jasso Dávila Pedro Damian", id: "176658", role: "Arquitecto de Seguridad" },
        { name: "Moreno Solís Gisela Geraldine", id: "176522", role: "Líder de Cumplimiento" },
        { name: "Palomo Cerda Jose Armando", id: "175932", role: "Ingeniero de Controles" },
        { name: "Zarate Dominguez David", id: "175842", role: "Auditor Interno" },
        { name: "Zorrilla Rivera Eduardo", id: "175877", role: "Especialista en BCP" }
    ];

    const companyDetails = {
        name: "Inspección Certificada SL",
        commercialName: "Servicios de Inspección de Alta Calidad (ISL)",
        giro: "Prestación de servicios profesionales, científicos y técnicos.",
        ramo: "Servicios de inspección, control de calidad y outsourcing técnico para la industria manufacturera y automotriz.",
        caracter: "Institución de carácter Privado.",
        size: "Pequeña empresa (Cuenta con una plantilla activa de 23 colaboradores).",
        location: "Sede San Luis Potosí, SLP, México.",
        digital: "inspeccionsl.com / WhatsApp: +52 444 300 6175",
        history: "Inspección Certificada SL (ISL) fue fundada con la visión de cerrar la brecha de calidad en la cadena de suministro industrial de la región del Bajío. Identificando la necesidad de las plantas manufactureras de contar con filtros de inspección externos confiables, la empresa se especializó en la verificación técnica de componentes. A lo largo de su trayectoria, ha consolidado alianzas estratégicas con empresas locales y globales que requieren asegurar que sus productos cumplan con especificaciones técnicas rigurosas antes de su ensamblaje o envío final.",
        mision: "Proveer servicios de inspección y control de calidad con los más altos estándares de precisión, confiabilidad y ética profesional. Garantizar que los procesos de nuestros clientes fluyan sin interrupciones por defectos de calidad, aportando valor a través de la excelencia técnica y la entrega oportuna de información crítica.",
        vision: "Convertirnos para el año 2030 en el referente principal de servicios de certificación e inspección industrial en el centro del país. Ser reconocidos por nuestra capacidad operativa y la integración de tecnología avanzada para la transmisión de reportes en tiempo real bajo esquemas de seguridad de la información inquebrantables.",
        valores: ["Precisión y Excelencia Técnica", "Ética Profesional e Integridad", "Confidencialidad Absoluta de Datos del Cliente", "Responsabilidad y Puntualidad", "Mejora Continua Sistémica"]
    };

    const assets = [
        { id: "ACT-INT-001", name: "BD de Clientes SQL Server 2022", type: "Datos / Software", owner: "Dir. General", c: "Alto", i: "Alto", d: "Alto", value: "Crítico", desc: "Contiene registros de calidad, planos, datos de facturación e información técnica de clientes." },
        { id: "ACT-INT-003", name: "Servidor Dell PowerEdge T550", type: "Hardware", owner: "Responsable TI", c: "Medio", i: "Alto", d: "Alto", value: "Crítico", desc: "Servidor físico local en sede central que hospeda la base de datos SQL y Active Directory." },
        { id: "ACT-INT-005", name: "Tablets Samsung Galaxy Tab Active4 Pro", type: "Hardware", owner: "Gerente Operaciones", c: "Alto", i: "Medio", d: "Alto", value: "Alto", desc: "6 dispositivos robustos utilizados en campo por inspectores para captura de planos e inspección." },
        { id: "ACT-INT-007", name: "Credenciales de Active Directory", type: "Servicio / Lógico", owner: "Responsable TI", c: "Alto", i: "Alto", d: "Alto", value: "Crítico", desc: "Credenciales administrativas y de usuarios para acceso al dominio local e infraestructuras." },
        { id: "ACT-INT-013", name: "Lector Biométrico ZKTeco SpeedFace", type: "Hardware / Físico", owner: "Responsable TI", c: "Bajo", i: "Alto", d: "Alto", value: "Alto", desc: "Control de acceso físico biométrico al cuarto de servidores en la sede central." },
        { id: "ACT-INT-014", name: "Expedientes de Personal (Cifrado)", type: "Datos / Físico", owner: "Dir. General", c: "Alto", i: "Medio", d: "Bajo", value: "Medio", desc: "Información personal, contratos y salarios de los 23 colaboradores almacenados localmente." },
        { id: "ACT-EXT-001", name: "Instancia AWS EC2 (Portal Corporativo)", type: "Servicio Nube", owner: "Proveedor AWS", c: "Medio", i: "Alto", d: "Alto", value: "Alto", desc: "Portal web administrativo y de cara al cliente hospedado en nube pública." },
        { id: "ACT-EXT-003", name: "Dominio DNS inspeccionsl.com (GoDaddy)", type: "Lógico / Externo", owner: "Responsable TI", c: "Bajo", i: "Alto", d: "Alto", value: "Alto", desc: "Dominio y registros DNS gestionados en plataforma de registro externa." },
        { id: "ACT-EXT-005", name: "Microsoft 365 Business Premium", type: "SaaS", owner: "Proveedor Microsoft", c: "Alto", i: "Alto", d: "Alto", value: "Crítico", desc: "Suite de colaboración en la nube (OneDrive, Outlook, SharePoint) que almacena reportes de clientes." },
        { id: "ACT-EXT-007", name: "Red VPN Acceso Remoto IPsec (Telmex)", type: "Red / Comunicación", owner: "Responsable TI", c: "Alto", i: "Alto", d: "Alto", value: "Crítico", desc: "Canal cifrado seguro para el envío de datos de tablets en campo al servidor central." }
    ];

    const risks = [
        { id: "RGS-01", code: "RGS-01", name: "Acceso no autorizado a reportes confidenciales vía VPN/AD", prob: 5, imp: 5, score: 25, level: "EXTREMO", asset: "ACT-INT-007, ACT-EXT-007", desc: "Atacante explota credenciales débiles o comprometidas en Active Directory para acceder de forma remota a datos confidenciales del servidor central a través de la VPN.", treatment: "Implementación obligatoria de Autenticación Multifactor (MFA) utilizando llaves físicas YubiKey 5C para todas las cuentas administrativas y VPN." },
        { id: "RGS-04", code: "RGS-04", name: "Ataque de Ransomware / Cifrado de Servidor Central", prob: 4, imp: 5, score: 20, level: "EXTREMO", asset: "ACT-INT-003, ACT-INT-001", desc: "Introducción de código malicioso en el servidor local Dell que cifra toda la base de datos de clientes e interrumpe las operaciones por falta de segmentación interna.", treatment: "Implementación del plan de Continuidad BCP v2.1 bajo Regla de Respaldos 3-2-1 (copias automáticas diarias a AWS S3 + copia offline semanal en discos externos WD resguardados en caja fuerte)." },
        { id: "RGS-02", code: "RGS-02", name: "Robo o extravío de tablets Samsung Galaxy en campo", prob: 4, imp: 4, score: 16, level: "MUY ALTO", asset: "ACT-INT-005", desc: "Pérdida de dispositivos móviles en plantas de clientes exponiendo planos técnicos confidenciales y datos de inspección crítica antes de ser transmitidos.", treatment: "Configuración del agente MDM (Samsung Knox) en el 100% de dispositivos con políticas de borrado remoto inmediato y cifrado de disco completo activo." },
        { id: "RGS-03", code: "RGS-03", name: "Explotación de vulnerabilidades por software desactualizado", prob: 5, imp: 3, score: 15, level: "MUY ALTO", asset: "ACT-INT-003, ACT-INT-001", desc: "Atacantes externos explotan vulnerabilidades conocidas (CVEs) en el sistema operativo Windows Server o en SQL Server debido a la ausencia de un proceso de parches documentado.", treatment: "Establecer la ventana semanal de mantenimiento (Domingos 22:00 a 02:00 hrs) y generar el reporte mensual de parches aplicados en el formulario IC-SGSI-INF-04." },
        { id: "RGS-05", code: "RGS-05", name: "Fuga de información confidencial en Microsoft 365 / OneDrive", prob: 3, imp: 4, score: 12, level: "ALTO", asset: "ACT-EXT-005", desc: "Un colaborador comparte archivos confidenciales de clientes mediante enlaces públicos de OneDrive sin restricciones de acceso o control de sensibilidad.", treatment: "Configurar etiquetas de sensibilidad obligatorias (Confidencial, Interno, Público) en Microsoft Purview M365 y aplicar directivas DLP (Data Loss Prevention) para impedir el intercambio de planos fuera de la organización." },
        { id: "RGS-07", code: "RGS-07", name: "Secuestro de dominio e inactividad de portal web corporativo", prob: 3, imp: 4, score: 12, level: "ALTO", asset: "ACT-EXT-003", desc: "Acceso no autorizado al panel de control de GoDaddy por falta de MFA y alertas de renovación, lo que provoca la caída total del portal y pérdida de credibilidad.", treatment: "Habilitar MFA obligatorio en la consola de administración de GoDaddy y configurar alertas automáticas de renovación con 90 días de anticipación." }
    ];

    const raciMatrix = {
        roles: [
            { code: "DG", label: "Director General" },
            { code: "TI", label: "Responsable de TI" },
            { code: "GO", label: "Gerente de Operaciones" },
            { code: "SI", label: "Supervisor de Inspección" },
            { code: "IC", label: "Inspector de Campo" }
        ],
        policies: [
            { code: "POL-01", name: "POL-01: Gestión de Accesos (Active Directory)", raci: { DG: "A", TI: "R", GO: "C", SI: "I", IC: "I" }, control: "A.8.5 Autenticación" },
            { code: "POL-02", name: "POL-02: Clasificación y Protección de Datos", raci: { DG: "A", TI: "R", GO: "R", SI: "C", IC: "C" }, control: "A.5.12 Clasificación" },
            { code: "POL-03", name: "POL-03: Seguridad de la Infraestructura", raci: { DG: "A", TI: "R", GO: "C", SI: "I", IC: "I" }, control: "A.8.8 Parcheo" },
            { code: "POL-04", name: "POL-04: Control e Inventario de Activos", raci: { DG: "A", TI: "R", GO: "C", SI: "I", IC: "C" }, control: "A.5.9 Inventario" },
            { code: "POL-05", name: "POL-05: Seguridad en Dispositivos Móviles", raci: { DG: "A", TI: "C", GO: "R", SI: "R", IC: "R" }, control: "A.8.1 MDM/Cifrado" },
            { code: "POL-06", name: "POL-06: Relaciones con Proveedores (GoDaddy/AWS)", raci: { DG: "A", TI: "R", GO: "C", SI: "I", IC: "I" }, control: "A.5.19 Proveedores" },
            { code: "POL-07", name: "POL-07: Gestión de Incidentes de Seguridad", raci: { DG: "A", TI: "R", GO: "R", SI: "C", IC: "C" }, control: "A.5.24 Incidentes" },
            { code: "POL-08", name: "POL-08: Continuidad del Negocio (BCP)", raci: { DG: "A", TI: "R", GO: "R", SI: "I", IC: "I" }, control: "A.8.13 Respaldos" },
            { code: "POL-09", name: "POL-09: Gestión de Cambios de TI", raci: { DG: "A", TI: "R", GO: "C", SI: "I", IC: "I" }, control: "A.8.32 Cambios" },
            { code: "POL-10", name: "POL-10: Concientización y Capacitación", raci: { DG: "A", TI: "R", GO: "R", SI: "R", IC: "R" }, control: "A.6.3 Capacitación" }
        ]
    };

    const policiesDetail = [
        {
            code: "POL-01",
            name: "Gestión de Accesos e Identidades",
            control: "ISO/IEC 27002:2022 — Control A.8.5",
            color: "emerald",
            objective: "Garantizar que únicamente el personal autorizado acceda a los sistemas de información de ISL mediante credenciales robustas y mecanismos de autenticación multifactor.",
            scope: "Aplica a todas las cuentas de usuario en Active Directory, incluidas las cuentas administrativas, de servicio y de acceso VPN remoto.",
            controls: [
                "MFA obligatorio con YubiKey 5C para todas las cuentas administrativas de dominio y acceso VPN.",
                "Contraseñas mínimo de 14 caracteres, con complejidad activada en directiva de AD.",
                "Revisión trimestral de cuentas activas y eliminación inmediata de usuarios al término de contrato.",
                "Bloqueo automático de cuenta tras 5 intentos fallidos consecutivos."
            ],
            responsible: "Director General (Aprueba) · Responsable TI (Ejecuta) · Gerente Operaciones (Consultado)"
        },
        {
            code: "POL-02",
            name: "Clasificación y Protección de Datos",
            control: "ISO/IEC 27002:2022 — Control A.5.12",
            color: "cyan",
            objective: "Asegurar que toda la información generada o procesada por ISL sea clasificada, etiquetada y protegida de acuerdo con su nivel de sensibilidad para prevenir accesos no autorizados y fugas de datos.",
            scope: "Abarca todos los documentos, reportes técnicos, planos de clientes, contratos y datos almacenados en Microsoft 365, servidor local y dispositivos móviles.",
            controls: [
                "Tres niveles de clasificación obligatorios: CONFIDENCIAL / INTERNO / PÚBLICO.",
                "Etiquetas de sensibilidad automáticas en Microsoft Purview para archivos de OneDrive y SharePoint.",
                "Políticas DLP (Data Loss Prevention) que bloquean el envío externo de planos sin autorización.",
                "Cifrado AES-256 en reposo para todos los archivos clasificados como CONFIDENCIAL."
            ],
            responsible: "Director General (Aprueba) · Responsable TI (Ejecuta) · Gerente Operaciones (Ejecuta) · Supervisores (Consultado)"
        },
        {
            code: "POL-03",
            name: "Seguridad de la Infraestructura Tecnológica",
            control: "ISO/IEC 27002:2022 — Controls A.8.8 & A.7.3",
            color: "amber",
            objective: "Mantener la infraestructura tecnológica de ISL actualizada, parcheada y físicamente protegida para eliminar vectores de ataque derivados de vulnerabilidades conocidas.",
            scope: "Servidor Dell PowerEdge T550, switches de red, firewall perimetral, cuarto de servidores físico y cualquier equipo de comunicaciones en la sede central.",
            controls: [
                "Ventana de mantenimiento semanal: Domingos 22:00–02:00 hrs para aplicación de parches críticos.",
                "Formulario IC-SGSI-INF-04 de registro de parches: obligatorio, firmado por TI y aprobado por Dirección.",
                "Acceso físico al cuarto de servidores restringido mediante lector biométrico ZKTeco SpeedFace.",
                "Escaneo de vulnerabilidades mensual con Nessus y remediación de CVEs críticos en máximo 72 horas."
            ],
            responsible: "Director General (Aprueba) · Responsable TI (Ejecuta) · Gerente Operaciones (Consultado)"
        },
        {
            code: "POL-04",
            name: "Control e Inventario de Activos de Información",
            control: "ISO/IEC 27002:2022 — Control A.5.9",
            color: "violet",
            objective: "Mantener un inventario actualizado y completo de todos los activos de información de ISL para garantizar su correcta identificación, valoración y asignación de propietario responsable.",
            scope: "Los 40 activos catalogados incluyendo hardware, software, datos, servicios en nube y activos de comunicaciones tanto en sede central como en operaciones de campo.",
            controls: [
                "Inventario formal documentado con clasificación CIA (Confidencialidad, Integridad, Disponibilidad).",
                "Revisión semestral física y verificación de activos con el formulario IC-SGSI-ACT-01.",
                "Asignación obligatoria de un Custodio a cada activo crítico con responsabilidad documentada.",
                "Alta y baja de activos documentada en el registro con firma del Director General."
            ],
            responsible: "Director General (Aprueba) · Responsable TI (Ejecuta) · Gerente Operaciones (Consultado) · Inspectores (Consultado)"
        },
        {
            code: "POL-05",
            name: "Seguridad en Dispositivos Móviles (MDM)",
            control: "ISO/IEC 27002:2022 — Control A.8.1",
            color: "rose",
            objective: "Proteger la información confidencial de clientes contenida en las tablets Samsung Galaxy Tab Active4 Pro, regulando su uso en campo y garantizando mecanismos de control remoto ante pérdida o robo.",
            scope: "Las 6 tablets Samsung Galaxy Tab Active4 Pro asignadas al equipo de inspectores de campo que operan en plantas industriales de clientes.",
            controls: [
                "Enrolamiento obligatorio en Samsung Knox MDM con cifrado de disco completo activo en el 100% de dispositivos.",
                "Prohibición de acceso a galería personal, redes sociales o correo personal desde tablets de trabajo.",
                "Borrado remoto inmediato ejecutado por TI en menos de 20 minutos ante reporte de extravío.",
                "Auditoría semanal de enrolamiento y estado de firmas antivirus vía consola Knox MDM."
            ],
            responsible: "Director General (Aprueba) · Gerente Operaciones (Ejecuta) · Supervisor Inspección (Ejecuta) · Inspectores (Ejecuta)"
        },
        {
            code: "POL-06",
            name: "Seguridad en Relaciones con Proveedores",
            control: "ISO/IEC 27002:2022 — Control A.5.19",
            color: "indigo",
            objective: "Garantizar que los proveedores críticos de ISL (GoDaddy, AWS, Microsoft 365, Telmex) cumplan con estándares mínimos de seguridad antes de acceder a sistemas o datos de la organización.",
            scope: "Todos los proveedores de servicios tecnológicos con acceso a infraestructura o datos de ISL, incluyendo servicios en la nube, conectividad y registro de dominio.",
            controls: [
                "Formulario IC-SGSI-PROV-01 de evaluación de seguridad para cada proveedor crítico, anual.",
                "MFA obligatorio en la consola de administración de GoDaddy y alertas de renovación con 90 días de anticipación.",
                "Cláusulas de seguridad de la información en todos los contratos de proveedores y NDAs firmados.",
                "Revisión anual de SLAs y capacidades de respuesta a incidentes de proveedores cloud (AWS, Microsoft)."
            ],
            responsible: "Director General (Aprueba) · Responsable TI (Ejecuta) · Gerente Operaciones (Consultado)"
        },
        {
            code: "POL-07",
            name: "Gestión de Incidentes de Seguridad",
            control: "ISO/IEC 27002:2022 — Control A.5.24",
            color: "orange",
            objective: "Establecer un proceso formal y documentado para la detección, reporte, clasificación, respuesta y análisis post-mortem de incidentes de seguridad de la información en ISL.",
            scope: "Todos los incidentes de seguridad que afecten activos de ISL, incluyendo accesos no autorizados, malware, pérdida de datos, fallos de infraestructura y violaciones a políticas internas.",
            controls: [
                "Canal de reporte de incidentes 24/7 habilitado al Responsable de TI vía correo ic-seguridad@inspeccionsl.com y WhatsApp.",
                "Clasificación de incidentes en 3 niveles: Crítico (< 1 hora respuesta) / Alto (< 4 horas) / Medio (< 24 horas).",
                "Análisis de causa raíz (Root Cause Analysis) documentado en formulario IC-SGSI-INC-02 tras cada incidente mayor.",
                "Informe mensual de incidentes presentado en reunión de revisión gerencial con métricas de MTTR y MTTD."
            ],
            responsible: "Director General (Aprueba) · Responsable TI (Ejecuta) · Gerente Operaciones (Ejecuta) · Supervisores (Consultado)"
        },
        {
            code: "POL-08",
            name: "Continuidad del Negocio y Respaldos (BCP)",
            control: "ISO/IEC 27002:2022 — Control A.8.13",
            color: "teal",
            objective: "Asegurar la disponibilidad operativa de los sistemas críticos de ISL ante interrupciones mayores, mediante una estrategia de respaldo probada y un Plan de Continuidad del Negocio documentado.",
            scope: "La base de datos SQL Server, los archivos de Microsoft 365 (OneDrive/SharePoint), el servidor Dell PowerEdge y todos los datos de inspección generados en campo.",
            controls: [
                "Regla de Respaldos 3-2-1: 3 copias, 2 medios distintos (AWS S3 y disco WD externo), 1 copia off-site en caja fuerte.",
                "Backup automático diario a las 02:00 hrs hacia AWS S3 con retención de 90 días.",
                "Copia offline semanal en discos externos WD custodiados en caja fuerte física firmada con bitácora BCP-01.",
                "Simulacro de recuperación ante desastre (DRP) semestral con RTO objetivo de 4 horas y RPO de 24 horas."
            ],
            responsible: "Director General (Aprueba) · Responsable TI (Ejecuta) · Gerente Operaciones (Ejecuta)"
        },
        {
            code: "POL-09",
            name: "Gestión de Cambios de TI",
            control: "ISO/IEC 27002:2022 — Control A.8.32",
            color: "sky",
            objective: "Controlar y documentar todos los cambios significativos realizados a la infraestructura, sistemas y aplicaciones de ISL para minimizar el riesgo de interrupciones no planificadas.",
            scope: "Cualquier modificación en el servidor central, configuración de red, actualización de software, cambios en Active Directory o en servicios en la nube de ISL.",
            controls: [
                "Solicitud de Cambio (RFC) documentada en formulario IC-SGSI-CAM-03 y aprobada por Dirección antes de implementación.",
                "Pruebas obligatorias en entorno de staging antes de implementar cambios en producción.",
                "Ventana de cambios aprobada: Domingos 22:00–02:00 hrs para evitar afectación operativa.",
                "Plan de rollback documentado para cada cambio mayor, con responsable de ejecución identificado."
            ],
            responsible: "Director General (Aprueba) · Responsable TI (Ejecuta) · Gerente Operaciones (Consultado)"
        },
        {
            code: "POL-10",
            name: "Concientización y Capacitación en Seguridad",
            control: "ISO/IEC 27002:2022 — Control A.6.3",
            color: "pink",
            objective: "Desarrollar y mantener un programa de capacitación en seguridad de la información para todos los colaboradores de ISL, reduciendo el riesgo humano como vector de ataque principal.",
            scope: "Los 23 colaboradores de ISL, con especial énfasis en inspectores de campo y personal con acceso a sistemas críticos de información.",
            controls: [
                "Capacitación anual obligatoria con módulos de phishing, ingeniería social, uso seguro de dispositivos y políticas internas.",
                "Simulacro de phishing trimestral con reporte de tasas de clics para medir la madurez del equipo.",
                "Examen de comprensión post-capacitación con nota mínima aprobatoria de 80/100.",
                "Firmas de asistencia registradas en formulario IC-SGSI-CAP-01 archivadas por 3 años."
            ],
            responsible: "Director General (Aprueba) · Responsable TI (Ejecuta) · Gerente Operaciones (Ejecuta) · Supervisores (Ejecuta) · Inspectores (Ejecuta)"
        }
    ];

    const auditChecklist = [
        { id: "CHK-01", req: "¿Existe una Política de Seguridad aprobada por Dirección?", policy: "POL-10 / Cláusula 5.2", evidence: "Documento PSI-2026 firmado por Director General.", status: "C", obs: "PSI-2026 (ACT-INT-015) localizada en repositorio central. Aprobada en mayo 2026." },
        { id: "CHK-02", req: "¿Está definido y documentado el alcance del SGSI?", policy: "Cláusula 4.3", evidence: "Sección 3 del Manual del SGSI.", status: "C", obs: "Alcance documentado en Sección 3. Incluye la sede central y las operaciones técnicas externas." },
        { id: "CHK-03", req: "¿Existe un inventario completo de activos de información?", policy: "POL-04 / Control A.5.9", evidence: "Inventario ACT-INT-019 en repositorio.", status: "CP", obs: "Inventario documentado (40 activos). Sin embargo, el inventario físico semestral aún no ha sido ejecutado formalmente con evidencia registrada." },
        { id: "CHK-04", req: "¿Está implementado el MFA obligatorio en cuentas administrativas?", policy: "POL-01 / Control A.8.5", evidence: "Consola de AD + evidencia de YubiKey activas.", status: "NC", obs: "Riesgo crítico (RGS-01). Solo la cuenta del Responsable de TI cuenta con MFA activo. Las otras 2 cuentas administrativas acceden únicamente con contraseña simple." },
        { id: "CHK-05", req: "¿Existe evidencia documental del proceso de parches?", policy: "POL-03 / Control A.8.8", evidence: "Formularios IC-SGSI-INF-04 completados.", status: "NC", obs: "No hay evidencia de aplicación formal de parches. Las ventanas de mantenimiento de POL-03 se realizan sin registros formales. Formulario INF-04 vacío." },
        { id: "CHK-06", req: "¿Están configuradas las tablets de inspectores en MDM?", policy: "POL-05 / Control A.8.1", evidence: "Consola de Samsung Knox mostrando estado.", status: "CP", obs: "De las 6 tablets activas en campo, 4 tienen el agente MDM Knox activo y enrolado. 2 dispositivos operan sin agente activo. Cifrado BitLocker activo al 100%." },
        { id: "CHK-07", req: "¿Existe un programa de concientización ejecutado?", policy: "POL-10 / Control A.6.3", evidence: "Asistencia IC-SGSI-CAP-01 firmada + exámenes.", status: "CP", obs: "Capacitación general realizada en mayo 2026 (21 de 23 firmas). Dos inspectores en campo no asistieron por ausencia. El simulacro de phishing trimestral no se ha ejecutado." },
        { id: "CHK-08", req: "¿Están configurados los respaldos bajo la Regla 3-2-1?", policy: "POL-08 / Control A.8.13", evidence: "Logs automáticos + bitácora BCP-01 en Caja Fuerte.", status: "CP", obs: "Copia diaria en AWS activa. La copia offline semanal en discos externos WD (ACT-INT-009) tiene cumplimiento parcial (solo 2 bitácoras firmadas de 4 esperadas)." },
        { id: "CHK-11", req: "¿Existe clasificación de información con etiquetas en Microsoft 365?", policy: "POL-02 / Control A.5.12", evidence: "Capturas de panel de SharePoint y Purview.", status: "NC", obs: "No se han configurado etiquetas de sensibilidad ni políticas DLP en OneDrive. Los archivos técnicos confidenciales no presentan marcas ni restricciones DLP." },
        { id: "CHK-12", req: "¿Tiene el dominio inspeccionsl.com MFA activo en GoDaddy?", policy: "POL-06 / Control A.5.19", evidence: "Panel administrativo GoDaddy con MFA habilitado.", status: "NC", obs: "La cuenta de GoDaddy no tiene MFA activo. No hay alertas de renovación configuradas en el calendario de TI con 90 días de anticipación." },
        { id: "CHK-13", req: "¿Existe evaluación de seguridad de proveedores críticos?", policy: "POL-06 / Control A.5.19", evidence: "Formularios IC-SGSI-PROV-01 firmados.", status: "NC", obs: "No se ha completado ninguna evaluación de seguridad de proveedores para socios críticos (GoDaddy, AWS, Microsoft 365, Telmex)." },
        { id: "CHK-14", req: "¿Tiene acceso biométrico restringido el cuarto de servidores?", policy: "POL-03 / Control A.7.3", evidence: "Lector ZKTeco físico + bitácora de autorizados.", status: "C", obs: "Lector biométrico operativo. Acceso físicamente restringido a 2 personas (TI y Director General) y comprobado durante la visita." },
        { id: "CHK-15", req: "¿Existe una Declaración de Aplicabilidad (SoA) aprobada?", policy: "Cláusula 6.1.3", evidence: "SoA firmada en Sección 3.4 del SGSI.", status: "C", obs: "SoA completa y debidamente justificada. Excluye controles no aplicables al negocio (desarrollo de software y controles industriales)." }
    ];

    const nonConformities = [
        {
            id: "NC-01",
            type: "No Conformidad Mayor",
            policy: "POL-01: Gestión de Accesos e Identidades",
            requirement: "ISO/IEC 27001:2022 / ISO/IEC 27002:2022 Control 8.5 (Uso seguro de identidades y accesos administrativos). POL-01 exige MFA obligatorio para el 100% de accesos administrativos.",
            risk: "RGS-01: Acceso no autorizado a reportes confidenciales vía VPN/AD (Valor 25, EXTREMO)",
            evidence: "Verificación directa en la consola de Active Directory: de las 3 cuentas con privilegios de administrador del dominio, solo 1 (Responsable de TI) tiene MFA configurado con YubiKey 5C. Las otras 2 cuentas acceden solo con contraseña.",
            impact: "Un ataque de phishing que comprometa las credenciales de un administrador dejaría expuestos todos los datos de Inspección Certificada SL, sin factores de autenticación adicionales para frenar al atacante.",
            correction: "Comprar y entregar llaves físicas YubiKey 5C a los 2 administradores restantes y configurar la directiva en Active Directory para bloquear accesos sin biometría/MFA."
        },
        {
            id: "NC-02",
            type: "No Conformidad Mayor",
            policy: "POL-03: Seguridad de la Infraestructura Tecnológica",
            requirement: "ISO/IEC 27002:2022 Control 8.8 (Gestión de vulnerabilidades técnicas y parches de seguridad). Exige parchear vulnerabilidades críticas en un plazo máximo de 72 horas.",
            risk: "RGS-03: Explotación de vulnerabilidades por software desactualizado (Valor 15, MUY ALTO)",
            evidence: "El formulario IC-SGSI-INF-04 (Registro de Aplicación de Parches) no cuenta con ningún registro en los últimos 3 meses. El Responsable de TI admitió que las actualizaciones de parches se aplican de forma informal sin bitácora física.",
            impact: "Imposibilidad de demostrar cumplimiento ante auditorías externas y alto riesgo de exposición a exploits de CVEs conocidos no mitigados en el Servidor Dell PowerEdge.",
            correction: "Habilitar registros automáticos del WSUS y obligar al llenado semanal de la bitácora IC-SGSI-INF-04 tras la ventana de mantenimiento del domingo."
        },
        {
            id: "NC-03",
            type: "No Conformidad Mayor",
            policy: "POL-02: Clasificación y Protección de Datos",
            requirement: "ISO/IEC 27002:2022 Control A.5.12 (Clasificación de la información). La política interna POL-02 exige el marcado automático de planos y reportes técnicos como Confidencial.",
            risk: "RGS-05: Fuga de información confidencial en Microsoft 365 / OneDrive (Valor 12, ALTO)",
            evidence: "Se verificó la consola de Microsoft Purview en la suscripción Business Premium: no se han definido etiquetas de sensibilidad (Confidencial, Interno, Público) ni se han establecido reglas DLP para alertar de comparticiones externas.",
            impact: "Los inspectores pueden compartir planos de clientes industriales fuera de la red de ISL sin que se genere ninguna alerta de seguridad, violando los NDAs de los clientes.",
            correction: "Crear la directiva de clasificación en Microsoft Purview y forzar el uso de etiquetas DLP en archivos cargados en OneDrive."
        }
    ];

    return (
        <div className="flex flex-col gap-8">
            
            {/* Header Block Profesional (Estilo Actividad 18) */}
            <div className="bg-[#050914] border border-emerald-500/30 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                    <div className="lg:col-span-8 space-y-4">
                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 text-xs font-mono font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded">
                                INST: UPSLP
                            </span>
                            <span className="px-3 py-1 text-xs font-mono font-bold text-rose-300 bg-rose-500/10 border border-rose-500/30 rounded">
                                MATERIA: CNO V
                            </span>
                            <span className="px-3 py-1 text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded">
                                PR03: SGSI ISO 27001
                            </span>
                            <span className="px-3 py-1 text-xs font-mono font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded">
                                EQUIPO 1
                            </span>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl font-mono font-black text-white tracking-tight uppercase shadow-emerald-500/20 drop-shadow-lg">
                            Diseño e Implementación SGSI
                        </h2>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-4xl">
                            Proyecto formal de diseño y despliegue de un **Sistema de Gestión de Seguridad de la Información (SGSI)** basado en la norma internacional **ISO/IEC 27001:2022** en la empresa **Inspección Certificada SL (ISL)**. Salvaguardando la Confidencialidad, Integridad y Disponibilidad operativa ante amenazas físicas y lógicas.
                        </p>

                        <div className="border-t border-gray-800/80 pt-6 mt-6">
                            <h3 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2 mb-4">
                                <FaShieldAlt /> MIEMBROS DE DESARROLLO (EQUIPO 1)
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                {members.map((member, idx) => (
                                    <div key={idx} className="bg-black/40 border border-emerald-900/40 rounded-xl p-3 flex flex-col justify-between hover:border-emerald-500/40 hover:bg-emerald-950/10 transition-all duration-300 shadow-sm">
                                        <div className="font-mono text-xs text-white font-bold tracking-tight truncate">
                                            {member.name}
                                        </div>
                                        <div className="flex justify-between items-center mt-2 text-[10px] font-mono">
                                            <span className="text-gray-500">{member.id}</span>
                                            <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                                                {member.role}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 bg-[#0a0f1c]/80 border border-emerald-500/20 p-5 rounded-2xl flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-2xl rounded-full" />
                        <div>
                            <div className="flex items-center gap-3 text-emerald-400 mb-3">
                                <FaFilePdf className="text-2xl" />
                                <span className="font-mono text-xs font-bold uppercase tracking-wider">EXPEDIENTE COMPLETO</span>
                            </div>
                            <h4 className="text-white font-mono text-base font-bold">PR03-Equipo1.pdf</h4>
                            <div className="border-b border-gray-800 py-2 mt-2 flex justify-between font-mono text-[10px] text-gray-400">
                                <span>PÁGINAS: 170 págs</span>
                                <span>FORMATO: PDF-1.5</span>
                            </div>
                            <p className="text-gray-400 text-xs font-mono mt-3 leading-relaxed">
                                Contiene el Gap Analysis de 114 controles, análisis de impacto financiero de brechas de seguridad, matrices de riesgo completas y auditoría simulada.
                            </p>
                        </div>
                        <a
                            href={`${baseUrl}PR03.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 flex items-center justify-center gap-3 w-full py-4 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:text-white font-mono text-sm font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]"
                        >
                            <FaSearch className="text-sm" />
                            <span>DESCARGAR / LEER EXPEDIENTE</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Dashboard interactivo ISO 27001 */}
            <div className="bg-[#03060f]/90 border border-emerald-500/20 rounded-3xl overflow-hidden shadow-2xl">
                {/* Tabs de Navegación */}
                <div className="flex flex-wrap border-b border-gray-800 bg-[#060a16]">
                    {[
                        { id: 'general', label: '1. FICHA Y ALCANCE', icon: <FaBuilding /> },
                        { id: 'activos', label: '2. INVENTARIO DE ACTIVOS', icon: <FaServer /> },
                        { id: 'riesgos', label: '3. MATRIZ DE RIESGOS', icon: <FaExclamationTriangle /> },
                        { id: 'politicas', label: '4. POLÍTICAS Y RACI', icon: <FaBook /> },
                        { id: 'auditoria', label: '5. AUDITORÍA INTERNA', icon: <FaClipboardList /> }
                    ].map(tab => (
                        <button 
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-4 font-mono text-xs md:text-sm font-bold transition-all border-r border-gray-800/40 ${activeTab === tab.id ? 'text-emerald-400 border-b-2 border-emerald-500 bg-emerald-500/5' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
                        >
                            {tab.icon}
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                <div className="p-6 md:p-10 min-h-[550px]">
                    <AnimatePresence mode="wait">
                        
                        {/* Tab 1: General & Alcance */}
                        {activeTab === 'general' && (
                            <motion.div 
                                key="general"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-8"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                    <div className="lg:col-span-5 space-y-6">
                                        <div className="bg-[#0a0c16] border border-gray-800 rounded-2xl p-6">
                                            <h5 className="text-white font-mono font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-3">
                                                <FaBuilding className="text-emerald-400" /> FICHA DE LA INSTITUCIÓN
                                            </h5>
                                            <div className="space-y-3 text-xs md:text-sm">
                                                {[
                                                    { label: "Razón Social", val: companyDetails.name },
                                                    { label: "Nombre Comercial", val: companyDetails.commercialName },
                                                    { label: "Giro Comercial", val: companyDetails.giro },
                                                    { label: "Ramo", val: companyDetails.ramo },
                                                    { label: "Ubicación Sede", val: companyDetails.location },
                                                    { label: "Presencia Digital", val: companyDetails.digital },
                                                    { label: "Tamaño Plantilla", val: companyDetails.size }
                                                ].map((item, idx) => (
                                                    <div key={idx} className="flex flex-col sm:flex-row justify-between py-1.5 border-b border-gray-800/40">
                                                        <span className="text-emerald-500/80 font-mono text-xs">{item.label}:</span>
                                                        <span className="text-gray-300 text-right sm:max-w-[70%]">{item.val}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-7 space-y-6">
                                        <div className="bg-[#0a0c16] border border-gray-800 rounded-2xl p-6">
                                            <h5 className="text-white font-mono font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-3">
                                                <FaHistory className="text-emerald-400" /> HISTORIA Y PROPÓSITO
                                            </h5>
                                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                                                {companyDetails.history}
                                            </p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                                <div className="bg-black/30 border border-emerald-950 p-4 rounded-xl">
                                                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold mb-2">
                                                        <FaBullseye /> MISIÓN
                                                    </div>
                                                    <p className="text-gray-400 text-[11px] leading-relaxed">{companyDetails.mision}</p>
                                                </div>
                                                <div className="bg-black/30 border border-emerald-950 p-4 rounded-xl">
                                                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold mb-2">
                                                        <FaSearch /> VISIÓN
                                                    </div>
                                                    <p className="text-gray-400 text-[11px] leading-relaxed">{companyDetails.vision}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                    <div className="lg:col-span-6 bg-[#0a0c16] border border-gray-800 rounded-2xl p-6 space-y-4">
                                        <h5 className="text-white font-mono font-bold flex items-center gap-2 border-b border-gray-800 pb-3">
                                            <FaNetworkWired className="text-emerald-400" /> ALCANCE FÍSICO Y LÓGICO (SECCIÓN 3)
                                        </h5>
                                        <div className="space-y-4 text-xs md:text-sm text-gray-400">
                                            <div>
                                                <h6 className="text-white font-bold mb-1">Límites del Lugar Físico e Infraestructura Tecnológica:</h6>
                                                <p className="leading-relaxed">
                                                    El SGSI es aplicable a todas las actividades administrativas, operativas e infraestructura de red gestionadas desde la sede central de **San Luis Potosí**. Incluye servidores locales, equipos de red y el cuarto de servidores físico.
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className="text-white font-bold mb-1">Nota sobre Operaciones Externas (Campo y Remoto):</h6>
                                                <p className="leading-relaxed">
                                                    Aunque la inspección se realiza en plantas industriales de los clientes, el alcance cubre la protección de los datos de calidad en campo. Incluye el uso de **Samsung Galaxy Tablets**, autenticación remota vía **VPN IPsec** y la transmisión cifrada de los planos e informes técnicos confidenciales del cliente.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-6 bg-[#0a0c16] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between">
                                        <div>
                                            <h5 className="text-white font-mono font-bold flex items-center gap-2 border-b border-gray-800 pb-3">
                                                <FaShieldAlt className="text-emerald-400" /> DIAGRAMA DE TOPOLOGÍA DE SEGURIDAD (ISL)
                                            </h5>
                                            <p className="text-gray-400 text-xs font-mono mt-3 leading-relaxed">
                                                Visualización gráfica de la infraestructura y flujo de datos seguro implementado para los inspectores en campo conectándose a los servidores de Inspección Certificada SL mediante túneles cifrados.
                                            </p>
                                        </div>
                                        <div className="mt-4 border border-gray-800 rounded-xl overflow-hidden bg-black/60 relative group cursor-zoom-in">
                                            <img 
                                                src={`${baseUrl}security_topology.png`} 
                                                alt="Security Topology Map Inspección Certificada SL" 
                                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="px-3 py-1.5 bg-[#050914] border border-emerald-500/30 text-emerald-400 font-mono text-xs rounded">VER DIAGRAMA EN EXPEDIENTE</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Tab 2: Inventario de Activos */}
                        {activeTab === 'activos' && (
                            <motion.div 
                                key="activos"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-6"
                            >
                                <div className="bg-[#0a0c16] border border-gray-800 rounded-2xl p-6">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-800 pb-4 mb-6">
                                        <div>
                                            <h5 className="text-white font-mono font-bold flex items-center gap-2">
                                                <FaServer className="text-emerald-400" /> GESTIÓN Y CLASIFICACIÓN DE ACTIVOS (SECCIÓN 7)
                                            </h5>
                                            <p className="text-gray-400 text-xs font-mono mt-1">
                                                Inventario depurado de activos críticos según las escalas de Confidencialidad, Integridad y Disponibilidad (CIA).
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="px-2 py-1 bg-red-500/10 text-red-400 text-[10px] font-mono border border-red-500/20 rounded">C = Confidencialidad</span>
                                            <span className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] font-mono border border-green-500/20 rounded">I = Integridad</span>
                                            <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-mono border border-blue-500/20 rounded">D = Disponibilidad</span>
                                        </div>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-xs md:text-sm text-gray-300">
                                            <thead className="bg-[#05060a] text-xs uppercase font-mono text-emerald-400">
                                                <tr>
                                                    <th className="px-4 py-3 border-b border-gray-800 rounded-tl-lg">Código</th>
                                                    <th className="px-4 py-3 border-b border-gray-800">Nombre del Activo</th>
                                                    <th className="px-4 py-3 border-b border-gray-800">Clase</th>
                                                    <th className="px-4 py-3 border-b border-gray-800">Custodio</th>
                                                    <th className="px-4 py-3 border-b border-gray-800 text-center">Niveles CIA</th>
                                                    <th className="px-4 py-3 border-b border-gray-800 text-center rounded-tr-lg">Criticidad</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-800/60">
                                                {assets.map((asset) => (
                                                    <tr key={asset.id} className="hover:bg-emerald-500/5 transition-colors group">
                                                        <td className="px-4 py-4 font-mono font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">{asset.id}</td>
                                                        <td className="px-4 py-4">
                                                            <span className="font-bold text-white block">{asset.name}</span>
                                                            <span className="text-[10px] text-gray-500 block font-mono mt-0.5">{asset.desc}</span>
                                                        </td>
                                                        <td className="px-4 py-4 text-xs font-mono text-gray-400">{asset.type}</td>
                                                        <td className="px-4 py-4 text-xs text-gray-400">{asset.owner}</td>
                                                        <td className="px-4 py-4 text-center">
                                                            <div className="flex justify-center gap-1 font-mono text-[9px] font-bold">
                                                                <span className={`w-10 py-0.5 rounded text-center ${asset.c === 'Alto' ? 'bg-red-950/80 text-red-400 border border-red-900/30' : 'bg-gray-800 text-gray-400'}`}>C: {asset.c}</span>
                                                                <span className={`w-10 py-0.5 rounded text-center ${asset.i === 'Alto' ? 'bg-green-950/80 text-green-400 border border-green-900/30' : 'bg-gray-800 text-gray-400'}`}>I: {asset.i}</span>
                                                                <span className={`w-10 py-0.5 rounded text-center ${asset.d === 'Alto' ? 'bg-blue-950/80 text-blue-400 border border-blue-900/30' : 'bg-gray-800 text-gray-400'}`}>D: {asset.d}</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-center">
                                                            <span className={`px-2 py-1 rounded text-[10px] font-mono font-bold tracking-tight ${
                                                                asset.value === 'Crítico' 
                                                                    ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' 
                                                                    : asset.value === 'Alto' 
                                                                        ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' 
                                                                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                                            }`}>
                                                                {asset.value}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Tab 3: Evaluación de Riesgos */}
                        {activeTab === 'riesgos' && (
                            <motion.div 
                                key="riesgos"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex flex-col gap-8"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div className="bg-[#0a0c16] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between">
                                        <div>
                                            <h5 className="text-white font-mono font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-3">
                                                <FaExclamationTriangle className="text-rose-500 animate-pulse" /> MATRIZ DE CALOR DE RIESGOS (HEATMAP 5x5)
                                            </h5>
                                            <p className="text-gray-400 text-xs md:text-sm mb-6 leading-relaxed">
                                                Cuadrícula de evaluación cuantitativa según la norma **ISO/IEC 27005:2022**. Haz clic sobre las celdas marcadas para desplegar los detalles y planes de mitigación correspondientes.
                                            </p>
                                        </div>
                                        
                                        <div className="aspect-video bg-[#05060a] border border-gray-800 rounded-xl p-4 flex flex-col justify-center">
                                            <div className="flex text-[10px] text-gray-500 font-mono mb-2 pl-8">
                                                <div className="flex-1 text-center">Impacto 1</div>
                                                <div className="flex-1 text-center">2</div>
                                                <div className="flex-1 text-center">3</div>
                                                <div className="flex-1 text-center">4</div>
                                                <div className="flex-1 text-center">5</div>
                                            </div>
                                            <div className="flex-1 flex flex-col gap-1">
                                                {[5, 4, 3, 2, 1].map((prob, i) => (
                                                    <div key={i} className="flex-1 flex items-stretch gap-1">
                                                        <div className="w-8 flex items-center justify-center text-[10px] text-gray-500 font-mono">{prob}</div>
                                                        {[1, 2, 3, 4, 5].map((imp, j) => {
                                                            const val = prob * imp;
                                                            let bgClass = "bg-green-500/10 border-green-500/20";
                                                            let riskObject = null;
                                                            
                                                            if (val >= 20) bgClass = "bg-rose-600/20 border-rose-500/40 hover:bg-rose-500/40";
                                                            else if (val >= 12) bgClass = "bg-orange-500/20 border-orange-500/40 hover:bg-orange-500/40";
                                                            else if (val >= 8) bgClass = "bg-amber-500/20 border-amber-500/40 hover:bg-amber-500/40";
                                                            else if (val >= 4) bgClass = "bg-yellow-500/10 border-yellow-500/30 hover:bg-yellow-500/30";
 
                                                             if (prob === 5 && imp === 5) riskObject = risks.find(r => r.id === "RGS-01");
                                                             if (prob === 4 && imp === 5) riskObject = risks.find(r => r.id === "RGS-04");
                                                             if (prob === 4 && imp === 4) riskObject = risks.find(r => r.id === "RGS-02");
                                                             if (prob === 5 && imp === 3) riskObject = risks.find(r => r.id === "RGS-03");
                                                             if (prob === 3 && imp === 4) riskObject = risks.find(r => r.id === "RGS-05"); // simplifies RGS-05 and RGS-07
 
                                                            return (
                                                                <button 
                                                                    key={j} 
                                                                    disabled={!riskObject}
                                                                    onClick={() => setFocusedRisk(riskObject)}
                                                                    className={`flex-1 border rounded flex items-center justify-center ${bgClass} relative group transition-all duration-300 ${riskObject ? 'cursor-pointer hover:scale-105 shadow-md shadow-black/20' : 'cursor-not-allowed'}`}
                                                                >
                                                                    {riskObject && (
                                                                        <span className="text-[10px] font-black font-mono text-white/90 drop-shadow-md">
                                                                            {riskObject.id}
                                                                        </span>
                                                                    )}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="text-center text-[10px] text-gray-500 font-mono mt-3">Probabilidad (Y) vs Impacto (X)</div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-[#0a0c16] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between">
                                        <div>
                                            <h5 className="text-white font-mono font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-3">
                                                <FaLock className="text-emerald-500" /> DETALLE DE MITIGACIÓN SELECCIONADA
                                            </h5>
                                            
                                            {focusedRisk ? (
                                                <motion.div 
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className="space-y-4 font-mono text-xs md:text-sm text-gray-300"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <span className="px-2 py-0.5 bg-rose-600/10 border border-rose-500/30 text-rose-400 font-bold rounded">
                                                            {focusedRisk.id}
                                                        </span>
                                                        <span className="text-[10px] font-bold text-rose-400">
                                                            Prob: {focusedRisk.prob} x Imp: {focusedRisk.imp} = {focusedRisk.score} ({focusedRisk.level})
                                                        </span>
                                                    </div>
                                                    <h6 className="text-white font-bold text-sm font-sans">{focusedRisk.name}</h6>
                                                    <p className="text-gray-400 text-xs font-sans leading-relaxed border-l border-gray-800 pl-3">
                                                        {focusedRisk.desc}
                                                    </p>
                                                    <div className="py-2 border-y border-gray-800/60 text-[10px] text-gray-500">
                                                        <strong>Activos Afectados:</strong> {focusedRisk.asset}
                                                    </div>
                                                    <div className="bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 p-4 rounded-xl font-sans text-xs shadow-md">
                                                        <strong className="font-mono text-[10px] text-emerald-400 block mb-1">PLAN DE TRATAMIENTO DE RIESGO:</strong>
                                                        {focusedRisk.treatment}
                                                    </div>
                                                    <button 
                                                        onClick={() => setFocusedRisk(null)}
                                                        className="text-xs text-gray-500 hover:text-white flex items-center gap-1.5 transition-colors"
                                                    >
                                                        Restaurar vista por defecto
                                                    </button>
                                                </motion.div>
                                            ) : (
                                                <div className="flex flex-col items-center justify-center h-64 text-center">
                                                    <FaInfoCircle className="text-gray-600 text-3xl mb-3 animate-pulse" />
                                                    <p className="text-gray-500 font-mono text-xs max-w-xs">
                                                        Haz clic en cualquier celda de riesgo numerada en el Heatmap (ej. RGS-01, RGS-04) para ver su plan de tratamiento y activos vinculados.
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#0a0c16] border border-gray-800 rounded-2xl p-6">
                                    <h5 className="text-white font-mono font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-3">
                                        <FaListAlt className="text-emerald-400" /> PLAN COMPLETO DE MITIGACIÓN DE RIESGOS
                                    </h5>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {risks.map((risk) => (
                                            <div key={risk.id} className="bg-black/40 border border-gray-800 hover:border-emerald-500/30 p-4 rounded-xl relative overflow-hidden group transition-all duration-300">
                                                <div className={`absolute top-0 bottom-0 left-0 w-1 ${
                                                    risk.score >= 20 ? 'bg-rose-500' : 'bg-orange-500'
                                                }`} />
                                                <div className="flex justify-between items-start mb-2 text-[10px] font-mono">
                                                    <span className="text-emerald-400 font-bold">{risk.id}</span>
                                                    <span className={`font-bold px-1.5 rounded ${
                                                        risk.score >= 20 ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                                                    }`}>{risk.level} ({risk.score})</span>
                                                </div>
                                                <h6 className="text-white font-bold text-xs mb-2 truncate">{risk.name}</h6>
                                                <p className="text-[11px] text-gray-500 leading-relaxed mb-3 line-clamp-2">{risk.desc}</p>
                                                <div className="bg-emerald-950/10 border border-emerald-950 text-emerald-400/90 text-[10px] p-2.5 rounded-lg leading-relaxed">
                                                    <strong>Tratamiento:</strong> {risk.treatment}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Tab 4: Políticas & RACI */}
                        {activeTab === 'politicas' && (
                            <motion.div 
                                key="politicas"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-8"
                            >
                                {/* RACI Overview */}
                                <div className="bg-[#0a0c16] border border-gray-800 rounded-2xl p-6 md:p-8">
                                    <div className="border-b border-gray-800 pb-5 mb-6">
                                        <h5 className="text-white font-mono text-lg font-bold flex items-center gap-3">
                                            <FaBook className="text-emerald-400 text-xl" /> MATRIZ RACI — POLÍTICAS DE SEGURIDAD (SECCIÓN 8.3)
                                        </h5>
                                        <p className="text-gray-400 text-sm font-mono mt-2 leading-relaxed">
                                            Asignación formal de responsabilidades para las 10 directivas críticas del SGSI implementadas en <strong className="text-white">Inspección Certificada SL (ISL)</strong>. Cada rol tiene una función clara: Accountable aprueba, Responsible ejecuta, Consulted opina e Informed recibe notificación.
                                        </p>
                                    </div>

                                    {/* Role legend */}
                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                                        {raciMatrix.roles.map(role => (
                                            <div key={role.code} className="bg-black/30 border border-gray-800 rounded-xl p-3 text-center">
                                                <span className="block text-emerald-400 font-mono font-black text-lg">{role.code}</span>
                                                <span className="text-gray-400 text-xs mt-1 block">{role.label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="w-full text-center text-sm text-gray-300">
                                            <thead className="bg-[#05060a] text-sm font-mono text-emerald-400">
                                                <tr>
                                                    <th className="px-5 py-4 border-b border-gray-800 text-left rounded-tl-lg">Política del SGSI</th>
                                                    <th className="px-5 py-4 border-b border-gray-800 text-left">Control ISO 27002</th>
                                                    {raciMatrix.roles.map(role => (
                                                        <th key={role.code} className="px-3 py-4 border-b border-gray-800" title={role.label}>{role.code}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-800/60 font-mono">
                                                {raciMatrix.policies.map((p) => (
                                                    <tr key={p.code} className="hover:bg-emerald-500/5 transition-colors group">
                                                        <td className="px-5 py-4 text-left font-bold text-white text-sm">{p.name}</td>
                                                        <td className="px-5 py-4 text-left text-gray-400 text-xs">{p.control}</td>
                                                        {raciMatrix.roles.map(role => {
                                                            const roleVal = p.raci[role.code];
                                                            let bgStyle = "text-gray-600";
                                                            if (roleVal === "A") bgStyle = "text-rose-400 font-bold bg-rose-500/10 border border-rose-500/20";
                                                            else if (roleVal === "R") bgStyle = "text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20";
                                                            else if (roleVal === "C") bgStyle = "text-cyan-400 font-bold bg-cyan-500/10 border border-cyan-500/20";
                                                            else if (roleVal === "I") bgStyle = "text-amber-400 font-bold bg-amber-500/10 border border-amber-500/20";
                                                            return (
                                                                <td key={role.code} className="px-3 py-4 text-center">
                                                                    <span className={`inline-block w-8 py-1 rounded text-sm ${bgStyle}`}>{roleVal}</span>
                                                                </td>
                                                            );
                                                        })}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 p-5 bg-black/20 border border-gray-800 rounded-xl">
                                        {[
                                            { code: 'A', label: 'Accountable (Aprueba y responde)', bg: 'bg-rose-500/10 border-rose-500/20 text-rose-400' },
                                            { code: 'R', label: 'Responsible (Ejecuta la tarea)', bg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' },
                                            { code: 'C', label: 'Consulted (Aporta criterio)', bg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' },
                                            { code: 'I', label: 'Informed (Recibe notificación)', bg: 'bg-amber-500/10 border-amber-500/20 text-amber-400' },
                                        ].map(item => (
                                            <div key={item.code} className="flex items-center gap-3">
                                                <span className={`w-8 h-8 flex items-center justify-center border rounded text-sm font-black font-mono ${item.bg}`}>{item.code}</span>
                                                <span className="text-gray-300 text-sm">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Detailed Policy Cards */}
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <FaShieldAlt className="text-emerald-400 text-xl" />
                                        <h5 className="text-white font-mono text-lg font-bold">DESGLOSE DETALLADO DE LAS 10 POLÍTICAS DEL SGSI</h5>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                        Cada política de seguridad de ISL define un objetivo claro, el alcance de aplicación, los controles específicos que implementa y los responsables asignados. Están alineadas directamente con los controles del <strong className="text-white">Anexo A de la norma ISO/IEC 27001:2022</strong>.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {policiesDetail.map((pol, idx) => {
                                            const colorMap = {
                                                emerald: { border: 'border-emerald-500/30', header: 'bg-emerald-500/10', badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30', accent: 'text-emerald-400', dot: 'bg-emerald-500' },
                                                cyan:    { border: 'border-cyan-500/30',    header: 'bg-cyan-500/10',    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',       accent: 'text-cyan-400',    dot: 'bg-cyan-500' },
                                                amber:   { border: 'border-amber-500/30',   header: 'bg-amber-500/10',   badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',    accent: 'text-amber-400',   dot: 'bg-amber-500' },
                                                violet:  { border: 'border-violet-500/30',  header: 'bg-violet-500/10',  badge: 'bg-violet-500/10 text-violet-300 border-violet-500/30', accent: 'text-violet-400',  dot: 'bg-violet-500' },
                                                rose:    { border: 'border-rose-500/30',    header: 'bg-rose-500/10',    badge: 'bg-rose-500/10 text-rose-300 border-rose-500/30',       accent: 'text-rose-400',    dot: 'bg-rose-500' },
                                                indigo:  { border: 'border-indigo-500/30',  header: 'bg-indigo-500/10',  badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30', accent: 'text-indigo-400',  dot: 'bg-indigo-500' },
                                                orange:  { border: 'border-orange-500/30',  header: 'bg-orange-500/10',  badge: 'bg-orange-500/10 text-orange-300 border-orange-500/30', accent: 'text-orange-400',  dot: 'bg-orange-500' },
                                                teal:    { border: 'border-teal-500/30',    header: 'bg-teal-500/10',    badge: 'bg-teal-500/10 text-teal-300 border-teal-500/30',       accent: 'text-teal-400',    dot: 'bg-teal-500' },
                                                sky:     { border: 'border-sky-500/30',     header: 'bg-sky-500/10',     badge: 'bg-sky-500/10 text-sky-300 border-sky-500/30',          accent: 'text-sky-400',     dot: 'bg-sky-500' },
                                                pink:    { border: 'border-pink-500/30',    header: 'bg-pink-500/10',    badge: 'bg-pink-500/10 text-pink-300 border-pink-500/30',       accent: 'text-pink-400',    dot: 'bg-pink-500' },
                                            };
                                            const c = colorMap[pol.color] || colorMap.emerald;
                                            return (
                                                <div key={idx} className={`bg-[#0a0c16] border ${c.border} rounded-2xl overflow-hidden hover:shadow-lg transition-shadow`}>
                                                    {/* Card Header */}
                                                    <div className={`${c.header} px-6 py-4 border-b border-gray-800/60 flex justify-between items-start`}>
                                                        <div>
                                                            <span className={`inline-block px-3 py-1 text-xs font-mono font-bold rounded border ${c.badge} mb-2`}>{pol.code}</span>
                                                            <h6 className="text-white font-bold text-base leading-snug">{pol.name}</h6>
                                                        </div>
                                                        <span className={`text-[11px] font-mono ${c.accent} text-right max-w-[140px] leading-tight`}>{pol.control}</span>
                                                    </div>
                                                    {/* Card Body */}
                                                    <div className="px-6 py-5 space-y-5">
                                                        {/* Objetivo */}
                                                        <div>
                                                            <span className={`text-xs font-mono font-bold uppercase tracking-widest ${c.accent} flex items-center gap-2 mb-2`}>
                                                                <FaBullseye className="text-xs" /> Objetivo
                                                            </span>
                                                            <p className="text-gray-300 text-sm leading-relaxed">{pol.objective}</p>
                                                        </div>
                                                        {/* Alcance */}
                                                        <div>
                                                            <span className={`text-xs font-mono font-bold uppercase tracking-widest ${c.accent} flex items-center gap-2 mb-2`}>
                                                                <FaNetworkWired className="text-xs" /> Alcance
                                                            </span>
                                                            <p className="text-gray-400 text-sm leading-relaxed">{pol.scope}</p>
                                                        </div>
                                                        {/* Controls */}
                                                        <div>
                                                            <span className={`text-xs font-mono font-bold uppercase tracking-widest ${c.accent} flex items-center gap-2 mb-3`}>
                                                                <FaCheckCircle className="text-xs" /> Controles Implementados
                                                            </span>
                                                            <ul className="space-y-2">
                                                                {pol.controls.map((ctrl, ci) => (
                                                                    <li key={ci} className="flex items-start gap-3">
                                                                        <span className={`mt-1.5 w-2 h-2 rounded-full ${c.dot} flex-shrink-0`} />
                                                                        <span className="text-gray-300 text-sm leading-relaxed">{ctrl}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        {/* Responsible */}
                                                        <div className={`border-t border-gray-800/60 pt-4`}>
                                                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2 mb-2">
                                                                <FaUsers className="text-xs" /> Responsables
                                                            </span>
                                                            <p className={`text-xs leading-relaxed ${c.accent}`}>{pol.responsible}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Tab 5: Auditoría Interna */}
                        {activeTab === 'auditoria' && (
                            <motion.div 
                                key="auditoria"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-8"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                    <div className="lg:col-span-5 bg-[#0a0c16] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between">
                                        <div>
                                            <h5 className="text-white font-mono font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-3">
                                                <FaClipboardList className="text-emerald-400" /> RESUMEN DE CUMPLIMIENTO (AUDITORÍA 2026)
                                            </h5>
                                            <p className="text-gray-400 text-xs font-mono mt-1 leading-relaxed">
                                                Resultados porcentuales del peritaje interno realizado al SGSI en Agosto 2026.
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-3 gap-3 my-6 text-center font-mono">
                                            <div className="bg-green-500/10 border border-green-500/20 p-3 rounded-xl">
                                                <span className="block text-xl font-bold text-green-400">26.7%</span>
                                                <span className="text-[9px] text-gray-500 uppercase">Cumple</span>
                                            </div>
                                            <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl">
                                                <span className="block text-xl font-bold text-amber-400">40.0%</span>
                                                <span className="text-[9px] text-gray-500 uppercase">Parcial</span>
                                            </div>
                                            <div className="bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl">
                                                <span className="block text-xl font-bold text-rose-400">33.3%</span>
                                                <span className="text-[9px] text-gray-500 uppercase">No Cumple</span>
                                            </div>
                                        </div>
                                        <div className="border border-gray-800 rounded-xl overflow-hidden bg-black/60 relative group">
                                            <img 
                                                src={`${baseUrl}compliance_wheel.png`} 
                                                alt="ISO 27001 Compliance Status Wheel" 
                                                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="px-3 py-1.5 bg-[#050914] border border-emerald-500/30 text-emerald-400 font-mono text-xs rounded">VER AUDITORÍA DETALLADA</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-7 bg-[#0a0c16] border border-gray-800 rounded-2xl p-6">
                                        <h5 className="text-white font-mono font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-3">
                                            <FaExclamationTriangle className="text-rose-500 animate-pulse" /> NO CONFORMIDADES MAYORES (HALLAZGOS CLAVE)
                                        </h5>
                                        <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                                            {nonConformities.map((nc) => (
                                                <div key={nc.id} className="bg-black/50 border border-rose-950/60 p-4 rounded-xl relative overflow-hidden">
                                                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-rose-600" />
                                                    <div className="flex justify-between items-start mb-2 font-mono text-[10px]">
                                                        <span className="text-rose-400 font-bold">{nc.id} // {nc.type}</span>
                                                        <span className="text-gray-500">{nc.policy}</span>
                                                    </div>
                                                    <p className="text-xs text-white font-bold leading-relaxed mb-2">{nc.requirement}</p>
                                                    <div className="space-y-2 text-[11px] leading-relaxed">
                                                        <div><span className="text-rose-400/90 font-bold">Evidencia:</span> <span className="text-gray-400">{nc.evidence}</span></div>
                                                        <div className="bg-rose-950/10 border border-rose-950/40 p-2 rounded text-rose-300">
                                                            <strong>Mitigación Recomendada:</strong> {nc.correction}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#0a0c16] border border-gray-800 rounded-2xl p-6">
                                    <h5 className="text-white font-mono font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-3">
                                        <FaCheckSquare className="text-emerald-400" /> CHECKLIST VERIFICACIÓN DE CONTROLES (AUD-01)
                                    </h5>
                                    <p className="text-gray-400 text-xs md:text-sm mb-6 leading-relaxed">
                                        Evaluación puntual basada en el Anexo A de la norma ISO/IEC 27001:2022. Haz clic sobre cualquier control para ver los detalles del hallazgo.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                        <div className="md:col-span-6 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
                                            <div className="space-y-2">
                                                {auditChecklist.map((chk) => (
                                                    <button
                                                        key={chk.id}
                                                        onClick={() => setSelectedAuditChk(chk)}
                                                        className={`w-full text-left p-3 rounded-lg border font-mono text-xs flex justify-between items-center transition-all ${
                                                            selectedAuditChk?.id === chk.id
                                                                ? 'bg-emerald-500/10 border-emerald-500/40 shadow-sm shadow-emerald-500/10'
                                                                : 'bg-black/30 border-gray-800/80 hover:border-gray-700'
                                                        }`}
                                                    >
                                                        <div className="truncate max-w-[80%]">
                                                            <span className="text-emerald-400 font-bold mr-2">{chk.id}</span>
                                                            <span className="text-white">{chk.req}</span>
                                                        </div>
                                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                                            chk.status === 'C'
                                                                ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                                                : chk.status === 'CP'
                                                                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                                                    : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                                                        }`}>
                                                            {chk.status}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="md:col-span-6 bg-black/40 border border-gray-800 rounded-xl p-4 flex flex-col justify-between">
                                            {selectedAuditChk ? (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="space-y-4 text-xs font-mono text-gray-300"
                                                >
                                                    <div className="flex justify-between items-center pb-2 border-b border-gray-800/60">
                                                        <span className="text-emerald-400 font-bold text-sm">{selectedAuditChk.id} // DETALLE</span>
                                                        <span className={`px-2 py-0.5 rounded font-bold ${
                                                            selectedAuditChk.status === 'C' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : selectedAuditChk.status === 'CP' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                                                        }`}>
                                                            RESULTADO: {selectedAuditChk.status === 'C' ? 'Cumple' : selectedAuditChk.status === 'CP' ? 'Cumplimiento Parcial' : 'No Cumple'}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-500 block mb-0.5">Control / Requisito:</span>
                                                        <p className="text-white font-sans text-xs">{selectedAuditChk.req}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-500 block mb-0.5">Política / Anexo A:</span>
                                                        <p className="text-white text-xs">{selectedAuditChk.policy}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-500 block mb-0.5">Evidencia Solicitada:</span>
                                                        <p className="text-gray-400 font-sans text-xs">{selectedAuditChk.evidence}</p>
                                                    </div>
                                                    <div className="bg-black/80 border border-gray-800/60 p-3 rounded-lg">
                                                        <span className="text-emerald-400 font-bold block mb-1">Observaciones del Auditor:</span>
                                                        <p className="text-gray-300 font-sans text-xs leading-relaxed">{selectedAuditChk.obs}</p>
                                                    </div>
                                                </motion.div>
                                            ) : (
                                                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                                                    <FaClipboardList className="text-gray-700 text-3xl mb-2 animate-bounce" />
                                                    <p className="text-gray-500 font-mono text-xs max-w-xs">
                                                        Selecciona cualquier control de la lista izquierda para ver la evidencia física revisada por el auditor y sus comentarios de control detallados.
                                                    </p>
                                                </div>
                                            )}
                                        </div>
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

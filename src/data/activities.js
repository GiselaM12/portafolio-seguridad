export const activities = [
  {
    id: 1,
    title: "ACTIVIDAD 01 - Análisis del Ciberataque a Equifax (2017)",
    description: "Investigación detallada sobre el incidente de Equifax, analizando la vulnerabilidad CVE-2017-5638, impacto financiero y fallas en el cumplimiento de normativas (ISO 27001, NIST, GDPR).",
    date: "2024-02-10",
    tags: ["Equifax", "CVE-2017-5638", "Análisis Forense", "ISO 27001", "NIST"],
    content: `
      <h2>Introducción</h2>
      <p>El presente reporte documenta el ciberataque sufrido por <strong>Equifax en 2017</strong>, considerado uno de los incidentes de ex-filtración masiva más graves en el sector financiero. El ataque fue posible mediante la explotación de la vulnerabilidad <strong>CVE-2017-5638 en Apache Struts</strong>, la cual permitió la ejecución remota de código (RCE) debido a la omisión de un parche de seguridad disponible meses antes del incidente.</p>
      <p>La brecha expuso deficiencias críticas en la gestión de activos y la visibilidad operativa, destacando el vencimiento de certificados SSL que impidieron la detección del tráfico malicioso durante 76 días. Con un impacto que afectó a 147.5 millones de víctimas y resultó en un acuerdo judicial de $1.4 mil millones de USD.</p>
      <p>Este estudio tiene el propósito de evaluar las consecuencias bajo el modelo CIA (Confidencialidad, Integridad y Disponibilidad) para comprender la relación entre la ciberseguridad y la sostenibilidad organizacional.</p>

      <h2>Línea de Tiempo (Cronología Detallada)</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse border border-gray-700 mb-6">
            <thead class="bg-violet-900/30 text-violet-300">
                <tr>
                    <th class="p-3 border border-gray-700">Fecha / Hora</th>
                    <th class="p-3 border border-gray-700">Evento</th>
                </tr>
            </thead>
            <tbody class="text-sm">
                <tr><td class="p-2 border border-gray-700 font-mono text-xs">07/Mar/2017 10:00</td><td class="p-2 border border-gray-700">DHS emite alerta crítica sobre vuln. CVE-2017-5638 en Apache Struts.</td></tr>
                <tr><td class="p-2 border border-gray-700 font-mono text-xs">08/Mar/2017 09:00</td><td class="p-2 border border-gray-700">Seguridad de Equifax clasifica el riesgo como "Inminente y Crítico".</td></tr>
                <tr><td class="p-2 border border-gray-700 font-mono text-xs">09/Mar/2017 08:30</td><td class="p-2 border border-gray-700">Orden interna de aplicar parche en 48 horas.</td></tr>
                <tr><td class="p-2 border border-gray-700 font-mono text-xs">10/Mar/2017 15:00</td><td class="p-2 border border-gray-700">Escaneo de vulnerabilidades fallido: no identifica el portal de disputas por config. errónea.</td></tr>
                <tr><td class="p-2 border border-gray-700 font-mono text-xs">12/Mar/2017 00:00</td><td class="p-2 border border-gray-700">Vence plazo de parcheo. El servidor queda expuesto en puerto 443.</td></tr>
                <tr><td class="p-2 border border-gray-700 font-mono text-xs">13/May/2017 21:15</td><td class="p-2 border border-gray-700 text-red-400"><strong>Intrusión inicial (RCE exitoso).</strong></td></tr>
                <tr><td class="p-2 border border-gray-700 font-mono text-xs">13/May/2017 23:50</td><td class="p-2 border border-gray-700">Instalación de Web Shell (puerta trasera) para persistencia.</td></tr>
                <tr><td class="p-2 border border-gray-700 font-mono text-xs">15/May/2017 11:20</td><td class="p-2 border border-gray-700">Atacantes encuentran credenciales de BD en texto plano.</td></tr>
                <tr><td class="p-2 border border-gray-700 font-mono text-xs">01/Jun/2017</td><td class="p-2 border border-gray-700">Comienza extracción masiva de PII (5M registros/día).</td></tr>
                <tr><td class="p-2 border border-gray-700 font-mono text-xs">29/Jul/2017 10:15</td><td class="p-2 border border-gray-700 text-green-400"><strong>Detección del incidente: tráfico sospechoso detectado.</strong></td></tr>
                <tr><td class="p-2 border border-gray-700 font-mono text-xs">29/Jul/2017 11:30</td><td class="p-2 border border-gray-700">Se descubre cert. SSL de monitoreo vencido hace 10 meses.</td></tr>
                <tr><td class="p-2 border border-gray-700 font-mono text-xs">30/Jul/2017 09:00</td><td class="p-2 border border-gray-700">Se activa Protocolo de Respuesta y se contrata a Mandiant.</td></tr>
            </tbody>
        </table>
      </div>

      <h2>Análisis Técnico y Estratégico</h2>
      <p>Tras la reconstrucción de los hechos, se concluye que la intrusión se debió a una ruptura en la Cadena de Mando de TI:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Omisión de Mantenimiento Crítico:</strong> Incapacidad para identificar servidores vulnerables (falta de inventario de activos).</li>
        <li><strong>Falla de Visibilidad Operativa:</strong> Certificado SSL vencido por 10 meses impidió la inspección de tráfico cifrado (ceguera operativa).</li>
        <li><strong>Higiene de Datos Deficiente:</strong> Credenciales en texto plano facilitaron el movimiento lateral sin necesidad de fuerza bruta.</li>
      </ul>

      <h3>Tabla Técnica del Ataque</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-left border-collapse border border-gray-700">
            <thead class="bg-gray-800 text-gray-300">
                <tr><th class="p-3 border border-gray-700 w-1/4">Elemento</th><th class="p-3 border border-gray-700">Descripción</th></tr>
            </thead>
            <tbody>
                <tr><td class="p-2 border border-gray-700 font-bold">Tipo de ataque</td><td class="p-2 border border-gray-700">Explotación de RCE y exfiltración masiva.</td></tr>
                <tr><td class="p-2 border border-gray-700 font-bold">Vector de entrada</td><td class="p-2 border border-gray-700">Portal de disputas (Puerto 443).</td></tr>
                <tr><td class="p-2 border border-gray-700 font-bold">Vulnerabilidad</td><td class="p-2 border border-gray-700 text-red-400">CVE-2017-5638 (Apache Struts) - CVSS 10.0</td></tr>
                <tr><td class="p-2 border border-gray-700 font-bold">MITRE ATT&CK</td><td class="p-2 border border-gray-700">1. Intrusión > 2. Persistencia > 3. Reconocimiento > 4. Movimiento Lateral > 5. Exfiltración.</td></tr>
                <tr><td class="p-2 border border-gray-700 font-bold">Duración</td><td class="p-2 border border-gray-700">76 días (13 Mayo - 29 Julio).</td></tr>
            </tbody>
        </table>
      </div>

      <h3>Evaluación del Impacto (Modelo CIA)</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-left border-collapse border border-gray-700">
            <thead class="bg-gray-800 text-gray-300">
                <tr>
                    <th class="p-3 border border-gray-700">Principio</th>
                    <th class="p-3 border border-gray-700">Impacto</th>
                    <th class="p-3 border border-gray-700">Evidencia</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border border-gray-700 font-bold text-red-400">Confidencialidad</td>
                    <td class="p-2 border border-gray-700">Robo de PII y datos financieros.</td>
                    <td class="p-2 border border-gray-700">147.5 Millones de registros expuestos (SSN, Tarjetas, Fechas de nacimiento).</td>
                </tr>
                <tr>
                    <td class="p-2 border border-gray-700 font-bold text-yellow-400">Integridad</td>
                    <td class="p-2 border border-gray-700">Alteración y acceso no autorizado.</td>
                    <td class="p-2 border border-gray-700">Web Shells instaladas y consultas de prueba no autorizadas en bases de datos.</td>
                </tr>
                <tr>
                    <td class="p-2 border border-gray-700 font-bold text-blue-400">Disponibilidad</td>
                    <td class="p-2 border border-gray-700">Interrupción de servicios.</td>
                    <td class="p-2 border border-gray-700">Bloqueo del portal de disputas y caída del sitio de ayuda post-incidente.</td>
                </tr>
            </tbody>
        </table>
      </div>

      <h3>Cálculo del Costo Total (Estimado)</h3>
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-left border-collapse border border-gray-700">
            <thead class="bg-gray-800 text-gray-300">
                <tr><th class="p-3 border border-gray-700">Tipo de Costo</th><th class="p-3 border border-gray-700">Estimación (MXN)</th></tr>
            </thead>
            <tbody>
                <tr><td class="p-2 border border-gray-700">Pérdidas Operativas</td><td class="p-2 border border-gray-700 font-mono text-right">$1,665,000,000</td></tr>
                <tr><td class="p-2 border border-gray-700">Daños Reputacionales</td><td class="p-2 border border-gray-700 font-mono text-right">$74,000,000,000</td></tr>
                <tr><td class="p-2 border border-gray-700">Costos Técnicos</td><td class="p-2 border border-gray-700 font-mono text-right">$18,500,000,000</td></tr>
                <tr><td class="p-2 border border-gray-700">Legales / Regulatorios</td><td class="p-2 border border-gray-700 font-mono text-right">$12,950,000,000</td></tr>
                <tr class="bg-violet-900/40 font-bold text-violet-200"><td class="p-2 border border-gray-700">TOTAL ESTIMADO</td><td class="p-2 border border-gray-700 font-mono text-right">$107,115,000,000 MXN</td></tr>
            </tbody>
        </table>
      </div>

      <h2>Relación con Marcos Normativos</h2>
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-left border-collapse border border-gray-700 text-xs sm:text-sm">
            <thead class="bg-gray-800 text-gray-300">
                <tr>
                    <th class="p-2 border border-gray-700 w-1/6">Marco</th>
                    <th class="p-2 border border-gray-700 w-1/4">Fallo (Equifax)</th>
                    <th class="p-2 border border-gray-700">Prevención / Mitigación</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border border-gray-700 font-bold">ISO 27001 (A.12.6.1)</td>
                    <td class="p-2 border border-gray-700">No parchó vulnerabilidad crítica a tiempo.</td>
                    <td class="p-2 border border-gray-700">Parchear en 48h habría evitado el vector RCE.</td>
                </tr>
                <tr>
                    <td class="p-2 border border-gray-700 font-bold">ISO 27001 (A.8.1.1)</td>
                    <td class="p-2 border border-gray-700">Falta de inventario (Portal desconocido).</td>
                    <td class="p-2 border border-gray-700">Un inventario actualizado habría alertado sobre el servidor Apache Struts.</td>
                </tr>
                <tr>
                    <td class="p-2 border border-gray-700 font-bold">NIST CSF (DE.CM-1)</td>
                    <td class="p-2 border border-gray-700">Certificado SSL vencido (ceguera).</td>
                    <td class="p-2 border border-gray-700">SSL vigente permite al IDS/IPS detectar tráfico malicioso.</td>
                </tr>
                <tr>
                    <td class="p-2 border border-gray-700 font-bold">GDPR (Art. 32)</td>
                    <td class="p-2 border border-gray-700">Falta de cifrado en datos personales.</td>
                    <td class="p-2 border border-gray-700">El cifrado en reposo habría hecho inútiles los datos robados.</td>
                </tr>
            </tbody>
        </table>
      </div>

      <h2>Conclusiones y Recomendaciones</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <h3 class="text-violet-400 font-bold mb-2">Aprendizajes Clave</h3>
            <ul class="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>La visibilidad es la base de la protección.</li>
                <li>Un parche omitido es una puerta abierta.</li>
                <li>El cifrado sin monitoreo es un punto ciego inútil.</li>
                <li>La higiene de datos interna previene el movimiento lateral.</li>
            </ul>
        </div>
        <div>
            <h3 class="text-green-400 font-bold mb-2">Recomendaciones Estratégicas</h3>
            <ul class="list-disc pl-5 space-y-1 text-sm text-gray-300">
                <li>Inventario de Activos Dinámico y automatizado.</li>
                <li>Política de Gestión de Parches Críticos (SLA < 48h).</li>
                <li>Automatización de Certificados SSL/TLS.</li>
                <li>Privilegio Mínimo y Gestión de Accesos Privilegiados (PAM).</li>
                <li>Segregación y Cifrado de Datos en Reposo.</li>
            </ul>
        </div>
      </div>

      <div class="mt-8 p-4 bg-gray-900 border border-gray-700 rounded-lg">
        <h3 class="text-xl font-bold text-red-400 mb-2 font-mono">Glosario: CVE-2017-5638</h3>
        <ul class="list-none space-y-2 text-sm font-mono text-gray-400">
            <li><strong>Nombre:</strong> Apache Struts RCE</li>
            <li><strong>Gravedad:</strong> 10.0 (Crítico)</li>
            <li><strong>Impacto:</strong> Ejecución remota de código sin autenticación.</li>
            <li><strong>Mecanismo:</strong> Inyección de código malicioso en encabezados HTTP (Content-Type).</li>
        </ul>
      </div>

      <div class="mt-8 text-xs text-gray-500">
        <h4 className="font-bold mb-1">Bibliografía:</h4>
        <ul className="list-disc pl-4">
            <li>GAO-18-559: "Data Protection: Actions Taken by Equifax..."</li>
            <li>House of Representatives: "The Equifax Data Breach" Final Report.</li>
            <li>FTC Settlement Documentation.</li>
        </ul>
      </div>
    `
  },
  {
    id: 2,
    title: "ACTIVIDAD 02 - Análisis de servicios de seguridad (X.800 y RFC 4949)",
    description: "Estudio profundo de los estándares X.800 y RFC 4949, definiendo servicios y mecanismos de seguridad fundamentales.",
    date: "2024-02-15",
    tags: ["Estándares", "X.800", "RFC 4949", "Teoría"],
    content: `
      <h2>Introducción</h2>
      <p>Los estándares internacionales definen el marco de trabajo para la seguridad en redes. Aquí exploramos X.800 y RFC 4949.</p>
    `
  },
  {
    id: 3,
    title: "ACTIVIDAD 03 - Interpretación y traducción de políticas de filtrado en iptables",
    description: "Ejercicio práctico de configuración de firewalls en Linux utilizando iptables, traduciendo políticas de seguridad a reglas técnicas.",
    date: "2024-02-20",
    tags: ["Linux", "Firewall", "Iptables", "Seguridad de Red"],
    content: `
      <h2>Introducción</h2>
      <p>Iptables es una herramienta esencial para la seguridad en servidores Linux. Veremos cómo configurar reglas básicas y avanzadas.</p>
    `
  },
  {
    id: 4,
    title: "ACTIVIDAD 04 - Mecanismos de defensa en red",
    description: "Exploración de diversas estrategias y herramientas para proteger infraestructuras de red contra accesos no autorizados.",
    date: "2024-02-25",
    tags: ["Defensa en Profundidad", "IDS/IPS", "Honeypots"],
    content: `
      <h2>Introducción</h2>
      <p>La defensa de red requiere múltiples capas de seguridad. Analizaremos IDS, IPS y otras tecnologías.</p>
    `
  },
  {
    id: 5,
    title: "ACTIVIDAD 05 - Cartografiando el pentesting",
    description: "Análisis comparativo de las principales metodologías de pruebas de penetración (PTES, OSSTMM, ISSAF).",
    date: "2024-03-01",
    tags: ["Pentesting", "Metodologías", "Ethical Hacking"],
    content: `
      <h2>Introducción</h2>
      <p>Comparativa de metodologías estándar para realizar pruebas de penetración éticas y efectivas.</p>
    `
  },
  {
    id: 6,
    title: "ACTIVIDAD 06 - Implementación de IPSec VPN",
    description: "Guía técnica sobre la configuración e implementación de redes privadas virtuales seguras utilizando el protocolo IPSec.",
    date: "2024-03-05",
    tags: ["VPN", "IPSec", "Criptografía", "Redes"],
    content: `
      <h2>Introducción</h2>
      <p>IPSec es el estándar para VPNs seguras. En esta actividad documentamos su implementación paso a paso.</p>
    `
  }
];

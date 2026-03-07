export const activities = [
  {
    id: 1,
    title: "ACTIVIDAD 01 - Análisis en grupo de un ciberataque real y su impacto empresarial (Caso Equifax 2017)",
    description: "Análisis forense y estratégico del ciberataque a Equifax, evaluando vulnerabilidades, impacto financiero y cumplimiento normativo bajo estándares ISO 27001, NIST y GDPR.",
    date: "2026-02-18",
    tags: ["Equifax", "CVE-2017-5638", "Impacto Económico", "Análisis Forense", "ISO 27001"],
    content: `
      <div class="bg-violet-900/10 border border-violet-500/20 rounded p-4 mb-8 font-mono text-xs">
        <p><span class="text-violet-400">ESTUDIANTE:</span> Moreno Solís Gisela Geraldine</p>
        <p><span class="text-violet-400">DOCENTE:</span> Mtro. Servando López Contreras</p>
        <p><span class="text-violet-400">CURSO:</span> CNO V SEGURIDAD INFORMATICA</p>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mb-4">REPORTE DE INCIDENTE: CASO EQUIFAX (LOG-01)</h2>
      <p>El presente reporte documenta el ciberataque sufrido por <strong>Equifax en 2017</strong>, considerado uno de los incidentes de ex-filtración masiva más graves en el sector financiero. El ataque fue posible mediante la explotación de la vulnerabilidad <strong>CVE-2017-5638 en Apache Struts</strong>, la cual permitió la ejecución remota de código (RCE) debido a la omisión de un parche de seguridad disponible meses antes del incidente.</p>
      <p>La brecha expuso deficiencias críticas en la gestión de activos y la visibilidad operativa, destacando el vencimiento de certificados SSL que impidieron la detección del tráfico malicioso durante 76 días. Con un impacto que afectó a <strong>147.5 millones de víctimas</strong> y resultó en un acuerdo judicial de <strong>$1.4 mil millones de USD</strong>.</p>
      <p>Este estudio tiene el propósito de evaluar las consecuencias bajo el modelo <strong>CIA (Confidencialidad, Integridad y Disponibilidad)</strong> para comprender la relación entre la ciberseguridad y la sostenibilidad organizacional.</p>

      <h2 class="text-violet-400 font-mono text-lg mt-8 mb-4">CRONOLOGÍA DE EVENTOS (TIMELINE)</h2>
      <h3 class="text-violet-400 font-mono text-lg mt-4 mb-2">CRONOLOGÍA DETALLADA DE LA INVESTIGACIÓN (EXPEDIENTE EQX-2017)</h3>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse border border-gray-700">
            <thead class="bg-[#1a1f2e] text-violet-300">
                <tr>
                    <th class="p-3 border border-gray-700 w-1/5">Fecha</th>
                    <th class="p-3 border border-gray-700 w-24">Hora</th>
                    <th class="p-3 border border-gray-700">Evento</th>
                </tr>
            </thead>
            <tbody class="text-sm text-gray-300">
                <tr><td class="p-3 border border-gray-700">07 de marzo de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">10:00 hrs</td><td class="p-3 border border-gray-700">El Departamento de Seguridad Nacional de EE. UU. (DHS) emite una alerta crítica sobre la vulnerabilidad CVE-2017-5638 en Apache Struts.</td></tr>
                <tr><td class="p-3 border border-gray-700">08 de marzo de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">09:00 hrs</td><td class="p-3 border border-gray-700">El equipo de seguridad global de Equifax recibe la notificación oficial y clasifica el riesgo como "Inminente y Crítico".</td></tr>
                <tr><td class="p-3 border border-gray-700">09 de marzo de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">08:30 hrs</td><td class="p-3 border border-gray-700">Se distribuye un correo interno a todos los administradores de sistemas ordenando la aplicación del parche en un periodo máximo de 48 horas.</td></tr>
                <tr><td class="p-3 border border-gray-700">10 de marzo de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">15:00 hrs</td><td class="p-3 border border-gray-700">El equipo de TI ejecuta un escaneo de vulnerabilidades automatizado en la red externa.</td></tr>
                <tr><td class="p-3 border border-gray-700">10 de marzo de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">17:00 hrs</td><td class="p-3 border border-gray-700 text-yellow-300"><strong>Fallo operativo:</strong> el escaneo no identifica el portal de disputas de consumidores como sistema vulnerable debido a una configuración de red errónea.</td></tr>
                <tr><td class="p-3 border border-gray-700">12 de marzo de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">00:00 hrs</td><td class="p-3 border border-gray-700 text-red-300">Vence el plazo interno para el parcheo. El servidor crítico queda expuesto y sin protección en el puerto 443.</td></tr>
                <tr><td class="p-3 border border-gray-700">13 de mayo de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">21:15 hrs</td><td class="p-3 border border-gray-700 text-red-500 font-bold">Intrusión inicial: actores de amenaza detectan el vector de entrada. Se registra el primer comando de ejecución remota (RCE) exitoso.</td></tr>
                <tr><td class="p-3 border border-gray-700">13 de mayo de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">23:50 hrs</td><td class="p-3 border border-gray-700">Los atacantes instalan una Web Shell (puerta trasera) para asegurar la persistencia en el servidor comprometido.</td></tr>
                <tr><td class="p-3 border border-gray-700">14 de mayo de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">04:00 hrs</td><td class="p-3 border border-gray-700">Comienza el reconocimiento de la red interna. Los atacantes buscan archivos de configuración locales.</td></tr>
                <tr><td class="p-3 border border-gray-700">15 de mayo de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">11:20 hrs</td><td class="p-3 border border-gray-700 text-red-300"><strong>Hallazgo de evidencia crítica:</strong> los atacantes localizan un archivo con credenciales de bases de datos en texto plano.</td></tr>
                <tr><td class="p-3 border border-gray-700">16 de mayo de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">02:00 hrs</td><td class="p-3 border border-gray-700">Inicia el movimiento lateral. Los atacantes acceden a los servidores de bases de datos centrales.</td></tr>
                <tr><td class="p-3 border border-gray-700">20 de mayo de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">14:00 hrs</td><td class="p-3 border border-gray-700">Los perpetradores realizan consultas de prueba para medir la velocidad de respuesta de la base de datos de crédito.</td></tr>
                <tr><td class="p-3 border border-gray-700">25 de mayo de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">09:00 hrs</td><td class="p-3 border border-gray-700">Se establece un canal de exfiltración cifrado. La empresa no detecta el tráfico saliente porque las herramientas de inspección están inactivas.</td></tr>
                <tr><td class="p-3 border border-gray-700">01 de junio de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">00:00 hrs</td><td class="p-3 border border-gray-700 text-red-500 font-bold">Comienza la extracción masiva de PII. Se estima la salida de 5 millones de registros por día.</td></tr>
                <tr><td class="p-3 border border-gray-700">10 de junio de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">10:30 hrs</td><td class="p-3 border border-gray-700">Los atacantes expanden su presencia instalando más de 30 web shells adicionales en distintos servidores.</td></tr>
                <tr><td class="p-3 border border-gray-700">20 de junio de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">18:00 hrs</td><td class="p-3 border border-gray-700">La extracción continúa sin interrupciones. El volumen de datos exfiltrados supera los 200 GB.</td></tr>
                <tr><td class="p-3 border border-gray-700">01 de julio de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">08:00 hrs</td><td class="p-3 border border-gray-700">El ataque se vuelve selectivo; se extraen datos específicos de tarjetas de crédito y documentos de identidad escaneados.</td></tr>
                <tr><td class="p-3 border border-gray-700">15 de julio de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">23:00 hrs</td><td class="p-3 border border-gray-700">Se registra actividad desde direcciones IP vinculadas a infraestructuras de inteligencia extranjera.</td></tr>
                <tr><td class="p-3 border border-gray-700">28 de julio de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">16:00 hrs</td><td class="p-3 border border-gray-700">El equipo de seguridad de red nota una anomalía en el rendimiento de un servidor durante una revisión de rutina.</td></tr>
                <tr><td class="p-3 border border-gray-700">29 de julio de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">10:15 hrs</td><td class="p-3 border border-gray-700 text-green-400 font-bold">Detección del incidente: se identifica tráfico sospechoso hacia una dirección IP externa no autorizada.</td></tr>
                <tr><td class="p-3 border border-gray-700">29 de julio de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">11:30 hrs</td><td class="p-3 border border-gray-700 text-yellow-300">El equipo técnico descubre que el certificado SSL de la herramienta de monitoreo venció en septiembre de 2016.</td></tr>
                <tr><td class="p-3 border border-gray-700">29 de julio de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">14:00 hrs</td><td class="p-3 border border-gray-700">Se bloquea el acceso al portal de disputas. Los atacantes pierden la conexión activa.</td></tr>
                <tr><td class="p-3 border border-gray-700">30 de julio de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">09:00 hrs</td><td class="p-3 border border-gray-700">Se activa el Protocolo de Respuesta a Incidentes. Se contrata a la firma externa Mandiant para realizar el peritaje forense.</td></tr>
                <tr><td class="p-3 border border-gray-700">02 de agosto de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">12:00 hrs</td><td class="p-3 border border-gray-700">El análisis forense confirma la exfiltración masiva. El conteo inicial es de 130 millones de víctimas.</td></tr>
                <tr><td class="p-3 border border-gray-700">15 de agosto de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">17:00 hrs</td><td class="p-3 border border-gray-700">La alta dirección es informada de la magnitud del desastre. Se discute la estrategia de comunicación legal.</td></tr>
                <tr><td class="p-3 border border-gray-700">24 de agosto de 2017</td><td class="p-3 border border-gray-700 text-center font-mono">10:00 hrs</td><td class="p-3 border border-gray-700">Tres altos ejecutivos de Equifax venden acciones de la empresa por un valor de $1.8 millones.</td></tr>
            </tbody>
        </table>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-8 mb-4">ANÁLISIS TÉCNICO Y EVALUACIÓN DE IMPACTO</h2>
      <p>Tras la reconstrucción de los hechos, el equipo pericial concluye que el éxito de la intrusión se debió a una pérdida de control del ciclo de vida de los activos. No se trata únicamente de un servidor olvidado; se trata de una ruptura en la Cadena de Mando de TI.</p>
      <ul class="list-disc pl-6 space-y-3 mb-8">
        <li><strong>Omisión de Mantenimiento Crítico:</strong> La vulnerabilidad CVE-2017-5638 fue pública y tuvo una solución técnica inmediata (parche) desde marzo. La incapacidad de Equifax para identificar qué servidores corrían dicho software demuestra una falta de inventario de activos, violando los principios básicos de marcos internacionales como ISO 27001.</li>
        <li><strong>Falla de Visibilidad Operativa:</strong> El hecho de que un Certificado SSL estuviera vencido por 10 meses no es un error menor; es una negligencia grave. En términos policiales, es equivalente a tener cámaras de seguridad en un banco, pero no tener a nadie mirando el monitor porque el cable está desconectado. Los atacantes filtraron gigabytes de información a plena vista, protegidos por el mismo cifrado que la empresa debía supervisar.</li>
        <li><strong>Higiene de Datos Deficiente:</strong> Una vez que el perímetro fue vulnerado, los atacantes no enfrentaron resistencia interna. El hallazgo de credenciales de bases de datos en texto plano eliminó la necesidad de realizar ataques de fuerza bruta complejos. Esto permitió que una intrusión web se transformara en un acceso total a la "joyería" de la empresa: los datos crediticios.</li>
      </ul>

      <h2 class="text-violet-400 font-mono text-lg mt-8 mb-4">MATRIZ DE DATOS Y MÉTRICAS DE COSTO</h2>
      
      <h3 class="text-violet-400 font-mono text-lg mb-2">Tabla Técnica del Ataque:</h3>
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-left border-collapse border border-gray-700">
            <thead class="bg-[#1a1f2e] text-gray-200">
                <tr><th class="p-3 border border-gray-700 w-1/4">Elemento</th><th class="p-3 border border-gray-700">Descripción</th></tr>
            </thead>
            <tbody class="text-sm text-gray-300">
                <tr><td class="p-3 border border-gray-700 font-bold">Tipo de ataque</td><td class="p-3 border border-gray-700">Explotación de vulnerabilidad de ejecución remota de código (RCE) y exfiltración masiva de datos.</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold">Actor o grupo atacante</td><td class="p-3 border border-gray-700">Actores vinculados a infraestructuras de inteligencia extranjera.</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold">Vector de entrada</td><td class="p-3 border border-gray-700">Portal de disputas de consumidores expuesto a través del puerto 443.</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold">Vulnerabilidad explotada</td><td class="p-3 border border-gray-700 text-red-400">CVE-2017-5638 en Apache Struts, con una gravedad de 10.0 (Crítico).</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold">Etapas del ataque (MITRE ATT&CK)</td><td class="p-3 border border-gray-700">1. Intrusión inicial.<br>2. Persistencia (instalación de Web Shells).<br>3. Reconocimiento interno.<br>4. Movimiento lateral a bases de datos.<br>5. Exfiltración cifrada de datos.</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold">Sistemas o servicios comprometidos</td><td class="p-3 border border-gray-700">Servidor web del portal de disputas y servidores de bases de datos centrales de crédito.</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold">Duración del incidente</td><td class="p-3 border border-gray-700">76 días de actividad maliciosa activa (del 13 de mayo al 29 de julio de 2017).</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold">Mecanismos de detección y respuesta</td><td class="p-3 border border-gray-700">Identificación de tráfico sospechoso durante revisión de rutina. Bloqueo del portal, activación de protocolo de respuesta y contratación de Mandiant para peritaje forense.</td></tr>
            </tbody>
        </table>
      </div>

      <h3 class="text-violet-400 font-mono text-lg mb-2">Evaluación del impacto (Modelo CIA):</h3>
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-left border-collapse border border-gray-700">
            <thead class="bg-[#1a1f2e] text-gray-200">
                <tr>
                    <th class="p-3 border border-gray-700">Principio</th>
                    <th class="p-3 border border-gray-700">Descripción del impacto</th>
                    <th class="p-3 border border-gray-700">Evidencia del caso</th>
                </tr>
            </thead>
            <tbody class="text-sm text-gray-300">
                <tr>
                    <td class="p-3 border border-gray-700 font-bold text-red-400">Confidencialidad</td>
                    <td class="p-3 border border-gray-700">¿Qué información fue expuesta o robada?</td>
                    <td class="p-3 border border-gray-700">Robo de registros de 147.5 millones de personas, incluyendo nombres, números de seguro social, fechas de nacimiento y datos de tarjetas de crédito.</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-bold text-yellow-400">Integridad</td>
                    <td class="p-3 border border-gray-700">¿Qué datos o sistemas fueron alterados?</td>
                    <td class="p-3 border border-gray-700">Localización de archivos con credenciales en texto plano y ejecución de "queries" de prueba para medir la respuesta de la base de datos de crédito.</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-bold text-blue-400">Disponibilidad</td>
                    <td class="p-3 border border-gray-700">¿Qué servicios se interrumpieron o paralizaron?</td>
                    <td class="p-3 border border-gray-700">Bloqueo total del acceso al portal de disputas el 29 de julio y caída del sitio web de ayuda tras el anuncio público debido a la saturación.</td>
                </tr>
            </tbody>
        </table>
      </div>

      <h3 class="text-violet-400 font-mono text-lg mb-2">Cálculo del costo total del ciberataque:</h3>
      <p class="text-sm text-gray-400 mb-2">Tipo de cambio promedio 2017: ≈ $18.50 MXN por 1 USD</p>
      <div class="overflow-x-auto mb-10">
        <table class="w-full text-left border-collapse border border-gray-700">
            <thead class="bg-[#1a1f2e] text-gray-200">
                <tr>
                    <th class="p-3 border border-gray-700">Tipo de costo</th>
                    <th class="p-3 border border-gray-700">Descripción</th>
                    <th class="p-3 border border-gray-700">Estimación (MXN)</th>
                </tr>
            </thead>
            <tbody class="text-sm text-gray-300">
                <tr>
                    <td class="p-3 border border-gray-700 font-bold">Pérdidas operativas</td>
                    <td class="p-3 border border-gray-700">Interrupción de servicios, suspensión del portal de disputas, horas hombre en contención, caída de productividad interna.</td>
                    <td class="p-3 border border-gray-700 font-mono text-right">$1,665,000,000</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-bold">Daños reputacionales</td>
                    <td class="p-3 border border-gray-700">Pérdida de confianza, caída del valor de acciones tras el anuncio (pérdida de miles de millones en valor de mercado).</td>
                    <td class="p-3 border border-gray-700 font-mono text-right">$74,000,000,000</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-bold">Costos técnicos</td>
                    <td class="p-3 border border-gray-700">Investigación forense (Mandiant), renovación de infraestructura, monitoreo de crédito para víctimas, mejoras en ciberseguridad.</td>
                    <td class="p-3 border border-gray-700 font-mono text-right">$18,500,000,000</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-bold">Costos legales / regulatorios</td>
                    <td class="p-3 border border-gray-700">Acuerdo judicial con la FTC, CFPB y estados de EE.UU.</td>
                    <td class="p-3 border border-gray-700 font-mono text-right">$12,950,000,000</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-bold">Pago de rescate</td>
                    <td class="p-3 border border-gray-700">No aplicable — no fue ransomware, fue robo y exfiltración de datos.</td>
                    <td class="p-3 border border-gray-700 font-mono text-right">$0</td>
                </tr>
                <tr class="bg-violet-900/20">
                    <td class="p-3 border border-gray-700 font-bold text-violet-300" colspan="2">TOTAL ESTIMADO (Suma total en pesos mexicanos)</td>
                    <td class="p-3 border border-gray-700 font-bold font-mono text-right text-violet-300">$107,115,000,000 MXN</td>
                </tr>
            </tbody>
        </table>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-8 mb-4">MAPEO DE CUMPLIMIENTO NORMARTIVO (COMPLIANCE)</h2>
      <p class="mb-4">Análisis de los controles de seguridad fallidos basándonos en los estándares ISO 27001, NIST CSF y GDPR.</p>
      <div class="overflow-x-auto mb-10">
        <table class="w-full text-left border-collapse border border-gray-700">
            <thead class="bg-[#1a1f2e] text-gray-200">
                <tr>
                    <th class="p-3 border border-gray-700 w-1/6">Marco Normativo</th>
                    <th class="p-3 border border-gray-700 w-1/5">Control / Artículo</th>
                    <th class="p-3 border border-gray-700">Descripción del Fallo en Equifax</th>
                    <th class="p-3 border border-gray-700">Cómo hubiera prevenido o mitigado el impacto</th>
                </tr>
            </thead>
            <tbody class="text-sm text-gray-300">
                <tr>
                    <td class="p-3 border border-gray-700 font-bold">ISO 27001:2013</td>
                    <td class="p-3 border border-gray-700">A.12.6.1 Gestión de vulnerabilidades técnicas</td>
                    <td class="p-3 border border-gray-700">Equifax no identificó ni parchó la vulnerabilidad CVE-2017-5638 a tiempo, a pesar de que el parche existía desde marzo.</td>
                    <td class="p-3 border border-gray-700"><strong>Prevención:</strong> Si se hubiera aplicado el parche dentro de las 48 horas posteriores a la alerta, el vector de ataque RCE habría sido ineficaz en mayo.</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-bold">ISO 27001:2013</td>
                    <td class="p-3 border border-gray-700">A.8.1.1 Inventario de activos</td>
                    <td class="p-3 border border-gray-700">La empresa no sabía que el "Portal de Disputas" ejecutaba Apache Struts, por lo que quedó fuera del alcance del mantenimiento.</td>
                    <td class="p-3 border border-gray-700"><strong>Prevención:</strong> Un inventario actualizado habría alertado a los administradores de que ese servidor específico requería atención inmediata.</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-bold">NIST CSF</td>
                    <td class="p-3 border border-gray-700">DE.CM-1 (Detección / Monitoreo Continuo)</td>
                    <td class="p-3 border border-gray-700">El tráfico malicioso no fue detectado durante 76 días debido a que el certificado SSL del dispositivo de inspección (IDS/IPS) estaba vencido.</td>
                    <td class="p-3 border border-gray-700"><strong>Mitigación:</strong> Si el certificado SSL hubiera estado vigente, el sistema habría descifrado el tráfico y detectado las firmas de las Web Shells en horas.</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-bold">NIST CSF</td>
                    <td class="p-3 border border-gray-700">PR.AC-1 (Protección / Control de Acceso)</td>
                    <td class="p-3 border border-gray-700">Los atacantes encontraron credenciales de bases de datos almacenadas en texto plano dentro de los servidores comprometidos.</td>
                    <td class="p-3 border border-gray-700"><strong>Mitigación:</strong> Si las credenciales hubieran estado cifradas o gestionadas mediante una bóveda (PAM), el movimiento lateral habría sido extremadamente difícil.</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-bold">GDPR</td>
                    <td class="p-3 border border-gray-700">Art. 32 Seguridad del tratamiento</td>
                    <td class="p-3 border border-gray-700">Se falló en implementar medidas técnicas apropiadas (seudonimización y cifrado) para garantizar la confidencialidad.</td>
                    <td class="p-3 border border-gray-700"><strong>Mitigación:</strong> Si la base de datos hubiera estado cifrada en reposo y separada lógicamente, los datos exfiltrados habrían sido ilegibles e inútiles.</td>
                </tr>
            </tbody>
        </table>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-12 mb-4">CONCLUSIONES FINALES DEL PERITAJE</h2>
      <p>El ciberataque a Equifax no fue el resultado de una técnica de hackeo sofisticada e inevitable, sino la consecuencia de una serie de fallas operativas y negligencias en la gestión de seguridad. A continuación, se presentan los aprendizajes clave y las acciones preventivas necesarias para cualquier organización:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>La visibilidad es la base de la protección:</strong> No se puede proteger lo que no se sabe que existe. El desconocimiento de que el "Portal de Disputas" utilizaba Apache Struts dejó una brecha crítica fuera del alcance de las políticas de mantenimiento.</li>
        <li><strong>Un parche omitido es una puerta abierta:</strong> La existencia de una solución técnica (parche) desde marzo para la vulnerabilidad CVE-2017-5638 subraya que la velocidad de respuesta es tan vital como la detección misma.</li>
        <li><strong>El cifrado sin monitoreo es un punto ciego:</strong> Contar con herramientas de inspección es inútil si no se gestionan sus componentes básicos. El vencimiento de un certificado SSL por 10 meses permitió que los atacantes exfiltraran datos masivos sin ser detectados.</li>
        <li><strong>La higiene de datos interna es crítica:</strong> Una vez superado el perímetro, la falta de seguridad interna (como credenciales en texto plano) facilitó un acceso total a la base de datos central sin necesidad de ataques complejos.</li>
      </ul>

      <h2 class="text-violet-400 font-mono text-lg mt-8 mb-4">RECOMENDACIONES ESTRATÉGICAS (MITIGACIÓN)</h2>
      <ul class="list-disc pl-6 space-y-2 mb-8">
        <li><strong>Implementar un Inventario de Activos Dinámico:</strong> Mantener un registro automatizado y actualizado de todo el software, versiones y hardware en la red para eliminar "puntos ciegos" operativos.</li>
        <li><strong>Establecer una Política de Gestión de Parches Críticos:</strong> Definir tiempos de respuesta obligatorios (ej. 24-48 horas) para vulnerabilidades con severidad alta o crítica (CVSS 10.0).</li>
        <li><strong>Automatizar la Gestión de Certificados:</strong> Utilizar herramientas que alerten y renueven automáticamente los certificados SSL/TLS para garantizar que la visibilidad y el monitoreo del tráfico (IDS/IPS) nunca se interrumpan.</li>
        <li><strong>Adoptar el Principio de Privilegio Mínimo y Cifrado de Credenciales:</strong> Prohibir estrictamente el almacenamiento de contraseñas en texto plano y utilizar soluciones de Gestión de Acceso Privilegiado (PAM).</li>
        <li><strong>Segregación y Cifrado de Datos en Reposo:</strong> Aplicar técnicas de seudonimización y cifrado directamente en las bases de datos para que, en caso de una exfiltración exitosa, la información sea ilegible.</li>
      </ul>

      <p class="text-sm italic mb-6">El análisis del caso Equifax revela que la magnitud de una brecha de seguridad no depende únicamente de la habilidad del atacante, sino de la madurez operativa de la organización. El incidente de 2017 dejó de ser un simple fallo técnico para convertirse en un caso de estudio sobre negligencia sistémica. La exposición de datos de 147.5 millones de personas y un costo total estimado de $107,115,000,000 MXN demuestran que el ahorro en mantenimiento preventivo es ínfimo comparado con las pérdidas operativas, legales y reputacionales que genera un ataque exitoso. La ciberseguridad no puede gestionarse de forma aislada; debe estar integrada en la Cadena de Mando de TI.</p>

      <p class="text-sm italic mb-8">El caso Equifax es un recordatorio de que marcos como ISO 27001 y NIST CSF no son solo requisitos de cumplimiento, sino herramientas de supervivencia. Para una organización moderna, la ciberseguridad es una responsabilidad ética y financiera: la confianza del cliente, una vez perdida por fallos evitables como la falta de un parche o un certificado vencido, es el activo más difícil y costoso de recuperar.</p>

      <h2 class="text-violet-400 font-mono text-lg mt-8 mb-4">GLOSARIO TÉCNICO DE TÉRMINOS</h2>
      <div class="bg-gray-900 border border-gray-700 rounded p-4 mb-8">
        <h4 class="text-red-400 font-bold mb-2">FICHA TÉCNICA: CVE-2017-5638</h4>
        <ul class="space-y-2 text-sm">
            <li><strong>Nombre Clave:</strong> Apache Struts RCE (Remote Code Execution).</li>
            <li><strong>Gravedad:</strong> 10.0 Crítico (Máxima prioridad en la escala CVSS).</li>
            <li><strong>Definición:</strong> Vulnerabilidad de ejecución remota de código que permite a un atacante tomar control total de un servidor web sin necesidad de usuario ni contraseña.</li>
            <li><strong>Modus Operandi:</strong> El atacante envía una petición HTTP con código malicioso oculto en el encabezado. El servidor, al intentar procesar un error de este encabezado, termina ejecutando los comandos del atacante.</li>
            <li><strong>Relación con Equifax:</strong> Fue la puerta de entrada principal. El parche existía desde marzo de 2017, pero Equifax no lo aplicó, dejando la vulnerabilidad expuesta durante meses.</li>
            <li><strong>Impacto Legal:</strong> Su aprovechamiento permitió el robo de datos de 147.5 millones de personas, lo que constituye una falla crítica en los controles de seguridad exigidos por la ISO 27001 y el marco NIST.</li>
        </ul>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-8 mb-4">FUENTES Y REFERENCIAS CONSULTADAS</h2>
      <ul class="list-disc pl-6 space-y-2 text-sm text-gray-400">
        <li><strong>U.S. Government Accountability Office (GAO):</strong> Reporte GAO-18-559, "Data Protection: Actions Taken by Equifax and Federal Agencies in Response to the 2017 Breach".</li>
        <li><strong>House of Representatives (Committee on Oversight and Government Reform):</strong> Reporte final de 96 páginas titulado "The Equifax Data Breach".</li>
        <li><strong>Federal Trade Commission (FTC):</strong> Documentación sobre el acuerdo judicial (settlement) y las sanciones económicas impuestas por la falta de protección de datos personales.</li>
      </ul>
    `
  },
  {
    id: 2,
    title: "ACTIVIDAD 02 - Análisis de servicios de seguridad (X.800 y RFC 4949)",
    description: "Análisis exhaustivo de 10 escenarios de ciberseguridad aplicando el marco X.800 (servicios) y el glosario RFC 4949 (terminología).",
    date: "2026-02-19",
    tags: ["X.800", "RFC 4949", "Amenazas", "Controles", "Análisis Forense"],
    content: `
      <div class="bg-violet-900/10 border border-violet-500/20 rounded p-4 mb-8 font-mono text-xs">
        <p><span class="text-violet-400">ESTUDIANTE:</span> Moreno Solís Gisela Geraldine</p>
        <p><span class="text-violet-400">DOCENTE:</span> Mtro. Servando López Contreras</p>
        <p><span class="text-violet-400">CURSO:</span> CNO V SEGURIDAD INFORMATICA</p>
      </div>

      <h2>Introducción</h2>
      <p>El marco <strong>ITU-T X.800</strong> establece “que” servicios de seguridad se deben garantizar (Autenticación, Control de Acceso, Confidencialidad de datos, Integridad de datos, Disponibilidad y No repudio), mientras que el <strong>RFC 4949</strong> proporciona el vocabulario estándar para describir “cómo” y “por qué” fallaron (tipos de ataques y vulnerabilidades). La reunión de ambos permite pasar de una descripción anecdótica a un informe técnico profesional.</p>

      <div class="space-y-12 mt-10">
        <!-- Escenario 01 -->
        <div class="overflow-x-auto">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-xs font-mono border border-red-500/30">CRITICAL</span>
            <h3 class="text-lg font-bold text-red-500 font-mono italic">Escenario 01: LockBit Ransomware</h3>
          </div>
          <p class="text-sm text-gray-400 mb-4 font-mono leading-relaxed">
            Organizaciones públicas y privadas han sufrido el cifrado masivo de servidores tras un acceso inicial no autorizado. Los atacantes exfiltraron información sensible y amenazaron con su publicación, evidenciando un compromiso simultáneo de la confidencialidad, la integridad y la disponibilidad.
          </p>
          <table class="min-w-full border border-gray-800 text-sm">
            <tbody class="divide-y divide-gray-800 font-mono text-xs">
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 w-1/3 border-r border-gray-800">SERVICIOS X.800 COMPROMETIDOS</td><td class="p-3 text-gray-300">Confidencialidad, Integridad, Disponibilidad</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">DEFINICIÓN RFC 4949</td><td class="p-3 text-red-400">Availability Attack</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">TIPO DE AMENAZA</td><td class="p-3 text-gray-300">Externa (Maliciosa deliberada)</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">VECTOR DE ATAQUE</td><td class="p-3 text-gray-300">Intrusión inicial y Movimiento Lateral</td></tr>
              <tr><td class="p-3 bg-green-900/10 text-green-400 border-r border-gray-800">MEDIDA DE CONTROL</td><td class="p-3 text-green-300">Respaldos inmutables y segmentación de red</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Escenario 02 -->
        <div class="overflow-x-auto">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded text-xs font-mono border border-orange-500/30">EXPOSURE</span>
            <h3 class="text-lg font-bold text-orange-500 font-mono italic">Escenario 02: Misconfiguración Cloud</h3>
          </div>
          <p class="text-sm text-gray-400 mb-4 font-mono leading-relaxed">
            Bases de datos quedaron accesibles públicamente por errores de configuración en servicios en la nube. Falla en el control de acceso que derivó en pérdida de confidencialidad.
          </p>
          <table class="min-w-full border border-gray-800 text-sm">
            <tbody class="divide-y divide-gray-800 font-mono text-xs">
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 w-1/3 border-r border-gray-800">SERVICIOS X.800 COMPROMETIDOS</td><td class="p-3 text-gray-300">Confidencialidad, Control de Acceso</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">DEFINICIÓN RFC 4949</td><td class="p-3 text-orange-400">Exposure</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">TIPO DE AMENAZA</td><td class="p-3 text-gray-300">Interna (Involuntaria / Error humano)</td></tr>
              <tr><td class="p-3 bg-green-900/10 text-green-400 border-r border-gray-800">MEDIDA DE CONTROL</td><td class="p-3 text-green-300">CSPM y auditoría continua de permisos</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Escenario 03 -->
        <div class="overflow-x-auto">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded text-xs font-mono border border-yellow-500/30">SUPPLY CHAIN</span>
            <h3 class="text-lg font-bold text-yellow-500 font-mono italic">Escenario 03: Supply Chain Attack</h3>
          </div>
          <p class="text-sm text-gray-400 mb-4 font-mono leading-relaxed">
            Un proveedor de software fue comprometido y distribuyó código malicioso en una actualización, violando la integridad y confidencialidad de cientos de organizaciones.
          </p>
          <table class="min-w-full border border-gray-800 text-sm">
            <tbody class="divide-y divide-gray-800 font-mono text-xs">
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 w-1/3 border-r border-gray-800">SERVICIOS X.800 COMPROMETIDOS</td><td class="p-3 text-gray-300">Integridad, Autenticación</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">DEFINICIÓN RFC 4949</td><td class="p-3 text-yellow-400">Supply Chain Attack, Malicious Logic</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">VECTOR DE ATAQUE</td><td class="p-3 text-gray-300">Compromiso de infraestructura CI/CD</td></tr>
              <tr><td class="p-3 bg-green-900/10 text-green-400 border-r border-gray-800">MEDIDA DE CONTROL</td><td class="p-3 text-green-300">Verificación de firmas y sandboxing</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Escenario 04 -->
        <div class="overflow-x-auto">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-xs font-mono border border-blue-500/30">PHISHING</span>
            <h3 class="text-lg font-bold text-blue-500 font-mono italic">Escenario 04: Credential Compromise</h3>
          </div>
          <p class="text-sm text-gray-400 mb-4 font-mono leading-relaxed">
            Mediante phishing dirigido, atacantes obtuvieron credenciales válidas. Aunque la autenticación funcionó técnicamente, el servicio fue comprometido conceptualmente.
          </p>
          <table class="min-w-full border border-gray-800 text-sm">
            <tbody class="divide-y divide-gray-800 font-mono text-xs">
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 w-1/3 border-r border-gray-800">SERVICIOS X.800 COMPROMETIDOS</td><td class="p-3 text-gray-300">Autenticación, Control de Acceso</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">DEFINICIÓN RFC 4949</td><td class="p-3 text-blue-400">Credential Compromise, APT</td></tr>
              <tr><td class="p-3 bg-green-900/10 text-green-400 border-r border-gray-800">MEDIDA DE CONTROL</td><td class="p-3 text-green-300">MFA obligatorio y monitoreo UEBA</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Escenario 05 -->
        <div class="overflow-x-auto">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-xs font-mono border border-red-500/30">DATA DESTR</span>
            <h3 class="text-lg font-bold text-red-500 font-mono italic">Escenario 05: Ransomware Avanzado</h3>
          </div>
          <p class="text-sm text-gray-400 mb-4 font-mono leading-relaxed">
            Atacantes eliminaron o cifraron los respaldos antes de afectar los sistemas productivos, impidiendo la recuperación y destruyendo activos.
          </p>
          <table class="min-w-full border border-gray-800 text-sm">
            <tbody class="divide-y divide-gray-800 font-mono text-xs">
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 w-1/3 border-r border-gray-800">SERVICIOS X.800 COMPROMETIDOS</td><td class="p-3 text-gray-300">Disponibilidad, Integridad</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">DEFINICIÓN RFC 4949</td><td class="p-3 text-red-400">Data Destruction, Availability Attack</td></tr>
              <tr><td class="p-3 bg-green-900/10 text-green-400 border-r border-gray-800">MEDIDA DE CONTROL</td><td class="p-3 text-green-300">Regla 3-2-1 y respaldos air-gapped</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Escenario 06 -->
        <div class="overflow-x-auto">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded text-xs font-mono border border-purple-500/30">INSIDER</span>
            <h3 class="text-lg font-bold text-purple-400 font-mono italic">Escenario 06: Insider Threat</h3>
          </div>
          <p class="text-sm text-gray-400 mb-4 font-mono leading-relaxed">
            Un empleado con acceso legítimo extrajo bases de datos por exceso de privilegios, vendiéndolas a terceros sin explotar vulnerabilidades técnicas.
          </p>
          <table class="min-w-full border border-gray-800 text-sm">
            <tbody class="divide-y divide-gray-800 font-mono text-xs">
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 w-1/3 border-r border-gray-800">SERVICIOS X.800 COMPROMETIDOS</td><td class="p-3 text-gray-300">Confidencialidad, Control de Acceso</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">DEFINICIÓN RFC 4949</td><td class="p-3 text-purple-400">Insider Threat, Theft, Disclosure</td></tr>
              <tr><td class="p-3 bg-green-900/10 text-green-400 border-r border-gray-800">MEDIDA DE CONTROL</td><td class="p-3 text-green-300">Principio de Mínimo Privilegio (PoLP)</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Escenario 07 -->
        <div class="overflow-x-auto">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded text-xs font-mono border border-indigo-500/30">ANTI-FORENSIC</span>
            <h3 class="text-lg font-bold text-indigo-400 font-mono italic">Escenario 07: Log Tampering</h3>
          </div>
          <p class="text-sm text-gray-400 mb-4 font-mono leading-relaxed">
            Los registros del sistema fueron alterados tras un ataque, impidiendo reconstruir eventos y vulnerando el no repudio e integridad de la evidencia.
          </p>
          <table class="min-w-full border border-gray-800 text-sm">
            <tbody class="divide-y divide-gray-800 font-mono text-xs">
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 w-1/3 border-r border-gray-800">SERVICIOS X.800 COMPROMETIDOS</td><td class="p-3 text-gray-300">No Repudio, Integridad</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">DEFINICIÓN RFC 4949</td><td class="p-3 text-indigo-400">Audit Trail modification</td></tr>
              <tr><td class="p-3 bg-green-900/10 text-green-400 border-r border-gray-800">MEDIDA DE CONTROL</td><td class="p-3 text-green-300">Logs en tiempo real a servidor WORM</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Escenario 08 -->
        <div class="overflow-x-auto">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-gray-500/20 text-gray-400 px-2 py-0.5 rounded text-xs font-mono border border-gray-500/30">FAILURE</span>
            <h3 class="text-lg font-bold text-gray-300 font-mono italic">Escenario 08: Operational Failure</h3>
          </div>
          <p class="text-sm text-gray-400 mb-4 font-mono leading-relaxed">
            Error humano en una actualización provocó la caída de servicios globales. Afectación a la disponibilidad sin necesidad de un atacante externo.
          </p>
          <table class="min-w-full border border-gray-800 text-sm">
            <tbody class="divide-y divide-gray-800 font-mono text-xs">
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 w-1/3 border-r border-gray-800">SERVICIOS X.800 COMPROMETIDOS</td><td class="p-3 text-gray-300">Disponibilidad</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">DEFINICIÓN RFC 4949</td><td class="p-3 text-gray-400">Operational Failure, Human Error</td></tr>
              <tr><td class="p-3 bg-green-900/10 text-green-400 border-r border-gray-800">MEDIDA DE CONTROL</td><td class="p-3 text-green-300">Entorno staging y despliegue Canary</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Escenario 09 -->
        <div class="overflow-x-auto">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded text-xs font-mono border border-cyan-500/30">SPOOFING</span>
            <h3 class="text-lg font-bold text-cyan-400 font-mono italic">Escenario 09: Brand Spoofing</h3>
          </div>
          <p class="text-sm text-gray-400 mb-4 font-mono leading-relaxed">
            Réplica de sitios oficiales para obtener datos sensibles. Afecta autenticación de origen y confidencialidad mediante ingeniería social.
          </p>
          <table class="min-w-full border border-gray-800 text-sm">
            <tbody class="divide-y divide-gray-800 font-mono text-xs">
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 w-1/3 border-r border-gray-800">SERVICIOS X.800 COMPROMETIDOS</td><td class="p-3 text-gray-300">Autenticación, Confidencialidad</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">DEFINICIÓN RFC 4949</td><td class="p-3 text-cyan-400">Spoofing, Phishing</td></tr>
              <tr><td class="p-3 bg-green-900/10 text-green-400 border-r border-gray-800">MEDIDA DE CONTROL</td><td class="p-3 text-green-300">DMARC/SPF/DKIM y Brand Protection</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Escenario 10 -->
        <div class="overflow-x-auto">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-xs font-mono border border-red-500/30">WIPER</span>
            <h3 class="text-lg font-bold text-red-500 font-mono italic">Escenario 10: Destructive Attack</h3>
          </div>
          <p class="text-sm text-gray-400 mb-4 font-mono leading-relaxed">
            Tras exfiltrar información, se ejecutaron malwares tipo Wiper para destruir sistemas y borrar rastros, con compromiso total de C, I, A.
          </p>
          <table class="min-w-full border border-gray-800 text-sm">
            <tbody class="divide-y divide-gray-800 font-mono text-xs">
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 w-1/3 border-r border-gray-800">SERVICIOS X.800 COMPROMETIDOS</td><td class="p-3 text-gray-300">Total (Confid., Integ., Dispon.)</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">DEFINICIÓN RFC 4949</td><td class="p-3 text-red-400">Destructive Attack, Wiper Malware</td></tr>
              <tr><td class="p-3 bg-green-900/10 text-green-400 border-r border-gray-800">MEDIDA DE CONTROL</td><td class="p-3 text-green-300">Segmentación estricta y DRP probado</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-12 mb-4">CONCLUSIÓN DEL ANÁLISIS X.800 / RFC 4949</h2>
      <p>El estándar <strong>X.800</strong> y el <strong>RFC 4949</strong> se complementan: uno nos dice qué proteger y el otro cómo nombrar las fallas. En la mayoría de los casos, los atacantes aprovechan descuidos básicos como el phishing o malas configuraciones. Aplicar fundamentos como MFA y revisión de permisos puede evitar la mayoría de los incidentes graves.</p>

      <h2 class="text-violet-400 font-mono text-lg mt-12 mb-4">REFERENCIAS BIBLIOGRÁFICAS</h2>
      <ul class="list-decimal pl-6 space-y-2 text-sm text-gray-400 font-mono">
          <li>Shirey, R. (2007). <strong>RFC 4949: Internet Security Glossary</strong>. IETF.</li>
          <li>López Contreras, S. (2025). <strong>Apuntes: Fundamentos del Hacking Ético</strong>.</li>
          <li>ITU. (1991). <strong>Recommendation X.800: Security architecture</strong>. ITU-T.</li>
      </ul>
    `

  },
  {
    id: 3,
    title: "ACTIVIDAD 03 - Interpretación y traducción de políticas de filtrado en iptables",
    description: "Ejercicio práctico de configuración de firewalls en Linux utilizando iptables, traduciendo políticas de seguridad a reglas técnicas y analizando la anatomía de los comandos.",
    date: "2026-02-20",
    tags: ["Linux", "Firewall", "Iptables", "Políticas de Red", "Security Hardening"],
    content: `
      <div class="bg-violet-900/10 border border-violet-500/20 rounded p-4 mb-8 font-mono text-xs">
        <p><span class="text-violet-400">ESTUDIANTE:</span> Moreno Solís Gisela Geraldine</p>
        <p><span class="text-violet-400">DOCENTE:</span> Mtro. Servando López Contreras</p>
        <p><span class="text-violet-400">CURSO:</span> CNO V SEGURIDAD INFORMATICA</p>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mb-4">IDENTIFICACIÓN: NETFILTER & IPTABLES (LOG-03)</h2>
      <p><strong>Iptables</strong> es la herramienta de espacio de usuario utilizada para configurar las tablas de filtrado de paquetes del kernel de Linux (Netfilter). Es la primera línea de defensa en servidores Linux, permitiendo definir reglas granulares para aceptar, rechazar o modificar el tráfico de red.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <div class="bg-[#0a0f1a] border border-red-900/30 rounded-lg overflow-hidden shadow-2xl transition-transform hover:scale-[1.02]">
          <div class="bg-red-900/20 px-4 py-2 border-b border-red-900/30 text-xs font-mono text-red-100">EVIDENCE_IMG_01</div>
          <img src="/parcial1/ACT 03.jfif" alt="Iptables Worksheet 1" class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity" />
        </div>
        <div class="bg-[#0a0f1a] border border-red-900/30 rounded-lg overflow-hidden shadow-2xl transition-transform hover:scale-[1.02]">
          <div class="bg-red-900/20 px-4 py-2 border-b border-red-900/30 text-xs font-mono text-red-100">EVIDENCE_IMG_02</div>
          <img src="/parcial1/ACT 03.2.jfif" alt="Iptables Worksheet 2" class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-8 mb-4">CONCEPTOS FUNDAMENTALES (ESTRUCTURA DE DATOS)</h2>
      <p>Iptables organiza las reglas en <strong>Tablas</strong> y <strong>Cadenas (Chains)</strong>. El flujo del paquete sigue un orden lógico: primero pasa por una <strong>tabla</strong>, después por una <strong>cadena</strong> y finalmente se ejecuta una <strong>acción</strong> (regla).</p>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse border border-gray-700">
            <thead class="bg-[#1a1f2e] text-violet-300">
                <tr>
                    <th class="p-3 border border-gray-700">Tabla</th>
                    <th class="p-3 border border-gray-700">Propósito Principal</th>
                    <th class="p-3 border border-gray-700">Ejemplo de Uso</th>
                </tr>
            </thead>
            <tbody class="text-sm text-gray-300">
                <tr><td class="p-3 border border-gray-700 font-bold">FILTER</td><td class="p-3 border border-gray-700">Filtrado de paquetes (por defecto).</td><td class="p-3 border border-gray-700">Permitir / Bloquear tráfico.</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold">NAT</td><td class="p-3 border border-gray-700">Traducción de direcciones.</td><td class="p-3 border border-gray-700">Uso de diferentes dispositivos.</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold">MANGLE</td><td class="p-3 border border-gray-700">Modificación avanzada de paquetes.</td><td class="p-3 border border-gray-700">Cambio de cabeceras.</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold">RAW</td><td class="p-3 border border-gray-700">Excepciones al seguimiento de conexiones.</td><td class="p-3 border border-gray-700">Paquetes no inspeccionados.</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold">SECURITY</td><td class="p-3 border border-gray-700">Aplica paquetes de seguridad.</td><td class="p-3 border border-gray-700">Seguridad avanzada.</td></tr>
            </tbody>
        </table>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-8 mb-4">ANATOMÍA TÉCNICA DE UN COMANDO</h2>
      <div class="bg-black border border-violet-900/50 rounded p-6 font-mono text-sm mb-8">
        <p class="text-violet-400 mb-2"># Estructura básica analizada:</p>
        <p class="text-white">iptables <span class="text-red-400">-A INPUT</span> -p tcp -m multiport <span class="text-yellow-400">--dports 80,443</span> -j <span class="text-green-400">ACCEPT</span></p>
        <div class="mt-4 text-xs text-gray-400 space-y-1">
          <p>• <span class="text-red-400">-A INPUT</span>: Añadir regla a la cadena de entrada.</p>
          <p>• <span class="text-white">-p tcp</span>: Protocolo TCP.</p>
          <p>• <span class="text-white">-m multiport</span>: Módulo para múltiples puertos en una sola regla.</p>
          <p>• <span class="text-yellow-400">--dports 80,443</span>: Puertos de destino (HTTP y HTTPS).</p>
          <p>• <span class="text-green-400">-j ACCEPT</span>: Acción (Target) de permitir el paquete.</p>
        </div>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-8 mb-4">ANÁLISIS DE POLÍTICAS DE RED (TRADUCCIÓN TÉCNICA)</h2>
      <p class="mb-6">A continuación se detallan los ejercicios prácticos de traducción de requerimientos de negocio a reglas de bajo nivel en <strong>Netfilter/Iptables</strong>.</p>
      
      <div class="space-y-10 mt-6">
        <!-- Ejercicio 01 -->
        <div class="overflow-x-auto">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-xs font-mono border border-blue-500/30">REMOTE_ACCESS</span>
            <h3 class="text-md font-bold text-blue-400 font-mono italic">Ejercicio 01: Acceso Seguro vía SSH</h3>
          </div>
          <table class="min-w-full border border-gray-800 text-sm">
            <tbody class="divide-y divide-gray-800 font-mono text-xs">
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 w-1/3 border-r border-gray-800">REQUERIMIENTO</td><td class="p-3 text-gray-300">Permitir conexión SSH solo desde una IP administrativa específica (192.168.1.50).</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">COMANDO TÉCNICO</td><td class="p-3 text-violet-300">iptables -A INPUT -p tcp -s 192.168.1.50 --dport 22 -j ACCEPT</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">ANÁLISIS DE FLUJO</td><td class="p-3 text-gray-300">Inbound / Filter / INPUT / TCP / Port 22</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Ejercicio 02 -->
        <div class="overflow-x-auto">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs font-mono border border-green-500/30">WEB_SERVER</span>
            <h3 class="text-md font-bold text-green-400 font-mono italic">Ejercicio 02: Hardening de Servicios Web</h3>
          </div>
          <table class="min-w-full border border-gray-800 text-sm">
            <tbody class="divide-y divide-gray-800 font-mono text-xs">
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 w-1/3 border-r border-gray-800">REQUERIMIENTO</td><td class="p-3 text-gray-300">Abrir puertos HTTP (80) y HTTPS (443) para todo el tráfico público.</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">COMANDO TÉCNICO</td><td class="p-3 text-violet-300">iptables -A INPUT -p tcp -m multiport --dports 80,443 -j ACCEPT</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">OPTIMIZACIÓN</td><td class="p-3 text-gray-300">Uso del módulo 'multiport' para reducir latencia en el procesamiento de reglas.</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Ejercicio 03 -->
        <div class="overflow-x-auto">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded text-xs font-mono border border-yellow-500/30">STATEFUL_INSPECT</span>
            <h3 class="text-md font-bold text-yellow-400 font-mono italic">Ejercicio 03: Control de Estados (ESTABLISHED)</h3>
          </div>
          <table class="min-w-full border border-gray-800 text-sm">
            <tbody class="divide-y divide-gray-800 font-mono text-xs">
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 w-1/3 border-r border-gray-800">REQUERIMIENTO</td><td class="p-3 text-gray-300">Permitir tráfico de respuesta para conexiones ya iniciadas desde el servidor.</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">COMANDO TÉCNICO</td><td class="p-3 text-violet-300">iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">BENEFICIO</td><td class="p-3 text-gray-300">Evita que el firewall rompa sesiones legítimas salientes (DNS, Updates).</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Ejercicio 04 -->
        <div class="overflow-x-auto">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-xs font-mono border border-red-500/30">DENY_BY_DEFAULT</span>
            <h3 class="text-md font-bold text-red-400 font-mono italic">Ejercicio 04: Política de Denegación Total (Drop)</h3>
          </div>
          <table class="min-w-full border border-gray-800 text-sm">
            <tbody class="divide-y divide-gray-800 font-mono text-xs">
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 w-1/3 border-r border-gray-800">REQUERIMIENTO</td><td class="p-3 text-gray-300">Implementar una postura de seguridad "Nada que no esté permitido está prohibido".</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">COMANDO TÉCNICO</td><td class="p-3 text-red-400">iptables -P INPUT DROP</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">RIESGO OPERATIVO</td><td class="p-3 text-gray-300">Bloqueo de administración remota si no hay una regla ACCEPT previa para SSH.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Variables y Opciones Comunes</h2>
      <ul class="space-y-4 mb-10">
        <li class="flex items-start gap-4 bg-white/5 p-4 rounded border border-gray-800">
          <span class="bg-red-900/30 text-red-500 px-2 py-1 rounded font-mono text-xs">--limit 5/minute</span>
          <div>
            <p class="font-bold text-gray-200">Limitar intentos por minuto</p>
            <p class="text-sm text-gray-500">Previene ataques de fuerza bruta o inundaciones.</p>
          </div>
        </li>
        <li class="flex items-start gap-4 bg-white/5 p-4 rounded border border-gray-800">
          <span class="bg-blue-900/30 text-blue-400 px-2 py-1 rounded font-mono text-xs">-s 192.168.1.0/24</span>
          <div>
            <p class="font-bold text-gray-200">Filtrar por IP de origen</p>
            <p class="text-sm text-gray-500">Acepta o rechaza tráfico basándose en la subred de origen.</p>
          </div>
        </li>
        <li class="flex items-start gap-4 bg-white/5 p-4 rounded border border-gray-800">
          <span class="bg-green-900/30 text-green-400 px-2 py-1 rounded font-mono text-xs">-L -n -v</span>
          <div>
            <p class="font-bold text-gray-200">Visualización Detallada</p>
            <p class="text-sm text-gray-500">Muestra reglas con contadores de paquetes y bytes sin resolución de DNS para mayor velocidad.</p>
          </div>
        </li>
      </ul>

      <h2 class="text-violet-400 font-mono text-lg mt-12 mb-4">CONCLUSIÓN TÉCNICA (HARDENING)</h2>
      <p>Iptables es una herramienta poderosa y flexible. Una configuración correcta es vital para la seguridad del servidor; un error (como bloquear el puerto 22 sin tener acceso físico) puede dejar al administrador fuera del sistema. La práctica de <strong>"Default DROP"</strong> es la más segura, obligando a abrir explícitamente solo lo que es necesario.</p>

      <h2 class="mt-12 text-violet-400 font-mono">Referencias Bibliográficas</h2>
      <ul class="list-decimal pl-6 space-y-2 text-sm text-gray-400">
        <li>Purdy, G. (2004). <strong>Linux iptables Pocket Reference</strong>. O'Reilly Media.</li>
        <li>Netfilter Project. (2024). <strong>Iptables documentation and HOWTOs</strong>. <a href="https://www.netfilter.org/documentation/" class="text-blue-400 hover:underline">netfilter.org</a></li>
        <li>López Contreras, S. (2025). <strong>Apuntes de clase: Seguridad en Redes y Firewalls</strong>.</li>
      </ul>
    `
  },
  {
    id: 4,
    title: "ACTIVIDAD 04 - Mecanismos de defensa en red",
    description: "Exploración de diversas estrategias y herramientas para proteger infraestructuras de red contra accesos no autorizados.",
    date: "2026-02-21",
    tags: ["Defensa en Profundidad", "IDS/IPS", "Honeypots"],
    content: `
      <div class="bg-violet-900/10 border border-violet-500/20 rounded p-4 mb-8 font-mono text-xs">
        <p><span class="text-violet-400">ESTUDIANTE:</span> Moreno Solís Gisela Geraldine</p>
        <p><span class="text-violet-400">DOCENTE:</span> Mtro. Servando López Contreras</p>
        <p><span class="text-violet-400">CURSO:</span> CNO V SEGURIDAD INFORMATICA</p>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mb-4">ANÁLISIS PERIMETRAL: CADENA FORWARD (LOG-04)</h2>
      <p>A diferencia de la cadena INPUT (tráfico dirigido al host local), la cadena <strong>FORWARD</strong> procesa el tráfico que simplemente pasa a través del firewall desde una interfaz hacia otra. Es la base de un firewall perimetral que protege una red interna o una DMZ.</p>

      <div class="bg-violet-900/10 border border-violet-500/20 rounded p-6 mb-10">
        <p class="text-gray-300 italic">"La cadena FORWARD permite que el firewall actúe como un guardia entre diferentes zonas de confianza, filtrando el tráfico que fluye entre ellas."</p>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-8 mb-4">TRADUCCIÓN DE POLÍTICAS DE PERÍMETRO</h2>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse border border-gray-700">
            <thead class="bg-[#1a1f2e] text-blue-300">
                <tr>
                    <th class="p-3 border border-gray-700 w-1/3">Escenario de Red</th>
                    <th class="p-3 border border-gray-700">Comando Iptables (FORWARD)</th>
                </tr>
            </thead>
            <tbody class="text-sm text-gray-300 font-mono">
                <tr>
                    <td class="p-3 border border-gray-700 font-sans">Bloquear tráfico entre dos redes internas (eth1 a eth2)</td>
                    <td class="p-3 border border-gray-700">iptables -A FORWARD -i eth1 -o eth2 -j DROP</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-sans">Permitir tráfico desde Internet (eth0) a un servidor Web en la DMZ (eth1)</td>
                    <td class="p-3 border border-gray-700">iptables -A FORWARD -i eth0 -o eth1 -p tcp --dport 80 -j ACCEPT</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-sans">Permitir solo tráfico SSH desde la red interna (eth2) a la DMZ (eth1)</td>
                    <td class="p-3 border border-gray-700">iptables -A FORWARD -i eth2 -o eth1 -p tcp --dport 22 -j ACCEPT</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-sans">Permitir tráfico de respuesta (ESTABLISHED) desde DMZ a Internet</td>
                    <td class="p-3 border border-gray-700">iptables -A FORWARD -i eth1 -o eth0 -m state --state ESTABLISHED,RELATED -j ACCEPT</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-sans text-red-300">Rechazar todo tráfico que intente salir por la interfaz externa (eth0) sin origen autorizado</td>
                    <td class="p-3 border border-gray-700">iptables -A FORWARD -o eth0 -s ! 192.168.1.0/24 -j REJECT</td>
                </tr>
            </tbody>
        </table>
      </div>


      <h2 class="text-violet-400 font-mono text-lg mt-8 mb-4">CASO DE ESTUDIO: SEGMENTACIÓN DE DMZ Y CONTROL PERIMETRAL</h2>
      <p class="mb-6">El siguiente reporte documenta la implementación de una arquitectura de red protegida mediante la cadena <strong>FORWARD</strong>, asegurando el aislamiento entre la red pública, la zona desmilitarizada (DMZ) y la red interna.</p>
      
      <div class="space-y-10 mt-6">
        <!-- Escenario 01 -->
        <div class="overflow-x-auto">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-xs font-mono border border-red-500/30">SECURITY_POLICY</span>
            <h3 class="text-md font-bold text-red-400 font-mono italic">Política 01: Denegación por Defecto</h3>
          </div>
          <table class="min-w-full border border-gray-800 text-sm">
            <tbody class="divide-y divide-gray-800 font-mono text-xs">
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 w-1/3 border-r border-gray-800">REQUERIMIENTO</td><td class="p-3 text-gray-300">Bloquear todo el tráfico de paso que no esté explícitamente autorizado.</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">COMANDO TÉCNICO</td><td class="p-3 text-red-400">iptables -P FORWARD DROP</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">JUSTIFICACIÓN</td><td class="p-3 text-gray-300">Implementación de la postura de seguridad 'Deny All' para reducir la superficie de ataque perimetral.</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Escenario 02 -->
        <div class="overflow-x-auto">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-xs font-mono border border-blue-500/30">DNS_RESOLUTION</span>
            <h3 class="text-md font-bold text-blue-400 font-mono italic">Escenario 02: Resolución DNS desde la LAN</h3>
          </div>
          <table class="min-w-full border border-gray-800 text-sm">
            <tbody class="divide-y divide-gray-800 font-mono text-xs">
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 w-1/3 border-r border-gray-800">REQUERIMIENTO</td><td class="p-3 text-gray-300">Permitir que los equipos de la red local (192.1.2.0/24) realicen consultas DNS.</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">COMANDO TÉCNICO</td><td class="p-3 text-violet-300">iptables -A FORWARD -s 192.1.2.0/24 -p udp --dport 53 -m state --state NEW -j ACCEPT</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">TIPO DE TRÁFICO</td><td class="p-3 text-gray-300">Outbound / Egress / UDP Port 53</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Escenario 03 -->
        <div class="overflow-x-auto">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded text-xs font-mono border border-yellow-500/30">MAIL_SECURITY</span>
            <h3 class="text-md font-bold text-yellow-400 font-mono italic">Escenario 03: Flujo de Correo Seguro (SMTP)</h3>
          </div>
          <table class="min-w-full border border-gray-800 text-sm">
            <tbody class="divide-y divide-gray-800 font-mono text-xs">
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 w-1/3 border-r border-gray-800">REQUERIMIENTO</td><td class="p-3 text-gray-300">Permitir tráfico SMTP entrante y saliente para el servidor de correo (192.1.2.10).</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">COMANDOS</td><td class="p-3 text-violet-300 space-y-1">
                <div>iptables -A FORWARD -d 192.1.2.10 -p tcp --dport 25 -j ACCEPT</div>
                <div>iptables -A FORWARD -s 192.1.2.10 -p tcp --dport 25 -j ACCEPT</div>
              </td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">ANÁLISIS</td><td class="p-3 text-gray-300">Control bidireccional específico para evitar que el servidor de correo sea usado como Open Relay malicioso.</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Escenario 04 -->
        <div class="overflow-x-auto">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs font-mono border border-green-500/30">APP_SEC</span>
            <h3 class="text-md font-bold text-green-400 font-mono italic">Escenario 04: Publicación de Servidor Web DMZ</h3>
          </div>
          <table class="min-w-full border border-gray-800 text-sm">
            <tbody class="divide-y divide-gray-800 font-mono text-xs">
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 w-1/3 border-r border-gray-800">REQUERIMIENTO</td><td class="p-3 text-gray-300">Permitir acceso público al servidor web corporativo (192.1.2.11) en el puerto 80.</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">COMANDO TÉCNICO</td><td class="p-3 text-violet-300">iptables -A FORWARD -d 192.1.2.11 -p tcp --dport 80 -m state --state NEW -j ACCEPT</td></tr>
              <tr><td class="p-3 bg-gray-900/50 text-gray-400 border-r border-gray-800">SEGMENTACIÓN</td><td class="p-3 text-gray-300">Aisla el tráfico web hacia un host específico sin comprometer el resto de la subred.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 class="text-xl font-bold text-violet-400 mb-6">Mecanismos de Defensa Complementarios</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white/5 p-4 rounded-lg border border-gray-800">
          <h4 class="font-bold text-violet-300 mb-2 underline selection:bg-violet-500">IDS / IPS</h4>
          <p class="text-xs text-gray-400">Sistemas de detección y prevención que analizan firmas y anomalías para bloquear ataques en la cadena FORWARD en tiempo real.</p>
        </div>
        <div class="bg-white/5 p-4 rounded-lg border border-gray-800">
          <h4 class="font-bold text-orange-400 mb-2 underline selection:bg-orange-500">Honeypots</h4>
          <p class="text-xs text-gray-400">Sistemas señuelo (como Cowrie o Dionaea) diseñados para ser atacados, permitiendo estudiar técnicas del adversario sin riesgo operativo.</p>
        </div>
        <div class="bg-white/5 p-4 rounded-lg border border-gray-800">
          <h4 class="font-bold text-blue-400 mb-2 underline selection:bg-blue-500">NGFW</h4>
          <p class="text-xs text-gray-400">Firewalls de Nueva Generación que operan en Capa 7, permitiendo filtrar tráfico por aplicación y contenido, no solo por puertos.</p>
        </div>
      </div>

      <h3 class="text-xl font-bold text-violet-400 mb-6 font-mono">COMPARATIVA TÉCNICA DE DEFENSA</h3>
      <div class="overflow-x-auto mb-10">
        <table class="w-full text-left border-collapse border border-gray-700">
            <thead class="bg-[#1a1f2e] text-violet-200">
                <tr>
                    <th class="p-3 border border-gray-700">Mecanismo</th>
                    <th class="p-3 border border-gray-700">Capa OSI</th>
                    <th class="p-3 border border-gray-700">Función Clave</th>
                    <th class="p-3 border border-gray-700">Modo de Operación</th>
                </tr>
            </thead>
            <tbody class="text-sm text-gray-400">
                <tr><td class="p-3 border border-gray-700 font-bold text-violet-300">IDS</td><td class="p-3 border border-gray-700 text-center">3, 4, 7</td><td class="p-3 border border-gray-700">Detección y Alerta</td><td class="p-3 border border-gray-700">Pasivo (Sniffing)</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold text-violet-300">IPS</td><td class="p-3 border border-gray-700 text-center">3, 4, 7</td><td class="p-3 border border-gray-700">Bloqueo en tiempo real</td><td class="p-3 border border-gray-700">En línea (In-line)</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold text-violet-300">Honeypot</td><td class="p-3 border border-gray-700 text-center">Todas</td><td class="p-3 border border-gray-700">Inteligencia de Amenazas</td><td class="p-3 border border-gray-700">Señuelo (Decepción)</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold text-violet-300">NGFW</td><td class="p-3 border border-gray-700 text-center">7</td><td class="p-3 border border-gray-700">Filtrado de Aplicación</td><td class="p-3 border border-gray-700">Activo (Deep Packet Inspection)</td></tr>
            </tbody>
        </table>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-12 mb-4">CONCLUSIÓN DEL ANÁLISIS PERIMETRAL</h2>
      <p>La correcta configuración de la cadena FORWARD es fundamental para la seguridad de red a gran escala. Permite implementar el principio de <strong>Defensa en Profundidad</strong>, asegurando que incluso si el perímetro falla, las barreras internas siguen protegiendo los activos más valiosos del negocio.</p>

      <h2 class="mt-12 text-blue-400 font-mono">Referencias Bibliográficas</h2>
      <ul class="list-decimal pl-6 space-y-2 text-sm text-gray-400">
        <li>Stallings, W. (2017). <strong>Network Security Essentials: Applications and Standards</strong>. Pearson.</li>
        <li>Cisco Networking Academy. (2023). <strong>Introduction to Cybersecurity: Network Defense</strong>.</li>
        <li>Roesch, M. (1999). <strong>Snort: Lightweight Intrusion Detection for Networks</strong>. USENIX.</li>
      </ul>
    `
  },
  {
    id: 5,
    title: "ACTIVIDAD 05 - Cartografiando el pentesting",
    description: "Análisis comparativo de las principales metodologías de pruebas de penetración (PTES, OSSTMM, ISSAF, NIST, MITRE).",
    date: "2026-02-22",
    tags: ["Pentesting", "Metodologías", "Ethical Hacking", "MITRE ATT&CK"],
    content: `
      <div class="bg-violet-900/10 border border-violet-500/20 rounded p-4 mb-8 font-mono text-xs">
        <p><span class="text-violet-400">ESTUDIANTE:</span> Moreno Solís Gisela Geraldine</p>
        <p><span class="text-violet-400">DOCENTE:</span> Mtro. Servando López Contreras</p>
        <p><span class="text-violet-400">CURSO:</span> CNO V SEGURIDAD INFORMATICA</p>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mb-4">MAPEO ESTRATÉGICO: METODOLOGÍAS DE PENTESTING (LOG-05)</h2>
      <p class="mb-6">El presente análisis técnico compara los marcos de trabajo más influyentes en la industria de la ciberseguridad ofensiva, permitiendo seleccionar la metodología adecuada según el tipo de auditoría (Web, Red, Cumplimiento o Emulación de Adversarios).</p>

      <div class="overflow-x-auto my-10 border border-gray-800 rounded-lg shadow-inner bg-black/20">
        <table class="w-full text-left border-collapse">
            <thead class="bg-[#1a1f2e] text-purple-300 text-sm uppercase tracking-wider">
                <tr>
                    <th class="p-5 border border-gray-700 font-black min-w-[150px]">Criterio / Marco</th>
                    <th class="p-5 border border-gray-700">1. MITRE ATT&CK</th>
                    <th class="p-5 border border-gray-700">2. OWASP WSTG</th>
                    <th class="p-5 border border-gray-700">3. NIST SP 800-115</th>
                    <th class="p-5 border border-gray-700">4. OSSTMM</th>
                    <th class="p-5 border border-gray-700">5. PTES</th>
                    <th class="p-5 border border-gray-700">6. ISSAF</th>
                </tr>
            </thead>
            <tbody class="text-sm text-gray-300 leading-relaxed">
                <tr>
                    <td class="p-4 border border-gray-700 bg-white/5 font-bold text-white">A. Descripción</td>
                    <td class="p-4 border border-gray-700">Base de conocimientos basada en tácticas y técnicas de adversarios reales.</td>
                    <td class="p-4 border border-gray-700">Guía principal para pruebas en aplicaciones web y vulnerabilidades comunes.</td>
                    <td class="p-4 border border-gray-700">Guía técnica federal (EE.UU.) para realizar evaluaciones de seguridad.</td>
                    <td class="p-4 border border-gray-700">Metodología científica basada en métricas para evaluar la seguridad operativa.</td>
                    <td class="p-4 border border-gray-700">Estándar comercial con lenguaje común para ejecución de pruebas.</td>
                    <td class="p-4 border border-gray-700">Framework detallado y estructurado para evaluación de sistemas (legado).</td>
                </tr>
                <tr>
                    <td class="p-4 border border-gray-700 bg-white/5 font-bold text-white">B. Fases</td>
                    <td class="p-4 border border-gray-700">14 Tácticas (Reconocimiento, Persistencia, etc.).</td>
                    <td class="p-4 border border-gray-700">Recopilación, Configuración, Identidad, Autenticación, etc.</td>
                    <td class="p-4 border border-gray-700">Planificación, Descubrimiento, Ataque, Reporte.</td>
                    <td class="p-4 border border-gray-700">Inducción, Interacción, Inquisición, Intervención.</td>
                    <td class="p-4 border border-gray-700">Pre-acuerdo, Intel, Modelado, Vulnerabilidad, Explotación, Post, Reporte.</td>
                    <td class="p-4 border border-gray-700">Planificación, Evaluación, Tratamiento, Acreditación.</td>
                </tr>
                <tr>
                    <td class="p-4 border border-gray-700 bg-white/5 font-bold text-white">C. Objetivo Principal</td>
                    <td class="p-4 border border-gray-700">Clasificar ciberataques para mejorar la detección.</td>
                    <td class="p-4 border border-gray-700">Marco exhaustivo para seguridad de servicios web.</td>
                    <td class="p-4 border border-gray-700">Orientar a organizaciones en auditorías técnicas.</td>
                    <td class="p-4 border border-gray-700">Medición científica cuantificable (RAVs) de seguridad ops.</td>
                    <td class="p-4 border border-gray-700">Garantizar calidad y consistencia en el servicio de pentesting.</td>
                    <td class="p-4 border border-gray-700">Evaluar controles con un nivel de detalle técnico granular.</td>
                </tr>
                <tr>
                    <td class="p-4 border border-gray-700 bg-white/5 font-bold text-white">D. Escenarios</td>
                    <td class="p-4 border border-gray-700">Threat Hunting, Red Teaming, mejora de SOC.</td>
                    <td class="p-4 border border-gray-700">Auditorías de App Web, desarrollo seguro (SDLC).</td>
                    <td class="p-4 border border-gray-700">Cumplimiento (FISMA), evaluaciones federales.</td>
                    <td class="p-4 border border-gray-700">Auditorías que requieren métricas exactas.</td>
                    <td class="p-4 border border-gray-700">Pentesting comercial (Caja Negra/Blanca).</td>
                    <td class="p-4 border border-gray-700">Evaluaciones técnicas profundas (Uso disminuido).</td>
                </tr>
                <tr>
                    <td class="p-4 border border-gray-700 bg-white/5 font-bold text-white">E. Orientación</td>
                    <td class="p-4 border border-gray-700">Defensa / Ataque (Emulación).</td>
                    <td class="p-4 border border-gray-700">Evaluación (AppSec).</td>
                    <td class="p-4 border border-gray-700">Evaluación (Cumplimiento).</td>
                    <td class="p-4 border border-gray-700">Evaluación / Defensa (Métricas).</td>
                    <td class="p-4 border border-gray-700">Ataque (Pentesting puro).</td>
                    <td class="p-4 border border-gray-700">Evaluación (Auditoría técnica).</td>
                </tr>
                <tr>
                    <td class="p-4 border border-gray-700 bg-white/5 font-bold text-white">F. Autores</td>
                    <td class="p-4 border border-gray-700">MITRE Corporation.</td>
                    <td class="p-4 border border-gray-700">OWASP Foundation.</td>
                    <td class="p-4 border border-gray-700">NIST (EE.UU.).</td>
                    <td class="p-4 border border-gray-700">ISECOM - Pete Herzog.</td>
                    <td class="p-4 border border-gray-700">Grupo de expertos independientes.</td>
                    <td class="p-4 border border-gray-700">OISSG.</td>
                </tr>
                <tr>
                    <td class="p-4 border border-gray-700 bg-white/5 font-bold text-white">G. URL Oficial</td>
                    <td class="p-4 border border-gray-700"><a href="https://attack.mitre.org" class="text-blue-400 hover:underline">attack.mitre.org</a></td>
                    <td class="p-4 border border-gray-700"><a href="https://owasp.org" class="text-blue-400 hover:underline">owasp.org</a></td>
                    <td class="p-4 border border-gray-700"><a href="https://csrc.nist.gov" class="text-blue-400 hover:underline">csrc.nist.gov</a></td>
                    <td class="p-4 border border-gray-700"><a href="https://isecom.org" class="text-blue-400 hover:underline">isecom.org</a></td>
                    <td class="p-4 border border-gray-700"><a href="https://pentest-standard.org" class="text-blue-400 hover:underline">pentest-standard.org</a></td>
                    <td class="p-4 border border-gray-700"><span class="text-gray-500 italic">Sitio inactivo</span></td>
                </tr>
                <tr>
                    <td class="p-4 border border-gray-700 bg-white/5 font-bold text-white">H. Certificaciones</td>
                    <td class="p-4 border border-gray-700">MAD (MITRE ATT&CK Defender).</td>
                    <td class="p-4 border border-gray-700">No directa (OSWE, GWAPT).</td>
                    <td class="p-4 border border-gray-700">No directa (CISA, CISSP).</td>
                    <td class="p-4 border border-gray-700">OPST, OPSA.</td>
                    <td class="p-4 border border-gray-700">Referencia p/ OSCP, eCPPT.</td>
                    <td class="p-4 border border-gray-700">Legado (IACRB).</td>
                </tr>
                <tr>
                    <td class="p-4 border border-gray-700 bg-white/5 font-bold text-white">I. Versiones</td>
                    <td class="p-4 border border-gray-700 text-green-400 font-bold">v16 (Activa).</td>
                    <td class="p-4 border border-gray-700 text-green-400 font-bold">v4.2 Stable.</td>
                    <td class="p-4 border border-gray-700 text-yellow-500 font-bold">Rev 1 (Base).</td>
                    <td class="p-4 border border-gray-700 text-green-400 font-bold">v3.0 (Vigente).</td>
                    <td class="p-4 border border-gray-700 text-green-400 font-bold">v1.0 (Constante).</td>
                    <td class="p-4 border border-gray-700 text-red-500 font-bold">Descontinuado.</td>
                </tr>
            </tbody>
        </table>
      </div>
      <h2 class="text-violet-400 font-mono text-lg mt-12 mb-4">MATRIZ DE SELECCIÓN SEGÚN PERFIL ORGANIZACIONAL</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div class="bg-blue-900/10 border border-blue-500/20 p-4 rounded-lg">
          <h4 class="text-blue-400 font-black mb-2 flex items-center gap-2"><span class="text-xs">01</span> CORPORATIVO / FEDERAL</h4>
          <p class="text-xs text-gray-400"><strong>MARCO:</strong> NIST SP 800-115</p>
          <p class="text-xs text-gray-400">Ideal para cumplimiento normativo y auditorías gubernamentales donde la rigurosidad documental es la prioridad máxima.</p>
        </div>
        <div class="bg-purple-900/10 border border-purple-500/20 p-4 rounded-lg">
          <h4 class="text-purple-400 font-black mb-2 flex items-center gap-2"><span class="text-xs">02</span> SERVICIOS WEB / SAAS</h4>
          <p class="text-xs text-gray-400"><strong>MARCO:</strong> OWASP WSTG</p>
          <p class="text-xs text-gray-400">El estándar de facto para aplicaciones modernas; enfocado en lógica de negocio, APIs y vulnerabilidades de capa 7.</p>
        </div>
        <div class="bg-violet-900/10 border border-violet-500/20 p-4 rounded-lg">
          <h4 class="text-violet-400 font-black mb-2 flex items-center gap-2"><span class="text-xs">03</span> COMERCIAL / OFFENSIVE</h4>
          <p class="text-xs text-gray-400"><strong>MARCO:</strong> PTES</p>
          <p class="text-xs text-gray-400">Enfocado en resultados técnicos profundos, post-explotación y generación de valor real para los equipos de TI.</p>
        </div>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-12 mb-4">CICLO DE VIDA TÁCTICO (CASO PTES)</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div class="bg-violet-900/10 p-5 border-t-2 border-violet-500 rounded-b">
            <h4 class="font-bold text-violet-400 text-xs mb-2">01. PRE-ENGAGEMENT</h4>
            <p class="text-xs text-gray-400 italic">Definición de RoE (Rules of Engagement), alcance técnico y salvaguardas legales.</p>
        </div>
        <div class="bg-blue-900/10 p-5 border-t-2 border-blue-500 rounded-b">
            <h4 class="font-bold text-blue-400 text-xs mb-2">02. INTEL GATHERING</h4>
            <p class="text-xs text-gray-400 italic">OSINT masivo para identificar la huella digital del objetivo sin interacción directa.</p>
        </div>
        <div class="bg-yellow-900/10 p-5 border-t-2 border-yellow-500 rounded-b">
            <h4 class="font-bold text-yellow-400 text-xs mb-2">03. VULN ANALYSIS</h4>
            <p class="text-xs text-gray-400 italic">Identificación proactiva de vectores de entrada (0-days, CVEs y misconfigs).</p>
        </div>
        <div class="bg-red-900/10 p-5 border-t-2 border-red-500 rounded-b">
            <h4 class="font-bold text-red-400 text-xs mb-2">04. POST-EXPLOITATION</h4>
            <p class="text-xs text-gray-400 italic">Determinación del valor real del compromiso y persistencia en la red.</p>
        </div>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-12 mb-4">CONCLUSIÓN ESTRATÉGICA</h2>
      <p>Adoptar un marco como <strong>PTES</strong> u <strong>OSSTMM</strong> no es opcional para un auditor profesional. Estas herramientas permiten pasar de una simple búsqueda de vulnerabilidades a un análisis de riesgos estructurado que aporta valor real al negocio.</p>

      <h2 class="mt-12 text-purple-400 font-mono">Referencias Bibliográficas</h2>
      <ul class="list-decimal pl-6 space-y-2 text-sm text-gray-400">
        <li>PTES Team. (2024). <strong>The Penetration Testing Execution Standard</strong>. <a href="http://www.pentest-standard.org" class="text-blue-400 hover:underline">pentest-standard.org</a></li>
        <li>MITRE Corporation. (2024). <strong>ATT&CK Framework: Tactics and Techniques</strong>. <a href="https://attack.mitre.org" class="text-blue-400 hover:underline">attack.mitre.org</a></li>
        <li>Herzog, P. (2021). <strong>OSSTMM 3: The Open Source Security Testing Methodology Manual</strong>. ISECOM.</li>
      </ul>
    `
  },
  {
    id: 6,
    title: "ACTIVIDAD 06 - Implementación de VPN IPSec y Seguridad en Capa 2 (Packet Tracer)",
    description: "Configuración profesional de un túnel Site-to-Site VPN usando IPSec y aplicación de medidas de endurecimiento (Hardening) en infraestructura Cisco.",
    date: "2026-02-23",
    tags: ["IPSec", "VPN", "Cisco Packet Tracer", "ACL", "Layer 2 Security"],
    content: `
      <div class="bg-violet-900/10 border border-violet-500/20 rounded p-4 mb-8 font-mono text-xs">
        <p><span class="text-violet-400">ESTUDIANTE:</span> Moreno Solís Gisela Geraldine</p>
        <p><span class="text-violet-400">DOCENTE:</span> Mtro. Servando López Contreras</p>
        <p><span class="text-violet-400">CURSO:</span> CNO V SEGURIDAD INFORMATICA</p>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mb-4">DESPLIEGUE DE INFRAESTRUCTURA: TÚNEL VPN IPSEC (LOG-06)</h2>
      <p class="mb-6">El presente reporte técnico detalla la interconexión segura de dos sedes corporativas utilizando el marco de seguridad <strong>IPSec</strong> para garantizar la confidencialidad, integridad y autenticidad de los datos en tránsito sobre redes públicas.</p>

      <!-- Galería de Topología -->
      <div class="my-10">
        <h3 class="text-violet-400 font-mono text-md mb-4 flex items-center gap-2">
          <span class="bg-violet-500/20 px-2 py-0.5 rounded text-xs">TOPOLOGY_MAP</span>
          DIAGRAMA DE RED Y TÚNEL ESTABLECIDO
        </h3>
        <div class="bg-black/40 border border-violet-500/30 rounded-lg p-2 shadow-2xl overflow-hidden">
          <img src="/parcial1/evidence/act06/image31.png" alt="Topología Final VPN IPSec" class="w-full rounded border border-gray-800 hover:scale-[1.02] transition-transform duration-500" />
          <p class="text-xs text-gray-500 mt-2 text-center italic">Fig 1.1: Diagrama de red Site-to-Site con túnel IPSec activo entre R1 y R2.</p>
        </div>
      </div>

      <div class="bg-blue-900/10 border border-blue-500/20 rounded-lg p-6 my-8">
        <h3 class="text-blue-400 font-mono text-md mb-3 flex items-center gap-2">
          <span class="bg-blue-500/20 px-2 py-0.5 rounded text-xs">AUTH_REQUIRED</span>
          PRE-REQUISITO: LICENCIAMIENTO DE SEGURIDAD
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <p class="text-sm text-gray-300 mb-4 font-mono">Para habilitar el conjunto de comandos criptográficos en routers Cisco ISR, se debe activar el paquete 'securityk9'.</p>
            <div class="bg-black p-4 rounded font-mono text-xs text-cyan-400 mb-2 border border-cyan-900/30">
                Router# <span class="text-white">license boot module c1900 technology-package securityk9</span>
            </div>
          </div>
          <div class="border border-gray-800 rounded overflow-hidden shadow-lg bg-black/20 p-1">
            <img src="/parcial1/evidence/act06/image13.png" alt="Activación de Licencia" class="w-full opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-10 mb-4">CONFIGURACIÓN TÉCNICA Y EVIDENCIA CLI</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div class="space-y-4">
          <div class="bg-white/5 p-4 rounded border border-gray-800">
            <h4 class="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">Evidencia R1 Config</h4>
            <img src="/parcial1/evidence/act06/image6.png" alt="Configuración Router 1" class="w-full rounded border border-gray-900 shadow-md" />
          </div>
          <div class="bg-white/5 p-4 rounded border border-gray-800">
            <h4 class="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">Evidencia ISP Config</h4>
            <img src="/parcial1/evidence/act06/image10.png" alt="Configuración ISP" class="w-full rounded border border-gray-900 shadow-md" />
          </div>
        </div>
        <div class="space-y-4">
          <div class="bg-white/5 p-4 rounded border border-gray-800 h-full flex flex-col justify-center">
            <h4 class="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">Evidencia R2 Config</h4>
            <img src="/parcial1/evidence/act06/image8.png" alt="Configuración Router 2" class="w-full rounded border border-gray-900 shadow-md mb-2" />
            <p class="text-[9px] text-gray-500 italic">Captura del proceso de asignación de direccionamiento IP y levantamiento de interfaces en la sede remota.</p>
          </div>
        </div>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-10 mb-4">HARDENING CAPA 2: SEGURIDAD DE PUERTO</h2>
      <p class="mb-6">Para prevenir ataques de envenenamiento de tabla CAM y suplantación de MAC, se implementó <strong>Port Security</strong> en todos los puertos de acceso de la infraestructura local.</p>
      
      <div class="bg-black border border-gray-700/50 rounded-lg p-5 font-mono text-xs text-green-500 mb-8 shadow-2xl relative overflow-hidden">
        <div class="absolute top-0 right-0 p-2 opacity-10">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div class="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
          <span class="w-3 h-3 rounded-full bg-red-500"></span>
          <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span class="w-3 h-3 rounded-full bg-green-500"></span>
          <span class="ml-2 text-gray-500 uppercase text-[9px] tracking-tighter">SecureShell V2 — Switch#conf t</span>
        </div>
        <pre class="leading-relaxed">
<span class="text-gray-500">! Configuración de puertos de usuario final</span>
Switch(config)# interface range fa0/1 - 10
Switch(config-if-range)# <span class="text-white">switchport mode access</span>
Switch(config-if-range)# <span class="text-white">switchport port-security</span>
Switch(config-if-range)# <span class="text-white">switchport port-security maximum 1</span>
Switch(config-if-range)# <span class="text-white">switchport port-security violation shutdown</span>
Switch(config-if-range)# <span class="text-white">switchport port-security mac-address sticky</span>
        </pre>
      </div>

      <div class="overflow-x-auto my-10">
        <table class="w-full text-left border-collapse border border-gray-800 rounded-lg overflow-hidden">
            <thead class="bg-[#1a1f2e] text-cyan-400 text-xs uppercase">
                <tr>
                    <th class="p-4 border border-gray-800">Parámetro</th>
                    <th class="p-4 border border-gray-800">Valor Configurado</th>
                    <th class="p-4 border border-gray-800">Mecanismo de Defensa</th>
                </tr>
            </thead>
            <tbody class="text-sm text-gray-300">
                <tr><td class="p-4 border border-gray-800 font-mono text-violet-300">Maximum 1</td><td class="p-4 border border-gray-800">1 MAC Admin</td><td class="p-4 border border-gray-800">Previene el desbordamiento de tabla MAC (MAC Flooding).</td></tr>
                <tr><td class="p-4 border border-gray-800 font-mono text-violet-300">Violation Shutdown</td><td class="p-4 border border-gray-800">Action: err-disable</td><td class="p-4 border border-gray-800">Bloqueo físico inmediato ante intentos de intrusión.</td></tr>
                <tr><td class="p-4 border border-gray-800 font-mono text-violet-300">MAC Sticky</td><td class="p-4 border border-gray-800">Sticky learning</td><td class="p-4 border border-gray-800">Persistencia de confianza sin carga administrativa manual.</td></tr>
            </tbody>
        </table>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-12 mb-4">POLÍTICA DE TRÁFICO INTERESANTE (VPN ACL)</h2>
      <p class="mb-4">Se utilizó una lista de control de acceso extendida para segmentar exactamente qué flujos de datos deben ser redirigidos y cifrados por el motor criptográfico.</p>

      <div class="bg-gray-900/20 border border-gray-800 rounded p-4 font-mono text-xs mb-10">
        <p class="text-cyan-400 italic mb-2"># access-list 101 permit ip [Origen] [Máscara] [Destino] [Máscara]</p>
        <p class="text-white">access-list 101 permit ip 192.168.1.0 0.0.0.255 10.0.0.0 0.255.255.255</p>
        <div class="mt-3 text-red-500/80 uppercase tracking-tighter text-xs">
          [ WARNING: Al aplicar esta ACL al crypto map, todo tráfico no coincidente será enviado en texto plano si no se configura un Default Drop. ]
        </div>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-12 mb-4">CONCLUSIÓN DEL DESPLIEGUE</h2>
      <p>La implementación exitosa de este laboratorio demuestra que la seguridad no es un componente estático. La integración de <strong>VPN IPSec</strong> para proteger el perímetro y <strong>Port Security</strong> para proteger el núcleo (Capa 2), crea una arquitectura de defensa en profundidad resiliente ante amenazas internas y externas.</p>

      <h2 class="mt-12 text-blue-400 font-mono font-bold tracking-widest border-b border-blue-900/50 pb-2">REFERENCIAS BIBLIOGRÁFICAS</h2>
      <ul class="list-decimal pl-6 mt-4 space-y-2 text-sm text-gray-400 font-mono">
        <li>Cisco Systems. (2024). <strong>Cisco IOS Security Configuration Guide</strong>. Cisco Press.</li>
        <li>Graziani, R. (2017). <strong>CCNA Routing and Switching Study Guide</strong>. Cisco Press.</li>
        <li>López Contreras, S. (2025). <strong>Apuntes: Seguridad en Infraestructura de Red</strong>.</li>
      </ul>
    `
  },
  {
    id: "PR02",
    title: "PROYECTO PR02 - El eslabón más débil: diseño ético de una campaña de ingeniería social",
    description: "Evaluación exhaustiva de 8 plataformas líderes y diseño de un simulador de resiliencia humana bajo estándares NIST y ética digital.",
    date: "2026-03-06",
    tags: ["Phishing", "Risk Score", "NIST SP 800-50", "Ingeniería Social", "Behavioral Defense"],
    content: `
      <div class="bg-amber-500/10 border border-amber-500/20 rounded p-6 mb-8 font-mono relative overflow-hidden">
        <div class="absolute top-0 right-0 p-2 bg-amber-500/20 text-xs text-amber-400 font-bold uppercase tracking-widest">Auditoría de Resiliencia</div>
        <p class="text-xs mb-1"><span class="text-amber-400 font-bold">CASO DE ESTUDIO:</span> PR02 - El Eslabón Más Débil</p>
        <p class="text-xs mb-1"><span class="text-amber-400 font-bold">AUTOR:</span> Moreno Solís Gisela Geraldine</p>
        <p class="text-xs mb-1"><span class="text-amber-400 font-bold">DOCENTE:</span> Mtro. Servando López Contreras</p>
        <p class="text-xs"><span class="text-amber-400 font-bold">ESTADO:</span> <span class="text-green-500">PUBLICACIÓN FINAL OPTIMIZADA (RÚBRICA ALIGN)</span></p>
      </div>

      <h2 class="text-amber-400 font-mono text-2xl mb-6 flex items-center gap-3">
        <span class="text-gray-600">01_</span> MARCO TEÓRICO Y FUNDAMENTACIÓN TÉCNICA
      </h2>
      <div class="prose prose-invert max-w-none text-sm text-gray-400 mb-10 space-y-4">
        <p>En la arquitectura de ciberdefensa moderna, la ingeniería social explota la <strong>vulnerabilidad cognitiva</strong>. Mientras que los perímetros técnicos (Firewalls, EDR) son deterministas, el comportamiento humano es maleable mediante disparadores psicológicos como la urgencia, la autoridad y el miedo.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div class="bg-black/40 p-4 border-t-2 border-amber-500 rounded-b shadow-lg">
            <h4 class="text-white font-bold text-xs mb-2 uppercase">Click Rate (CR)</h4>
            <p class="text-xs italic">Probabilidad de vulneración inicial. Mide el éxito del engaño táctico.</p>
          </div>
          <div class="bg-black/40 p-4 border-t-2 border-green-500 rounded-b shadow-lg">
            <h4 class="text-white font-bold text-xs mb-2 uppercase">Reporting Rate (RR)</h4>
            <p class="text-xs italic">Efectividad del sensor humano. Es el KPI de éxito de la concienciación.</p>
          </div>
          <div class="bg-black/40 p-4 border-t-2 border-blue-500 rounded-b shadow-lg">
            <h4 class="text-white font-bold text-xs mb-2 uppercase">Risk Score (RS)</h4>
            <p class="text-xs italic">Cuantificación del riesgo individual basada en historial y recurrencia.</p>
          </div>
          <div class="bg-black/40 p-4 border-t-2 border-red-500 rounded-b shadow-lg">
            <h4 class="text-white font-bold text-xs mb-2 uppercase">Resilience Score</h4>
            <p class="text-xs italic">Triangulación entre CR vs RR. Determina la supervivencia real ante un ataque.</p>
          </div>
        </div>
      </div>

      <h2 class="text-amber-400 font-mono text-2xl mb-6 flex items-center gap-3">
        <span class="text-gray-600">02_</span> ANÁLISIS INDIVIDUAL DE LAS 8 PLATAFORMAS (DEEP DIVE)
      </h2>
      
      <div class="space-y-4 mb-12">

        <!-- 1. Hoxhunt -->
        <details class="bg-[#0a0f1a] border border-gray-800 rounded-lg group overflow-hidden" open>
            <summary class="p-4 cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors">
                <span class="flex items-center gap-3">
                    <span class="text-amber-500 font-mono font-bold">01</span>
                    <strong class="text-white text-sm uppercase tracking-widest">Hoxhunt — Transformaci&oacute;n Conductual con IA Ag&eacute;ntica</strong>
                </span>
                <span class="text-xs bg-amber-500/20 text-amber-500 px-2 py-1 rounded">IA ADAPTATIVA | HELSINKI 2016</span>
            </summary>
            <div class="p-6 border-t border-gray-800 text-sm text-gray-400 leading-relaxed space-y-3">
                <p>Fundada en Helsinki (2016), Hoxhunt reemplaza el entrenamiento pasivo con <strong>micro-exposiciones frecuentes y gamificadas</strong> impulsadas por IA. Opera en m&aacute;s de 100 pa&iacute;ses con una de las tasas de engagement m&aacute;s altas del mercado. Su filosof&iacute;a central: la concienciaci&oacute;n no se logra con videos anuales o ex&aacute;menes de cumplimiento, sino con est&iacute;mulos continuos, personalizados y emocionalmente relevantes para cada usuario.</p>
                <h4 class="text-amber-400 font-bold uppercase tracking-widest text-xs">AGENTIC REASONING ENGINE (NOV. 2025)</h4>
                <p>Procesa m&aacute;s de <strong>12 se&ntilde;ales en tiempo real</strong> por usuario: habilidad hist&oacute;rica, funci&oacute;n laboral, geolocalizaci&oacute;n, idioma, dispositivo principal y telemetr&iacute;a de ataques reales del entorno corporativo. Selecciona aut&oacute;nomamente la simulaci&oacute;n de mayor impacto educativo. Los administradores configuran &ldquo;grounding rules&rdquo; en lenguaje natural para orientar las decisiones de la IA hacia objetivos organizacionales espec&iacute;ficos.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-amber-500/5 border border-amber-500/20 p-3 rounded">
                        <span class="text-amber-400 font-bold text-xs uppercase block mb-1">Hoxhunt Respond (2025)</span>
                        <p class="text-xs text-gray-500">Suite SOC con IA que reduce alertas en <strong class="text-white">97%</strong> y clasifica correos maliciosos con precisi&oacute;n del <strong class="text-white">99%</strong>. Categoriza incidentes autom&aacute;ticamente y genera feedback al usuario que report&oacute; en segundos, cerrando el ciclo educativo sin intervenci&oacute;n humana.</p>
                    </div>
                    <div class="bg-amber-500/5 border border-amber-500/20 p-3 rounded">
                        <span class="text-amber-400 font-bold text-xs uppercase block mb-1">Spear Phishing Agent (Verano 2025)</span>
                        <p class="text-xs text-gray-500">Genera simulaciones hiperpersonalizadas usando el perfil p&uacute;blico del empleado (LinkedIn, firma de correo, proyectos corporativos) para replicar ataques de IA generativa dirigidos. Aborda la brecha del entrenamiento gen&eacute;rico ante spear phishing real.</p>
                    </div>
                    <div class="bg-amber-500/5 border border-amber-500/20 p-3 rounded">
                        <span class="text-amber-400 font-bold text-xs uppercase block mb-1">Gamificaci&oacute;n de Alto Engagement</span>
                        <p class="text-xs text-gray-500">Puntos, insignias de nivel y leaderboards departamentales logran tasas de participaci&oacute;n activa superiores al <strong class="text-white">60%</strong> de la plantilla (vs. 10% de plataformas de e-learning pasivo tradicional sin elementos l&uacute;dicos).</p>
                    </div>
                    <div class="bg-amber-500/5 border border-amber-500/20 p-3 rounded">
                        <span class="text-amber-400 font-bold text-xs uppercase block mb-1">Smishing + Deepfakes de Voz/Video</span>
                        <p class="text-xs text-gray-500">App iOS para reportar smishing (Mar. 2025). Simulaciones inmersivas de deepfake de voz y video para entrenar ante el vector de vishing potenciado por IA generativa, el de mayor crecimiento en 2025-2026 seg&uacute;n Gartner.</p>
                    </div>
                </div>
                <p class="text-xs text-gray-500">Integraci&oacute;n t&eacute;cnica: add-in nativo Outlook 365/Gmail, Microsoft Defender (alertas EDR), CrowdStrike y SIEMs. Generaci&oacute;n de contenido en 30+ idiomas desde agosto 2024. Cumplimiento: GDPR, ISO 27001.</p>
                <div class="bg-black/30 border border-gray-700 p-3 rounded">
                    <span class="text-gray-300 text-xs font-bold uppercase block mb-1">&#9888; An&aacute;lisis Cr&iacute;tico</span>
                    <p class="text-xs text-gray-500 italic">Dependencia cr&iacute;tica del add-in: sin plugin instalado la visibilidad del SOC sobre ese usuario es nula. En culturas corporativas jer&aacute;rquicas el sistema de anonimato puede erosionarse: los empleados reportan para evitar ser se&ntilde;alados en lugar de aprender genuinamente, distorsionando las m&eacute;tricas reales de aprendizaje.</p>
                </div>
            </div>
        </details>

        <!-- 2. Proofpoint -->
        <details class="bg-[#0a0f1a] border border-gray-800 rounded-lg group overflow-hidden">
            <summary class="p-4 cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors">
                <span class="flex items-center gap-3">
                    <span class="text-amber-500 font-mono font-bold">02</span>
                    <strong class="text-white text-sm uppercase tracking-widest">Proofpoint &mdash; Seguridad Centrada en Personas y VAPs</strong>
                </span>
                <span class="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">SOC INTELLIGENCE | THREAT-INFORMED</span>
            </summary>
            <div class="p-6 border-t border-gray-800 text-sm text-gray-400 leading-relaxed space-y-3">
                <p>Filosof&iacute;a de <strong>"Seguridad Centrada en las Personas"</strong>: el punto de partida son los datos reales de qu&eacute; usuarios son atacados, con qu&eacute; herramientas y con qu&eacute; frecuencia. Garantiza que cada simulaci&oacute;n sea contextualmente relevante para la amenaza real que enfrenta la organizaci&oacute;n.</p>
                <h4 class="text-blue-400 font-bold uppercase tracking-widest text-xs">VERY ATTACKED PEOPLE (VAP) &mdash; EL HALLAZGO CONTRAINTUITIVO</h4>
                <p>Las personas m&aacute;s atacadas <em>no son los ejecutivos</em>: son RRHH (acceso a datos personales), Marketing, Finanzas y aliases gen&eacute;ricos como <code class="text-amber-400 bg-black/30 px-1 rounded">ventas@empresa.com</code>. El <strong>Proofpoint Attack Index</strong> cruza tipo de payload, frecuencia de ataques, actor de amenaza identificado y potencial de da&ntilde;o del rol para priorizar el entrenamiento donde m&aacute;s importa.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-blue-500/5 border border-blue-500/20 p-3 rounded">
                        <span class="text-blue-400 font-bold text-xs uppercase block mb-1">Proofpoint Satori Agent (2024)</span>
                        <p class="text-xs text-gray-500">IA que convierte autom&aacute;ticamente correos de phishing reales interceptados por el gateway en simulaciones seguras con Teachable Moment contextual adjunto, sin intervenci&oacute;n del equipo de seguridad.</p>
                    </div>
                    <div class="bg-blue-500/5 border border-blue-500/20 p-3 rounded">
                        <span class="text-blue-400 font-bold text-xs uppercase block mb-1">QR Code Phishing / Quishing (2024)</span>
                        <p class="text-xs text-gray-500">El <strong class="text-white">80%</strong> de usuarios percibe los QR como inherentemente seguros. Proofpoint lanz&oacute; en 2024 simulaciones de Quishing (QR &rarr; p&aacute;gina de captura de credenciales), eludiendo filtros de gateway que no procesan im&aacute;genes.</p>
                    </div>
                    <div class="bg-blue-500/5 border border-blue-500/20 p-3 rounded">
                        <span class="text-blue-400 font-bold text-xs uppercase block mb-1">TAP + Awareness: Vulnerability Score Unificado</span>
                        <p class="text-xs text-gray-500">Correlaci&oacute;n entre clics en simulaciones y clics en amenazas reales v&iacute;a Targeted Attack Protection (TAP). Genera un Vulnerability Score unificado que refleja el riesgo verdadero del usuario, no solo el simulado.</p>
                    </div>
                    <div class="bg-blue-500/5 border border-blue-500/20 p-3 rounded">
                        <span class="text-blue-400 font-bold text-xs uppercase block mb-1">Cybersecurity Heroes Program (2024)</span>
                        <p class="text-xs text-gray-500">Curr&iacute;culo anual de 12 m&oacute;dulos mensuales: cifrado de datos, contrase&ntilde;as seguras, ransomware, riesgos m&oacute;viles, BEC. Concienciaci&oacute;n continua sin depender de campa&ntilde;as reactivas puntuales.</p>
                    </div>
                </div>
                <p class="text-xs text-gray-500">Cumplimiento: <strong class="text-white">NIST, FISMA, SOC2 Type II, GDPR, FedRAMP Ready</strong>. Especialmente prominente en sector p&uacute;blico norteamericano y proveedores de defensa.</p>
                <div class="bg-black/30 border border-gray-700 p-3 rounded">
                    <span class="text-gray-300 text-xs font-bold uppercase block mb-1">&#9888; An&aacute;lisis Cr&iacute;tico</span>
                    <p class="text-xs text-gray-500 italic">Ecosistema cerrado: organizaciones sin el gateway de Proofpoint pierden la correlaci&oacute;n TAP &rarr; simulaciones, el diferenciador m&aacute;s valioso. El costo del bundle gateway + awareness es uno de los m&aacute;s elevados del mercado, limitando su adopci&oacute;n en empresas medianas.</p>
                </div>
            </div>
        </details>

        <!-- 3. KnowBe4 -->
        <details class="bg-[#0a0f1a] border border-gray-800 rounded-lg group overflow-hidden">
            <summary class="p-4 cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors">
                <span class="flex items-center gap-3">
                    <span class="text-amber-500 font-mono font-bold">03</span>
                    <strong class="text-white text-sm uppercase tracking-widest">KnowBe4 &mdash; L&iacute;der Global en Human Risk Management</strong>
                </span>
                <span class="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">HRM L&Iacute;DER | 70K+ CLIENTES</span>
            </summary>
            <div class="p-6 border-t border-gray-800 text-sm text-gray-400 leading-relaxed space-y-3">
                <p>Fundada en 2010 por Kevin Mitnick (ex-hacker m&aacute;s buscado del FBI reconvertido en evangelista de seguridad) y Stuart Sjouwerman. Con m&aacute;s de <strong>70,000 organizaciones</strong> clientes, es la plataforma HRM con mayor cuota de mercado mundial. Su propuesta: la vulnerabilidad humana es cuantificable y reducible mediante entrenamiento sistem&aacute;tico basado en datos.</p>
                <h4 class="text-green-400 font-bold uppercase tracking-widest text-xs">BENCHMARK 2025 &mdash; EL ESTUDIO M&Aacute;S GRANDE DE LA INDUSTRIA</h4>
                <p><em>Phishing By Industry Benchmarking Report 2025</em>: <strong>67.7 millones de simulaciones</strong> en 14.5 millones de usuarios de 62,400 organizaciones en 6 continentes. El estudio emp&iacute;rico m&aacute;s grande sobre vulnerabilidad humana al phishing jam&aacute;s publicado.</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div class="bg-green-900/20 border border-green-800/40 p-3 rounded text-center">
                        <div class="text-green-400 font-black text-lg">33.1%</div>
                        <div class="text-xs text-gray-500 mt-1">PPP Baseline sin ning&uacute;n entrenamiento previo</div>
                    </div>
                    <div class="bg-green-900/20 border border-green-800/40 p-3 rounded text-center">
                        <div class="text-green-400 font-black text-lg">19.1%</div>
                        <div class="text-xs text-gray-500 mt-1">PPP a los 90 d&iacute;as (reducci&oacute;n del 42%)</div>
                    </div>
                    <div class="bg-green-900/20 border border-green-800/40 p-3 rounded text-center">
                        <div class="text-green-400 font-black text-lg">4.1%</div>
                        <div class="text-xs text-gray-500 mt-1">PPP tras 12 meses de entrenamiento continuo</div>
                    </div>
                    <div class="bg-green-900/20 border border-green-800/40 p-3 rounded text-center">
                        <div class="text-green-400 font-black text-lg">41.9%</div>
                        <div class="text-xs text-gray-500 mt-1">Healthcare: el sector m&aacute;s vulnerable del planeta</div>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    <div class="bg-green-500/5 border border-green-500/20 p-3 rounded">
                        <span class="text-green-400 font-bold text-xs uppercase block mb-1">PhishER Plus &mdash; SOAR para Email Reportado</span>
                        <p class="text-xs text-gray-500"><em>PhishML</em> categoriza reportes en: limpio, spam o amenaza real. <strong class="text-white">PhishRIP</strong> elimina la misma variante de ataque de todos los buzones de la organizaci&oacute;n simult&aacute;neamente. <em>Global Blocklist</em> bloquea variantes similares proactivamente. G2 Winter 2025: 93/100 satisfaction score en categor&iacute;a SOAR.</p>
                    </div>
                    <div class="bg-green-500/5 border border-green-500/20 p-3 rounded">
                        <span class="text-green-400 font-bold text-xs uppercase block mb-1">AIDA &mdash; AI Defense Agents</span>
                        <p class="text-xs text-gray-500">Suite de IA generativa: <em>AIDA Template Generation</em> crea plantillas de phishing y callback-phishing controlando dificultad y SEIs (Social Engineering Indicators). <strong class="text-white">PhishFlip</strong> convierte ataques reales reportados en simulaciones educativas inmediatas sin trabajo manual.</p>
                    </div>
                    <div class="bg-green-500/5 border border-green-500/20 p-3 rounded">
                        <span class="text-green-400 font-bold text-xs uppercase block mb-1">Biblioteca: La M&aacute;s Vasta del Mercado</span>
                        <p class="text-xs text-gray-500">+1,000 plantillas de simulaci&oacute;n y miles de m&oacute;dulos en 35+ idiomas. Threat Intelligence crowdsourced de 13M+ usuarios. Benchmarking sectorial: Insurance 39.2%, Retail 36.5%, Banking 22.3%. Cada empresa puede compararse con su industria exacta.</p>
                    </div>
                    <div class="bg-green-500/5 border border-green-500/20 p-3 rounded">
                        <span class="text-green-400 font-bold text-xs uppercase block mb-1">Integraci&oacute;n Enterprise</span>
                        <p class="text-xs text-gray-500">Sincronizaci&oacute;n AD / Azure AD v&iacute;a API Push autom&aacute;tica. Integraci&oacute;n con SIEMs (Splunk, Sentinel) y SOAR. Cumplimiento certificado: <strong class="text-white">HIPAA, PCI-DSS, SOC2 Type II, GDPR, ISO 27001</strong>. Instancias dedicadas para sectores altamente regulados.</p>
                    </div>
                </div>
                <div class="bg-black/30 border border-gray-700 p-3 rounded">
                    <span class="text-gray-300 text-xs font-bold uppercase block mb-1">&#9888; An&aacute;lisis Cr&iacute;tico</span>
                    <p class="text-xs text-gray-500 italic">La vastedad de opciones es tambi&eacute;n su mayor fricci&oacute;n: equipos IT peque&ntilde;os reportan par&aacute;lisis de decisiones ante las m&uacute;ltiples configuraciones disponibles. El tier Diamond (requerido para AIDA completo) tiene precio premium prohibitivo para organizaciones medianas sin presupuesto consolidado de ciberseguridad.</p>
                </div>
            </div>
        </details>

        <!-- 4. Cofense -->
        <details class="bg-[#0a0f1a] border border-gray-800 rounded-lg group overflow-hidden">
            <summary class="p-4 cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors">
                <span class="flex items-center gap-3">
                    <span class="text-amber-500 font-mono font-bold">04</span>
                    <strong class="text-white text-sm uppercase tracking-widest">Cofense &mdash; El Empleado como Sensor Activo del SOC</strong>
                </span>
                <span class="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">SENSOR ACTIVO | SOAR-NATIVE</span>
            </summary>
            <div class="p-6 border-t border-gray-800 text-sm text-gray-400 leading-relaxed space-y-3">
                <p>Cofense (antes PhishMe) parte de una premisa radical: <strong>los seres humanos detectan phishing que los filtros autom&aacute;ticos dejan pasar</strong>. Su arquitectura convierte a cada empleado en un sensor activo del SOC. Un empleado entrenado detecta ataques BEC zero-day que ning&uacute;n scanner puede identificar porque el correo no contiene links ni adjuntos maliciosos: solo texto de ingenier&iacute;a social pura.</p>
                <h4 class="text-red-400 font-bold uppercase tracking-widest text-xs">COFENSE INTELLIGENCE NETWORK &mdash; INTELIGENCIA COLECTIVA REAL</h4>
                <p>Base de datos construida <em>exclusivamente</em> con correos maliciosos detectados por empleados reales en organizaciones reales, no por scanners automatizados. Captura amenazas zero-day dise&ntilde;adas para evadir filtros SEG (Secure Email Gateway): precisamente las m&aacute;s peligrosas porque los equipos de seguridad no saben que llegaron.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-red-500/5 border border-red-500/20 p-3 rounded">
                        <span class="text-red-400 font-bold text-xs uppercase block mb-1">Cofense Triage 1.30 &mdash; IA + YARA (Dic 2025)</span>
                        <p class="text-xs text-gray-500">Asigna un <em>Cofense Confidence Score</em> por IA con <strong class="text-white">Explainable Insights</strong> (transparencia en las decisiones del modelo). Automatiza cuarentenas por umbrales configurables. Soporta reglas <strong class="text-white">YARA</strong> personalizadas para identificar patrones de campa&ntilde;as APT persistentes conocidas.</p>
                    </div>
                    <div class="bg-red-500/5 border border-red-500/20 p-3 rounded">
                        <span class="text-red-400 font-bold text-xs uppercase block mb-1">Smart Clustering + Reporter Reputation</span>
                        <p class="text-xs text-gray-500">Agrupa reportes de la misma campa&ntilde;a en un cl&uacute;ster para que el SOC procese el incidente completo como unidad. El sistema de <em>Reporter Reputation</em> punt&uacute;a la precisi&oacute;n hist&oacute;rica de cada empleado que reporta, priorizando aquellos con mayor tasa de aciertos.</p>
                    </div>
                    <div class="bg-red-500/5 border border-red-500/20 p-3 rounded">
                        <span class="text-red-400 font-bold text-xs uppercase block mb-1">Integraci&oacute;n SOAR: Splunk + Cortex XSOAR</span>
                        <p class="text-xs text-gray-500">IOCs (URLs, hashes SHA256, cabeceras SMTP, dominios) extra&iacute;dos de reportes enriquecen playbooks autom&aacute;ticamente. Activa: cuarentena de emails, descarga de adjuntos para sandbox analysis y notificaci&oacute;n al equipo IR sin intervenci&oacute;n manual.</p>
                    </div>
                    <div class="bg-red-500/5 border border-red-500/20 p-3 rounded">
                        <span class="text-red-400 font-bold text-xs uppercase block mb-1">Cofense PhishMe &mdash; Simulaciones de Inteligencia Real</span>
                        <p class="text-xs text-gray-500">Las plantillas se alimentan de la red de inteligencia colectiva: son r&eacute;plicas exactas de ataques que impactaron organizaciones reales en los &uacute;ltimos 30 d&iacute;as. No son escenarios ficticios gen&eacute;ricos: el entrenamiento es siempre relevante para la amenaza actual del sector.</p>
                    </div>
                </div>
                <div class="bg-black/30 border border-gray-700 p-3 rounded">
                    <span class="text-gray-300 text-xs font-bold uppercase block mb-1">&#9888; An&aacute;lisis Cr&iacute;tico</span>
                    <p class="text-xs text-gray-500 italic">Si los empleados no reportan activamente, el valor de la plataforma colapsa completamente. Implementar Cofense en culturas donde el reporte se percibe como delaci&oacute;n o carga adicional requiere un programa previo de gesti&oacute;n del cambio cultural que normalice el reporte como comportamiento hero&iacute;co y valorado por la organizaci&oacute;n.</p>
                </div>
            </div>
        </details>

        <!-- 5. Phished -->
        <details class="bg-[#0a0f1a] border border-gray-800 rounded-lg group overflow-hidden">
            <summary class="p-4 cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors">
                <span class="flex items-center gap-3">
                    <span class="text-amber-500 font-mono font-bold">05</span>
                    <strong class="text-white text-sm uppercase tracking-widest">Phished &mdash; Piloto Autom&aacute;tico con Behavioral Risk Score</strong>
                </span>
                <span class="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">ZERO-ADMIN | BRS CONTINUO</span>
            </summary>
            <div class="p-6 border-t border-gray-800 text-sm text-gray-400 leading-relaxed space-y-3">
                <p>Plataforma belga dise&ntilde;ada para eliminar totalmente la fricci&oacute;n administrativa. Opera como un <strong>"piloto autom&aacute;tico" de resiliencia humana</strong>: la IA selecciona para cada empleado el tipo de ataque (phishing, smishing o vishing), el momento &oacute;ptimo de env&iacute;o, el nivel de dificultad y la tem&aacute;tica. Un administrador puede configurarla en menos de una hora y dejarla funcionando indefinidamente de forma aut&oacute;noma.</p>
                <h4 class="text-cyan-400 font-bold uppercase tracking-widest text-xs">BEHAVIORAL RISK SCORE (BRS) &mdash; M&Eacute;TRICA HOL&Iacute;STICA CONTINUA</h4>
                <p>A diferencia del PPP de KnowBe4 (snapshot puntual), el BRS es un <strong>score din&aacute;mico actualizado continuamente</strong>. Par&aacute;metros: historial de clics en simulaciones, reportes activos realizados, completaci&oacute;n de microlearnings, resultados en checkpoint tests dentro de m&oacute;dulos y respuestas ante amenazas reales detectadas. Disponible a nivel individual, departamental y organizacional para identificar con precisi&oacute;n d&oacute;nde est&aacute; el mayor riesgo humano.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-cyan-500/5 border border-cyan-500/20 p-3 rounded">
                        <span class="text-cyan-400 font-bold text-xs uppercase block mb-1">Multi-vector: Phishing + Smishing + Vishing (Automatizado)</span>
                        <p class="text-xs text-gray-500">&Uacute;nica plataforma del mercado con los 3 vectores integrados en un flujo automatizado de IA. Puede simular cadenas multi-vector que replican APTs reales: un smishing que lleva a una p&aacute;gina de phishing que genera un vishing de "verificaci&oacute;n".</p>
                    </div>
                    <div class="bg-cyan-500/5 border border-cyan-500/20 p-3 rounded">
                        <span class="text-cyan-400 font-bold text-xs uppercase block mb-1">Threat Intelligence en Tiempo Real</span>
                        <p class="text-xs text-gray-500">Los empleados reciben Threat Intelligence actualizada sobre t&aacute;cticas activas en el mercado en ese momento. Los microlearnings son espec&iacute;ficos al contexto del error cometido, no m&oacute;dulos gen&eacute;ricos de cumplimiento anual.</p>
                    </div>
                    <div class="bg-cyan-500/5 border border-cyan-500/20 p-3 rounded">
                        <span class="text-cyan-400 font-bold text-xs uppercase block mb-1">Reporting Board-Ready</span>
                        <p class="text-xs text-gray-500">Genera informes ejecutivos autom&aacute;ticos con BRS organizacional comparado con benchmarks sectoriales. Convierte el problema de "cultura de seguridad" en una m&eacute;trica cuantificable que el consejo directivo puede entender sin conocimientos t&eacute;cnicos.</p>
                    </div>
                    <div class="bg-cyan-500/5 border border-cyan-500/20 p-3 rounded">
                        <span class="text-cyan-400 font-bold text-xs uppercase block mb-1">Privacy by Design &mdash; GDPR Nativo</span>
                        <p class="text-xs text-gray-500">Arquitectura GDPR desde la base, no como capa a&ntilde;adida. Sin captura de credenciales reales, sin almacenamiento de informaci&oacute;n sensible. Acceso a datos individuales restringido por roles de administraci&oacute;n granulares y auditables.</p>
                    </div>
                </div>
                <div class="bg-black/30 border border-gray-700 p-3 rounded">
                    <span class="text-gray-300 text-xs font-bold uppercase block mb-1">&#9888; An&aacute;lisis Cr&iacute;tico</span>
                    <p class="text-xs text-gray-500 italic">La automatizaci&oacute;n total es ventaja para equipos peque&ntilde;os pero limitante para organizaciones con programas maduros que necesitan personalizar campa&ntilde;as por inteligencia de amenazas sectorial espec&iacute;fica o eventos corporativos concretos como fusiones, temporada fiscal o incorporaciones masivas.</p>
                </div>
            </div>
        </details>

        <!-- 6. NINJIO -->
        <details class="bg-[#0a0f1a] border border-gray-800 rounded-lg group overflow-hidden">
            <summary class="p-4 cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors">
                <span class="flex items-center gap-3">
                    <span class="text-amber-500 font-mono font-bold">06</span>
                    <strong class="text-white text-sm uppercase tracking-widest">NINJIO &mdash; Edutainment y Ciencia Conductual para la Resiliencia</strong>
                </span>
                <span class="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">STORYTELLING | NINJIO RISK ALGORITHM</span>
            </summary>
            <div class="p-6 border-t border-gray-800 text-sm text-gray-400 leading-relaxed space-y-3">
                <p>NINJIO apuesta radicalmente por el <strong>entretenimiento como veh&iacute;culo de educaci&oacute;n en seguridad</strong>. Sus micro-episodios de animaci&oacute;n estilo Hollywood (3-4 minutos) est&aacute;n basados en brechas corporativas reales con personajes ficticios. La ciencia del comportamiento respalda el enfoque: la narrativa emocional genera retenci&oacute;n del conocimiento significativamente superior a textos o diapositivas, y la empat&iacute;a con la v&iacute;ctima crea un ancla psicol&oacute;gica que activa el pensamiento cr&iacute;tico ante situaciones reales.</p>
                <h4 class="text-purple-400 font-bold uppercase tracking-widest text-xs">ECOSISTEMA DE 4 M&Oacute;DULOS ESPECIALIZADOS</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-purple-500/5 border border-purple-500/20 p-3 rounded">
                        <span class="text-purple-400 font-bold text-xs uppercase block mb-1">NINJIO AWARE &mdash; Entrenamiento Narrativo</span>
                        <p class="text-xs text-gray-500">Episodios mensuales de animaci&oacute;n HD que reconstruyen incidentes corporativos reales: phishing, vishing, smishing, BEC, ransomware, ingenier&iacute;a social f&iacute;sica y baiting. Cada episodio muestra el error del empleado y las consecuencias organizacionales reales del incidente.</p>
                    </div>
                    <div class="bg-purple-500/5 border border-purple-500/20 p-3 rounded">
                        <span class="text-purple-400 font-bold text-xs uppercase block mb-1">NINJIO PHISH3D &mdash; Susceptibilidad Emocional</span>
                        <p class="text-xs text-gray-500">El <strong class="text-white">NINJIO Risk Algorithm</strong> genera templates personalizados con IA que revelan si el empleado es m&aacute;s vulnerable a mensajes de urgencia, autoridad, curiosidad o miedo. Ajusta autom&aacute;ticamente la dificultad de las simulaciones seg&uacute;n el perfil conductual identificado.</p>
                    </div>
                    <div class="bg-purple-500/5 border border-purple-500/20 p-3 rounded">
                        <span class="text-purple-400 font-bold text-xs uppercase block mb-1">NINJIO SENSE &mdash; Ciencia Conductual</span>
                        <p class="text-xs text-gray-500">Entrena a los empleados a reconocer las t&aacute;cticas de manipulaci&oacute;n psicol&oacute;gica usadas por atacantes: sesgo de autoridad, urgencia artificial, reciprocidad y prueba social. Aborda el origen cognitivo de la vulnerabilidad, no solo sus s&iacute;ntomas superficiales.</p>
                    </div>
                    <div class="bg-purple-500/5 border border-purple-500/20 p-3 rounded">
                        <span class="text-purple-400 font-bold text-xs uppercase block mb-1">NINJIO DEFEND &mdash; Garant&iacute;a de $1M USD</span>
                        <p class="text-xs text-gray-500">Capa de seguridad empresarial: MDR 24/7/365, Email Threat Defense, Vulnerability Scanning, Pen Testing, Password Scanning y una <strong class="text-white">garant&iacute;a de brecha de $1,000,000 USD</strong>. El primer proveedor de awareness en ofrecer cobertura financiera ante incidentes.</p>
                    </div>
                </div>
                <p class="text-xs text-gray-500">Compatibilidad SCORM 1.2 con cualquier LMS corporativo. Cumplimiento: <strong class="text-white">HIPAA, GDPR, PCI-DSS, SOC2 Type II</strong>. Bot&oacute;n NINJIO ALERT de reporte en un clic integrado en el cliente de email. M&oacute;dulo NINJIO Secure Code para equipos de desarrollo.</p>
                <div class="bg-black/30 border border-gray-700 p-3 rounded">
                    <span class="text-gray-300 text-xs font-bold uppercase block mb-1">&#9888; An&aacute;lisis Cr&iacute;tico</span>
                    <p class="text-xs text-gray-500 italic">Alto consumo de ancho de banda por video HD: problem&aacute;tico en entornos corporativos con conexiones limitadas o pol&iacute;ticas de restricci&oacute;n de streaming. La plataforma es m&aacute;s fuerte en awareness que en respuesta a incidentes; SOCs maduros pueden encontrarla insuficiente como soluci&oacute;n standalone sin complemento SOAR.</p>
                </div>
            </div>
        </details>

        <!-- 7. Mimecast -->
        <details class="bg-[#0a0f1a] border border-gray-800 rounded-lg group overflow-hidden">
            <summary class="p-4 cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors">
                <span class="flex items-center gap-3">
                    <span class="text-amber-500 font-mono font-bold">07</span>
                    <strong class="text-white text-sm uppercase tracking-widest">Mimecast &mdash; Awareness Integrado en el Gateway de Correo</strong>
                </span>
                <span class="text-xs bg-gray-500/20 text-gray-400 px-2 py-1 rounded">HYBRID SECURITY | SAFE SCORE</span>
            </summary>
            <div class="p-6 border-t border-gray-800 text-sm text-gray-400 leading-relaxed space-y-3">
                <p>Empresa de email security que extendi&oacute; su portfolio con un m&oacute;dulo de Security Awareness Training. Diferenciador clave: <strong>el entrenamiento no es un producto aislado sino una extensi&oacute;n de su gateway de correo</strong>. Garantiza relevancia contextual 100% real: el entrenamiento se basa en las amenazas espec&iacute;ficas que la organizaci&oacute;n est&aacute; enfrentando en tiempo real, no en incidentes gen&eacute;ricos del sector.</p>
                <h4 class="text-gray-300 font-bold uppercase tracking-widest text-xs">MIMECAST ENGAGE &mdash; ENTRENAMIENTO EN EL MOMENTO &Oacute;PTIMO</h4>
                <p>Motor de personalizaci&oacute;n que usa <strong>Risk Signals y Behavioral Insights</strong> del gateway para entregar m&oacute;dulos de 2-5 minutos en los momentos de mayor receptividad psicol&oacute;gica. Si un empleado hace clic en un enlace sospechoso bloqueado, recibe inmediatamente un micro-m&oacute;dulo sobre esa t&aacute;ctica espec&iacute;fica antes de que el incidente caiga en el olvido.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-gray-500/5 border border-gray-500/20 p-3 rounded">
                        <span class="text-gray-300 font-bold text-xs uppercase block mb-1">SAFE Score &mdash; Riesgo M&aacute;s All&aacute; del Clic</span>
                        <p class="text-xs text-gray-500">M&eacute;trica de riesgo consolidada que incluye: intentos de acceso a sitios bloqueados por URL filtering, frecuencia de interacci&oacute;n con remitentes desconocidos y patrones de comportamiento de riesgo recurrente. Score predictivo m&aacute;s completo que el simple PPP de clic.</p>
                    </div>
                    <div class="bg-gray-500/5 border border-gray-500/20 p-3 rounded">
                        <span class="text-gray-300 font-bold text-xs uppercase block mb-1">PhishHunter &mdash; An&aacute;lisis T&eacute;cnico en Buz&oacute;n</span>
                        <p class="text-xs text-gray-500">Facilita el an&aacute;lisis t&eacute;cnico de correos sospechosos: extracci&oacute;n de cabeceras SMTP, verificaci&oacute;n de reputaci&oacute;n de dominios y comparaci&oacute;n con base de amenazas conocidas de Mimecast. Cierra el loop entre el usuario final y el SOC sin reenv&iacute;os manuales.</p>
                    </div>
                    <div class="bg-gray-500/5 border border-gray-500/20 p-3 rounded">
                        <span class="text-gray-300 font-bold text-xs uppercase block mb-1">Individual Risk Scoring Predictivo</span>
                        <p class="text-xs text-gray-500">Monitoreo individual del perfil de riesgo combinando: interacciones con el gateway, resultados de simulaciones y completaci&oacute;n de entrenamientos. Alertas autom&aacute;ticas cuando un empleado cruza umbrales de riesgo preconfigurados para intervenci&oacute;n proactiva antes del incidente.</p>
                    </div>
                    <div class="bg-gray-500/5 border border-gray-500/20 p-3 rounded">
                        <span class="text-gray-300 font-bold text-xs uppercase block mb-1">Reporting Unificado Gateway + Awareness</span>
                        <p class="text-xs text-gray-500">Dashboards de awareness integrados en los dashboards de seguridad de correo de Mimecast. Vista unificada que correlaciona comportamiento humano con datos de amenazas del gateway, eliminando la necesidad de consolidar reportes de dos herramientas separadas.</p>
                    </div>
                </div>
                <div class="bg-black/30 border border-gray-700 p-3 rounded">
                    <span class="text-gray-300 text-xs font-bold uppercase block mb-1">&#9888; An&aacute;lisis Cr&iacute;tico</span>
                    <p class="text-xs text-gray-500 italic">Arma de doble filo: m&aacute;xima efectividad con Mimecast como gateway de correo principal. Sin el gateway, se pierden casi todos los diferenciadores clave. Organizaciones con Microsoft 365 Defender o Proofpoint ya desplegados raramente justifican el costo de migrar su gateway solo por el m&oacute;dulo de awareness.</p>
                </div>
            </div>
        </details>

        <!-- 8. Infosec IQ -->
        <details class="bg-[#0a0f1a] border border-gray-800 rounded-lg group overflow-hidden">
            <summary class="p-4 cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors">
                <span class="flex items-center gap-3">
                    <span class="text-amber-500 font-mono font-bold">08</span>
                    <strong class="text-white text-sm uppercase tracking-widest">Infosec IQ &mdash; NICE Framework NIST y Cumplimiento Normativo</strong>
                </span>
                <span class="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">NIST NICE | +2000 RECURSOS</span>
            </summary>
            <div class="p-6 border-t border-gray-800 text-sm text-gray-400 leading-relaxed space-y-3">
                <p>Referencia acad&eacute;mica e institucional de la industria. La alineaci&oacute;n estricta con el <strong>NICE Framework del NIST (National Initiative for Cybersecurity Education)</strong> la posiciona como opci&oacute;n de facto para organismos gubernamentales, instituciones educativas y proveedores de defensa que deben justificar su programa ante auditor&iacute;as formales. Cubre roles t&eacute;cnicos (admins SOC, developers) y no t&eacute;cnicos (contabilidad, RRHH, direcci&oacute;n) con rutas diferenciadas por funci&oacute;n y exposici&oacute;n al riesgo.</p>
                <h4 class="text-orange-400 font-bold uppercase tracking-widest text-xs">CARACTER&Iacute;STICAS CLAVE DE LA PLATAFORMA</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-orange-500/5 border border-orange-500/20 p-3 rounded">
                        <span class="text-orange-400 font-bold text-xs uppercase block mb-1">+2,000 Recursos: M&oacute;dulos, Videos y CYOA</span>
                        <p class="text-xs text-gray-500">SCORM interactivos, videos, infograf&iacute;as, role-playing y los innovadores <strong class="text-white">"Choose Your Own Adventure"</strong>: juegos de toma de decisiones donde el empleado experimenta las consecuencias reales de cada elecci&oacute;n de seguridad en un entorno simulado sin riesgo. Soporte multiidioma con actualizaci&oacute;n continua.</p>
                    </div>
                    <div class="bg-orange-500/5 border border-orange-500/20 p-3 rounded">
                        <span class="text-orange-400 font-bold text-xs uppercase block mb-1">IQ Score y Mapas de Competencia</span>
                        <p class="text-xs text-gray-500">Mapas granulares de competencias por departamento y rol que identifican deficiencias espec&iacute;ficas (p.ej. "el equipo de Finanzas tiene baja puntuaci&oacute;n en reconocimiento de BEC"). Asigna rutas de aprendizaje personalizadas basadas en el rol NICE Framework de cada empleado.</p>
                    </div>
                    <div class="bg-orange-500/5 border border-orange-500/20 p-3 rounded">
                        <span class="text-orange-400 font-bold text-xs uppercase block mb-1">PhishSim &mdash; +800 Plantillas de Ataque</span>
                        <p class="text-xs text-gray-500">Plantillas categorizadas por vector, sector y dificultad. Empleados que fallan reciben autom&aacute;ticamente un m&oacute;dulo espec&iacute;fico al tipo de ataque. Reporting de cumplimiento normativo alineado con est&aacute;ndares NIST y FISMA para auditor&iacute;as formales de reguladores.</p>
                    </div>
                    <div class="bg-orange-500/5 border border-orange-500/20 p-3 rounded">
                        <span class="text-orange-400 font-bold text-xs uppercase block mb-1">Automatizaci&oacute;n + SSO + Integraci&oacute;n LMS</span>
                        <p class="text-xs text-gray-500">Campa&ntilde;as automatizadas con recordatorios, gamificaci&oacute;n y evaluaciones programadas. Single Sign-On (SSO) sin fricci&oacute;n para el directorio corporativo. SCORM 1.2 para LMS empresariales. Cumplimiento: <strong class="text-white">NIST, NICE, FISMA, GDPR, HIPAA, PCI-DSS</strong>.</p>
                    </div>
                </div>
                <div class="bg-black/30 border border-gray-700 p-3 rounded">
                    <span class="text-gray-300 text-xs font-bold uppercase block mb-1">&#9888; An&aacute;lisis Cr&iacute;tico</span>
                    <p class="text-xs text-gray-500 italic">La interfaz de administraci&oacute;n es consistentemente citada como menos intuitiva que la de KnowBe4 o Phished en revisiones comparativas de G2 y Gartner. El setup inicial y la configuraci&oacute;n del programa de cumplimiento pueden requerir soporte especializado del proveedor. Sin una funci&oacute;n de L&amp;D dedicada, la amplitud de la plataforma es dif&iacute;cil de aprovechar al m&aacute;ximo.</p>
                </div>
            </div>
        </details>

      </div>

      <h2 class="text-amber-400 font-mono text-2xl mb-6 flex items-center gap-3">
        <span class="text-gray-600">03_</span> TABLA TÉCNICA COMPARATIVA (MATRIZ DE CAPACIDADES)
      </h2>
      <div class="overflow-x-auto mb-12 border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
        <table class="w-full text-left border-collapse bg-black/40">
            <thead class="bg-[#1a1f2e] text-amber-300 text-xs uppercase tracking-widest">
                <tr>
                    <th class="p-4 border border-gray-800">Plataforma</th>
                    <th class="p-4 border border-gray-800">Analítica / KPIs</th>
                    <th class="p-4 border border-gray-800">Integración Técnica</th>
                    <th class="p-4 border border-gray-800">Enfoque Ético</th>
                    <th class="p-4 border border-gray-800">Limitaciones</th>
                    <th class="p-4 border border-gray-800">Compliance</th>
                </tr>
            </thead>
            <tbody class="text-[9px] text-gray-400 font-mono leading-tight">
                <tr><td class="p-4 border border-gray-800 text-white font-bold">Hoxhunt</td><td class="p-4 border border-gray-800">Success/Fail Rate</td><td class="p-4 border border-gray-800">Native Outlook Add-in</td><td class="p-4 border border-gray-800 text-green-400">Refuerzo Positivo</td><td class="p-4 border border-gray-800 text-red-500/70">Dependencia de Telemetría</td><td class="p-4 border border-gray-800 font-bold text-gray-300 italic">GDPR</td></tr>
                <tr><td class="p-4 border border-gray-800 text-white font-bold">Proofpoint</td><td class="p-4 border border-gray-800">Vulnerability Score</td><td class="p-4 border border-gray-800">Cloud Email Security</td><td class="p-4 border border-gray-800 text-blue-400">Protección Centrada</td><td class="p-4 border border-gray-800 text-red-500/70">Costo Licenciamiento</td><td class="p-4 border border-gray-800 font-bold text-gray-300 italic">FISMA/SOC2</td></tr>
                <tr><td class="p-4 border border-gray-800 text-white font-bold">KnowBe4</td><td class="p-4 border border-gray-800">Industry Benchmarking</td><td class="p-4 border border-gray-800">AD/Azure API Push</td><td class="p-4 border border-gray-800 text-violet-400">Teachable Moments</td><td class="p-4 border border-gray-800 text-red-500/70">Sobrecarga Contenido</td><td class="p-4 border border-gray-800 font-bold text-gray-300 italic">HIPAA/PCI</td></tr>
                <tr><td class="p-4 border border-gray-800 text-white font-bold">Cofense</td><td class="p-4 border border-gray-800">Accuracy Score</td><td class="p-4 border border-gray-800">SOAR/SIEM Connect</td><td class="p-4 border border-gray-800 text-cyan-400">Colaboración SOC</td><td class="p-4 border border-gray-800 text-red-500/70">Manejo de Triage</td><td class="p-4 border border-gray-800 font-bold text-gray-300 italic">FedRAMP</td></tr>
                <tr><td class="p-4 border border-gray-800 text-white font-bold">Phished</td><td class="p-4 border border-gray-800">Behavioral Index</td><td class="p-4 border border-gray-800">Full Cloud API</td><td class="p-4 border border-gray-800 text-green-400">No-Bias AI</td><td class="p-4 border border-gray-800 text-red-500/70">Poco Control Manual</td><td class="p-4 border border-gray-800 font-bold text-gray-300 italic">ISO 27001</td></tr>
                <tr><td class="p-4 border border-gray-800 text-white font-bold">NINJIO</td><td class="p-4 border border-gray-800">Engagement Metrics</td><td class="p-4 border border-gray-800">LMS/SCORM 1.2</td><td class="p-4 border border-gray-800 text-purple-400">Empatía Cognitiva</td><td class="p-4 border border-gray-800 text-red-500/70">Multimedia HD</td><td class="p-4 border border-gray-800 font-bold text-gray-300 italic">SOC2 Type II</td></tr>
            </tbody>
        </table>
      </div>

      <h2 class="text-amber-400 font-mono text-2xl mb-6 flex items-center gap-3">
        <span class="text-gray-600">04_</span> ANÁLISIS CRÍTICO Y CONCLUSIONES COMPARATIVAS
      </h2>
      <div class="bg-[#0a0f1a] p-8 border border-amber-900/30 rounded-xl mb-12 shadow-[0_0_30px_rgba(245,158,11,0.05)]">
        <h3 class="text-amber-300 font-bold mb-4 uppercase text-sm">Hallazgos y Recomendaciones de Contexto</h3>
        <ul class="text-xs text-gray-400 space-y-4 mb-8">
            <li class="pl-4 border-l border-amber-500/50"><strong>Para PyMEs con Recursos Limitados:</strong> Se recomienda <strong>Phished</strong> debido a su automatización de "piloto automático", que elimina la necesidad de un equipo de ciberseguridad dedicado al diseño de campañas.</li>
            <li class="pl-4 border-l border-amber-500/50"><strong>Para Sectores Altamente Regulados (Finanzas/Salud):</strong> <strong>KnowBe4</strong> e <strong>Infosec IQ</strong> ofrecen los mejores marcos de cumplimiento (HIPAA, PCI-DSS) y benchmarks industriales para justificar auditorías.</li>
            <li class="pl-4 border-l border-amber-500/50"><strong>Para Organizaciones con SOC Propio:</strong> <strong>Cofense</strong> es el líder indiscutible, ya que integra el reporte técnico del usuario directamente al flujo de respuesta ante incidentes.</li>
        </ul>
        <div class="p-4 bg-amber-500/10 border border-amber-500/30 rounded font-bold text-center text-amber-500 text-xs">
            "La métrica suprema de resiliencia no es la prevención del clic, sino el reporte activo de la amenaza."
        </div>
      </div>

      <h2 class="text-amber-400 font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 border-b border-gray-800 pb-2">05_ Referencias Bibliográficas (APA 7)</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-[9px] text-gray-500 font-mono italic">
        <p>Cofense. (2026). <em>Phishing Detection and Response (PDR) Solutions: Technical Overview and Collective Intelligence</em>. https://cofense.com/</p>
        <p>Hoxhunt. (2024). <em>The Science of Behavior Change in Cybersecurity: Human Risk Management and Adaptive AI</em>. https://www.hoxhunt.com/</p>
        <p>National Institute of Standards and Technology. (2022). <em>Introduction to Cybersecurity for Human Resources (NIST SP 800-50)</em>. U.S. Department of Commerce.</p>
        <p>KnowBe4. (2026). <em>2026 Phishing by Industry Benchmarking Report: Measuring the Phish-prone™ Percentage</em>. https://www.knowbe4.com/</p>
        <p>Proofpoint. (2024). <em>State of the Phish 2024: Identifying and Protecting Very Attacked People (VAPs)</em>. https://www.proofpoint.com/</p>
      </div>
    `
  },
  {
    id: "8",
    title: "ACTIVIDAD 08 - Road to Hall of Fame (SQL Injection)",
    description: "Análisis técnico, explotación manual y mitigación de 18 laboratorios estructurados sobre vulnerabilidades de Inyección SQL (In-band, Blind, OAST y Evasión) basados en PortSwigger Web Security Academy.",
    date: "2026-03-06",
    tags: ["SQL Injection", "PortSwigger", "Web Security", "Exploitation", "Mitigation"],
    content: `
      <div class="bg-green-500/10 border border-green-500/20 rounded p-6 mb-8 font-mono relative overflow-hidden shadow-[0_0_15px_rgba(34,197,94,0.1)]">
        <div class="absolute top-0 right-0 p-2 bg-green-500/20 text-xs text-green-400 font-bold uppercase tracking-widest">Offensive Security Labs</div>
        <p class="text-xs mb-1"><span class="text-green-400 font-bold">REPORTE TÉCNICO:</span> ACT08 - ROAD TO HALL OF FAME</p>
        <p class="text-xs mb-1"><span class="text-green-400 font-bold">AUTOR:</span> Moreno Solís Gisela Geraldine (ID: 176522)</p>
        <p class="text-xs mb-1"><span class="text-green-400 font-bold">DOCENTE:</span> Mtro. Servando López Contreras</p>
        <p class="text-xs"><span class="text-green-400 font-bold">ESTADO:</span> <span class="text-blue-400">LABORATORIOS COMPLETADOS Y AUDITADOS</span></p>
      </div>

      <h2 class="text-green-400 font-mono text-2xl mb-6 flex items-center gap-3">
        <span class="text-gray-600">01_</span> FUNDAMENTACIÓN TEÓRICA Y CONTEXTO VULNERABLE
      </h2>
      <div class="prose prose-invert max-w-none text-sm text-gray-400 mb-10 space-y-4">
        <p>La inyección SQL (SQLi) sigue siendo una de las vulnerabilidades más críticas y persistentes en el ecosistema web, permitiendo a los atacantes interferir con las consultas realizadas por una aplicación web hacia su base de datos. Una explotación exitosa puede comprometer la tríada confidencialidad, integridad y disponibilidad (CIA), escalar privilegios e incluso otorgar ejecución de código remoto en el servidor host subyacente.</p>
        <p>Este informe documenta el progreso estructurado a través de <strong class="text-white">18 laboratorios de PortSwigger Web Security Academy</strong>, abarcando metodologías desde la simple alteración matemática (In-band) hasta la extracción asíncrona de datos vía canales laterales (DNS/Time-based).</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div class="bg-black/40 p-4 border-t-2 border-green-500 rounded-b shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
            <h4 class="text-green-400 font-bold text-xs mb-2 uppercase tracking-wide">In-Band / UNION (Visibilidad Directa)</h4>
            <p class="text-xs text-gray-500">Explotación clásica donde el atacante puede recuperar los datos exfiltrados directamente a lo largo en la misma respuesta HTTP que la consulta original.</p>
          </div>
          <div class="bg-black/40 p-4 border-t-2 border-yellow-500 rounded-b shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
            <h4 class="text-yellow-400 font-bold text-xs mb-2 uppercase tracking-wide">Inferencial (Blind SQLi)</h4>
            <p class="text-xs text-gray-500">Las respuestas de la API no devuelven datos en crudo, por lo que el atacante extrae la información a través de cambios observables (errores o latencia de red) formulando preguntas booleanas.</p>
          </div>
          <div class="bg-black/40 p-4 border-t-2 border-red-500 rounded-b shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
            <h4 class="text-red-400 font-bold text-xs mb-2 uppercase tracking-wide">Out-Of-Band (OAST)</h4>
            <p class="text-xs text-gray-500">Inyecciones exóticas usadas cuando existe un firewall / WAF que bloquea las lecturas directas, derivando la data a través de interacciones de red externa (usualmente colusiones DNS).</p>
          </div>
        </div>
      </div>

      <div class="bg-[#0a0f1a] p-8 border border-green-900/40 rounded-xl mb-12 shadow-[0_0_20px_rgba(34,197,94,0.02)]">
        <h3 class="text-green-400 font-bold mb-4 uppercase text-sm tracking-widest">METODOLOGÍA DEFENSIVA Y MITIGACIÓN ESTRUCTURAL</h3>
        <p class="text-xs text-gray-400 space-y-4 mb-4">
            A pesar de la sofisticación de los modelos inferenciales documentados aquí, la defensa de raíz principal de las 18 variantes depende de un control arquitectónico único:
        </p>
        <ul class="text-xs text-gray-400 space-y-4 pl-4 border-l border-green-500/50">
            <li><strong>Declaraciones Preparadas (Consultas Parametrizadas):</strong> Transforman las sentencias de SQL dinámico a componentes interpretados precompilados. Esto asegura que la base de datos trate cualquier entrada de usuario estrictamente como datos literales y no como código ejecutable lógico, rompiendo gramaticalmente la inyección.</li>
            <li><strong>Principio de Menor Privilegio (PoLP):</strong> Limitar radicalmente los permisos de red de la cuenta DB en uso para anular inyecciones de enumeración de estructura.</li>
        </ul >
      </div>
    `
  }
];



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
            <span class="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-[10px] font-mono border border-red-500/30">CRITICAL</span>
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
            <span class="bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded text-[10px] font-mono border border-orange-500/30">EXPOSURE</span>
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
            <span class="bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded text-[10px] font-mono border border-yellow-500/30">SUPPLY CHAIN</span>
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
            <span class="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-[10px] font-mono border border-blue-500/30">PHISHING</span>
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
            <span class="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-[10px] font-mono border border-red-500/30">DATA DESTR</span>
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
            <span class="bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded text-[10px] font-mono border border-purple-500/30">INSIDER</span>
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
            <span class="bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded text-[10px] font-mono border border-indigo-500/30">ANTI-FORENSIC</span>
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
            <span class="bg-gray-500/20 text-gray-400 px-2 py-0.5 rounded text-[10px] font-mono border border-gray-500/30">FAILURE</span>
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
            <span class="bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded text-[10px] font-mono border border-cyan-500/30">SPOOFING</span>
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
            <span class="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-[10px] font-mono border border-red-500/30">WIPER</span>
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
          <img src="/ACT 03.jfif" alt="Iptables Worksheet 1" class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity" />
        </div>
        <div class="bg-[#0a0f1a] border border-red-900/30 rounded-lg overflow-hidden shadow-2xl transition-transform hover:scale-[1.02]">
          <div class="bg-red-900/20 px-4 py-2 border-b border-red-900/30 text-xs font-mono text-red-100">EVIDENCE_IMG_02</div>
          <img src="/ACT 03.2.jfif" alt="Iptables Worksheet 2" class="w-full h-auto opacity-80 hover:opacity-100 transition-opacity" />
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
            <span class="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-[10px] font-mono border border-blue-500/30">REMOTE_ACCESS</span>
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
            <span class="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-[10px] font-mono border border-green-500/30">WEB_SERVER</span>
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
            <span class="bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded text-[10px] font-mono border border-yellow-500/30">STATEFUL_INSPECT</span>
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
            <span class="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-[10px] font-mono border border-red-500/30">DENY_BY_DEFAULT</span>
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
            <span class="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-[10px] font-mono border border-red-500/30">SECURITY_POLICY</span>
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
            <span class="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-[10px] font-mono border border-blue-500/30">DNS_RESOLUTION</span>
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
            <span class="bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded text-[10px] font-mono border border-yellow-500/30">MAIL_SECURITY</span>
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
            <span class="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-[10px] font-mono border border-green-500/30">APP_SEC</span>
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

      <div class="overflow-x-auto my-10 border border-gray-800 rounded-lg">
        <table class="w-full text-left border-collapse">
            <thead class="bg-[#1a1f2e] text-purple-300 text-xs uppercase tracking-wider">
                <tr>
                    <th class="p-4 border border-gray-700 font-black">Criterio / Marco</th>
                    <th class="p-4 border border-gray-700">1. MITRE ATT&CK</th>
                    <th class="p-4 border border-gray-700">2. OWASP WSTG</th>
                    <th class="p-4 border border-gray-700">3. NIST SP 800-115</th>
                    <th class="p-4 border border-gray-700">4. OSSTMM</th>
                    <th class="p-4 border border-gray-700">5. PTES</th>
                    <th class="p-4 border border-gray-700">6. ISSAF</th>
                </tr>
            </thead>
            <tbody class="text-[11px] text-gray-300">
                <tr>
                    <td class="p-3 border border-gray-700 bg-white/5 font-bold text-white">A. Descripción</td>
                    <td class="p-3 border border-gray-700">Base de conocimientos basada en tácticas y técnicas de adversarios reales.</td>
                    <td class="p-3 border border-gray-700">Guía principal para pruebas en aplicaciones web y vulnerabilidades comunes.</td>
                    <td class="p-3 border border-gray-700">Guía técnica federal (EE.UU.) para realizar evaluaciones de seguridad.</td>
                    <td class="p-3 border border-gray-700">Metodología científica basada en métricas para evaluar la seguridad operativa.</td>
                    <td class="p-3 border border-gray-700">Estándar comercial con lenguaje común para ejecución de pruebas.</td>
                    <td class="p-3 border border-gray-700">Framework detallado y estructurado para evaluación de sistemas (legado).</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 bg-white/5 font-bold text-white">B. Fases</td>
                    <td class="p-3 border border-gray-700">14 Tácticas (Reconocimiento, Persistencia, etc.).</td>
                    <td class="p-3 border border-gray-700">Recopilación, Configuración, Identidad, Autenticación, etc.</td>
                    <td class="p-3 border border-gray-700">Planificación, Descubrimiento, Ataque, Reporte.</td>
                    <td class="p-3 border border-gray-700">Inducción, Interacción, Inquisición, Intervención.</td>
                    <td class="p-3 border border-gray-700">Pre-acuerdo, Intel, Modelado, Vulnerabilidad, Explotación, Post, Reporte.</td>
                    <td class="p-3 border border-gray-700">Planificación, Evaluación, Tratamiento, Acreditación.</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 bg-white/5 font-bold text-white">C. Objetivo Principal</td>
                    <td class="p-3 border border-gray-700">Clasificar ciberataques para mejorar la detección.</td>
                    <td class="p-3 border border-gray-700">Marco exhaustivo para seguridad de servicios web.</td>
                    <td class="p-3 border border-gray-700">Orientar a organizaciones en auditorías técnicas.</td>
                    <td class="p-3 border border-gray-700">Medición científica cuantificable (RAVs) de seguridad ops.</td>
                    <td class="p-3 border border-gray-700">Garantizar calidad y consistencia en el servicio de pentesting.</td>
                    <td class="p-3 border border-gray-700">Evaluar controles con un nivel de detalle técnico granular.</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 bg-white/5 font-bold text-white">D. Escenarios</td>
                    <td class="p-3 border border-gray-700">Threat Hunting, Red Teaming, mejora de SOC.</td>
                    <td class="p-3 border border-gray-700">Auditorías de App Web, desarrollo seguro (SDLC).</td>
                    <td class="p-3 border border-gray-700">Cumplimiento (FISMA), evaluaciones federales.</td>
                    <td class="p-3 border border-gray-700">Auditorías que requieren métricas exactas.</td>
                    <td class="p-3 border border-gray-700">Pentesting comercial (Caja Negra/Blanca).</td>
                    <td class="p-3 border border-gray-700">Evaluaciones técnicas profundas (Uso disminuido).</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 bg-white/5 font-bold text-white">E. Orientación</td>
                    <td class="p-3 border border-gray-700">Defensa / Ataque (Emulación).</td>
                    <td class="p-3 border border-gray-700">Evaluación (AppSec).</td>
                    <td class="p-3 border border-gray-700">Evaluación (Cumplimiento).</td>
                    <td class="p-3 border border-gray-700">Evaluación / Defensa (Métricas).</td>
                    <td class="p-3 border border-gray-700">Ataque (Pentesting puro).</td>
                    <td class="p-3 border border-gray-700">Evaluación (Auditoría técnica).</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 bg-white/5 font-bold text-white">F. Autores</td>
                    <td class="p-3 border border-gray-700">MITRE Corporation.</td>
                    <td class="p-3 border border-gray-700">OWASP Foundation.</td>
                    <td class="p-3 border border-gray-700">NIST (EE.UU.).</td>
                    <td class="p-3 border border-gray-700">ISECOM - Pete Herzog.</td>
                    <td class="p-3 border border-gray-700">Grupo de expertos independientes.</td>
                    <td class="p-3 border border-gray-700">OISSG.</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 bg-white/5 font-bold text-white">G. URL Oficial</td>
                    <td class="p-3 border border-gray-700"><a href="https://attack.mitre.org" class="text-blue-400 hover:underline">attack.mitre.org</a></td>
                    <td class="p-3 border border-gray-700"><a href="https://owasp.org" class="text-blue-400 hover:underline">owasp.org</a></td>
                    <td class="p-3 border border-gray-700"><a href="https://csrc.nist.gov" class="text-blue-400 hover:underline">csrc.nist.gov</a></td>
                    <td class="p-3 border border-gray-700"><a href="https://isecom.org" class="text-blue-400 hover:underline">isecom.org</a></td>
                    <td class="p-3 border border-gray-700"><a href="https://pentest-standard.org" class="text-blue-400 hover:underline">pentest-standard.org</a></td>
                    <td class="p-3 border border-gray-700"><span class="text-gray-500 italic">Sitio inactivo</span></td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 bg-white/5 font-bold text-white">H. Certificaciones</td>
                    <td class="p-3 border border-gray-700">MAD (MITRE ATT&CK Defender).</td>
                    <td class="p-3 border border-gray-700">No directa (OSWE, GWAPT).</td>
                    <td class="p-3 border border-gray-700">No directa (CISA, CISSP).</td>
                    <td class="p-3 border border-gray-700">OPST, OPSA.</td>
                    <td class="p-3 border border-gray-700">Referencia p/ OSCP, eCPPT.</td>
                    <td class="p-3 border border-gray-700">Legado (IACRB).</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 bg-white/5 font-bold text-white">I. Versiones</td>
                    <td class="p-3 border border-gray-700 text-green-400">v16 (Activa).</td>
                    <td class="p-3 border border-gray-700 text-green-400">v4.2 Stable.</td>
                    <td class="p-3 border border-gray-700 text-yellow-500">Rev 1 (Base).</td>
                    <td class="p-3 border border-gray-700 text-green-400">v3.0 (Vigente).</td>
                    <td class="p-3 border border-gray-700 text-green-400">v1.0 (Constante).</td>
                    <td class="p-3 border border-gray-700 text-red-500">Descontinuado.</td>
                </tr>
            </tbody>
        </table>
      <h2 class="text-violet-400 font-mono text-lg mt-12 mb-4">MATRIZ DE SELECCIÓN SEGÚN PERFIL ORGANIZACIONAL</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div class="bg-blue-900/10 border border-blue-500/20 p-4 rounded-lg">
          <h4 class="text-blue-400 font-black mb-2 flex items-center gap-2"><span class="text-xs">01</span> CORPORATIVO / FEDERAL</h4>
          <p class="text-[11px] text-gray-400"><strong>MARCO:</strong> NIST SP 800-115</p>
          <p class="text-[11px] text-gray-400">Ideal para cumplimiento normativo y auditorías gubernamentales donde la rigurosidad documental es la prioridad máxima.</p>
        </div>
        <div class="bg-purple-900/10 border border-purple-500/20 p-4 rounded-lg">
          <h4 class="text-purple-400 font-black mb-2 flex items-center gap-2"><span class="text-xs">02</span> SERVICIOS WEB / SAAS</h4>
          <p class="text-[11px] text-gray-400"><strong>MARCO:</strong> OWASP WSTG</p>
          <p class="text-[11px] text-gray-400">El estándar de facto para aplicaciones modernas; enfocado en lógica de negocio, APIs y vulnerabilidades de capa 7.</p>
        </div>
        <div class="bg-violet-900/10 border border-violet-500/20 p-4 rounded-lg">
          <h4 class="text-violet-400 font-black mb-2 flex items-center gap-2"><span class="text-xs">03</span> COMERCIAL / OFFENSIVE</h4>
          <p class="text-[11px] text-gray-400"><strong>MARCO:</strong> PTES</p>
          <p class="text-[11px] text-gray-400">Enfocado en resultados técnicos profundos, post-explotación y generación de valor real para los equipos de TI.</p>
        </div>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-12 mb-4">CICLO DE VIDA TÁCTICO (CASO PTES)</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div class="bg-violet-900/10 p-5 border-t-2 border-violet-500 rounded-b">
            <h4 class="font-bold text-violet-400 text-xs mb-2">01. PRE-ENGAGEMENT</h4>
            <p class="text-[10px] text-gray-400 italic">Definición de RoE (Rules of Engagement), alcance técnico y salvaguardas legales.</p>
        </div>
        <div class="bg-blue-900/10 p-5 border-t-2 border-blue-500 rounded-b">
            <h4 class="font-bold text-blue-400 text-xs mb-2">02. INTEL GATHERING</h4>
            <p class="text-[10px] text-gray-400 italic">OSINT masivo para identificar la huella digital del objetivo sin interacción directa.</p>
        </div>
        <div class="bg-yellow-900/10 p-5 border-t-2 border-yellow-500 rounded-b">
            <h4 class="font-bold text-yellow-400 text-xs mb-2">03. VULN ANALYSIS</h4>
            <p class="text-[10px] text-gray-400 italic">Identificación proactiva de vectores de entrada (0-days, CVEs y misconfigs).</p>
        </div>
        <div class="bg-red-900/10 p-5 border-t-2 border-red-500 rounded-b">
            <h4 class="font-bold text-red-400 text-xs mb-2">04. POST-EXPLOITATION</h4>
            <p class="text-[10px] text-gray-400 italic">Determinación del valor real del compromiso y persistencia en la red.</p>
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

      <h2 class="text-violet-400 font-mono text-lg mb-4">DESPLIEGUE INFRAESTRUCTURA: VPN IPSEC (LOG-06)</h2>
      <p>Este laboratorio simula la interconexión de dos sucursales empresariales a través de una red pública (Internet) utilizando un túnel <strong>IPSec VPN</strong> y medidas de endurecimiento en infraestructura Cisco.</p>

      <div class="bg-blue-900/10 border border-blue-500/20 rounded-lg p-6 my-10">
        <h3 class="text-blue-400 font-mono text-lg mb-4">HABILITACIÓN DE LICENCIAS (CISCO 1941)</h3>
        <p class="text-sm text-gray-300 mb-4">Para habilitar las funciones de criptografía avanzada en Packet Tracer, se debe activar la licencia de seguridad:</p>
        <div class="bg-black p-3 rounded font-mono text-xs text-cyan-400 mb-4 border border-cyan-900/30">
            Switch# license boot module c1900 technology-package securityk9
        </div>
        <p class="text-xs text-gray-500 italic">Nota: Es necesario reiniciar el router tras aceptar el EULA.</p>
      </div>

      <h3 class="text-xl font-bold text-violet-400 mb-6">Fases de Configuración IPSec</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div class="bg-white/5 p-4 rounded border-t-2 border-cyan-500">
          <h4 class="font-bold text-white mb-2">Fase 1: ISAKMP Policy</h4>
          <p class="text-xs text-gray-400">Negociación de los parámetros de seguridad para el canal de administración (Pree-shared key, AES-256, SHA, Group 2).</p>
        </div>
        <div class="bg-white/5 p-4 rounded border-t-2 border-blue-500">
          <h4 class="font-bold text-white mb-2">Fase 2: IPSec Transform-Set</h4>
          <p class="text-xs text-gray-400">Especificación de los algoritmos para el cifrado de datos reales (Transform-Set: esp-aes esp-sha-hmac).</p>
        </div>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-12 mb-4">HARDENING DE INFRAESTRUCTURA (SWITCHING L2)</h2>
      <p>Como medida de seguridad interna, se implementó <strong>Port Security</strong> en los puertos de acceso de los switches de cada sucursal.</p>
      
      <div class="bg-black border border-gray-700 rounded p-4 font-mono text-xs text-green-500 my-6 overflow-x-auto">
        <pre>
# Configuración de Seguridad de Puerto
Switch(config)# interface range fastEthernet 0/1 - 24
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport port-security
Switch(config-if-range)# switchport port-security maximum 1
Switch(config-if-range)# switchport port-security violation shutdown
Switch(config-if-range)# switchport port-security mac-address sticky
        </pre>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-12 mb-4">LISTAS DE CONTROL DE ACCESO (ACL)</h2>
      <p>Se definieron ACLs detalladas para filtrar qué equipos pueden iniciar el tráfico del túnel VPN y cuáles no.</p>

      <div class="overflow-x-auto my-8">
        <table class="w-full text-left border-collapse border border-gray-700">
            <thead class="bg-[#1a1f2e] text-cyan-300">
                <tr>
                    <th class="p-3 border border-gray-700">Regla ACL</th>
                    <th class="p-3 border border-gray-700">Propósito Técnico</th>
                    <th class="p-3 border border-gray-700">Impacto</th>
                </tr>
            </thead>
            <tbody class="text-sm text-gray-300 font-mono">
                <tr><td class="p-3 border border-gray-700">access-list 101 permit ip 192.168.1.0 0.0.0.255 10.0.0.0 0.255.255.255</td><td class="p-3 border border-gray-700 font-sans text-xs">Define tráfico interesante para el túnel.</td><td class="p-3 border border-gray-700 font-sans text-xs">Cifra toda la LAN local hacia la LAN remota.</td></tr>
                <tr><td class="p-3 border border-gray-700">access-list 101 deny ip any any</td><td class="p-3 border border-gray-700 font-sans text-xs">Implícito por defecto.</td><td class="p-3 border border-gray-700 font-sans text-xs text-red-400 uppercase">BLOQUEO TOTAL DEL RESTO.</td></tr>
            </tbody>
        </table>
      </div>

      <h2 class="text-violet-400 font-mono text-lg mt-12 mb-4">CONCLUSIÓN DEL DESPLIEGUE</h2>
      <p>La combinación de <strong>VPN IPSec</strong> para proteger los datos en tránsito y <strong>Port Security</strong> para blindar el acceso local garantiza una postura de seguridad integral. Este laboratorio demuestra la importancia de asegurar no solo el canal de comunicación, sino también la infraestructura física subyacente.</p>

      <h2 class="mt-12 text-cyan-400 font-mono">Referencias Bibliográficas</h2>
      <ul class="list-decimal pl-6 space-y-2 text-sm text-gray-400">
        <li>Cisco Systems. (2024). <strong>Configuring Site-to-Site IPSec VPNs with ISAKMP</strong>. Cisco Press.</li>
        <li>Graziani, R. (2017). <strong>Scaling Networks v6 Companion Guide</strong>. Cisco Press.</li>
        <li>López Contreras, S. (2025). <strong>Apuntes de clase: Criptografía y Túneles Seguros</strong>.</li>
      </ul>
    `
  }
];

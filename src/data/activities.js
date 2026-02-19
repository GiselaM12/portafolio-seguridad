export const activities = [
  {
    id: 1,
    title: "ACTIVIDAD 01 - Análisis en grupo de un ciberataque real y su impacto empresarial (Caso Equifax 2017)",
    description: "Análisis forense y estratégico del ciberataque a Equifax, evaluando vulnerabilidades, impacto financiero y cumplimiento normativo bajo estándares ISO 27001, NIST y GDPR.",
    date: "2026-02-18",
    tags: ["Equifax", "CVE-2017-5638", "Impacto Económico", "Análisis Forense", "ISO 27001"],
    content: `
      <h2>Introducción</h2>
      <p>El presente reporte documenta el ciberataque sufrido por <strong>Equifax en 2017</strong>, considerado uno de los incidentes de ex-filtración masiva más graves en el sector financiero. El ataque fue posible mediante la explotación de la vulnerabilidad <strong>CVE-2017-5638 en Apache Struts</strong>, la cual permitió la ejecución remota de código (RCE) debido a la omisión de un parche de seguridad disponible meses antes del incidente.</p>
      <p>La brecha expuso deficiencias críticas en la gestión de activos y la visibilidad operativa, destacando el vencimiento de certificados SSL que impidieron la detección del tráfico malicioso durante 76 días. Con un impacto que afectó a <strong>147.5 millones de víctimas</strong> y resultó en un acuerdo judicial de <strong>$1.4 mil millones de USD</strong>.</p>
      <p>Este estudio tiene el propósito de evaluar las consecuencias bajo el modelo <strong>CIA (Confidencialidad, Integridad y Disponibilidad)</strong> para comprender la relación entre la ciberseguridad y la sostenibilidad organizacional.</p>

      <h2>Línea de Tiempo</h2>
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

      <h2>Análisis técnico, impacto económico y estratégico</h2>
      <p>Tras la reconstrucción de los hechos, el equipo pericial concluye que el éxito de la intrusión se debió a una pérdida de control del ciclo de vida de los activos. No se trata únicamente de un servidor olvidado; se trata de una ruptura en la Cadena de Mando de TI.</p>
      <ul class="list-disc pl-6 space-y-3 mb-8">
        <li><strong>Omisión de Mantenimiento Crítico:</strong> La vulnerabilidad CVE-2017-5638 fue pública y tuvo una solución técnica inmediata (parche) desde marzo. La incapacidad de Equifax para identificar qué servidores corrían dicho software demuestra una falta de inventario de activos, violando los principios básicos de marcos internacionales como ISO 27001.</li>
        <li><strong>Falla de Visibilidad Operativa:</strong> El hecho de que un Certificado SSL estuviera vencido por 10 meses no es un error menor; es una negligencia grave. En términos policiales, es equivalente a tener cámaras de seguridad en un banco, pero no tener a nadie mirando el monitor porque el cable está desconectado. Los atacantes filtraron gigabytes de información a plena vista, protegidos por el mismo cifrado que la empresa debía supervisar.</li>
        <li><strong>Higiene de Datos Deficiente:</strong> Una vez que el perímetro fue vulnerado, los atacantes no enfrentaron resistencia interna. El hallazgo de credenciales de bases de datos en texto plano eliminó la necesidad de realizar ataques de fuerza bruta complejos. Esto permitió que una intrusión web se transformara en un acceso total a la "joyería" de la empresa: los datos crediticios.</li>
      </ul>

      <h2>Tablas técnicas y de costos</h2>
      
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

      <h2>Relación con marcos normativos</h2>
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

      <h2>Conclusiones</h2>
      <p>El ciberataque a Equifax no fue el resultado de una técnica de hackeo sofisticada e inevitable, sino la consecuencia de una serie de fallas operativas y negligencias en la gestión de seguridad. A continuación, se presentan los aprendizajes clave y las acciones preventivas necesarias para cualquier organización:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>La visibilidad es la base de la protección:</strong> No se puede proteger lo que no se sabe que existe. El desconocimiento de que el "Portal de Disputas" utilizaba Apache Struts dejó una brecha crítica fuera del alcance de las políticas de mantenimiento.</li>
        <li><strong>Un parche omitido es una puerta abierta:</strong> La existencia de una solución técnica (parche) desde marzo para la vulnerabilidad CVE-2017-5638 subraya que la velocidad de respuesta es tan vital como la detección misma.</li>
        <li><strong>El cifrado sin monitoreo es un punto ciego:</strong> Contar con herramientas de inspección es inútil si no se gestionan sus componentes básicos. El vencimiento de un certificado SSL por 10 meses permitió que los atacantes exfiltraran datos masivos sin ser detectados.</li>
        <li><strong>La higiene de datos interna es crítica:</strong> Una vez superado el perímetro, la falta de seguridad interna (como credenciales en texto plano) facilitó un acceso total a la base de datos central sin necesidad de ataques complejos.</li>
      </ul>

      <h2>Recomendaciones estratégicas</h2>
      <ul class="list-disc pl-6 space-y-2 mb-8">
        <li><strong>Implementar un Inventario de Activos Dinámico:</strong> Mantener un registro automatizado y actualizado de todo el software, versiones y hardware en la red para eliminar "puntos ciegos" operativos.</li>
        <li><strong>Establecer una Política de Gestión de Parches Críticos:</strong> Definir tiempos de respuesta obligatorios (ej. 24-48 horas) para vulnerabilidades con severidad alta o crítica (CVSS 10.0).</li>
        <li><strong>Automatizar la Gestión de Certificados:</strong> Utilizar herramientas que alerten y renueven automáticamente los certificados SSL/TLS para garantizar que la visibilidad y el monitoreo del tráfico (IDS/IPS) nunca se interrumpan.</li>
        <li><strong>Adoptar el Principio de Privilegio Mínimo y Cifrado de Credenciales:</strong> Prohibir estrictamente el almacenamiento de contraseñas en texto plano y utilizar soluciones de Gestión de Acceso Privilegiado (PAM).</li>
        <li><strong>Segregación y Cifrado de Datos en Reposo:</strong> Aplicar técnicas de seudonimización y cifrado directamente en las bases de datos para que, en caso de una exfiltración exitosa, la información sea ilegible.</li>
      </ul>

      <p class="text-sm italic mb-6">El análisis del caso Equifax revela que la magnitud de una brecha de seguridad no depende únicamente de la habilidad del atacante, sino de la madurez operativa de la organización. El incidente de 2017 dejó de ser un simple fallo técnico para convertirse en un caso de estudio sobre negligencia sistémica. La exposición de datos de 147.5 millones de personas y un costo total estimado de $107,115,000,000 MXN demuestran que el ahorro en mantenimiento preventivo es ínfimo comparado con las pérdidas operativas, legales y reputacionales que genera un ataque exitoso. La ciberseguridad no puede gestionarse de forma aislada; debe estar integrada en la Cadena de Mando de TI.</p>

      <p class="text-sm italic mb-8">El caso Equifax es un recordatorio de que marcos como ISO 27001 y NIST CSF no son solo requisitos de cumplimiento, sino herramientas de supervivencia. Para una organización moderna, la ciberseguridad es una responsabilidad ética y financiera: la confianza del cliente, una vez perdida por fallos evitables como la falta de un parche o un certificado vencido, es el activo más difícil y costoso de recuperar.</p>

      <h2>Glosario</h2>
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

      <h2>Bibliografía</h2>
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
    description: "Estudio profundo de los estándares X.800 y RFC 4949, definiendo servicios y mecanismos de seguridad fundamentales.",
    date: "2024-02-15",
    tags: ["Estándares", "X.800", "RFC 4949", "Teoría"],
    content: `
      <h2>Introducción</h2>
      <p>La seguridad en redes de computadoras se basa en estándares internacionales que definen un lenguaje y una arquitectura común. Esta actividad analiza la arquitectura de seguridad OSI definida en la recomendación <strong>X.800 de la UIT-T</strong> y el glosario de seguridad de Internet <strong>RFC 4949</strong>.</p>
      
      <h2>Arquitectura de Seguridad OSI (X.800)</h2>
      <p>La norma X.800 proporciona una descripción general de los servicios de seguridad y los mecanismos necesarios para proporcionarlos. Se divide fundamentalmente en tres conceptos clave: ataques, servicios y mecanismos.</p>
      
      <h3 class="text-violet-400 font-mono text-lg mt-6 mb-2">Servicios de Seguridad (X.800)</h3>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse border border-gray-700">
            <thead class="bg-[#1a1f2e] text-violet-300">
                <tr>
                    <th class="p-3 border border-gray-700">Servicio</th>
                    <th class="p-3 border border-gray-700">Descripción</th>
                </tr>
            </thead>
            <tbody class="text-sm text-gray-300">
                <tr><td class="p-3 border border-gray-700 font-bold">Autenticación</td><td class="p-3 border border-gray-700">Garantiza que la entidad de comunicación es quien dice ser. Incluye autenticación de entidad par y autenticación de origen de datos.</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold">Control de Acceso</td><td class="p-3 border border-gray-700">Protección contra el uso no autorizado de recursos. Decide quién puede acceder a qué.</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold">Confidencialidad de Datos</td><td class="p-3 border border-gray-700">Protección de los datos contra la divulgación no autorizada.</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold">Integridad de Datos</td><td class="p-3 border border-gray-700">Garantía de que los datos recibidos son exactamente los enviados por una entidad autorizada (sin modificación, inserción, eliminación ni repetición).</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold">No Repudio</td><td class="p-3 border border-gray-700">Protección contra la negación por parte de una de las entidades involucradas en una comunicación de haber participado en toda o parte de la comunicación.</td></tr>
            </tbody>
        </table>
      </div>

      <h3 class="text-violet-400 font-mono text-lg mt-6 mb-2">Mecanismos de Seguridad</h3>
      <ul class="list-disc pl-6 space-y-2 mb-8">
        <li><strong>Cifrado (Encipherment):</strong> Uso de algoritmos matemáticos para transformar datos en una forma ininteligible.</li>
        <li><strong>Firma Digital:</strong> Datos añadidos a una unidad de datos que permiten al receptor probar el origen y la integridad de la unidad.</li>
        <li><strong>Control de Acceso:</strong> Mecanismos que hacen cumplir los derechos de acceso a los recursos.</li>
        <li><strong>Integridad de Datos:</strong> Uso de códigos de comprobación (hash) para validar la integridad de una unidad de datos o flujo.</li>
        <li><strong>Intercambio de Autenticación:</strong> Protocolo para asegurar la identidad de las entidades.</li>
      </ul>

      <h2>RFC 4949: Glosario de Seguridad de Internet</h2>
      <p>El RFC 4949 es un documento informativo que consolida la terminología utilizada en el campo de la seguridad de la información. Su objetivo es reducir la ambigüedad y facilitar la comunicación técnica.</p>
      
      <div class="bg-gray-900 border border-gray-700 rounded p-4 mb-8">
        <h4 class="text-blue-400 font-bold mb-2">Conceptos Clave del RFC 4949</h4>
        <dl class="space-y-4 text-sm">
            <div>
                <dt class="font-bold text-gray-200">Adversario (Adversary)</dt>
                <dd class="text-gray-400 ml-4">Una entidad que ataca, o es una amenaza para, un sistema. Puede ser un hacker, un insider malintencionado, o malware.</dd>
            </div>
            <div>
                <dt class="font-bold text-gray-200">Contramedida (Countermeasure)</dt>
                <dd class="text-gray-400 ml-4">Una acción, dispositivo, procedimiento o técnica que reduce una amenaza, una vulnerabilidad o un ataque eliminándolo o previniéndolo, minimizando el daño que puede causar, o descubriéndolo y reportándolo de manera que se puedan tomar medidas correctivas.</dd>
            </div>
            <div>
                <dt class="font-bold text-gray-200">Riesgo (Risk)</dt>
                <dd class="text-gray-400 ml-4">Una expectativa de pérdida expresada como la probabilidad de que una amenaza particular explote una vulnerabilidad particular con una consecuencia dañina particular.</dd>
            </div>
        </dl>
      </div>

      <h2>Conclusión</h2>
      <p>Comprender la norma X.800 y el RFC 4949 es fundamental para cualquier profesional de seguridad. X.800 proporciona el marco arquitectónico ("el mapa"), mientras que RFC 4949 proporciona el vocabulario preciso ("el diccionario") para diseñar y discutir sistemas seguros de manera efectiva.</p>
    `
  },
  {
    id: 3,
    title: "ACTIVIDAD 03 - Interpretación y traducción de políticas de filtrado en iptables",
    description: "Ejercicio práctico de configuración de firewalls en Linux utilizando iptables, traduciendo políticas de seguridad a reglas técnicas.",
    date: "2024-02-20",
    tags: ["Linux", "Firewall", "Iptables", "Seguridad de Red"],
    content: `
      <h2>Introducción a Netfilter e Iptables</h2>
      <p><strong>Iptables</strong> es la herramienta de espacio de usuario utilizada para configurar las tablas de filtrado de paquetes del kernel de Linux (Netfilter). Es la primera línea de defensa en servidores Linux, permitiendo definir reglas granulares para aceptar, rechazar o modificar el tráfico de red.</p>

      <h2>Estructura Básica</h2>
      <p>Iptables organiza las reglas en <strong>Tablas</strong> y <strong>Cadenas (Chains)</strong>. Las tablas más comunes son:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Filter:</strong> Tabla por defecto. Se usa para decidir si dejar pasar un paquete. (Cadenas: INPUT, OUTPUT, FORWARD).</li>
        <li><strong>Nat:</strong> Usada para la traducción de direcciones de red (Network Address Translation). (Cadenas: PREROUTING, POSTROUTING, OUTPUT).</li>
        <li><strong>Mangle:</strong> Usada para la modificación especializada de paquetes.</li>
      </ul>

      <h2>Políticas de Seguridad y su Traducción a Reglas</h2>
      <p>A continuación se presentan ejemplos de cómo traducir políticas de seguridad escritas en lenguaje natural a comandos técnicos de iptables.</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse border border-gray-700">
            <thead class="bg-[#1a1f2e] text-green-400">
                <tr>
                    <th class="p-3 border border-gray-700 w-1/3">Política de Seguridad</th>
                    <th class="p-3 border border-gray-700">Comando Iptables</th>
                </tr>
            </thead>
            <tbody class="text-sm text-gray-300 font-mono">
                <tr>
                    <td class="p-3 border border-gray-700 font-sans text-gray-200">1. Política por defecto: Bloquear todo el tráfico entrante a menos que se permita explícitamente.</td>
                    <td class="p-3 border border-gray-700">iptables -P INPUT DROP</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-sans text-gray-200">2. Permitir conexiones SSH entrantes (Puerto 22).</td>
                    <td class="p-3 border border-gray-700">iptables -A INPUT -p tcp --dport 22 -j ACCEPT</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-sans text-gray-200">3. Permitir tráfico Web (HTTP y HTTPS).</td>
                    <td class="p-3 border border-gray-700">
                        iptables -A INPUT -p tcp --dport 80 -j ACCEPT<br>
                        iptables -A INPUT -p tcp --dport 443 -j ACCEPT
                    </td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-sans text-gray-200">4. Permitir tráfico de loopback (localhost).</td>
                    <td class="p-3 border border-gray-700">iptables -A INPUT -i lo -j ACCEPT</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-sans text-gray-200">5. Bloquear una IP maliciosa específica (ej. 192.168.1.100).</td>
                    <td class="p-3 border border-gray-700">iptables -A INPUT -s 192.168.1.100 -j DROP</td>
                </tr>
            </tbody>
        </table>
      </div>

      <h2>Script de Configuración Básica</h2>
      <p>Es común agrupar estas reglas en un script de bash para facilitar su aplicación. Un ejemplo de script de "Hardening" básico sería:</p>

      <div class="bg-black border border-gray-700 rounded p-4 font-mono text-xs text-green-500 overflow-x-auto mb-8">
        <pre>
#!/bin/bash
# Limpiar reglas existentes
iptables -F
iptables -X

# Establecer políticas por defecto
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Permitir conexiones establecidas relacionadas (Stateful)
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Permitir loopback
iptables -A INPUT -i lo -j ACCEPT

# Permitir SSH
iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Loggear paquetes droppeados (Opcional, para auditoría)
iptables -A INPUT -j LOG --log-prefix "IPTABLES-DROP: "
        </pre>
      </div>

      <h2>Conclusión</h2>
      <p>Iptables es una herramienta poderosa y flexible. Una configuración correcta es vital para la seguridad del servidor; un error (como bloquear el puerto 22 sin tener acceso físico) puede dejar al administrador fuera del sistema. La práctica de "Default DROP" es la más segura, obligando a abrir explícitamente solo lo que es necesario.</p>
    `
  },
  {
    id: 4,
    title: "ACTIVIDAD 04 - Mecanismos de defensa en red",
    description: "Exploración de diversas estrategias y herramientas para proteger infraestructuras de red contra accesos no autorizados.",
    date: "2024-02-25",
    tags: ["Defensa en Profundidad", "IDS/IPS", "Honeypots"],
    content: `
      <h2>Defensa en Profundidad (Defense in Depth)</h2>
      <p>El concepto de defensa en profundidad se basa en la premisa de que <strong>ninguna medida de seguridad es infalible</strong>. Por lo tanto, se deben implementar múltiples capas de controles de seguridad (redundancia) para proteger los activos de información.</p>

      <h2>Sistemas de Detección y Prevención de Intrusos (IDS vs IPS)</h2>
      <p>Ambos sistemas monitorizan el tráfico de red en busca de firmas de ataques conocidos o anomalías, pero difieren en su reacción.</p>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse border border-gray-700">
            <thead class="bg-[#1a1f2e] text-blue-300">
                <tr>
                    <th class="p-3 border border-gray-700">Característica</th>
                    <th class="p-3 border border-gray-700">IDS (Intrusion Detection System)</th>
                    <th class="p-3 border border-gray-700">IPS (Intrusion Prevention System)</th>
                </tr>
            </thead>
            <tbody class="text-sm text-gray-300">
                <tr><td class="p-3 border border-gray-700 font-bold">Función Principal</td><td class="p-3 border border-gray-700">Detectar y alertar.</td><td class="p-3 border border-gray-700">Detectar, alertar y <strong>bloquear</strong>.</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold">Ubicación en la Red</td><td class="p-3 border border-gray-700">Fuera de línea (Promiscuous Mode / SPAN Port). No afecta el flujo.</td><td class="p-3 border border-gray-700">En línea (Inline). Todo el tráfico pasa a través de él.</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold">Impacto en Rendimiento</td><td class="p-3 border border-gray-700">Nulo o mínimo en la latencia de la red.</td><td class="p-3 border border-gray-700">Puede introducir latencia; si falla, puede cortar la red.</td></tr>
                <tr><td class="p-3 border border-gray-700 font-bold">Riesgo</td><td class="p-3 border border-gray-700">Falsos negativos (no detectar un ataque).</td><td class="p-3 border border-gray-700">Falsos positivos (bloquear tráfico legítimo).</td></tr>
            </tbody>
        </table>
      </div>

      <h2>Honeypots y Honeynets</h2>
      <p>Un <strong>Honeypot</strong> es un recurso de sistema de información cuyo valor radica en el uso no autorizado e ilícito de ese recurso. Es una trampa, diseñada para parecer un objetivo real (servidor de base de datos, servidor web vulnerable) para atraer a los atacantes.</p>
      
      <ul class="list-disc pl-6 space-y-3 mb-8">
        <li><strong>Objetivo:</strong> Desviar la atención de los activos críticos reales, estudiar las tácticas, técnicas y procedimientos (TTPs) del atacante, y generar alertas tempranas de alta fidelidad (cualquier tráfico hacia un honeypot es sospechoso por definición).</li>
        <li><strong>Tipos:</strong>
            <ul class="list-circle pl-6 mt-2 text-gray-400">
                <li><em>Baja interacción:</em> Simulan servicios (puertos abiertos, banners) pero no un sistema operativo completo. Menos riesgo, menos datos.</li>
                <li><em>Alta interacción:</em> Son sistemas reales con vulnerabilidades intencionales y mucha instrumentación. Alto riesgo, muchos datos valiosos.</li>
            </ul>
        </li>
      </ul>

      <h2>Firewalls de Nueva Generación (NGFW)</h2>
      <p>A diferencia de los firewalls tradicionales que filtran por puerto y protocolo (Capa 3 y 4), los NGFW operan hasta la <strong>Capa 7 (Aplicación)</strong>. Pueden inspeccionar el contenido del paquete, identificar la aplicación específica (ej. "Facebook Games" vs "Facebook Chat") y descifrar tráfico SSL/TLS.</p>

      <h2>Conclusión</h2>
      <p>Una estrategia de seguridad robusta combina estas tecnologías: Firewalls para segmentar, IPS para bloquear ataques conocidos en tiempo real, IDS para visibilidad profunda, y Honeypots para inteligencia de amenazas activa.</p>
    `
  },
  {
    id: 5,
    title: "ACTIVIDAD 05 - Cartografiando el pentesting",
    description: "Análisis comparativo de las principales metodologías de pruebas de penetración (PTES, OSSTMM, ISSAF).",
    date: "2024-03-01",
    tags: ["Pentesting", "Metodologías", "Ethical Hacking"],
    content: `
      <h2>La importancia de una Metodología</h2>
      <p>El hacking ético no es un proceso caótico; requiere estructura, repetibilidad y documentación. Existen varios estándares internacionales que guían a los auditores de seguridad para asegurar que las pruebas sean exhaustivas y seguras.</p>

      <h2>Comparativa de Metodologías</h2>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse border border-gray-700">
            <thead class="bg-[#1a1f2e] text-purple-300">
                <tr>
                    <th class="p-3 border border-gray-700">Metodología</th>
                    <th class="p-3 border border-gray-700">Nombre Completo</th>
                    <th class="p-3 border border-gray-700">Enfoque Principal</th>
                </tr>
            </thead>
            <tbody class="text-sm text-gray-300">
                <tr>
                    <td class="p-3 border border-gray-700 font-bold">PTES</td>
                    <td class="p-3 border border-gray-700">Penetration Testing Execution Standard</td>
                    <td class="p-3 border border-gray-700">Enfoque técnico muy detallado. Cubre desde el acuerdo inicial hasta el reporte técnico. Es el estándar "de facto" para la ejecución técnica.</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-bold">OSSTMM</td>
                    <td class="p-3 border border-gray-700">Open Source Security Testing Methodology Manual</td>
                    <td class="p-3 border border-gray-700">Enfoque científico y métrico. Se centra en medir la seguridad operativa (OpSec) y cuantificar el nivel de seguridad. Menos enfocado en "cómo hackear" y más en "cómo medir".</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-bold">ISSAF</td>
                    <td class="p-3 border border-gray-700">Information Systems Security Assessment Framework</td>
                    <td class="p-3 border border-gray-700">Muy granular, vincula herramientas específicas a cada paso de la prueba. Actualmente está algo desactualizado pero sigue siendo una buena referencia de checklist.</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-bold">NIST SP 800-115</td>
                    <td class="p-3 border border-gray-700">Technical Guide to Information Security Testing and Assessment</td>
                    <td class="p-3 border border-gray-700">Estándar del gobierno de EE.UU. Muy formal, orientado a cumplimiento y gestión de riesgos en agencias federales y corporaciones grandes.</td>
                </tr>
            </tbody>
        </table>
      </div>

      <h2>Desglose del PTES (Penetration Testing Execution Standard)</h2>
      <p>PTES es comúnmente aceptado como el flujo de trabajo estándar para pentesters. Sus fases son:</p>
      
      <ol class="list-decimal pl-6 space-y-4 mb-8 text-gray-300">
        <li>
            <strong class="text-white">Pre-engagement Interactions (Interacciones Previas):</strong>
            <p class="text-sm text-gray-400">Definición del alcance (Scope), Reglas de Compromiso (RoE), ventanas de tiempo, ip's permitidas y gestión de emergencias.</p>
        </li>
        <li>
            <strong class="text-white">Intelligence Gathering (Recolección de Información):</strong>
            <p class="text-sm text-gray-400">OSINT (Open Source Intelligence). Obtener dominios, correos, IPs, tecnologías usadas sin tocar el objetivo directamente.</p>
        </li>
        <li>
            <strong class="text-white">Threat Modeling (Modelado de Amenazas):</strong>
            <p class="text-sm text-gray-400">Identificar activos críticos y pensar como el atacante: ¿Cuál es el camino más probable de ataque?</p>
        </li>
        <li>
            <strong class="text-white">Vulnerability Analysis (Análisis de Vulnerabilidades):</strong>
            <p class="text-sm text-gray-400">Escaneo activo y pasivo para encontrar fallos conocidos (ej. versiones antiguas de software, malas configuraciones).</p>
        </li>
        <li>
            <strong class="text-white">Exploitation (Explotación):</strong>
            <p class="text-sm text-gray-400">El "hackeo" real. Intentar explotar las vulnerabilidades encontradas para ganar acceso al sistema.</p>
        </li>
        <li>
            <strong class="text-white">Post Exploitation (Post-Explotación):</strong>
            <p class="text-sm text-gray-400">Determinar el valor del sistema comprometido. Movimiento lateral, escalada de privilegios y persistencia.</p>
        </li>
        <li>
            <strong class="text-white">Reporting (Reporte):</strong>
            <p class="text-sm text-gray-400">La parte más importante para el cliente. Se divide en Reporte Ejecutivo (para gerencia) y Reporte Técnico (para TI).</p>
        </li>
      </ol>

      <h2>Conclusión</h2>
      <p>Seguir una metodología garantiza que ninguna piedra quede sin remover. Un pentest no es solo correr herramientas automáticas; es un proceso sistemático de validación de seguridad.</p>
    `
  },
  {
    id: 6,
    title: "ACTIVIDAD 06 - Implementación de IPSec VPN",
    description: "Guía técnica sobre la configuración e implementación de redes privadas virtuales seguras utilizando el protocolo IPSec.",
    date: "2024-03-05",
    tags: ["VPN", "IPSec", "Criptografía", "Redes"],
    content: `
      <h2>Introducción a IPSec</h2>
      <p><strong>IPSec (Internet Protocol Security)</strong> es un conjunto de protocolos que asegura las comunicaciones IP autenticando y cifrando cada paquete IP de una sesión. Es el estándar de facto para construir VPNs (Virtual Private Networks) robustas sitio-a-sitio (Site-to-Site).</p>

      <h2>Arquitectura de IPSec</h2>
      <p>IPSec no es un protocolo único, sino un marco que utiliza varios protocolos para diferentes funciones:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="bg-gray-900 p-4 border border-blue-900 rounded">
            <h4 class="text-blue-400 font-bold mb-2">AH (Authentication Header)</h4>
            <p class="text-sm text-gray-400">Provee integridad de datos y autenticación de origen. Protege contra ataques de repetición (Replay Attacks). <strong>NO cifra los datos</strong> del payload, por lo que la información viaja en texto claro pero firmada.</p>
        </div>
        <div class="bg-gray-900 p-4 border border-green-900 rounded">
            <h4 class="text-green-400 font-bold mb-2">ESP (Encapsulating Security Payload)</h4>
            <p class="text-sm text-gray-400">Provee confidencialidad (cifrado), integridad y autenticación. Es el protocolo más común en VPNs porque oculta los datos reales.</p>
        </div>
      </div>

      <h2>Modos de Cifrado</h2>
      <ul class="list-disc pl-6 space-y-3 mb-8">
        <li><strong>Modo Transporte:</strong> Solo cifra el payload (carga útil) del paquete IP. El encabezado IP original se mantiene. Se usa generalmente para comunicaciones End-to-End (ej. Admin a Servidor).</li>
        <li><strong>Modo Túnel:</strong> Cifra todo el paquete IP original y le añade un nuevo encabezado IP. Se usa para VPNs Site-to-Site (ej. Router a Router), donde las redes internas son privadas.</li>
      </ul>

      <h2>Fases de IKE (Internet Key Exchange)</h2>
      <p>Para establecer un túnel IPSec, los dispositivos deben negociar claves y políticas. Esto ocurre en dos fases:</p>
      
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-left border-collapse border border-gray-700">
            <thead class="bg-[#1a1f2e] text-white">
                <tr>
                    <th class="p-3 border border-gray-700">Fase</th>
                    <th class="p-3 border border-gray-700">Objetivo</th>
                </tr>
            </thead>
            <tbody class="text-sm text-gray-300">
                <tr>
                    <td class="p-3 border border-gray-700 font-bold">Fase 1 (Main Mode / Aggressive Mode)</td>
                    <td class="p-3 border border-gray-700">Autenticar los peers (routers) y negociar parámetros básicos para establecer un canal seguro inicial (ISAKMP SA).</td>
                </tr>
                <tr>
                    <td class="p-3 border border-gray-700 font-bold">Fase 2 (Quick Mode)</td>
                    <td class="p-3 border border-gray-700">Negociar los parámetros específicos de IPSec (SA) que se usarán para cifrar el tráfico de datos real (algoritmos de cifrado, hash, tiempos de vida).</td>
                </tr>
            </tbody>
        </table>
      </div>

      <h2>Conclusión</h2>
      <p>IPSec es complejo de configurar debido a la gran cantidad de parámetros que deben coincidir exactamente en ambos extremos (algoritmos, claves pre-compartidas, selectores de tráfico). Sin embargo, una vez establecido, ofrece uno de los niveles más altos de seguridad para la transmisión de datos sobre redes públicas inseguras como Internet.</p>
    `
  }
];

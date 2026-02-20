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
    description: "Análisis exhaustivo de 10 escenarios de ciberseguridad aplicando el marco X.800 (servicios) y el glosario RFC 4949 (terminología).",
    date: "2026-02-19",
    tags: ["X.800", "RFC 4949", "Amenazas", "Controles", "Análisis Forense"],
    content: `
      <h2>Introducción</h2>
      <p>La seguridad informática requiere de un lenguaje técnico común y un marco de referencia sólido. Esta actividad integra los servicios de seguridad definidos en el estándar <strong>ITU-T X.800</strong> con el vocabulario técnico del <strong>RFC 4949</strong> para analizar 10 escenarios reales y proponer medidas de control efectivas.</p>

      <div class="bg-violet-900/10 border border-violet-500/20 rounded p-6 mb-10">
        <p class="text-gray-300 italic">"La unión de ambos permite pasar de una descripción anecdótica a un informe técnico profesional."</p>
      </div>

      <div class="space-y-12">
        <!-- Escenario 01 -->
        <div class="border-l-4 border-red-500 pl-6 py-6 bg-white/5 rounded-r-lg shadow-xl">
          <h3 class="text-xl font-bold text-red-400 mb-4 uppercase font-mono tracking-wider text-shadow-sm">Escenario 01: LockBit Ransomware</h3>
          <p class="mb-6 text-gray-400 italic border-b border-gray-800 pb-4">Acceso inicial no autorizado, exfiltración de datos y cifrado masivo de servidores.</p>
          
          <div class="space-y-4">
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué servicios X.800 fueron comprometidos?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Confidencialidad, Integridad, Disponibilidad.</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es su definición según el glosario RFC 4949?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Multi-stage attack, Data Breach, Availability Attack.</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿En qué categoría de amenaza clasifica?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Externa (Maliciosa deliberada).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál fue el vector de ataque detectado?</p>
              <p class="text-red-300 pl-4 border-l-2 border-red-900/50">Intrusión inicial seguido de Movimiento Lateral (Lateral Movement).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué impacto técnico y operativo generó?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Parada total de operaciones y fuga masiva de información sensible.</p>
            </div>
            <div>
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es la medida de control recomendada?</p>
              <p class="text-green-400 font-mono text-sm pl-4 border-l-2 border-green-900/50 bg-green-900/5 p-2 rounded">Respaldos inmutables (offline), segmentación de red y herramientas DLP.</p>
            </div>
          </div>
        </div>

        <!-- Escenario 02 -->
        <div class="border-l-4 border-blue-500 pl-6 py-6 bg-white/5 rounded-r-lg shadow-xl text-shadow-sm">
          <h3 class="text-xl font-bold text-blue-400 mb-4 uppercase font-mono tracking-wider">Escenario 02: Misconfiguración Cloud</h3>
          <p class="mb-6 text-gray-400 italic border-b border-gray-800 pb-4">Bases de datos accesibles públicamente por errores de configuración en la nube.</p>
          
          <div class="space-y-4">
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué servicios X.800 fueron comprometidos?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Confidencialidad, Control de Acceso.</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es su definición según el glosario RFC 4949?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Misconfiguration, Exposure.</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿En qué categoría de amenaza clasifica?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Interna (Involuntaria / Error humano).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál fue el vector de ataque detectado?</p>
              <p class="text-red-300 pl-4 border-l-2 border-red-900/50">S3 bucket abierto (Permisos "Everyone" activos).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué impacto técnico y operativo generó?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Violación de normativas de privacidad (GDPR/LFPDPPP).</p>
            </div>
            <div>
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es la medida de control recomendada?</p>
              <p class="text-green-400 font-mono text-sm pl-4 border-l-2 border-green-900/50 bg-green-900/5 p-2 rounded">Implementación de CSPM (Cloud Security Posture Management).</p>
            </div>
          </div>
        </div>

        <!-- Escenario 03 -->
        <div class="border-l-4 border-yellow-500 pl-6 py-6 bg-white/5 rounded-r-lg shadow-xl">
          <h3 class="text-xl font-bold text-yellow-500 mb-4 uppercase font-mono tracking-wider">Escenario 03: Supply Chain Attack</h3>
          <p class="mb-6 text-gray-400 italic border-b border-gray-800 pb-4">Proveedor comprometido distribuye actualizaciones con código malicioso.</p>
          
          <div class="space-y-4">
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué servicios X.800 fueron comprometidos?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Integridad, Autenticación.</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es su definición según el glosario RFC 4949?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Supply Chain Attack, Trojan Horse, Malicious Logic.</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿En qué categoría de amenaza clasifica?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Externa (Estructural/Sistémica).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál fue el vector de ataque detectado?</p>
              <p class="text-red-300 pl-4 border-l-2 border-red-900/50">Compromiso de infraestructura CI/CD del proveedor.</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué impacto técnico y operativo generó?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Compromiso masivo de clientes y acceso persistente (Backdoor).</p>
            </div>
            <div>
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es la medida de control recomendada?</p>
              <p class="text-green-400 font-mono text-sm pl-4 border-l-2 border-green-900/50 bg-green-900/5 p-2 rounded">Verificación de firmas y sandboxing de actualizaciones.</p>
            </div>
          </div>
        </div>

        <!-- Escenario 04 -->
        <div class="border-l-4 border-purple-500 pl-6 py-6 bg-white/5 rounded-r-lg shadow-xl">
          <h3 class="text-xl font-bold text-purple-400 mb-4 uppercase font-mono tracking-wider">Escenario 04: Spear Phishing</h3>
          <p class="mb-6 text-gray-400 italic border-b border-gray-800 pb-4">Atacantes obtienen credenciales válidas mediante ingeniería social.</p>
          
          <div class="space-y-4">
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué servicios X.800 fueron comprometidos?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Autenticación, Control de Acceso.</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es su definición según el glosario RFC 4949?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Credential Compromise, Advanced Persistent Threat (APT).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿En qué categoría de amenaza clasifica?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Externa (Ingeniería Social).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál fue el vector de ataque detectado?</p>
              <p class="text-red-300 pl-4 border-l-2 border-red-900/50">Phishing dirigido (Spear Phishing).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué impacto técnico y operativo generó?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Espionaje corporativo prolongado y exfiltración silenciosa.</p>
            </div>
            <div>
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es la medida de control recomendada?</p>
              <p class="text-green-400 font-mono text-sm pl-4 border-l-2 border-green-900/50 bg-green-900/5 p-2 rounded">MFA obligatorio y monitoreo de comportamiento (UEBA).</p>
            </div>
          </div>
        </div>

        <!-- Escenario 05 -->
        <div class="border-l-4 border-orange-500 pl-6 py-6 bg-white/5 rounded-r-lg shadow-xl">
          <h3 class="text-xl font-bold text-orange-400 mb-4 uppercase font-mono tracking-wider">Escenario 05: Backup Sabotage</h3>
          <p class="mb-6 text-gray-400 italic border-b border-gray-800 pb-4">Atacantes eliminan respaldos antes de ejecutar ransomware para impedir recuperación.</p>
          
          <div class="space-y-4">
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué servicios X.800 fueron comprometidos?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Disponibilidad (imposibilidad de recuperar), Integridad (destrucción de activos).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es su definición según el glosario RFC 4949?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Data Destruction, Sabotage, Availability Attack.</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿En qué categoría de amenaza clasifica?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Externa (Maliciosa destructiva).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál fue el vector de ataque detectado?</p>
              <p class="text-red-300 pl-4 border-l-2 border-red-900/50">Escalación de privilegios para alcanzar repositorios de respaldo.</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué impacto técnico y operativo generó?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Pérdida total de datos y posible quiebra operativa de la organización.</p>
            </div>
            <div>
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es la medida de control recomendada?</p>
              <p class="text-green-400 font-mono text-sm pl-4 border-l-2 border-green-900/50 bg-green-900/5 p-2 rounded">Regla 3-2-1 de respaldos y almacenamiento air-gapped (desconectado).</p>
            </div>
          </div>
        </div>

        <!-- Escenario 06 -->
        <div class="border-l-4 border-emerald-500 pl-6 py-6 bg-white/5 rounded-r-lg shadow-xl">
          <h3 class="text-xl font-bold text-emerald-400 mb-4 uppercase font-mono tracking-wider">Escenario 06: Insider Threat</h3>
          <p class="mb-6 text-gray-400 italic border-b border-gray-800 pb-4">Empleado con acceso legítimo extrae y vende propiedad intelectual.</p>
          
          <div class="space-y-4">
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué servicios X.800 fueron comprometidos?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Confidencialidad, Control de Acceso (exceso de privilegios otorgados).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es su definición según el glosario RFC 4949?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Insider Threat, Theft (robo), Unauthorized Disclosure.</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿En qué categoría de amenaza clasifica?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Interna (Maliciosa).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál fue el vector de ataque detectado?</p>
              <p class="text-red-300 pl-4 border-l-2 border-red-900/50">Abuso de confianza y privilegios legítimos de usuario interno.</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué impacto técnico y operativo generó?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Fuga de propiedad intelectual y pérdida de ventaja competitiva.</p>
            </div>
            <div>
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es la medida de control recomendada?</p>
              <p class="text-green-400 font-mono text-sm pl-4 border-l-2 border-green-900/50 bg-green-900/5 p-2 rounded">Principio de Mínimo Privilegio (PoLP) y monitoreo de actividad (UEBA).</p>
            </div>
          </div>
        </div>

        <!-- Escenario 07 -->
        <div class="border-l-4 border-gray-500 pl-6 py-6 bg-white/5 rounded-r-lg shadow-xl shadow-gray-900/40">
          <h3 class="text-xl font-bold text-gray-400 mb-4 uppercase font-mono tracking-wider">Escenario 07: Log Tampering</h3>
          <p class="mb-6 text-gray-400 italic border-b border-gray-800 pb-4">Registros del sistema cifrados o alterados para impedir el análisis forense.</p>
          
          <div class="space-y-4">
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué servicios X.800 fueron comprometidos?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">No Repudio (no se puede probar autoría), Integridad (de la evidencia).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es su definición según el glosario RFC 4949?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Deception, Audit Trail modification, Accountability failure.</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿En qué categoría de amenaza clasifica?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Externa o Interna (Anti-forense).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál fue el vector de ataque detectado?</p>
              <p class="text-red-300 pl-4 border-l-2 border-red-900/50">Manipulación directa de archivos de sistema (Log Tampering).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué impacto técnico y operativo generó?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Imposibilidad legal de imputar responsabilidad o entender el alcance.</p>
            </div>
            <div>
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es la medida de control recomendada?</p>
              <p class="text-green-400 font-mono text-sm pl-4 border-l-2 border-green-900/50 bg-green-900/5 p-2 rounded">Envío de logs en tiempo real a SIEM con escritura WORM.</p>
            </div>
          </div>
        </div>

        <!-- Escenario 08 -->
        <div class="border-l-4 border-cyan-500 pl-6 py-6 bg-white/5 rounded-r-lg shadow-xl">
          <h3 class="text-xl font-bold text-cyan-400 mb-4 uppercase font-mono tracking-wider">Escenario 08: Operational Failure</h3>
          <p class="mb-6 text-gray-400 italic border-b border-gray-800 pb-4">Actualización mal ejecutada provoca caída global de servicios críticos.</p>
          
          <div class="space-y-4">
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué servicios X.800 fueron comprometidos?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Disponibilidad (interrupción del servicio crítico).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es su definición según el glosario RFC 4949?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Operational Failure, Human Error, System Crash.</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿En qué categoría de amenaza clasifica?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Interna (No maliciosa / Accidental).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál fue el vector de ataque detectado?</p>
              <p class="text-red-300 pl-4 border-l-2 border-red-900/50">N/A (Fallo en procesos de QA / Control de Calidad).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué impacto técnico y operativo generó?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Interrupción masiva de negocio y grandes pérdidas financieras.</p>
            </div>
            <div>
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es la medida de control recomendada?</p>
              <p class="text-green-400 font-mono text-sm pl-4 border-l-2 border-green-900/50 bg-green-900/5 p-2 rounded">Pruebas en entorno staging y despliegue escalonado (Canary).</p>
            </div>
          </div>
        </div>

        <!-- Escenario 09 -->
        <div class="border-l-4 border-indigo-500 pl-6 py-6 bg-white/5 rounded-r-lg shadow-xl">
          <h3 class="text-xl font-bold text-indigo-400 mb-4 uppercase font-mono tracking-wider">Escenario 09: Brand Spoofing</h3>
          <p class="mb-6 text-gray-400 italic border-b border-gray-800 pb-4">Sitios replicados para engañar a ciudadanos y obtener datos sensibles.</p>
          
          <div class="space-y-4">
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué servicios X.800 fueron comprometidos?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Autenticación de origen de datos (suplantada), Confidencialidad.</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es su definición según el glosario RFC 4949?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Spoofing, Phishing, Social Engineering.</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿En qué categoría de amenaza clasifica?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Externa (Fraude / Phishing).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál fue el vector de ataque detectado?</p>
              <p class="text-red-300 pl-4 border-l-2 border-red-900/50">Correos masivos y dominios typosquatting (similares al real).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué impacto técnico y operativo generó?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Robo de identidad de usuarios y pérdida de confianza institucional.</p>
            </div>
            <div>
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es la medida de control recomendada?</p>
              <p class="text-green-400 font-mono text-sm pl-4 border-l-2 border-green-900/50 bg-green-900/5 p-2 rounded">DMARC/SPF/DKIM y monitoreo de marca (Brand Protection).</p>
            </div>
          </div>
        </div>

        <!-- Escenario 10 -->
        <div class="border-l-4 border-pink-500 pl-6 py-6 bg-white/5 rounded-r-lg shadow-xl">
          <h3 class="text-xl font-bold text-pink-400 mb-4 uppercase font-mono tracking-wider">Escenario 10: Destructive Attack</h3>
          <p class="mb-6 text-gray-400 italic border-b border-gray-800 pb-4">Acciones destructivas para borrar sistemas y eliminar rastros.</p>
          
          <div class="space-y-4">
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué servicios X.800 fueron comprometidos?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Confidencialidad, Integridad, Disponibilidad (Compromiso total).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es su definición según el glosario RFC 4949?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Destructive Attack, Wiper Malware, Sabotage.</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿En qué categoría de amenaza clasifica?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Externa (Ciberwarfare / Hacktivismo destructivo).</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál fue el vector de ataque detectado?</p>
              <p class="text-red-300 pl-4 border-l-2 border-red-900/50">Ejecución de malware tipo Wiper tras obtener control total.</p>
            </div>
            <div class="border-b border-gray-800/30 pb-3">
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Qué impacto técnico y operativo generó?</p>
              <p class="text-gray-300 pl-4 border-l-2 border-violet-900/50">Destrucción irreversible de infraestructura lógica y datos.</p>
            </div>
            <div>
              <p class="text-violet-300 font-semibold text-sm mb-1">¿Cuál es la medida de control recomendada?</p>
              <p class="text-green-400 font-mono text-sm pl-4 border-l-2 border-green-900/50 bg-green-900/5 p-2 rounded">Segmentación estricta de red y planes DRP probados.</p>
            </div>
          </div>
        </div>
      </div>

      <h2 class="mt-12">Conclusión</h2>
      <p>El análisis revela que la mayoría de los incidentes graves no requieren tecnologías imposibles de detener, sino que aprovechan errores humanos y descuidos básicos. La aplicación de fundamentos como <strong>MFA</strong>, <strong>Mínimo Privilegio</strong> y <strong>Auditoría de Permisos</strong> puede prevenir el impacto catastrófico documentado en estos escenarios.</p>

      <h2 class="mt-12">Referencias Bibliográficas</h2>
      <ul class="list-decimal pl-6 space-y-2 text-sm text-gray-400">
        <li>Shirey, R. (2007). <strong>RFC 4949: Internet Security Glossary, Version 2</strong>. IETF. <a href="https://www.rfc-editor.org/rfc/rfc4949" class="text-blue-400 hover:underline">rfc-editor.org/rfc/rfc4949</a></li>
        <li>López Contreras, S. (2025). <strong>Apuntes de clase: Fundamentos del Hacking Ético</strong>. [Material de clase].</li>
        <li>International Telecommunication Union (ITU). (1991). <strong>Recommendation X.800: Security architecture for OSI</strong>. <a href="https://www.itu.int/rec/T-REC-X.800" class="text-blue-400 hover:underline">itu.int/rec/T-REC-X.800</a></li>
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
      <h2>Introducción a Netfilter e Iptables</h2>
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

      <h2>Conceptos Fundamentales</h2>
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

      <h2>Anatomía de un comando iptables</h2>
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

      <h2>Traducción de Políticas</h2>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse border border-gray-700">
            <thead class="bg-[#1a1f2e] text-green-400">
                <tr>
                    <th class="p-3 border border-gray-700 w-1/3">Descripción del Filtro</th>
                    <th class="p-3 border border-gray-700">Comando Iptables</th>
                </tr>
            </thead>
            <tbody class="text-sm text-gray-300 font-mono">
                <tr><td class="p-3 border border-gray-700 font-sans">Permitir tráfico HTTP entrante</td><td class="p-3 border border-gray-700">iptables -A INPUT -p tcp --dport 80 -j ACCEPT</td></tr>
                <tr><td class="p-3 border border-gray-700 font-sans">Permitir todo el tráfico saliente</td><td class="p-3 border border-gray-700">iptables -P OUTPUT ACCEPT</td></tr>
                <tr><td class="p-3 border border-gray-700 font-sans">Permitir SSH solo desde la IP 192.168.1.50</td><td class="p-3 border border-gray-700">iptables -A INPUT -p tcp -s 192.168.1.50 --dport 22 -j ACCEPT</td></tr>
                <tr><td class="p-3 border border-gray-700 font-sans">Permitir tráfico TCP a puertos 80 y 443 solo si es conexión establecida o relacionada</td><td class="p-3 border border-gray-700">iptables -A INPUT -p tcp -m multiport --dports 80,443 -m state --state ESTABLISHED,RELATED -j ACCEPT</td></tr>
                <tr><td class="p-3 border border-gray-700 font-sans text-white">Permitir tráfico TCP entrante por eth0 a puertos 22, 80 y 443 (Nuevas y Establecidas)</td><td class="p-3 border border-gray-700 text-xs">iptables -A INPUT -i eth0 -p tcp -m multiport --dports 22,80,443 -m state --state NEW,ESTABLISHED -j ACCEPT</td></tr>
            </tbody>
        </table>
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

      <h2>Conclusión</h2>
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
      <h2>Introducción a la Cadena FORWARD</h2>
      <p>A diferencia de la cadena INPUT (tráfico dirigido al host local), la cadena <strong>FORWARD</strong> procesa el tráfico que simplemente pasa a través del firewall desde una interfaz hacia otra. Es la base de un firewall perimetral que protege una red interna o una DMZ.</p>

      <div class="bg-violet-900/10 border border-violet-500/20 rounded p-6 mb-10">
        <p class="text-gray-300 italic">"La cadena FORWARD permite que el firewall actúe como un guardia entre diferentes zonas de confianza, filtrando el tráfico que fluye entre ellas."</p>
      </div>

      <h2>Traducción de Políticas de Perímetro</h2>
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

      <h2>Mecanismos de Defensa Complementarios</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="bg-white/5 p-6 rounded-lg border border-gray-800">
          <h3 class="text-lg font-bold text-violet-400 mb-3">Sistemas de Detección (IDS)</h3>
          <p class="text-sm text-gray-400">Monitorizan el tráfico en busca de anomalías. En la cadena FORWARD, un IDS puede detectar intentos de movimiento lateral entre segmentos de red.</p>
        </div>
        <div class="bg-white/5 p-6 rounded-lg border border-gray-800">
          <h3 class="text-lg font-bold text-green-400 mb-3">Sistemas de Prevención (IPS)</h3>
          <p class="text-sm text-gray-400">Actúan bloqueando paquetes en tiempo real. Un IPS configurado con iptables puede usar el target REJECT para informar al atacante o DROP para ser silencioso.</p>
        </div>
      </div>

      <h2>Caso Práctico: Segmentación DMZ</h2>
      <p>En una arquitectura típica, el tráfico de Internet <strong>nunca</strong> debe llegar directamente a la red interna. Debe pasar por una DMZ donde se encuentran los servicios públicos. Si un servidor en la DMZ es comprometido, la cadena FORWARD debe impedir que el atacante salte a la red interna (Movimiento Lateral).</p>

      <div class="bg-black border border-gray-700 rounded p-4 font-mono text-xs text-green-500 overflow-x-auto my-8">
        <pre>
# Política por defecto: Cerramos todo el tráfico de paso
iptables -P FORWARD DROP

# Permitimos que la red interna salga a Internet (eth2 -> eth0)
iptables -A FORWARD -i eth2 -o eth0 -j ACCEPT

# Permitimos respuestas de Internet a la red interna
iptables -A FORWARD -i eth0 -o eth2 -m state --state ESTABLISHED,RELATED -j ACCEPT

# Permitimos acceso Web desde Internet a la DMZ (eth0 -> eth1)
iptables -A FORWARD -i eth0 -o eth1 -p tcp --dport 80 -j ACCEPT
        </pre>
      </div>

      <h3 class="text-xl font-bold text-violet-400 mb-6">Políticas de la Cadena FORWARD (Taller Práctico)</h3>
      <div class="bg-black border border-gray-700 rounded p-4 font-mono text-xs text-green-500 mb-8 overflow-x-auto">
        <pre>
# 1. Denegar todo el tráfico de reenvío por defecto (Política de Seguridad)
iptables -P FORWARD DROP

# 2. Permitir tráfico de sesiones ya establecidas y relacionadas
iptables -A FORWARD -m state --state ESTABLISHED,RELATED -j ACCEPT

# 3. Permitir consultas DNS (puerto 53) desde la red local
iptables -A FORWARD -s 192.1.2.0/24 -p tcp --dport 53 -m state --state NEW -j ACCEPT

# 4. Permitir tráfico SMTP (puerto 25) entrante al servidor de correo (192.1.2.10)
iptables -A FORWARD -d 192.1.2.10 -p tcp --dport 25 -m state --state NEW -j ACCEPT

# 5. Permitir tráfico SMTP saliente desde el servidor de correo
iptables -A FORWARD -s 192.1.2.10 -p tcp --dport 25 -m state --state NEW -j ACCEPT

# 6. Permitir tráfico HTTP (puerto 80) al servidor web en la DMZ (192.1.2.11)
iptables -A FORWARD -d 192.1.2.11 -p tcp --dport 80 -m state --state NEW -j ACCEPT

# 7. Permitir navegación web HTTP (puerto 80) desde la LAN
iptables -A FORWARD -s 192.1.2.0/24 -p tcp --dport 80 -m state --state NEW -j ACCEPT
        </pre>
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

      <h2>Conclusión</h2>
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
      <h2>Análisis Comparativo Maestro</h2>
      <p>A continuación se presenta el mapeo completo de las metodologías evaluadas, detallando desde su fundamentación científica hasta las certificaciones asociadas.</p>

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
      </div>

      <h3 class="text-xl font-bold text-violet-400 mb-6">Metodología Recomendada (PTES)</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-violet-900/10 p-4 border border-violet-500/20 rounded">
            <h4 class="font-bold text-violet-400">Pre-engagement</h4>
            <p class="text-xs text-gray-400">Definición de alcance, RoE y aspectos legales (NDA).</p>
        </div>
        <div class="bg-blue-900/10 p-4 border border-blue-500/20 rounded">
            <h4 class="font-bold text-blue-400">Intelligence Gathering</h4>
            <p class="text-xs text-gray-400">OSINT y reconocimiento pasivo/activo del objetivo.</p>
        </div>
        <div class="bg-yellow-900/10 p-4 border border-yellow-500/20 rounded">
            <h4 class="font-bold text-yellow-400">Vulnerability Analysis</h4>
            <p class="text-xs text-gray-400">Identificación de fallos y vectores potenciales.</p>
        </div>
        <div class="bg-red-900/10 p-4 border border-red-500/20 rounded">
            <h4 class="font-bold text-red-400">Exploitation & Reporting</h4>
            <p class="text-xs text-gray-400">Ganancia de acceso y documentación detallada de hallazgos.</p>
        </div>
      </div>

      <h2>Conclusión</h2>
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
      <h2>Arquitectura de Red Segura</h2>
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

      <h2>Hardening de Switches (Capa 2)</h2>
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

      <h2>Listas de Control de Acceso (ACL)</h2>
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

      <h2>Conclusión</h2>
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

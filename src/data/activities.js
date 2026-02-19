export const activities = [
  {
    id: 1,
    title: "ACTIVIDAD 01 - Análisis en grupo de un ciberataque real y su impacto empresarial (Caso Equifax 2017)",
    description: "Análisis forense y estratégico del ciberataque a Equifax, evaluando vulnerabilidades, impacto financiero y cumplimiento normativo bajo estándares ISO 27001, NIST y GDPR.",
    date: "2024-02-10",
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

      <p class="text-sm italic mb-6">El análisis del caso Equifax revela que la magnitud de una brecha de seguridad no depende únicamente de la habilidad del atacante, sino de la madurez operativa de la organización. El incidente de 2017 dejó de ser un simple fallo técnico para convertirse en un caso de estudio sobre negligencia sistémica.</p>

      <h2>Glosario</h2>
      <div class="bg-gray-900 border border-gray-700 rounded p-4 mb-8">
        <h4 class="text-red-400 font-bold mb-2">FICHA TÉCNICA: CVE-2017-5638</h4>
        <ul class="space-y-2 text-sm">
            <li><strong>Nombre Clave:</strong> Apache Struts RCE (Remote Code Execution).</li>
            <li><strong>Gravedad:</strong> 10.0 Crítico (Máxima prioridad en la escala CVSS).</li>
            <li><strong>Definición:</strong> Vulnerabilidad de ejecución remota de código que permite a un atacante tomar control total de un servidor web sin necesidad de usuario ni contraseña.</li>
            <li><strong>Modus Operandi:</strong> El atacante envía una petición HTTP con código malicioso oculto en el encabezado. El servidor, al intentar procesar un error de este encabezado, termina ejecutando los comandos del atacante.</li>
            <li><strong>Relación con Equifax:</strong> Fue la puerta de entrada principal. El parche existía desde marzo de 2017, pero Equifax no lo aplicó, dejando la vulnerabilidad expuesta durante meses.</li>
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

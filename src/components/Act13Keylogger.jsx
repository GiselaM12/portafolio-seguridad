import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaTelegramPlane, FaCode, FaKeyboard, FaPaperPlane, FaFileAlt, FaShieldAlt, FaUserSecret } from 'react-icons/fa';

const Act13Keylogger = () => {
    // Simulator State
    const [isLogging, setIsLogging] = useState(false);
    const [terminalLogs, setTerminalLogs] = useState([
        "LOGGER ACTIVO (Práctica de Ingeniería)",
        "Escribe algo en el teclado virtual y presiona 'Enviar a Telegram (ESC)' para finalizar."
    ]);
    const [capturedKeys, setCapturedKeys] = useState('');
    const [telegramMessages, setTelegramMessages] = useState([
        { type: 'in', text: '/start', time: '08:39 PM' },
        { type: 'out', text: 'hola', time: '08:39 PM' },
        { type: 'in', text: 'hola', time: '08:40 PM' },
        { type: 'out', text: 'holaaaa', time: '08:40 PM' }
    ]);
    const [inputBuffer, setInputBuffer] = useState('');
    const terminalRef = useRef(null);
    const telegramRef = useRef(null);

    // Auto-scroll to bottom of terminal
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [terminalLogs]);

    // Auto-scroll Telegram chat
    useEffect(() => {
        if (telegramRef.current) {
            telegramRef.current.scrollTop = telegramRef.current.scrollHeight;
        }
    }, [telegramMessages]);

    const handleVirtualKeypress = (key) => {
        if (!isLogging) return;

        let logMsg = '';
        if (key.length === 1) {
            logMsg = `Alphanumeric key pressed: ${key}`;
            setCapturedKeys(prev => prev + key);
        } else {
            logMsg = `Special key pressed: Key.${key}`;
            if (key === 'space') setCapturedKeys(prev => prev + ' ');
            if (key === 'enter') setCapturedKeys(prev => prev + '\\n');
            if (key === 'backspace') setCapturedKeys(prev => prev.slice(0, -1));
        }

        setTerminalLogs(prev => [...prev, logMsg]);
    };

    const handleInputChange = (e) => {
        if (!isLogging) return;
        
        const val = e.target.value;
        const lastChar = val.slice(-1);
        
        if (val.length > inputBuffer.length) {
            // Typing
            handleVirtualKeypress(lastChar);
        } else {
            // Backspace
            handleVirtualKeypress('backspace');
        }
        
        setInputBuffer(val);
    };

    const handleKeyDown = (e) => {
        if (!isLogging) return;
        
        if (e.key === 'Enter') {
            handleVirtualKeypress('enter');
        } else if (e.key === 'Shift') {
            handleVirtualKeypress('shift');
        } else if (e.key === 'Control') {
            handleVirtualKeypress('ctrl');
        }
    };

    const stopAndSend = () => {
        if (!isLogging) return;
        
        setIsLogging(false);
        setTerminalLogs(prev => [
            ...prev,
            "Special key pressed: Key.esc",
            "Key released: Key.esc",
            "[!] Deteniendo captura y subiendo archivo...",
            "[+] Archivo enviado a Telegram con éxito."
        ]);

        setTimeout(() => {
            setTelegramMessages(prev => [
                ...prev,
                {
                    type: 'in',
                    isFile: true,
                    filename: 'registro_teclas.txt',
                    size: '48.0B',
                    text: 'Reporte de teclas capturadas - Tarea TI',
                    time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                }
            ]);
        }, 800);
    };

    const resetSimulation = () => {
        setIsLogging(false);
        setTerminalLogs([
            "LOGGER ACTIVO (Práctica de Ingeniería)",
            "Escribe algo en el cuadro de texto y presiona 'Enviar a Telegram (ESC)' para finalizar."
        ]);
        setCapturedKeys('');
        setInputBuffer('');
    };

    return (
        <div className="w-full flex flex-col gap-12 font-sans relative">
            
            {/* HUD / Resumen Ejecutivo */}
            <div className="bg-[#050913]/90 border border-blue-500/30 rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />
                <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between relative z-10">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs mb-4">
                            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                            TAREA TI — DESARROLLO DE KEYLOGGER
                        </div>
                        <h2 className="text-3xl font-bold text-gray-100 mb-2">Captura de Teclas & Exfiltración vía Telegram</h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                            Desarrollo de un script en Python utilizando la librería <code>pynput</code> para interceptar y registrar eventos del teclado a nivel de sistema (Keylogger). La herramienta captura de forma silenciosa cada tecla presionada y, al detectar la tecla de escape (ESC), guarda el registro en un archivo de texto y lo exfiltra automáticamente hacia un Bot de Telegram utilizando la Telegram Bot API.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 flex-shrink-0">
                        <div className="bg-[#0a0f1a] border border-blue-500/30 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                            <FaCode className="text-blue-500 text-2xl mb-2" />
                            <span className="text-[10px] text-gray-500 font-mono uppercase">Lenguaje</span>
                            <span className="text-blue-400 font-bold tracking-widest">Python 3</span>
                        </div>
                        <div className="bg-[#0a0f1a] border border-cyan-500/30 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                            <FaTelegramPlane className="text-cyan-500 text-2xl mb-2" />
                            <span className="text-[10px] text-gray-500 font-mono uppercase">Vector Exfiltración</span>
                            <span className="text-cyan-400 font-bold tracking-widest">Bot API</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Code & Theory Section */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Python Code Snippet */}
                <div className="bg-[#0a0f1a] border border-gray-800 rounded-xl overflow-hidden flex flex-col">
                    <div className="bg-[#050913] px-4 py-2 border-b border-gray-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <FaCode className="text-gray-500" />
                            <span className="text-xs font-mono text-gray-400">logger.py</span>
                        </div>
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                        </div>
                    </div>
                    <div className="p-4 overflow-x-auto text-xs font-mono text-gray-300 bg-[#0a0f1a] flex-1">
<pre className="text-blue-400">from <span className="text-white">pynput.keyboard</span> import <span className="text-emerald-400">Key, Listener</span></pre>
<br/>
<pre className="text-purple-400">def <span className="text-blue-300">on_press</span><span className="text-white">(key):</span></pre>
<pre className="text-white">    <span className="text-purple-400">try:</span></pre>
<pre className="text-white">        <span className="text-blue-400">print</span>(<span className="text-orange-300">f'Alphanumeric key pressed: </span><span className="text-orange-400">&#123;</span>key.char<span className="text-orange-400">&#125;</span><span className="text-orange-300">'</span>)</pre>
<pre className="text-white">    <span className="text-purple-400">except</span> <span className="text-emerald-400">AttributeError</span>:</pre>
<pre className="text-white">        <span className="text-blue-400">print</span>(<span className="text-orange-300">f'Special key pressed: </span><span className="text-orange-400">&#123;</span>key<span className="text-orange-400">&#125;</span><span className="text-orange-300">'</span>)</pre>
<br/>
<pre className="text-purple-400">def <span className="text-blue-300">on_release</span><span className="text-white">(key):</span></pre>
<pre className="text-white">    <span className="text-blue-400">print</span>(<span className="text-orange-300">f'Key released: </span><span className="text-orange-400">&#123;</span>key<span className="text-orange-400">&#125;</span><span className="text-orange-300">'</span>)</pre>
<pre className="text-white">    <span className="text-purple-400">if</span> key == <span className="text-emerald-400">Key.esc</span>:</pre>
<pre className="text-gray-500 italic">        # Finaliza el listener y envía a Telegram</pre>
<pre className="text-white">        <span className="text-purple-400">return</span> <span className="text-orange-400">False</span></pre>
<br/>
<pre className="text-purple-400">with <span className="text-emerald-400">Listener</span><span className="text-white">(on_press=on_press, on_release=on_release)</span> as <span className="text-white">listener:</span></pre>
<pre className="text-white">    listener.join()</pre>
                    </div>
                </div>

                {/* Technical Explanation */}
                <div className="bg-[#0a0f1a] border border-gray-800 rounded-xl p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold font-mono text-gray-200 mb-4 flex items-center gap-3">
                        <FaUserSecret className="text-purple-500" />
                        Análisis Técnico
                    </h3>
                    <ul className="space-y-4 text-sm text-gray-400 leading-relaxed">
                        <li className="flex gap-3">
                            <FaShieldAlt className="text-blue-500 mt-1 flex-shrink-0" />
                            <span><strong>Pynput (Hook a nivel de SO):</strong> La librería pynput no depende de tener la ventana activa. Instala un "hook" directamente en la API del sistema operativo (Windows/Linux) para capturar interrupciones físicas del teclado de manera global.</span>
                        </li>
                        <li className="flex gap-3">
                            <FaShieldAlt className="text-blue-500 mt-1 flex-shrink-0" />
                            <span><strong>Manejo de Excepciones:</strong> Las teclas alfanuméricas (letras, números) tienen el atributo <code>.char</code>. Teclas especiales como Shift, Enter o Ctrl lanzan un <code>AttributeError</code>, el cual el código intercepta para registrarlas mediante la clase <code>Key</code>.</span>
                        </li>
                        <li className="flex gap-3">
                            <FaShieldAlt className="text-blue-500 mt-1 flex-shrink-0" />
                            <span><strong>Exfiltración (C&C):</strong> En lugar de guardar el archivo localmente y arriesgar ser descubierto, el script empaqueta el log y realiza una petición HTTP POST a la API oficial de Telegram, enviando el archivo como documento a un Bot privado controlado por el atacante.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Interactive Simulator */}
            <div className="mt-6 border-t border-gray-800 pt-10">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-200 font-mono mb-2">Simulador Interactivo de Exfiltración</h3>
                    <p className="text-gray-400 text-sm">Prueba el comportamiento del Keylogger escribiendo en el campo de texto.</p>
                </div>

                {/* Simulator Container */}
                <div className="flex flex-col lg:flex-row gap-6 bg-black p-4 md:p-6 rounded-2xl border border-gray-800 shadow-2xl">
                    
                    {/* Left Side: Victim Terminal & Keyboard */}
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="flex justify-between items-center bg-gray-900/80 px-4 py-2 rounded-lg border border-gray-700">
                            <span className="font-mono text-xs text-emerald-400 flex items-center gap-2">
                                <FaTerminal /> powershell.exe - logger.py
                            </span>
                            <div className="flex gap-2">
                                {!isLogging ? (
                                    <button 
                                        onClick={() => { setIsLogging(true); setInputBuffer(''); }}
                                        className="text-xs bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded transition-colors font-mono font-bold flex items-center gap-2"
                                    >
                                        <FaPlay /> Iniciar Captura
                                    </button>
                                ) : (
                                    <button 
                                        onClick={stopAndSend}
                                        className="text-xs bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded transition-colors font-mono font-bold"
                                    >
                                        [ESC] Detener y Enviar
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Terminal Output */}
                        <div 
                            ref={terminalRef}
                            className="bg-[#0c0c0c] border border-gray-800 rounded-lg p-4 h-64 overflow-y-auto font-mono text-xs text-gray-300 leading-relaxed shadow-inner"
                        >
                            <span className="text-blue-400">PS C:\Users\Practica\Documents&gt;</span> python logger.py<br/><br/>
                            {terminalLogs.map((log, i) => (
                                <div key={i} className={log.includes('[!]') || log.includes('[+]') ? 'text-emerald-400 font-bold mt-2' : ''}>
                                    {log}
                                </div>
                            ))}
                            {isLogging && (
                                <div className="mt-2 text-emerald-500 animate-pulse">_</div>
                            )}
                        </div>

                        {/* Input Area (To trigger keystrokes) */}
                        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                            <label className="block text-xs font-mono text-gray-400 mb-2">
                                Escribe aquí para simular el teclado de la víctima:
                            </label>
                            <input 
                                type="text" 
                                value={inputBuffer}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                disabled={!isLogging}
                                placeholder={isLogging ? "Escribe algo..." : "Presiona 'Iniciar Captura' primero"}
                                className="w-full bg-black border border-gray-600 rounded px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-emerald-500 disabled:opacity-50"
                            />
                        </div>
                    </div>

                    {/* Right Side: Telegram Bot UI */}
                    <div className="flex-1 max-w-sm mx-auto lg:mx-0 w-full flex flex-col bg-gradient-to-b from-[#0f1b29] to-[#0a111a] border border-gray-700 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                        {/* Telegram Header */}
                        <div className="bg-[#1c2a38] p-3 flex items-center gap-3 border-b border-gray-700 shadow-md">
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                                P
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm">practica12 bot</span>
                                <span className="text-blue-400 text-xs">bot</span>
                            </div>
                        </div>

                        {/* Telegram Chat Area */}
                        <div 
                            ref={telegramRef}
                            className="flex-1 h-80 overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar"
                            style={{ backgroundImage: 'radial-gradient(circle at center, #111a24 0%, #0a111a 100%)' }}
                        >
                            <div className="text-center mb-2">
                                <span className="bg-gray-800/60 text-gray-400 text-[10px] px-2 py-1 rounded-full">Today</span>
                            </div>
                            
                            <AnimatePresence>
                                {telegramMessages.map((msg, i) => (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        key={i} 
                                        className={`max-w-[85%] rounded-2xl p-2.5 relative ${msg.type === 'in' ? 'bg-[#2b5278] text-white self-start rounded-tl-sm' : 'bg-[#182533] text-gray-200 self-end rounded-tr-sm border border-gray-700'}`}
                                    >
                                        {msg.isFile ? (
                                            <div className="flex flex-col min-w-[200px]">
                                                <div className="flex items-center gap-3 mb-2 bg-black/20 p-2 rounded-lg">
                                                    <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center">
                                                        <FaFileAlt className="text-white text-xl" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-sm truncate w-32">{msg.filename}</span>
                                                        <span className="text-xs text-blue-200">{msg.size}</span>
                                                    </div>
                                                </div>
                                                <span className="text-sm">{msg.text}</span>
                                            </div>
                                        ) : (
                                            <span className="text-sm">{msg.text}</span>
                                        )}
                                        <span className="text-[10px] text-gray-400 float-right mt-1 ml-3 relative top-0.5">{msg.time}</span>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Telegram Input Area */}
                        <div className="bg-[#1c2a38] p-3 flex items-center gap-3">
                            <div className="flex-1 bg-[#0f1b29] border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-500">
                                Message...
                            </div>
                            <div className="w-10 h-10 rounded-full bg-[#0f1b29] border border-gray-700 flex items-center justify-center text-gray-400">
                                <FaPaperPlane className="ml-[-2px]" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-center mt-6">
                    <button 
                        onClick={resetSimulation}
                        className="text-xs text-gray-500 hover:text-gray-300 underline font-mono"
                    >
                        [Reiniciar Simulador]
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Act13Keylogger;

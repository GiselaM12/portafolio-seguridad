import React, { useState, useEffect, useRef } from 'react';
import { FaShieldAlt, FaKey, FaLock, FaGlobe, FaEnvelopeOpen, FaExclamationTriangle, FaCheckCircle, FaTimesCircle, FaInfoCircle, FaCheck, FaTimes, FaShareAlt, FaUserLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const PrivacySecuritySimulator = () => {
    const [activeTab, setActiveTab] = useState('password'); // password, exposure, phishing
    
    // --- PASSWORD STRENGTH METER STATE ---
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordMetrics, setPasswordMetrics] = useState({
        score: 0, // 0 to 4
        entropy: 0,
        crackTime: 'Instantáneo',
        checks: {
            length: false,
            upper: false,
            lower: false,
            number: false,
            symbol: false
        },
        feedback: 'Escribe una contraseña para comenzar.'
    });

    // --- EXPOSURE CALCULATOR STATE ---
    const [habits, setHabits] = useState([
        { id: 1, label: 'Publico fotos de mis viajes o salidas en tiempo real (con ubicación exacta).', points: 20, checked: false },
        { id: 2, label: 'Uso la misma contraseña (o variaciones muy simples) en múltiples sitios web.', points: 25, checked: false },
        { id: 3, label: 'Comparto fotos de mis pases de abordar, boletos de eventos o documentos de identidad en redes.', points: 20, checked: false },
        { id: 4, label: 'Mis perfiles de redes sociales son completamente públicos (cualquiera puede verlos).', points: 15, checked: false },
        { id: 5, label: 'Uso respuestas reales y obvias para mis preguntas de seguridad (nombre de mascota, escuela, etc.).', points: 10, checked: false },
        { id: 6, label: 'Respondo cuestionarios o retos virales divertidos en Facebook que indagan sobre mi pasado o gustos.', points: 10, checked: false }
    ]);
    const [exposureScore, setExposureScore] = useState(0);
    const [exposureLevel, setExposureLevel] = useState({
        level: 'SEGURO',
        color: 'text-green-400 border-green-500/30 bg-green-500/5',
        barColor: 'bg-green-500',
        advice: '¡Excelente higiene digital! Tus hábitos son robustos frente a la recolección de datos y la ingeniería social.'
    });

    // --- PHISHING SPOTTER STATE ---
    const [revealedFlags, setRevealedFlags] = useState([]);
    const [showPhishingFeedback, setShowPhishingFeedback] = useState(false);
    const phishingFlags = [
        {
            id: 'sender',
            title: 'Remitente Sospechoso',
            description: 'El correo dice provenir de Netflix, pero la dirección real es "support-billing-netflix@gmail-update.securesrv.com". Las marcas de confianza siempre usan dominios oficiales (@netflix.com) y nunca correos gratuitos o subdominios extraños.',
            coords: 'top-12 left-2 md:left-4 w-48 h-8'
        },
        {
            id: 'greeting',
            title: 'Saludo Despersonalizado',
            description: 'El mensaje empieza con "Estimado cliente". Los servicios a los que estás suscrito conocen tu nombre real y lo utilizan en sus comunicaciones oficiales de facturación.',
            coords: 'top-28 left-2 md:left-4 w-36 h-6'
        },
        {
            id: 'urgency',
            title: 'Urgencia Artificial',
            description: 'Usa una amenaza: "Su cuenta será suspendida en 24 horas si no actualiza su pago". El pánico y la prisa reducen el pensamiento analítico y forzan a las víctimas a hacer clic rápido.',
            coords: 'top-36 left-2 md:left-4 w-11/12 h-10'
        },
        {
            id: 'link',
            title: 'Enlace Engañoso (Homograph Attack)',
            description: 'Al inspeccionar el botón "Actualizar Pago", el destino web es "http://netfllix-billing-update-port.secure.xyz/login" (tiene dos "l" en netfllix). Esto clona la estética real de inicio de sesión para robar tus credenciales.',
            coords: 'bottom-20 left-[20%] md:left-[35%] w-44 h-10'
        }
    ];

    // --- PASSWORD STRENGTH LOGIC ---
    useEffect(() => {
        if (!password) {
            setPasswordMetrics({
                score: 0,
                entropy: 0,
                crackTime: 'Instantáneo',
                checks: { length: false, upper: false, lower: false, number: false, symbol: false },
                feedback: 'Escribe una contraseña para comenzar.'
            });
            return;
        }

        const checks = {
            length: password.length >= 10,
            upper: /[A-Z]/.test(password),
            lower: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            symbol: /[^A-Za-z0-9]/.test(password)
        };

        let poolSize = 0;
        if (checks.lower) poolSize += 26;
        if (checks.upper) poolSize += 26;
        if (checks.number) poolSize += 10;
        if (checks.symbol) poolSize += 33;
        if (poolSize === 0) poolSize = 1;

        const entropy = Math.round(password.length * Math.log2(poolSize));
        
        let score = 0;
        if (checks.length) score++;
        const complexityCount = [checks.upper, checks.lower, checks.number, checks.symbol].filter(Boolean).length;
        if (complexityCount >= 2) score++;
        if (complexityCount >= 3) score++;
        if (complexityCount === 4 && password.length >= 12) score++;

        let crackTime = 'Instantáneo';
        if (entropy > 0) {
            const guessesPerSecond = 1e9; // 1 Billion guesses per second (standard offline attack)
            const combinations = Math.pow(poolSize, password.length);
            const secondsToCrack = combinations / (2 * guessesPerSecond);
            
            if (secondsToCrack < 1) {
                crackTime = 'Instantáneo (Milisegundos)';
            } else if (secondsToCrack < 60) {
                crackTime = `${Math.round(secondsToCrack)} segundos`;
            } else if (secondsToCrack < 3600) {
                crackTime = `${Math.round(secondsToCrack / 60)} minutos`;
            } else if (secondsToCrack < 86400) {
                crackTime = `${Math.round(secondsToCrack / 3600)} horas`;
            } else if (secondsToCrack < 31536000) {
                crackTime = `${Math.round(secondsToCrack / 86400)} días`;
            } else if (secondsToCrack < 31536000000) {
                crackTime = `${Math.round(secondsToCrack / 31536000)} años`;
            } else {
                crackTime = `${(secondsToCrack / 31536000).toExponential(1)} años`;
            }
        }

        let feedback = '';
        if (score <= 1) {
            feedback = 'Contraseña Crítica. Es sumamente vulnerable a ataques de fuerza bruta o diccionarios. ¡Cámbiala!';
        } else if (score === 2) {
            feedback = 'Seguridad Baja. Intenta agregar números, mayúsculas o símbolos especiales para aumentar su complejidad.';
        } else if (score === 3) {
            feedback = 'Seguridad Aceptable. Considera hacerla un poco más larga (12+ caracteres) para una protección robusta.';
        } else {
            feedback = '¡Excelente Contraseña! Cumple con la longitud y variedad de caracteres requeridas por el Escudo de Seguridad.';
        }

        setPasswordMetrics({ score, entropy, crackTime, checks, feedback });
    }, [password]);

    // --- EXPOSURE LOGIC ---
    const handleToggleHabit = (id) => {
        setHabits(prev => prev.map(h => h.id === id ? { ...h, checked: !h.checked } : h));
    };

    useEffect(() => {
        const score = habits.reduce((acc, h) => acc + (h.checked ? h.points : 0), 0);
        setExposureScore(score);

        let level = 'SEGURO';
        let color = 'text-green-400 border-green-500/30 bg-green-500/5';
        let barColor = 'bg-green-500';
        let advice = '¡Excelente higiene digital! Tus hábitos son robustos frente a la recolección de datos y la ingeniería social.';

        if (score >= 60) {
            level = 'RIESGO CRÍTICO';
            color = 'text-red-500 border-red-500/30 bg-red-500/5 animate-pulse';
            barColor = 'bg-red-600 shadow-[0_0_10px_#ef4444]';
            advice = '¡ALERTA MÁXIMA! Estás exponiendo demasiados datos sensibles y usando contraseñas inseguras. Eres un blanco fácil para el robo de identidad y el phishing focalizado.';
        } else if (score >= 30) {
            level = 'RIESGO MODERADO';
            color = 'text-yellow-500 border-yellow-500/30 bg-yellow-500/5';
            barColor = 'bg-yellow-500';
            advice = 'Postura reactiva. Compartes detalles que facilitan tu perfilado (Oversharing) o tienes debilidades en contraseñas. Revisa tus configuraciones de privacidad.';
        } else if (score > 0) {
            level = 'PREVENIDO';
            color = 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5';
            barColor = 'bg-cyan-500';
            advice = 'Higiene digital aceptable, aunque tienes algunos hábitos que podrías ajustar para una postura completamente blindada.';
        }

        setExposureLevel({ level, color, barColor, advice });
    }, [habits]);

    // --- PHISHING LOGIC ---
    const handleToggleFlag = (id) => {
        if (revealedFlags.includes(id)) {
            setRevealedFlags(prev => prev.filter(f => f !== id));
        } else {
            setRevealedFlags(prev => [...prev, id]);
        }
    };

    const allFlagsFound = revealedFlags.length === phishingFlags.length;

    return (
        <div className="bg-[#070b14]/90 border border-blue-500/20 rounded-3xl overflow-hidden shadow-2xl relative font-sans text-gray-200">
            {/* Console HUD Header */}
            <div className="bg-[#081222]/90 border-b border-blue-500/10 px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)] animate-pulse">
                        <FaShieldAlt />
                    </span>
                    <div>
                        <h4 className="text-white font-mono text-xs font-bold tracking-widest uppercase">
                            PRIVACY_SHIELD_LAB_v1.0.0
                        </h4>
                        <p className="text-[10px] text-blue-400/80 font-mono tracking-wider flex items-center gap-1.5 mt-0.5">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                            INTERACTIVE AWARENESS SYSTEM
                        </p>
                    </div>
                </div>

                {/* Tab Switcher */}
                <div className="flex bg-black/40 border border-gray-800 p-1 rounded-lg self-center overflow-x-auto scrollbar-none max-w-full font-mono text-[10px]">
                    <button
                        onClick={() => setActiveTab('password')}
                        className={`px-4 py-2 rounded transition-all whitespace-nowrap ${
                            activeTab === 'password'
                            ? 'bg-blue-500/15 text-blue-400 border border-blue-500/20 font-bold'
                            : 'text-gray-500 hover:text-gray-300'
                        }`}
                    >
                        <FaKey className="inline mr-1" /> PASSWORD_STRENGTH
                    </button>
                    <button
                        onClick={() => setActiveTab('exposure')}
                        className={`px-4 py-2 rounded transition-all whitespace-nowrap ${
                            activeTab === 'exposure'
                            ? 'bg-blue-500/15 text-blue-400 border border-blue-500/20 font-bold'
                            : 'text-gray-500 hover:text-gray-300'
                        }`}
                    >
                        <FaShareAlt className="inline mr-1" /> OVERSHARING_RISK
                    </button>
                    <button
                        onClick={() => setActiveTab('phishing')}
                        className={`px-4 py-2 rounded transition-all whitespace-nowrap ${
                            activeTab === 'phishing'
                            ? 'bg-blue-500/15 text-blue-400 border border-blue-500/20 font-bold'
                            : 'text-gray-500 hover:text-gray-300'
                        }`}
                    >
                        <FaEnvelopeOpen className="inline mr-1" /> PHISHING_SPOTTER
                    </button>
                </div>
            </div>

            <div className="p-6 md:p-8 bg-[#03060c]">
                
                {/* 1. PASSWORD TAB */}
                {activeTab === 'password' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Control panel */}
                        <div className="space-y-6 bg-[#070d18] border border-blue-500/10 p-6 rounded-2xl">
                            <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider border-b border-blue-500/10 pb-2">
                                <FaLock />
                                <span>Verificador de Contraseñas</span>
                            </div>

                            <p className="text-gray-400 text-xs leading-relaxed">
                                Ingresa una contraseña para evaluar su fortaleza basada en longitud, complejidad y entropía digital. La escala emula el comportamiento de sistemas de desencriptación reales.
                            </p>

                            <div className="space-y-2">
                                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block font-bold">Input de Contraseña</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Escribe tu contraseña..."
                                        className="w-full bg-black/60 border border-gray-800 focus:border-blue-500/40 rounded-xl px-4 py-3 text-sm text-white focus:outline-none font-mono tracking-wider"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </div>

                            {/* Checklist */}
                            <div className="space-y-2 font-mono text-xs border-t border-gray-900 pt-4">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold mb-2">Requisitos de Seguridad</span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded border ${passwordMetrics.checks.length ? 'border-green-500/20 text-green-400 bg-green-500/5' : 'border-gray-900 text-gray-500'}`}>
                                        {passwordMetrics.checks.length ? <FaCheck /> : <FaTimes />}
                                        <span>Longitud &ge; 10 carac.</span>
                                    </div>
                                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded border ${passwordMetrics.checks.upper ? 'border-green-500/20 text-green-400 bg-green-500/5' : 'border-gray-900 text-gray-500'}`}>
                                        {passwordMetrics.checks.upper ? <FaCheck /> : <FaTimes />}
                                        <span>Mayúsculas (A-Z)</span>
                                    </div>
                                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded border ${passwordMetrics.checks.lower ? 'border-green-500/20 text-green-400 bg-green-500/5' : 'border-gray-900 text-gray-500'}`}>
                                        {passwordMetrics.checks.lower ? <FaCheck /> : <FaTimes />}
                                        <span>Minúsculas (a-z)</span>
                                    </div>
                                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded border ${passwordMetrics.checks.number ? 'border-green-500/20 text-green-400 bg-green-500/5' : 'border-gray-900 text-gray-500'}`}>
                                        {passwordMetrics.checks.number ? <FaCheck /> : <FaTimes />}
                                        <span>Números (0-9)</span>
                                    </div>
                                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded border ${passwordMetrics.checks.symbol ? 'border-green-500/20 text-green-400 bg-green-500/5' : 'border-gray-900 text-gray-500'}`}>
                                        {passwordMetrics.checks.symbol ? <FaCheck /> : <FaTimes />}
                                        <span>Símbolos (#, $, @, etc.)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Metrics panel */}
                        <div className="space-y-6 bg-[#070d18] border border-blue-500/10 p-6 rounded-2xl h-full flex flex-col justify-between">
                            <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider border-b border-blue-500/10 pb-2">
                                <FaInfoCircle />
                                <span>Análisis de Fuerza y Entropía</span>
                            </div>

                            <div className="space-y-6 flex-grow flex flex-col justify-center">
                                {/* Score Indicator */}
                                <div>
                                    <div className="flex justify-between items-center text-xs font-mono mb-2">
                                        <span className="text-gray-500 uppercase tracking-widest text-[9px]">Fortaleza</span>
                                        <span className={`font-bold uppercase ${
                                            passwordMetrics.score >= 4 ? 'text-green-400' :
                                            passwordMetrics.score === 3 ? 'text-cyan-400' :
                                            passwordMetrics.score === 2 ? 'text-yellow-500' : 'text-red-500'
                                        }`}>
                                            {passwordMetrics.score >= 4 ? 'Excelente (Críptica)' :
                                             passwordMetrics.score === 3 ? 'Segura' :
                                             passwordMetrics.score === 2 ? 'Media' : 'Crítica / Débil'}
                                        </span>
                                    </div>
                                    {/* Progress bar */}
                                    <div className="w-full h-3 bg-black/60 border border-gray-900 rounded-full overflow-hidden flex gap-0.5 p-0.5">
                                        {[1, 2, 3, 4].map((step) => (
                                            <div
                                                key={step}
                                                className={`h-full flex-grow rounded-sm transition-all duration-500 ${
                                                    passwordMetrics.score >= step
                                                        ? passwordMetrics.score >= 4 ? 'bg-green-500'
                                                          : passwordMetrics.score === 3 ? 'bg-cyan-500'
                                                          : passwordMetrics.score === 2 ? 'bg-yellow-500'
                                                          : 'bg-red-500'
                                                        : 'bg-transparent'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Dynamic calculations */}
                                <div className="grid grid-cols-2 gap-4 font-mono text-xs border-y border-gray-900 py-4">
                                    <div>
                                        <span className="text-[9px] text-gray-500 block uppercase">Entropía Digital</span>
                                        <span className="text-base text-white font-bold">{passwordMetrics.entropy} bits</span>
                                        <p className="text-[9px] text-gray-500 italic mt-0.5">Fuerza combinatoria</p>
                                    </div>
                                    <div>
                                        <span className="text-[9px] text-gray-500 block uppercase">Tiempo para Descifrar</span>
                                        <span className="text-base text-white font-bold block truncate" title={passwordMetrics.crackTime}>
                                            {passwordMetrics.crackTime}
                                        </span>
                                        <p className="text-[9px] text-gray-500 italic mt-0.5">Est. offline fuerza bruta</p>
                                    </div>
                                </div>

                                {/* Advice block */}
                                <div className={`p-4 rounded-xl border text-xs leading-relaxed ${
                                    passwordMetrics.score >= 3 ? 'border-green-500/20 text-green-400 bg-green-500/5' :
                                    passwordMetrics.score === 2 ? 'border-yellow-500/20 text-yellow-500 bg-yellow-500/5' :
                                    passwordMetrics.score === 1 || password ? 'border-red-500/20 text-red-500 bg-red-500/5 animate-pulse' :
                                    'border-gray-900 text-gray-500 bg-transparent'
                                }`}>
                                    {passwordMetrics.feedback}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 2. EXPOSURE TAB */}
                {activeTab === 'exposure' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Questionnaire */}
                        <div className="space-y-6 bg-[#070d18] border border-blue-500/10 p-6 rounded-2xl">
                            <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider border-b border-blue-500/10 pb-2">
                                <FaShareAlt />
                                <span>Calculadora de Hábitos Digitales</span>
                            </div>

                            <p className="text-gray-400 text-xs leading-relaxed">
                                Selecciona los hábitos que realizas comúnmente en internet. El sistema evaluará el porcentaje de vulnerabilidad o exposición de tus datos personales frente a cibercriminales.
                            </p>

                            <div className="space-y-3">
                                {habits.map((habit) => (
                                    <button
                                        key={habit.id}
                                        onClick={() => handleToggleHabit(habit.id)}
                                        className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex items-start gap-3 hover:bg-white/5 ${
                                            habit.checked
                                                ? 'border-blue-500/30 bg-blue-500/5 text-white'
                                                : 'border-gray-900 bg-black/20 text-gray-400'
                                        }`}
                                    >
                                        <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                            habit.checked ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-700 bg-black'
                                        }`}>
                                            {habit.checked && <FaCheck className="text-[10px]" />}
                                        </div>
                                        <span className="text-xs leading-snug">{habit.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Result Display */}
                        <div className="space-y-6 bg-[#070d18] border border-blue-500/10 p-6 rounded-2xl h-full flex flex-col justify-between">
                            <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider border-b border-blue-500/10 pb-2">
                                <FaUserLock />
                                <span>Indicador de Exposición Digital</span>
                            </div>

                            <div className="space-y-6 flex-grow flex flex-col justify-center items-center text-center">
                                {/* Risk meter */}
                                <div className="relative w-40 h-40 flex flex-col justify-center items-center rounded-full border-4 border-gray-900 bg-black/40 shadow-inner">
                                    {/* Radial progress simulator */}
                                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin opacity-20" />
                                    
                                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Exposición</span>
                                    <span className="text-4xl font-black text-white my-1">{exposureScore}%</span>
                                    <span className="text-[9px] font-mono text-gray-500">Puntaje de Riesgo</span>
                                </div>

                                <div className="w-full space-y-4">
                                    <div>
                                        <span className="text-[10px] font-mono text-gray-500 block uppercase mb-1">Diagnóstico de Privacidad</span>
                                        <div className={`px-4 py-2 border rounded-lg font-mono text-xs font-bold tracking-widest ${exposureLevel.color}`}>
                                            {exposureLevel.level}
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-xs leading-relaxed max-w-sm mx-auto">
                                        {exposureLevel.advice}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. PHISHING TAB */}
                {activeTab === 'phishing' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Interactive Email Client Card */}
                        <div className="space-y-4">
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block font-bold">// CASO DE SIMULACIÓN: Correo sospechoso recibido</span>
                            
                            <div className="bg-[#0c1221] border border-gray-800 rounded-2xl overflow-hidden shadow-xl font-sans text-xs relative select-none">
                                {/* Email Top Ribbon */}
                                <div className="bg-[#121c33] border-b border-gray-800 px-4 py-3 flex justify-between items-center text-[10px] font-mono text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                        <span>Bandeja de Entrada (1)</span>
                                    </div>
                                    <span>24 de Mayo, 11:15 AM</span>
                                </div>

                                {/* Email Info Headers */}
                                <div className="px-4 py-3 border-b border-gray-800 space-y-1.5 bg-[#0e172a]">
                                    <p><span className="text-gray-500">De:</span> <span className="text-red-400 font-semibold font-mono">Netflix Billing &lt;support-billing-netflix@gmail-update.securesrv.com&gt;</span></p>
                                    <p><span className="text-gray-500">Para:</span> <span className="text-gray-300 font-mono">user_inbox@upslp.mx</span></p>
                                    <p><span className="text-gray-500">Asunto:</span> <span className="text-white font-bold">ALERTA: Actualización de facturación requerida - Cuenta Suspendida</span></p>
                                </div>

                                {/* Email Content Area */}
                                <div className="p-6 bg-white text-gray-800 space-y-6 relative min-h-[300px]">
                                    {/* Transparent Hotspots overlay */}
                                    <div className="absolute inset-0 z-20 pointer-events-auto">
                                        {phishingFlags.map((flag) => (
                                            <button
                                                key={flag.id}
                                                onClick={() => handleToggleFlag(flag.id)}
                                                title={`Analizar: ${flag.title}`}
                                                className={`absolute cursor-pointer border-2 border-dashed transition-all duration-300 flex items-center justify-center rounded ${
                                                    revealedFlags.includes(flag.id)
                                                        ? 'border-red-500 bg-red-500/10'
                                                        : 'border-blue-500/20 hover:border-blue-500 bg-blue-500/5 hover:bg-blue-500/10'
                                                } ${flag.coords}`}
                                            >
                                                <span className={`text-[9px] font-mono font-bold ${
                                                    revealedFlags.includes(flag.id) ? 'text-red-600' : 'text-blue-600'
                                                }`}>
                                                    {revealedFlags.includes(flag.id) ? 'DETECTADO' : '?'}
                                                </span>
                                            </button>
                                        ))}
                                    </div>

                                    {/* Visual Fake Netflix Logo */}
                                    <div className="text-red-600 text-2xl font-bold font-mono tracking-widest border-b pb-3">
                                        NETFLIX
                                    </div>

                                    <div className="space-y-4 text-xs font-sans">
                                        <p className="font-bold">Estimado cliente,</p>
                                        <p className="leading-relaxed text-gray-600">
                                            Lamentamos informarle que no hemos podido procesar su pago mensual automático. Como consecuencia, <span className="font-bold text-black border-b border-dashed border-red-500">su suscripción activa al servicio de streaming será suspendida de forma permanente en las próximas 24 horas</span>.
                                        </p>
                                        <p className="leading-relaxed text-gray-600">
                                            Para evitar interrupciones en el servicio y cargos adicionales de reconexión, por favor actualice su método de pago inmediatamente haciendo clic en el siguiente enlace:
                                        </p>
                                        
                                        <div className="text-center py-4">
                                            <span className="inline-block px-6 py-3 bg-red-600 text-white rounded-md font-bold text-xs shadow-md">
                                                Actualizar Pago
                                            </span>
                                        </div>

                                        <p className="text-[10px] text-gray-400 italic">
                                            *Si ya realizó este proceso, por favor ignore este mensaje. Las suspensiones automáticas son definitivas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Analysis Panel */}
                        <div className="space-y-6 bg-[#070d18] border border-blue-500/10 p-6 rounded-2xl h-full flex flex-col justify-between min-h-[420px]">
                            <div className="flex items-center justify-between border-b border-blue-500/10 pb-2">
                                <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider">
                                    <FaExclamationTriangle />
                                    <span>Auditoría Anti-Phishing</span>
                                </div>
                                <span className="text-[10px] font-mono text-gray-500">
                                    Encontrados: {revealedFlags.length} / {phishingFlags.length}
                                </span>
                            </div>

                            <div className="flex-grow flex flex-col justify-center space-y-4">
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Haz clic sobre los botones con signo de interrogación <strong className="text-blue-400">?</strong> en el correo para analizar posibles amenazas de ingeniería social.
                                </p>

                                {/* List of discovered alerts */}
                                <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                                    {phishingFlags.map((flag) => {
                                        const isFound = revealedFlags.includes(flag.id);
                                        return (
                                            <div
                                                key={flag.id}
                                                className={`p-3 rounded-xl border text-xs transition-all duration-500 ${
                                                    isFound
                                                        ? 'border-red-500/20 bg-red-500/5 text-gray-200'
                                                        : 'border-gray-900 bg-transparent text-gray-500 opacity-60'
                                                }`}
                                            >
                                                <div className="flex items-center gap-2 font-bold mb-1 font-mono text-[10px] uppercase">
                                                    {isFound ? <FaTimesCircle className="text-red-500" /> : <FaInfoCircle />}
                                                    <span>{flag.title}</span>
                                                </div>
                                                {isFound && (
                                                    <p className="text-gray-400 leading-relaxed text-[11px] mt-1 pl-4 border-l border-red-500/30">
                                                        {flag.description}
                                                    </p>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Status banner */}
                                {allFlagsFound ? (
                                    <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 font-mono text-[10px] tracking-wider text-center animate-pulse flex items-center justify-center gap-2">
                                        <FaCheckCircle />
                                        <span>¡EXCELENTE! HAS IDENTIFICADO TODAS LAS AMENAZAS EN EL CORREO</span>
                                    </div>
                                ) : (
                                    <div className="p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl text-blue-400/80 font-mono text-[10px] tracking-wider text-center flex items-center justify-center gap-2">
                                        <FaInfoCircle />
                                        <span>FALTAN AMENAZAS POR DETECTAR EN EL CORREO</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default PrivacySecuritySimulator;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShieldAlt, FaExclamationTriangle, FaCheckCircle, FaTimesCircle, FaEnvelope, FaSms, FaUsb, FaUsers, FaLock, FaUserShield, FaChartLine } from 'react-icons/fa';
import { quizData } from '../data/quizData';

const PhishingQuiz = () => {
    const [gameState, setGameState] = useState('intro'); // intro, questions, results, ranking
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showFeedback, setShowFeedback] = useState(false);
    const [lastSelected, setLastSelected] = useState(null);
    const [username, setUsername] = useState('');
    const [leaderboard, setLeaderboard] = useState([]);
    const [sessionQuestions, setSessionQuestions] = useState([]);

    // Load leaderboard on mount
    useEffect(() => {
        const savedRanking = localStorage.getItem('phishing_leaderboard');
        if (savedRanking) {
            setLeaderboard(JSON.parse(savedRanking));
        }
    }, []);

    const shuffleArray = (array) => {
        const newArr = [...array];
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
    };

    const handleStart = () => {
        if (!username.trim()) {
            alert("Por favor, ingresa un alias o nombre para continuar.");
            return;
        }

        // Seleccionar 10 preguntas aleatorias de la base de datos
        const shuffledPool = shuffleArray(quizData);
        const selected = shuffledPool.slice(0, 10).map(q => ({
            ...q,
            options: q.options ? shuffleArray(q.options) : q.options
        }));

        setSessionQuestions(selected);
        setGameState('questions');
    };

    const handleAnswer = (option) => {
        const correct = option.isCorrect;
        if (correct) setScore(prev => prev + 1);

        setAnswers([...answers, {
            question: currentQuestion,
            correct,
            selected: option.text || (option.isCorrect ? "ES PHISHING" : "ES LEGÍTIMO"),
            title: sessionQuestions[currentQuestion].title,
            vector: sessionQuestions[currentQuestion].vector,
            feedback: sessionQuestions[currentQuestion].feedback
        }]);
        setLastSelected(option.isCorrect);
        setShowFeedback(true);
    };

    const nextQuestion = () => {
        setShowFeedback(false);
        if (currentQuestion < sessionQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            saveResult();
            setGameState('results');
        }
    };

    const saveResult = () => {
        const newEntry = {
            name: username,
            score: score + (lastSelected ? 1 : 0),
            date: new Date().toLocaleDateString(),
            id: Date.now()
        };
        const updatedRanking = [...leaderboard, newEntry]
            .sort((a, b) => b.score - a.score)
            .slice(0, 10); // Keep top 10

        setLeaderboard(updatedRanking);
        localStorage.setItem('phishing_leaderboard', JSON.stringify(updatedRanking));
    };

    const resetQuiz = () => {
        setGameState('intro');
        setCurrentQuestion(0);
        setScore(0);
        setAnswers([]);
        setShowFeedback(false);
        setUsername('');
    };

    const getIconForVector = (vector) => {
        const v = vector.toLowerCase();
        if (v.includes('email')) return <FaEnvelope className="text-blue-400" />;
        if (v.includes('sms')) return <FaSms className="text-green-400" />;
        if (v.includes('físico') || v.includes('fisico')) return <FaUsb className="text-red-400" />;
        if (v.includes('teams') || v.includes('redes')) return <FaUsers className="text-purple-400" />;
        return <FaShieldAlt />;
    };

    return (
        <div className="w-full max-w-4xl mx-auto my-12 font-mono">
            <AnimatePresence mode="wait">
                {gameState === 'intro' && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="bg-black/40 border border-amber-500/30 rounded-xl p-8 md:p-12 text-center shadow-[0_0_30px_rgba(245,158,11,0.1)]"
                    >
                        <div className="mb-6 flex justify-center">
                            <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/50 animate-pulse">
                                <FaShieldAlt className="text-4xl text-amber-500" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-black text-amber-400 mb-4 tracking-tighter uppercase">Simulador de Resiliencia Humana</h2>

                        <div className="max-w-md mx-auto mb-8">
                            <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold">Ingresa tu Alias de Agente:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="E.g. AGENT_ZERO"
                                className="w-full bg-black/60 border border-amber-500/30 rounded px-4 py-3 text-amber-400 focus:outline-none focus:border-amber-500 transition-colors text-center font-bold tracking-widest"
                                maxLength={15}
                            />
                        </div>

                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed text-sm">
                            Eval&uacute;a tu capacidad de detecci&oacute;n ante ataques de ingenier&iacute;a social.
                            Participa en 10 escenarios reales y mide tu **Score de Resiliencia**.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
                            <div className="p-4 bg-white/5 border border-white/10 rounded">
                                <h4 className="text-xs text-amber-400 font-bold mb-1 uppercase tracking-widest">IA Generativa</h4>
                                <p className="text-[10px] text-gray-500">Escenarios adaptados a amenazas de 2026.</p>
                            </div>
                            <div className="p-4 bg-white/5 border border-white/10 rounded">
                                <h4 className="text-xs text-amber-400 font-bold mb-1 uppercase tracking-widest">Ranking Global</h4>
                                <p className="text-[10px] text-gray-500">Compara tu nivel de alerta con otros analistas.</p>
                            </div>
                            <div className="p-4 bg-white/5 border border-white/10 rounded">
                                <h4 className="text-xs text-amber-400 font-bold mb-1 uppercase tracking-widest">No Punitivo</h4>
                                <p className="text-[10px] text-gray-500">Dise&ntilde;o &eacute;tico enfocado en el aprendizaje.</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={handleStart}
                                className="bg-amber-600 hover:bg-amber-500 text-black font-black py-4 px-12 rounded transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] uppercase tracking-widest text-sm"
                            >
                                INICIAR EVALUACIÓN
                            </button>
                            <button
                                onClick={() => setGameState('ranking')}
                                className="bg-transparent border border-gray-700 text-gray-400 hover:text-white hover:border-white py-4 px-8 rounded transition-all uppercase tracking-widest text-sm"
                            >
                                VER RANKING
                            </button>
                        </div>
                    </motion.div>
                )}

                {gameState === 'ranking' && (
                    <motion.div
                        key="ranking"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-black/80 border border-gray-800 rounded-xl p-8 shadow-2xl"
                    >
                        <h2 className="text-2xl font-black text-amber-500 mb-8 flex items-center gap-3">
                            <FaChartLine /> RANKING DE RESILIENCIA (TOP 10)
                        </h2>

                        <div className="overflow-hidden border border-gray-800 rounded-lg mb-8">
                            <table className="w-full text-left">
                                <thead className="bg-white/5 uppercase text-[10px] text-gray-500 tracking-widest">
                                    <tr>
                                        <th className="p-4">POS</th>
                                        <th className="p-4">AGENTE (ALIAS)</th>
                                        <th className="p-4 text-center">SCORE</th>
                                        <th className="p-4 text-right">FECHA</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800 text-sm">
                                    {leaderboard.length > 0 ? leaderboard.map((entry, index) => (
                                        <tr key={entry.id} className={entry.name === username ? "bg-amber-500/10 text-amber-400" : "text-gray-400"}>
                                            <td className="p-4 font-bold text-amber-600">{index + 1}</td>
                                            <td className="p-4 font-bold uppercase tracking-wider">{entry.name}</td>
                                            <td className="p-4 text-center font-black">{entry.score}/10</td>
                                            <td className="p-4 text-right text-[10px] text-gray-600">{entry.date}</td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="4" className="p-12 text-center text-gray-600 italic">No hay registros en la base de datos local.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <button
                            onClick={() => setGameState('intro')}
                            className="w-full bg-transparent border border-gray-700 text-gray-500 hover:text-white hover:border-gray-500 py-4 rounded transition-all uppercase tracking-widest text-sm"
                        >
                            VOLVER
                        </button>
                    </motion.div>
                )}

                {gameState === 'questions' && (
                    <motion.div
                        key="question"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="bg-[#0a0a0a] border border-gray-800 rounded-xl overflow-hidden shadow-2xl"
                    >
                        <div className="h-1 bg-gray-900 w-full">
                            <motion.div
                                className="h-full bg-amber-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${((currentQuestion + 1) / (sessionQuestions.length || 10)) * 100}%` }}
                            />
                        </div>

                        <div className="p-4 bg-[#111] border-b border-gray-800 flex justify-between items-center">
                            <span className="text-[10px] text-gray-500 tracking-widest uppercase font-bold">ESCENARIO {currentQuestion + 1} / {sessionQuestions.length}</span>
                            <span className="text-amber-500 text-[10px] font-bold uppercase tracking-widest">{sessionQuestions[currentQuestion].trigger}</span>
                        </div>

                        <div className="p-6 md:p-10">
                            <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg overflow-hidden mb-8 shadow-inner">
                                <div className="bg-gray-800/50 p-3 flex items-center gap-3 border-b border-gray-700">
                                    <div className="p-2 bg-black/40 rounded">
                                        {getIconForVector(sessionQuestions[currentQuestion].vector)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-[10px] text-gray-500 uppercase font-bold">Remitente:</div>
                                        <div className="text-xs text-gray-300 font-bold">{sessionQuestions[currentQuestion].sender}</div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    {sessionQuestions[currentQuestion].subject && (
                                        <div className="mb-4">
                                            <div className="text-[10px] text-gray-500 uppercase font-bold mb-1">Asunto:</div>
                                            <div className="text-sm text-amber-100 font-bold uppercase tracking-tight">{sessionQuestions[currentQuestion].subject}</div>
                                        </div>
                                    )}
                                    <div className="text-sm text-gray-400 leading-relaxed mb-8">
                                        {sessionQuestions[currentQuestion].content}
                                    </div>

                                    {sessionQuestions[currentQuestion].buttonText && (
                                        <div className="flex justify-center mb-6">
                                            <div className="bg-blue-600/80 px-6 py-2 rounded text-xs text-white font-bold cursor-default">
                                                {sessionQuestions[currentQuestion].buttonText}
                                            </div>
                                        </div>
                                    )}

                                    {sessionQuestions[currentQuestion].attachment && (
                                        <div className="flex items-center gap-2 p-3 bg-black/20 border border-gray-700 rounded w-fit mx-auto">
                                            <FaLock className="text-gray-600 text-xs" />
                                            <span className="text-[10px] text-gray-400 font-bold">{sessionQuestions[currentQuestion].attachment}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Options */}
                            {!showFeedback ? (
                                <div className="grid grid-cols-1 gap-3">
                                    {sessionQuestions[currentQuestion].options ? (
                                        sessionQuestions[currentQuestion].options.map((option) => (
                                            <button
                                                key={option.id}
                                                onClick={() => handleAnswer(option)}
                                                className="group relative p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-amber-500/10 hover:border-amber-500/50 transition-all text-left flex items-center justify-between"
                                            >
                                                <span className="text-sm font-medium text-gray-300 group-hover:text-amber-400 transition-colors">
                                                    {option.text}
                                                </span>
                                                <div className="w-5 h-5 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-amber-500">
                                                    <div className="w-2 h-2 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                </div>
                                            </button>
                                        ))
                                    ) : (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <button
                                                onClick={() => handleAnswer({ isCorrect: sessionQuestions[currentQuestion].isPhishing, text: "ES PHISHING" })}
                                                className="group relative p-4 bg-red-900/10 border border-red-500/30 rounded-lg hover:bg-red-900/20 hover:border-red-500 transition-all text-center"
                                            >
                                                <FaExclamationTriangle className="mx-auto mb-2 text-red-500" />
                                                <span className="text-sm font-bold text-red-400 uppercase tracking-widest">ES PHISHING</span>
                                            </button>
                                            <button
                                                onClick={() => handleAnswer({ isCorrect: !sessionQuestions[currentQuestion].isPhishing, text: "ES LEGÍTIMO" })}
                                                className="group relative p-4 bg-green-900/10 border border-green-500/30 rounded-lg hover:bg-green-900/20 hover:border-green-500 transition-all text-center"
                                            >
                                                <FaCheckCircle className="mx-auto mb-2 text-green-500" />
                                                <span className="text-sm font-bold text-green-400 uppercase tracking-widest">ES LEGÍTIMO</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className={`p-4 rounded-lg flex items-start gap-4 ${answers[answers.length - 1].correct ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
                                        <div className="mt-1">
                                            {answers[answers.length - 1].correct ? <FaCheckCircle className="text-xl text-green-500" /> : <FaTimesCircle className="text-xl text-red-500" />}
                                        </div>
                                        <div>
                                            <h4 className={`text-sm font-bold uppercase mb-1 ${answers[answers.length - 1].correct ? 'text-green-400' : 'text-red-400'}`}>
                                                {answers[answers.length - 1].correct ? '¡Análisis Correcto!' : 'Error de Detección'}
                                            </h4>
                                            <p className="text-xs text-gray-400 leading-relaxed">
                                                {sessionQuestions[currentQuestion].isPhishing
                                                    ? 'Identificaste correctamente un ataque o tomaste la acción preventiva adecuada.'
                                                    : 'Diferenciaste correctamente una comunicación legítima.'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-blue-900/5 border border-blue-500/20 rounded-lg">
                                            <h4 className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.2em] mb-2">POR QU&Eacute; ES {sessionQuestions[currentQuestion].isPhishing ? 'PELIGROSO' : 'SEGURO'}</h4>
                                            <p className="text-[11px] text-gray-400 leading-relaxed italic">{sessionQuestions[currentQuestion].feedback.technical}</p>
                                        </div>
                                        <div className="p-4 bg-purple-900/5 border border-purple-500/20 rounded-lg">
                                            <h4 className="text-[10px] text-purple-400 font-bold uppercase tracking-[0.2em] mb-2">LECCIÓN ÉTICA</h4>
                                            <p className="text-[11px] text-gray-400 leading-relaxed text-gray-400">{sessionQuestions[currentQuestion].feedback.ethical}</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={nextQuestion}
                                        className="w-full bg-white text-black font-black py-4 rounded hover:bg-amber-400 transition-colors uppercase tracking-widest text-sm shadow-[0_4px_15px_rgba(255,255,255,0.1)]"
                                    >
                                        {currentQuestion < sessionQuestions.length - 1 ? 'SIGUIENTE ESCENARIO' : 'VER RESULTADOS FINALES'}
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}

                {gameState === 'results' && (
                    <motion.div
                        key="results"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-black/90 border-2 border-amber-500/30 rounded-xl p-8 md:p-12"
                    >
                        <div className="text-center mb-10">
                            <h2 className="text-4xl font-black text-amber-500 mb-2 uppercase tracking-tighter">Reporte de Desempe&ntilde;o: {username}</h2>
                            <div className="text-gray-600 font-mono text-[10px] uppercase tracking-widest">Analista de Riesgo Humano // Nivel de Acceso L5</div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-around gap-12 mb-12 py-8 bg-white/5 border-y border-white/10">
                            <div className="relative">
                                <div className="w-40 h-40 rounded-full border-4 border-gray-800 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl font-black text-white">{score}</div>
                                        <div className="text-xs text-gray-500 font-bold tracking-widest">/ 10</div>
                                    </div>
                                </div>
                                {score >= 8 && (
                                    <div className="absolute -top-2 -right-2 bg-green-500 text-black px-3 py-1 text-[10px] font-black rounded rotate-12 shadow-lg">PASSED</div>
                                )}
                            </div>

                            <div className="flex-1 max-w-sm">
                                <h4 className="text-xs text-amber-400 font-bold uppercase tracking-widest mb-3">Estatus de Resiliencia</h4>
                                <div className={`text-2xl font-black mb-4 ${score > 8 ? 'text-green-500' : score > 5 ? 'text-yellow-500' : 'text-red-500'}`}>
                                    {score > 8 ? 'OPERATIVO EXPERTO' : score > 5 ? 'EN ENTRENAMIENTO' : 'VULNERABLE - RE-CERTIFICACIÓN'}
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed font-sans mt-2">
                                    {score > 8
                                        ? "Tu capacidad de an&aacute;lisis es excepcional. Mantienes una desconfianza saludable y técnica ante est&iacute;mulos de urgencia y autoridad."
                                        : score > 5
                                            ? "Detectas el phishing est&aacute;ndar, pero los vectores de alta presi&oacute;n y spear phishing dirigido a&uacute;n logran evadir tus defensas."
                                            : "Nivel cr&iacute;tico de riesgo. Tus sesgos emocionales dominan tu toma de decisiones t&eacute;cnica. Se requiere an&aacute;lisis de errores inmediato."}
                                </p>
                            </div>
                        </div>

                        {/* Mistakes/Feedback Section */}
                        <div className="mb-12">
                            <h3 className="text-sm font-black text-gray-400 mb-6 uppercase tracking-widest flex items-center gap-2">
                                <FaExclamationTriangle className="text-amber-500" /> Bit&aacute;cora de Fallos y Retroalimentaci&oacute;n
                            </h3>
                            <div className="space-y-4">
                                {answers.filter(a => !a.correct).length > 0 ? (
                                    answers.filter(a => !a.correct).map((f, idx) => (
                                        <div key={idx} className="bg-red-500/5 border border-red-500/20 p-4 rounded-lg group hover:border-red-500/40 transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider">{f.title}</h4>
                                                <span className="text-[9px] bg-red-500/20 px-2 py-0.5 rounded text-red-500 font-mono tracking-tighter uppercase">{f.vector}</span>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                                                <div>
                                                    <span className="text-[9px] text-gray-600 block uppercase font-black mb-1">Debilidad T&eacute;cnica</span>
                                                    <p className="text-[10px] text-gray-400 italic leading-relaxed">{f.feedback.technical}</p>
                                                </div>
                                                <div>
                                                    <span className="text-[9px] text-gray-600 block uppercase font-black mb-1">Retroalimentaci&oacute;n Conductual</span>
                                                    <p className="text-[10px] text-gray-400 leading-relaxed">{f.feedback.ethical}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-10 border border-green-500/20 rounded-xl bg-green-500/5 text-center">
                                        <FaCheckCircle className="text-4xl text-green-500 mx-auto mb-4" />
                                        <h4 className="text-green-500 font-black uppercase text-sm tracking-widest">Resiliencia Perfecta</h4>
                                        <p className="text-xs text-gray-500 mt-2">No se detectaron brechas conductuales en esta sesi&oacute;n.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <button
                                onClick={resetQuiz}
                                className="border border-amber-600/50 text-amber-500 py-4 rounded hover:bg-amber-600 hover:text-black transition-all uppercase tracking-widest text-xs font-bold"
                            >
                                NUEVO ANALISTA
                            </button>
                            <button
                                onClick={() => setGameState('ranking')}
                                className="bg-white/5 border border-white/10 text-white py-4 rounded hover:bg-white/10 transition-all uppercase tracking-widest text-xs font-bold"
                            >
                                VER CLASIFICACIÓN
                            </button>
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="bg-amber-600 text-black py-4 rounded hover:bg-amber-500 transition-all uppercase tracking-widest text-xs font-black shadow-lg"
                            >
                                VOLVER AL REPORTE
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PhishingQuiz;

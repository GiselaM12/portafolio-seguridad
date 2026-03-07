import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShieldAlt, FaExclamationTriangle, FaCheckCircle, FaTimesCircle, FaEnvelope, FaSms, FaUsb, FaUsers, FaLock, FaUserShield, FaChartLine } from 'react-icons/fa';
import { quizData } from '../data/quizData';

const PhishingQuiz = () => {
    const [gameState, setGameState] = useState('intro'); // intro, questions, results
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showFeedback, setShowFeedback] = useState(false);
    const [lastSelected, setLastSelected] = useState(null);

    const handleStart = () => {
        setGameState('questions');
    };

    const handleAnswer = (isPhishing) => {
        const correct = isPhishing === quizData[currentQuestion].isPhishing;
        if (correct) setScore(score + 1);

        setAnswers([...answers, { question: currentQuestion, correct, selected: isPhishing }]);
        setLastSelected(isPhishing);
        setShowFeedback(true);
    };

    const nextQuestion = () => {
        setShowFeedback(false);
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setGameState('results');
        }
    };

    const resetQuiz = () => {
        setGameState('intro');
        setCurrentQuestion(0);
        setScore(0);
        setAnswers([]);
        setShowFeedback(false);
    };

    const getIconForVector = (vector) => {
        if (vector.includes('Email')) return <FaEnvelope className="text-blue-400" />;
        if (vector.includes('SMS')) return <FaSms className="text-green-400" />;
        if (vector.includes('Físico')) return <FaUsb className="text-red-400" />;
        if (vector.includes('Teams')) return <FaUsers className="text-purple-400" />;
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
                        <h2 className="text-3xl font-black text-amber-400 mb-4 tracking-tighter">PR02: SIMULADOR DE RESILIENCIA HUMANA</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Has sido seleccionado para evaluar tu capacidad de detección de amenazas. A continuación, se presentarán 10 escenarios basados en vectores reales de 2026.
                            <br /><br />
                            <span className="text-xs text-amber-500/70 uppercase font-bold tracking-[0.2em]">Diseño Ético: No se capturan datos personales ni credenciales.</span>
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
                            <div className="p-4 bg-white/5 border border-white/10 rounded">
                                <h4 className="text-xs text-amber-400 font-bold mb-1 uppercase tracking-widest">10 Módulos</h4>
                                <p className="text-[10px] text-gray-500">Escenarios de Whaling, Smishing y Baiting.</p>
                            </div>
                            <div className="p-4 bg-white/5 border border-white/10 rounded">
                                <h4 className="text-xs text-amber-400 font-bold mb-1 uppercase tracking-widest">Feedback</h4>
                                <p className="text-[10px] text-gray-500">Análisis técnico y explicación ética inmediata.</p>
                            </div>
                            <div className="p-4 bg-white/5 border border-white/10 rounded">
                                <h4 className="text-xs text-amber-400 font-bold mb-1 uppercase tracking-widest">Resiliencia</h4>
                                <p className="text-[10px] text-gray-500">Cálculo de tu score de supervivencia digital.</p>
                            </div>
                        </div>

                        <button
                            onClick={handleStart}
                            className="bg-amber-600 hover:bg-amber-500 text-black font-black py-4 px-12 rounded transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] uppercase tracking-widest text-sm"
                        >
                            INICIAR EVALUACIÓN
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
                        {/* Progress Bar */}
                        <div className="h-1 bg-gray-900 w-full">
                            <motion.div
                                className="h-full bg-amber-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
                            />
                        </div>

                        <div className="p-4 bg-[#111] border-b border-gray-800 flex justify-between items-center">
                            <span className="text-[10px] text-gray-500 tracking-widest uppercase font-bold">ESCENARIO {currentQuestion + 1} / {quizData.length}</span>
                            <span className="text-amber-500 text-[10px] font-bold uppercase tracking-widest">{quizData[currentQuestion].trigger}</span>
                        </div>

                        <div className="p-6 md:p-10">
                            {/* Email/SMS Visual Container */}
                            <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg overflow-hidden mb-8 shadow-inner">
                                <div className="bg-gray-800/50 p-3 flex items-center gap-3 border-b border-gray-700">
                                    <div className="p-2 bg-black/40 rounded">
                                        {getIconForVector(quizData[currentQuestion].vector)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-[10px] text-gray-500 uppercase font-bold">Remitente:</div>
                                        <div className="text-xs text-gray-300 font-bold">{quizData[currentQuestion].sender}</div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    {quizData[currentQuestion].subject && (
                                        <div className="mb-4">
                                            <div className="text-[10px] text-gray-500 uppercase font-bold mb-1">Asunto:</div>
                                            <div className="text-sm text-amber-100 font-bold uppercase tracking-tight">{quizData[currentQuestion].subject}</div>
                                        </div>
                                    )}
                                    <div className="text-sm text-gray-400 leading-relaxed mb-8">
                                        {quizData[currentQuestion].content}
                                    </div>

                                    {quizData[currentQuestion].buttonText && (
                                        <div className="flex justify-center mb-6">
                                            <div className="bg-blue-600/80 px-6 py-2 rounded text-xs text-white font-bold cursor-default hover:bg-blue-500 transition-colors">
                                                {quizData[currentQuestion].buttonText}
                                            </div>
                                        </div>
                                    )}

                                    {quizData[currentQuestion].attachment && (
                                        <div className="flex items-center gap-2 p-3 bg-black/20 border border-gray-700 rounded w-fit mx-auto cursor-default">
                                            <FaLock className="text-gray-600 text-xs" />
                                            <span className="text-[10px] text-gray-400 font-bold">{quizData[currentQuestion].attachment}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Options */}
                            {!showFeedback ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <button
                                        onClick={() => handleAnswer(true)}
                                        className="group relative p-4 bg-red-900/10 border border-red-500/30 rounded-lg hover:bg-red-900/20 hover:border-red-500 transition-all text-center"
                                    >
                                        <FaExclamationTriangle className="mx-auto mb-2 text-red-500" />
                                        <span className="text-sm font-bold text-red-400 uppercase tracking-widest">ES PHISHING</span>
                                    </button>
                                    <button
                                        onClick={() => handleAnswer(false)}
                                        className="group relative p-4 bg-green-900/10 border border-green-500/30 rounded-lg hover:bg-green-900/20 hover:border-green-500 transition-all text-center"
                                    >
                                        <FaCheckCircle className="mx-auto mb-2 text-green-500" />
                                        <span className="text-sm font-bold text-green-400 uppercase tracking-widest">ES LEGÍTIMO</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className={`p-4 rounded-lg flex items-start gap-4 ${answers[answers.length - 1].correct ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
                                        <div className="mt-1">
                                            {answers[answers.length - 1].correct ? <FaCheckCircle className="text-xl text-green-500" /> : <FaTimesCircle className="text-xl text-red-500" />}
                                        </div>
                                        <div>
                                            <h4 className={`text-sm font-bold uppercase mb-1 ${answers[answers.length - 1].correct ? 'text-green-400' : 'text-red-400'}`}>
                                                {answers[answers.length - 1].correct ? '¡Correcto!' : 'Has fallado'}
                                            </h4>
                                            <p className="text-xs text-gray-400 leading-relaxed">
                                                {quizData[currentQuestion].isPhishing ? 'Este escenario era un ataque de PHISHING.' : 'Este escenario era un mensaje LEGÍTIMO.'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-blue-900/5 border border-blue-500/20 rounded-lg">
                                            <h4 className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.2em] mb-2">ANÁLISIS TÉCNICO</h4>
                                            <p className="text-[11px] text-gray-400 leading-relaxed italic">{quizData[currentQuestion].feedback.technical}</p>
                                        </div>
                                        <div className="p-4 bg-purple-900/5 border border-purple-500/20 rounded-lg">
                                            <h4 className="text-[10px] text-purple-400 font-bold uppercase tracking-[0.2em] mb-2">FACTORES PSICOLÓGICOS</h4>
                                            <p className="text-[11px] text-gray-400 leading-relaxed">{quizData[currentQuestion].feedback.ethical}</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={nextQuestion}
                                        className="w-full bg-white text-black font-black py-4 rounded hover:bg-amber-400 transition-colors uppercase tracking-widest text-sm"
                                    >
                                        {currentQuestion < quizData.length - 1 ? 'SIGUIENTE ESCENARIO' : 'FINALIZAR EVALUACIÓN'}
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
                        className="bg-black/80 border-2 border-amber-500/50 rounded-xl p-8 md:p-12 text-center"
                    >
                        <h2 className="text-4xl font-black text-amber-500 mb-2 uppercase italic tracking-tighter">RESULTADO DEL ANÁLISIS CONDUCTUAL</h2>
                        <div className="text-gray-500 font-mono text-sm mb-12">Session ID: {Math.random().toString(36).substring(7).toUpperCase()}</div>

                        <div className="flex flex-col md:flex-row items-center justify-around gap-12 mb-12">
                            <div className="relative">
                                {/* Circular Score */}
                                <div className="w-48 h-48 rounded-full border-4 border-gray-800 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl font-black text-white">{score}</div>
                                        <div className="text-xs text-gray-500 font-bold tracking-widest">/ {quizData.length}</div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-12 h-12 bg-amber-500 rounded-full border-4 border-black flex items-center justify-center animate-bounce">
                                    <FaChartLine className="text-black" />
                                </div>
                            </div>

                            <div className="text-left space-y-4 max-w-sm">
                                <div>
                                    <h4 className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Nivel de Resiliencia</h4>
                                    <div className={`text-xl font-bold ${score > 8 ? 'text-green-500' : score > 5 ? 'text-yellow-500' : 'text-red-500'}`}>
                                        {score > 8 ? 'ALTAMENTE RESILIENTE' : score > 5 ? 'VULNERABILIDAD MODERADA' : 'ALTO RIESGO HUMANO'}
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    {score > 8
                                        ? "Posees una excelente capacidad de detección. Sabes identificar las señales sutiles de la ingeniería social y mantienes el pensamiento crítico bajo presión."
                                        : score > 5
                                            ? "Tienes buenos fundamentos, pero has caído en ganchos psicológicos de alta complejidad. Te recomendamos revisar el 'Teachable Moment' de tus errores."
                                            : "Tus defensas ante la ingeniería social son críticas. El atacante ha logrado explotar tus factores emocionales. Se requiere entrenamiento intensivo de concienciación."}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            <button
                                onClick={resetQuiz}
                                className="border border-amber-500 text-amber-500 font-bold py-4 rounded hover:bg-amber-500 hover:text-black transition-all uppercase tracking-widest text-sm"
                            >
                                REPETIR EVALUACIÓN
                            </button>
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="bg-white text-black font-bold py-4 rounded hover:bg-gray-200 transition-all uppercase tracking-widest text-sm"
                            >
                                VOLVER AL REPORTE
                            </button>
                        </div>

                        <div className="pt-8 border-t border-gray-800">
                            <div className="flex items-center justify-center gap-2 text-[10px] text-gray-600 uppercase font-black tracking-[0.3em]">
                                <FaUserShield className="text-lg" />
                                <span>Seguridad Informática 2026 // Moreno Solís Gisela</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PhishingQuiz;

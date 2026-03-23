import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShieldAlt, FaExclamationTriangle, FaCheckCircle, FaTimesCircle, FaChartLine, FaClock, FaArrowRight, FaPaperclip, FaUserShield, FaStar, FaReply, FaEllipsisV, FaTrash, FaArchive } from 'react-icons/fa';
import { quizData } from '../data/quizData';

/* ═══════════════════════════════════
   RICH TEXT — renders bodyParts
   ═══════════════════════════════════ */
const RichText = ({ parts, darkMode = false }) => (
    <span>
        {parts.map((part, i) => {
            switch (part.type) {
                case 'bold':
                    return <strong key={i} className={darkMode ? "font-semibold text-white" : "font-semibold text-gray-900"}>{part.text}</strong>;
                case 'danger':
                    return <span key={i} className="font-semibold text-red-500">{part.text}</span>;
                case 'link':
                    return <span key={i} className={`underline cursor-pointer ${darkMode ? "text-blue-400" : "text-blue-600 hover:text-blue-800"}`}>{part.text}</span>;
                default:
                    return <span key={i}>{part.text}</span>;
            }
        })}
    </span>
);

/* ═══════════════════════════════════
   EMAIL MOCKUP — Ultra-realistic Gmail
   ═══════════════════════════════════ */
const EmailMockup = ({ question }) => {
    const emailMatch = question.senderEmail?.match(/^(.+)@(.+)$/);
    const emailUser = emailMatch ? emailMatch[1] : '';
    const emailDomain = emailMatch ? emailMatch[2] : '';
    const safeDomains = ['github.com', 'microsoft.com', 'slack.com', 'amazon.com', 'salesforce.com', 'tu-empresa.com'];
    const isSuspicious = !safeDomains.some(d => emailDomain.endsWith(d));

    return (
        <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.12)] overflow-hidden font-sans border border-gray-200/80 max-w-2xl mx-auto"
        >
            {/* macOS Title Bar */}
            <div className="bg-[#f0f0f0] px-4 py-2.5 flex items-center gap-3 border-b border-gray-200/60">
                <div className="flex items-center gap-[7px]">
                    <div className="w-[13px] h-[13px] rounded-full bg-[#ff5f57] shadow-sm"></div>
                    <div className="w-[13px] h-[13px] rounded-full bg-[#febc2e] shadow-sm"></div>
                    <div className="w-[13px] h-[13px] rounded-full bg-[#28c840] shadow-sm"></div>
                </div>
                <span className="ml-2 text-[13px] text-gray-500 font-medium tracking-tight">Gmail</span>
            </div>

            {/* Toolbar */}
            <div className="bg-white px-6 py-2 border-b border-gray-100 flex items-center gap-4 text-gray-400 text-sm">
                <FaArchive className="hover:text-gray-600 cursor-pointer" title="Archivar" />
                <FaTrash className="hover:text-gray-600 cursor-pointer" title="Eliminar" />
                <span className="text-gray-200">|</span>
                <FaReply className="hover:text-gray-600 cursor-pointer" title="Responder" />
                <FaEllipsisV className="hover:text-gray-600 cursor-pointer ml-auto" />
            </div>

            {/* Email Content */}
            <div className="px-7 py-6 md:px-10 md:py-8">
                {/* Subject */}
                <h2 className="text-[22px] font-normal text-gray-900 mb-5 leading-snug">
                    {question.subject}
                </h2>

                {/* Sender Info */}
                <div className="flex items-start gap-4 mb-6 pb-5 border-b border-gray-100">
                    <div 
                        className="w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold text-lg uppercase flex-shrink-0"
                        style={{ backgroundColor: question.senderColor || '#5f6368' }}
                    >
                        {question.senderInitial || 'S'}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-[15px] text-gray-900">{question.senderName}</span>
                            <span className="text-xs text-gray-400">
                                {new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                        <div className="text-[13px] mt-0.5">
                            <span className="text-gray-400">&lt;{emailUser}@</span>
                            <span className={isSuspicious ? "text-red-500 font-semibold" : "text-gray-400"}>{emailDomain}</span>
                            <span className="text-gray-400">&gt;</span>
                        </div>
                    </div>
                    <FaStar className="text-gray-300 hover:text-yellow-400 cursor-pointer text-lg flex-shrink-0 mt-1" />
                </div>

                {/* Body */}
                <div className="text-[15px] text-gray-600 leading-[1.75] space-y-4">
                    <p>
                        <RichText parts={question.bodyParts} />
                    </p>

                    {/* CTA Button/Link */}
                    {question.linkText && (
                        <p className="py-1">
                            <span className="text-blue-600 underline cursor-pointer hover:text-blue-800 text-[15px]">
                                {question.linkText}
                            </span>
                        </p>
                    )}

                    {/* Attachment */}
                    {question.attachment && (
                        <div className="mt-5 inline-flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 cursor-pointer transition-colors">
                            <FaPaperclip className="text-gray-400" />
                            <span className="text-sm font-medium text-blue-600">{question.attachment}</span>
                            <span className="text-[11px] text-gray-400">· Descargar</span>
                        </div>
                    )}
                </div>

                {/* Footer */}
                {question.footerText && (
                    <div className="border-t border-gray-100 mt-8 pt-4 text-[11px] text-gray-400 tracking-wide">
                        {question.footerText}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

/* ═══════════════════════════════════
   SMS MOCKUP — iPhone Messages
   ═══════════════════════════════════ */
const SMSMockup = ({ question }) => (
    <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-[360px]"
    >
        {/* Phone frame */}
        <div className="bg-[#0a0a0a] rounded-[2.8rem] p-[10px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative">
            {/* Dynamic Island */}
            <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[95px] h-[28px] bg-black rounded-full z-30"></div>
            
            <div className="bg-[#000000] rounded-[2.3rem] overflow-hidden min-h-[520px] flex flex-col relative">
                {/* Status Bar */}
                <div className="px-8 pt-[14px] pb-1 flex justify-between items-center text-white text-[12px] font-semibold relative z-20">
                    <span>{new Date().getHours()}:{String(new Date().getMinutes()).padStart(2, '0')}</span>
                    <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
                    </div>
                </div>

                {/* Header */}
                <div className="text-center pt-3 pb-4 border-b border-white/10">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                        <FaUserShield className="text-white text-2xl" />
                    </div>
                    <div className="text-white font-semibold text-[17px]">{question.senderName}</div>
                    <div className="text-gray-400 text-[13px] mt-0.5">{question.senderPhone || 'SMS'}</div>
                </div>

                {/* Messages */}
                <div className="flex-1 px-4 py-5 space-y-2">
                    <div className="text-center text-gray-500 text-[11px] font-medium mb-4">
                        Hoy {new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    
                    {/* Bubble */}
                    <div className="bg-[#303030] text-white px-4 py-3 rounded-2xl rounded-tl-md max-w-[88%] text-[15px] leading-relaxed shadow-sm">
                        <RichText parts={question.bodyParts} darkMode={true} />
                    </div>
                </div>

                {/* Input */}
                <div className="px-3 pb-6 pt-2">
                    <div className="bg-[#1c1c1e] border border-[#3a3a3c] rounded-full px-5 py-2.5 flex items-center">
                        <span className="text-gray-500 text-[14px]">Mensaje de texto</span>
                        <div className="ml-auto w-7 h-7 bg-gray-600 rounded-full flex items-center justify-center">
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

/* ═══════════════════════════════════
   TEAMS MOCKUP — Microsoft Teams Chat
   ═══════════════════════════════════ */
const TeamsMockup = ({ question }) => (
    <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto"
    >
        <div className="bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.12)] overflow-hidden font-sans border border-gray-200/80">
            {/* Teams Header */}
            <div className="bg-[#464775] px-5 py-2.5 flex items-center gap-3">
                <div className="flex items-center gap-[6px]">
                    <div className="w-[11px] h-[11px] rounded-full bg-white/20"></div>
                    <div className="w-[11px] h-[11px] rounded-full bg-white/20"></div>
                    <div className="w-[11px] h-[11px] rounded-full bg-white/20"></div>
                </div>
                <span className="text-white/90 font-semibold text-[13px] ml-1">Microsoft Teams — Chat</span>
            </div>

            {/* Chat Header */}
            <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-3 bg-[#fafafa]">
                <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-[#464775] flex items-center justify-center text-white font-semibold text-sm uppercase">
                        {question.senderName?.charAt(0) || 'U'}
                    </div>
                    <span className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white ${
                        question.senderStatus === 'Ocupado' ? 'bg-red-500' : 'bg-green-500'
                    }`}></span>
                </div>
                <div>
                    <div className="font-semibold text-[14px] text-gray-900">{question.senderName}</div>
                    <div className="text-[11px] text-gray-500">{question.senderStatus || "En línea"}</div>
                </div>
            </div>

            {/* Chat Body */}
            <div className="bg-[#f5f5f5] px-5 py-6 min-h-[200px]">
                <div className="text-center text-gray-400 text-[11px] font-medium mb-5">
                    Hoy {new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}
                </div>
                
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#464775] flex items-center justify-center text-white text-xs font-semibold uppercase flex-shrink-0 mt-0.5">
                        {question.senderName?.charAt(0) || 'U'}
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-[13px] text-gray-900">{question.senderName?.split(' ')[0]}</span>
                            <span className="text-[11px] text-gray-400">{new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                        <div className="bg-white px-4 py-3 rounded-lg rounded-tl-sm shadow-sm text-[14px] text-gray-700 leading-relaxed border border-gray-100 max-w-md">
                            <RichText parts={question.bodyParts} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-gray-200 bg-white">
                <div className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2.5 text-gray-400 text-[13px]">
                    Escribe un nuevo mensaje
                </div>
            </div>
        </div>
    </motion.div>
);

/* ═══════════════════════════════════
   FEEDBACK CARD
   ═══════════════════════════════════ */
const FeedbackCard = ({ question, isCorrect, isTimeOut, onNext }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="mt-6"
    >
        <div className={`p-6 rounded-xl border-l-4 ${
            isTimeOut ? 'bg-amber-50 border-amber-400' :
            isCorrect ? 'bg-emerald-50 border-emerald-500' :
            'bg-red-50 border-red-500'
        }`}>
            <div className="flex items-center gap-2.5 mb-3">
                {isTimeOut ? <FaClock className="text-xl text-amber-500" /> :
                 isCorrect ? <FaCheckCircle className="text-xl text-emerald-500" /> :
                 <FaTimesCircle className="text-xl text-red-500" />}
                <h4 className={`text-base font-bold ${
                    isTimeOut ? 'text-amber-700' : isCorrect ? 'text-emerald-700' : 'text-red-700'
                }`}>
                    {isTimeOut ? '⏱ Se acabó el tiempo' :
                     isCorrect ? '✅ ¡Correcto!' :
                     question.isPhishing ? '🚨 Era Phishing' : '⚠️ Era legítimo'}
                </h4>
            </div>

            <p className="text-gray-600 text-sm mb-3 leading-relaxed font-sans">
                {question.feedback.technical}
            </p>

            {question.feedback.points && (
                <ul className="space-y-2">
                    {question.feedback.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm font-sans">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5 ${
                                isTimeOut ? 'bg-amber-200 text-amber-700' :
                                isCorrect ? 'bg-emerald-200 text-emerald-700' :
                                'bg-red-200 text-red-700'
                            }`}>{i + 1}</span>
                            <span className="text-gray-600">{point}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>

        <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={onNext}
            className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors font-sans shadow-sm"
        >
            Siguiente pregunta <FaArrowRight className="text-xs" />
        </motion.button>
    </motion.div>
);

/* ═══════════════════════════════════
   GLITCH TEXT
   ═══════════════════════════════════ */
const GlitchText = ({ text, className = "" }) => (
    <span className={`relative inline-block group ${className}`}>
        <span className="relative z-10">{text}</span>
        <span className="absolute top-0 left-0 -z-10 text-red-500/60 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-75">{text}</span>
        <span className="absolute top-0 left-0 -z-20 text-cyan-400/60 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0.5 transition-all duration-75">{text}</span>
    </span>
);

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */
const PhishingQuiz = () => {
    const [gameState, setGameState] = useState('intro');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showFeedback, setShowFeedback] = useState(false);
    const [lastCorrect, setLastCorrect] = useState(null);
    const [username, setUsername] = useState('');
    const [leaderboard, setLeaderboard] = useState([]);
    const [sessionQuestions, setSessionQuestions] = useState([]);
    const [timeLeft, setTimeLeft] = useState(30); // Per question
    const [activityTimeLeft, setActivityTimeLeft] = useState(300); // 5 mins for activity
    const [isTimeOut, setIsTimeOut] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('phishing_leaderboard');
        if (saved) setLeaderboard(JSON.parse(saved));
    }, []);

    // Global Activity Timer
    useEffect(() => {
        if (gameState !== 'questions') return;
        const mainTimer = setInterval(() => {
            setActivityTimeLeft(t => {
                if (t <= 1) {
                    clearInterval(mainTimer);
                    setGameState('results');
                    return 0;
                }
                return t - 1;
            });
        }, 1000);
        return () => clearInterval(mainTimer);
    }, [gameState]);

    // Per Question Timer
    useEffect(() => {
        if (gameState !== 'questions' || showFeedback || timeLeft <= 0) return;
        const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
        return () => clearInterval(timer);
    }, [gameState, showFeedback, timeLeft]);

    useEffect(() => {
        if (timeLeft === 0 && gameState === 'questions' && !showFeedback) {
            setIsTimeOut(true);
            processAnswer(false);
        }
    }, [timeLeft]);

    const shuffle = (arr) => {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };

    const handleStart = () => {
        if (!username.trim()) return alert("Ingresa tu nombre de agente.");
        setSessionQuestions(shuffle(quizData).slice(0, 10));
        setGameState('questions');
        setScore(0);
        setTimeLeft(30);
        setActivityTimeLeft(300);
        setIsTimeOut(false);
        setAnswers([]);
        setShowFeedback(false);
    };

    const processAnswer = (isCorrect) => {
        if (showFeedback) return;
        const newScore = isCorrect ? score + 1 : score;
        if (isCorrect) setScore(newScore);
        setLastCorrect(isCorrect);
        setShowFeedback(true);
        setAnswers(prev => [...prev, { correct: isCorrect }]);
        if (currentQuestion === sessionQuestions.length - 1) saveResult(newScore);
    };

    const handleUserAnswer = (userSaysPhishing) => {
        processAnswer(userSaysPhishing === sessionQuestions[currentQuestion].isPhishing);
    };

    const nextQuestion = () => {
        if (currentQuestion < sessionQuestions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
            setTimeLeft(30);
            setShowFeedback(false);
            setIsTimeOut(false);
        } else {
            setGameState('results');
        }
    };

    const saveResult = (finalScore) => {
        const saved = JSON.parse(localStorage.getItem('phishing_leaderboard') || '[]');
        const entry = { name: username, score: finalScore, date: new Date().toLocaleDateString(), id: Date.now() };
        const updated = [...saved, entry].sort((a, b) => b.score - a.score).slice(0, 10);
        setLeaderboard(updated);
        localStorage.setItem('phishing_leaderboard', JSON.stringify(updated));
    };

    const resetQuiz = () => {
        setGameState('intro');
        setCurrentQuestion(0);
        setScore(0);
        setAnswers([]);
        setShowFeedback(false);
        setUsername('');
        setTimeLeft(30);
        setActivityTimeLeft(300);
        setIsTimeOut(false);
    };

    const renderMockup = (q) => {
        if (q.mockupType === 'sms') return <SMSMockup question={q} />;
        if (q.mockupType === 'teams') return <TeamsMockup question={q} />;
        return <EmailMockup question={q} />;
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="w-full max-w-6xl mx-auto my-12 relative px-4">
            <AnimatePresence mode="wait">

                {/* ═══ INTRO ═══ */}
                {gameState === 'intro' && (
                    <motion.div key="intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="bg-gradient-to-b from-[#0c0c1d] to-[#111127] border border-violet-500/15 rounded-3xl p-10 md:p-16 text-center shadow-[0_0_80px_rgba(139,92,246,0.08)] relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.08),transparent_60%)]"></div>
                        
                        <div className="relative z-10">
                            <motion.div animate={{ rotateY: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="w-20 h-20 bg-violet-500/10 rounded-2xl mx-auto mb-8 flex items-center justify-center border border-violet-500/20">
                                <FaShieldAlt className="text-4xl text-violet-400" />
                            </motion.div>

                            <h2 className="text-4xl md:text-6xl font-black text-white mb-2 uppercase tracking-tighter leading-none font-mono text-center">
                                <GlitchText text="PHISHING" /><br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">SIMULATOR</span>
                            </h2>
                            <p className="text-gray-500 text-sm mb-10 max-w-md mx-auto font-sans leading-relaxed text-center">
                                Analiza correos, SMS y mensajes de chat reales.<br/>¿Puedes distinguir un ataque de una comunicación legítima?
                            </p>

                            <div className="max-w-xs mx-auto mb-10">
                                <label className="block text-[10px] text-violet-400/70 font-semibold uppercase tracking-[0.3em] mb-2 font-mono">Nombre de Agente</label>
                                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Tu nombre"
                                    className="w-full bg-white/5 border border-violet-500/20 rounded-xl px-5 py-4 text-violet-300 focus:outline-none focus:border-violet-400 text-center font-semibold text-lg uppercase tracking-wider font-mono placeholder:text-gray-600 transition-colors"
                                    maxLength={15} />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleStart}
                                    className="bg-violet-600 hover:bg-violet-500 text-white font-semibold py-4 px-12 rounded-xl text-sm shadow-[0_8px_30px_rgba(139,92,246,0.3)] font-sans transition-colors">
                                    🛡️ Iniciar Simulación
                                </motion.button>
                                <button onClick={() => setGameState('ranking')}
                                    className="border border-white/10 text-gray-400 hover:text-white hover:border-white/20 py-4 px-10 rounded-xl text-sm font-semibold transition-all font-sans">
                                    📊 Ver Ranking
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* ═══ QUESTIONS ═══ */}
                {gameState === 'questions' && sessionQuestions.length > 0 && (
                    <motion.div key="q" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        
                        {/* Top Bar - Multi-Timer */}
                        <div className="flex flex-col md:flex-row items-center justify-between mb-8 px-4 py-4 bg-black/40 border border-white/5 rounded-2xl gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-1">Progreso Actividad</span>
                                    <span className="text-sm font-bold text-white font-sans">
                                        Pregunta {currentQuestion + 1} <span className="text-gray-500">/ 10</span>
                                    </span>
                                </div>
                                <div className="w-[1px] h-8 bg-white/10 mx-2"></div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-violet-400 font-mono uppercase tracking-widest mb-1">Tiempo Total</span>
                                    <div className={`flex items-center gap-2 text-lg font-black font-mono ${activityTimeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-violet-400'}`}>
                                        <FaClock size={14} /> {formatTime(activityTimeLeft)}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="text-right">
                                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest block mb-1">Score</span>
                                    <span className="text-lg font-black text-emerald-400 font-mono">{score}</span>
                                </div>
                                <div className={`flex flex-col items-end p-2 px-4 rounded-xl border ${
                                    timeLeft <= 10 ? 'bg-red-500/10 border-red-500/30 text-red-500' : 'bg-white/5 border-white/10 text-gray-300'
                                }`}>
                                    <span className="text-[9px] uppercase font-bold tracking-tighter mb-1">Límite Pregunta</span>
                                    <span className="text-xl font-black font-mono leading-none">{timeLeft}s</span>
                                </div>
                            </div>
                        </div>

                        {/* Question Context */}
                        <div className="bg-violet-600/5 rounded-xl px-6 py-4 mb-8 border border-violet-500/20 flex flex-col md:flex-row items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 flex-shrink-0">
                                 <FaExclamationTriangle />
                             </div>
                             <p className="text-gray-300 text-sm font-sans leading-relaxed">
                                <span className="text-violet-400 font-bold uppercase tracking-tighter mr-2">Analizando:</span>
                                {sessionQuestions[currentQuestion].title}
                             </p>
                        </div>

                        {/* Layout: Main Area */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                            {/* Mockup - Center/Left area */}
                            <div className={`transition-all duration-500 ${showFeedback ? 'lg:col-span-12' : 'lg:col-span-8'}`}>
                                <div key={currentQuestion} className="w-full flex justify-center">
                                    <div className="w-full max-w-2xl">
                                        {renderMockup(sessionQuestions[currentQuestion])}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {showFeedback && (
                                        <div className="mt-8 max-w-3xl mx-auto">
                                            <FeedbackCard 
                                                question={sessionQuestions[currentQuestion]}
                                                isCorrect={lastCorrect}
                                                isTimeOut={isTimeOut}
                                                onNext={nextQuestion}
                                            />
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Answer buttons - Right Side (hidden on feedback) */}
                            {!showFeedback && (
                                <div className="lg:col-span-4 sticky top-10">
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                                        className="space-y-4 p-6 bg-black/30 border border-white/5 rounded-2xl backdrop-blur-sm">
                                        <h3 className="text-xs text-violet-400 font-black uppercase tracking-[0.2em] mb-4 text-center">Toma una Decisión</h3>

                                        <motion.button whileHover={{ scale: 1.03, backgroundColor: 'rgba(16, 185, 129, 0.1)' }} whileTap={{ scale: 0.97 }}
                                            onClick={() => handleUserAnswer(false)}
                                            className="w-full p-6 border-2 border-emerald-500/20 rounded-2xl group transition-all text-center flex flex-col items-center gap-2">
                                            <FaCheckCircle className="text-4xl text-emerald-500 group-hover:scale-110 transition-transform" />
                                            <span className="text-lg font-black text-white block font-sans uppercase tracking-tighter">Es legítimo</span>
                                            <span className="text-[10px] text-gray-500 font-sans tracking-wide">CONFÍO EN EL REMITENTE</span>
                                        </motion.button>

                                        <motion.button whileHover={{ scale: 1.03, backgroundColor: 'rgba(239, 68, 68, 0.1)' }} whileTap={{ scale: 0.97 }}
                                            onClick={() => handleUserAnswer(true)}
                                            className="w-full p-6 border-2 border-red-500/20 rounded-2xl group transition-all text-center flex flex-col items-center gap-2">
                                            <FaExclamationTriangle className="text-4xl text-red-500 group-hover:scale-110 transition-transform" />
                                            <span className="text-lg font-black text-white block font-sans uppercase tracking-tighter">Es phishing</span>
                                            <span className="text-[10px] text-gray-500 font-sans tracking-wide">ELIMINAR Y REPORTAR</span>
                                        </motion.button>
                                        
                                        <div className="pt-4 mt-4 border-t border-white/5">
                                            <div className="flex justify-between text-[9px] font-mono text-gray-600 uppercase tracking-widest">
                                                <span>Protocol_ID: 02</span>
                                                <span>Enc_Mode: RSA-AES</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}

                {/* ═══ RESULTS ═══ */}
                {gameState === 'results' && (
                    <motion.div key="results" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-b from-[#0c0c1d] to-[#111127] border border-violet-500/15 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                        
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.06),transparent_60%)]"></div>
                        
                        <div className="relative z-10">
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}
                                className={`w-36 h-36 rounded-full border-4 mx-auto flex flex-col items-center justify-center mb-8 ${
                                    score > 7 ? 'border-emerald-500 shadow-[0_0_50px_rgba(34,197,94,0.2)]' : 
                                    score > 4 ? 'border-amber-500 shadow-[0_0_50px_rgba(234,179,8,0.2)]' : 
                                    'border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.2)]'
                                }`}>
                                <span className="text-4xl font-black text-white font-mono">{score}</span>
                                <span className="text-sm text-gray-400 font-mono">/10</span>
                            </motion.div>

                            <h2 className="text-3xl font-black text-white mb-2 font-sans">
                                {score > 7 ? "🏆 Operador Elite" : score > 4 ? "📊 Analista Junior" : "⚠️ Agente Vulnerable"}
                            </h2>
                            <p className="text-gray-400 mb-10 text-sm font-sans max-w-md mx-auto">
                                {score > 7 ? "Excelente capacidad de detección. Tu organización está segura contigo." :
                                 score > 4 ? "Buen trabajo, pero aún hay vectores que podrían engañarte." :
                                 "Necesitas más entrenamiento. Eres vulnerable a ataques de ingeniería social."}
                            </p>

                            <div className="grid grid-cols-3 gap-3 mb-10 max-w-md mx-auto">
                                <div className="p-4 bg-emerald-500/10 border border-emerald-500/15 rounded-xl">
                                    <div className="text-2xl font-black text-emerald-400 font-mono">{score}</div>
                                    <div className="text-[9px] text-emerald-400/60 uppercase tracking-wider mt-1 font-mono">Correctas</div>
                                </div>
                                <div className="p-4 bg-red-500/10 border border-red-500/15 rounded-xl">
                                    <div className="text-2xl font-black text-red-400 font-mono">{10 - score}</div>
                                    <div className="text-[9px] text-red-400/60 uppercase tracking-wider mt-1 font-mono">Errores</div>
                                </div>
                                <div className="p-4 bg-violet-500/10 border border-violet-500/15 rounded-xl">
                                    <div className="text-2xl font-black text-violet-400 font-mono">{score * 10}%</div>
                                    <div className="text-[9px] text-violet-400/60 uppercase tracking-wider mt-1 font-mono">Resiliencia</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <motion.button whileHover={{ scale: 1.02 }} onClick={resetQuiz}
                                    className="bg-violet-600 hover:bg-violet-500 text-white font-semibold py-4 px-12 rounded-xl text-sm shadow-lg font-sans transition-colors">
                                    🔄 Reintentar
                                </motion.button>
                                <button onClick={() => setGameState('ranking')}
                                    className="border border-white/10 text-gray-400 hover:text-white hover:border-white/20 py-4 px-10 rounded-xl text-sm font-semibold transition-all font-sans">
                                    📊 Ver Ranking
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* ═══ RANKING ═══ */}
                {gameState === 'ranking' && (
                    <motion.div key="ranking" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-b from-[#0c0c1d] to-[#111127] border border-violet-500/15 rounded-3xl p-6 md:p-16 shadow-2xl relative overflow-hidden">
                        
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>

                        <div className="text-center mb-16 relative">
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-block p-4 rounded-3xl bg-violet-500/10 border border-violet-500/20 mb-6 shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                                <FaStar className="text-5xl text-violet-400" />
                            </motion.div>
                            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter font-sans">
                                Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Agentes</span>
                            </h2>
                            <p className="text-gray-500 text-xs mt-4 uppercase tracking-[0.4em] font-mono">Resiliencia Cognitiva Registrada</p>
                        </div>

                        <div className="max-w-4xl mx-auto space-y-4 mb-16">
                            {leaderboard.length > 0 ? leaderboard.map((entry, i) => (
                                <motion.div key={entry.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                                    className={`relative group flex items-center gap-4 md:gap-8 p-4 md:p-6 rounded-2xl border transition-all duration-300 ${
                                        entry.name === username ? 'bg-violet-600/15 border-violet-500/50 shadow-[0_0_30px_rgba(139,92,246,0.2)] scale-[1.02] z-10' : 
                                        'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:ring-1 hover:ring-white/10'
                                    }`}>
                                    
                                    {/* Rank badge */}
                                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center font-black text-2xl md:text-3xl shrink-0 ${
                                        i === 0 ? 'bg-gradient-to-br from-yellow-300 to-yellow-600 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)]' :
                                        i === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-black shadow-[0_0_20px_rgba(156,163,175,0.4)]' :
                                        i === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-700 text-black shadow-[0_0_20px_rgba(194,65,12,0.4)]' :
                                        'bg-white/5 text-gray-500 border border-white/10'
                                    }`}>
                                        {i + 1}
                                    </div>

                                    {/* Name & Date */}
                                    <div className="flex-grow min-w-0">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-lg md:text-2xl font-black text-white uppercase tracking-tighter truncate font-mono">
                                                {entry.name}
                                            </h3>
                                            {i === 0 && <span className="bg-yellow-500/20 text-yellow-400 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest border border-yellow-500/30 font-mono">Champion</span>}
                                        </div>
                                        <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mt-1 opacity-60">
                                            Operativo: {entry.date}
                                        </p>
                                    </div>

                                    {/* Score visualizer */}
                                    <div className="flex flex-col items-end gap-2 shrink-0">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] text-gray-500 font-mono uppercase font-black">Accuracy</span>
                                            <span className={`text-xl md:text-3xl font-black font-mono ${
                                                entry.score > 7 ? 'text-emerald-400' : entry.score > 4 ? 'text-amber-400' : 'text-red-400'
                                            }`}>
                                                {entry.score * 10}%
                                            </span>
                                        </div>
                                        <div className="w-24 md:w-32 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                                            <motion.div initial={{ width: 0 }} animate={{ width: `${entry.score * 10}%` }} transition={{ duration: 1, delay: i * 0.2 }}
                                                className={`h-full rounded-full ${
                                                    entry.score > 7 ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 
                                                    entry.score > 4 ? 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 
                                                    'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                                                }`} />
                                        </div>
                                    </div>
                                </motion.div>
                            )) : (
                                <div className="py-20 text-center bg-white/[0.02] border border-dashed border-white/10 rounded-3xl">
                                    <FaExclamationTriangle className="text-5xl text-gray-700 mx-auto mb-4 opacity-20" />
                                    <p className="text-gray-600 italic font-mono uppercase tracking-widest text-sm">Sin registros operativos aún</p>
                                </div>
                            )}
                        </div>

                        <div className="max-w-xs mx-auto">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                onClick={() => setGameState('intro')}
                                className="w-full bg-violet-600/10 border border-violet-500/30 text-violet-400 hover:bg-violet-600 hover:text-white py-4 rounded-xl transition-all text-xs font-black uppercase tracking-[0.2em] font-sans">
                                ← Volver al puente de mando
                            </motion.button>
                        </div>
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    );
};

export default PhishingQuiz;

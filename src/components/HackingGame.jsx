import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUnlock, FaLock, FaTerminal, FaBug, FaSkull } from 'react-icons/fa';
import confetti from 'canvas-confetti';

const HackingGame = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [level, setLevel] = useState(1);
    const [gameState, setGameState] = useState('idle'); // idle, playing, won, lost
    const [position, setPosition] = useState(0);
    const [targetZone, setTargetZone] = useState({ start: 30, end: 50 });
    const [direction, setDirection] = useState(1);
    const [speed, setSpeed] = useState(1);

    // Game Loop
    useEffect(() => {
        let animationFrame;

        if (isOpen && gameState === 'playing') {
            const animate = () => {
                setPosition(prev => {
                    let newPos = prev + (direction * speed);
                    if (newPos >= 100 || newPos <= 0) {
                        setDirection(d => d * -1);
                        newPos = prev + (direction * -1 * speed);
                    }
                    return newPos;
                });
                animationFrame = requestAnimationFrame(animate);
            };
            animationFrame = requestAnimationFrame(animate);
        }

        return () => cancelAnimationFrame(animationFrame);
    }, [isOpen, gameState, direction, speed]);

    const startGame = () => {
        setIsOpen(true);
        resetLevel(1);
    };

    const resetLevel = (lvl) => {
        setLevel(lvl);
        setGameState('playing');
        setPosition(0);
        setDirection(1);
        // Harder levels = faster speed + smaller target
        const zoneSize = Math.max(10, 25 - (lvl * 5));
        const start = Math.floor(Math.random() * (90 - zoneSize)) + 5;
        setTargetZone({ start, end: start + zoneSize });
        setSpeed(0.5 + (lvl * 0.3));
    };

    const handleAction = () => {
        if (gameState !== 'playing') return;

        if (position >= targetZone.start && position <= targetZone.end) {
            if (level === 3) {
                setGameState('won');
                triggerWinEffect();
            } else {
                resetLevel(level + 1);
            }
        } else {
            setGameState('lost');
        }
    };

    const triggerWinEffect = () => {
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#8b5cf6', '#00ff00', '#ff00ff']
        });
    };

    const closeGame = () => setIsOpen(false);

    return (
        <>
            {/* Floating Trigger Button */}
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={startGame}
                    className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-violet-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.6)] border-2 border-white/20 hover:border-white/50 group overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-fuchsia-600 opacity-80" />
                    <FaBug className="relative z-10 text-white text-2xl animate-pulse" />

                    {/* Tooltip */}
                    <span className="absolute right-full mr-4 bg-black/90 text-violet-300 text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-violet-500/30 shadow-xl">
                        Start Hacking Challenge
                    </span>
                </motion.button>
            )}

            {/* Game Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            className="bg-[#0a0f1a] border border-violet-500/50 rounded-2xl w-full max-w-lg shadow-[0_0_50px_rgba(139,92,246,0.2)] relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

                            {/* Header */}
                            <div className="p-6 border-b border-violet-500/20 flex justify-between items-center bg-[#0d1321]">
                                <h3 className="text-xl font-bold text-violet-400 flex items-center gap-3 font-mono tracking-wider">
                                    <FaTerminal className="text-sm" /> SYSTEM BREACH
                                </h3>
                                <button
                                    onClick={closeGame}
                                    className="text-gray-500 hover:text-white transition-colors"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Game Display */}
                            <div className="p-8">
                                <div className="mb-8 relative h-16 bg-gray-900/50 rounded-full border border-gray-700 overflow-hidden shadow-inner">
                                    {/* Target Zone */}
                                    <div
                                        className="absolute top-0 bottom-0 bg-green-500/20 border-x-2 border-green-500/50 transition-all duration-300"
                                        style={{
                                            left: `${targetZone.start}%`,
                                            width: `${targetZone.end - targetZone.start}%`
                                        }}
                                    >
                                        <div className="w-full h-full bg-green-500/10 animate-pulse" />
                                    </div>

                                    {/* Moving Cursor */}
                                    <div
                                        className="absolute top-0 bottom-0 w-1.5 bg-white shadow-[0_0_15px_white] z-10"
                                        style={{ left: `${position}%` }}
                                    />
                                </div>

                                {/* Status & Controls */}
                                <div className="text-center min-h-[160px] flex flex-col justify-center">
                                    {gameState === 'playing' ? (
                                        <>
                                            <p className="text-violet-300/80 font-mono mb-6 text-sm flex justify-center gap-4">
                                                <span>LEVEL: <b className="text-white">{level}/3</b></span>
                                                <span>SPEED: <b className="text-white">{speed.toFixed(1)}x</b></span>
                                            </p>
                                            <button
                                                onClick={handleAction}
                                                className="w-full py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(124,58,237,0.3)] transition-all active:scale-95 text-lg tracking-[0.2em] animate-pulse-slow"
                                            >
                                                EXECUTE_HACK_
                                            </button>
                                            <p className="text-[10px] text-gray-500 mt-4 font-mono">
                                                Click button or Press Space
                                            </p>
                                        </>
                                    ) : gameState === 'won' ? (
                                        <div className="animate-bounce-short">
                                            <FaUnlock className="text-6xl text-green-500 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                            <h2 className="text-3xl font-bold text-white mb-2">ACCESS GRANTED</h2>
                                            <p className="text-gray-400 text-sm mb-6">Has vulnerado el firewall principal.</p>
                                            <button onClick={closeGame} className="text-violet-400 hover:text-white underline decoration-violet-500/30 underline-offset-4 transition-colors">
                                                Cerrar Terminal
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="animate-shake">
                                            <FaSkull className="text-6xl text-red-500 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                            <h2 className="text-3xl font-bold text-white mb-2">ACCESS DENIED</h2>
                                            <p className="text-gray-400 text-sm mb-6">Error en la secuencia de inyección.</p>
                                            <button
                                                onClick={() => resetLevel(1)}
                                                className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-mono border border-gray-600 hover:border-gray-500 transition-all font-bold"
                                            >
                                                RETRY CONNECTION
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default HackingGame;

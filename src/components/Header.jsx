import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaBars, FaTimes, FaTerminal, FaLock } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState('');
    const [ping, setPing] = useState(14);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Update time
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
        };
        updateTime();
        const timeInterval = setInterval(updateTime, 1000);

        // Simulate ping fluctuation
        const pingInterval = setInterval(() => {
            setPing(Math.floor(Math.random() * 8) + 11); // 11-18ms
        }, 4000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timeInterval);
            clearInterval(pingInterval);
        };
    }, []);

    const navItems = [
        { name: 'Inicio', path: '/' },
        { name: 'Actividades', path: '/#proyectos' },
        { name: 'Presentación', path: '/#presentacion' },
        { name: 'Perfil', path: '/#perfil' },
        { name: 'Certificaciones', path: '/#certificaciones' },
        { name: 'Tecnologías', path: '/#tecnologias' },
        { name: 'Contacto', path: '/#contacto' },
    ];

    const isHome = location.pathname === '/';

    const navigate = useNavigate();

    const handleNavigation = (e, item) => {
        e.preventDefault();

        // Handle Mobile Menu Close
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);

        // Case 1: External/Standard Route (Actividades)
        if (!item.path.startsWith('/#') && item.path !== '/') {
            navigate(item.path);
            return;
        }

        // Case 2: Home Page (Scroll to Top)
        if (item.path === '/') {
            if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                navigate('/');
            }
            return;
        }

        // Case 3: Section Anchor (/#section)
        const targetId = item.path.substring(2);
        if (location.pathname === '/') {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/', { state: { targetId } });
        }
    };

    const NavLink = ({ item, isMobile = false }) => {
        // Base classes
        const baseClasses = isMobile
            ? "block py-3 px-4 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-lg border-l border-transparent hover:border-cyan-500/30 transition-all duration-300 font-mono text-xs uppercase tracking-wider cursor-pointer"
            : "px-3 py-1.5 text-gray-400 hover:text-cyan-400 transition-all duration-300 font-mono text-xs uppercase tracking-wider rounded border border-transparent hover:border-cyan-500/20 hover:bg-cyan-500/5 cursor-pointer";

        return (
            <div onClick={(e) => handleNavigation(e, item)} className={baseClasses}>
                {isMobile && <span className="text-cyan-500 mr-2">&gt;</span>}
                {item.name}
            </div>
        );
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-[#060a13]/85 backdrop-blur-xl border-b border-violet-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
                : 'bg-[#060a13]/30 backdrop-blur-sm border-b border-transparent'
                }`}
        >
            <nav className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center space-x-3 cursor-pointer"
                        >
                            <div className="relative">
                                <div className="w-10 h-10 rounded bg-gradient-to-br from-cyan-500 via-violet-600 to-purple-600 flex items-center justify-center text-white text-lg shadow-lg shadow-cyan-500/10 border border-cyan-400/30">
                                    <FaShieldAlt className="text-cyan-200" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_#22d3ee]" />
                            </div>
                            <div>
                                <h1 className="text-sm font-bold text-white tracking-widest font-mono uppercase">
                                    Gisela Moreno
                                </h1>
                                <p className="text-[9px] text-cyan-400 font-mono tracking-wider flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" /> SECOPS // CORE_NODE
                                </p>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <NavLink item={item} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Right side - Status */}
                    <div className="hidden md:flex items-center gap-4 text-[10px] font-mono">
                        <span className="text-gray-500 flex items-center gap-1.5">
                            <FaLock className="text-cyan-400/60" />
                            {currentTime}
                        </span>
                        <div className="flex items-center gap-2 px-3 py-1 bg-cyan-500/5 border border-cyan-500/20 rounded">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_6px_#22d3ee]" />
                            <span className="text-cyan-400/90 tracking-widest">NOMINAL // {ping}MS</span>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-cyan-400 text-xl p-2 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 rounded transition-colors"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 bg-[#0a0f1a]/95 backdrop-blur-xl border border-cyan-500/20 rounded p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    >
                        {navItems.map((item) => (
                            <div key={item.name}>
                                <NavLink item={item} isMobile={true} />
                            </div>
                        ))}
                    </motion.div>
                )}
            </nav>
        </motion.header>
    );
};

export default Header;

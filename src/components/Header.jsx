import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaBars, FaTimes, FaTerminal, FaLock } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState('');
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

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timeInterval);
        };
    }, []);

    const navItems = [
        { name: 'Inicio', path: '/' },
        { name: 'Actividades', path: '/#proyectos' },
        { name: 'Presentación', path: '/#presentacion' },
        { name: 'Perfil', path: '/#perfil' },

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
            ? "block py-3 px-4 text-gray-400 hover:text-violet-400 hover:bg-violet-500/10 rounded-lg transition-all duration-300 font-mono text-sm cursor-pointer"
            : "px-4 py-2 text-gray-400 hover:text-violet-400 transition-all duration-300 font-mono text-sm rounded-lg hover:bg-violet-500/10 cursor-pointer";

        return (
            <div onClick={(e) => handleNavigation(e, item)} className={baseClasses}>
                {isMobile && <span className="text-violet-500 mr-2">&gt;</span>}
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
                ? 'bg-[#030712]/95 backdrop-blur-xl border-b border-violet-500/20 shadow-lg shadow-violet-500/5'
                : 'bg-transparent'
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
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white text-lg shadow-lg shadow-violet-600/30">
                                    <FaShieldAlt />
                                </div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-400 rounded-full animate-pulse" />
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-white tracking-wide font-mono">
                                    Gisela Moreno
                                </h1>
                                <p className="text-[10px] text-violet-400 font-mono flex items-center gap-1">
                                    <FaTerminal /> SecOps Portfolio
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
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <NavLink item={item} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Right side - Status */}
                    <div className="hidden md:flex items-center gap-4 text-xs font-mono">
                        <span className="text-gray-600 flex items-center gap-1">
                            <FaLock className="text-violet-400" />
                            {currentTime}
                        </span>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full">
                            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                            <span className="text-violet-400">ONLINE</span>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-violet-400 text-2xl p-2 hover:bg-violet-500/10 rounded-lg transition-colors"
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
                        className="md:hidden mt-4 bg-[#0a0f1a]/95 backdrop-blur-xl border border-violet-500/20 rounded-lg p-4"
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

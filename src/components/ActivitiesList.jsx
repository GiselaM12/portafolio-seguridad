import { Link } from 'react-router-dom';
import { activities } from '../data/activities';
import { motion } from 'framer-motion';
import { FaTerminal, FaShieldAlt, FaCalendarAlt, FaChevronRight } from 'react-icons/fa';

const ActivitiesList = () => {
    return (
        <section id="actividades" className="py-20 bg-[#030712] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>
            <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full mb-6">
                        <FaTerminal className="text-violet-400 text-sm" />
                        <span className="font-mono text-violet-400 text-xs tracking-wider">CNO V - SECURITY LOGS</span>
                        <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gray-100">Actividades de </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
                            Aprendizaje
                        </span>
                    </h2>

                    <div className="inline-block px-6 py-3 bg-[#0a0f1a]/80 border border-blue-500/30 rounded-xl backdrop-blur-md shadow-lg shadow-blue-500/10">
                        <h3 className="text-blue-400 font-mono text-xs md:text-sm tracking-widest flex items-center justify-center gap-2 uppercase">
                            <FaShieldAlt /> Parcial 1: Fundamentos de Ciberseguridad
                        </h3>
                    </div>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Link to={`/actividades/${activity.id}`}>
                                <div className="group h-full bg-[#0a0f1a]/60 backdrop-blur-sm border border-violet-500/10 rounded-xl overflow-hidden hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-300 flex flex-col relative">

                                    {/* Decoration Line */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                    {/* Card Header */}
                                    <div className="flex justify-between items-center p-5 border-b border-violet-500/10 bg-violet-500/5">
                                        <div className="flex items-center gap-2">
                                            <span className="flex items-center justify-center w-8 h-8 rounded bg-violet-500/10 text-violet-400 font-mono text-sm font-bold border border-violet-500/20 group-hover:bg-violet-500 group-hover:text-white transition-colors duration-300">
                                                {String(activity.id).padStart(2, '0')}
                                            </span>
                                            <span className="text-[10px] font-mono text-violet-300/70 uppercase">Log_Entry</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-400 bg-[#030712] px-2 py-1 rounded border border-gray-800 uppercase">
                                            <FaCalendarAlt className="text-xs" />
                                            {activity.date}
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-lg font-bold text-gray-100 mb-3 group-hover:text-violet-400 transition-colors leading-tight">
                                            {activity.title}
                                        </h3>

                                        <p className="text-gray-400 text-xs mb-6 flex-grow line-clamp-3 leading-relaxed border-l-2 border-gray-800 pl-3 group-hover:border-violet-500/50 transition-colors">
                                            {activity.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {activity.tags?.slice(0, 3).map((tag) => (
                                                <span key={tag} className="text-[9px] uppercase tracking-wider font-mono text-violet-300 bg-violet-500/10 px-2 py-1 rounded border border-violet-500/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Footer Action */}
                                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-800 group-hover:border-violet-500/30 transition-colors">
                                            <span className="text-[10px] font-mono text-gray-500 flex items-center gap-1.5 uppercase">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                                Verified
                                            </span>
                                            <span className="text-xs font-bold text-violet-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase tracking-tighter">
                                                Analyze <FaChevronRight className="text-[10px]" />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Hover corner effect */}
                                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActivitiesList;

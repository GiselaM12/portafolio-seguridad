import { Link } from 'react-router-dom';
import { activities } from '../data/activities';

const Activities = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
                        Actividades del Curso
                    </h1>
                    <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                        <h2 className="text-blue-400 font-mono text-sm md:text-base tracking-wider">
                            PARCIAL 1: FUNDAMENTOS DEL HACKING ÉTICO
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((activity) => (
                        <Link
                            to={`/actividades/${activity.id}`}
                            key={activity.id}
                            className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-blue-400 text-sm font-mono px-2 py-1 bg-blue-500/10 rounded">
                                        ID: {String(activity.id).padStart(2, '0')}
                                    </span>
                                    <span className="text-gray-400 text-xs font-mono">{activity.date}</span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors">
                                    {activity.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                                    {activity.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {activity.tags?.map((tag) => (
                                        <span key={tag} className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-full border border-gray-700">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                                    Leer artículo <span className="ml-2">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Activities;

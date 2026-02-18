import { useParams, Link } from 'react-router-dom';
import { activities } from '../data/activities';
import { FaFilePdf, FaArrowLeft, FaTerminal, FaShieldAlt, FaNetworkWired, FaBug, FaDatabase, FaLock, FaCalendarAlt, FaUserSecret } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ActivityDetail = () => {
    const { id } = useParams();
    const activity = activities.find(a => a.id === parseInt(id));

    if (!activity) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#030712]">
                <h2 className="text-2xl mb-4 font-mono text-violet-400">ERROR 404: Actividad no encontrada</h2>
                <Link to="/actividades" className="text-gray-400 hover:text-white border-b border-violet-500 hover:border-white transition-colors">Return to Base</Link>
            </div>
        );
    }

    const handleExportPDF = () => {
        // Placeholder - user can implement actual PDF logic later
        alert(`[SYSTEM]: Iniciando secuencia de exportación para "${activity.title}"...`);
    };

    return (
        <div className="pt-24 pb-16 min-h-screen bg-[#030712] text-gray-200">
            {/* Background Matrix Effect (Subtle) */}
            <div className="fixed inset-0 pointer-events-none opacity-5">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <article className="max-w-5xl mx-auto px-6 relative z-10">

                {/* Navigation Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-mono">
                    <Link to="/" className="hover:text-violet-400 transition-colors">HOME</Link>
                    <span>/</span>
                    <Link to="/actividades" className="hover:text-violet-400 transition-colors">ACTIVIDADES</Link>
                    <span>/</span>
                    <span className="text-violet-400 truncate max-w-[200px]">{activity.title}</span>
                </nav>

                {/* Header Hero Section */}
                <header className="mb-12 relative overflow-hidden rounded-2xl border border-violet-500/20 bg-[#0a0f1a]">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600" />

                    <div className="p-8 md:p-12 relative">
                        <div className="absolute top-4 right-4 text-violet-500/10 text-9xl">
                            <FaShieldAlt />
                        </div>

                        <div className="relative z-10">
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 text-xs font-mono font-bold text-black bg-violet-400 rounded">
                                    ID: {String(activity.id).padStart(2, '0')}
                                </span>
                                {activity.tags?.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-xs font-mono text-violet-300 bg-violet-900/30 rounded border border-violet-500/30">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tigth tracking-tight">
                                {activity.title}
                            </h1>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-gray-800 pt-6 mt-8">
                                <div className="flex items-center gap-6 text-sm text-gray-400 font-mono">
                                    <span className="flex items-center gap-2">
                                        <FaCalendarAlt className="text-violet-500" /> {activity.date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <FaUserSecret className="text-violet-500" /> Gisela Moreno
                                    </span>
                                </div>

                                <button
                                    onClick={handleExportPDF}
                                    className="group flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] font-bold tracking-wide"
                                >
                                    <FaFilePdf className="text-lg group-hover:scale-110 transition-transform" />
                                    <span>EXPORTAR PDF</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content Areas */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sidebar Table of Contents (Sticky) */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-28 space-y-8">
                            <div className="bg-[#0a0f1a]/80 backdrop-blur border border-gray-800 rounded-xl p-6">
                                <h3 className="text-violet-400 font-bold font-mono mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                                    <FaTerminal /> Index
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-400 font-mono">
                                    {['Contexto', 'Desarrollo', 'Multimedia', 'Reflexión', 'Referencias'].map((item, i) => (
                                        <li key={i} className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform flex items-center gap-2">
                                            <span className="text-violet-600">0{i + 1}.</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-violet-900/20 to-purple-900/20 border border-violet-500/10 rounded-xl p-6 text-center">
                                <FaLock className="text-3xl text-violet-500 mx-auto mb-3" />
                                <p className="text-xs text-gray-400 font-mono">
                                    Contenido verificado y asegurado bajo estándares académicos.
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* Article Body */}
                    <div className="lg:col-span-9 space-y-12">

                        {/* Introduction Section */}
                        <section className="bg-[#0a0f1a]/50 border-l-2 border-violet-500 pl-6 py-2">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-violet-500 font-mono text-lg">01.</span> Introducción Contextual
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                [Aquí se desarrollará la introducción contextual al tema, explicando la relevancia del mismo en el entorno actual de la ciberseguridad. Este apartado prepara el terreno para el análisis técnico posterior.]
                            </p>
                        </section>

                        {/* Technical Development */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-gray-800 pb-4">
                                <span className="text-violet-500 font-mono text-lg">02.</span> Desarrollo Técnico
                            </h2>
                            <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                                <div dangerouslySetInnerHTML={{ __html: activity.content }} />
                                <p className="mt-4">
                                    [Desarrollo técnico detallado de la actividad. Explicación de conceptos, metodologías aplicadas y procedimientos realizados paso a paso.]
                                </p>
                                <div className="bg-gray-900 p-4 rounded border border-gray-700 font-mono text-sm text-green-400 mt-4 overflow-x-auto">
                                    $ sudo nmap -sS -p- 192.168.1.10<br />
                                    Starting Nmap 7.92 ( https://nmap.org )<br />
                                    Nmap scan report for 192.168.1.10<br />
                                    Host is up (0.00034s latency).
                                </div>
                            </div>
                        </section>

                        {/* Multimedia */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-violet-500 font-mono text-lg">03.</span> Evidencia Multimedia
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-black/50 border border-gray-800 rounded-xl aspect-video flex flex-col items-center justify-center group cursor-pointer hover:border-violet-500/50 transition-colors">
                                    <FaNetworkWired className="text-4xl text-gray-600 group-hover:text-violet-500 transition-colors mb-2" />
                                    <span className="text-xs font-mono text-gray-500">Diagrama de Red.png</span>
                                </div>
                                <div className="bg-black/50 border border-gray-800 rounded-xl aspect-video flex flex-col items-center justify-center group cursor-pointer hover:border-violet-500/50 transition-colors">
                                    <FaDatabase className="text-4xl text-gray-600 group-hover:text-violet-500 transition-colors mb-2" />
                                    <span className="text-xs font-mono text-gray-500">Captura_Wireshark.jpg</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-3 text-center italic">
                                * Figuras ilustrativas del proceso técnico.
                            </p>
                        </section>

                        {/* Reflection */}
                        <section className="relative bg-gradient-to-r from-violet-900/10 to-transparent p-8 rounded-2xl border border-violet-500/10">
                            <FaBug className="absolute top-4 right-4 text-violet-500/10 text-6xl" />
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-violet-500 font-mono text-lg">04.</span> Reflexión Técnica
                            </h2>
                            <p className="text-gray-300 leading-relaxed italic border-l-4 border-violet-500 pl-4 py-1">
                                "[Opinión personal y reflexión técnica sobre lo aprendido. Es fundamental entender no solo el 'cómo', sino el 'por qué' de las vulnerabilidades y su impacto en la seguridad corporativa.]"
                            </p>
                        </section>

                        {/* References */}
                        <section className="border-t border-gray-800 pt-8">
                            <h2 className="text-xl font-bold text-gray-400 mb-4 flex items-center gap-3 font-mono uppercase tracking-widest">
                                <span className="text-violet-500">05.</span> Referencias Bibliográficas
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <li className="bg-[#0a0f1a] p-4 rounded border border-gray-800 flex items-start gap-3">
                                    <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-violet-500" />
                                    <span className="text-sm text-gray-400">RFC 4949 - Internet Security Glossary, Version 2.</span>
                                </li>
                                <li className="bg-[#0a0f1a] p-4 rounded border border-gray-800 flex items-start gap-3">
                                    <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-violet-500" />
                                    <span className="text-sm text-gray-400">ITU-T Recommendation X.800: Security Architecture for OSI.</span>
                                </li>
                                <li className="bg-[#0a0f1a] p-4 rounded border border-gray-800 flex items-start gap-3">
                                    <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-violet-500" />
                                    <span className="text-sm text-gray-400">OWASP Top 10 - Web Application Security Risks.</span>
                                </li>
                            </ul>
                        </section>

                    </div>
                </div>

            </article>
        </div>
    );
};

export default ActivityDetail;

import { useParams, Link } from 'react-router-dom';
import { activities } from '../data/activities';
import { FaFilePdf, FaArrowLeft } from 'react-icons/fa';

const ActivityDetail = () => {
    const { id } = useParams();
    const activity = activities.find(a => a.id === parseInt(id));

    if (!activity) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white">
                <h2 className="text-2xl mb-4">Actividad no encontrada</h2>
                <Link to="/actividades" className="text-blue-400 hover:underline">Volver al listado</Link>
            </div>
        );
    }

    const handleExportPDF = () => {
        // Placeholder for PDF export
        alert(`Exportando "${activity.title}" a PDF... (Funcionalidad simulada para MVP)`);
    };

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <article className="max-w-4xl mx-auto px-6">
                <Link to="/actividades" className="inline-flex items-center text-gray-400 hover:text-blue-400 mb-8 transition-colors">
                    <FaArrowLeft className="mr-2" /> Volver a Actividades
                </Link>

                <header className="mb-12 border-b border-gray-800 pb-8">
                    <div className="flex flex-wrap gap-3 mb-4">
                        {activity.tags?.map(tag => (
                            <span key={tag} className="px-3 py-1 text-xs font-mono text-blue-300 bg-blue-900/20 rounded-full border border-blue-500/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {activity.title}
                    </h1>
                    <div className="flex items-center justify-between flex-wrap gap-4 text-gray-400 text-sm font-mono">
                        <span>Fecha: {activity.date}</span>
                        <button
                            onClick={handleExportPDF}
                            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                            <FaFilePdf /> Exportar a PDF
                        </button>
                    </div>
                </header>

                <div className="prose prose-invert prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: activity.content }} />

                    {/* Placeholder structure as requested */}
                    <div className="mt-12 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-blue-400 mb-4 border-l-4 border-blue-500 pl-4">1. Introducción Contextual</h2>
                            <p className="text-gray-300 leading-relaxed">
                                [Aquí se desarrollará la introducción contextual al tema, explicando la relevancia del mismo en el entorno actual de la ciberseguridad.]
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-blue-400 mb-4 border-l-4 border-blue-500 pl-4">2. Desarrollo Técnico</h2>
                            <p className="text-gray-300 leading-relaxed">
                                [Desarrollo técnico detallado de la actividad. Explicación de conceptos, metodologías aplicadas y procedimientos realizados.]
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-blue-400 mb-4 border-l-4 border-blue-500 pl-4">3. Material Multimedia</h2>
                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center text-gray-500">
                                [Espacio reservado para diagramas, topologías de red, capturas de pantalla o videos demostrativos]
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-blue-400 mb-4 border-l-4 border-blue-500 pl-4">4. Reflexión Técnica</h2>
                            <p className="text-gray-300 leading-relaxed">
                                [Opinión personal y reflexión técnica sobre lo aprendido, vinculando el conocimientos con escenarios reales.]
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-blue-400 mb-4 border-l-4 border-blue-500 pl-4">5. Referencias</h2>
                            <ul className="list-disc pl-5 text-gray-400 space-y-2">
                                <li>RFC 4949 - Internet Security Glossary</li>
                                <li>X.800 - Security Architecture for OSI</li>
                                <li>OWASP Top 10</li>
                            </ul>
                        </section>
                    </div>
                </div>

            </article>
        </div>
    );
};

export default ActivityDetail;

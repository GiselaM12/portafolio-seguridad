import { useParams, Link } from 'react-router-dom';
import { activities } from '../data/activities';
import { FaFilePdf, FaArrowLeft, FaTerminal, FaShieldAlt, FaCalendarAlt, FaUserSecret } from 'react-icons/fa';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useRef, useState } from 'react';

const ActivityDetail = () => {
    const { id } = useParams();
    const activity = activities.find(a => a.id === parseInt(id));
    const contentRef = useRef(null);
    const [isExporting, setIsExporting] = useState(false);

    if (!activity) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#030712]">
                <h2 className="text-2xl mb-4 font-mono text-violet-400">ERROR 404: Actividad no encontrada</h2>
                <Link to="/actividades" className="text-gray-400 hover:text-white border-b border-violet-500 hover:border-white transition-colors">Return to Base</Link>
            </div>
        );
    }

    const handleExportPDF = async () => {
        if (!contentRef.current) return;

        setIsExporting(true);
        const element = contentRef.current;

        try {
            const canvas = await html2canvas(element, {
                scale: 2,
                backgroundColor: '#0a0f1a', // Match card background
                useCORS: true,
                logging: false,
                windowWidth: element.scrollWidth,
                windowHeight: element.scrollHeight
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4',
            });

            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            // First page
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            // Subsequent pages
            while (heightLeft > 0) {
                position -= pageHeight; // Move image up by one page height
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save(`Actividad_${activity.id}_Reporte_Completo.pdf`);
        } catch (error) {
            console.error("PDF Export failed:", error);
            alert("Hubo un error al generar el PDF. Por favor intenta de nuevo.");
        }

        setIsExporting(false);
    };

    return (
        <div className="pt-24 pb-16 min-h-screen bg-[#030712] text-gray-200">
            {/* Background Matrix Effect (Subtle) */}
            <div className="fixed inset-0 pointer-events-none opacity-5">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">

                {/* Navigation & Controls (Excluded from PDF) */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 font-mono">
                        <Link to="/" className="hover:text-violet-400 transition-colors">HOME</Link>
                        <span>/</span>
                        <Link to="/actividades" className="hover:text-violet-400 transition-colors">ACTIVIDADES</Link>
                        <span>/</span>
                        <span className="text-violet-400 truncate max-w-[200px]">{activity.title}</span>
                    </nav>

                    <button
                        onClick={handleExportPDF}
                        disabled={isExporting}
                        className="group flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] font-bold tracking-wide text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isExporting ? (
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <FaFilePdf className="text-lg group-hover:scale-110 transition-transform" />
                        )}
                        <span>{isExporting ? 'GENERANDO...' : 'EXPORTAR PDF'}</span>
                    </button>
                </div>

                {/* Content Container (Included in PDF) */}
                <article ref={contentRef} className="bg-[#0a0f1a] border border-violet-500/20 rounded-2xl overflow-hidden p-8 md:p-12 shadow-2xl relative">
                    {/* Header Strip */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600" />
                    <div className="absolute top-4 right-4 text-violet-500/5 text-9xl pointer-events-none">
                        <FaShieldAlt />
                    </div>

                    {/* Report Header */}
                    <header className="mb-10 text-center sm:text-left border-b border-gray-800 pb-8">
                        <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
                            <span className="px-3 py-1 text-xs font-mono font-bold text-black bg-violet-400 rounded">
                                ID: {String(activity.id).padStart(2, '0')}
                            </span>
                            {activity.tags?.map(tag => (
                                <span key={tag} className="px-3 py-1 text-xs font-mono text-violet-300 bg-violet-900/30 rounded border border-violet-500/30">
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
                            {activity.title}
                        </h1>

                        <div className="flex items-center justify-center sm:justify-start gap-6 text-sm text-gray-400 font-mono">
                            <span className="flex items-center gap-2">
                                <FaCalendarAlt className="text-violet-500" /> {activity.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <FaUserSecret className="text-violet-500" /> Gisela Moreno
                            </span>
                        </div>
                    </header>

                    {/* Report Content */}
                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        {/* Dynamic HTML Content */}
                        <div dangerouslySetInnerHTML={{ __html: activity.content }} />
                    </div>

                    {/* Footer / Signature */}
                    <footer className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-mono">
                        <div className="flex items-center gap-2">
                            <FaTerminal className="text-violet-500" />
                            <span>Generated by SecOps Portfolio System (v1.2 - Updated)</span>
                        </div>
                        <div className="mt-2 sm:mt-0">
                            CONFIDENTIAL // FOR ACADEMIC USE ONLY
                        </div>
                    </footer>
                </article>

            </div>
        </div>
    );
};

export default ActivityDetail;

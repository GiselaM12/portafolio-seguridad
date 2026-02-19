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

    // Custom styles for the dynamic content
    const customStyles = `
        .report-content h2 {
            color: #a78bfa; /* violet-400 */
            font-family: 'Courier New', monospace;
            font-size: 1.5rem;
            font-weight: bold;
            border-bottom: 1px solid rgba(167, 139, 250, 0.3);
            padding-bottom: 0.5rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
        }
        .report-content h2::before {
            content: '>>';
            margin-right: 10px;
            color: #8b5cf6;
        }
        .report-content p {
            margin-bottom: 1rem;
            line-height: 1.7;
            color: #d1d5db; /* gray-300 */
        }
        .report-content strong {
            color: #ffffff;
            font-weight: 600;
        }
        .report-content ul {
            list-style-type: none;
            padding-left: 0;
        }
        .report-content li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.5rem;
        }
        .report-content li::before {
            content: '>';
            position: absolute;
            left: 0;
            color: #ef4444; /* red-500 */
            font-family: monospace;
        }
        .report-content table {
            width: 100%;
            border-collapse: collapse;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
            background: rgba(0, 0, 0, 0.3);
        }
        .report-content th {
            background-color: rgba(139, 92, 246, 0.1);
            color: #c4b5fd;
            border: 1px solid #4c1d95;
            padding: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .report-content td {
            border: 1px solid #334155;
            padding: 10px;
            color: #cbd5e1;
        }
        .report-content tr:hover td {
            background-color: rgba(139, 92, 246, 0.05);
        }
    `;

    return (
        <div className="pt-24 pb-16 min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-red-900 selection:text-white">
            <style>{customStyles}</style>

            {/* Background Grid & Noise */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Top Navigation Bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-500 font-mono tracking-wider">
                        <Link to="/" className="hover:text-red-400 transition-colors">ROOT</Link>
                        <span className="text-gray-700">/</span>
                        <Link to="/actividades" className="hover:text-red-400 transition-colors">ACTIVITIES</Link>
                        <span className="text-gray-700">/</span>
                        <span className="text-red-500 truncate max-w-[200px]">CASE_{String(activity.id).padStart(3, '0')}</span>
                    </nav>

                    <button
                        onClick={handleExportPDF}
                        disabled={isExporting}
                        className="group relative px-6 py-2 bg-transparent overflow-hidden rounded border border-red-500/50 text-red-500 font-mono text-sm tracking-widest hover:text-white hover:border-red-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <div className="absolute inset-0 w-full h-full bg-red-600/0 group-hover:bg-red-600/10 transition-colors"></div>
                        <div className="relative flex items-center gap-3">
                            {isExporting ? (
                                <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <FaFilePdf className="text-lg" />
                            )}
                            <span>{isExporting ? 'ENCRYPTING...' : 'EXPORT_REPORT.PDF'}</span>
                        </div>
                    </button>
                </div>

                {/* Main Forensic Report Container */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    ref={contentRef}
                    className="relative bg-[#0a0a0a] border border-gray-800 shadow-2xl overflow-hidden"
                >
                    {/* Decorative Top Bar */}
                    <div className="h-2 bg-gradient-to-r from-red-900 via-red-600 to-red-900 w-full"></div>

                    {/* Watermark */}
                    <div className="absolute top-10 right-10 opacity-10 pointer-events-none rotate-12 border-4 border-red-500 rounded p-4">
                        <span className="text-6xl font-black text-red-500 uppercase tracking-widest">CONFIDENTIAL</span>
                    </div>

                    <div className="p-8 md:p-16 relative">
                        {/* Header Section */}
                        <header className="border-b-2 border-gray-800 pb-8 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-red-500/10 text-red-500 border border-red-500/20 px-2 py-1 text-xs font-mono rounded">
                                        INCIDENT REPORT #{String(activity.id).padStart(4, '0')}
                                    </span>
                                    <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-1 text-xs font-mono rounded flex items-center gap-1">
                                        <FaShieldAlt className="text-[10px]" /> FORENSIC ANALYSIS
                                    </span>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight uppercase font-mono">
                                    {activity.title}
                                </h1>
                                <p className="text-gray-500 font-mono text-sm max-w-2xl">
                                    {activity.description}
                                </p>
                            </div>

                            <div className="text-right font-mono text-xs text-gray-500 space-y-1 min-w-[150px]">
                                <div className="flex justify-between md:justify-end gap-4 border-b border-gray-800 pb-1">
                                    <span>DATE:</span>
                                    <span className="text-gray-300">{activity.date}</span>
                                </div>
                                <div className="flex justify-between md:justify-end gap-4 border-b border-gray-800 pb-1">
                                    <span>OFFICER:</span>
                                    <span className="text-gray-300">G. Moreno</span>
                                </div>
                                <div className="flex justify-between md:justify-end gap-4">
                                    <span>CLEARANCE:</span>
                                    <span className="text-red-500 font-bold animate-pulse">LEVEL 5</span>
                                </div>
                            </div>
                        </header>

                        {/* Content Body */}
                        <div className="report-content prose prose-invert max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: activity.content }} />
                        </div>

                        {/* Footer Section */}
                        <footer className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-600 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 border border-gray-800 flex items-center justify-center opacity-50">
                                    <FaUserSecret className="text-3xl" />
                                </div>
                                <div>
                                    <p className="uppercase tracking-widest text-gray-500">Authorized By</p>
                                    <p className="text-lg text-gray-300 font-bold font-signature">Gisela Moreno</p>
                                    <p>Chief Security Officer</p>
                                </div>
                            </div>
                            <div className="text-center md:text-right">
                                <p>SECURE TERMINAL ACCESS // ENCRYPTED SESSION</p>
                                <p className="text-[10px] mt-1 text-gray-700">ID: {Math.random().toString(36).substring(7).toUpperCase()}</p>
                            </div>
                        </footer>
                    </div>
                </motion.article>
            </div>
        </div>
    );
};

export default ActivityDetail;

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { activities } from '../data/activities';
import { FaArrowLeft, FaTerminal, FaFilePdf, FaLock, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PdfViewerPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const activity = activities.find(a => String(a.id) === String(id));

    if (!activity) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#030712]">
                <h2 className="text-2xl mb-4 font-mono text-violet-400">ERROR 404: Documento no encontrado</h2>
                <button onClick={() => navigate('/')} className="text-gray-400 hover:text-white border-b border-violet-500 hover:border-white transition-colors font-mono text-xs">
                    REGRESAR AL INICIO
                </button>
            </div>
        );
    }

    const getFileUrl = (id) => {
        const fileMap = {
            1: "parcial1/Act01_Equipo1.pdf",
            2: "parcial1/176522-ACT02.pdf",
            3: "parcial1/176522-ACT03.pdf",
            4: "parcial1/1765222-act04.pdf",
            5: "parcial1/176522_Act 5.pdf",
            6: "parcial1/176522-ACT6.pdf",
            "PR02": "PR02.pdf",
            8: "parcial2/act08-Equipo1.pdf",
            9: "parcial2/act09-Equipo1.pdf",
            16: "parcial3/act16-Equipo1.pdf",
            17: "parcial3/act17-Equipo1.pdf",
            18: "parcial3/act18-Equipo1.pdf"
        };
        const fileName = fileMap[id];
        const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
        return fileName ? `${baseUrl}${fileName}` : null;
    };

    const fileUrl = getFileUrl(activity.id);

    return (
        <div className="pt-24 pb-8 min-h-screen bg-[#050508] text-gray-200 font-sans relative">
            
            {/* Background Grid */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#080f25]/10 via-transparent to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col h-[calc(100vh-120px)]">
                
                {/* Header Controls */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 flex-shrink-0">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate(`/actividades/${activity.id}`)}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-900/60 hover:bg-gray-800 border border-gray-800 text-gray-400 hover:text-white rounded-xl transition-all text-xs font-mono"
                        >
                            <FaArrowLeft />
                            <span>REGRESAR AL CASO</span>
                        </button>
                        <div>
                            <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest block font-bold">
                                VISUALIZADOR DE EXPEDIENTES OFICIALES
                            </span>
                            <h2 className="text-white font-mono font-bold text-sm tracking-tight truncate max-w-[300px] md:max-w-md">
                                {activity.title}
                            </h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <a
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 rounded-xl transition-all text-xs font-mono w-full sm:w-auto"
                        >
                            <FaExternalLinkAlt className="text-[10px]" />
                            <span>ABRIR EN PESTAÑA APARTE</span>
                        </a>
                    </div>
                </div>

                {/* PDF Frame Container */}
                <div 
                    className="flex-grow bg-black/40 border border-cyan-500/20 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col"
                >
                    <div className="bg-[#081222]/90 border-b border-cyan-500/10 px-4 py-2.5 flex items-center justify-between flex-shrink-0 font-mono text-[10px] text-cyan-400/80">
                        <div className="flex items-center gap-2">
                            <FaTerminal className="animate-pulse" />
                            <span>PDF_STREAM_READER // ACCESS_AUTHORIZED</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span>CLEARANCE_LVL_5</span>
                            <FaLock className="text-cyan-500" />
                        </div>
                    </div>
                    
                    {fileUrl ? (
                        <iframe
                            src={`${fileUrl}#toolbar=1&navpanes=1`}
                            title={activity.title}
                            className="w-full h-full border-none flex-grow bg-white"
                        />
                    ) : (
                        <div className="flex-grow flex flex-col items-center justify-center text-center p-8 bg-black/60">
                            <FaFilePdf className="text-red-500/40 text-5xl mb-4" />
                            <h3 className="font-mono text-white text-sm font-bold">ARCHIVO NO DISPONIBLE</h3>
                            <p className="text-gray-500 text-[11px] font-mono mt-1.5 max-w-xs">
                                El archivo correspondiente no ha sido localizado en el repositorio de assets.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default PdfViewerPage;

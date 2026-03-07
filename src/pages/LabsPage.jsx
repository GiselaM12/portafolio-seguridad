import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaTerminal } from 'react-icons/fa';
import SQLInjectionLabs from '../components/SQLInjectionLabs';

const LabsPage = () => {
    // Make sure we start at the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <div className="flex items-center gap-4 mb-6">
                    <Link
                        to="/actividades/8"
                        className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-mono text-sm uppercase tracking-widest bg-green-900/10 px-4 py-2 border border-green-500/30 rounded-full hover:bg-green-900/20"
                    >
                        <FaArrowLeft /> Volver al Reporte
                    </Link>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-white font-mono tracking-tight flex items-center gap-4 mb-4">
                    <span className="text-green-500"><FaTerminal /></span>
                    Laboratorios: <span className="text-gray-400 font-light">SQL Injection</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-3xl border-l-4 border-green-500 pl-4 py-2 bg-gradient-to-r from-green-900/20 to-transparent">
                    Entorno interactivo para analizar, explotar y comprender 18 escenarios diferentes de inyección SQL a través de la academia PortSwigger.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <SQLInjectionLabs />
            </motion.div>
        </div>
    );
};

export default LabsPage;

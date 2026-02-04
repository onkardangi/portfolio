import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030014] to-[#030014]">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse" />

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8"
                >
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                    <img
                        src="/assets/Onkar.JPG"
                        alt="Onkar Dangi"
                        className="relative w-full h-full object-cover rounded-full border-2 border-white/10 shadow-2xl"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-blue-400 font-medium tracking-wider uppercase mb-4 block">
                        Welcome to my portfolio
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Onkar Dangi</span>
                    </h1>
                    <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                        Full Stack Developer | Backend Specialist
                    </p>
                    <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                        Building scalable, high-performance web applications with modern technologies.
                        Passionate about clean code and exceptional user experiences.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a
                            href="/assets/Onkar_Dangi_Full_Stack.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg shadow-blue-500/30"
                        >
                            View Full Stack Resume
                        </a>
                        <a
                            href="/assets/Onkar_Dangi_Backend.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 rounded-full border border-blue-500/50 hover:bg-blue-500/10 text-blue-400 hover:text-white font-semibold transition-all block"
                        >
                            View Backend Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

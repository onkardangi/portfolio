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
                        src="/assets/Onkar_optimized.jpg"
                        alt="Onkar Dangi"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        className="relative w-full h-full object-cover rounded-full border-2 border-white/10 shadow-2xl"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-blue-400 font-medium tracking-wider uppercase mb-4 block">
                        Backend-focused software engineer
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Onkar Dangi</span>
                    </h1>
                    <p className="text-gray-300 text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
                        I build reliable distributed systems, payment platforms, and full-stack products.
                    </p>
                    <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                        Experienced with Java, Spring Boot, Node.js, AWS, and modern frontend technologies,
                        with a focus on correctness, scalability, and production reliability.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-12 text-sm text-gray-300">
                        <span className="glass rounded-full px-4 py-2">Enterprise fintech experience</span>
                        <span className="glass rounded-full px-4 py-2">$1M+ annual revenue impact</span>
                        <span className="glass rounded-full px-4 py-2">MS in Computer Science · UIC</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/assets/Onkar_Dangi_Resume.pdf"
                            download
                            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg shadow-blue-500/30 inline-flex items-center justify-center gap-2"
                        >
                            Download Resume
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0 4-4m-4 4-4-4M5 20h14" />
                            </svg>
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full border border-blue-500/50 hover:bg-blue-500/10 text-blue-400 hover:text-white font-semibold transition-all inline-flex items-center justify-center"
                        >
                            View Projects
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-5 mt-7">
                        <a
                            href="https://www.linkedin.com/in/onkar-dangi"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View Onkar Dangi on LinkedIn"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.1 20.45H3.54V8.98H7.1v11.47ZM22.22 0H1.78C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/onkardangi"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View Onkar Dangi on GitHub"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.78.82-4.58-1.6-4.58-1.6-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02 0 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.3c0 .32.19.69.8.57A12 12 0 0 0 12 0Z" />
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

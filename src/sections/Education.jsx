import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-[#030014]">
            <div className="max-w-screen-xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-colors"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg className="w-24 h-24 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">Master of Science</h3>
                        <p className="text-blue-400 font-medium mb-4">Computer Science</p>
                        <div className="flex justify-between items-center text-gray-400 text-sm mb-4">
                            <span>University of Illinois Chicago</span>
                            <span>Jan 2025 - May 2026</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Focusing on advanced systems, distributed computing, and large-scale software architecture.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-purple-500/30 transition-colors"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg className="w-24 h-24 text-purple-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">Bachelor of Science</h3>
                        <p className="text-purple-400 font-medium mb-4">Computer Science</p>
                        <div className="flex justify-between items-center text-gray-400 text-sm mb-4">
                            <span>University of Illinois Chicago</span>
                            <span>Aug 2017 - Dec 2021</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Built strong foundations in algorithms, data structures, and software engineering principles.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;

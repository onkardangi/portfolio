import React from 'react';
import { motion } from 'framer-motion';

const Interests = () => {
    return (
        <section id="interests" className="py-20 bg-[#0a0a0a]">
            <div className="max-w-screen-xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Beyond Work</h2>
                    <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-4">When I'm not working on solving problems, you can find me here.</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {/* Weightlifting */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="glass p-6 rounded-xl text-center hover:bg-white/5 transition-colors group"
                    >
                        <div className="w-14 h-14 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57l1.43 1.43L2 13.43L3.43 14.86L2 16.29L4.14 18.43l1.43-1.43l1.43 1.43l1.43-1.43l8.57 8.57L20.57 22L22 20.57L20.57 19.14L22 17.71L20.57 16.29L22 14.86zM5.57 16.29l-1.43-1.43L5.57 13.43L7 14.86L5.57 16.29zM5.57 10.57L4.14 9.14L5.57 7.71L7 9.14L5.57 10.57zM7.71 13.43L9.14 12L12 14.86L10.57 16.29L7.71 13.43zM10.57 7.71L12 9.14L14.86 6.29L13.43 4.86L10.57 7.71zM13.43 19.14l1.43-1.43l1.43 1.43l-1.43 1.43L13.43 19.14zM16.29 16.29l1.43-1.43l1.43 1.43l-1.43 1.43L16.29 16.29z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16M4 12h16" />
                            </svg>
                        </div>
                        <h4 className="text-white font-medium">Weightlifting</h4>
                    </motion.div>

                    {/* Tennis */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass p-6 rounded-xl text-center hover:bg-white/5 transition-colors group"
                    >
                        <div className="w-14 h-14 mx-auto bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <circle cx="12" cy="12" r="9" strokeWidth="2" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9M3 12a9 9 0 0118 0" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-3 3-3-3" />
                            </svg>
                        </div>
                        <h4 className="text-white font-medium">Tennis</h4>
                    </motion.div>

                    {/* Soccer */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="glass p-6 rounded-xl text-center hover:bg-white/5 transition-colors group"
                    >
                        <div className="w-14 h-14 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 00-7.07 17.07l2.12-2.12a7 7 0 010-9.9l-2.12-2.12A10 10 0 0012 2z" />
                                <path d="M8 8l4 2 4-2-2 4-4 0-2-4z" fill="currentColor" opacity="0.4" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12l-2 4h4l-2-4z" />
                            </svg>
                        </div>
                        <h4 className="text-white font-medium">Soccer</h4>
                    </motion.div>

                    {/* Biking */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="glass p-6 rounded-xl text-center hover:bg-white/5 transition-colors group"
                    >
                        <div className="w-14 h-14 mx-auto bg-orange-500/10 rounded-full flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M15.5 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 13.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm14 0a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm-8.2-1.7l1.7-6.3h-3a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .48.64l-1.6 6h2.9l1.6-4h-1a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .46.69l-3 7.5a.5.5 0 1 1-.92-.38l2.6-6.5h-3.3l-1.7 5.2a3.5 3.5 0 0 1-6.5-1.9l.4-1.2h4.8z" />
                            </svg>
                        </div>
                        <h4 className="text-white font-medium">Biking</h4>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Interests;

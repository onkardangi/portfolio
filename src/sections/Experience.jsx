import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-[#030014]">
            <div className="max-w-screen-xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative border-l border-gray-700 ml-4 md:ml-10 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-12"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#030014]"></div>
                        <h3 className="text-xl font-bold text-white">Software Engineer</h3>
                        <span className="text-blue-400 font-medium text-sm block mb-2">Oct 2022 - Sep 2024 | Bectran, Inc.</span>
                        <ul className="list-disc list-outside text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl ml-4 space-y-2">
                            <li>Built backend services for enterprise fintech workflows (credit, payments, identity) using Java & Spring Boot.</li>
                            <li>Engineered 20+ scaling REST APIs handling bulk loads of 10K+ records, reducing latency by 30%.</li>
                            <li>Built a multi-entity payment system generating $1M+ in annual revenue and enabling 1000+ business units.</li>
                            <li>Refactored legacy apps to JDK 17 & AWS S3, cutting page transition times from 8 mins to &lt;1 sec.</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-12"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#030014]"></div>
                        <h3 className="text-xl font-bold text-white">Associate Software Engineer</h3>
                        <span className="text-blue-400 font-medium text-sm block mb-2">Mar 2022 - Oct 2022 | Bectran, Inc.</span>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                            Contributed to core backend services and assisted in the migration of legacy systems to modern architecture.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-12"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#030014]"></div>
                        <h3 className="text-xl font-bold text-white">Software Engineer Intern</h3>
                        <span className="text-blue-400 font-medium text-sm block mb-2">Jun 2021 - Aug 2021 | CSC</span>
                        <ul className="list-disc list-outside text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl ml-4 space-y-2">
                            <li>Implemented full-stack enhancements to the Email Service (Spring Boot microservice & UI).</li>
                            <li>Enabled clients to send emails via multiple providers with delivery tracking and retry logic.</li>
                            <li>Worked across the full stack (Java, SQL, Thymeleaf, jQuery) to improve customer experience.</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-12"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#030014]"></div>
                        <h3 className="text-xl font-bold text-white">Overseas Marketing Manager</h3>
                        <span className="text-blue-400 font-medium text-sm block mb-2">May 2021 - Aug 2021 | Tribal Art India</span>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                            Expanded market for tribal paintings to overseas locations, supporting artist livelihoods and business development in North America.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

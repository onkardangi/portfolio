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
                        <h3 className="text-xl font-bold text-white">Software Engineer II</h3>
                        <span className="text-blue-400 font-medium text-sm block mb-2">Feb 2022 - Sep 2024 | Bectran, Inc.</span>
                        <ul className="list-disc list-outside text-gray-400 text-sm md:text-base leading-relaxed ml-4 space-y-2">
                            <li>Reduced a database-heavy credit workflow from 8 minutes to 1 second—a 480× improvement—through Redis caching and query restructuring.</li>
                            <li>Designed a multi-entity payment consolidation system processing more than $1M monthly with 99.9% uptime, including idempotency, partial-failure recovery, CyberSource, and ACH integrations.</li>
                            <li>Built a CRM-facing REST API processing 100K credit applications monthly and reducing submission time by 37% while eliminating duplicate data entry.</li>
                            <li>Re-architected synchronous ingestion into ActiveMQ-backed asynchronous bulk processing, increasing throughput to 1.5 million records monthly.</li>
                            <li>Led the modernization of 40+ legacy services to JDK 17 and AWS S3, reducing infrastructure costs by 25% and improving cloud readiness.</li>
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
                        <h3 className="text-xl font-bold text-white">Software Engineer Intern</h3>
                        <span className="text-blue-400 font-medium text-sm block mb-2">Jun 2021 - Aug 2021 | Corporation Service Company</span>
                        <ul className="list-disc list-outside text-gray-400 text-sm md:text-base leading-relaxed ml-4 space-y-2">
                            <li>Built full-stack features for an internal email platform, providing one integration point for multiple providers with delivery tracking and retry logic.</li>
                            <li>Owned independent stories end to end across Java, Spring Boot, SQL, Thymeleaf, and jQuery.</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

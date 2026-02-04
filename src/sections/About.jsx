import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EducationCard = ({ date, degree, major, school, coursework, skills, activities, colorClass, borderClass, bgClass }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            onClick={() => setIsOpen(!isOpen)}
            className={`glass p-6 rounded-xl border-l-4 ${borderClass} ${bgClass} cursor-pointer group transition-all`}
        >
            <motion.div layout className="flex justify-between items-start">
                <div>
                    <span className={`${colorClass} text-sm font-semibold tracking-wide block mb-1`}>{date}</span>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">{degree}</h4>
                    <p className="text-gray-300 font-medium">{major}</p>
                    <p className="text-gray-500 text-sm mt-1">{school}</p>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className={`p-2 rounded-full bg-white/5 text-gray-400 group-hover:text-white transition-colors`}
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-6 border-t border-white/10 mt-6 space-y-4">
                            <div>
                                <h5 className="text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Selected Coursework</h5>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {coursework}
                                </p>
                            </div>

                            {skills && (
                                <div>
                                    <h5 className="text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Skills</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill, idx) => (
                                            <span key={idx} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400 border border-white/5">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activities && (
                                <div>
                                    <h5 className="text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Activities</h5>
                                    <p className="text-gray-400 text-sm">
                                        {activities}
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const About = () => {
    return (
        <section id="about" className="py-20 bg-[#0a0a0a] relative">
            <div className="max-w-screen-xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="sticky top-24"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">Who I am</h3>
                        <div className="glass p-8 rounded-2xl">
                            <div className="space-y-4 text-gray-300 leading-relaxed text-left">
                                <p>
                                    I didn’t get into software for buzzwords. I got into it because I love understanding how things work and fixing them when they don’t. My early work close to real systems where failed payments meant money didn’t move taught me that reliability matters far more than clever code.
                                </p>
                                <p>
                                    At <strong>Bectran</strong>, I worked on backend systems handling high-volume ingestion and multi-entity payments. I focused on recovering gracefully from edge cases like timeouts and duplicate submissions. My best work was often invisible, making the platform faster, safer, and easier to trust.
                                </p>
                                <p>
                                    Currently pursuing my <strong>Master’s at UIC</strong>, I enjoy digging into distributed systems, memory models, and large-scale architecture. I bridge the gap between theory and practice, building systems where correctness, scale, and real-world impact matter.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
                        <div className="space-y-6">
                            <EducationCard
                                date="Jan 2025 - May 2026"
                                degree="Master of Science"
                                major="Computer Science"
                                school="University of Illinois Chicago"
                                coursework="Intro to Machine Learning, Networking, Software Engineering II, Advanced Topics in Concurrent Computing Systems, Cryptography, Object Oriented Design, Distributed Computing Systems, Advanced Machine Learning, Advanced Topics in Software Engineering"
                                skills={["Agile Methodologies", "Pandas", "Distributed Systems", "Stripe", "Machine Learning", "Next.js", "Git", "OOP", "TDD", "React.js", "TensorFlow", "PostgreSQL", "Ruby", "Python", "Prisma ORM", "C++"]}
                                colorClass="text-blue-400"
                                borderClass="border-blue-500"
                                bgClass="bg-blue-500/5 hover:bg-blue-500/10"
                            />

                            <EducationCard
                                date="Aug 2017 - Dec 2021"
                                degree="Bachelor of Science"
                                major="Computer Science"
                                school="University of Illinois Chicago"
                                coursework="Data Structures, Software Design, Computer Design, Computer Algorithms, Artificial Intelligence, User Interface Design and Programming, Software Engineering, Software Development for Mobile Platforms, Database Systems, Introduction to Data Science"
                                skills={["Java", "C++", "Python", "SQL", "Algorithms", "Data Structures", "Software Design", "Mobile Development"]}
                                activities="Delta Epsilon Psi"
                                colorClass="text-purple-400"
                                borderClass="border-purple-500"
                                bgClass="bg-purple-500/5 hover:bg-purple-500/10"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

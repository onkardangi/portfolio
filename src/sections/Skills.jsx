import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        {
            category: "Languages",
            items: ["Java", "JavaScript (ES6+)", "Python", "SQL", "C/C++"]
        },
        {
            category: "Frontend",
            items: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS"]
        },
        {
            category: "Backend",
            items: ["Spring Boot", "Node.js", "REST APIs", "Microservices", "gRPC", "GraphQL"]
        },
        {
            category: "Databases",
            items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
        },
        {
            category: "Cloud and DevOps",
            items: ["AWS (S3, EC2)", "Azure", "Docker", "CI/CD"]
        },
        {
            category: "Messaging and Systems",
            items: ["Kafka", "ActiveMQ", "Distributed Systems", "System Design", "Concurrency"]
        },
        {
            category: "Machine Learning",
            items: [
                "Python ML Stack",
                "TensorFlow",
                "Deep Learning",
                "CNNs",
                "Data Preprocessing",
                "Model Evaluation"
            ]
        },
        {
            category: "Quality and Tools",
            items: ["Git", "Testing (Unit and Integration)", "TDD", "Agile"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-[#030014] relative overflow-hidden">
            {/* Background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-2 inline-block">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 rounded-lg text-sm transition-all hover:scale-105 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

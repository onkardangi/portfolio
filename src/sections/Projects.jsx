import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "Patient Management Platform",
            date: "2026 - Present",
            description: "Designing an enterprise-level hospital management microservices platform. Features secure patient records, billing, and analytics. Implementing REST, gRPC, and Kafka for inter-service communication with JWT auth and centralized error handling. Infrastructure managed via Docker and AWS IaC.",
            tags: ["Microservices", "gRPC", "Kafka", "AWS", "Docker", "Java"],
            classes: {
                title: "text-teal-400",
                gradient: "from-teal-600 to-teal-400",
                border: "hover:border-teal-500/30",
                tag: "bg-teal-500/10 text-teal-400 border-teal-500/10"
            }
        },
        {
            title: "C++ vs Java Memory Models",
            date: "Oct 2025 - Dec 2025",
            description: "Comparative study of C++11 and Java Memory Models using litmus tests. Modeled concurrent behavior under weak memory semantics using CppMem and JCStress. Validated SC-DRF guarantees and analyzed execution patterns like Store Buffering and IRIW.",
            tags: ["C++", "Java", "Concurrency", "CppMem", "Research"],
            classes: {
                title: "text-blue-400",
                gradient: "from-blue-600 to-blue-400",
                border: "hover:border-blue-500/30",
                tag: "bg-blue-500/10 text-blue-400 border-blue-500/10"
            }
        },
        {
            title: "TrackQ — Fitness Platform",
            date: "2025",
            description: "End-to-end B2B2C wellness platform supporting 1K+ concurrent sessions. Features React Native dashboards, Node.js backend, and a thread-safe booking system. Integrated complex Stripe payment flows (refunds, splits) and ensured PCI compliance.",
            tags: ["Node.js", "React Native", "Stripe", "PostgreSQL", "Full Stack"],
            classes: {
                title: "text-rose-400",
                gradient: "from-rose-600 to-rose-400",
                border: "hover:border-rose-500/30",
                tag: "bg-rose-500/10 text-rose-400 border-rose-500/10"
            }
        },
        {
            title: "Alzheimer’s Disease Detection",
            date: "Apr 2025 - May 2025",
            description: "Developed a binary classifier using MRI scans (OASIS-3 dataset) achieving 94.5% accuracy. Leveraged ResNet18 and custom CNNs, addressing class imbalance with synthetic data generation (diffusion models). Optimized with dropout and batch normalization.",
            tags: ["Python", "TensorFlow", "Deep Learning", "CNN", "Pandas"],
            classes: {
                title: "text-purple-400",
                gradient: "from-purple-600 to-purple-400",
                border: "hover:border-purple-500/30",
                tag: "bg-purple-500/10 text-purple-400 border-purple-500/10"
            }
        },
        {
            title: "Oceansweep",
            date: "Feb 2025 - May 2025",
            description: "Full-stack ocean conservation platform using Next.js and Prisma. Enables pollution reporting, interactive event maps, and donation flows. Integrated Cloudinary for media and implemented real-time user engagement dashboards.",
            tags: ["Next.js", "React", "PostgreSQL", "Prisma", "Stripe"],
            link: "https://github.com/onkardangi/OceanSweep",
            classes: {
                title: "text-green-400",
                gradient: "from-green-600 to-green-400",
                border: "hover:border-green-500/30",
                tag: "bg-green-500/10 text-green-400 border-green-500/10"
            }
        }
    ];

    return (
        <section id="projects" className="py-20 bg-[#0a0a0a]">
            <div className="max-w-screen-xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-4">Research and development work in Systems, AI, and Web.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`glass rounded-xl overflow-hidden group cursor-pointer border border-white/5 transition-all ${project.classes.border}`}
                        >
                            <div className={`h-2 bg-gradient-to-r ${project.classes.gradient}`}></div>
                            <div className="p-8 flex flex-col h-full">
                                <span className={`${project.classes.title} text-xs font-bold tracking-wider uppercase mb-2 block`}>
                                    {project.date}
                                </span>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        </a>
                                    )}
                                </div>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-4 hover:line-clamp-none transition-all">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className={`px-3 py-1 rounded-full text-xs font-medium border ${project.classes.tag}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

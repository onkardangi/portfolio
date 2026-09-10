import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Projects = () => {
    const [expandedProject, setExpandedProject] = useState(null);
    const projects = [
        {
            title: "ClipJob",
            featured: true,
            date: "2026 - Present",
            description: "macOS-first desktop utility that lets job seekers save, search, and paste reusable application answers from a keyboard-driven palette. Built with C# and Avalonia UI, with SQLite persistence, configurable global shortcuts, native macOS integration, clipboard restoration, and tested paste-back workflows.",
            caseStudy: {
                problem: "Job applications repeatedly ask for the same detailed information, forcing candidates to search through resumes and old forms.",
                ownership: "Designed and built the desktop product end to end, including its UI, local data model, native macOS integrations, tests, packaging, and release workflow.",
                engineering: "Restores the previously focused application, performs a synthetic paste, then safely restores the user’s original clipboard while keeping platform behavior behind focused interfaces.",
                outcome: "Shipped a self-contained Apple Silicon preview with SQLite persistence, configurable shortcuts, keyboard-first workflows, and automated coverage of core behavior."
            },
            architecture: ["Global Shortcut", "Search Palette", "Paste Workflow", "SQLite"],
            proofLinks: [
                { label: "Source code", href: "https://github.com/onkardangi/ClipJob" },
                { label: "Download preview", href: "https://github.com/onkardangi/ClipJob/releases" }
            ],
            tags: ["C#", ".NET 10", "Avalonia UI", "SQLite", "macOS", "xUnit"],
            link: "https://github.com/onkardangi/ClipJob",
            classes: {
                title: "text-amber-400",
                gradient: "from-amber-600 to-orange-400",
                border: "hover:border-amber-500/30",
                tag: "bg-amber-500/10 text-amber-400 border-amber-500/10"
            }
        },
        {
            title: "QueryMind",
            featured: true,
            date: "2026",
            description: "Natural-language database explorer that turns plain-English questions into safe PostgreSQL queries, results, charts, and explanations.",
            caseStudy: {
                problem: "Non-technical users need answers from operational data but often depend on engineers to understand schemas and write one-off SQL.",
                ownership: "Built the Kotlin/Spring Boot API, React client, authentication, database-connection workflow, schema introspection, Claude integration, visualizations, and automated tests.",
                engineering: "Uses application-level SQL validation plus read-only database pools, relevance-scores schemas with 40+ tables to control context size, and encrypts stored credentials with AES-256-GCM.",
                outcome: "Delivered an end-to-end PostgreSQL analytics workflow that generates SQL, executes approved read-only queries, and automatically selects useful chart visualizations."
            },
            architecture: ["React Client", "Spring Boot API", "Claude API", "PostgreSQL"],
            proofLinks: [
                { label: "Source code", href: "https://github.com/onkardangi/QueryMind" }
            ],
            tags: ["Kotlin", "Spring Boot", "React", "Claude API", "PostgreSQL", "Docker"],
            link: "https://github.com/onkardangi/QueryMind",
            classes: {
                title: "text-indigo-400",
                gradient: "from-indigo-600 to-violet-400",
                border: "hover:border-indigo-500/30",
                tag: "bg-indigo-500/10 text-indigo-400 border-indigo-500/10"
            }
        },
        {
            title: "Patient Management Platform",
            featured: true,
            date: "2026 - Present",
            description: "Java microservices project that manages patient records, creates billing accounts over gRPC, and publishes patient events through Kafka.",
            caseStudy: {
                problem: "Patient record changes must coordinate with downstream billing and event consumers without coupling every responsibility into one service.",
                ownership: "Built the patient and billing services, REST endpoints, validation and error handling, persistence layer, gRPC contract and client, Kafka producer, tests, and container definitions.",
                engineering: "Uses synchronous gRPC when patient creation requires an immediate billing account and Kafka events for asynchronous downstream processing.",
                outcome: "Produced a working two-service foundation demonstrating REST CRUD, service-to-service gRPC, event publication, database persistence, and Docker packaging."
            },
            architecture: ["REST API", "Patient Service", "gRPC Billing", "Kafka Events"],
            proofLinks: [
                { label: "Source code", href: "https://github.com/onkardangi/patient-management" }
            ],
            tags: ["Java", "Spring Boot", "REST", "gRPC", "Kafka", "Docker"],
            link: "https://github.com/onkardangi/patient-management",
            classes: {
                title: "text-teal-400",
                gradient: "from-teal-600 to-teal-400",
                border: "hover:border-teal-500/30",
                tag: "bg-teal-500/10 text-teal-400 border-teal-500/10"
            }
        },
        {
            title: "NetGameSim Akka Simulator",
            featured: true,
            date: "2026",
            description: "Distributed graph simulator built on Akka Classic, modeling each graph node as an actor and enforcing message types across graph edges. Supports NetGameSim JSON inputs, configurable traffic distributions, repeatable experiments, metrics output, and pluggable Lai–Yang snapshot and tree leader-election algorithms.",
            caseStudy: {
                problem: "Distributed algorithms are difficult to study when topology, message constraints, workloads, and experiment results are coupled to one implementation.",
                ownership: "Designed the multi-project simulation architecture, graph-enrichment model, Akka runtime, algorithm interface, CLI, experiment profiles, metrics, and test suite.",
                engineering: "Maps every graph node to an independent actor, enforces edge-level message rules, and runs pluggable Lai–Yang snapshot and tree leader-election algorithms over the same substrate.",
                outcome: "Delivered reproducible file-driven and interactive simulations with seeded workloads, structured metrics, bundled experiment profiles, and automated algorithm and routing tests."
            },
            architecture: ["Graph JSON", "Actor Runtime", "Algorithms", "Metrics"],
            proofLinks: [
                { label: "Source code", href: "https://github.com/onkardangi/netgamesim-akka-sim" },
                { label: "Watch demo", href: "https://youtu.be/-F2ZuVzfGS8" }
            ],
            tags: ["Scala 3", "Akka", "Actor Model", "Distributed Systems", "SBT", "ScalaTest"],
            link: "https://github.com/onkardangi/netgamesim-akka-sim",
            classes: {
                title: "text-cyan-400",
                gradient: "from-cyan-600 to-blue-400",
                border: "hover:border-cyan-500/30",
                tag: "bg-cyan-500/10 text-cyan-400 border-cyan-500/10"
            }
        },
        {
            title: "C++ vs Java Memory Models",
            date: "Oct 2025 - Dec 2025",
            description: "Research project comparing the C++11 memory model and Java Memory Model using litmus tests and real execution data. Implemented equivalent tests in CppMem and JCStress with VarHandles to validate release and acquire behavior. Documented where outcomes match, what is forbidden, and why weak-memory anomalies still appear.",
            tags: ["C++", "Java", "Concurrency", "CppMem", "Research"],
            link: "/assets/C++ vs Java_ The Fence-Off report.pdf",
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
            description: "B2B2C wellness booking and payments platform for gyms and trainers, built end to end. Implemented a Node.js backend and React Native client with concurrency-safe booking flows supporting 1K+ concurrent sessions. Added Stripe payments including refunds, split payments, and subscriptions with accurate accounting across entities.",
            caseStudy: {
                problem: "Gyms and trainers need one system to manage availability, prevent booking conflicts, and reconcile complex payments across multiple parties.",
                ownership: "Built the Node.js backend and React Native client end to end, covering booking, user workflows, subscriptions, refunds, and multi-entity payment accounting.",
                engineering: "Designed concurrency-safe reservation flows and Stripe payment paths for refunds, split payments, and subscriptions while preserving accurate ownership of funds.",
                outcome: "Created a B2B2C platform designed to support more than 1,000 concurrent sessions without overselling limited booking inventory."
            },
            architecture: ["React Native", "Node.js API", "PostgreSQL", "Stripe"],
            proofLinks: [],
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
            link: "/assets/Alzheimer detection report.pdf",
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
            description: "Web platform that turns ocean cleanup into an interactive product, not a static site. Built Next.js + Postgres + Prisma with event discovery, RSVP, comments, and donation flows plus user dashboards. Integrated Cloudinary for uploads and optimized the UX over three release cycles with seeded data and stakeholder demos.",
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
    const flagshipProjects = projects.filter((project) => project.featured);
    const additionalProjects = projects.filter((project) => !project.featured);

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
                    <p className="text-gray-400 mt-4">Backend and full stack projects focused on distributed systems, payments, and production-grade APIs.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {flagshipProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            whileHover={{ y: -6 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`glass rounded-xl overflow-hidden group border border-white/5 transition-all ${project.classes.border}`}
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
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`} className="text-gray-400 hover:text-white transition-colors">
                                            {project.link.endsWith('.pdf') ? (
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                            )}
                                        </a>
                                    )}
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                <div className="mb-6 rounded-xl bg-black/20 border border-white/5 p-4">
                                    <span className="text-gray-500 text-[11px] font-bold tracking-wider uppercase block mb-3">
                                        Architecture
                                    </span>
                                    <div className="flex flex-wrap items-center gap-2" aria-label={`${project.title} architecture flow`}>
                                        {project.architecture.map((step, stepIndex) => (
                                            <React.Fragment key={step}>
                                                <span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
                                                    {step}
                                                </span>
                                                {stepIndex < project.architecture.length - 1 && (
                                                    <svg className="w-3.5 h-3.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
                                                    </svg>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
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
                                {project.proofLinks.length > 0 && (
                                    <div className="flex flex-wrap gap-3 mt-6 pt-5 border-t border-white/10">
                                        {project.proofLinks.map((proof) => (
                                            <a
                                                key={proof.href}
                                                href={proof.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`${project.classes.title} text-sm font-semibold inline-flex items-center gap-1.5 hover:text-white transition-colors`}
                                            >
                                                {proof.label}
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17 17 7M7 7h10v10" />
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                )}
                                <button
                                    type="button"
                                    onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                                    aria-expanded={expandedProject === project.title}
                                    aria-controls={`case-study-${index}`}
                                    className="mt-5 pt-5 border-t border-white/10 w-full flex items-center justify-between text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                                >
                                    <span>{expandedProject === project.title ? 'Hide case study' : 'View case study'}</span>
                                    <motion.svg
                                        animate={{ rotate: expandedProject === project.title ? 180 : 0 }}
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
                                    </motion.svg>
                                </button>
                                <AnimatePresence initial={false}>
                                    {expandedProject === project.title && (
                                        <motion.div
                                            id={`case-study-${index}`}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="grid gap-4 pt-5">
                                                {Object.entries(project.caseStudy).map(([label, detail]) => (
                                                    <div key={label} className="border-l border-white/10 pl-4">
                                                        <span className={`${project.classes.title} text-[11px] font-bold tracking-wider uppercase block mb-1`}>
                                                            {label}
                                                        </span>
                                                        <p className="text-gray-400 text-sm leading-relaxed">{detail}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
                        <div>
                            <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase block mb-2">
                                More projects
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Additional Work</h3>
                        </div>
                        <p className="text-gray-500 text-sm">Research, machine learning, and full-stack work</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {additionalProjects.map((project, index) => (
                            <motion.article
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className={`glass rounded-xl p-6 border border-white/5 transition-colors ${project.classes.border}`}
                            >
                                <span className={`${project.classes.title} text-xs font-bold tracking-wider uppercase block mb-2`}>
                                    {project.date}
                                </span>
                                <h4 className="text-lg font-bold text-white mb-3">{project.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tags.slice(0, 4).map((tag) => (
                                        <span
                                            key={tag}
                                            className={`px-2.5 py-1 rounded-full text-xs font-medium border ${project.classes.tag}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                                    >
                                        {project.link.endsWith('.pdf') ? 'Read report' : 'View source'}
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17 17 7m0 0H9m8 0v8" />
                                        </svg>
                                    </a>
                                )}
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

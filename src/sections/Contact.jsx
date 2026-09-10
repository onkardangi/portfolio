import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const contactLinks = [
        {
            label: "Email",
            value: "onkardangi7@gmail.com",
            href: "mailto:onkardangi7@gmail.com",
            color: "text-blue-400",
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/onkar-dangi",
            href: "https://www.linkedin.com/in/onkar-dangi",
            color: "text-sky-400",
        },
        {
            label: "GitHub",
            value: "github.com/onkardangi",
            href: "https://github.com/onkardangi",
            color: "text-purple-400",
        },
    ];

    return (
        <section id="contact" className="py-20 bg-[#0a0a0a]">
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="glass rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
                >
                    <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
                    <div className="relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
                        <div>
                            <span className="text-green-400 text-sm font-semibold tracking-wider uppercase block mb-4">
                                Open to opportunities
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
                                Let’s build reliable systems together.
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                I’m exploring backend, platform, distributed-systems, and full-stack software engineering roles where performance, correctness, and thoughtful system design matter.
                            </p>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-300 mb-8">
                                <span className="rounded-full bg-white/5 border border-white/10 px-4 py-2">
                                    Chicago, Illinois
                                </span>
                                <span className="rounded-full bg-white/5 border border-white/10 px-4 py-2">
                                    Available for software engineering roles
                                </span>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="mailto:onkardangi7@gmail.com"
                                    className="px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center transition-colors shadow-lg shadow-blue-500/20"
                                >
                                    Email Me
                                </a>
                                <a
                                    href="/assets/Onkar_Dangi_Resume.pdf"
                                    download
                                    className="px-7 py-3 rounded-full border border-blue-500/50 hover:bg-blue-500/10 text-blue-400 hover:text-white font-semibold text-center transition-colors"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {contactLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="block rounded-xl bg-white/5 hover:bg-white/[0.08] border border-white/10 p-5 transition-colors group"
                                >
                                    <span className={`${link.color} text-xs font-bold tracking-wider uppercase block mb-1`}>
                                        {link.label}
                                    </span>
                                    <span className="text-gray-200 group-hover:text-white transition-colors break-all">
                                        {link.value}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

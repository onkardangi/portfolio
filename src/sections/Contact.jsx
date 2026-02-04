import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setSuccess(false);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_glvt2px';
        const TEMPLATE_ID = 'template_3hy6i9n';
        const PUBLIC_KEY = 'mADzkLNq7bvQh9I3s';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                setLoading(false);
                setSuccess(true);
                formRef.current.reset();
                setTimeout(() => setSuccess(false), 5000);
            }, (error) => {
                setLoading(false);
                setError(true);
                console.error("EmailJS Error:", error.text);
            });
    };

    return (
        <section id="contact" className="py-20 bg-[#0a0a0a]">
            <div className="max-w-screen-xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass p-6 rounded-xl flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Email</h4>
                                <a href="mailto:onkardangi7@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">onkardangi7@gmail.com</a>
                            </div>
                        </div>
                        <div className="glass p-6 rounded-xl flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Phone</h4>
                                <a href="tel:312-568-9315" className="text-gray-400 hover:text-green-400 transition-colors">312-568-9315</a>
                            </div>
                        </div>
                        <div className="glass p-6 rounded-xl flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path></svg>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">LinkedIn</h4>
                                <a href="https://www.linkedin.com/in/onkar-dangi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">linkedin.com/in/onkar-dangi</a>
                            </div>
                        </div>
                        <div className="glass p-6 rounded-xl flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-600/20 rounded-full flex items-center justify-center text-gray-400">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">GitHub</h4>
                                <a href="https://github.com/onkardangi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">github.com/onkardangi</a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        ref={formRef}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl space-y-6"
                    >
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Message</label>
                            <textarea
                                rows="4"
                                name="message"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                        >
                            {loading ? (
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : success ? "Message Sent!" : "Send Message"}
                        </button>
                        {error && <p className="text-red-400 text-sm text-center">Something went wrong. Please try again later.</p>}
                        {success && <p className="text-green-400 text-sm text-center">Thanks! I'll get back to you soon.</p>}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

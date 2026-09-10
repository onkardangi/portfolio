import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#030014] rounded-lg shadow-sm m-4 border-t border-white/10">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-400 sm:text-center">
                    © {new Date().getFullYear()} <a href="#home" className="hover:underline">Onkar Dangi</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
                    <li>
                        <a href="#about" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:underline me-4 md:me-6">Projects</a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:underline me-4 md:me-6">Skills</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

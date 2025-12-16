"use client";

import { useState } from "react";
import { Menu, X, Linkedin, Github, Mail } from "lucide-react";
import { navItems } from "@/app/lib/constants";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const socialIcons = [
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://www.linkedin.com/in/ceren-kuru/",
        },
        {
            name: "GitHub",
            icon: Github,
            url: "https://github.com/cerenkuru",
        },
        {
            name: "Mail",
            icon: Mail,
            url: "mailto:ceren.kuru16@icloud.com",
        }
    ];

    return (
        <header
            className="sticky top-0 z-40 bg-[#f3efeb] border-b-2 border-[#87B3C9]"
            style={{
                backgroundImage: `
                    linear-gradient(90deg, #e8e8e8 1px, transparent 1px),
                    linear-gradient(0deg, #e8e8e8 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
            }}
        >
            <nav className="px-6 sm:px-12 md:px-20 lg:px-32 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#dd746e] to-[#dd746e] bg-clip-text text-transparent flex-shrink-0">
                    Ceren
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex gap-4 xl:gap-8 absolute left-1/2 transform -translate-x-1/2">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-500 hover:text-[#2C3E7F] transition-colors font-medium text-sm xl:text-base"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Desktop Social Icons */}
                <div className="hidden md:flex gap-3 xl:gap-4 flex-shrink-0">
                    {socialIcons.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-7 h-7 rounded-full bg-[#87B3C8] text-white hover:bg-[#6b94ad] transition-colors"
                                title={social.name}
                            >
                                <Icon size={16} />
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-[#2C3E7F] flex-shrink-0"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div
                    className="bg-[#faf6f6] border-t-2 border-gray-300 px-6 py-4 flex flex-col gap-4 lg:hidden"
                    style={{
                        backgroundImage: `
                            linear-gradient(90deg, #e8e8e8 1px, transparent 1px),
                            linear-gradient(0deg, #e8e8e8 1px, transparent 1px)
                        `,
                        backgroundSize: "30px 30px",
                    }}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-700 hover:text-[#2C3E7F] transition-colors font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}

                    {/* Mobile Social Icons */}
                    <div className="flex gap-4 mt-4 pt-4 border-t border-gray-300">
                        {socialIcons.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-8 h-8 rounded-full bg-[#87B3C8] text-white hover:bg-[#6b94ad] transition-colors"
                                    title={social.name}
                                >
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </header>
    );
}

"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/app/lib/constants';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#2C3E7F] to-[#D4A5D4] bg-clip-text text-transparent">
                    Ceren
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-700 hover:text-[#2C3E7F] transition-colors font-medium"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[#2C3E7F]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
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
                </div>
            )}
        </header>
    );
}
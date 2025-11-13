"use client";

import { socialLinks } from '@/app/lib/constants';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 bg-transparent">
            <div className="max-w-3xl mx-auto text-center">
                <div className="mb-8 inline-block">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2C3E7F] to-[#D4A5D4] flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl font-bold text-[#2C3E7F]">
                            C
                        </div>
                    </div>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                    Merhaba, ben <span className="bg-gradient-to-r from-[#2C3E7F] to-[#D4A5D4] bg-clip-text text-transparent">Ceren</span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Web geliştirici ve tasarımcı. Modern, kullanıcı dostu ve etkileyici dijital çözümler oluşturmaktan tutkulu.
                </p>

                <div className="flex gap-4 justify-center mb-12 flex-wrap">
                    <a href="#projects" className="px-8 py-3 bg-[#2C3E7F] text-white rounded-full font-medium hover:bg-[#1F2A5C] transition-colors shadow-lg hover:shadow-xl">
                        Projelerimi Görüntüle
                    </a>
                    <a href="#contact" className="px-8 py-3 border-2 border-[#2C3E7F] text-[#2C3E7F] rounded-full font-medium hover:bg-[#F5E6F0] transition-colors">
                        Benimle İletişime Geç
                    </a>
                </div>

                <div className="flex gap-6 justify-center text-sm text-gray-600">
                    {socialLinks.map((link) => (
                        <a key={link.name} href={link.url} className="hover:text-[#2C3E7F] transition-colors">
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

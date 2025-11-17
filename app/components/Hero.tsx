"use client";
import Image from 'next/image';
import ceku from '@/public/ceku.png';

export default function Hero() {
    const colors = ['#FF6B6B', '#FF6B6B', '#FF6B6B', '#68b56e', '#87B3C9', '#87B3C9', '#E3D967'];
    const text = 'Front End Developer';

    const coloredText = text.split('').map((char, index) => {
        const color = colors[index % colors.length];
        return { char, color };
    });

    return (
        <section id="home" className="flex items-center  bg-transparent gap-8">
            {/* Sol - Yazı */}
            <div className="w-full lg:w-2/3 font-thin flex pt-7 flex-col justify-center pl-6 sm:pl-12 md:pl-20 lg:pl-32 pr-6">
                <h1 className="text-xl sm:text-3xl md:text-6xl font-thin text-gray-900 leading-none">
                    Hello, I&apos;m <span className="text-gray-900 bg-clip-text">Ceren! </span> <br />
                    <span className="font-thin text-2xl sm:text-3xl md:text-4xl">
                        {coloredText.map((item, index) => (
                            <span key={index} style={{ color: item.color }}>
                                {item.char}
                            </span>
                        ))}
                        .
                    </span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 mb-8 mt-6 leading-relaxed max-w-lg">
                    Modern, kullanıcı dostu ve etkileyici dijital çözümler oluşturmaktan tutkulu.
                </p>

                {/* <div className="flex gap-4 mb-12 flex-wrap">
                    <a href="#projects" className="px-8 py-3 bg-[#87B3C8] text-white rounded-full font-medium hover:bg-[#6b94ad] transition-colors shadow-lg hover:shadow-xl">
                        Projelerimi Görüntüle
                    </a>
                    <a href="#contact" className="px-8 py-3 border-2 border-[#87B3C9] text-[#87B3C9] rounded-full font-medium hover:bg-[#F5E6F0] transition-colors">
                        İletişime Geç
                    </a>
                </div> */}
            </div>

            {/* Sağ - Görsel Alanı */}
            <div className="hidden lg:flex w-2/3 items-center justify-center pt-25 pr-5 lg:pr-18">
                <div className="relative w-80 h-80">
                    <Image
                        src={ceku}
                        alt="Ceren"
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
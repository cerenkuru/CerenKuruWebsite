"use client";
import direction from "@/public/direction.png";
import Image from "next/image";

export default function Contact() {
    const colors = ['#FF6B6B', '#FF6B6B', '#68b56e', '#87B3C9', '#87B3C9', '#E3D967'];
    const text = 'Get in Touch';

    const coloredText = text.split('').map((char, index) => {
        const color = colors[index % colors.length];
        return { char, color };
    });

    return (
        <section id="contact" className="py-20 px-6 bg-transparent">
            <div className="max-w-2xl mx-auto text-center">

                <h2 className="text-4xl font-bold mb-6 leading-tight">
                    {coloredText.map((item, index) => (
                        <span key={index} style={{ color: item.color }}>
                            {item.char}
                        </span>
                    ))}
                </h2>

                <div className="text-lg mb-3 text-gray-700 space-y-1">
                    <p>
                        If youd like to work together on a project, have a question,
                    </p>
                    <p>
                        or just want to say{' '}
                        <span className="inline-block animate-bounce text-[#FF6B6B] font-bold text-xl">
                            hello
                        </span>
                        , feel free to reach out.
                    </p>
                </div>

                <div className="relative flex flex-col sm:flex-row gap-4 justify-center pl-20 items-center mb-12">
                    <a
                        href="mailto:ceren.kuru16@icloud.com"
                        className="px-6 py-2 bg-[#87B3C8] text-white rounded-full font-bold hover:bg-[#1F2A5C] transition-colors"
                    >
                        Send Email
                    </a>

                    <div className="flex flex-row items-center gap-3">
                        <a
                            href="https://www.linkedin.com/in/ceren-kuru/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 border-2 border-[#87B3C8] text-[#87B3C8] rounded-full font-medium hover:bg-[#F5E6F0] transition-colors inline-block"
                        >
                            Connect on LinkedIn
                        </a>

                        <Image
                            src={direction}
                            alt="arrow pointing to LinkedIn"
                            className="h-22 w-22 mb-8 sm-[10]"
                            priority
                        />
                    </div>
                </div>

                <p className="text-sm text-gray-600">
                    © 2025 Ceren. All rights reserved.
                </p>
            </div>
        </section>
    );
}
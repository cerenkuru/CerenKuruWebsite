"use client";

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

                {/* Renkli Başlık */}
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                    {coloredText.map((item, index) => (
                        <span key={index} style={{ color: item.color }}>
                            {item.char}
                        </span>
                    ))}
                </h2>

                <p className="text-lg mb-12 text-gray-600">
                    If you’d like to work together on a project, have a question,
                    or just want to say hello, feel free to reach out.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a
                        href="mailto:ceren.kuru16@icloud.com"
                        className="px-8 py-3 bg-[#87B3C8] text-white rounded-full font-bold hover:bg-[#1F2A5C] transition-colors"
                    >
                        Send Email
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ceren-kuru/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border-2 border-[#87B3C8] text-[#87B3C8] rounded-full font-medium hover:bg-[#F5E6F0] transition-colors"
                    >
                        Connect on LinkedIn
                    </a>
                </div>

                <p className="text-sm text-gray-600">
                    © 2025 Ceren. All rights reserved.
                </p>
            </div>
        </section>
    );
}

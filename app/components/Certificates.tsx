"use client";

import { certificates } from '@/app/lib/constants';

export default function Certificates() {
    return (
        <section id="certificates" className="py-20 px-6 bg-[#F5E6F0]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
                    Aldığım Sertifikalar
                </h2>

                <div className="space-y-4">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
                        >
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{cert.title}</h3>
                                <p className="text-gray-600 text-sm">{cert.organization} - {cert.year}</p>
                            </div>
                            <div className="text-[#2C3E7F] font-bold">✓</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
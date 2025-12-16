"use client";

import { certificates } from "../lib/constants";

const postItColors = [
    "#ffe5b4",
    "#ffd4e5",
    "#d4f4dd",
    "#e5d4ff",
];

export default function Certificates() {
    return (
        <section id="certificates" className="py-8 px-4 bg-transparent">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                    Certificates
                </h2>
                {/* Mantar Pano */}
                <div
                    className="relative bg-[#c9a876] p-5 mx-auto shadow-xl"
                    style={{
                        maxWidth: "900px",
                        borderRadius: "2%",
                        border: "6px solid #8b6f47",
                        boxShadow:
                            "0 10px 28px rgba(0,0,0,0.18), inset 0 0 30px rgba(139,111,71,0.25)",
                        backgroundImage: `
                            radial-gradient(circle at 20% 30%, rgba(160,120,80,0.25) 1px, transparent 1px),
                            radial-gradient(circle at 60% 70%, rgba(160,120,80,0.25) 1px, transparent 1px)
                        `,
                        backgroundSize: "22px 22px",
                    }}
                >
                    {/* Post-it Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {certificates.map((cert, index) => (
                            <div
                                key={cert.id}
                                className="relative"
                                style={{
                                    transform: `rotate(${index % 2 === 0 ? "-1deg" : "1deg"})`,
                                }}
                            >
                                <div
                                    className="absolute -top-1.5 left-1/3 -translate-x-1/2 z-10"
                                    style={{
                                        width: "7px",
                                        height: "7px",
                                        background: "linear-gradient(145deg,#666,#444)",
                                        borderRadius: "50%",
                                        boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
                                    }}
                                />

                                {/* Post-it */}
                                <div
                                    className="relative flex flex-col overflow-hidden transition-transform hover:scale-[1.03]"
                                    style={{
                                        width: "130px",
                                        height: "130px",
                                        backgroundColor: postItColors[index % postItColors.length],
                                        borderRadius: "2px",
                                        padding: "8px",
                                        boxShadow:
                                            "0 4px 8px rgba(0,0,0,0.15), inset 0 -1px 0 rgba(0,0,0,0.05)",
                                    }}
                                >
                                    {/* Raptiye */}
                                    <div
                                        className="absolute -top-2 left-1/2 -translate-x-1/2 z-20"
                                        style={{
                                            width: "7px",
                                            height: "7px",
                                            background: "linear-gradient(145deg,#666,#444)",
                                            borderRadius: "50%",
                                            boxShadow: "0 1px 2px rgba(0,0,0,0.35)",
                                        }}
                                    />


                                    {/* Yapışkan gölgesi */}
                                    <div
                                        className="absolute top-0 left-0 right-0 h-1"
                                        style={{
                                            background:
                                                "linear-gradient(to bottom, rgba(0,0,0,0.05), transparent)",
                                        }}
                                    />

                                    <div className="flex-1 flex flex-col">
                                        <h3
                                            className="text-[12px] font-bold text-gray-800 mb-0.5"
                                            style={{ fontFamily: "Comic Sans MS, cursive" }}
                                        >
                                            {cert.title}
                                        </h3>

                                        {cert.subtitle && (
                                            <p
                                                className="text-[10px] text-gray-700 mb-1.5"
                                                style={{ fontFamily: "Comic Sans MS, cursive" }}
                                            >
                                                {cert.subtitle}
                                            </p>
                                        )}

                                        <div className="mt-auto">
                                            <p
                                                className="text-[10px] text-gray-700 font-medium"
                                                style={{ fontFamily: "Comic Sans MS, cursive" }}
                                            >
                                                {cert.organization}
                                            </p>

                                            {cert.platform && (
                                                <p
                                                    className="text-[9px] text-gray-600"
                                                    style={{ fontFamily: "Comic Sans MS, cursive" }}
                                                >
                                                    {cert.platform}
                                                </p>
                                            )}

                                            {cert.duration && (
                                                <p
                                                    className="text-[9px] italic text-gray-600"
                                                    style={{ fontFamily: "Comic Sans MS, cursive" }}
                                                >
                                                    {cert.duration}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Tick */}
                                    <svg
                                        className="absolute bottom-1 right-1 w-3 h-3 text-gray-700"
                                        fill="none"
                                        strokeWidth="2.3"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

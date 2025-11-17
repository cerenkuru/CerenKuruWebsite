"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Power } from 'lucide-react';
import Image from 'next/image';
import crossedLeg from '@/public/crossed-leg.png';

const projects = [
    {
        title: "E-Commerce Platform",
        description: "Built with Next.js and TypeScript",
        tags: ["Next.js", "TypeScript", "Tailwind"]
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio showcasing projects",
        tags: ["React", "CSS", "Design"]
    },
    {
        title: "Task Manager",
        description: "Productivity app for managing daily tasks",
        tags: ["React", "Node.js"]
    }
];

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOn, setIsOn] = useState(true);

    const nextProject = () => {
        if (isOn) {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }
    };

    const prevProject = () => {
        if (isOn) {
            setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
        }
    };

    const togglePower = () => {
        setIsOn(!isOn);
    };

    useEffect(() => {
        if (!isOn) return;
        const intervalId = setInterval(nextProject, 3000);
        return () => clearInterval(intervalId);
    }, [isOn, currentIndex]);

    const currentProject = projects[currentIndex];

    return (
        <section id="projects" className="py-20 bg-transparent">
            <div className="flex gap-8">
                <div className="w-full lg:w-1/2 flex flex-col justify-center pl-6 sm:pl-12 md:pl-20 lg:pl-32 pr-6">
                    <h2 className="text-4xl font-thin text-gray-900 mb-12">
                        Projects
                    </h2>

                    {/* TV */}
                    <div
                        className="relative w-full max-w-xl mx-auto"
                        style={{
                            aspectRatio: '16/11',
                            padding: '1.5rem',
                            background: '#f3efeb',
                            borderRadius: '8% 9% 7% 10% / 10% 8% 9% 7%',
                            border: '3px solid #68b56e',
                            transform: 'rotate(-0.5deg)',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                        }}
                    >
                        {/* Sol Anten */}
                        <div
                            className="absolute -top-7 left-1/4 transform -translate-x-1/2 w-0.5 h-10 bg-gray-500 -rotate-12"
                            style={{
                                borderRadius: '50% 45% 48% 52%',
                                transform: 'translateX(-50%) rotate(-12deg) skewX(-1deg)'
                            }}
                        >
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#68b56e] shadow-md"
                                style={{
                                    borderRadius: '48% 52% 51% 49%'
                                }}
                            ></div>
                        </div>

                        {/* Sağ Anten */}
                        <div
                            className="absolute -top-7 right-1/4 transform translate-x-1/2 w-0.5 h-10 bg-gray-500 rotate-12"
                            style={{
                                borderRadius: '45% 50% 52% 48%',
                                transform: 'translateX(50%) rotate(12deg) skewX(1deg)'
                            }}
                        >
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#68b56e] shadow-md"
                                style={{
                                    borderRadius: '52% 48% 49% 51%'
                                }}
                            ></div>
                        </div>

                        {/* TV Ekranı */}
                        <div
                            className="w-full h-full p-5 overflow-hidden transition-all duration-500"
                            style={{
                                borderRadius: '6% 7% 5% 8% / 8% 6% 7% 5%',
                                border: '2px solid #68b56e',
                                transform: 'rotate(0.3deg)',
                                background: isOn ? 'rgba(255, 255, 255, 0.95)' : '#1a1a1a'
                            }}
                        >
                            {isOn ? (
                                <div className="h-full flex flex-col">
                                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#2C3E7F] mb-2">
                                        {currentProject.title}
                                    </h3>
                                    <p className="text-gray-700 text-xs sm:text-sm leading-snug mb-3" style={{ minHeight: '3rem' }}>
                                        {currentProject.description}
                                    </p>

                                    <div className="flex gap-1 flex-wrap">
                                        {currentProject.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-0.5 bg-[#F5E6F0] text-[#2C3E7F] text-xs font-medium"
                                                style={{
                                                    borderRadius: '35% 40% 38% 42% / 42% 38% 40% 35%'
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-gray-600 rounded-full opacity-30"></div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Kumanda - Perspektif ile yerde */}
                    <div className="mt-12 flex justify-center">
                        <div
                            className="relative bg-[#e8e4df] p-5 shadow-2xl"
                            style={{
                                width: '90px',
                                transform: 'perspective(250px) rotateX(25deg) rotate(-1deg)',
                                borderRadius: '25% 22% 20% 23% / 18% 21% 19% 20%',
                                border: '2px solid #8a8a8a',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2), inset 2px 2px 0 rgba(255,255,255,0.3)'
                            }}
                        >
                            {/* Kapat Tuşu */}
                            <div className="flex justify-center mb-4">
                                <button
                                    onClick={togglePower}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOn ? 'bg-red-500 hover:bg-[#dd746e]' : 'bg-gray-700 hover:bg-gray-600'
                                        }`}
                                    style={{
                                        borderRadius: '48% 52% 50% 50% / 52% 48% 50% 50%',
                                        boxShadow: isOn
                                            ? '0 0 15px rgba(239, 68, 68, 0.5), inset 0 2px 4px rgba(0,0,0,0.3)'
                                            : 'inset 0 2px 4px rgba(0,0,0,0.5)'
                                    }}
                                >
                                    <Power size={20} className="text-white" />
                                </button>
                            </div>

                            {/* Gösterge Noktaları */}
                            <div className="flex gap-2 items-center justify-center mb-4">
                                {projects.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-1 h-1 transition-all ${index === currentIndex && isOn
                                            ? 'bg-green-500 scale-125'
                                            : 'bg-gray-400'
                                            }`}
                                        style={{
                                            borderRadius: '45% 55% 52% 48% / 48% 52% 55% 45%',
                                            boxShadow: index === currentIndex && isOn
                                                ? '0 0 8px rgba(34, 197, 94, 0.6)'
                                                : 'none'
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Yön Tuşları */}
                            <div className="flex items-center justify-center gap-3">
                                {/* Geri Tuşu */}
                                <button
                                    onClick={prevProject}
                                    disabled={!isOn}
                                    className={`w-10 h-6 rounded-sm flex items-center justify-center transition-all ${isOn
                                        ? 'bg-[#4a4a4a] hover:bg-[#5a5a5a] text-white'
                                        : 'bg-[#333] text-gray-600 cursor-not-allowed'
                                        }`}
                                    style={{
                                        // borderRadius: '48% 52% 50% 50% / 52% 48% 50% 50%',
                                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2)'
                                    }}
                                >
                                    <ChevronLeft size={12} strokeWidth={3} />
                                </button>

                                <button
                                    onClick={nextProject}
                                    disabled={!isOn}
                                    className={`w-10 h-6 rounded-sm flex items-center justify-center transition-all ${isOn
                                        ? 'bg-[#4a4a4a] hover:bg-[#5a5a5a] text-white'
                                        : 'bg-[#333] text-gray-600 cursor-not-allowed'
                                        }`}
                                    style={{
                                        // borderRadius: '52% 48% 50% 50% / 48% 52% 50% 50%',
                                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2)'
                                    }}
                                >
                                    <ChevronRight size={12} strokeWidth={3} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sağ - Görsel Alanı */}
                <div className="hidden lg:flex w-1/2 items-center justify-center pr-6 pt-12 lg:pr-32">
                    <div className=" h-90 w-90 aspect-square  rounded-lg flex items-center justify-center">
                        <Image
                            src={crossedLeg}
                            alt="Ceren"
                            className="object-cover rounded-lg"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

"use client";

import { projects } from '@/app/lib/constants';

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
                    Projelerim
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white bg-opacity-70 rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-gray-200"
                        >
                            <div className="h-48 bg-gradient-to-br from-[#2C3E7F] to-[#D4A5D4] opacity-20"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm">
                                    {project.description}
                                </p>
                                <div className="flex gap-2 flex-wrap">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-[#F5E6F0] text-[#2C3E7F] text-xs rounded-full font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

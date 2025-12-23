"use client";
import Image from "next/image";
import crossedLegLaptop from "@/public/crossed-leg-laptop.png";
import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypeWriter";
import { useColorfulText } from "../hooks/useColorfulText";

export default function About() {
    const fullText = useTypewriter("~ Ceren ✨", 120, 1500);
    const text = useColorfulText("front-end developer");

    return (
        <section id="about" className="py-20 px-6 bg-transparent pl-25 pr-25">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-4xl font-thin text-gray-900 mb-8">
                    About Me
                </h2>

                <p className="text-lg text-gray-800 leading-relaxed mb-12">
                    I&apos;m a{' '} passionate{' '}
                    {text.map((item, index) => (
                        <span
                            key={index}
                            style={{ color: item.color }}
                        >
                            {item.char}
                        </span>
                    ))}

                    {' '}
                    who enjoys building{' '}
                    clean
                    ,{' '}
                    user-focused
                    , and{' '}
                    <span className="font-bold animate-pulse text-[#FF6B6B]">
                        interactive{' '}
                    </span>{' '}
                    web experiences. I care deeply about writing{' '}
                    <span
                        className="inline-block font-bold text-[#000000]"
                        style={{
                            fontFamily: 'var(--font-tiny5)',
                            fontSize: '0.9em'
                        }}
                    >
                        readable code
                    </span>{' '}
                    and creating interfaces that feel{' '}
                    <span className="font-bold text-[#2C3E7F]">
                        intuitive
                    </span>
                    , modern, and purposeful.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12 items-center">

                    <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-6">
                            Stuff I enjoy working with:
                        </h3>

                        <motion.div
                            className="space-y-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.12
                                    }
                                }
                            }}
                        >
                            {[
                                'React & modern JavaScript (ES6+)',
                                'TypeScript (because bugs are not my friends)',
                                'Component-based architecture',
                                'Responsive & accessible UI',
                                'Clean, maintainable code with performance in mind'
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-3"
                                    style={{
                                        transform: `rotate(${index % 2 === 0 ? '-0.3deg' : '0.2deg'})`
                                    }}
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <div className="mt-1.5 w-2 h-2 flex-shrink-0">
                                        <svg viewBox="0 0 20 20" className="w-full h-full">
                                            <circle
                                                cx="10"
                                                cy="10"
                                                r="7"
                                                fill="none"
                                                stroke="#4a4a4a"
                                                strokeWidth="2"
                                                strokeDasharray="2,1"
                                            />
                                            <circle
                                                cx="10"
                                                cy="10"
                                                r="4"
                                                fill="#4a4a4a"
                                                opacity="0.6"
                                            />
                                        </svg>
                                    </div>

                                    <p className="text-base text-gray-800">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        className="hidden lg:flex justify-end"
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Image
                            src={crossedLegLaptop}
                            alt="Laptop illustration"
                            className="w-70 h-auto"
                            priority
                        />
                    </motion.div>

                </div>

                <div
                    className="pt-2 border-t border-gray-300"
                    style={{ borderStyle: "dashed" }}
                >
                    <p className="text-base text-gray-700 leading-relaxed">
                        Outside of work, I continuously improve myself by learning new technologies
                        and building small projects. I have a disciplined, goal-oriented mindset and
                        adapt quickly to change, aiming to grow with every project I work on.
                    </p>
                </div>

                <div className="flex justify-end pr-10">
                    <span className="text-gray-600 text-lg">
                        {fullText}
                        <span className="ml-0.5 animate-pulse">|</span>

                    </span>
                </div>


            </div>
        </section >
    );
}

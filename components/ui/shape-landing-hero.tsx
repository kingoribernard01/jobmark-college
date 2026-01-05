
"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Circle, Users } from "lucide-react";
import { cn } from "../../lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "ADMISSIONS OPEN 2024/25",
    title1 = "Bridge the Gap Between",
    title2 = "Learning & Success",
    subtext = "Transform your potential into professional excellence with Jobmark College. We offer market-relevant programs designed for the modern industry landscape in Ruiru.",
    primaryCTA = "Enroll Now",
    secondaryCTA = "Enquire Today",
    tertiaryCTA = "Explore Programs"
}: {
    badge?: string;
    title1?: string;
    title2?: string;
    subtext?: string;
    primaryCTA?: string;
    secondaryCTA?: string;
    tertiaryCTA?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    // Professional Typewriter Variant
    const typewriterVariants = {
        hidden: { opacity: 0 },
        visible: (i: number) => ({
            opacity: 1,
            transition: {
                duration: 0.05,
                delay: 1.2 + i * 0.05, // Professional delay + sequential typing speed
                ease: "linear",
            },
        }),
    };

    const renderTypewriterText = (text: string, baseOffset: number, gradientClass: string) => {
        let globalCharIndex = 0;
        return text.split(" ").map((word, wordIdx) => {
            const wordElement = (
                <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
                    {word.split("").map((char, charIdx) => {
                        const idx = baseOffset + globalCharIndex;
                        globalCharIndex++;
                        return (
                            <motion.span
                                key={charIdx}
                                custom={idx}
                                variants={typewriterVariants}
                                initial="hidden"
                                animate="visible"
                                className={cn("inline-block", gradientClass)}
                            >
                                {char}
                            </motion.span>
                        );
                    })}
                </span>
            );
            globalCharIndex++; // space
            return wordElement;
        });
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#020617]">
            {/* Brand aligned gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/[0.2] via-transparent to-emerald-900/[0.1] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-blue-600/[0.2]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-emerald-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 py-20">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12 shadow-2xl backdrop-blur-sm"
                    >
                        <Circle className="h-2.5 w-2.5 fill-emerald-400 animate-pulse" />
                        <span className="text-sm text-emerald-100/80 tracking-widest font-semibold uppercase">
                            {badge}
                        </span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 md:mb-10 tracking-tight leading-[1.05]">
                        <span className="block mb-3">
                            {renderTypewriterText(title1, 0, "bg-gradient-to-b from-white to-white/70")}
                        </span>
                        <span className="block">
                            {renderTypewriterText(title2, title1.length, "bg-gradient-to-r from-blue-300 via-emerald-100 to-cyan-300")}
                        </span>
                    </h1>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-slate-300/80 mb-10 leading-relaxed font-normal tracking-wide max-w-2xl mx-auto px-4">
                            {subtext}
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row items-center justify-center gap-5"
                    >
                        <motion.a 
                            href="#contact" 
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(5 150 105 / 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-10 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-emerald-900/20"
                        >
                            {primaryCTA}
                        </motion.a>
                        
                        <motion.a 
                            href="#programs" 
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 64, 175, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-10 py-4 bg-blue-900/30 text-blue-100 border border-blue-400/30 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-md"
                        >
                            {tertiaryCTA}
                        </motion.a>

                        <motion.a 
                            href="#contact" 
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-10 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold text-lg transition-all duration-300"
                        >
                            {secondaryCTA}
                        </motion.a>
                    </motion.div>

                    {/* Enhanced Social Proof */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="mt-16 flex items-center justify-center gap-6"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-slate-800 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all cursor-pointer" />
                                </div>
                            ))}
                        </div>
                        <div className="text-left">
                            <div className="flex items-center gap-1 text-emerald-400 font-bold">
                                <Users className="w-4 h-4" />
                                <span>2,000+ Students</span>
                            </div>
                            <div className="text-sm text-slate-400">Trusted for practical excellence</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/50 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }

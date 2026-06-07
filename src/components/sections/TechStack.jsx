import React, { useState } from "react";
import {
    SiReact, SiNextdotjs, SiJavascript,
    SiTailwindcss, SiHtml5, SiCss,
} from "react-icons/si";
import { Star } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const skills = [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss, color: "#1572B6" },
];

const TechStack = () => {
    const [active, setActive] = useState(null);

    return (
        <section
            id="tech"
            className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
        >
            <RadialGradientBackground variant="about" />

            <div className="relative z-10 max-w-5xl mx-auto">

                {/* Header — Hero-matched */}
                <FadeIn delay={60}>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] bg-primary/10 border border-primary/20 rounded-full mb-5">
                            <Star className="w-4 h-4 text-white fill-white" />
                            <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                                My Stack
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-5 leading-tight">
                            Tech Stack &{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                                Expertise
                            </span>
                        </h2>
                        <p className="text-lg text-white/70 max-w-xl mx-auto">
                            Technologies I work with to build amazing products
                        </p>
                    </div>
                </FadeIn>

                {/* Grid */}
                <FadeIn delay={150}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                        {skills.map((skill) => {
                            const Icon = skill.icon;
                            const isActive = active === skill.name;

                            return (
                                <button
                                    key={skill.name}
                                    onClick={() => setActive(isActive ? null : skill.name)}
                                    className={`
                    group flex flex-col items-center justify-center gap-4
                    p-6 rounded-2xl border transition-all duration-300
                    ${isActive
                                            ? "bg-blue-500/15 border-blue-500/50"
                                            : "bg-white/[0.04] border-white/10 hover:border-blue-500/30 hover:bg-white/[0.07]"
                                        }
                  `}
                                >
                                    <div
                                        className={`
                      w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                      ${isActive ? "bg-blue-500/20" : "bg-white/5 group-hover:bg-white/10"}
                    `}
                                    >
                                        <Icon
                                            size={26}
                                            style={{ color: skill.color }}
                                            className="transition-all duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <span
                                        className={`text-sm font-medium tracking-wide transition-colors duration-300 ${isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                                            }`}
                                    >
                                        {skill.name}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};

export default TechStack;
import React from "react";
import { Download, Code2, Sparkles, Zap } from "lucide-react";
import {
    SiReact, SiNextdotjs, SiTailwindcss,
    SiJavascript, SiHtml5, SiCss,
} from "react-icons/si";
import { PERSONAL_INFO } from "../../utils/constants";
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

const About = () => (
    <section
        id="about"
        className="relative min-h-screen flex items-center py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
        <RadialGradientBackground variant="about" />

        <div className="relative z-10 w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                {/* ── Left ── */}
                <div className="flex flex-col gap-8">

                    {/* Badge — matches Hero exactly */}
                    <FadeIn delay={60}>
                        <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] bg-primary/10 border border-primary/20 rounded-full w-fit">
                            <Code2 className="w-4 h-4 text-white" />
                            <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                                Frontend Developer
                            </span>
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                    </FadeIn>

                    {/* Heading — matches Hero h1 scale */}
                    <FadeIn delay={100}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight">
                            Crafting Digital{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                                Experiences
                            </span>{" "}
                            That Matter
                        </h2>
                    </FadeIn>

                    {/* Bio — matches Hero paragraph */}
                    <FadeIn delay={200}>
                        <div className="flex flex-col gap-4 max-w-[550px]">
                            {PERSONAL_INFO.bio.map((p, i) => (
                                <p key={i} className="text-lg text-white/70 leading-relaxed">
                                    {p}
                                </p>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Skill pills */}
                    <FadeIn delay={260}>
                        <div className="flex flex-wrap gap-2.5">
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
                                >
                                    <skill.icon size={15} style={{ color: skill.color }} />
                                    <span className="text-sm text-white/70 tracking-wide">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* CTA — matches Hero button style */}
                    <FadeIn delay={300}>
                        <button
                            onClick={() => window.open(PERSONAL_INFO.resume)}
                            className="inline-flex items-center gap-3 mb-0 group"
                        >
                            <div className="relative z-10 bg-white text-[#212121] rounded-lg px-5 py-2.5 font-medium border border-white/30 flex items-center gap-2.5 hover:bg-white/90 transition-colors duration-200">
                                <Download
                                    size={16}
                                    className="group-hover:-translate-y-0.5 transition-transform duration-200"
                                />
                                Download Resume
                            </div>
                        </button>
                    </FadeIn>
                </div>

                {/* ── Right — cards ── */}
                <FadeIn delay={150}>
                    <div className="flex flex-col gap-4">

                        {/* Wide card */}
                        <div className="flex items-start gap-5 p-7 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-300">
                            <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
                                <Code2 size={20} className="text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-white mb-1.5">Expertise</h3>
                                <p className="text-base text-white/55 leading-relaxed">
                                    Specialized in building scalable web applications with modern
                                    technologies and best practices.
                                </p>
                            </div>
                        </div>

                        {/* Two cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    icon: Sparkles,
                                    title: "Clean Code",
                                    desc: "Writing maintainable, well-documented code that scales with your product.",
                                },
                                {
                                    icon: Zap,
                                    title: "Performance",
                                    desc: "Optimizing for speed and efficiency in every project I take on.",
                                },
                            ].map(({ icon: Icon, title, desc }) => (
                                <div
                                    key={title}
                                    className="flex flex-col gap-4 p-7 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-300"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
                                        <Icon size={20} className="text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-1.5">{title}</h3>
                                        <p className="text-base text-white/55 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA card */}
                        <div className="p-7 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-800/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                            <p className="text-base text-white/60 mb-5 leading-relaxed">
                                Interested in working together? I'm currently open to freelance
                                projects and full-time opportunities.
                            </p>
                            <div className="flex flex-wrap gap-3">

                                < a href={`mailto:${PERSONAL_INFO.email}`}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#212121] text-sm font-medium hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    Let's Talk
                                </a>

                                <a href="#projects"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 border border-white/10"
                                >
                                    View Projects
                                </a>
                            </div>
                        </div>

                    </div>
                </FadeIn>
            </div >
        </div >
    </section >
);

export default About;
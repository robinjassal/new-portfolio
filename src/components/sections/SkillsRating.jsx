import React from "react";
import {
    SiReact, SiNextdotjs, SiJavascript,
    SiTailwindcss, SiHtml5, SiCss,
} from "react-icons/si";
import { GitBranch, Smartphone, Zap, Star } from "lucide-react";
import { FiFigma } from "react-icons/fi";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const categories = [
    {
        title: "Frontend Development",
        skills: [
            { name: "React.js", icon: SiReact, years: "3+ years", level: "Expert", pct: 92 },
            { name: "JavaScript", icon: SiJavascript, years: "4+ years", level: "Expert", pct: 90 },
            { name: "Next.js", icon: SiNextdotjs, years: "2+ years", level: "Advanced", pct: 78 },
            { name: "Tailwind CSS", icon: SiTailwindcss, years: "3+ years", level: "Expert", pct: 88 },
            { name: "HTML", icon: SiHtml5, years: "4+ years", level: "Expert", pct: 95 },
            { name: "CSS", icon: SiCss, years: "4+ years", level: "Expert", pct: 90 },
        ],
    },
    {
        title: "Tools & Others",
        skills: [
            { name: "Git & GitHub", icon: GitBranch, years: "3+ years", level: "Advanced", pct: 82 },
            { name: "Responsive Design", icon: Smartphone, years: "3+ years", level: "Expert", pct: 90 },
            { name: "Figma", icon: FiFigma, years: "2+ years", level: "Intermediate", pct: 65 },
            { name: "Vite", icon: Zap, years: "1+ years", level: "Advanced", pct: 75 },
        ],
    },
];

// Badge config — color + emoji per level
const levelConfig = {
    Expert: {
        badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
        bar: "from-blue-600 via-blue-400 to-cyan-300",
        flame: true,
        emoji: "🔥",
    },
    Advanced: {
        badge: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
        bar: "from-indigo-600 via-indigo-400 to-blue-300",
        flame: false,
        emoji: "⚡",
    },
    Intermediate: {
        badge: "bg-white/8 text-white/50 border-white/15",
        bar: "from-slate-600 via-slate-400 to-slate-300",
        flame: false,
        emoji: "📈",
    },
};

const SkillRow = ({ skill }) => {
    const Icon = skill.icon;
    const config = levelConfig[skill.level];

    return (
        <div className="group">
            <div className="flex items-center justify-between mb-2">
                {/* Left — icon + name */}
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/15 group-hover:border-blue-500/30 transition-all duration-200">
                        <Icon size={16} className="text-blue-400" />
                    </div>
                    <div>
                        <p className="text-[15px] font-medium text-white leading-none mb-0.5">
                            {skill.name}
                        </p>
                        <p className="text-xs text-white/35">{skill.years}</p>
                    </div>
                </div>

                {/* Right — badge */}
                <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border ${config.badge}`}>
                    <span>{config.emoji}</span>
                    {skill.level}
                </span>
            </div>

            {/* Progress bar */}
            <div className="relative h-[5px] w-full rounded-full bg-white/6 overflow-visible">
                <div
                    className={`h-full rounded-full bg-gradient-to-r ${config.bar} relative transition-all duration-700`}
                    style={{ width: `${skill.pct}%` }}
                >
                    {/* Flame tip on Expert */}
                    {config.flame && (
                        <span
                            className="absolute -right-2 -top-[11px] text-base leading-none select-none"
                            style={{ filter: "drop-shadow(0 0 4px rgba(251,146,60,0.8))" }}
                        >
                            🔥
                        </span>
                    )}
                    {/* Glow pulse at tip */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/80 blur-[2px]" />
                </div>

                {/* Percentage label */}
                <span
                    className="absolute -top-5 text-[10px] text-white/30 font-mono"
                    style={{ left: `${skill.pct}%`, transform: "translateX(-50%)" }}
                >
                    {skill.pct}%
                </span>
            </div>
        </div>
    );
};

const SkillsRating = () => (
    <section
        id="skills"
        className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
        <RadialGradientBackground variant="about" />

        <div className="relative z-10 max-w-7xl mx-auto">

            {/* ── Header ── */}
            <FadeIn delay={60}>
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] bg-primary/10 border border-primary/20 rounded-full mb-5">
                        <Star className="w-4 h-4 text-white fill-white" />
                        <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                            My Expertise
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-5 leading-tight">
                        Skills &{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                            Technologies
                        </span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-xl mx-auto">
                        A comprehensive overview of my technical skills and proficiency levels
                    </p>
                </div>
            </FadeIn>

            {/* ── Legend ── */}
            <FadeIn delay={100}>
                <div className="flex flex-wrap items-center justify-center gap-5 mb-12">
                    {Object.entries(levelConfig).map(([level, cfg]) => (
                        <div key={level} className="flex items-center gap-2">
                            <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border ${cfg.badge}`}>
                                <span>{cfg.emoji}</span>
                                {level}
                            </span>
                        </div>
                    ))}
                    <div className="flex items-center gap-2 text-xs text-white/35">
                        <span>🔥 = bar tip at high proficiency</span>
                    </div>
                </div>
            </FadeIn>

            {/* ── Two-column grid ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {categories.map((cat, ci) => (
                    <FadeIn key={ci} delay={120 + ci * 80}>
                        <div className="h-full rounded-2xl border border-white/8 bg-white/[0.04] p-6 md:p-8">

                            {/* Card header */}
                            <div className="flex items-center gap-3 mb-8 pb-5 border-b border-white/8">
                                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-blue-400 to-blue-600" />
                                <h3 className="text-xl font-semibold text-white">{cat.title}</h3>
                            </div>

                            {/* Skill rows */}
                            <div className="flex flex-col gap-7">
                                {cat.skills.map((skill, si) => (
                                    <SkillRow key={si} skill={skill} />
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    </section>
);

export default SkillsRating;
import React from "react";
import {
    MapPin, Clock, Calendar, Building2, CheckCircle2, Star,
} from "lucide-react";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const experiences = [
    {
        role: "Frontend Developer",
        company: "TechNova Solutions",
        type: "current",
        badge: "Current",
        employment: "Full-time",
        period: "Jan 2024 — Present",
        duration: "1 yr+",
        location: "Remote",
        logo: "/company-logos/technova.png",
        logoFallback: "TN",
        description:
            "Leading frontend development for enterprise SaaS products with a focus on scalable UI architecture, performance, and design-to-development execution.",
        bullets: [
            "Migrated legacy jQuery codebase to React, reducing bundle size by 40%",
            "Built a reusable design system used across 3 internal products",
            "Improved page load speed from 6s to 1.5s using lazy loading",
            "Collaborated with backend teams to define clean REST API contracts",
        ],
        skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Figma"],
    },
    {
        role: "Junior Web Developer",
        company: "PixelCraft Agency",
        type: "past",
        badge: "Completed",
        employment: "Full-time",
        period: "Jan 2023 — Dec 2023",
        duration: "1 yr",
        location: "On-site",
        logo: "/company-logos/pixelcraft.png",
        logoFallback: "PC",
        description:
            "Developed responsive websites and landing pages for multiple clients, working closely with designers, marketers, and project managers.",
        bullets: [
            "Delivered 12+ production websites from Figma handoff to live deployment",
            "Created pixel-perfect responsive layouts for all major screen sizes",
            "Integrated Stripe, Mailchimp, and CRM APIs for client websites",
            "Introduced component-level testing to reduce bugs in delivery",
        ],
        skills: ["HTML", "CSS", "JavaScript", "React.js", "Figma", "Stripe API"],
    },
];

const Experience = () => (
    <section
        id="experience"
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background"
    >
        <RadialGradientBackground variant="about" />

        <div className="relative z-10 max-w-4xl mx-auto">

            {/* ── Header — centered ── */}
            <FadeIn delay={60}>
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] bg-primary/10 border border-primary/20 rounded-full mb-5">
                        <Star className="w-4 h-4 text-white fill-white" />
                        <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                            Professional Journey
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-5 leading-tight">
                        Work{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                            Experience
                        </span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-xl mx-auto">
                        Companies I've worked with, products I've contributed to, and
                        the frontend systems I helped build.
                    </p>
                </div>
            </FadeIn>

            {/* ── Timeline ── */}
            <div className="relative pl-8">

                {/* Vertical line */}
                <div
                    className="absolute left-0 top-2 bottom-8 w-[2px] rounded-full"
                    style={{
                        background:
                            "linear-gradient(180deg, #3b82f6 0%, rgba(59,130,246,0.4) 55%, rgba(255,255,255,0.04) 100%)",
                    }}
                />

                {experiences.map((exp, i) => (
                    <FadeIn key={i} delay={100 + i * 80}>
                        <div className="relative mb-6 last:mb-0">

                            {/* Dot */}
                            <div className="absolute -left-[41px] top-7">
                                <div
                                    className={`w-6 h-6 rounded-full flex items-center justify-center ${exp.type === "current"
                                            ? "bg-primary ring-4 ring-primary/20 ring-offset-0"
                                            : "bg-white/8 border-2 border-white/20"
                                        }`}
                                >
                                    <div
                                        className={`w-2.5 h-2.5 rounded-full ${exp.type === "current" ? "bg-white" : "bg-white/35"
                                            }`}
                                    />
                                </div>
                            </div>

                            {/* Card */}
                            <div
                                className={`rounded-2xl border p-6 md:p-8 transition-all duration-300 ${exp.type === "current"
                                        ? "bg-white/[0.07] border-primary/30 hover:border-primary/55 hover:bg-white/[0.09]"
                                        : "bg-white/[0.05] border-white/12 hover:bg-white/[0.07] hover:border-primary/25"
                                    }`}
                            >
                                {/* Top area */}
                                <div className="flex items-start gap-5 mb-6">

                                    {/* Logo */}
                                    <div className="relative w-14 h-14 rounded-2xl bg-white/8 border border-white/12 flex items-center justify-center overflow-hidden shrink-0">
                                        <span className="absolute text-sm font-medium text-white/50">
                                            {exp.logoFallback}
                                        </span>
                                        <img
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            className="relative z-10 w-full h-full object-contain p-2.5"
                                            onError={(e) => { e.currentTarget.style.display = "none"; }}
                                        />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-normal text-white mb-1.5">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-sm text-primary flex items-center gap-1.5">
                                                    <Building2 size={14} />
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                <span
                                                    className={`text-[11px] px-3 py-1.5 rounded-full border font-medium ${exp.type === "current"
                                                            ? "bg-primary/15 text-blue-300 border-primary/30"
                                                            : "bg-white/6 text-white/45 border-white/12"
                                                        }`}
                                                >
                                                    {exp.badge}
                                                </span>
                                                <span className="text-[11px] px-3 py-1.5 rounded-full bg-white/6 text-white/50 border border-white/12 font-medium">
                                                    {exp.employment}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Meta */}
                                        <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                                            {[
                                                { Icon: Calendar, text: exp.period },
                                                { Icon: Clock, text: exp.duration },
                                                { Icon: MapPin, text: exp.location },
                                            ].map(({ Icon, text }) => (
                                                <span
                                                    key={text}
                                                    className="flex items-center gap-1.5 text-xs text-white/45"
                                                >
                                                    <Icon size={13} />
                                                    {text}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-white/8 mb-6" />

                                {/* Description */}
                                <p className="text-[15px] text-white/65 leading-relaxed mb-6">
                                    {exp.description}
                                </p>

                                {/* Bullets */}
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-6">
                                    {exp.bullets.map((point, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2.5 text-sm text-white/55 leading-relaxed"
                                        >
                                            <span className="w-[18px] h-[18px] rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0 mt-0.5">
                                                <CheckCircle2 size={10} className="text-primary" />
                                            </span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/8">
                                    {exp.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-xs px-3 py-1.5 rounded-full bg-white/6 text-white/55 border border-white/12 hover:bg-primary/12 hover:text-blue-300 hover:border-primary/30 transition-all duration-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}

                {/* End cap */}
                <FadeIn delay={320}>
                    <div className="flex items-center gap-3 mt-10">
                        <div className="h-px flex-1 bg-white/8" />
                        <span className="text-xs text-white/30">Start of journey · 2023</span>
                        <div className="h-px flex-1 bg-white/8" />
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
);

export default Experience;
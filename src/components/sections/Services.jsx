import React, { useState } from "react";
import {
    Code2, Smartphone, Palette, Layers,
    Zap, GitBranch, Star, ArrowRight,
} from "lucide-react";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const services = [
    {
        icon: Code2,
        title: "Frontend Development",
        desc: "Building performant, accessible web applications using React, Next.js, and modern JavaScript. Every project is optimized for speed, SEO, and long-term maintainability.",
        points: ["React & Next.js", "TypeScript", "REST API Integration"],
    },
    {
        icon: Smartphone,
        title: "Responsive Design",
        desc: "Crafting pixel-perfect, mobile-first interfaces that work flawlessly across every device and screen size — from 320px to 4K.",
        points: ["Mobile-first", "Cross-browser", "Tailwind CSS"],
    },
    {
        icon: Palette,
        title: "UI/UX Implementation",
        desc: "Translating Figma designs into production-ready components with precision, smooth animations, and exceptional attention to detail.",
        points: ["Figma to Code", "Micro-interactions", "Accessibility"],
    },
    {
        icon: Layers,
        title: "Component Systems",
        desc: "Designing and building scalable, reusable component libraries and design systems that keep products consistent as they grow.",
        points: ["Design Systems", "Storybook Docs", "Reusable Patterns"],
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        desc: "Auditing and improving web performance through code splitting, lazy loading, caching strategies, and Core Web Vitals tuning.",
        points: ["Lighthouse 90+", "Lazy Loading", "Bundle Optimization"],
    },
    {
        icon: GitBranch,
        title: "Code Review & Consulting",
        desc: "Providing actionable code reviews, architecture advice, and technical guidance to help teams ship cleaner, more scalable frontends.",
        points: ["Architecture Advice", "Best Practices", "Team Mentoring"],
    },
];

const ServiceCard = ({ s, large = false, delay = 0 }) => {
    const [hovered, setHovered] = useState(false);
    const Icon = s.icon;

    return (
        <FadeIn delay={delay}>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`group relative rounded-2xl border border-white/8 bg-white/[0.04] hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-300 cursor-default overflow-hidden h-full ${large ? "p-7 md:p-9" : "p-6"
                    }`}
            >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute -top-20 -left-20 rounded-full blur-3xl bg-blue-500/8 ${large ? "w-72 h-72" : "w-44 h-44"}`} />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div
                        className={`rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/15 group-hover:border-blue-500/35 transition-all duration-300 mb-5 ${large ? "w-14 h-14 mb-6" : "w-12 h-12"
                            }`}
                    >
                        <Icon size={large ? 24 : 20} className="text-blue-400" />
                    </div>

                    <h3 className={`font-normal text-white leading-snug mb-2.5 ${large ? "text-xl md:text-2xl mb-3" : "text-base md:text-lg"}`}>
                        {s.title}
                    </h3>

                    <p className={`text-white/55 leading-relaxed flex-1 ${large ? "text-base mb-6" : "text-sm mb-5"}`}>
                        {s.desc}
                    </p>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-2">
                        {s.points.map((pt) => (
                            <span
                                key={pt}
                                className={`rounded-full bg-white/5 text-white/45 border border-white/8 group-hover:bg-primary/10 group-hover:text-blue-300 group-hover:border-primary/20 transition-all duration-300 ${large ? "text-xs px-3 py-1.5" : "text-[11px] px-2.5 py-1"
                                    }`}
                            >
                                {pt}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </FadeIn>
    );
};

const Services = () => (
    <section
        id="services"
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background"
    >
        <RadialGradientBackground variant="about" />

        <div className="relative z-10 max-w-7xl mx-auto">

            {/* ── Header ── */}
            <FadeIn delay={60}>
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] bg-primary/10 border border-primary/20 rounded-full mb-5">
                        <Star className="w-4 h-4 text-white fill-white" />
                        <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                            What I Offer
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-5 leading-tight">
                        Services &{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                            Capabilities
                        </span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-xl mx-auto">
                        End-to-end frontend expertise — from first pixel to production deployment
                    </p>
                </div>
            </FadeIn>

            {/* ── Row 1: 2 wide cards ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {services.slice(0, 2).map((s, i) => (
                    <ServiceCard key={i} s={s} large delay={100 + i * 60} />
                ))}
            </div>

            {/* ── Row 2: 4 narrow cards ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.slice(2).map((s, i) => (
                    <ServiceCard key={i} s={s} large={false} delay={220 + i * 50} />
                ))}
            </div>

            {/* ── CTA strip ── */}
            <FadeIn delay={480}>
                <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.03] p-7 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <p className="text-lg text-white font-normal mb-1">
                            Have a project in mind?
                        </p>
                        <p className="text-base text-white/55">
                            I'm currently open to freelance work and full-time roles.
                        </p>
                    </div>

                    <a href="#contact"
                        className="inline-flex items-center gap-2.5 bg-white text-[#212121] rounded-lg px-6 py-3 text-sm font-medium border border-white/30 hover:bg-white/90 transition-colors duration-200 whitespace-nowrap shrink-0 group"
                    >
                        Let's Work Together
                        <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                    </a>
                </div>
            </FadeIn>
        </div >
    </section >
);

export default Services;
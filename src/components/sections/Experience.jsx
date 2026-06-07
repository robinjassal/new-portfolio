import React from "react";
import {
    MapPin, Clock, Calendar, Building2, CheckCircle2, Star,
} from "lucide-react";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const experiences = [
    {
        role: "Frontend Developer",
        company: "NJGRAPHICA",
        type: "current",
        badge: "Current",
        employment: "Full-time",
        period: "Nov 2025 — Present",
        duration: "Present",
        location: "Mandi Gobindgarh",
        logo: "/njgraphica-logo.png",
        logoFallback: "NJ",
        description:
            "Developing and delivering modern client-facing web applications using React.js, Next.js, and Tailwind CSS, transforming Figma designs into high-performance, responsive user interfaces.",
        bullets: [
            "Developed and delivered client landing pages using React.js, Next.js, and Tailwind CSS from Figma designs",
            "Collaborated with design and backend teams to build responsive, pixel-perfect user interfaces",
            "Implemented component-driven architecture and reusable UI patterns across projects",
            "Ensured cross-browser compatibility and responsive behavior across all device sizes",
        ],
    },
    {
        role: "Frontend Developer",
        company: "Appoctet Technologies Pvt. Ltd.",
        type: "past",
        badge: "Completed",
        employment: "Full-time",
        period: "Jun 2024 — Oct 2025",
        duration: "1 yr 5 mos",
        location: "Mumbai",
        logo: "/appoctet-logo.jpg",
        logoFallback: "AT",
        description:
            "Built scalable admin dashboards and web applications for multi-vendor platforms, focusing on responsive UI development, API integration, and reusable component architecture.",
        bullets: [
            "Built responsive UI for a multi-vendor store admin panel using React.js, Tailwind CSS, HTML, and CSS",
            "Integrated RESTful APIs to manage dynamic data and application workflows",
            "Created reusable component libraries to improve development speed and scalability",
            "Collaborated in Agile sprints, code reviews, and cross-functional product discussions",
        ],
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
                        <div className="relative mb-6 last:mb-4">

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
                                            className="relative z-10 w-full h-full object-cover"
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
                            </div>
                        </div>
                    </FadeIn>
                ))}

                {/* End cap */}
                <FadeIn delay={320}>
                    <div className="flex items-center gap-3 mt-10">
                        <div className="h-px flex-1 bg-white/8" />
                        <span className="text-xs text-white/30">Start of journey ·June  2024</span>
                        <div className="h-px flex-1 bg-white/8" />
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
);

export default Experience;
import React, { useState, useRef } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, Star } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import { BsGithub } from "react-icons/bs";
import edufant from "../../assets/edufant.png"
import brownliving from "../../assets/brownliving.png"
import marketyourdaycare from "../../assets/marketyourdaycare.png"
import flipbook from "../../assets/flipbook.png"

const projects = [
    {
        title: "Edufant JoSAA Counselling Tool",
        category: "Web App",
        description:
            "Built the full website and analytics dashboard with intuitive UI for browsing colleges, cutoffs, and branches.Integrated JOSAA listing APIs to dynamically fetch and display college data.",
        image: edufant,
        tags: ["Next.js", "JavaScript", "Cashfree", "Api Integration", "Tailwind CSS"],
        live: "https://edufant.in",
        github: "https://github.com/robinjassal",
        featured: true,
    },
    {
        title: "Brownliving's Seller Dashboard",
        category: "UI Components",
        description:
            "Designed the UI and implemented mobile-responsive layouts for an admin & seller dashboard.Integrated product listing and form APIs; resolved critical front-end bugs across the platform",
        image: brownliving,
        tags: ["React.js", "API", "Css", "Tailwind",],
        live: "https://grow.brownliving.in/",
        github: "https://github.com/robinjassal",

        featured: false,
    },
    {
        title: "Market Your Daycare Website",
        category: "Website",
        description:
            "Built a conversion-focused marketing website with responsive design and smooth navigation.",
        image: marketyourdaycare,
        tags: ["React.js", "TypeScript", "Storybook", "Tailwind CSS", "Radix UI"],
        live: "https://marketyourdaycare.com",
        github: "https://github.com/robinjassal",
        featured: false,
    },
    {
        title: "Electricmarshmallow Story Flipbook",
        category: "Animations Flipbook",
        description:
            "Built custom page-flip animations and interactive transitions using HTML, CSS, JavaScript, and GSAP for electric marshmallow group.",
        image: flipbook,
        tags: ["Html", "CSS", "Js", "GSAP"],
        live: "https://electricmarshmallow-thepark.netlify.app",
        github: "https://github.com/robinjassal",
        featured: false,
    },
];

const Projects = () => {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef(null);

    const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

    const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
        touchStartX.current = null;
    };

    const proj = projects[current];

    return (
        <section
            id="projects"
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
                                My Work
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-5 leading-tight">
                            Featured{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                                Projects
                            </span>
                        </h2>
                        <p className="text-lg text-white/70 max-w-xl mx-auto">
                            Showcasing my best work and achievements
                        </p>
                    </div>
                </FadeIn>

                {/* ── Carousel ── */}
                <FadeIn delay={120}>
                    <div
                        className="relative"
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                    >
                        {/* Main card */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04]">

                            {/* Image side */}
                            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] overflow-hidden bg-white/[0.03]">
                                {/* Category pill */}
                                <div className="absolute top-5 left-5 z-10">
                                    <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white/80 border border-white/15">
                                        {proj.category}
                                    </span>
                                </div>
                                {/* Action buttons */}
                                <div className="absolute bottom-5 right-5 z-10 flex gap-2">

                                    <a href={proj.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl bg-black/50 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all duration-200"
                                    >
                                        <BsGithub size={16} />
                                    </a>

                                    <a href={proj.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl bg-black/50 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all duration-200"
                                    >
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                                {/* Image */}
                                <img
                                    key={current}
                                    src={proj.image}
                                    alt={proj.title}
                                    className="w-full h-full object-cover transition-all duration-500"
                                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                                />
                                {/* Fallback gradient placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-transparent flex items-center justify-center -z-0">
                                    <div className="text-6xl font-bold text-white/5 select-none">
                                        {String(current + 1).padStart(2, "0")}
                                    </div>
                                </div>
                            </div>

                            {/* Content side */}
                            <div className="flex flex-col justify-between p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-white/8">
                                <div>
                                    {/* Counter */}
                                    <p className="text-xs text-white/30 tracking-[2px] uppercase mb-6">
                                        {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                                    </p>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-4 leading-tight">
                                        {proj.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-base text-white/60 leading-relaxed mb-8">
                                        {proj.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {proj.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-white/55 border border-white/10 hover:bg-primary/10 hover:text-blue-300 hover:border-primary/25 transition-all duration-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom row — CTA + nav */}
                                <div className="flex items-center justify-between gap-4 flex-wrap">
                                    <div className="flex gap-3">

                                        <a href={proj.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-white text-[#212121] rounded-lg px-5 py-2.5 text-sm font-medium border border-white/30 hover:bg-white/90 transition-colors duration-200"
                                        >
                                            <ExternalLink size={14} />
                                            Live Demo
                                        </a>

                                        <a href={proj.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-white/8 text-white rounded-lg px-5 py-2.5 text-sm font-medium border border-white/10 hover:bg-white/12 transition-colors duration-200"
                                        >
                                            <BsGithub size={14} />
                                            Code
                                        </a>
                                    </div>

                                    {/* Arrow nav */}
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={prev}
                                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200"
                                            aria-label="Previous project"
                                        >
                                            <ChevronLeft size={18} />
                                        </button>
                                        <button
                                            onClick={next}
                                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200"
                                            aria-label="Next project"
                                        >
                                            <ChevronRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div >

                        {/* ── Dot indicators ── */}
                        <div className="flex items-center justify-center gap-2 mt-8" >
                            {
                                projects.map((p, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        aria-label={`Go to project ${i + 1}`}
                                        className={`rounded-full transition-all duration-300 ${i === current
                                            ? "w-8 h-2 bg-primary"
                                            : "w-2 h-2 bg-white/20 hover:bg-white/40"
                                            }`}
                                    />
                                ))
                            }
                        </div >

                        {/* ── Thumbnail strip ── */}
                        < div className="hidden md:grid grid-cols-4 gap-3 mt-6" >
                            {
                                projects.map((p, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className={`relative rounded-xl overflow-hidden aspect-video border transition-all duration-300 ${i === current
                                            ? "border-primary/60 ring-2 ring-primary/20"
                                            : "border-white/8 opacity-50 hover:opacity-80 hover:border-white/20"
                                            }`}
                                    >
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => { e.currentTarget.style.display = "none"; }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2">
                                            <span className="text-[10px] text-white/80 font-medium leading-tight text-left">
                                                {p.title}
                                            </span>
                                        </div>
                                    </button>
                                ))
                            }
                        </div >
                    </div >
                </FadeIn >
            </div >
        </section >
    );
};

export default Projects;
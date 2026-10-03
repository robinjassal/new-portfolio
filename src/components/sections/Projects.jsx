import { useState, useRef } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, Star, Server } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import { BsGithub } from "react-icons/bs";
import edufant from "../../assets/edufant.png";
import brownliving from "../../assets/brownliving.png";
import marketyourdaycare from "../../assets/marketyourdaycare.png";
import devtinder from "../../assets/devtinder.png";
import appoctet from "../../assets/appoctet.png";

/*
 * `backend` is optional. When present, a "Backend work" note is shown on the card.
 * `github` is optional. When missing, the code buttons are hidden (e.g. company sites).
 * `image` can be null. A placeholder is shown instead.
 */
const projects = [
    {
        title: "Edufant JoSAA Counselling Tool",
        category: "Web App",
        description:
            "Built a JEE college prediction platform with rank-based predictions and college, cutoff and branch browsing. Integrated JoSAA listing APIs with debounced calls, and built an admin analytics dashboard.",
        image: edufant,
        tags: ["Next.js", "JavaScript", "Tailwind CSS", "REST APIs", "Cashfree"],
        live: "https://edufant.in",
        github: "https://github.com/robinjassal",
    },
    {
        title: "Market Your Daycare Website",
        category: "Website + CRM",
        description:
            "Built the frontend of a conversion-focused marketing website with an internal CRM, using custom UI components and responsive layouts in Next.js.",
        backend:
            "Built an Express.js backend with Nodemailer for SMTP-based email, plus REST APIs for blog content management.",
        image: marketyourdaycare,
        tags: ["Next.js", "Node.js", "Express.js", "Nodemailer", "Tailwind CSS", "JavaScript"],
        live: "https://marketyourdaycare.com",
        github: "https://github.com/robinjassal",
    },
    {
        title: "Appoctet Company Website",
        category: "Website",
        description:
            "Built the company website entirely in Next.js, with smooth Framer Motion page transitions, a responsive layout and fast page loads.",
        image: appoctet,
        tags: ["Next.js", "Framer Motion", "Responsive Design"],
        live: "https://www.appoctet.com",
    },
    {
        title: "DevTinder",
        category: "Full-Stack App",
        description:
            "Built a full-stack developer connection platform where developers create profiles and send, receive and manage connection requests.",
        backend:
            "Built the Node.js and Express.js API on MongoDB, integrated Razorpay payments, and automated cleanup of expired connection requests with node-cron.",
        image: devtinder,
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "node-cron"],
        live: "https://dev-tinder-1-s10n.onrender.com",
        github: "https://github.com/robinjassal/Dev-Tinder",
    },

    {
        title: "Brownliving's Seller Dashboard",
        category: "UI Components",
        description:
            "Designed the UI and built mobile-responsive layouts for an admin and seller dashboard. Integrated product listing and form APIs, and fixed critical frontend bugs across the platform.",
        image: brownliving,
        tags: ["React.js", "REST APIs", "CSS", "Tailwind CSS"],
        live: "https://grow.brownliving.in/",
        github: "https://github.com/robinjassal",
    },
];

const getInitials = (title) =>
    title
        .split(" ")
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase();

const iconButton =
    "w-10 h-10 rounded-xl bg-black/50 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all duration-200";

const Projects = () => {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef(null);

    const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

    const onTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) next();
            else prev();
        }
        touchStartX.current = null;
    };

    const proj = projects[current];

    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
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
                        <h2
                            id="projects-heading"
                            className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-5 leading-tight"
                        >
                            Featured{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                                Projects
                            </span>
                        </h2>
                        <p className="text-lg text-white/70 max-w-xl mx-auto">
                            Frontend interfaces and full-stack MERN applications I've built
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
                                {/* Placeholder (behind the image; visible when there is no image or it fails to load) */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-transparent flex items-center justify-center">
                                    <span className="text-7xl font-medium text-white/10 select-none">
                                        {getInitials(proj.title)}
                                    </span>
                                </div>

                                {proj.image && (
                                    <img
                                        key={current}
                                        src={proj.image}
                                        alt={`${proj.title} screenshot`}
                                        className="relative w-full h-full object-cover"
                                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                                    />
                                )}

                                {/* Category pill */}
                                <div className="absolute top-5 left-5 z-10">
                                    <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white/80 border border-white/15">
                                        {proj.category}
                                    </span>
                                </div>

                                {/* Action buttons */}
                                <div className="absolute bottom-5 right-5 z-10 flex gap-2">
                                    {proj.github && (
                                        <a
                                            href={proj.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${proj.title} source code on GitHub`}
                                            className={iconButton}
                                        >
                                            <BsGithub size={16} />
                                        </a>
                                    )}
                                    <a
                                        href={proj.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Open ${proj.title} live site`}
                                        className={iconButton}
                                    >
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>

                            {/* Content side */}
                            <div className="flex flex-col justify-between p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-white/8">
                                <div>
                                    {/* Counter */}
                                    <p
                                        className="text-xs text-white/40 tracking-[2px] mb-6"
                                        aria-live="polite"
                                    >
                                        {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                                    </p>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-4 leading-tight">
                                        {proj.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-base text-white/60 leading-relaxed mb-6">
                                        {proj.description}
                                    </p>

                                    {/* Backend work (only for projects that have it) */}
                                    {proj.backend && (
                                        <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20 mb-6">
                                            <div
                                                className="w-8 h-8 shrink-0 rounded-lg bg-blue-500/15 border border-blue-500/25 flex items-center justify-center"
                                                aria-hidden="true"
                                            >
                                                <Server size={15} className="text-blue-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-white mb-1">
                                                    Backend work
                                                </p>
                                                <p className="text-sm text-white/60 leading-relaxed">
                                                    {proj.backend}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Tags */}
                                    <ul className="flex flex-wrap gap-2 mb-10">
                                        {proj.tags.map((tag) => (
                                            <li
                                                key={tag}
                                                className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-white/55 border border-white/10 hover:bg-primary/10 hover:text-blue-300 hover:border-primary/25 transition-all duration-200"
                                            >
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bottom row — CTA + nav */}
                                <div className="flex items-center justify-between gap-4 flex-wrap">
                                    <div className="flex gap-3">
                                        <a
                                            href={proj.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-white text-[#212121] rounded-lg px-5 py-2.5 text-sm font-medium border border-white/30 hover:bg-white/90 transition-colors duration-200"
                                        >
                                            <ExternalLink size={14} />
                                            Live Demo
                                        </a>

                                        {proj.github && (
                                            <a
                                                href={proj.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-white/8 text-white rounded-lg px-5 py-2.5 text-sm font-medium border border-white/10 hover:bg-white/12 transition-colors duration-200"
                                            >
                                                <BsGithub size={14} />
                                                Code
                                            </a>
                                        )}
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
                        </div>

                        {/* ── Dot indicators ── */}
                        <div className="flex items-center justify-center gap-2 mt-8">
                            {projects.map((p, i) => (
                                <button
                                    key={p.title}
                                    onClick={() => setCurrent(i)}
                                    aria-label={`Go to ${p.title}`}
                                    aria-current={i === current}
                                    className={`rounded-full transition-all duration-300 ${i === current
                                        ? "w-8 h-2 bg-primary"
                                        : "w-2 h-2 bg-white/20 hover:bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>

                        {/* ── Thumbnail strip ── */}
                        <div
                            className="hidden md:grid gap-3 mt-6"
                            style={{ gridTemplateColumns: `repeat(${projects.length}, minmax(0, 1fr))` }}
                        >
                            {projects.map((p, i) => (
                                <button
                                    key={p.title}
                                    onClick={() => setCurrent(i)}
                                    aria-label={`Show ${p.title}`}
                                    className={`relative rounded-xl overflow-hidden aspect-video border transition-all duration-300 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-transparent ${i === current
                                        ? "border-primary/60 ring-2 ring-primary/20"
                                        : "border-white/8 opacity-50 hover:opacity-80 hover:border-white/20"
                                        }`}
                                >
                                    {p.image && (
                                        <img
                                            src={p.image}
                                            alt=""
                                            className="w-full h-full object-cover"
                                            onError={(e) => { e.currentTarget.style.display = "none"; }}
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2">
                                        <span className="text-[10px] text-white/80 font-medium leading-tight text-left">
                                            {p.title}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Projects;
import { useState } from "react";
import {
    SiReact,
    SiNextdotjs,
    SiJavascript,
    SiRedux,
    SiTailwindcss,
    SiHtml5,
    SiCss,
    SiFramer,
    SiGreensock,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMongoose,
    SiJsonwebtokens,
    SiPostman,
    SiGit,
    SiFigma,
    SiNetlify,
} from "react-icons/si";
import {
    Star,
    CreditCard,
    Mail,
    Clock,
    ShieldCheck,
    Layers,
    GitBranch,
    Server,
    Terminal,
    Code2,
} from "lucide-react";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

/*
 * Skills taken from the resume.
 * `core: true` marks the MERN stack so it gets a small highlight.
 * Brand icons come from react-icons/si; where a brand icon isn't
 * available, a lucide icon is used instead.
 */
const CATEGORIES = [
    {
        id: "frontend",
        label: "Frontend",
        blurb: "Responsive, pixel-perfect interfaces built from Figma designs.",
        skills: [
            { name: "React.js", icon: SiReact, color: "#61DAFB", core: true },
            { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
            { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
            { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS3", icon: SiCss, color: "#1572B6" },
            { name: "Framer Motion", icon: SiFramer, color: "#ffffff" },
            { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
            { name: "Prime React", icon: Layers, color: "#60a5fa" },
        ],
    },
    {
        id: "backend",
        label: "Backend",
        blurb: "REST APIs, authentication, payments and email for full-stack projects.",
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E", core: true },
            { name: "Express.js", icon: SiExpress, color: "#ffffff", core: true },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248", core: true },
            { name: "Mongoose", icon: SiMongoose, color: "#F04D35" },
            { name: "JWT Auth", icon: SiJsonwebtokens, color: "#D63AFF" },
            { name: "bcrypt", icon: ShieldCheck, color: "#60a5fa" },
            { name: "Razorpay", icon: CreditCard, color: "#3395FF" },
            { name: "Nodemailer", icon: Mail, color: "#22C55E" },
            { name: "node-cron", icon: Clock, color: "#F59E0B" },
        ],
    },
    {
        id: "tools",
        label: "Tools",
        blurb: "Day-to-day tooling for collaboration, design handoff and deployment.",
        skills: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "Bitbucket", icon: GitBranch, color: "#2684FF" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
            { name: "VS Code", icon: Code2, color: "#007ACC" },
            { name: "WinSCP", icon: Terminal, color: "#60a5fa" },
            { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
            { name: "Render", icon: Server, color: "#ffffff" },
        ],
    },
];

const TechStack = () => {
    const [activeId, setActiveId] = useState(CATEGORIES[0].id);
    const active = CATEGORIES.find((c) => c.id === activeId);

    return (
        <section
            id="tech"
            className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden border-y border-y-amber-50/20"
        >
            <RadialGradientBackground variant="about" />

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Header */}
                <FadeIn delay={60}>
                    <div className="text-center mb-12">
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
                            Frontend-first, with full-stack MERN experience from design to deployment.
                        </p>
                    </div>
                </FadeIn>

                {/* Category tabs */}
                <FadeIn delay={120}>
                    <div
                        role="tablist"
                        aria-label="Skill categories"
                        className="flex justify-center mb-4"
                    >
                        <div className="inline-flex p-1 rounded-full bg-white/[0.04] border border-white/10">
                            {CATEGORIES.map((cat) => {
                                const isActive = cat.id === activeId;
                                return (
                                    <button
                                        key={cat.id}
                                        role="tab"
                                        id={`tab-${cat.id}`}
                                        aria-selected={isActive}
                                        aria-controls={`panel-${cat.id}`}
                                        onClick={() => setActiveId(cat.id)}
                                        className={`px-5 sm:px-7 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 ${isActive
                                            ? "bg-white text-[#212121]"
                                            : "text-white/60 hover:text-white"
                                            }`}
                                    >
                                        {cat.label}
                                        <span
                                            className={`ml-2 text-xs ${isActive ? "text-[#212121]/60" : "text-white/35"
                                                }`}
                                        >
                                            {cat.skills.length}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <p className="text-center text-base text-white/55 mb-10 min-h-[1.5rem]">
                        {active.blurb}
                    </p>
                </FadeIn>

                {/* Skills grid */}
                <div
                    key={active.id}
                    role="tabpanel"
                    id={`panel-${active.id}`}
                    aria-labelledby={`tab-${active.id}`}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
                >
                    {active.skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={skill.name}
                                className="group relative flex flex-col items-center justify-center gap-4 p-6 rounded-2xl border bg-white/[0.04] border-white/10 hover:border-blue-500/30 hover:bg-white/[0.07] transition-colors duration-300"
                            >
                                {skill.core && (
                                    <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300">
                                        MERN
                                    </span>
                                )}
                                <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors duration-300">
                                    <Icon
                                        size={26}
                                        style={{ color: skill.color }}
                                        className="transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                                    />
                                </div>
                                <span className="text-sm font-medium tracking-wide text-center text-white/60 group-hover:text-white/90 transition-colors duration-300">
                                    {skill.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
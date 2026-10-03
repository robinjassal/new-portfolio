import { useEffect, useRef, useState } from "react";
import {
    SiReact,
    SiNextdotjs,
    SiJavascript,
    SiRedux,
    SiTailwindcss,
    SiHtml5,
    SiCss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostman,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { GitBranch, Smartphone, Star } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const CATEGORIES = {
    frontend: {
        title: "Frontend Development",
        description: "Where most of my experience is.",
        skills: [
            { name: "HTML", icon: SiHtml5, years: "2+ years", level: "Expert", pct: 85 },
            { name: "CSS", icon: SiCss, years: "2+ years", level: "Expert", pct: 80 },
            { name: "Tailwind CSS", icon: SiTailwindcss, years: "2+ years", level: "Advanced", pct: 85 },
            { name: "JavaScript", icon: SiJavascript, years: "2+ years", level: "Intermediate", pct: 80 },
            { name: "React.js", icon: SiReact, years: "2+ years", level: "Intermediate", pct: 76 },
            { name: "Next.js", icon: SiNextdotjs, years: "1+ years", level: "Intermediate", pct: 75 },
            { name: "Redux Toolkit", icon: SiRedux, years: "1+ years", level: "Beginner", pct: 55 },
        ],
    },
    backend: {
        title: "Backend (MERN)",
        description: "Growing, with full-stack projects behind it.",
        skills: [
            { name: "Node.js", icon: SiNodedotjs, years: "~1 year", level: "Beginner", pct: 50 },
            { name: "Express.js", icon: SiExpress, years: "~1 year", level: "Beginner", pct: 50 },
            { name: "MongoDB", icon: SiMongodb, years: "~1 year", level: "Beginner", pct: 45 },
        ],
        alsoUsed: ["Mongoose", "JWT Auth", "bcrypt", "Razorpay", "Nodemailer", "node-cron"],
    },
    tools: {
        title: "Tools & Workflow",
        description: "How I work with design and API teams.",
        skills: [
            { name: "Responsive Design", icon: Smartphone, years: "2+ years", level: "Advanced", pct: 80 },
            { name: "Postman", icon: SiPostman, years: "2+ years", level: "Intermediate", pct: 75 },
            { name: "Figma", icon: FiFigma, years: "2+ years", level: "Intermediate", pct: 68 },
            { name: "Git & GitHub", icon: GitBranch, years: "2+ years", level: "Intermediate", pct: 65 },
        ],
    },
};

// Each level has its own badge and bar colors.
const LEVEL_STYLES = {
    Expert: {
        badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
        bar: "from-blue-600 via-blue-400 to-cyan-300",
        dot: "bg-blue-400",
    },
    Advanced: {
        badge: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
        bar: "from-indigo-600 via-indigo-400 to-blue-300",
        dot: "bg-indigo-400",
    },
    Intermediate: {
        badge: "bg-amber-500/15 text-amber-300 border-amber-500/30",
        bar: "from-amber-600 via-amber-400 to-yellow-300",
        dot: "bg-amber-400",
    },
    Beginner: {
        badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
        bar: "from-emerald-600 via-emerald-400 to-green-300",
        dot: "bg-emerald-400",
    },
};

/* -------------------------------------------------------------------------- */
/*  Hooks                                                                     */
/* -------------------------------------------------------------------------- */

// Returns [ref, inView]. Fires once, so bars animate the first time a card scrolls in.
function useInViewOnce(threshold = 0.2) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (typeof IntersectionObserver === "undefined") {
            setInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, inView];
}

/* -------------------------------------------------------------------------- */
/*  Components                                                                */
/* -------------------------------------------------------------------------- */

const SkillRow = ({ skill, index, animate }) => {
    const Icon = skill.icon;
    const level = LEVEL_STYLES[skill.level];

    return (
        <li className="group">
            <div className="flex items-center justify-between gap-3 mb-2.5 ">
                <div className="flex items-center gap-3 min-w-0">
                    <div
                        className="w-9 h-9 shrink-0 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center transition-colors duration-200 group-hover:bg-blue-500/15 group-hover:border-blue-500/30"
                        aria-hidden="true"
                    >
                        <Icon size={16} className="text-blue-400" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-[15px] font-medium text-white leading-tight truncate">
                            {skill.name}
                        </p>
                        <p className="text-xs text-white/40">{skill.years}</p>
                    </div>
                </div>

                <span
                    className={`inline-flex items-center gap-1.5 shrink-0 text-xs font-medium px-3 py-1 rounded-full border ${level.badge}`}
                >
                    <span className={`w-1.5 h-1.5 rounded-full ${level.dot}`} aria-hidden="true" />
                    {skill.level}
                </span>
            </div>

            <div
                className="h-[5px] w-full rounded-full bg-white/[0.07] overflow-hidden"
                role="progressbar"
                aria-label={`${skill.name} proficiency: ${skill.level}`}
                aria-valuenow={skill.pct}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    className={`h-full rounded-full bg-gradient-to-r ${level.bar} transition-[width] duration-1000 ease-out motion-reduce:transition-none`}
                    style={{
                        width: animate ? `${skill.pct}%` : "0%",
                        transitionDelay: animate ? `${index * 70}ms` : "0ms",
                    }}
                />
            </div>
        </li>
    );
};

const CategoryCard = ({ category, fill = false }) => {
    const [ref, inView] = useInViewOnce();

    return (
        <div
            ref={ref}
            className="flex flex-col rounded-2xl border border-white/20 bg-white/[0.04] p-6 md:p-8"
        >
            <div className="mb-7 pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-1 h-6 rounded-full bg-gradient-to-b from-blue-400 to-blue-600" />
                    <h3 className="text-xl font-medium text-white">{category.title}</h3>
                </div>
                <p className="text-sm text-white/50 mt-2 ml-4">{category.description}</p>
            </div>

            <ul className={`flex flex-col gap-6 ${fill ? "flex-1 justify-between" : ""}`}>
                {category.skills.map((skill, i) => (
                    <SkillRow key={skill.name} skill={skill} index={i} animate={inView} />
                ))}
            </ul>

            {category.alsoUsed && (
                <div className="mt-7 pt-5 border-t border-white/10">
                    <p className="text-xs text-white/50 mb-3">Also used in projects</p>
                    <ul className="flex flex-wrap gap-2">
                        {category.alsoUsed.map((item) => (
                            <li
                                key={item}
                                className="text-xs text-white/70 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const SkillsRating = () => (
    <section
        id="skills"
        aria-labelledby="skills-heading"
        className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden  border-y border-y-amber-50/20"
    >
        <RadialGradientBackground variant="about" />

        <div className="relative z-10 max-w-7xl mx-auto">
            {/* Header */}
            <FadeIn delay={60}>
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] bg-primary/10 border border-primary/20 rounded-full mb-5">
                        <Star className="w-4 h-4 text-white fill-white" />
                        <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                            My Expertise
                        </span>
                    </div>
                    <h2
                        id="skills-heading"
                        className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-5 leading-tight"
                    >
                        Skills &{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                            Technologies
                        </span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-xl mx-auto">
                        Frontend is my strongest area. I also build backends with the MERN stack
                        and I'm still growing there.
                    </p>
                </div>
            </FadeIn>

            {/* Frontend on the left, Backend + Tools stacked on the right */}
            <FadeIn delay={140}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <CategoryCard category={CATEGORIES.frontend} fill />

                    <div className="flex flex-col gap-6">
                        <CategoryCard category={CATEGORIES.backend} />
                        <CategoryCard category={CATEGORIES.tools} />
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
);

export default SkillsRating;
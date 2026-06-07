import React from "react";
import { ArrowUp, Code2, Heart, Mail, MapPin } from "lucide-react";
import { DiGithub } from "react-icons/di";
import { LiaLinkedin } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
];

const socials = [
    { icon: DiGithub, label: "GitHub", href: "https://github.com/robinjassal" },
    { icon: LiaLinkedin, label: "LinkedIn", href: "https://in.linkedin.com/in/robin-jassal-918a7325b?trk=people-guest_people_search-card" },
    { icon: Mail, label: "Email", href: "mailto:robinjassal601@gmail.com" },
];

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-background overflow-hidden">

            {/* Top glow line */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                    background:
                        "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.4) 30%, rgba(147,197,253,0.9) 50%, rgba(59,130,246,0.4) 70%, transparent 100%)",
                }}
            />

            {/* Background radial glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── CTA Banner ── */}
                <div className="py-14 border-b border-white/6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl md:text-4xl font-normal text-white mb-2 leading-tight">
                                Ready to build something{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                                    great?
                                </span>
                            </h3>
                            <p className="text-base text-white/50">
                                Open to full-time opportunities.
                            </p>
                        </div>

                        <a href="#contact"
                            className="shrink-0 inline-flex items-center gap-2.5 bg-white text-[#212121] rounded-lg px-7 py-3 text-sm font-medium border border-white/30 hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            Let's Work Together
                        </a>
                    </div>
                </div>

                {/* ── Main body ── */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-10 md:gap-16">

                    {/* Brand */}
                    <div className="flex flex-col gap-5">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/12 border border-blue-500/25 flex items-center justify-center">
                                <Code2 size={18} className="text-blue-400" />
                            </div>
                            <span className="text-xl font-medium text-white tracking-wide">
                                Robin Jassal<span className="text-blue-400">.</span>
                            </span>
                        </div>

                        <p className="text-sm text-white/45 leading-relaxed max-w-[280px]">
                            Frontend developer crafting fast, accessible, and beautiful web
                            experiences using React, Next.js, and Tailwind CSS.
                        </p>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-xs text-white/35">
                            <MapPin size={12} className="text-blue-400/70" />
                            Punjab, India
                        </div>

                        {/* Availability */}
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-emerald-500/8 border border-emerald-500/15 w-fit">
                            <div className="relative">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
                            </div>
                            <span className="text-xs text-emerald-400/80">
                                Available for work
                            </span>
                        </div>

                        {/* Social icon row */}
                        <div className="flex items-center gap-2 mt-1">
                            {socials.map(({ icon: Icon, label, href }) => (

                                <a key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/25 transition-all duration-200"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav */}
                    <div className="flex flex-col gap-1">
                        <p className="text-[11px] text-white/25 uppercase tracking-[2px] mb-3">
                            Navigation
                        </p>
                        {navLinks.map((link) => (

                            <a key={link.label}
                                href={link.href}
                                className="group flex items-center gap-2 py-1.5 text-sm text-white/45 hover:text-white transition-colors duration-200 w-fit"
                            >
                                <span className="w-0 h-px bg-blue-400 group-hover:w-3 transition-all duration-200" />
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Connect */}
                    <div className="flex flex-col gap-1">
                        <p className="text-[11px] text-white/25 uppercase tracking-[2px] mb-3">
                            Connect
                        </p>
                        {socials.map(({ icon: Icon, label, href }) => (

                            <a key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 py-1.5 text-sm text-white/45 hover:text-white transition-colors duration-200 w-fit"
                            >
                                <Icon
                                    size={14}
                                    className="text-white/25 group-hover:text-blue-400 transition-colors duration-200 shrink-0"
                                />
                                {label}
                            </a>
                        ))}

                        {/* Tech stack pills */}
                        <div className="mt-5 pt-5 border-t border-white/6">
                            <p className="text-[11px] text-white/25 uppercase tracking-[2px] mb-3">
                                Built with
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Next.js", "Tailwind CSS", "TypeScript"].map((t) => (
                                    <span
                                        key={t}
                                        className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-white/35 border border-white/8"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div >
                </div >

                {/* ── Bottom bar ── */}
                <div div className="border-t border-white/6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3" >
                    <p className="text-xs text-white/25 flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
                        © {year} Robin Jassal. Made with
                        <Heart size={11} className="text-blue-400 fill-blue-400" />

                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group inline-flex items-center gap-2 text-xs text-white/30 hover:text-white/70 transition-colors duration-200"
                    >
                        Back to top
                        <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-blue-500/15 group-hover:border-blue-500/20 transition-all duration-200">
                            <ArrowUp
                                size={11}
                                className="group-hover:-translate-y-0.5 transition-transform duration-200"
                            />
                        </div>
                    </button>
                </div >
            </div >
        </footer >
    );
};

export default Footer;
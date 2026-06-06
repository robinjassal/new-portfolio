import React, { useState } from "react";
import {
    Mail, MapPin,
    Send, Star, CheckCircle2, AlertCircle, Loader2,
} from "lucide-react";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import { PERSONAL_INFO } from "../../utils/constants";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "yourname@gmail.com",
        href: "mailto:yourname@gmail.com",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Ludhiana, Punjab, India",
        href: null,
    },
];

const socials = [
    { icon: BsGithub, label: "GitHub", href: "https://github.com" },
    { icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: BsTwitterX, label: "Twitter", href: "https://twitter.com" },
];

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [errors, setErrors] = useState({});

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.email.trim()) e.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
        if (!form.message.trim()) e.message = "Message is required";
        return e;
    };

    const handleChange = (field) => (e) => {
        setForm((f) => ({ ...f, [field]: e.target.value }));
        if (errors[field]) setErrors((err) => ({ ...err, [field]: null }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }

        setStatus("loading");
        try {
            // ── Replace this block with your real API call ──
            await new Promise((res) => setTimeout(res, 1800));
            // Example real call:
            // await fetch("/api/contact", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify(form),
            // });
            setStatus("success");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch {
            setStatus("error");
        }
    };

    const inputBase =
        "w-full bg-white/[0.05] border rounded-xl px-4 py-3 text-[15px] text-white placeholder:text-white/30 outline-none transition-all duration-200 focus:bg-white/[0.07]";
    const inputNormal = `${inputBase} border-white/10 focus:border-primary/60 focus:ring-2 focus:ring-primary/15`;
    const inputError = `${inputBase} border-red-500/50 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/10`;

    return (
        <section
            id="contact"
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
                                Get In Touch
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-5 leading-tight">
                            Let's Work{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                                Together
                            </span>
                        </h2>
                        <p className="text-lg text-white/70 max-w-xl mx-auto">
                            Have a project in mind? Let's discuss how we can bring your ideas to life.
                        </p>
                    </div>
                </FadeIn>

                {/* ── Two-column layout ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 items-start">

                    {/* ── Left — Form ── */}
                    <FadeIn delay={120}>
                        <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-7 md:p-10">

                            {/* Success state */}
                            {status === "success" ? (
                                <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
                                    <div className="w-16 h-16 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
                                        <CheckCircle2 size={32} className="text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-normal text-white mb-2">Message Sent!</h3>
                                        <p className="text-base text-white/60">
                                            Thanks for reaching out. I'll get back to you within 24 hours.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-2 text-sm text-primary hover:text-blue-300 underline underline-offset-4 transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

                                    {/* Name + Email row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm text-white/60 font-medium">
                                                Name <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={form.name}
                                                onChange={handleChange("name")}
                                                placeholder="Your name"
                                                className={errors.name ? inputError : inputNormal}
                                            />
                                            {errors.name && (
                                                <p className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
                                                    <AlertCircle size={11} /> {errors.name}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm text-white/60 font-medium">
                                                Email <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                value={form.email}
                                                onChange={handleChange("email")}
                                                placeholder="your@email.com"
                                                className={errors.email ? inputError : inputNormal}
                                            />
                                            {errors.email && (
                                                <p className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
                                                    <AlertCircle size={11} /> {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm text-white/60 font-medium">Subject</label>
                                        <input
                                            type="text"
                                            value={form.subject}
                                            onChange={handleChange("subject")}
                                            placeholder="Project inquiry / Job opportunity / Collaboration"
                                            className={inputNormal}
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm text-white/60 font-medium">
                                            Message <span className="text-red-400">*</span>
                                        </label>
                                        <textarea
                                            rows={6}
                                            value={form.message}
                                            onChange={handleChange("message")}
                                            placeholder="Tell me about your project, timeline, and budget..."
                                            className={`${errors.message ? inputError : inputNormal} resize-none`}
                                        />
                                        <div className="flex items-center justify-between">
                                            {errors.message ? (
                                                <p className="text-xs text-red-400 flex items-center gap-1">
                                                    <AlertCircle size={11} /> {errors.message}
                                                </p>
                                            ) : <span />}
                                            <span className="text-xs text-white/25 ml-auto">
                                                {form.message.length} / 1000
                                            </span>
                                        </div>
                                    </div>

                                    {/* Error banner */}
                                    {status === "error" && (
                                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-300">
                                            <AlertCircle size={16} className="shrink-0" />
                                            Something went wrong. Please try again or email me directly.
                                        </div>
                                    )}

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full inline-flex items-center justify-center gap-2.5 bg-white text-[#212121] rounded-xl px-6 py-3.5 text-base font-medium border border-white/30 hover:bg-white/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 mt-1"
                                    >
                                        {status === "loading" ? (
                                            <>
                                                <Loader2 size={18} className="animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={16} />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </FadeIn>

                    {/* ── Right — Info ── */}
                    <FadeIn delay={200}>
                        <div className="flex flex-col gap-5">

                            {/* Let's Connect card */}
                            <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-7">
                                <h3 className="text-2xl font-normal text-white mb-3">Let's Connect</h3>
                                <p className="text-base text-white/60 leading-relaxed mb-6">
                                    I'm always open to discussing new projects, creative ideas, or
                                    opportunities. Whether it's freelance work or a full-time role —
                                    feel free to reach out!
                                </p>

                                {/* Contact info rows */}
                                <div className="flex flex-col gap-3">
                                    {contactInfo.map(({ icon: Icon, label, value, href }) => (
                                        <div
                                            key={label}
                                            className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/8 hover:border-blue-500/25 hover:bg-white/[0.06] transition-all duration-200"
                                        >
                                            <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                                <Icon size={18} className="text-blue-400" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-white/40 mb-0.5">{label}</p>
                                                {href ? (

                                                    <a href={href}
                                                        className="text-sm text-white hover:text-blue-300 transition-colors duration-200"
                                                    >
                                                        {value}
                                                    </a>
                                                ) : (
                                                    <p className="text-sm text-white">{value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Availability badge */}
                            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.06] p-5 flex items-center gap-4">
                                <div className="relative shrink-0">
                                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-60" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">Available for Work</p>
                                    <p className="text-xs text-white/50 mt-0.5">
                                        Open to freelance & full-time opportunities
                                    </p>
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-6">
                                <p className="text-sm text-white/50 mb-4 tracking-wide">
                                    Connect with me
                                </p>
                                <div className="flex gap-3">
                                    {socials.map(({ icon: Icon, label, href }) => (

                                        <a key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={label}
                                            className="flex-1 flex flex-col items-center gap-2 py-3 rounded-xl bg-white/5 border border-white/8 hover:bg-blue-500/10 hover:border-blue-500/25 hover:text-blue-400 text-white/50 transition-all duration-200 group"
                                        >
                                            <Icon size={18} className="group-hover:scale-110 transition-transform duration-200" />
                                            <span className="text-[11px]">{label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Response time */}
                            <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-4 flex items-center justify-between">
                                <span className="text-sm text-white/45">Avg. response time</span>
                                <span className="text-sm font-medium text-white">Within 24 hours</span>
                            </div>

                        </div>
                    </FadeIn>
                </div >
            </div >
        </section >
    );
};

export default Contact;
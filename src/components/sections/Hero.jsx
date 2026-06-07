import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiReact,
  SiCss,
  SiJavascript,
} from "react-icons/si";
import { PERSONAL_INFO, STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import hero from "../../assets/hero.png";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-background">
      <RadialGradientBackground variant="hero" />

      {/* content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left column -content */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full mb-4">
                <Star className="w-4 h-4 text-white fill-white" />
                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                  {PERSONAL_INFO.title} | {PERSONAL_INFO.location}{" "}
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                Frontend Developer
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg text-white/70 max-w-[550px] mb-6">
                Frontend Developer with 2 years of experience building responsive and user-friendly web applications using React.js, Next.js, HTML, CSS, and Tailwind CSS. Passionate about creating clean interfaces, optimizing performance, and delivering seamless user experiences.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-0 mb-12 group"
              >
                <div className="relative z-10 bg-white text-[#212121] rounded-lg px-4 py-2.5 font-medium border border-white/30">
                  Get in Touch
                </div>
              </button>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-full">
                {STATS.map((stat, i) => (
                  <div
                    key={i}
                    className="text-center border-r border-white/70 pr-8 xl:pr-10 last:border-r-0"
                  >
                    <div className="text-2xl font-semibold text-primary mb-3">
                      {stat?.value}
                    </div>
                    <p className="text-sm md:text-base text-white leading-snug">
                      {stat?.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          {/* right column -content */}
          <div>
            <FadeIn delay={200}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-[500px] mx-auto md:ml-auto group">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                  </div>
                  {/* image container */}
                  <div className="relative rounded-2xl overflow-hidden w-full m-[2.5px] h-[calc(100%-4px)]">
                    <img
                      src={hero}
                      alt="developer at work"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* technologies logos */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <FadeIn delay={500}>
                      <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border-primary/10 rounded-full px-6 py-2.5">
                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <SiHtml5 className="w-full h-full text-primary" />
                        </div>
                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <SiCss className="w-full h-full text-primary" />
                        </div>
                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <SiJavascript className="w-full h-full text-primary" />
                        </div>
                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <SiNextdotjs className="w-full h-full text-primary" />
                        </div>
                        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <SiTailwindcss className="w-full h-full text-primary" />
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      <FadeIn delay={700}>
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-primary transition-colors duration-300 z-999" // 👈 add z-20
        >
          <span className="text-sm tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full animate-scroll" />
          </div>
        </button>
      </FadeIn>
    </section>
  );
}

export default Hero;

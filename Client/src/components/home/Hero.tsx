import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/animation";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const Hero = () => {
  const { resolvedTheme } = useTheme();

  const heroBackground =
    resolvedTheme === "dark"
      ? "/hero-background.png"
      : "/hero-background-light.png";

  return (
    <section
      id="home"
      className={`relative h-screen overflow-hidden transition-colors duration-500 ${resolvedTheme === "dark" ? "bg-background text-foreground" : "bg-[#F7F6F2] text-[#1A1A1A]"
        }`}
    >
      {/* Background Image: Responsive opacity & alignment for clear text readability on mobile/tablet */}
      <img
        src={heroBackground}
        alt="Hero Background"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center lg:object-right pointer-events-none select-none transition-opacity duration-500 opacity-30 md:opacity-70 lg:opacity-100"
      />

      {/* Responsive Left & Top Overlay Gradient (Fixes background bleed on mobile & desktop) */}
      <div
        className={`absolute inset-0 z-[1] transition-all duration-500 ${resolvedTheme === "dark"
          ? "bg-gradient-to-b from-black/80 via-black/60 to-background md:bg-gradient-to-r md:from-black md:via-black/75 md:to-transparent"
          : "bg-gradient-to-b from-[#F7F6F2]/95 via-[#F7F6F2]/80 to-[#F7F6F2] md:bg-gradient-to-r md:from-[#F7F6F2] md:via-[#F4F4F0]/85 md:to-transparent"
          }`}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            resolvedTheme === "dark"
              ? "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,.45))"
              : "radial-gradient(circle at center, transparent 45%, rgba(217,217,217,.25))",
        }}
      />

      {/* Hero Content */}
      <motion.div
        variants={staggerContainer(0.15, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="absolute left-6 top-1/2 z-20 w-full max-w-[850px] -translate-y-[52%] pr-12 sm:left-8 md:left-16 xl:left-24"
      >
        {/* Heading: Responsive font sizes to fit nicely on all viewports */}
        <motion.h1
          variants={fadeIn("up", 0.15)}
          className="mt-4 md:mt-8 font-black tracking-[-0.07em] leading-[0.88] md:leading-[0.84] text-[48px] sm:text-[68px] md:text-[88px] lg:text-[110px] xl:text-[122px]"
        >
          <span className="block">Designing</span>
          <span className="block">Digital</span>
          <span
            className={`block ${resolvedTheme === "dark" ? "text-white/35" : "text-[#2F2F2F]/40"
              }`}
          >
            Experiences.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeIn("up", 0.25)}
          className={`mt-6 md:mt-10 max-w-[560px] text-base leading-7 sm:text-lg sm:leading-9 md:text-xl ${resolvedTheme === "dark" ? "text-white/55" : "text-[#4A4A4A]"
            }`}
        >
          I build intuitive, elegant and high-performance web experiences that
          connect{" "}
          <span
            className={`font-medium ${resolvedTheme === "dark" ? "text-white" : "text-[#1A1A1A]"
              }`}
          >
            ideas to impact.
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeIn("up", 0.35)}
          className="mt-8 md:mt-12 flex flex-wrap items-center gap-4 sm:gap-5"
        >
          <motion.a
            href="projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 sm:px-9 sm:py-4 text-xs sm:text-sm font-semibold transition-all ${resolvedTheme === "dark"
              ? "bg-white text-black"
              : "bg-[#1A1A1A] text-[#F7F6F2] hover:bg-[#2F2F2F]"
              }`}
          >
            View My Work
            <ArrowUpRight size={18} />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={`inline-flex items-center gap-2 rounded-full border px-7 py-3.5 sm:px-9 sm:py-4 text-xs sm:text-sm font-semibold backdrop-blur-md transition-all ${resolvedTheme === "dark"
              ? "border-white/15 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
              : "border-black/15 bg-black/5 text-[#1A1A1A] hover:border-black/30 hover:bg-black/10"
              }`}
          >
            Get In Touch
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Decorative Glow Ring / Ambient Light */}
      <div
        className={`pointer-events-none absolute right-[15%] top-1/2 z-[3] hidden h-[700px] w-[700px] -translate-y-1/2 rounded-full blur-[140px] xl:block ${resolvedTheme === "dark" ? "bg-white/[0.03]" : "bg-black/[0.03]"
          }`}
      />

      {/* Subtle Fine-Art Paper Texture Noise */}
      <div
        className="pointer-events-none absolute inset-0 z-[4] opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Bottom Fade: Smooth transition into the Projects section */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-[5] h-32 pointer-events-none transition-colors duration-500 ${resolvedTheme === "dark"
          ? "bg-gradient-to-t from-background to-transparent"
          : "bg-gradient-to-t from-white via-white/80 to-transparent"
          }`}
      />
    </section>
  );
};

export default Hero;
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowDown, FiDownload, FiSend } from "react-icons/fi";
import { FaReact } from "react-icons/fa6";
import { SiGreensock, SiJavascript, SiRedux, SiTypescript } from "react-icons/si";
import heroImage from "../assets/images/hero/me.webp";
import { MagneticButton } from "../components/MagneticButton";
import { socials } from "../data/portfolio";

const floatingIcons = [
  { icon: FaReact, label: "ReactJS", className: "left-2 top-16 text-skyglow" },
  { icon: SiTypescript, label: "TypeScript", className: "right-4 top-12 text-blue-300" },
  { icon: SiGreensock, label: "GSAP", className: "left-8 bottom-24 text-mint" },
  { icon: SiRedux, label: "Redux", className: "right-8 bottom-28 text-coral" },
  { icon: SiJavascript, label: "JavaScript", className: "left-1/2 top-0 text-amber" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(86,240,198,.10),transparent_38%,rgba(255,111,97,.10))]" />
      <div className="section-wrap grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 34 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-136"
        >
          <div className="absolute inset-8 rounded-full bg-linear-to-br from-mint/25 via-skyglow/10 to-coral/25 blur-3xl" />
          <div className="glass-panel relative overflow-hidden rounded-4xl p-4">
            <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-white/10 to-transparent" />
            <img
              src={heroImage}
              alt="Al Jabir developer portrait illustration"
              className="relative z-10 aspect-4/5 w-full rounded-[1.45rem] object-cover object-center"
              loading="eager"
            />
            <div className="absolute bottom-7 left-7 right-7 z-20 rounded-3xl border border-white/10 bg-night/65 p-5 backdrop-blur-xl light:border-slate-900/10 light:bg-white/85">
              <p className="text-sm uppercase tracking-[0.24em] text-mint light:text-emerald-700">Currently</p>
              <p className="mt-2 font-outfit text-lg font-semibold text-white light:text-ink">Junior Frontend Developer at ReactThemes</p>
            </div>
          </div>

          {floatingIcons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                animate={{ y: [0, -16, 0], rotate: [0, 4, -4, 0] }}
                transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute hidden rounded-2xl border border-white/10 bg-white/[0.07] p-4 text-3xl shadow-xl backdrop-blur-xl sm:block ${item.className}`}
                aria-label={item.label}
              >
                <Icon />
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 38 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <span className="eyebrow">Available for frontend work</span>
          <h1 className="font-outfit text-4xl font-semibold leading-[0.98] text-white light:text-ink sm:text-6xl lg:text-7xl uppercase">
            Hi, I'm <span className="text-gradient">Al Jabir</span>
          </h1>
          <p className="mt-6 max-w-3xl font-outfit text-2xl font-medium text-slate-100 light:text-slate-800 sm:text-3xl">
            Frontend Developer
          </p>
          <div className="mt-5 min-h-8 text-lg font-semibold text-mint sm:text-xl">
            <TypeAnimation
              sequence={[ "Frontend Developer", 1400, "Figma to HTML Expert", 1400, "ReactJS Developer", 1400, "Next.js Developer", 1400, "Full-Stack Development in Progress", 1400]}
              speed={48}
              repeat={Infinity}
            />
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 light:text-slate-700 sm:text-lg">
            I craft animation-rich, production-ready websites with clean React architecture, sharp responsive systems,
            and interfaces that feel smooth from the first tap to the final scroll.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <MagneticButton href="#contact">
              <FiSend /> Hire Me
            </MagneticButton>
            <MagneticButton href="#projects" variant="secondary">
              View Projects
            </MagneticButton>
            <MagneticButton href="#" variant="ghost" download>
              <FiDownload /> Download Resume
            </MagneticButton>
          </div>

          <div className="mt-9 flex justify-center sm:justify-start items-center gap-3">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} className="icon-btn" aria-label={item.label} target="_blank" rel="noreferrer">
                  <Icon />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 sm:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="grid size-10 place-items-center rounded-full border border-white/10">
          <FiArrowDown />
        </motion.span>
      </a>
    </section>
  );
}

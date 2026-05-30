import { motion } from "framer-motion";
import { FiCode, FiCpu, FiDownload, FiExternalLink, FiGithub, FiLayers, FiLinkedin } from "react-icons/fi";
import resumePdf from "../assets/cv/Jabir-resume.pdf";
import heroImage from "../assets/images/hero/me.webp";
import { SectionHeader } from "../components/SectionHeader";
import { fadeUp, staggerContainer } from "../animations/variants";

const stats = [
  { value: "2021", label: "Started learning web development" },
  { value: "20+", label: "Completed frontend projects" },
  { value: "2", label: "Real team experiences" },
];

const highlights = [
  { icon: FiCode, title: "Skills summary", text: "Strong with HTML, CSS, SCSS, Bootstrap, JavaScript, ReactJS, Next.js basics, responsive UI, and Figma-to-code implementation." },
  { icon: FiLayers, title: "Experience highlight", text: "Worked on real frontend templates and client-style pages at ReactThemes and PixelOne, focusing on pixel-perfect responsive delivery." },
  { icon: FiCpu, title: "Career goal", text: "Focused on getting hired as a Frontend Developer while growing toward MERN stack and full-stack engineering." },
];

const proofLinks = [
  { label: "Live work", href: "#projects", icon: FiExternalLink },
  { label: "GitHub", href: "https://github.com/al-jabir", icon: FiGithub, external: true },
  { label: "Resume", href: resumePdf, icon: FiDownload, download: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jabirdevs/", icon: FiLinkedin, external: true },
];

export function About() {
  return (
    <section id="about" className="relative">
      <div className="section-wrap">
        <SectionHeader
          eyebrow="About"
          title="Frontend developer turning designs into real web experiences."
          description="I'm Al Jabir, a frontend developer who builds responsive, recruiter-verifiable web projects. My strongest work is converting Figma and product ideas into clean layouts, reusable UI sections, smooth interactions, and frontend code that is easy to inspect, maintain, and deploy."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-panel relative overflow-hidden rounded-4xl p-4"
          >
            <img src={heroImage} alt="Al Jabir profile" className="aspect-4/5 w-full rounded-3xl object-cover" loading="lazy" />
            <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/10 bg-night/70 p-5 backdrop-blur-xl light:border-slate-900/10 light:bg-white/85">
              <p className="text-sm uppercase tracking-[0.22em] text-mint light:text-emerald-700">Focus</p>
              <p className="mt-2 font-outfit text-md sm:text-2xl font-semibold text-white light:text-ink">Scalable React & Next.js Applications</p>
            </div>
          </motion.div>

          <div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4 md:grid-cols-3"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp} className="glass-panel rounded-3xl p-6">
                  <p className="font-outfit text-4xl font-semibold text-white light:text-ink">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400 light:text-slate-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-6 grid gap-5"
            >
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article key={item.title} variants={fadeUp} className="glass-panel rounded-3xl p-6">
                    <div className="flex flex-wrap sm:flex-nowrap gap-5">
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-mint/10 text-2xl text-mint">
                        <Icon />
                      </span>
                      <div>
                        <h3 className="font-outfit text-xl font-semibold text-white light:text-ink">{item.title}</h3>
                        <p className="mt-2 leading-7 text-slate-300 light:text-slate-700">{item.text}</p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-6 glass-panel rounded-3xl p-5"
            >
              <motion.div variants={fadeUp} className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-mint light:text-emerald-700">Proof of work</p>
                  <h3 className="mt-2 font-outfit text-xl font-semibold text-white light:text-ink">Quick links recruiters can verify</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {proofLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        download={link.download}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noreferrer" : undefined}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 px-4 text-sm font-bold text-white transition hover:border-mint/50 hover:text-mint light:border-slate-900/10 light:text-ink"
                      >
                        <Icon />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

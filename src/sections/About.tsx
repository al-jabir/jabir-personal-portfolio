import { motion } from "framer-motion";
import { FiCode, FiCpu, FiLayers } from "react-icons/fi";
import heroImage from "../assets/aj-me2.jpeg";
import { SectionHeader } from "../components/SectionHeader";
import { fadeUp, staggerContainer } from "../animations/variants";

const stats = [
  { value: "1+", label: "Years experience" },
  { value: "20+", label: "Completed projects" },
  { value: "17+", label: "Technologies" },
];

const highlights = [
  { icon: FiCode, title: "Frontend Developer", text: "React-first development with semantic HTML, modern CSS, and maintainable UI systems." },
  { icon: FiLayers, title: "Interactive UI", text: "Crafting smooth motion, micro-interactions, and scroll-based animations using GSAP ScrollTrigger to create engaging user experiences." },
  { icon: FiCpu, title: "MERN Direction", text: "Growing backend skills with Node.js, Express.js, and MongoDB to become a full-stack engineer." },
];

export function About() {
  return (
    <section id="about" className="relative">
      <div className="section-wrap">
        <SectionHeader
          eyebrow="About"
          title="Frontend craft with a full-stack future."
          description="I enjoy turning ideas and Figma screens into responsive, animated, production-ready websites. My work focuses on clean architecture, reusable components, accessible UI, and the kind of visual detail that makes an interface feel considered."
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
              <p className="mt-2 font-outfit text-2xl font-semibold text-white light:text-ink">React, animation, responsive systems</p>
            </div>
          </motion.div>

          <div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-3"
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
          </div>
        </div>
      </div>
    </section>
  );
}

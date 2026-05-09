import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { skillGroups } from "../data/portfolio";
import { fadeUp, staggerContainer } from "../animations/variants";

const categories = ["Frontend", "Animation & UI", "Backend Learning"] as const;

export function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-wrap">
        <SectionHeader
          eyebrow="Skills"
          title="Modern frontend stack, sharpened for real products."
          description="A balanced toolkit for building responsive interfaces, animation systems, API-connected screens, and the MERN foundation I am actively strengthening."
          align="center"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="glass-panel rounded-[2rem] p-5 sm:p-6"
            >
              <div className="mb-6 flex items-end justify-between gap-4">
                <h3 className="font-outfit text-2xl font-semibold text-white light:text-ink">{category}</h3>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-mint light:border-emerald-900/10 light:bg-emerald-50 light:text-emerald-700">
                  Stack
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {skillGroups
                  .filter((skill) => skill.category === category)
                  .map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={fadeUp}
                        whileHover={{ y: -8, scale: 1.03 }}
                        transition={{ duration: 0.25 }}
                        className="group relative min-h-32 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-4 text-center light:border-slate-900/10 light:bg-white/70"
                      >
                        <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                          <div className="absolute left-1/2 top-3 size-20 -translate-x-1/2 rounded-full bg-mint/15 blur-2xl" />
                        </div>
                        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4">
                          <span className="grid size-16 place-items-center rounded-2xl border border-white/10 bg-night/45 text-4xl text-mint shadow-lg shadow-black/10 transition duration-300 group-hover:border-mint/50 group-hover:text-white light:border-slate-900/10 light:bg-white light:text-emerald-700 light:group-hover:text-emerald-800">
                            <Icon />
                          </span>
                          <span className="text-sm font-bold leading-tight text-white light:text-ink">{skill.name}</span>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

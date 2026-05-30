import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { SectionHeader } from "../components/SectionHeader";
import { experiences } from "../data/portfolio";
import { fadeUp } from "../animations/variants";

export function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-wrap">
        <SectionHeader
          eyebrow="Experience"
          title="Frontend experience and learning journey."
          description="Professional frontend experience, internship foundations, and a focused learning journey toward the MERN stack and full-stack engineering."
          align="center"
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-linear-to-b from-mint via-white/20 to-coral sm:block" />
          <div className="space-y-6">
            {experiences.map((experience) => (
              <motion.article
                key={`${experience.role}-${experience.company}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65 }}
                className="relative sm:pl-20"
              >
                <span className="absolute left-0 top-8 hidden size-12 place-items-center rounded-full border border-mint/40 bg-night text-mint shadow-lg shadow-mint/20 light:bg-white light:text-emerald-700 sm:grid">
                  <FiBriefcase />
                </span>
                <div className="glass-panel rounded-[1.75rem] p-6">
                  <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                    <div>
                      <h3 className="font-outfit text-xl sm:text-2xl font-semibold text-white light:text-ink">{experience.role}</h3>
                      <p className="mt-1 font-semibold text-mint">{experience.company}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm font-semibold text-slate-300 light:border-black/10 light:text-slate-700">
                      {experience.period}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {experience.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-7 text-slate-300 light:text-slate-700">
                        <span className="mt-3 size-1.5 shrink-0 rounded-full bg-coral" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

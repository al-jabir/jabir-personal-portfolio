import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { services } from "../data/portfolio";
import { fadeUp, staggerContainer } from "../animations/variants";

export function Services() {
  return (
    <section id="services" className="relative">
      <div className="section-wrap">
        <SectionHeader
          eyebrow="What I do"
          title="What I can build for your team."
          description="I focus on the tasks junior frontend teams actually need: building clean React interfaces, converting Figma to responsive code, polishing UI states, and preparing pages for production handoff."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="group glass-panel relative overflow-hidden rounded-[1.75rem] p-6"
              >
                <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute -right-12 -top-12 size-36 rounded-full bg-mint/20 blur-3xl" />
                  <div className="absolute -bottom-12 left-4 size-32 rounded-full bg-coral/20 blur-3xl" />
                </div>
                <div className="relative z-10">
                  <span className="mb-7 grid size-14 place-items-center rounded-2xl bg-white/10 text-3xl text-mint light:bg-black/5">
                    <Icon />
                  </span>
                  <h3 className="font-outfit text-md sm:text-xl font-semibold text-white light:text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300 light:text-slate-700">{service.description}</p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

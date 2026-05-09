import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiStar } from "react-icons/fi";
import { SectionHeader } from "../components/SectionHeader";
import { testimonials } from "../data/portfolio";

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section id="testimonials" className="relative">
      <div className="section-wrap">
        <SectionHeader
          eyebrow="Testimonials"
          title="Feedback from collaborative frontend work."
          description="Realistic client-style feedback that reflects the kind of communication, polish, and delivery Al Jabir aims to bring into every project."
          align="center"
        />

        <div className="mx-auto max-w-4xl">
          <motion.article
            key={testimonial.name}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55 }}
            className="glass-panel rounded-[2rem] p-8 text-center sm:p-12"
          >
            <div className="mx-auto mb-6 flex w-max gap-1 text-amber">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <FiStar key={`${testimonial.name}-${index}`} className="fill-current" />
              ))}
            </div>
            <p className="font-outfit text-2xl leading-relaxed text-white light:text-ink sm:text-3xl">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className="grid size-14 place-items-center rounded-full bg-gradient-to-br from-mint to-coral font-outfit text-lg font-bold text-ink">
                {testimonial.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </span>
              <div className="text-left">
                <p className="font-semibold text-white light:text-ink">{testimonial.name}</p>
                <p className="text-sm text-slate-400 light:text-slate-600">{testimonial.role}</p>
              </div>
            </div>
          </motion.article>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all ${active === index ? "w-10 bg-mint" : "w-2.5 bg-white/20 light:bg-black/20"}`}
                aria-label={`Show testimonial from ${item.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

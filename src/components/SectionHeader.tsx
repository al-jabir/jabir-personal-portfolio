import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={align === "center" ? "mx-auto mb-14 max-w-3xl text-center" : "mb-14 max-w-3xl"}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-300 light:text-slate-700 sm:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}

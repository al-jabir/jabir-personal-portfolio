import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { FiCheckCircle, FiExternalLink, FiGithub, FiTarget, FiX } from "react-icons/fi";
import type { Project } from "../data/portfolio";

type CaseStudyModalProps = {
  project: Project | null;
  onClose: () => void;
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.92, y: 30 },
};

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (project) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, handleKeyDown]);

  return createPortal(
    <AnimatePresence>
      {project ? (
        <motion.div
          key="modal-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        >
          <motion.div
            key="modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.32, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-6 sm:p-8 no-scrollbar"
          >
            <button
              type="button"
              onClick={onClose}
              className="icon-btn absolute right-4 top-4 z-10 cursor-pointer"
              aria-label="Close case study"
            >
              <FiX />
            </button>

            <div className="flex items-start justify-between gap-4">
              <div>
                <span
                  className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold"
                  style={{ backgroundColor: `${project.accent}1A`, color: project.accent }}
                >
                  {project.category}
                </span>
                <h2 className="font-outfit text-2xl font-semibold text-white sm:text-3xl light:text-ink">
                  {project.title}
                </h2>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-300 light:text-slate-700">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 light:border-black/10 light:text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn min-h-10 bg-mint px-4 text-ink"
              >
                <FiExternalLink /> Live
              </a>
              {project.repo && project.repo !== "#" && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn min-h-10 border border-white/10 px-4 text-white light:border-black/10 light:text-ink"
                >
                  <FiGithub /> GitHub
                </a>
              )}
            </div>

            <div className="mt-6 space-y-5 border-t border-white/10 pt-5 light:border-slate-900/10">
              <div className="rounded-3xl border border-white/10 bg-white/4 p-4 light:border-slate-900/10 light:bg-white/70">
                <div className="flex gap-3">
                  <span className="mt-1 text-mint">
                    <FiTarget />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-mint light:text-emerald-700">
                      Problem
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-300 light:text-slate-700">
                      {project.problem}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-mint light:text-emerald-700">
                    Features
                  </p>
                  <ul className="mt-3 space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm leading-6 text-slate-300 light:text-slate-700">
                        <FiCheckCircle className="mt-1 shrink-0 text-mint" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-mint light:text-emerald-700">
                    My Contribution
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300 light:text-slate-700">
                    {project.contribution}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-5 light:border-slate-900/10">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-mint light:text-emerald-700">
                  Impact / Result
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300 light:text-slate-700">
                  {project.impact}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

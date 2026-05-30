import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { CaseStudyModal } from "../components/CaseStudyModal";
import { SectionHeader } from "../components/SectionHeader";
import type { Project } from "../data/portfolio";
import { projects } from "../data/portfolio";
import { fadeUp, staggerContainer } from "../animations/variants";

const filters = ["All", "HTML", "ReactJS"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const visibleProjects = useMemo(
    () => projects.filter((project) => activeFilter === "All" || project.category === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    setSelectedProject(null);
  }, [activeFilter]);

  return (
    <section id="projects" className="relative">
      <div className="section-wrap">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Projects"
            title="Selected projects with real frontend decisions."
            description="Each project shows the problem, stack, key features, my contribution, result, live preview, and source availability so hiring teams can judge both UI craft and implementation thinking."
          />
          <div className="mb-14 flex max-w-full flex-wrap gap-2 rounded-3xl border border-white/10 bg-white/4 p-2 light:border-black/10 light:bg-white/70 sm:rounded-full">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`min-h-10 rounded-full px-4 py-2 text-sm font-bold transition sm:px-5 ${
                  activeFilter === filter
                    ? "bg-mint text-ink shadow-lg shadow-mint/20"
                    : "text-slate-300 hover:bg-white/8 hover:text-white light:text-slate-700 light:hover:bg-black/5 light:hover:text-ink"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeFilter}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-6 lg:grid-cols-2"
        >
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              whileHover={{ y: -12, rotateX: 3, rotateY: index % 2 === 0 ? -3 : 3 }}
              transition={{ duration: 0.45 }}
              className="project-card glass-panel group overflow-hidden rounded-4xl"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-white/5 light:bg-slate-100">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-xl">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-outfit text-lg sm:text-2xl font-semibold text-white light:text-ink">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 light:text-slate-700">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 light:border-black/10 light:text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="magnetic-btn min-h-10 bg-mint px-4 text-ink">
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
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="magnetic-btn min-h-10 border border-white/10 px-4 text-white transition hover:border-mint/50 hover:text-mint light:border-black/10 light:text-ink cursor-pointer"
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
}

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { navItems, socials } from "../data/portfolio";

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative border-t border-white/10 light:border-black/10">
      <AnimatePresence>
        {showBackToTop ? (
          <motion.a
            href="#home"
            aria-label="Back to top"
            initial={{ opacity: 0, y: 22, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 22, scale: 0.88 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="group fixed bottom-6 right-6 z-70 grid size-14 place-items-center rounded-full border border-white/15 bg-night/80 text-mint shadow-2xl shadow-black/30 backdrop-blur-xl light:border-slate-900/15 light:bg-white/90"
          >
            <span className="pointer-events-none absolute inset-0 rounded-full border border-mint/30 opacity-70 transition duration-300 group-hover:scale-110 group-hover:opacity-100" />
            <span className="pointer-events-none absolute -inset-1 rounded-full bg-mint/10 blur-md" />
            <FiArrowUp className="relative z-10 text-lg" />
          </motion.a>
        ) : null}
      </AnimatePresence>

      <div className="section-wrap py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-mint font-outfit font-black text-ink">AJ</span>
              <span className="font-outfit text-xl font-semibold text-white light:text-ink">Al Jabir</span>
            </a>
            <p className="mt-4 max-w-md leading-7 text-slate-300 light:text-slate-700">
              Frontend Developer building responsive, animation-rich, production-ready web experiences with React and a growing MERN stack foundation.
            </p>
          </div>
          <div>
            <h3 className="font-outfit text-lg font-semibold text-white light:text-ink">Navigation</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {navItems.slice(0, 6).map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-slate-400 transition hover:text-mint light:text-slate-600">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-outfit text-lg font-semibold text-white light:text-ink">Social</h3>
            <div className="mt-4 flex gap-3">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} className="icon-btn" aria-label={item.label} target="_blank" rel="noreferrer">
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400 light:border-black/10 light:text-slate-600">
          <p>Copyright {new Date().getFullYear()} Al Jabir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

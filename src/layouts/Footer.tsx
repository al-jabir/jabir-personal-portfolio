import { FiArrowUp } from "react-icons/fi";
import { navItems, socials } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 light:border-black/10">
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
            <div className="mt-4 grid grid-cols-2 gap-3">
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
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 light:border-black/10 light:text-slate-600 sm:flex-row sm:items-center">
          <p>Copyright {new Date().getFullYear()} Al Jabir. All rights reserved.</p>
          <a href="#home" className="inline-flex items-center gap-2 font-semibold text-mint">
            Back to top <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

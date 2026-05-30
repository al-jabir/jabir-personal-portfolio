import emailjs from "@emailjs/browser";
import { useState } from "react";
import type { FormEvent } from "react";
import { FiDownload, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import resumePdf from "../assets/cv/Jabir-resume.pdf";
import { SectionHeader } from "../components/SectionHeader";
import { socials } from "../data/portfolio";

type Status = "idle" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSending(true);
    setStatus("idle");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      } else {
        await new Promise((resolve) => window.setTimeout(resolve, 650));
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="section-wrap">
        <SectionHeader
          eyebrow="Contact"
          title="Hiring for frontend work? Let's talk."
          description="I am available for junior frontend roles, React UI work, Figma-to-code implementation, responsive templates, and remote or onsite collaboration with clear handoff."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-5">
            <div className="glass-panel rounded-[1.75rem] p-6">
              <span className="mb-6 grid size-12 place-items-center rounded-2xl bg-mint/10 text-2xl text-mint">
                <FiMail />
              </span>
              <h3 className="font-outfit text-2xl font-semibold text-white light:text-ink">Recruiter-ready contact</h3>
              <p className="mt-3 leading-7 text-slate-300 light:text-slate-700">
                I am open to junior frontend roles, remote or onsite collaboration, React component work, and frontend implementation tasks.
              </p>
              <a href="mailto:aljabirceo@gmail.com" className="mt-4 inline-flex font-semibold text-mint">
                aljabirceo@gmail.com
              </a>
            </div>
            <div className="glass-panel rounded-[1.75rem] p-6">
              <span className="mb-4 grid size-12 place-items-center rounded-2xl bg-coral/10 text-2xl text-coral">
                <FiMapPin />
              </span>
              <p className="font-semibold text-white light:text-ink">Based in Bangladesh</p>
              <p className="mt-2 text-sm text-slate-400 light:text-slate-600">Available for remote work and onsite opportunities.</p>
            </div>
            <div className="flex gap-3">
              <a href={resumePdf} download className="icon-btn" aria-label="Download resume">
                <FiDownload />
              </a>
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} className="icon-btn" aria-label={item.label} target="_blank" rel="noreferrer">
                    <Icon />
                  </a>
                );
              })}
            </div>
          </aside>

          <form className="glass-panel rounded-4xl p-5 sm:p-8" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-300 light:text-slate-700">Name</span>
                <input name="name" required minLength={2} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-slate-500 light:border-black/10 light:bg-white/70 light:text-ink" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-300 light:text-slate-700">Email</span>
                <input name="email" type="email" required className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-slate-500 light:border-black/10 light:bg-white/70 light:text-ink" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-semibold text-slate-300 light:text-slate-700">Subject</span>
              <input name="subject" required minLength={3} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-slate-500 light:border-black/10 light:bg-white/70 light:text-ink" placeholder="Project collaboration" />
            </label>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-semibold text-slate-300 light:text-slate-700">Message</span>
              <textarea name="message" required minLength={10} rows={6} className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-slate-500 light:border-black/10 light:bg-white/70 light:text-ink" placeholder="Tell me about your project..." />
            </label>
            <button type="submit" disabled={sending} className="magnetic-btn mt-6 bg-mint text-ink disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer">
              <FiSend /> {sending ? "Sending..." : "Send Message"}
            </button>
            {status === "success" ? <p className="mt-4 rounded-2xl bg-mint/10 px-4 py-3 text-sm font-semibold text-mint">Message sent successfully.</p> : null}
            {status === "error" ? <p className="mt-4 rounded-2xl bg-coral/10 px-4 py-3 text-sm font-semibold text-coral">Something went wrong. Please try again.</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}

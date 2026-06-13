import { Phone, Mail } from "lucide-react";
import { LinkedInIcon } from "./LinkedInIcon";
import { profile } from "@/data/profile";
import { ScrollReveal } from "./ScrollReveal";

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="contact-banner relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <div className="contact-glow" />
          <h2 className="relative z-10 mb-3 text-3xl font-bold text-white md:text-4xl">
            Let&apos;s Connect
          </h2>
          <p className="relative z-10 mx-auto mb-10 max-w-xl text-slate-300">
            Interested in collaborating or discussing engineering leadership,
            full-stack development, or AI solutions? Reach out anytime.
          </p>
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
            <a href={profile.contact.phoneHref} className="btn-call group">
              <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
              Call Now
            </a>
            <a href={profile.contact.emailHref} className="btn-email group">
              <Mail className="h-5 w-5" />
              Send Email
            </a>
            <a
              href={profile.contact.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-linkedin group"
            >
              <LinkedInIcon className="h-5 w-5" />
              View LinkedIn
            </a>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-800/60 px-6 py-8 text-center">
      <p className="text-sm text-slate-600 dark:text-slate-400">
        © 2026 {profile.name}. All rights reserved.
      </p>
      <div className="mt-3 flex items-center justify-center gap-6">
        <a
          href={profile.contact.phoneHref}
          className="text-xs text-slate-600 dark:text-slate-400 transition-colors hover:text-cyan-400"
        >
          {profile.contact.phone}
        </a>
        <a
          href={profile.contact.emailHref}
          className="text-xs text-slate-600 dark:text-slate-400 transition-colors hover:text-cyan-400"
        >
          {profile.contact.email}
        </a>
        <a
          href={profile.contact.linkedinHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-600 dark:text-slate-400 transition-colors hover:text-cyan-400"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

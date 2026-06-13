import {
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Users,
  Award,
} from "lucide-react";
import Image from "next/image";
import { LinkedInIcon } from "./LinkedInIcon";
import { profile } from "@/data/profile";
import { RotatingText } from "./RotatingText";
import { FloatingBadges } from "./FloatingBadges";

export function Hero() {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <section className="hero-section relative overflow-hidden px-6 pb-20 pt-28 md:px-12 md:pt-36 lg:px-20">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="hero-grid" />
      <FloatingBadges />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
        <div className="avatar-ring shrink-0 lg:mt-14">
          <div className="avatar-inner relative flex h-72 w-56 items-center justify-center overflow-hidden rounded-[1.75rem] md:h-80 md:w-64 lg:h-[24rem] lg:w-[18rem]">
            {profile.image ? (
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <span className="text-5xl font-bold tracking-tight text-white md:text-6xl">
                {initials}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300">
            <span className="pulse-dot" />
            Available for opportunities
          </div>

          <h1 className="text-gradient mb-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mb-2 text-xl font-semibold text-slate-200 md:text-2xl">
            {profile.title}
          </p>

          <RotatingText />

          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-base">
            {profile.tagline}
          </p>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400 lg:justify-start">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-cyan-400" />
              {profile.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="h-4 w-4 text-cyan-400" />
              {profile.company}
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-cyan-400" />
              {profile.experienceYears} Years
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-cyan-400" />
              {profile.connections} Connections
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a href={profile.contact.phoneHref} className="btn-call group">
              <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
              Call {profile.contact.phone}
            </a>
            <a href={profile.contact.emailHref} className="btn-email group">
              <Mail className="h-5 w-5" />
              {profile.contact.email}
            </a>
            <a
              href={profile.contact.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-linkedin group"
            >
              <LinkedInIcon className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

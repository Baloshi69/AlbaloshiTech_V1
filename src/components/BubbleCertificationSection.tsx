import React from "react";
import { BadgeCheck, ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import { bubbleFocusedCerts, bubbleVerificationUrl, spotlightCert } from "@/data/certifications";

const BubbleCertificationSection = () => {
  // Get the specializations (excluding the main one)
  const specializations = bubbleFocusedCerts.filter(cert => cert.title !== "Certified Bubble Professional");

  return (
    <section id="certifications" className="bg-[#F9FBFF] py-24">
      <div className="container space-y-12">
        <div className="relative mx-auto max-w-5xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ffd3bf]/70 bg-white/80 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d85a1a] shadow-[0_16px_40px_-26px_rgba(15,23,42,0.45)] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#f96f4a] shadow-[0_0_0_6px_rgba(249,111,74,0.18)]" aria-hidden="true" />
            Bubble.io proof
          </div>
          <h2 className="text-4xl font-bold leading-tight text-transparent bg-gradient-to-r from-[#ff8c4c] via-[#f96f4a] to-[#ffb347] bg-clip-text md:text-5xl">
            Certified Bubble Professional + security, workflow, and database specializations
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[#ffd3bf] via-[#ffaf80] to-[#ffd3bf] opacity-70" aria-hidden="true" />
          <p className="text-slate-600 md:mx-auto md:max-w-3xl md:text-lg">
            {spotlightCert.subtitle} The same proctored exam and reviews that power the certifications page are distilled here so new visitors can verify credentials fast.
          </p>
        </div>

        <article className="relative overflow-hidden rounded-[36px] border border-[#ffe0cf]/80 bg-gradient-to-br from-[#fff7f0] via-white to-[#eef2ff] p-8 shadow-[0_50px_130px_-90px_rgba(15,23,42,0.55)] space-y-10">
          <div className="pointer-events-none absolute -top-24 -left-16 h-56 w-56 rounded-full bg-[#ffd3bf]/50 blur-[120px]" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-28 right-0 h-64 w-64 rounded-full bg-[#dbe4ff]/60 blur-[140px]" aria-hidden="true" />

          <div className="space-y-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#fff3e6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#d85a1a] shadow-[0_14px_32px_-24px_rgba(249,111,74,0.4)] self-start">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Bubble verified
              </div>
              <a
                href={bubbleVerificationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#d85a1a] hover:text-[#f96f4a] transition-colors self-start md:self-auto"
              >
                <span>Verify Official Credential</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{spotlightCert.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">{spotlightCert.description}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {spotlightCert.bullets.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/60 bg-white/60 p-3 text-sm leading-relaxed text-slate-700 shadow-sm">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#fff3e6] text-[#f96f4a]">
                        <BadgeCheck className="h-3 w-3" aria-hidden="true" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-[24px] border border-white/80 bg-gradient-to-br from-white via-[#fff7f0] to-[#eef2ff] p-2 shadow-lg transition hover:-translate-y-1">
                <img
                  src={spotlightCert.image}
                  alt={spotlightCert.title}
                  className="h-auto w-full rounded-[20px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </article>

        {/* Specializations with Images */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Specialized Certifications</p>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {specializations.map((cert) => (
              <div key={cert.title} className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{cert.issuer}</p>
                  <h4 className="mt-1 text-base font-bold text-slate-900 group-hover:text-[#4285F4] transition-colors line-clamp-2">{cert.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <a
            href="/certifications"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
          >
            <span>View all certifications</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BubbleCertificationSection;

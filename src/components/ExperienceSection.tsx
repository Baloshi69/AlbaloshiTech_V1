import React from "react";
import { Clock3, MessagesSquare, Target, Briefcase, Wallet, Sparkles } from "lucide-react";

const reasons = [
  {
    title: "Direct communication",
    description: "You speak with me every time -- strategy, builds, tweaks, and launches.",
    Icon: MessagesSquare,
    className: "md:col-span-2 bg-[#fff4ec]",
    iconBg: "bg-white text-[#ff8c4c]",
  },
  {
    title: "Fast delivery",
    description: "Lean sprints, daily check-ins, and weekly releases keep momentum high.",
    Icon: Clock3,
    className: "md:col-span-1 bg-[#eef4ff]",
    iconBg: "bg-white text-[#4285F4]",
  },
  {
    title: "Deep focus",
    description: "I run few engagements at once so your project gets meaningful attention.",
    Icon: Target,
    className: "md:col-span-1 bg-[#f3f5ff]",
    iconBg: "bg-white text-[#6366f1]",
  },
  {
    title: "Business understanding",
    description: "I align the build to your profit model, compliance needs, and growth plans.",
    Icon: Briefcase,
    className: "md:col-span-2 bg-[#ecfdf5]",
    iconBg: "bg-white text-[#10b981]",
  },
  {
    title: "Flexible freelancer pricing",
    description: "Clarity on scope, no retainers unless you ask for dedicated support.",
    Icon: Wallet,
    className: "md:col-span-3 bg-[#fff1f2]",
    iconBg: "bg-white text-[#f43f5e]",
  },
];

const deliveryStat = {
  label: "Average MVP launch",
  value: "6 weeks",
  detail: "Scope → production with QA",
};

const ExperienceSection = () => {
  return (
    <section id="why-me" className="bg-white py-20">
      <div className="container">
        <div className="section-heading mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d85a1a]">Founder advantages</p>
          <h2 className="text-transparent bg-gradient-to-r from-[#ff8c4c] via-[#f96f4a] to-[#ffb347] bg-clip-text">
            Why founders hire me instead of an agency
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Working with me feels like having a technical partner who understands the business stakes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map(({ title, description, Icon, className, iconBg }) => (
            <article
              key={title}
              className={`rounded-3xl p-8 transition-transform hover:-translate-y-1 ${className}`}
            >
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ${iconBg}`}>
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>
            </article>
          ))}

          <article className="md:col-span-3 rounded-3xl border-2 border-dashed border-slate-200 p-8 text-center hover:border-[#ff8c4c]/50 transition-colors">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#ff8c4c] to-[#f96f4a] text-white shadow-lg shadow-orange-200">
                <Sparkles className="h-8 w-8" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-slate-400">{deliveryStat.label}</p>
                <p className="mt-1 text-4xl font-extrabold text-slate-900">{deliveryStat.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-500">{deliveryStat.detail}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

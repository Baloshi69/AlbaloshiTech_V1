import React from "react";
import { useIsNasirDomain } from "@/hooks/useContactVisibility";

const howIWorkSteps = [
  {
    icon: "👂",
    bg: "bg-[#fff4ec]",
    text: "Listen first, not sell – short call to understand your idea or current Bubble app pain.",
  },
  {
    icon: "🧭",
    bg: "bg-[#eef4ff]",
    text: "Recommend the best path – clear options with realistic timelines and costs.",
  },
  {
    icon: "🛠️",
    bg: "bg-[#f3f5ff]",
    text: "Fix, build, and improve together – hands-on work in your Bubble app with live visibility.",
  },
  {
    icon: "📚",
    bg: "bg-[#ecfdf5]",
    text: "Explain as I go – clean naming, notes, and Loom walkthroughs so everything makes sense.",
  },
  {
    icon: "🤝",
    bg: "bg-[#fff1f2]",
    text: "Stay in your corner – available for tweaks, new features, or emergency fixes whenever needed.",
  },
];

const AboutSection = () => {
  const isNasirDomain = useIsNasirDomain();
  const displayName = isNasirDomain ? "Nasir Nawaz" : "Al Baloshi Nawaz";

  return (
    <section id="about" className="bg-[#F9FBFF] py-20">
      <div className="container space-y-16">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#ff8c4c]">About Me</p>
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">I help founders build and optimise Bubble apps with clean logic, automation, and AI-ready structure.</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                I'm <span className="font-semibold text-slate-900">{displayName}</span> (Baloshi69), a certified Bubble.io developer and Google IT Support Specialist. I work directly with founders, operators, and small teams who need fast,
                reliable development without the delays or miscommunication that come with agency layers.
              </p>
              <p>
                When you work with me, you speak directly to the person designing, building, integrating, and deploying your app. I handle everything end-to-end: front-end UI, database
                structure, workflows, API connections, automation systems, AI features, testing, optimisation, and launch.
              </p>
              <p>
                My priority is always the same: clean logic, scalable architecture, transparent communication, and shipping builds that are stable for real users and fast enough to grow.
              </p>
            </div>
          </div>

          <div className="relative pl-8 lg:pl-12">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff8c4c] via-[#ffb347] to-transparent opacity-30 lg:left-4" />

            <div className="space-y-10">
              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 pl-2">How I work</p>
              </div>

              {howIWorkSteps.map(({ icon, bg, text }, index) => (
                <div key={text} className="relative flex gap-6 group">
                  <div className={`relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-2xl shadow-sm transition-transform group-hover:scale-110 ${bg} ring-4 ring-white`}>
                    {icon}
                  </div>
                  <div className="pt-2 pb-2">
                    <p className="text-lg leading-relaxed text-slate-700 font-medium">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

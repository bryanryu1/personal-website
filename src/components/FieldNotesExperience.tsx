"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const specimens = [
  {
    id: "01",
    kind: "AI and integrations",
    title: "Aircall MCP Server",
    summary:
      "Championed the product and led development across AI and integrations teams, creating a foundation for API-driven integrations and contextual data enrichment.",
    tags: ["MCP", "APIs", "AI agents"],
    note: "The product challenge is deciding which context an agent needs, when it needs it, and how to retrieve it reliably.",
  },
  {
    id: "02",
    kind: "Real-time AI",
    title: "Voice Agent integrations",
    summary:
      "Own the integration layer for Aircall's Voice Agent, bringing contextual data and workflow automation into live customer conversations.",
    tags: ["Voice AI", "Real-time systems", "Integrations"],
    note: "Useful voice automation lives inside a narrow window where latency, reliability, and partner constraints all compete.",
  },
  {
    id: "03",
    kind: "Internal tool",
    title: "Product discovery hub",
    summary:
      "Built and shipped a discovery tool with Claude Code and Vercel that brings feedback from Slack, email, and video calls into one place for prioritization.",
    tags: ["Claude Code", "Vercel", "Product discovery"],
    note: "The useful part is not collecting more feedback. It is making evidence easier to find when a product decision is being made.",
  },
  {
    id: "04",
    kind: "Independent project",
    title: "Cook'd",
    summary:
      "Built a React Native social recipe application and led user research, prioritization, and iterative product development.",
    tags: ["React Native", "User research", "Product"],
    note: "A hands-on product laboratory: start with a real behavior, build the smallest useful loop, then learn from how people use it.",
  },
  {
    id: "05",
    kind: "Early AI project",
    title: "Twitter Chatbot",
    summary:
      "Built a generative chatbot in Python and TensorFlow using natural language processing and machine learning.",
    tags: ["Python", "TensorFlow", "NLP"],
    note: "An early exploration of generative systems, long before AI became part of my day-to-day product work.",
  },
];

const journey = [
  {
    id: "01",
    label: "Philosophy at Rutgers",
    title: "Start with better questions.",
    period: "BA, May 2020",
    summary: "A philosophy degree trained me to pull apart assumptions, make an argument clearly, and stay interested when the answer is not obvious yet.",
    carried: "Carried forward: structured thinking, clear writing, and comfort with ambiguity.",
  },
  {
    id: "02",
    label: "Coding bootcamp",
    title: "Turn curiosity into systems.",
    period: "Fullstack Academy, 2020",
    summary: "Fullstack Academy made the abstract practical: ideas could become something testable, useful, and real in a browser.",
    carried: "Carried forward: momentum, technical fluency, and a bias toward making a first version.",
  },
  {
    id: "03",
    label: "Software engineer",
    title: "Learn what shipping actually asks of you.",
    period: "Connatix, 2021-2022",
    summary: "At Connatix, I developed and deployed custom customer solutions with JavaScript, HTML, and CSS.",
    carried: "Carried forward: empathy for systems, implementation, and the people who maintain both.",
  },
  {
    id: "04",
    label: "Solutions engineering",
    title: "Move closer to the customer.",
    period: "Aircall, 2022-2025",
    summary: "I moved from associate to senior solutions engineer, became Aircall's 2024 Global Top Performer, and led the product research behind its WhatsApp integration proposal.",
    carried: "Carried forward: customer fluency, commercial context, and a habit of translating between needs and systems.",
  },
  {
    id: "05",
    label: "Product",
    title: "Bring the whole picture together.",
    period: "Aircall, 2025-present",
    summary: "I transitioned into product, first owning Aircall's HubSpot integration - used by 40% of customers and 100K+ weekly active users across $100M+ ARR - and now lead three areas spanning integrations, MCP, and Voice Agent AI.",
    carried: "Today: connecting user needs, business context, AI systems, and what teams can reliably ship.",
  },
];

const critters = {
  cat: [" /\\_/\\", "( o.o )", " /|_|\\"].join("\n"),
  rabbit: [" (\\_/)", " (o.o)", " (> <)"].join("\n"),
  snail: ["   ___", " _/ oo\\_", "(_\\___/__)~"].join("\n"),
  frog: ["  @..@", " (----)", "( >__< )"].join("\n"),
};

function PerchedCritter({ animal, crawl = false }: { animal: keyof typeof critters; crawl?: boolean }) {
  const reduced = useReducedMotion();
  return (
    <div aria-hidden="true" className="pointer-events-none relative z-0 -mb-3 h-24 overflow-hidden select-none">
      <motion.pre
        initial={reduced ? false : { y: 82, x: crawl ? -70 : 0 }}
        whileInView={{ y: 0, x: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: reduced ? 0 : 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 right-6 m-0 whitespace-pre font-mono text-[21px] font-bold leading-[22px] text-[#1f5c30] drop-shadow-[1px_1px_0_#d8ead8]"
      >{critters[animal]}</motion.pre>
    </div>
  );
}

export function FieldNotesExperience() {
  const [activeSpecimen, setActiveSpecimen] = useState(0);
  const [activeWaypoint, setActiveWaypoint] = useState(4);
  const specimen = specimens[activeSpecimen];
  const waypoint = journey[activeWaypoint];

  function navigateToSection(target: "specimens" | "trail") {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#edf3eb] text-[#17321e]">
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-6 sm:px-8 sm:pb-24 sm:pt-9">
        <header className="flex items-center justify-between border-b border-[#8ca891] pb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#49704f]">
          <Link href="/" className="transition-colors hover:text-[#087e42]">← all directions</Link>
          <span>Bryan Ryu</span>
          <span className="hidden sm:block">New York, NY</span>
        </header>

        <div className="grid gap-12 pt-14 lg:grid-cols-[1fr_0.86fr] lg:items-center lg:pt-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#288345]">Senior Product Manager / AI, voice and integrations</p>
            <h1 className="mt-5 max-w-2xl font-serif text-5xl leading-[0.92] tracking-[-0.055em] text-[#1a4224] sm:text-7xl">
              I build products where AI, voice, and integrations meet.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#526c58] sm:text-lg">
              Technical product leader with a solutions engineering background. I lead Aircall&apos;s HubSpot integration, MCP Server, and AI integrations for Voice Agent.
            </p>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#1a5c2d]">
              <a href="#specimens" className="border-b border-[#1a5c2d] pb-1 hover:text-[#089141]">Selected work ↓</a>
              <a href="#trail" className="border-b border-transparent pb-1 hover:border-[#1a5c2d]">Career route ↓</a>
              <a href="mailto:hello@bryanryu.me" className="border-b border-transparent pb-1 hover:border-[#1a5c2d]">Email ↗</a>
              <a href="https://linkedin.com/in/bryan-ryu" target="_blank" rel="noreferrer" className="border-b border-transparent pb-1 hover:border-[#1a5c2d]">LinkedIn ↗</a>
            </div>
          </div>

          <div>
            <PerchedCritter animal="cat" />
            <section aria-label="Explore the field notes" className="relative z-10 border border-[#88a98d] bg-[#d5ead4] p-6 shadow-[8px_8px_0_#90b694] sm:p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-[#4c7953]">Currently at Aircall</p>
              <p className="mt-5 font-serif text-3xl text-[#1d4c2a]">Three product areas.<br />One connected system.</p>
              <p className="mt-4 text-sm leading-6 text-[#52715a]">Integrations, developer tooling, and real-time AI - shaped by the constraints of customer conversations.</p>
              <div className="mt-7 flex flex-wrap gap-4 text-sm text-[#245d32]">
                <button onClick={() => navigateToSection("specimens")} className="underline underline-offset-4">Explore projects ↓</button>
                <button onClick={() => navigateToSection("trail")} className="underline underline-offset-4">Walk the career route ↓</button>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section id="specimens" className="border-y border-[#86a98b] bg-[#f8fbf7]">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[0.74fr_1.26fr]">
          <div className="border-b border-[#b1cbb2] p-6 sm:p-9 lg:border-b-0 lg:border-r lg:p-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#288345]">Specimen index</p>
            <PerchedCritter animal="rabbit" />
            <h2 className="relative z-10 max-w-sm bg-[#f8fbf7] font-serif text-4xl leading-none tracking-[-0.055em] text-[#1a4224]">A few things worth opening.</h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#5c765f]">Every project is a small field note: the problem, the work, and the thing it taught me.</p>
            <div className="mt-8 grid gap-2">
              {specimens.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSpecimen(index)}
                  className={`flex items-center justify-between border px-4 py-3 text-left transition-colors ${activeSpecimen === index ? "border-[#267842] bg-[#e1f1df]" : "border-[#c4d7c4] hover:border-[#267842]"}`}
                  aria-pressed={activeSpecimen === index}
                >
                  <span className="font-mono text-xs text-[#3d804c]">{item.id}</span>
                  <span className="ml-3 flex-1 text-sm font-semibold">{item.title}</span>
                  <span className="text-[#3c8750]">↗</span>
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[460px] p-6 sm:p-10 lg:p-12">
            <AnimatePresence mode="wait">
              <motion.article
                key={specimen.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.24 }}
                className="flex h-full flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.16em] text-[#45804f]">
                    <span>{specimen.kind}</span><span>#{specimen.id}</span>
                  </div>
                  <h3 className="mt-12 max-w-2xl font-serif text-5xl leading-[0.92] tracking-[-0.06em] text-[#193f22] sm:text-6xl">{specimen.title}</h3>
                  <p className="mt-6 max-w-xl text-base leading-7 text-[#56725b] sm:text-lg">{specimen.summary}</p>
                  <blockquote className="mt-10 max-w-xl border-l-2 border-[#48a55b] pl-4 font-serif text-xl leading-7 text-[#315b38]">“{specimen.note}”</blockquote>
                </div>
                <div className="mt-12 flex flex-wrap items-end justify-between gap-5 border-t border-[#c4d7c4] pt-5">
                  <div className="flex flex-wrap gap-2">{specimen.tags.map((tag) => <span key={tag} className="border border-[#a8c8aa] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#47754d]">{tag}</span>)}</div>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#4a7952]">Case study links coming next</span>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="trail" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-9 lg:grid-cols-[0.74fr_1.26fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#288345]">The route</p>
            <h2 className="mt-4 max-w-sm font-serif text-4xl leading-none tracking-[-0.055em] text-[#1a4224]">A winding path, not a straight line.</h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#5c765f]">Each stop changed the way I work. Select a marker to see the through-line.</p>
          </div>
          <div>
            <PerchedCritter animal="snail" crawl />
            <div className="relative z-10 hidden h-[300px] overflow-hidden border border-[#aac5ac] bg-[#dbeada] sm:block">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 300" aria-hidden="true" preserveAspectRatio="none">
                <path d="M72 58 C155 26 175 220 245 220 S325 44 410 62 S500 224 575 218 S660 38 730 66" fill="none" stroke="#6ca47a" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
                {[[72,58], [245,220], [410,62], [575,218], [730,66]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="7" fill="#edf3eb" stroke="#277842" strokeWidth="3" />)}
              </svg>
              {journey.map((item, index) => {
                const positions = ["left-[1%] top-[6%]", "left-[20%] top-[55%]", "left-[43%] top-[8%]", "left-[62%] top-[55%]", "right-[1%] top-[10%]"];
                const active = activeWaypoint === index;
                return (
                  <button key={item.id} type="button" onClick={() => setActiveWaypoint(index)} className={`absolute w-32 border p-3 text-left transition-all ${positions[index]} ${active ? "border-[#23753a] bg-[#23753a] text-white shadow-[4px_4px_0_#9ac8a0]" : "border-[#9dbb9f] bg-[#f9fcf8] text-[#305e39] hover:border-[#23753a]"}`} aria-pressed={active}>
                    <span className={`font-mono text-[10px] ${active ? "text-[#baf6c8]" : "text-[#39824b]"}`}>{item.id}</span>
                    <span className="mt-2 block text-sm font-semibold leading-4">{item.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="grid gap-2 sm:hidden">
              {journey.map((item, index) => <button key={item.id} type="button" onClick={() => setActiveWaypoint(index)} className={`flex items-center gap-3 border p-3 text-left ${activeWaypoint === index ? "border-[#23753a] bg-[#23753a] text-white" : "border-[#aac5ac] bg-[#dbeada]"}`}><span className="font-mono text-xs">{item.id}</span><span className="font-semibold">{item.label}</span></button>)}
            </div>
            <AnimatePresence mode="wait">
              <motion.article key={waypoint.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }} className="mt-4 border border-[#aac5ac] bg-[#f9fcf8] p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#397a48]"><span>Waypoint {waypoint.id}</span><span>{waypoint.label} / {waypoint.period}</span></div>
                <h3 className="mt-5 font-serif text-3xl tracking-[-0.045em] text-[#214b29]">{waypoint.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5c765f]">{waypoint.summary}</p>
                <p className="mt-5 border-l-2 border-[#49a45c] pl-3 text-sm font-semibold leading-6 text-[#376541]">{waypoint.carried}</p>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="border-t border-[#86a98b] bg-[#d5e7d3]">
        <div className="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
          <PerchedCritter animal="frog" />
          <div className="relative z-10 grid gap-8 border-t border-[#86a98b] bg-[#d5e7d3] py-12 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#397a48]">Bryan Ryu</p>
              <h2 className="mt-4 max-w-sm font-serif text-3xl tracking-[-0.04em] text-[#214b29]">Product thinking with technical depth.</h2>
              <a href="mailto:hello@bryanryu.me" className="mt-6 inline-block text-sm font-semibold text-[#18783a] underline underline-offset-4">hello@bryanryu.me ↗</a>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#397a48]">Product</p>
              <p className="mt-4 text-sm leading-6 text-[#526c58]">AI voice agents, integrations, platform strategy, product discovery, customer research</p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#397a48]">Technical and personal</p>
              <p className="mt-4 text-sm leading-6 text-[#526c58]">JavaScript, Node.js, Python, React, APIs, MCP, real-time AI systems</p>
              <p className="mt-4 text-sm leading-6 text-[#526c58]">Bouldering, coffee, Muay Thai</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

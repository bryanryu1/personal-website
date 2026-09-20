"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

type DesignId = "gallery" | "index" | "notes" | "studio";

const designs = [
  {
    id: "gallery" as const,
    number: "01",
    name: "The Gallery",
    short: "Minimal, editorial, intentional.",
    description:
      "A calm first impression with generous space. Best when your work speaks for itself and you want the site to feel senior, polished, and easy to read.",
    bestFor: "Product, design, strategy, and generalist roles",
  },
  {
    id: "index" as const,
    number: "02",
    name: "The Index",
    short: "Dense, direct, quietly technical.",
    description:
      "A crisp directory of your experience and shipped work. It gets visitors to proof fast—ideal if you have several real projects, experiments, or code samples to show.",
    bestFor: "Engineering, data, technical PM, and builder roles",
  },
  {
    id: "notes" as const,
    number: "03",
    name: "Field Notes",
    short: "Personal, narrative, memorable.",
    description:
      "A portfolio that reads like a collection of considered stories. It makes your judgment visible, not just the outputs—great for turning projects into compelling case studies.",
    bestFor: "Product, UX, research, founders, and creative roles",
  },
  {
    id: "studio" as const,
    number: "04",
    name: "The Studio",
    short: "Confident, visual, project-led.",
    description:
      "Your work is the home page. Large project tiles and a clear ‘now building’ signal create a living portfolio that feels active without becoming noisy.",
    bestFor: "Builders with demos, side projects, and visual work",
  },
];

function ProjectLinks({ inverse = false }: { inverse?: boolean }) {
  const style = inverse
    ? "border-white/20 text-white hover:bg-white hover:text-[#0b0d0b]"
    : "border-black/10 text-[#101110] hover:border-[#15965a] hover:text-[#087b45]";

  return (
    <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]">
      <button className={`border px-3 py-2 transition-colors ${style}`}>
        Read case study ↗
      </button>
      <button className={`border px-3 py-2 transition-colors ${style}`}>
        Visit project ↗
      </button>
    </div>
  );
}

function GalleryPreview() {
  return (
    <div className="preview-gallery h-full p-7 sm:p-10">
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.15em] text-[#0a7d46]">
        <span>BR / Portfolio</span>
        <span>Based anywhere</span>
      </div>
      <div className="mt-16 max-w-xl sm:mt-24">
        <p className="text-sm text-[#6b716c]">Hello, I&apos;m Bryan.</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.055em] text-[#111311] sm:text-6xl">
          I make useful things with thoughtful people.
        </h2>
        <p className="mt-6 max-w-md text-sm leading-6 text-[#606660] sm:text-base">
          A selected record of product work, technical experiments, and ideas in progress.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 border-t border-black/10 pt-4 text-xs sm:mt-20 sm:grid-cols-4">
        <span>Selected work</span><span>About</span><span>Notes</span><span className="text-[#0a7d46]">Get in touch ↗</span>
      </div>
    </div>
  );
}

function IndexPreview() {
  const rows = [
    ["01", "Realtime reservations bot", "Python · APIs", "Live ↗"],
    ["02", "Neighborhood explorer", "Next.js · Maps", "Case study ↗"],
    ["03", "Research assistant", "LLMs · Retrieval", "Code ↗"],
  ];
  return (
    <div className="preview-index h-full p-6 sm:p-8">
      <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-[0.1em] text-[#0d7542]">
        <span>BRYAN RYU / 2026</span><span>AVAILABLE FOR GOOD WORK</span>
      </div>
      <div className="mt-12 flex items-end justify-between border-b border-[#b6c1b8] pb-5">
        <h2 className="text-4xl font-bold tracking-[-0.07em] text-[#111611] sm:text-5xl">SELECTED<br />WORK</h2>
        <span className="font-mono text-[10px] text-[#637167]">03 PROJECTS</span>
      </div>
      <div className="font-mono text-xs">
        {rows.map((row) => (
          <div key={row[0]} className="grid grid-cols-[28px_1fr] gap-x-3 border-b border-[#b6c1b8] py-4 sm:grid-cols-[34px_1.5fr_1fr_auto]">
            <span className="text-[#0d7542]">{row[0]}</span>
            <span className="font-semibold text-[#172017]">{row[1]}</span>
            <span className="col-start-2 mt-1 text-[#637167] sm:col-start-auto sm:mt-0">{row[2]}</span>
            <span className="col-start-2 mt-1 text-[#0d7542] sm:col-start-auto sm:mt-0">{row[3]}</span>
          </div>
        ))}
      </div>
      <p className="mt-9 font-mono text-[11px] leading-5 text-[#637167]">A no-fluff index of things I&apos;ve built, learned, and shipped.</p>
    </div>
  );
}

function NotesPreview() {
  return (
    <div className="preview-notes h-full p-7 sm:p-10">
      <div className="flex justify-between text-xs italic text-[#53715c]"><span>field notes</span><span>vol. 01</span></div>
      <div className="mt-10 grid gap-8 sm:mt-14 sm:grid-cols-[0.7fr_1.3fr]">
        <div className="rounded-[45%_55%_45%_55%] bg-[#9bd2a6] p-5 text-[11px] leading-5 text-[#174623] sm:min-h-52">
          <span className="block font-bold uppercase tracking-[0.16em]">currently</span>
          <p className="mt-5 font-serif text-base leading-6">Thinking about how small tools can make a city feel more navigable.</p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#57905f]">A short story about work</p>
          <h2 className="mt-3 font-serif text-3xl leading-[1.02] tracking-[-0.04em] text-[#203a27] sm:text-5xl">The tiny decision that made a product feel human.</h2>
          <p className="mt-5 max-w-md font-serif text-sm leading-6 text-[#5c6b5f]">A case study about listening closely, revising quickly, and making space for better outcomes.</p>
          <div className="mt-6 text-xs font-semibold text-[#247d3b]">Read the story →</div>
        </div>
      </div>
      <div className="mt-8 flex gap-5 border-t border-[#9ab69e] pt-4 text-[11px] uppercase tracking-[0.1em] text-[#53715c] sm:mt-10"><span>work</span><span>notes</span><span>about</span></div>
    </div>
  );
}

function StudioPreview() {
  return (
    <div className="preview-studio h-full bg-[#0c0e0d] p-6 text-white sm:p-8">
      <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.16em]"><span>BR—Studio</span><span className="text-[#6de89d]">Building in public</span></div>
      <h2 className="mt-14 max-w-lg text-4xl font-semibold leading-[0.93] tracking-[-0.06em] sm:mt-20 sm:text-6xl">Things I&apos;ve made<br /><span className="text-[#6de89d]">worth opening.</span></h2>
      <div className="mt-9 grid gap-3 sm:grid-cols-2">
        <div className="min-h-28 bg-[#6de89d] p-4 text-[#0c0e0d] sm:min-h-36"><span className="text-[10px] font-bold uppercase tracking-[0.14em]">01 / Featured</span><p className="mt-6 text-lg font-semibold tracking-[-0.04em]">Reservation Radar</p></div>
        <div className="min-h-28 border border-white/20 p-4 sm:min-h-36"><span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/55">02 / Experiment</span><p className="mt-6 text-lg font-semibold tracking-[-0.04em]">A better city map</p></div>
      </div>
      <div className="mt-5"><ProjectLinks inverse /></div>
    </div>
  );
}

function Preview({ design }: { design: DesignId }) {
  if (design === "index") return <IndexPreview />;
  if (design === "notes") return <NotesPreview />;
  if (design === "studio") return <StudioPreview />;
  return <GalleryPreview />;
}

export function DesignGallery() {
  const [selected, setSelected] = useState<DesignId>("gallery");
  const active = designs.find((design) => design.id === selected) ?? designs[0];

  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#101110]">
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-6 sm:px-8 sm:pb-20 sm:pt-10">
        <div className="flex items-center justify-between border-b border-black/10 pb-4 text-[11px] font-bold uppercase tracking-[0.13em] text-[#4d564f]">
          <span>BR / Portfolio directions</span>
          <span>Choose a starting point</span>
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0a8448]">Design study / 2026</p>
            <h1 className="mt-5 max-w-xl text-5xl font-semibold leading-[0.93] tracking-[-0.065em] sm:text-7xl">A portfolio should feel like you.</h1>
          </div>
          <p className="max-w-lg text-base leading-7 text-[#5d665f] sm:text-lg">
            Four deliberately different ways to share your resume, real work, and side projects. Pick the one that feels most natural; we&apos;ll turn it into your finished site.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {designs.map((design) => {
            const isActive = selected === design.id;
            return (
              <button
                key={design.id}
                type="button"
                onClick={() => setSelected(design.id)}
                className={`group relative min-h-40 overflow-hidden border p-5 text-left transition-all sm:p-6 ${isActive ? "border-[#15965a] bg-[#e7f3e9]" : "border-black/10 bg-white hover:border-[#15965a]"}`}
                aria-pressed={isActive}
              >
                <span className="text-[11px] font-bold tracking-[0.12em] text-[#0b8248]">{design.number}</span>
                <div className="mt-7 flex items-end justify-between gap-3">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-[-0.045em]">{design.name}</h2>
                    <p className="mt-1 text-sm text-[#5c655e]">{design.short}</p>
                  </div>
                  <span className={`mb-1 text-xl transition-transform ${isActive ? "translate-x-0" : "-translate-x-1 group-hover:translate-x-0"}`}>↗</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:border-r lg:border-black/10 lg:p-12">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0a8448]">{active.number} / Direction</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">{active.name}</h2>
              <p className="mt-6 max-w-sm text-base leading-7 text-[#5d665f]">{active.description}</p>
            </div>
            <div className="mt-12 border-t border-black/10 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#747c75]">Strongest for</p>
              <p className="mt-2 text-sm font-medium">{active.bestFor}</p>
            </div>
          </div>
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="min-h-[430px] border-t border-black/10 lg:border-t-0"
          >
            <Preview design={selected} />
          </motion.div>
        </div>
        {selected === "notes" && (
          <div className="border-t border-black/10 bg-[#edf3eb] px-7 py-5 text-center sm:px-10">
            <Link href="/field-notes" className="text-sm font-semibold text-[#18783a] underline decoration-[#88b98d] underline-offset-4 hover:text-[#0a6030]">
              Open the full Field Notes concept →
            </Link>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">Make the site prove more than a PDF can.</h2>
          <div className="grid gap-7 sm:grid-cols-2">
            <article className="border-t-2 border-[#15965a] pt-4">
              <h3 className="text-lg font-semibold tracking-[-0.03em]">Turn projects into evidence</h3>
              <p className="mt-2 text-sm leading-6 text-[#5d665f]">Each project gets a short problem → contribution → outcome story, plus links to a live demo, source code, or walkthrough.</p>
            </article>
            <article className="border-t-2 border-[#15965a] pt-4">
              <h3 className="text-lg font-semibold tracking-[-0.03em]">Show your process</h3>
              <p className="mt-2 text-sm leading-6 text-[#5d665f]">Add 2–3 tiny artifacts: a before/after, a decision log, a prototype, a chart, or a screenshot. Concrete beats impressive-sounding.</p>
            </article>
            <article className="border-t-2 border-[#15965a] pt-4">
              <h3 className="text-lg font-semibold tracking-[-0.03em]">Add a living signal</h3>
              <p className="mt-2 text-sm leading-6 text-[#5d665f]">A “now” page or compact changelog makes your site feel current: what you&apos;re building, learning, reading, or exploring.</p>
            </article>
            <article className="border-t-2 border-[#15965a] pt-4">
              <h3 className="text-lg font-semibold tracking-[-0.03em]">Make the contact path easy</h3>
              <p className="mt-2 text-sm leading-6 text-[#5d665f]">Keep a human intro, a one-click resume download, and GitHub / LinkedIn links. Recruiters should reach the good stuff in seconds.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

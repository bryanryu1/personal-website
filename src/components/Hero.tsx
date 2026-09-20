"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { useState } from "react";

interface Burst {
  id: number;
  x: number;
  y: number;
}

export function Hero() {
  const [bursts, setBursts] = useState<Burst[]>([]);

  const handleNameClick = () => {
    const id = Date.now();
    const particles = Array.from({ length: 10 }).map((_, i) => ({
      id: id + i,
      x: (Math.random() - 0.5) * 160,
      y: (Math.random() - 0.5) * 160,
    }));
    setBursts((prev) => [...prev, ...particles]);
    setTimeout(() => {
      setBursts((prev) => prev.filter((p) => !particles.some((np) => np.id === p.id)));
    }, 700);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden px-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto w-full max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium text-accent"
        >
          Hi, I&apos;m
        </motion.p>

        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            onClick={handleNameClick}
            className="select-none text-5xl font-semibold tracking-tight text-foreground sm:text-6xl cursor-pointer"
          >
            Your Name
          </motion.h1>

          {bursts.map((b) => (
            <motion.span
              key={b.id}
              initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              animate={{ opacity: 0, x: b.x, y: b.y, scale: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="pointer-events-none absolute left-8 top-2 h-2 w-2 rounded-full bg-accent"
            />
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 text-2xl font-medium text-muted sm:text-3xl"
        >
          Software Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          A short, punchy summary of what you do, what you care about, and
          what kind of problems you like to work on. Two or three sentences
          is plenty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03] active:scale-95"
          >
            <Download size={16} />
            Resume
          </a>
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Mail size={16} />
            Email
          </a>
          <a
            href="https://github.com/yourname"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border p-2.5 text-foreground transition-colors hover:border-accent hover:text-accent"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border p-2.5 text-foreground transition-colors hover:border-accent hover:text-accent"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#experience"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
        aria-label="Scroll to experience"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}

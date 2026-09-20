"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-3xl flex-col items-start gap-6"
      >
        <div>
          <h2 className="text-2xl font-semibold text-foreground">
            Let&apos;s talk
          </h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
            Open to new opportunities and interesting projects. The fastest
            way to reach me is by email.
          </p>
        </div>

        <a
          href="mailto:hello@bryanryu.me"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03] active:scale-95"
        >
          <Mail size={16} />
          you@example.com
        </a>

        <div className="flex items-center gap-3">
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
        </div>

        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Your Name. Built with Next.js.
        </p>
      </motion.div>
    </footer>
  );
}

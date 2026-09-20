"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { useState } from "react";
import { projects } from "@/data/projects";
import { Modal } from "@/components/Modal";

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openProject = projects.find((p) => p.id === openId) ?? null;

  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-sm font-semibold uppercase tracking-widest text-accent"
      >
        Projects
      </motion.h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.button
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            onClick={() => setOpenId(project.id)}
            className="group flex flex-col rounded-2xl border border-border p-5 text-left shadow-sm transition-shadow hover:cursor-pointer hover:shadow-[0_0_0_1px_var(--accent),0_8px_24px_-8px_rgba(15,157,88,0.35)]"
          >
            <p className="font-medium text-foreground group-hover:text-accent transition-colors">
              {project.name}
            </p>
            <p className="mt-1 text-sm text-muted">{project.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-accent-light px-2.5 py-1 text-xs font-medium text-accent-dark"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      <Modal open={!!openProject} onClose={() => setOpenId(null)}>
        {openProject && (
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {openProject.name}
            </h3>
            <p className="mt-1 text-sm text-muted">{openProject.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-foreground">
              {openProject.description}
            </p>
            <ul className="mt-4 space-y-2">
              {openProject.details.map((d) => (
                <li
                  key={d}
                  className="flex gap-2 text-sm leading-relaxed text-foreground"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {openProject.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-accent-light px-2.5 py-1 text-xs font-medium text-accent-dark"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              {openProject.repoUrl && (
                <a
                  href={openProject.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <GithubIcon size={16} />
                  Code
                </a>
              )}
              {openProject.liveUrl && (
                <a
                  href={openProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
                >
                  <ExternalLink size={16} />
                  Live
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

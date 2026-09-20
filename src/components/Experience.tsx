"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { experience } from "@/data/experience";
import { Modal } from "@/components/Modal";

export function Experience() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openRole = experience.find((e) => e.id === openId) ?? null;

  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-sm font-semibold uppercase tracking-widest text-accent"
      >
        Experience
      </motion.h2>

      <div className="flex flex-col divide-y divide-border">
        {experience.map((role, i) => (
          <motion.button
            key={role.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            onClick={() => setOpenId(role.id)}
            className="group flex w-full items-start justify-between gap-4 py-6 text-left transition-colors hover:cursor-pointer"
          >
            <div>
              <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                {role.role}
              </p>
              <p className="mt-1 text-sm text-muted">
                {role.company} &middot; {role.location}
              </p>
            </div>
            <span className="shrink-0 whitespace-nowrap text-sm text-muted">
              {role.start} &ndash; {role.end}
            </span>
          </motion.button>
        ))}
      </div>

      <Modal open={!!openRole} onClose={() => setOpenId(null)}>
        {openRole && (
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {openRole.role}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {openRole.company} &middot; {openRole.location} &middot;{" "}
              {openRole.start} &ndash; {openRole.end}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground">
              {openRole.summary}
            </p>
            <ul className="mt-4 space-y-2">
              {openRole.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-2 text-sm leading-relaxed text-foreground"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {openRole.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-accent-light px-2.5 py-1 text-xs font-medium text-accent-dark"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

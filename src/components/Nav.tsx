"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-3xl items-center justify-between gap-2 px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="shrink-0 font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          Your Name
        </a>
        <ul className="flex items-center gap-0.5 sm:gap-2">
          {sections.map(({ id, label }) => (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                className={`relative block px-2 py-2 text-xs transition-colors sm:px-3 sm:text-sm ${
                  active === id
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {label}
                {active === id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-px h-[2px] rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

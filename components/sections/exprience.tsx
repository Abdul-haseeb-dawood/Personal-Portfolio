"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Development Intern",
    company: "Privately Managed Software Development Project",
    period: "October 2025 — January 2026",
    description:
      "Worked as a full-stack intern under Project Lead Syed Yarooq Hussain, contributing to both front-end and back-end development. Built interfaces with React.js, developed Node.js services, and supported the software development lifecycle from requirements to delivery.",
    achievements: [
      "Built and maintained React.js front-end features for the project",
      "Developed Node.js back-end services and implemented REST APIs",
      "Worked hands-on with databases for data handling and storage",
      "Recognised for quick learning, analytical thinking and attention to detail",
    ],
    tech: ["React.js", "Node.js", "REST APIs", "Databases", "Git"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Experience
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Professional Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Where I&apos;ve applied and sharpened my skills so far
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-5" />

          {experiences.map((exp) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative pl-14 sm:pl-16"
            >
              <div className="absolute left-0 top-1.5 flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-background sm:left-1">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>

              <div className="glow-border rounded-xl border border-border bg-card/40 p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {exp.period}
                  </span>
                  <span className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    Internship
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-bold">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-accent" />
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

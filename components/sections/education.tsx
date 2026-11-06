"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const education = [
  {
    title: "Governor Sindh Digital Youth Hub — AI Agent Factory",
    institution: "Governor Sindh Digital Youth Hub Program",
    period: "Present",
    status: "Ongoing",
    description:
      "Currently learning how to build and ship AI agents end to end, covering the Digital FTE model, multi-agent systems, and taking them to production on cloud-native infrastructure.",
    tags: ["AI Agent Factory & Digital FTE", "Multi-Agent Systems", "Production Deployment", "Cloud-Native"],
  },
  {
    title: "Intermediate (Commerce)",
    institution: "CMS Govt. Higher Secondary Campus School",
    period: "2025 — Present",
    status: "2nd Year",
    description:
      "Currently in my 2nd year of intermediate at the same campus, studying commerce while continuing to build software alongside.",
    tags: ["Commerce"],
  },
  {
    title: "Matriculation (Biology, General)",
    institution: "CMS Govt. Higher Secondary Campus School",
    period: "Jan 2023 — Apr 2025",
    status: "Grade: B",
    description:
      "Completed matriculation with Biology and General subjects, graduating with a B grade.",
    tags: ["Biology", "General"],
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Education
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Learning Never Stops
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            My academic background and what I&apos;m learning right now
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <h3 className="mb-6 flex items-center gap-3 text-xl font-bold">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
            </span>
            Education &amp; Learning
          </h3>

          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="glow-border rounded-xl border border-border bg-card/40 p-6"
              >
                <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    <Calendar className="h-3.5 w-3.5" />
                    {edu.period}
                  </span>
                  <span className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {edu.status}
                  </span>
                </div>

                <h4 className="text-lg font-semibold">{edu.title}</h4>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <BookOpen className="h-3.5 w-3.5 shrink-0" />
                  {edu.institution}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {edu.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

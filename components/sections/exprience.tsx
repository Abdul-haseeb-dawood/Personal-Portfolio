"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "[Company Name]",
    period: "2023 — Present",
    description:
      "Leading development of web applications used by [X] users. Architecting microservices, mentoring junior developers, and driving technical decisions.",
    achievements: [
      "Reduced page load times by 40% through optimization",
      "Led migration from monolith to microservices architecture",
      "Mentored 3 junior developers on best practices",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    role: "Full-Stack Developer",
    company: "[Company Name]",
    period: "2021 — 2023",
    description:
      "Developed and maintained multiple client-facing applications. Worked closely with product and design teams to deliver features end-to-end.",
    achievements: [
      "Built CI/CD pipeline reducing deployment time by 60%",
      "Implemented real-time features with WebSockets",
      "Integrated third-party APIs and payment systems",
    ],
    tech: ["React", "Express", "MongoDB", "Redis", "GCP"],
  },
  {
    role: "Frontend Developer",
    company: "[Company Name]",
    period: "2019 — 2021",
    description:
      "Focused on building responsive and accessible user interfaces. Collaborated with designers to create pixel-perfect, interactive web experiences.",
    achievements: [
      "Improved Lighthouse scores from 60 to 95+",
      "Built reusable component library used across teams",
      "Implemented automated testing with Jest and Cypress",
    ],
    tech: ["React", "TypeScript", "Sass", "Jest", "Webpack"],
  },
  {
    role: "Junior Developer",
    company: "[Company Name]",
    period: "2018 — 2019",
    description:
      "Started my professional journey building features for web applications and learning industry best practices.",
    achievements: [
      "Contributed to 10+ client projects",
      "Learned agile development methodologies",
      "Built internal tools that saved 5+ hours weekly",
    ],
    tech: ["JavaScript", "jQuery", "PHP", "MySQL"],
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
            My career path and the companies I&apos;ve worked with
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative mb-12 pl-12 sm:pl-0 ${
                i % 2 === 0 ? "sm:pr-1/2 sm:text-right" : "sm:pl-1/2"
              }`}
            >
              <div
                className={`absolute left-4 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background sm:left-1/2 sm:-translate-x-1/2 ${
                  i % 2 === 0
                    ? "sm:left-auto sm:right-0 sm:translate-x-1/2"
                    : "sm:left-0 sm:-translate-x-1/2"
                }`}
              >
                <Briefcase className="h-4 w-4 text-primary" />
              </div>

              <div className="glow-border rounded-xl border border-border bg-card/40 p-6">
                <span className="text-xs font-semibold text-primary">
                  {exp.period}
                </span>
                <h3 className="mt-2 text-lg font-bold">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {exp.achievements.map((achievement, j) => (
                    <li
                      key={j}
                      className={`flex items-start gap-2 text-sm text-muted-foreground ${
                        i % 2 === 0 ? "sm:flex-row-reverse sm:text-right" : ""
                      }`}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-accent" />
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div
                  className={`mt-4 flex flex-wrap gap-2 ${
                    i % 2 === 0 ? "sm:justify-end" : ""
                  }`}
                >
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

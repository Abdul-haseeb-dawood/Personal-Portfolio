"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "[University Name]",
    period: "2014 — 2018",
    description:
      "Graduated with honors. Focus on software engineering, algorithms, data structures, and database systems.",
  },
  {
    degree: "High School Diploma",
    institution: "[School Name]",
    period: "2012 — 2014",
    description:
      "Science stream with emphasis on mathematics and computer science fundamentals.",
  },
];

const certifications = [
  {
    title: "AWS Certified Developer — Associate",
    issuer: "Amazon Web Services",
    year: "2023",
    icon: Award,
  },
  {
    title: "Professional Scrum Master I (PSM I)",
    issuer: "Scrum.org",
    year: "2022",
    icon: Award,
  },
  {
    title: "Meta Front-End Developer Professional",
    issuer: "Coursera / Meta",
    year: "2022",
    icon: BookOpen,
  },
  {
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    year: "2021",
    icon: Award,
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    year: "2023",
    icon: Award,
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "TensorFlow",
    year: "2022",
    icon: BookOpen,
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
            Education & Certifications
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Learning Never Stops
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Academic background and professional certifications
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 flex items-center gap-3 text-xl font-bold">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </span>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  className="glow-border rounded-xl border border-border bg-card/40 p-6"
                >
                  <div className="mb-2 flex items-center gap-2 text-xs text-primary">
                    <Calendar className="h-3.5 w-3.5" />
                    {edu.period}
                  </div>
                  <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-3 text-xl font-bold">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <Award className="h-5 w-5" />
              </span>
              Certifications
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group glow-border rounded-xl border border-border bg-card/40 p-4"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 text-primary transition-all group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground">
                    <cert.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-semibold leading-snug">
                    {cert.title}
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {cert.issuer}
                  </p>
                  <p className="mt-2 text-xs font-medium text-primary">
                    {cert.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

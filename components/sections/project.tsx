"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Analytics Dashboard Platform",
    description:
      "A real-time analytics dashboard for tracking user behavior, revenue, and engagement metrics. Features customizable widgets, data export, and team collaboration.",
    image:
      "https://images.pexels.com/photos/34069/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Recharts", "WebSocket"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/project",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product catalog, cart, checkout, order tracking, and admin dashboard. Integrated with Stripe for payments.",
    image:
      "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
    tech: ["React", "Node.js", "Stripe", "MongoDB", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/project",
    featured: true,
  },
  {
    title: "AI-Powered Content Tool",
    description:
      "An AI-driven content generation and optimization platform. Uses LLMs to create, edit, and analyze content with real-time suggestions and SEO scoring.",
    image:
      "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tech: ["Next.js", "OpenAI API", "Python", "FastAPI", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/project",
    featured: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Featured Projects
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Things I&apos;ve Built
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A selection of projects showcasing my skills and experience
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group glow-border flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-bold">{project.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-card/50 px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

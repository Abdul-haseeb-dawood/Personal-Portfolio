"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Download,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "haseebdawood14@gmail.com",
    href: "mailto:haseebdawood14@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 322 2690129",
    href: "tel:+923222690129",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karachi, Pakistan",
    href: undefined,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/a-haseeb",
    href: "https://www.linkedin.com/in/a-haseeb-%F0%9F%8E%93-b07825301/",
  },
];

const availability = ["Freelancing", "Remote", "Hybrid", "Contract", "On-site"];

export function Contact() {
  return (
    <section id="contact" className="relative py-20 text-foreground sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Get In Touch
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Let&apos;s build something great together.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Open to freelancing, remote, hybrid, contract and on-site roles.
            Reach out directly — I usually reply the same day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-4 rounded-full border border-border bg-card/40 px-6 py-4 sm:flex-row sm:justify-center"
        >
          <span className="flex items-center gap-2 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <div className="flex flex-wrap justify-center gap-2">
            {availability.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;

            const card = (
              <div className="glow-border flex h-full items-center gap-4 rounded-2xl border border-border bg-card/40 p-5 transition-colors group-hover:border-primary/60">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground">{info.label}</p>
                  <p className="truncate text-sm font-medium">{info.value}</p>
                </div>

                {info.href && (
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                )}
              </div>
            );

            return (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group block h-full rounded-2xl"
                  >
                    {card}
                  </a>
                ) : (
                  card
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="glow-border mx-auto mt-10 flex max-w-5xl flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-card/40 p-6 text-center sm:p-8 md:flex-row md:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary sm:flex">
              <FileText className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Want the full picture?</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Grab my resume for skills, projects and experience in one place.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
            >
              <a href="/resume.pdf" download="Abdul-Haseeb-Dawood-Resume.pdf">
                <Download
                  className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
                Download Resume
              </a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href="mailto:haseebdawood14@gmail.com">
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                Email Me
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

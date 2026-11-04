"use client";

import { motion } from "framer-motion";
import { ShinyButton } from "@/components/ui/shiny-button";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import Image from "next/image";

const socials = [
  { icon: FaGithub, href: "https://github.com/your-username", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/your-username",
    label: "LinkedIn",
  },
  { icon: FaGoogle, href: "mailto:your.email@example.com", label: "Email" },
];

const easeOutSmooth = [0.22, 1, 0.36, 1] as const;
const nameLetters = Array.from("Abdul-Haseeb");

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easeOutSmooth }}
          className="flex flex-col justify-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: easeOutSmooth }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for new opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: easeOutSmooth }}
            className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 3.2,
                delay: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex"
            >
              <motion.span
                aria-label="Abdul-Haseeb"
                className="inline-flex text-3xl font-serif font-extrabold uppercase tracking-tight text-transparent drop-shadow-[0_0_8px_rgba(0,229,245,0.5)] [-webkit-text-stroke:1.5px_#00E5F5] sm:text-4xl md:text-6xl"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { delayChildren: 0.48, staggerChildren: 0.045 },
                  },
                }}
              >
                {nameLetters.map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    aria-hidden="true"
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.45, ease: easeOutSmooth },
                      },
                    }}
                  >
                    {letter === " " ? "\u00a0" : letter}
                  </motion.span>
                ))}
              </motion.span>
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: easeOutSmooth }}
            className="mt-5 flex items-center gap-3 text-xl font-semibold text-foreground/80 sm:text-2xl"
          >
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 40, opacity: 1 }}
              transition={{ delay: 1.15, duration: 0.5, ease: easeOutSmooth }}
              className="h-px bg-primary"
            />
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.55, ease: easeOutSmooth }}
            >
              Full-Stack Developer
            </motion.span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: easeOutSmooth }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            I turn bold ideas into fast, thoughtful digital products — from
            polished interfaces to reliable systems that are built to grow.
            Clean code, sharp design, and meaningful results are always part of
            the process.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: easeOutSmooth }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <ShinyButton label="View Projects" />
            <ShinyButton label="Download CV" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease: easeOutSmooth }}
            className="mt-10 flex items-center gap-4 border-t border-border/70 pt-6"
          >
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: easeOutSmooth }}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary hover:glow-primary"
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: easeOutSmooth }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-[620px]">
            <div className="absolute -inset-5 rounded-[2rem] border border-primary/10 bg-primary/[0.03] blur-sm" />

            <div className="relative overflow-hidden rounded-[1.25rem] border border-border/80 bg-black shadow-2xl shadow-black/40">
              <Image
                src="/image.png"
                alt="Abdul Haseeb Dawood developer workspace artwork"
                className="block aspect-[4/3] h-auto w-full object-cover opacity-95 transition-opacity duration-500 hover:opacity-100"
                width={800}
                height={875}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-primary/[0.12]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/50 to-transparent" />
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 24, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.1, duration: 0.7, ease: easeOutSmooth }}
              className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-xl border border-border bg-card/90 p-4 backdrop-blur-xl"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <span className="text-lg font-bold">5+</span>
              </div>
              <div>
                <p className="text-sm font-semibold">Years</p>
                <p className="text-xs text-muted-foreground">Experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, x: 10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.3, duration: 0.7, ease: easeOutSmooth }}
              className="absolute -top-4 -right-4 flex items-center gap-3 rounded-xl border border-border bg-card/90 p-4 backdrop-blur-xl"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-primary text-primary-foreground">
                <span className="text-lg font-bold">50+</span>
              </div>
              <div>
                <p className="text-sm font-semibold">Projects</p>
                <p className="text-xs text-muted-foreground">Delivered</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

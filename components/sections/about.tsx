"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Briefcase, GraduationCap, Code2, Coffee, Check } from "lucide-react";

const easeOutSmooth = [0.22, 1, 0.36, 1] as const;

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "5+" },
  { icon: Code2, label: "Projects Completed", value: "50+" },
  { icon: GraduationCap, label: "Certifications", value: "8+" },
  { icon: Coffee, label: "Coffee Cups", value: "∞" },
];

const offerings = [
  "End-to-end product development from concept to deployment",
  "Clean, maintainable, and well-tested code",
  "Performance optimization and SEO best practices",
  "Responsive, accessible, and beautiful UI design",
  "API design and database architecture",
  "Cloud deployment and DevOps practices",
];

function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-60px" });

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-80, 80], [8, -8]), {
    stiffness: 200,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [-80, 80], [-8, 8]), {
    stiffness: 200,
    damping: 18,
  });
  const glowX = useTransform(mx, [-80, 80], ["0%", "100%"]);
  const glowY = useTransform(my, [-80, 80], ["0%", "100%"]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left - rect.width / 2);
    my.set(e.clientY - rect.top - rect.height / 2);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: easeOutSmooth }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 600 }}
      className="group relative cursor-pointer rounded-2xl border border-border bg-card/60 p-3 text-center backdrop-blur-sm transition-colors duration-300 hover:border-primary/50"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(220px circle at ${gx} ${gy}, hsl(var(--glow-1) / 0.18), transparent 65%)`,
          ),
        }}
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1,
          delay: index * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative mb-3 flex h-9 w-9 mx-auto items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary transition-transform duration-300 group-hover:scale-100"
      >
        <stat.icon className="h-5 w-5" />
        <span className="absolute inset-0 rounded-xl border border-primary/20" />
      </motion.div>
      <p className="relative text-2xl font-extrabold text-gradient-animated">
        {stat.value}
      </p>
      <p className="relative mt-1 text-[8px] font-medium uppercase tracking-wider text-muted-foreground">
        {stat.label}
      </p>
    </motion.div>
  );
}

function OfferingItem({ item, index }: { item: string; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: easeOutSmooth }}
      className="group/item flex items-start gap-3 rounded-lg p-2 transition-colors duration-300 hover:bg-primary/[0.06]"
    >
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-md shadow-primary/20 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-3">
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
      <span className="text-sm text-muted-foreground transition-colors duration-300 group-hover/item:text-foreground/90">
        {item}
      </span>
    </motion.li>
  );
}

export function About() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOutSmooth }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            About Me
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: easeOutSmooth }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6 text-2xl font-bold">
              Passionate Developer Building{" "}
              <span className="text-gradient">Digital Experiences</span>
            </h3>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                I&apos;m a passionate Software Engineer who enjoys building
                modern, user-friendly digital experiences & solving real-world
                problems through technology. I focus on writing clean code,
                developing solutions, and creating applications that deliver
                real value.
              </p>
              <p>
                Beyond software development, I&apos;m exploring AI Agents and
                intelligent automation to build smarter solutions. I believe in
                continuous learning, creativity, and pushing boundaries to turn
                ideas into impactful products.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: easeOutSmooth }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <motion.div
                animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: easeOutSmooth }}
                className="glow-border relative rounded-2xl border border-border hover:border-primary/100 hover:duration-1000 bg-card/40 p-8 backdrop-blur-sm"
              >
                <motion.h4
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-6 text-lg font-semibold"
                >
                  What I bring to the table
                </motion.h4>
                <ul className="space-y-2">
                  {offerings.map((item, i) => (
                    <OfferingItem key={i} item={item} index={i} />
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

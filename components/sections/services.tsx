"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Globe, Server, BrainCircuit, Plug, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Building responsive, performant, and accessible web applications using modern frameworks like React, Next.js, and Tailwind CSS.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Performance Tuning",
      "Accessibility",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Designing scalable server architectures with Node.js, Python, and PostgreSQL. Building microservices and handling data at scale.",
    features: [
      "API Architecture",
      "Database Design",
      "Microservices",
      "Authentication",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "Integrating AI models and building automation pipelines to streamline workflows and add intelligent features to applications.",
    features: [
      "LLM Integration",
      "Workflow Automation",
      "Data Pipelines",
      "Smart Analytics",
    ],
  },
  {
    icon: Plug,
    title: "API Development",
    description:
      "Creating robust RESTful and GraphQL APIs with comprehensive documentation, rate limiting, and secure authentication.",
    features: [
      "REST & GraphQL",
      "API Documentation",
      "Rate Limiting",
      "WebSockets",
    ],
  },
];

const easeOutSmooth = [0.22, 1, 0.36, 1] as const;

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-100, 100], [6, -6]), {
    stiffness: 200,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [-100, 100], [-6, 6]), {
    stiffness: 200,
    damping: 18,
  });
  const glowX = useTransform(mx, [-100, 100], ["0%", "100%"]);
  const glowY = useTransform(my, [-100, 100], ["0%", "100%"]);

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
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: easeOutSmooth }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 700 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-colors duration-400 hover:border-primary/50"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(240px circle at ${gx} ${gy}, hsl(var(--glow-1) / 0.16), transparent 60%)`,
          ),
        }}
      />

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 3.5,
          delay: index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
      >
        <service.icon className="h-7 w-7" />
        <span className="absolute -inset-1 rounded-xl border border-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </motion.div>

      <h3 className="relative mb-3 text-xl font-bold transition-colors duration-300 group-hover:text-primary">
        {service.title}
      </h3>
      <p className="relative mb-4 text-xs leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <ul className="relative space-y-2">
        {service.features.map((feature, fi) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: index * 0.12 + 0.3 + fi * 0.08,
              duration: 0.4,
              ease: easeOutSmooth,
            }}
            className="flex items-center gap-2 text-[13px] text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-150" />
            {feature}
          </motion.li>
        ))}
      </ul>

      <div className="relative mt-6 flex items-center text-transparent gap-1 overflow-hidden text-[1px] font-medium text-primary">
        <span className="transition-transform text-transparent duration-400 group-hover:translate-x-0.5" />
        more
        <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
}
export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Services
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
            What I Do
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Comprehensive development services to bring your product from idea
            to launch
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

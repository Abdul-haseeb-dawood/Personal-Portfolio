"use client";

import { Badge } from "@/components/ui/badge";
import portfolioConfig from "@/config/portfolio.json";
import skillsDatabase from "@/config/skills-database.json";

interface PortfolioConfig {
  skills: string[];
}

interface SkillTag {
  id: string;
  name: string;
  image: string;
  color: string;
}

const config = portfolioConfig as PortfolioConfig;
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  Server,
  GitBranch,
  Terminal,
  Cpu,
  Layers,
  Boxes,
  Zap,
  Globe,
  Shield,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layers,
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "GraphQL", level: 82 },
      { name: "REST APIs", level: 93 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "CI/CD", level: 83 },
      { name: "Vercel", level: 90 },
      { name: "Linux", level: 87 },
    ],
  },
  {
    title: "Tools & Practices",
    icon: GitBranch,
    skills: [
      { name: "Git", level: 95 },
      { name: "Jest / Testing", level: 85 },
      { name: "Agile / Scrum", level: 88 },
      { name: "Figma", level: 75 },
      { name: "VS Code", level: 98 },
    ],
  },
];

export function Skills() {
  const getSkillData = (skillId: string): SkillTag | null => {
    const skillData = skillsDatabase[skillId as keyof typeof skillsDatabase];
    if (!skillData) return null;

    return {
      id: skillId,
      name: skillData.name,
      image: skillData.images,
      color: skillData.color,
    };
  };

  return (
    <section id="skills" className="relative pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Technical Skills
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
            My Tech Arsenal
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="relative">
          <div className="px-4">
            <div className="max-w-5xl mx-auto">
              {/* Header Section */}
              <div className="text-center">
                {/* Skill Badges */}
                <div className="flex flex-wrap justify-center gap-4 ">
                  {config.skills.map((skillId) => {
                    const skill = getSkillData(skillId);
                    if (!skill) return null;

                    const usesThemeColors = skill.color === "default";

                    return (
                      <Badge
                        key={skill.id}
                        className={cn(
                          "skill-glow border-2 px-3 py-1 text-sm font-medium backdrop-blur-sm transition-all duration-700 hover:scale-125",
                          !usesThemeColors && "text-white",
                        )}
                        style={{
                          backgroundColor: usesThemeColors
                            ? "hsl(var(--skill-chip-surface))"
                            : skill.color,
                          borderColor: usesThemeColors
                            ? "hsl(var(--skill-chip-border))"
                            : skill.color,
                          color: usesThemeColors
                            ? "hsl(var(--skill-chip-foreground))"
                            : undefined,
                        }}
                      >
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-8 h-7 pr-1"
                        />
                        {skill.name}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

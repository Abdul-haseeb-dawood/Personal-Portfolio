"use client";

import { Mail, ArrowUp, Code2 } from "lucide-react";

const socials = [
  { href: "https://github.com/your-username", label: "GitHub" },
  {
    href: "https://linkedin.com/in/your-username",
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/your-username",
    label: "Twitter",
  },
  { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
];

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 font-bold text-lg"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <Code2 className="h-5 w-5" />
              </span>
              <span className="text-gradient">DevPortfolio</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Full-stack developer crafting scalable web applications and
              elegant digital experiences.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:glow-primary"
                >
                  {/* <social.icon className="h-5 w-5" /> */}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Let&apos;s Connect
            </h4>
            <p className="text-sm text-muted-foreground">
              Open to freelance opportunities and full-time roles.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">All rights reserved.</p>
          <a
            href="#home"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle2, Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type Status = "idle" | "loading" | "success" | "error";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

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
    value: "+92 322 2901029",
    href: "tel:+923229901029",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: undefined,
  },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<ContactForm>(initialForm);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "loading") return;

    setStatus("loading");
  };

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (status === "error" || status === "success") {
      setStatus("idle");
    }
  };

  return (
    <main className="min-h-screen text-foreground">
      <section id="contact" className="relative py-20 sm:py-24">
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
              Have a project in mind or just want to say hello? Send me a
              message and I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="glow-border h-full rounded-2xl border border-border bg-card/40 p-6 sm:p-8">
                <h2 className="mb-3 text-xl font-bold">Get in touch</h2>
                <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                  Whether you have a question about my work, want to discuss a
                  project, or just want to connect, feel free to reach out.
                </p>

                <div className="space-y-5">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;

                    return (
                      <div key={info.label} className="flex items-center gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="break-words text-sm font-medium transition-colors hover:text-primary"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="glow-border rounded-2xl border border-border bg-card/40 p-6 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium"
                      htmlFor="contact-name"
                    >
                      Name
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(event) =>
                        updateField("name", event.target.value)
                      }
                      placeholder="Your name"
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label
                      className="mb-2 block text-sm font-medium"
                      htmlFor="contact-email"
                    >
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      placeholder="your@email.com"
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    className="mb-2 block text-sm font-medium"
                    htmlFor="contact-subject"
                  >
                    Subject
                  </label>
                  <Input
                    id="contact-subject"
                    name="subject"
                    required
                    maxLength={150}
                    value={form.subject}
                    onChange={(event) =>
                      updateField("subject", event.target.value)
                    }
                    placeholder="What's this about?"
                    className="bg-background/50"
                  />
                </div>

                <div className="mt-5">
                  <label
                    className="mb-2 block text-sm font-medium"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={5}
                    maxLength={5000}
                    rows={6}
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    placeholder="Tell me about your project..."
                    className="resize-y bg-background/50"
                  />
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="group bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2
                          className="mr-2 h-4 w-4 animate-spin"
                          aria-hidden="true"
                        />
                        Sending...
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle2
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                        Sent!
                      </>
                    ) : (
                      <>
                        <Send
                          className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                        Send Message
                      </>
                    )}
                  </Button>

                  {status === "success" && (
                    <p
                      role="status"
                      className="text-sm text-green-600 dark:text-green-400"
                    >
                      Thanks! Your message has been sent successfully.
                    </p>
                  )}

                  {status === "error" && (
                    <p role="alert" className="text-sm text-destructive">
                      Could not send your message. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "[Your Brother's Name] — Full-Stack Developer",
  description:
    "Full-stack developer specializing in modern web applications, backend systems, and AI-powered solutions. View my projects, experience, and get in touch.",
  keywords: [
    "full-stack developer",
    "web developer",
    "software engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "portfolio",
  ],
  openGraph: {
    title: "[Your Brother's Name] — Full-Stack Developer",
    description:
      "Full-stack developer crafting scalable web applications and elegant digital experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "[Your Brother's Name] — Full-Stack Developer",
    description:
      "Full-stack developer crafting scalable web applications and elegant digital experiences.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

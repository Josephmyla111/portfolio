import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Joseph Raju Myla | Trust & Safety | Content Review Specialist",
  description:
    "Detail-oriented Trust & Safety professional combining analytical expertise with content review, emotional resilience, and policy adherence. Dublin, Ireland.",
  keywords: [
    "Joseph Myla",
    "Trust & Safety",
    "Content Review",
    "Data Analyst",
    "Dublin",
    "Ireland",
  ],
  authors: [{ name: "Joseph Raju Myla" }],
  openGraph: {
    title: "Joseph Raju Myla | Trust & Safety | Content Review Specialist",
    description:
      "Detail-oriented Trust & Safety professional combining analytical expertise with content review, emotional resilience, and policy adherence.",
    // If you don't own a domain yet, remove or replace with your Vercel URL later
    url: "https://josephmyla.com",
    siteName: "Joseph Myla Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Raju Myla | Trust & Safety Professional",
    description:
      "Trust & Safety | Content Review Specialist | Data-Driven Analyst",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent theme flash: runs before React loads */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var stored = localStorage.getItem('portfolio-theme');
                var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = (stored === 'dark' || stored === 'light') ? stored : (systemDark ? 'dark' : 'light');
                document.documentElement.classList.remove('light','dark');
                document.documentElement.classList.add(theme);
              } catch (e) {}
            })();
          `}
        </Script>
      </head>

      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

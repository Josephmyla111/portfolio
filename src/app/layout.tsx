import type { Metadata } from "next";
import "./globals.css";
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
    url: "https://josephmyla.com",
    siteName: "Joseph Myla Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Raju Myla | Trust & Safety Professional",
    description: "Trust & Safety | Content Review Specialist | Data-Driven Analyst",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('portfolio-theme');
                const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = stored === 'dark' || stored === 'light' ? stored : (systemDark ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

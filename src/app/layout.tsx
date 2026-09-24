import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeProvider";
import { SkipLink } from "@/components/common/SkipLink";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/constants/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.role} & Systems Builder`,
  description: `${SITE_CONFIG.name} is a Computer Science (Artificial Intelligence) graduate building production-oriented AI systems, RAG workflows, modular backends, and data platforms.`,
  keywords: [
    "Sai Chetan Reddy",
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Engineer",
    "Software Engineer",
    "FastAPI",
    "RAG",
    "Retrieval-Augmented Generation",
    "PostgreSQL",
    "Manipal Institute of Technology",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.github }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saichetanreddy.dev",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.role} & Systems Builder`,
    description: SITE_CONFIG.summary,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.role}`,
    description: SITE_CONFIG.summary,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans min-h-screen flex flex-col selection:bg-sky-500/20 antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SkipLink />
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}


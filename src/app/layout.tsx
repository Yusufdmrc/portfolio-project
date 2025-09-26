import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yusuf Demirci - Software Test Engineer & Full-Stack Developer",
  description:
    "Test otomasyonu, web geliştirme ve yazılım kalitesi konularında uzmanlaşmış yazılım mühendisi. Modern teknolojilerle kaliteli çözümler.",
  keywords:
    "software test engineer, full-stack developer, test automation, web development, react, next.js, selenium, cypress, jest, typescript",
  authors: [{ name: "Yusuf Demirci" }],
  creator: "Yusuf Demirci",
  publisher: "Yusuf Demirci",
  robots: "index, follow",
  // Google Search Console verification
  verification: {
    google: "googleb16400e2a5218364",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://yusufdemircii.me"
  ),
  openGraph: {
    title: "Yusuf Demirci - Software Test Engineer & Full-Stack Developer",
    description:
      "Test otomasyonu, web geliştirme ve yazılım kalitesi konularında uzmanlaşmış yazılım mühendisi",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yusufdemircii.me",
    siteName: "Yusuf Demirci Portfolio",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yusuf Demirci Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yusuf Demirci - Software Test Engineer & Full-Stack Developer",
    description: "Test otomasyonu ve web geliştirme uzmanı",
    creator: "@yusufdemirci",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://yusufdemircii.me",
  },
  icons: {
    icon: [
      { url: "/images/yusuf-profile.jpeg", sizes: "16x16", type: "image/jpeg" },
      { url: "/images/yusuf-profile.jpeg", sizes: "32x32", type: "image/jpeg" },
      { url: "/images/yusuf-profile.jpeg", sizes: "48x48", type: "image/jpeg" },
    ],
    shortcut: "/images/yusuf-profile.jpeg",
    apple: { url: "/images/yusuf-profile.jpeg", sizes: "180x180" },
  },
};

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/jpeg"
          sizes="16x16"
          href="/images/yusuf-profile.jpeg"
        />
        <link
          rel="icon"
          type="image/jpeg"
          sizes="32x32"
          href="/images/yusuf-profile.jpeg"
        />
        <link rel="shortcut icon" href="/images/yusuf-profile.jpeg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/yusuf-profile.jpeg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Yusuf Demirci",
              url:
                process.env.NEXT_PUBLIC_SITE_URL || "https://yusufdemircii.me",
              jobTitle: "Software Test Engineer & Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              knowsAbout: [
                "Software Testing",
                "Test Automation",
                "React",
                "Next.js",
                "TypeScript",
                "Selenium",
                "Cypress",
              ],
              sameAs: [
                "https://linkedin.com/in/yusufdemirci",
                "https://github.com/yusufdmrc",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased min-h-screen transition-colors duration-300`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

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
  // Google Search Console verification - bu kısmı Google'dan aldığınız kod ile değiştirin
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE_HERE",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://yusufdemirci.dev"
  ),
  openGraph: {
    title: "Yusuf Demirci - Software Test Engineer & Full-Stack Developer",
    description:
      "Test otomasyonu, web geliştirme ve yazılım kalitesi konularında uzmanlaşmış yazılım mühendisi",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yusufdemirci.dev",
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
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://yusufdemirci.dev",
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

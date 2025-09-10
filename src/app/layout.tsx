import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caspcore - AI-Powered MiCA Compliance for Crypto Providers",
  description: "Get MiCA compliant with Caspcore's AI-powered SaaS platform. End-to-end compliance solution for crypto providers. No legal teams needed.",
  keywords: "MiCA compliance, crypto regulations, AI compliance, crypto SaaS, regulatory compliance, EU crypto regulations",
  authors: [{ name: "Caspcore" }],
  creator: "Caspcore",
  publisher: "Caspcore",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://caspcore.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Caspcore - AI-Powered MiCA Compliance for Crypto Providers",
    description: "Get MiCA compliant with Caspcore's AI-powered SaaS platform. End-to-end compliance solution for crypto providers.",
    url: "https://caspcore.github.io",
    siteName: "Caspcore",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Caspcore - AI-Powered MiCA Compliance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caspcore - AI-Powered MiCA Compliance for Crypto Providers",
    description: "Get MiCA compliant with Caspcore's AI-powered SaaS platform. End-to-end compliance solution for crypto providers.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  departureMono,
  PPSans,
  relishGargler,
} from "@/assets/fonts/fonts-custom";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solana Agent Kit",
  description: "Build AI-Powered Applications on Solana Effortlessly",
  keywords: ["solana", "hackathon", "ai", "solana Agent Kit"],
  authors: [{ name: "SendAI", url: "https://www.sendai.fun" }],
  openGraph: {
    title: "Solana Agent Kit",
    description: "Build AI-Powered Applications on Solana Effortlessly",
    url: "https://solanaagentkit.xyz",
    siteName: "Solana Agent Kit",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Solana Agent Kit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solana Agent Kit",
    description: "Build AI-Powered Applications on Solana Effortlessly",
    images: ["/og.png"],
  },
  metadataBase: new URL("https://solanaagentkit.xyz"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${relishGargler.variable} ${PPSans.variable} ${departureMono.variable} ${inter.className}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

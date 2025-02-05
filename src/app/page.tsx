"use client";

import logoSendAI from "@/assets/logos/sendai.svg";
import logoSendaiWhite from "@/assets/logos/sendaiWhite.svg";
import { CodeBlock } from "@/components/code-block";
import { FeatureCard } from "@/components/feature-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import logoAgentKit from "@/assets/logos/agentKitLogo.svg";
import logoWebsite from "@/assets/logos/websiteLogo.svg";
import logoX from "@/assets/logos/xLogo.svg";
import logoGithub from "@/assets/logos/githubLogo.svg";
import { LucideFile, LucideFileDown } from "lucide-react";

export default function Page() {
  const featuresArray = [
    {
      title: "Create and Trade Solana Tokens",
      description:
        "Deploy SPL tokens or launch directly on Pump.fun. Swap any token using Jupiter.",
      color: "yellow",
      link: "https://github.com/sendaifun/solana-agent-kit?tab=readme-ov-file#deploy-a-new-token",
    },
    {
      title: "Launch and Mint NFTs",
      description: "Collection deployment and NFT minting using Metaplex",
      color: "cyan",
      link: "https://github.com/sendaifun/solana-agent-kit?tab=readme-ov-file#create-nft-collection",
    },

    {
      title: "Send ZK Compressed Airdrops",
      description:
        "Airdrop at 1000x lower cost using Light Protocol and Helius",
      color: "mint",
      link: "https://github.com/sendaifun/solana-agent-kit?tab=readme-ov-file#send-an-spl-token-airdrop-via-zk-compression",
    },
    {
      title: "Launch tokens on AMMs",
      description:
        "Create AMM pools on top Solana DEXs like Meteora, Raydium, and Orca",
      color: "red",
      link: "https://github.com/sendaifun/solana-agent-kit?tab=readme-ov-file#-core-blockchain-features",
    },
    {
      title: "Execute Solana Blinks (Actions)",
      description:
        "Lend on Lulo or Play on SEND Arcade or stake your SOL for JupSOL",
      color: "purple",
      link: "https://github.com/sendaifun/solana-agent-kit?tab=readme-ov-file#lend-tokens",
    },
    {
      title: "AI Integrations",
      description: "From Langchain to Open AI's GPT and DALL-E and more!",
      color: "cyan",
      link: "https://github.com/sendaifun/solana-agent-kit?tab=readme-ov-file#quick-start",
    },
  ] as const;

  return (
    // <div className="min-h-screen bg-gradient-to-br from-black to-gray-900">
    <div className="min-h-screen min-w-full relative overflow-x-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="min-h-full min-w-full bg-[url('/assets/bgs/home.svg')] bg-repeat bg-top"></div>
      </div>
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-sm font-relish font-bold text-[#1BE1FF] tracking-wider"
          >
            <Image
              src={logoAgentKit}
              className="w-48 md:w-64"
              alt="Solana Agent Kit Logo"
            />
            {/* SOLANA AGENT KIT */}
          </Link>
          <div className="space-x-8 flex ">
            <Link
              href="https://x.com/sendaifun"
              target="_blank"
              className="text-gray-300 hover:text-[#1BE1FF] transition-colors"
            >
              <Image src={logoX} className="w-4 md:w-6" alt={""} />
            </Link>
            <Link
              href="https://sendai.fun"
              target="_blank"
              className="text-gray-300 hover:text-[#1BE1FF] transition-colors"
            >
              {/* Community */}
              <Image src={logoWebsite} className="w-4 md:w-6" alt={""} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full h-full overflow-hidden">
        <div className="container max-w-screen-xl max-h-full mx-auto px-4 py-12 md:py-24">
          <div className="max-w-full max-h-full mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6 md:space-y-8">
              <h1 className="font-ppsans text-3xl md:text-6xl font-bold text-white leading-tight">
                Connect any AI Agents to
                <span className="inline-block bg-gradient-to-l from-[#1BE1FF] via-[#19FFCE] to-[#7370FF] text-transparent bg-clip-text ml-2">
                  Solana
                </span>
                <span className="text-white ml-2">Protocols</span>
              </h1>
              <p className="font-ppsans italic text-md md:text-xl text-[#787B7E]">
                <div className="flex gap-2 items-center">
                  <div className="">powered by</div>
                  <Image src={logoSendAI} alt="Sendai" className="w-24p" />
                </div>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
                <Button
                  onClick={() => {
                    window.open("https://github.com/sendaifun/solana-agent-kit", "_blank");
                  }}
                  className="font-ppsans bg-[#1BE1FF] hover:bg-cyan-500 text-black font-bold w-full sm:w-auto"
                >
                  <Image src={logoGithub} alt="Sendai" className="w-4" />
                  Star on Github
                </Button>
                <Button
                  onClick={() => {
                    window.open(
                      "https://docs.solanaagentkit.xyz",
                      "_blank"
                    );
                  }}
                  className="font-ppsans border-[#1BE1FF] text-[#1BE1FF] hover:bg-[#1BE1FF]/10 w-full sm:w-auto"
                >
                  <LucideFile className="w-4" />
                  View Docs
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full overflow-hidden">
              <CodeBlock className="bg-black border border-[#1BE1FF]/20 rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresArray.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              link={feature?.link}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </section>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border-l bg-background md:shadow-xl">
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent"></span>
      </div>
      <div className="flex justify-center items-center p-4">
        <Image src={logoSendaiWhite} alt="Sendai" className="w-32 " />
      </div>
    </div>
  );
}

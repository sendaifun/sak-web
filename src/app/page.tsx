import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"
import { FeatureCard } from "@/components/feature-card"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-cyan-400 tracking-wider">
            SOLANA AGENT KIT
          </Link>
          <div className="space-x-8">
            <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Features
            </Link>
            <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Docs
            </Link>
            <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Community
            </Link>
            <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Enterprise
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Build AI-Powered Applications on Solana{" "}
              <span className="text-cyan-400">Effortlessly</span>
            </h1>
            <p className="text-xl text-gray-400">
              A powerful toolkit for integrating AI agents with Solana blockchain.
            </p>
            <div className="space-x-4">
              <Button className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold">
                Get Started
              </Button>
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
                View Documentation
              </Button>
            </div>
          </div>
          <div className="relative">
            <CodeBlock className="bg-black border border-cyan-400/20 rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Create Tokens"
            description="Deploy custom tokens with advanced AI-powered features"
            color="cyan"
          />
          <FeatureCard
            title="Deploy NFT Collections"
            description="Launch NFT collections with intelligent minting mechanisms"
            color="yellow"
          />
          <FeatureCard
            title="Trade Assets"
            description="Smart trading powered by AI market analysis"
            color="cyan"
          />
          <FeatureCard
            title="Lend on Lulu"
            description="Automated lending protocols with AI risk assessment"
            color="yellow"
          />
          <FeatureCard
            title="Trade NFTs"
            description="AI-assisted NFT trading and valuation"
            color="cyan"
          />
          <FeatureCard
            title="Transfer Assets"
            description="Secure asset transfers with AI verification"
            color="cyan"
          />
        </div>
      </section>
    </div>
  )
}


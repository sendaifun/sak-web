"use client"

import { useEffect, useState } from "react"
import { TypeAnimation } from 'react-type-animation'

export function CodeBlock({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const codeString = `import { SolanaAgentKit } from 'solana-agent-kit';

const agent = new SolanaAgentKit({
  network: 'devnet',
  apiKey: 'YOUR_API_KEY'
});

// Deploy a new token
const tokenAddress = await agent.deployToken({
  name: 'My AI Token',
  symbol: 'AIT',
  decimals: 9
});

console.log('Token deployed:', tokenAddress);`

  return (
    <pre className={`p-6 font-mono text-sm text-cyan-400 overflow-x-auto ${className}`}>
      <TypeAnimation
        sequence={[codeString]}
        wrapper="div"
        cursor={true}
        repeat={0}
        style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}
        speed={75}
        deletionSpeed={99}
      />
    </pre>
  )
}


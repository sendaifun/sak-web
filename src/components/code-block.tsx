// 'use client'

// import { useEffect, useState } from "react"
// import { TypeAnimation } from 'react-type-animation'
// import { cn } from "@/lib/utils"

// export function CodeBlock({ className }: { className?: string }) {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) return null

//   const codeString = `import { SolanaAgentKit } from 'solana-agent-kit';

// const agent = new SolanaAgentKit({
//   network: 'devnet',
//   apiKey: 'YOUR_API_KEY'
// });

// // Deploy a new token
// const tokenAddress = await agent.deployToken({
//   name: 'My AI Token',
//   symbol: 'AIT',
//   decimals: 9
// });

// console.log('Token deployed:', tokenAddress);`

//   return (
//     <div className={cn("relative rounded-lg bg-zinc-950", className)}>
//       <div className="absolute top-0 right-0 h-8 flex items-center space-x-1.5 px-3">
//         <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
//         <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
//         <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
//       </div>
//       <pre className="p-6 pt-8 font-mono text-sm overflow-x-auto">
//         <TypeAnimation
//           sequence={[codeString]}
//           wrapper="span"
//           cursor={true}
//           repeat={0}
//           style={{ 
//             whiteSpace: 'pre',
//             color: '#1BE1FF',
//           }}
//           speed={75}
//           deletionSpeed={99}
//           className="language-javascript"
//         />
//       </pre>
//     </div>
//   )
// }

// export default CodeBlock



'use client'

import { useEffect, useState } from "react"
import { TypeAnimation } from 'react-type-animation'
import { cn } from "@/lib/utils"

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
    <div className={cn("relative rounded-lg bg-zinc-950 w-full overflow-hidden", className)}>
      <div className="absolute top-0 right-0 h-8 flex items-center space-x-1.5 px-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
      </div>
      <pre className="p-6 pt-8 font-mono text-sm overflow-x-auto max-w-full">
        <TypeAnimation
          sequence={[codeString]}
          wrapper="span"
          cursor={true}
          repeat={0}
          style={{ 
            whiteSpace: 'pre',
            color: '#1BE1FF',
            display: 'inline-block',
            width: '100%'
          }}
          speed={75}
          deletionSpeed={99}
          className="language-javascript"
        />
      </pre>
    </div>
  )
}
"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Highlight, themes } from "prism-react-renderer";

export function CodeBlock({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [typedCode, setTypedCode] = useState("");
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      let currentIndex = 0;
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

console.log('Token deployed:', tokenAddress);`;

      const typeCode = () => {
        if (currentIndex < codeString.length) {
          setTypedCode(codeString.slice(0, currentIndex + 1));
          currentIndex++;
          setTimeout(typeCode, 10); // Adjust this value to control typing speed
        }
      };

      typeCode();
    }
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "relative rounded-lg bg-zinc-950 overflow-hidden",
        className,
      )}
    >
      <div className="absolute top-0 right-0 h-8 flex items-center space-x-1.5 px-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
      </div>
      <div
        className="p-6 pt-8 font-mono text-sm overflow-hidden"
        style={{ height: "365px" }}
      >
        <Highlight
          theme={themes.nightOwl}
          code={typedCode}
          language="javascript"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              ref={codeRef}
              className={className}
              style={{
                ...style,
                background: "transparent",
                height: "100%",
                overflow: "auto",
              }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}

export default CodeBlock;

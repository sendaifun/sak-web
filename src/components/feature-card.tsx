interface FeatureCardProps {
  title: string
  description: string
  color: "cyan" | "yellow"
}

export function FeatureCard({ title, description, color }: FeatureCardProps) {
  const borderColor = color === "cyan" ? "border-cyan-400" : "border-yellow-400"
  const titleColor = color === "cyan" ? "text-cyan-400" : "text-yellow-400"

  return (
    <div
      className={`p-6 border ${borderColor} bg-black/50 rounded-lg backdrop-blur-sm 
      hover:bg-black/70 transition-colors group cursor-pointer`}
    >
      <h3 className={`text-xl font-bold ${titleColor} mb-2`}>{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
    </div>
  )
}


interface FeatureCardProps {
  title: string;
  description: string;
  color: "cyan" | "yellow" | "mint" | "red" | "purple";
  link?: string;
}

export function FeatureCard({
  title,
  description,
  color,
  link,
}: FeatureCardProps) {
  const getColors = (color: FeatureCardProps["color"]) => {
    const colors = {
      cyan: {
        border: "border-[#1BE1FF]",
        text: "text-[#1BE1FF]",
      },
      yellow: {
        border: "border-[#FFFF00]",
        text: "text-[#FFFF00]",
      },
      mint: {
        border: "border-[#19FFCE]",
        text: "text-[#19FFCE]",
      },
      red: {
        border: "border-[#FE5E60]",
        text: "text-[#FE5E60]",
      },
      purple: {
        border: "border-[#7370FF]",
        text: "text-[#7370FF]",
      },
    };
    return colors[color];
  };

  const { border, text } = getColors(color);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={`p-6 border-l ${border} bg-black/50 rounded-sm backdrop-blur-sm 
      hover:bg-black/70 transition-colors group cursor-pointer`}
      >
        <h3 className={`text-xl font-bold ${text} mb-2`}>{title}</h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>
    </a>
  );
}

export default FeatureCard;

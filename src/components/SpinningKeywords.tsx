import { useEffect, useState } from "react";

interface SpinningKeywordsProps {
  keywords: string[];
  className?: string;
}

const SpinningKeywords = ({ keywords, className = "" }: SpinningKeywordsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % keywords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [keywords.length]);

  return (
    <span className={`inline-block min-w-[200px] text-center ${className}`}>
      <span 
        key={currentIndex}
        className="spin-keywords font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        {keywords[currentIndex]}
      </span>
    </span>
  );
};

export default SpinningKeywords;

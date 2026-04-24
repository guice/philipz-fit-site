import React from "react";

interface PrideFlagProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const PrideFlag: React.FC<PrideFlagProps> = ({ size = "md", className = "" }) => {
  const sizeMap = {
    sm: "w-4 h-3",
    md: "w-6 h-4",
    lg: "w-8 h-6",
  };

  return (
    <div
      className={`inline-flex items-center justify-center ${sizeMap[size]} ${className}`}
      title="Proud member of the LGBT Community"
    >
      <svg
        viewBox="0 0 900 600"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Red */}
        <rect width="900" height="100" fill="#e40303" />
        {/* Orange */}
        <rect y="100" width="900" height="100" fill="#ff8c00" />
        {/* Yellow */}
        <rect y="200" width="900" height="100" fill="#ffff00" />
        {/* Green */}
        <rect y="300" width="900" height="100" fill="#008026" />
        {/* Blue */}
        <rect y="400" width="900" height="100" fill="#0000f0" />
        {/* Violet */}
        <rect y="500" width="900" height="100" fill="#86007d" />
      </svg>
    </div>
  );
};

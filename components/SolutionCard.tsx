import React from "react";
import { IconType } from "react-icons";

interface SolutionCardProps {
  item: {
    icon: IconType;
    title: string;
    points: string[];
  };
}

export default function SolutionCard({ item }: SolutionCardProps) {
  const Icon = item.icon;

  return (
    <div className="bg-white border border-zinc-200 rounded-3xl p-10 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.06)] w-full h-full text-zinc-950">
      {/* Icon */}
      <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-[#FF5A22] mb-8">
        <Icon className="text-xl" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-6 tracking-tight">{item.title}</h3>

      {/* Points */}
      <ul className="space-y-4">
        {item.points.map((point, i) => (
          <li
            key={i}
            className="text-zinc-600 text-sm leading-relaxed flex items-start"
          >
            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-[#FF5A22] rounded-full shrink-0"></span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

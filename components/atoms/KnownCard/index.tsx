import { ReactNode } from "react";

type KnownCardCardProps = {
  tech: {
    icon: ReactNode;
    name: string;
  };
};

export default function KnownCard({ tech }: KnownCardCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-gray-600/20 p-6 text-gray-500 transition-all hover:bg-gray-600/30 hover:text-emerald-500">
      <p className="font-medium">{tech.name}</p>
      {tech.icon}
    </div>
  );
}

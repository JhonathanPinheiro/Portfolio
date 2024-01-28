import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-gray-50 outline-none transition-all hover:bg-emerald-500 disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

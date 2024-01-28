import { cn } from "@/utils/cn";

type HorizontalDividerProps = {
  className?: string;
};

export default function HorizontalDivider({
  className,
}: HorizontalDividerProps) {
  return (
    <div className={cn("my-8 w-full border-b border-b-gray-800", className)} />
  );
}

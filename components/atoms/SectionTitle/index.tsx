import { cn } from "@/utils/cn";

type SectionTitleProps = {
  title: string;
  subtitle: string;
  classname?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  classname,
}: SectionTitleProps) {
  return (
    <div className={cn("flex flex-col gap-4", classname)}>
      <span className="font-mono text-sm text-emerald-400">{`../${subtitle}`}</span>
      <h3 className="text-3xl font-medium">{title}</h3>
    </div>
  );
}

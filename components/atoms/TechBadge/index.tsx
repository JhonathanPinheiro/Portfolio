type TecgBadge = {
  name: string;
};

export default function TechBadge({ name }: TecgBadge) {
  return (
    <span className="cursor-default rounded-lg bg-emerald-900/80 px-3 py-1 text-sm text-emerald-400">
      {name}
    </span>
  );
}

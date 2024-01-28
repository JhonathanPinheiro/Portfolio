import { IoMdHeart } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="flex h-14 w-full items-center justify-center bg-gray-950">
      <span className="flex items-center gap-1.5 font-mono text-xs text-gray-400 sm:text-sm">
        Feito por
        <IoMdHeart size={13} className="text-emerald-500" />
        <strong className="font-medium">Jhonathan Pinheiro</strong>
      </span>
    </footer>
  );
}

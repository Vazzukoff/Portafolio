import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/30 py-8">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center gap-3 text-sm">
        <p className="flex items-center gap-2 text-white/70 font-light tracking-wide">
          Made with <FaHeart className="text-emerald-400 animate-pulse" /> using React
        </p>
        <p className="text-white/60 font-light">© 2025 Sebastián Vallejo Bezzubikoff</p>
      </div>
    </footer>
  );
}
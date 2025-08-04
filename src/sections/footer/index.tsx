import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-700 py-6">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center gap-2 text-sm text-neutral-400">
        <p>© 2024 Sebastián Vallejo Bezzubikoff</p>
        <p>All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <FaHeart className="text-red-500" /> using React
        </p>
      </div>
    </footer>
  );
}


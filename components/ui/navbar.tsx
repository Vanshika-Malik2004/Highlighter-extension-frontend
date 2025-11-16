"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-2 sm:top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-[90%] md:w-[85%] max-w-4xl">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2.5 md:py-3 shadow-lg">
        <div className="flex items-center justify-between gap-2">
          {/* Logo/Brand Name */}
          <div className="text-white font-bold text-sm sm:text-lg md:text-xl lg:text-2xl tracking-wide sm:tracking-wider">
            MARK
          </div>

          {/* Extension Button */}
          <button className="bg-gray-900 hover:bg-white/30 hover:text-gray-900 backdrop-blur-sm text-white px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-2 rounded-full transition-all duration-300 ease-in-out border border-white/30 hover:border-white/50 hover:scale-105 text-[10px] sm:text-sm md:text-base font-medium whitespace-nowrap">
            Extension
          </button>
        </div>
      </div>
    </nav>
  );
}

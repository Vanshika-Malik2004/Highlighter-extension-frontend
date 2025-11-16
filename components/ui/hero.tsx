"use client";

import Navbar from "./navbar";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          // video is 20px taller than viewport and anchored at the top
          className="absolute top-0 left-0 w-full h-[calc(100%+20px)] object-contain md:object-cover bg-black"
        >
          <source src="/Bg_video.mp4" type="video/mp4" />
        </video>

        {/* overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-10 pt-32 pb-20 sm:pt-36 sm:pb-24">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-black text-center mb-4 sm:mb-4 md:mb-4 lg:mb-5 max-w-6xl leading-tight"
        >
          An highlighter for the internet
        </motion.h1>
        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800 text-center max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed"
        >
          Capture, organize, and revisit your favorite moments across the web.
          Never lose track of important information again.
        </motion.p>
        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className=" relative px-6 sm:px-7 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 lg:py-5 bg-black text-white rounded-full font-semibold text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl overflow-hidden"
        >
          <span className="relative z-10">Go to Extension</span>
        </motion.button>
      </div>
    </div>
  );
}

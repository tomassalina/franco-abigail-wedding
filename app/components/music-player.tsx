"use client";

import { motion } from "framer-motion";
import { Pause } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  toggleMusic: () => void;
}

export default function MusicPlayer({
  isPlaying,
  toggleMusic,
}: MusicPlayerProps) {
  // Animation variants for the equalizer bars
  const barVariants = {
    playing: (i: number) => ({
      height: ["40%", "100%", "60%", "90%", "40%"],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        delay: i * 0.2,
      },
    }),
    paused: {
      height: "40%",
    },
  };

  return (
    <motion.button
      onClick={toggleMusic}
      className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#C19C67] p-2.5 md:p-3 rounded-full cursor-pointer shadow-lg flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isPlaying ? (
        <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center space-x-1">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              custom={i}
              variants={barVariants}
              animate="playing"
              className="w-1 bg-white rounded-full"
              style={{ height: "40%" }}
            />
          ))}
        </div>
      ) : (
        <Pause size={24} className="text-white" />
      )}
    </motion.button>
  );
}

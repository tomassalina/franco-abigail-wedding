"use client";

import { useState, useEffect, useRef } from "react";
import MusicPlayer from "./music-player";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "./sections/header";
import InvitationLetter from "./invitationt-letter";
import HeroSection from "./sections/hero";
import DateAndLocationSection from "./sections/date-and-location";
import MenuSection from "./sections/menu";
import BibleVerseSection from "./sections/bible-verse";
import PhotoAlbumSection from "./sections/photo-album";
import PlaylistsSection from "./sections/playlists";
import GiftsSection from "./sections/gifts";
import ConfirmationSection from "./sections/confirmation";

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isOpen && audioRef.current) {
      const audio = audioRef.current;

      if (isPlaying) {
        audio.volume = 0;

        const delayTimeout = setTimeout(() => {
          audio
            .play()
            .then(() => {
              let currentVolume = 0.2;
              const targetVolume = 0.7;
              const step = 0.01;
              const interval = 100;

              const fadeIn = setInterval(() => {
                if (currentVolume < targetVolume) {
                  currentVolume = Math.min(currentVolume + step, targetVolume);
                  audio.volume = currentVolume;
                } else {
                  clearInterval(fadeIn);
                }
              }, interval);
            })
            .catch((e) => console.log("Audio play failed:", e));
        }, 500);

        // Cleanup en caso de que el componente se desmonte antes
        return () => clearTimeout(delayTimeout);
      } else {
        audio.pause();
      }
    }
  }, [isOpen, isPlaying]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const openInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen">
      <audio ref={audioRef} loop>
        <source src="/music/wedding-song.mp3" type="audio/mp3" />
      </audio>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center px-5"
          >
            <InvitationLetter handleOpen={openInvitation} />
          </motion.div>
        ) : (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen"
          >
            {/* Music control button */}
            <div className="fixed top-5 right-4 z-40">
              <MusicPlayer isPlaying={isPlaying} toggleMusic={toggleMusic} />
            </div>

            {/* Header */}
            <div className="wrapper py-5 bg-accent">
              <Header />
            </div>

            <div className="wrapper pt-10">
              <HeroSection />
            </div>

            <div className="wrapper mt-4">
              <DateAndLocationSection />
            </div>

            <div className="wrapper bg-secondary pt-8 pb-12">
              <MenuSection />
            </div>

            <div className="py-12 px-8">
              <BibleVerseSection />
            </div>

            <div className="wrapper bg-secondary py-8">
              <PhotoAlbumSection />
            </div>

            <div className="wrapper py-18">
              <PlaylistsSection />
            </div>

            <div className="wrapper bg-secondary py-18">
              <GiftsSection />
            </div>

            <div className="wrapper bg-accent pt-18 pb-28">
              <ConfirmationSection />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

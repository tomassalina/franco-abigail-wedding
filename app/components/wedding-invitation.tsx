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
import Image from "next/image";

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
              let currentVolume = 0.1;
              const targetVolume = 0.5;
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

            <div className="wrapper pt-10 relative">
              <HeroSection />

              <Image
                src="/images/decoration-1.png"
                alt="Rama de un arbol en forma de decoracion"
                width={235}
                height={276}
                className="absolute top-40 -left-1"
              />
              <Image
                src="/images/decoration-2.png"
                alt="Rama de un arbol en forma de decoracion"
                width={337}
                height={334}
                className="absolute top-40 -right-35 overflow-x-hidden"
              />
            </div>

            <div className="wrapper mt-4 relative">
              <DateAndLocationSection />

              <Image
                src="/images/decoration-3.png"
                alt="Rama de un arbol en forma de decoracion"
                width={407}
                height={431}
                className="absolute top-25 -left-25"
              />
              <Image
                src="/images/decoration-4.png"
                alt="Rama de un arbol en forma de decoracion"
                width={373}
                height={391}
                className="absolute top-70 -right-10 overflow-x-hidden"
              />
            </div>

            <div className="wrapper bg-primary pt-8 pb-12 relative">
              <MenuSection />

              <Image
                src="/images/decoration-5.png"
                alt="Rama de un arbol en forma de decoracion"
                width={407}
                height={381}
                className="absolute top-34 -left-22"
              />
              <Image
                src="/images/decoration-6.png"
                alt="Rama de un arbol en forma de decoracion"
                width={427}
                height={482}
                className="absolute top-25 -right-45 overflow-x-hidden"
              />
            </div>

            <div className="py-12 px-8 relative">
              <BibleVerseSection />

              <Image
                src="/images/decoration-2.png"
                alt="Rama de un arbol en forma de decoracion"
                width={337}
                height={334}
                className="absolute z-10 top-10 -left-40 overflow-x-hidden"
              />
              <Image
                src="/images/decoration-7.png"
                alt="Rama de un arbol en forma de decoracion"
                width={300}
                height={300}
                className="absolute -top-4 -right-2 overflow-x-hidden"
              />
            </div>

            <div className="wrapper bg-secondary py-8 relative">
              <PhotoAlbumSection />

              <Image
                src="/images/decoration-8.png"
                alt="Rama de un arbol en forma de decoracion"
                width={400}
                height={380}
                className="absolute top-70 -left-20 overflow-x-hidden"
              />
              <Image
                src="/images/decoration-9.png"
                alt="Rama de un arbol en forma de decoracion"
                width={400}
                height={400}
                className="absolute top-68 -right-35 overflow-x-hidden"
              />
            </div>

            <div className="wrapper py-18 relative">
              <PlaylistsSection />

              <Image
                src="/images/decoration-2.png"
                alt="Rama de un arbol en forma de decoracion"
                width={337}
                height={334}
                className="absolute top-10 -left-30"
              />
              <Image
                src="/images/decoration-1.png"
                alt="Rama de un arbol en forma de decoracion"
                width={235}
                height={276}
                className="absolute top-10 -right-2 overflow-x-hidden transform -scale-x-100"
              />
            </div>

            <div className="wrapper bg-secondary py-18 relative">
              <GiftsSection />

              <Image
                src="/images/decoration-4.png"
                alt="Rama de un arbol en forma de decoracion"
                width={300}
                height={310}
                className="absolute top-20 -left-0 overflow-x-hidden transform -scale-x-100 rotate-20"
              />
              <Image
                src="/images/decoration-2.png"
                alt="Rama de un arbol en forma de decoracion"
                width={337}
                height={334}
                className="absolute top-20 -right-20"
              />
            </div>

            <div className="wrapper bg-accent pt-18 pb-28 relative overflow-hidden">
              <ConfirmationSection />

              <Image
                src="/images/decoration-10.png"
                alt="Rama de un arbol en forma de decoracion"
                width={1496}
                height={520}
                className="absolute top-47 right-[12%] overflow-x-hidden"
              />
              <Image
                src="/images/decoration-11.png"
                alt="Rama de un arbol en forma de decoracion"
                width={266}
                height={379}
                className="absolute top-70 -right-10"
              />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

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
            className="min-h-screen flex items-center justify-center px-5 md:px-25"
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
                className="hidden xl:inline absolute top-40 -left-1"
              />
              <Image
                src="/images/decoration-2.png"
                alt="Rama de un arbol en forma de decoracion"
                width={337}
                height={334}
                className="hidden xl:inline absolute top-40 -right-35 overflow-x-hidden"
              />
            </div>

            <div className="wrapper mt-4 relative">
              <DateAndLocationSection />

              <Image
                src="/images/decoration-1.png"
                alt="Rama de un arbol en forma de decoracion"
                width={235}
                height={276}
                className="lg:hidden absolute top-0 -left-1 w-16 h-20 md:w-24 md:h-28 lg:w-[235px] lg:h-[276px]"
              />
              <Image
                src="/images/decoration-2.png"
                alt="Rama de un arbol en forma de decoracion"
                width={337}
                height={334}
                className="lg:hidden absolute -top-0 -right-7 overflow-x-hidden w-24 h-24 md:w-36 md:h-36 lg:w-[337px] lg:h-[334px]"
              />

              <Image
                src="/images/decoration-3.png"
                alt="Rama de un arbol en forma de decoracion"
                width={407}
                height={431}
                className="absolute top-90 -left-10 md:top-100 md:-left-15 lg:top-25 lg:-left-25 w-36 h-40 md:w-56 md:h-60 lg:w-[370px] lg:h-[390px]"
              />
              <Image
                src="/images/decoration-4.png"
                alt="Rama de un arbol en forma de decoracion"
                width={373}
                height={391}
                className="absolute top-90 -right-1 md:top-100 md:-right-1 lg:top-70 lg:-right-10 overflow-x-hidden w-20 h-24 md:w-36 md:h-40 lg:w-[340px] lg:h-[350px]"
              />
            </div>

            <div className="wrapper bg-primary pt-8 pb-8 lg:pb-12 relative">
              <MenuSection />

              <Image
                src="/images/decoration-5.png"
                alt="Rama de un arbol en forma de decoracion"
                width={407}
                height={381}
                className="absolute top-40 -left-20 md:top-34 md:-left-22 w-44 h-40 md:w-56 md:h-52 lg:w-64 lg:h-60 xl:w-[380px] xl:h-[350px]"
              />
              <Image
                src="/images/decoration-6.png"
                alt="Rama de un arbol en forma de decoracion"
                width={427}
                height={482}
                className="absolute top-210 -right-15 md:top-25 md:-right-30 xl:-right-38 overflow-x-hidden w-36 h-40 md:w-56 md:h-64 lg:w-64 lg:h-60 xl:w-[400px] xl:h-[450px]"
              />

              <Image
                src="/images/decoration-6.png"
                alt="Rama de un arbol en forma de decoracion"
                width={427}
                height={482}
                className="md:hidden absolute top-140 -left-12 w-36 h-40 transform rotate-180"
              />
              <Image
                src="/images/decoration-5.png"
                alt="Rama de un arbol en forma de decoracion"
                width={407}
                height={381}
                className="md:hidden absolute top-125 -right-20 w-44 h-40 transform rotate-240"
              />
            </div>

            <div className="py-8 lg:py-12 px-2 md:px-8 relative">
              <BibleVerseSection />

              <Image
                src="/images/decoration-2.png"
                alt="Rama de un arbol en forma de decoracion"
                width={337}
                height={334}
                className="hidden md:inline absolute z-10 md:top-10 md:-left-10 lg:top-12 lg:-left-20 overflow-x-hidden md:w-40 md:h-40 lg:w-70 lg:h-70"
              />
              <Image
                src="/images/decoration-7.png"
                alt="Rama de un arbol en forma de decoracion"
                width={300}
                height={300}
                className="hidden md:inline absolute -right-2 md:top-10 lg:top-10 xl:-top-2 overflow-x-hidden md:w-36 md:h-36 lg:w-56 lg:h-56 xl:w-72 xl:h-72"
              />
            </div>

            <div className="wrapper bg-secondary py-4 md:py-8 relative">
              <PhotoAlbumSection />

              <Image
                src="/images/decoration-1.png"
                alt="Rama de un arbol en forma de decoracion"
                width={235}
                height={276}
                className="xl:hidden absolute top-5 -left-1 w-16 h-20 md:w-24 md:h-28 lg:w-36 lg:h-40"
              />
              <Image
                src="/images/decoration-1.png"
                alt="Rama de un arbol en forma de decoracion"
                width={235}
                height={276}
                className="xl:hidden absolute top-5 -right-1 transform -scale-x-100 w-16 h-20 md:w-24 md:h-28 lg:w-36 lg:h-40"
              />

              <Image
                src="/images/decoration-8.png"
                alt="Rama de un arbol en forma de decoracion"
                width={400}
                height={380}
                className="hidden xl:inline absolute top-70 -left-20 overflow-x-hidden"
              />
              <Image
                src="/images/decoration-9.png"
                alt="Rama de un arbol en forma de decoracion"
                width={400}
                height={400}
                className="hidden xl:inline absolute top-68 -right-35 overflow-x-hidden"
              />
            </div>

            <div className="wrapper py-18 relative">
              <PlaylistsSection />

              <Image
                src="/images/decoration-2.png"
                alt="Rama de un arbol en forma de decoracion"
                width={337}
                height={334}
                className="md:hidden absolute top-10 -left-10 w-36 h-36"
              />
              <Image
                src="/images/decoration-5.png"
                alt="Rama de un arbol en forma de decoracion"
                width={407}
                height={381}
                className="md:hidden absolute top-85 -right-20 w-44 h-40 rotate-240"
              />
              <Image
                src="/images/decoration-9.png"
                alt="Rama de un arbol en forma de decoracion"
                width={400}
                height={400}
                className="md:hidden absolute -bottom-5 -left-10 w-40 h-40"
              />

              <Image
                src="/images/decoration-2.png"
                alt="Rama de un arbol en forma de decoracion"
                width={337}
                height={334}
                className="hidden md:inline absolute top-0 -left-10 xl:top-10 xl:-left-30 md:w-44 md:h-44 xl:w-[337px] xl:h-[334px]"
              />
              <Image
                src="/images/decoration-1.png"
                alt="Rama de un arbol en forma de decoracion"
                width={235}
                height={276}
                className="hidden md:inline absolute bottom-10 -right-2 xl:top-10 xl:-right-2 overflow-x-hidden transform -scale-x-100 w-26 h-22 xl:w-[235px] xl:h-[276px]"
              />
            </div>

            <div className="wrapper bg-secondary py-8 md:py-8 lg:py-18 relative">
              <GiftsSection />

              <Image
                src="/images/decoration-4.png"
                alt="Rama de un arbol en forma de decoracion"
                width={300}
                height={310}
                className="hidden lg:inline absolute top-40 xl:top-20 -left-0 overflow-x-hidden transform -scale-x-100 rotate-20 w-36 h-36 xl:w-[300px] xl:h-[310px]"
              />
              <Image
                src="/images/decoration-2.png"
                alt="Rama de un arbol en forma de decoracion"
                width={337}
                height={334}
                className="hidden lg:inline absolute top-40 -right-6 xl:top-20 xl:-right-20 w-36 h-36 xl:w-[337px] xl:h-[334px]"
              />
            </div>

            <div className="wrapper bg-accent pt-14 md:pb-18 lg:pb-22 xl:pb-28 relative overflow-hidden">
              <ConfirmationSection />

              <Image
                src="/images/decoration-10.png"
                alt="Rama de un arbol en forma de decoracion"
                width={1496}
                height={520}
                className="absolute -bottom-10 md:-bottom-20 lg:-bottom-30 xl:-bottom-50 right-[12%]"
              />
              <Image
                src="/images/decoration-11.png"
                alt="Rama de un arbol en forma de decoracion"
                width={266}
                height={379}
                className="absolute -bottom-8 md:-bottom-16 lg:-bottom-24 -right-4 xl:-bottom-35 xl:-right-10 w-[15%]"
              />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MapPin, Check } from "lucide-react";
import CountdownTimer from "./countdown-timer";
import MusicPlayer from "./music-player";
import GiftModal from "./gift-modal";
import ImageCarousel from "./image-carousel";
import { motion, AnimatePresence } from "framer-motion";

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Array de imágenes para el carrusel
  const albumImages = [
    "/placeholder.svg?height=800&width=800",
    "/placeholder.svg?height=800&width=800",
    "/placeholder.svg?height=800&width=800",
    "/placeholder.svg?height=800&width=800",
    "/placeholder.svg?height=800&width=800",
    "/placeholder.svg?height=800&width=800",
  ];

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.volume = 0.5;
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((e) => console.log("Audio play failed:", e));
      } else {
        audioRef.current.pause();
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
            className="fixed inset-0 flex items-center justify-center bg-[#F2F2ED] z-50"
          >
            <div
              className="w-full max-w-2xl cursor-pointer"
              onClick={openInvitation}
            >
              <div className="relative w-full h-[500px] bg-[#F2F2ED]">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#C19C67] flex items-center justify-center"
                >
                  <div className="text-white text-center">
                    <div className="text-2xl font-serif">F&A</div>
                    <div className="text-sm mt-1">ABRIR</div>
                  </div>
                </motion.div>
                <div className="absolute top-0 left-0 w-full h-0 border-t-[250px] border-l-[400px] border-r-[400px] border-b-0 border-solid border-t-[#F2F2ED] border-l-transparent border-r-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-0 border-b-[250px] border-l-[400px] border-r-[400px] border-t-0 border-solid border-b-[#F2F2ED] border-l-transparent border-r-transparent"></div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-[#F9F5EF]"
          >
            {/* Music control button */}
            <div className="fixed top-4 right-4 z-40">
              <MusicPlayer isPlaying={isPlaying} toggleMusic={toggleMusic} />
            </div>

            {/* Header */}
            <header className="pt-6 pb-4 text-center bg-[#F2F2ED]">
              <h1 className="font-serif text-3xl md:text-4xl text-[#9E7C4F]">
                Franco & Abigail
              </h1>
            </header>

            {/* Main content */}
            <section className="container mx-auto px-4 max-w-4xl">
              {/* Hero section */}
              <div className="mb-10 rounded-2xl overflow-hidden relative">
                <div className="relative">
                  <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Franco y Abigail"
                      width={800}
                      height={400}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/50 to-transparent text-white">
                    <h2 className="text-3xl font-bold mb-1">¡Nos casamos!</h2>
                    <p className="text-sm">Y queremos compartirlo con vos</p>
                  </div>
                </div>
              </div>

              {/* Date section */}
              <div className="text-center mb-10">
                <h3 className="text-sm uppercase tracking-wider text-[#787878] mb-1">
                  AGENDA LA FECHA
                </h3>
                <p className="text-xl text-[#5E3C10] mb-6">13 de septiembre</p>

                <CountdownTimer targetDate="2025-09-13T18:00:00" />

                <div className="mt-6">
                  <a
                    href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MGRzZGZnZGZnZGZnZGZnIGV4YW1wbGVAZ21haWwuY29t&tmsrc=example%40gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2 bg-[#F2F2ED] text-[#9E7C4F] rounded-full text-sm border border-[#C19C67]"
                  >
                    📅 AGENDAR FECHA
                  </a>
                </div>
              </div>

              {/* Ceremony section */}
              <div className="text-center mb-16">
                <div className="inline-block mb-4">
                  <MapPin size={32} className="mx-auto text-[#9E7C4F]" />
                </div>
                <h3 className="text-xl text-[#5E3C10] mb-1">Ceremonia</h3>
                <p className="text-[#787878] mb-1">Los Quimey Eventos</p>
                <p className="text-[#787878] mb-1">
                  O&apos;Higgins 1234, Bs. As.
                </p>
                <p className="text-[#787878] mb-4">13 de septiembre, 18hs</p>

                <a
                  href="https://maps.google.com/?q=Buenos+Aires+Argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2 bg-[#F2F2ED] text-[#9E7C4F] rounded-full text-sm border border-[#C19C67]"
                >
                  UBICACIÓN
                </a>
              </div>

              {/* Info section */}
              <div className="bg-[#C19C67] rounded-md overflow-hidden mb-16">
                <div className="p-4 text-center">
                  <h3 className="inline-block px-6 py-1 border border-white text-white text-sm mb-8">
                    ¡INFORMACIÓN IMPORTANTE!
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8 text-white">
                    <div className="text-center">
                      <div className="inline-block mb-4">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-auto"
                        >
                          <path
                            d="M20 10C22.7614 10 25 7.76142 25 5C25 2.23858 22.7614 0 20 0C17.2386 0 15 2.23858 15 5C15 7.76142 17.2386 10 20 10Z"
                            fill="white"
                          />
                          <path
                            d="M30 15C32.7614 15 35 12.7614 35 10C35 7.23858 32.7614 5 30 5C27.2386 5 25 7.23858 25 10C25 12.7614 27.2386 15 30 15Z"
                            fill="white"
                          />
                          <path
                            d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
                            fill="white"
                          />
                          <path
                            d="M35 20C37.7614 20 40 17.7614 40 15C40 12.2386 37.7614 10 35 10C32.2386 10 30 12.2386 30 15C30 17.7614 32.2386 20 35 20Z"
                            fill="white"
                          />
                          <path
                            d="M5 20C7.76142 20 10 17.7614 10 15C10 12.2386 7.76142 10 5 10C2.23858 10 0 12.2386 0 15C0 17.7614 2.23858 20 5 20Z"
                            fill="white"
                          />
                          <path
                            d="M20 40C22.7614 40 25 37.7614 25 35C25 32.2386 22.7614 30 20 30C17.2386 30 15 32.2386 15 35C15 37.7614 17.2386 40 20 40Z"
                            fill="white"
                          />
                          <path
                            d="M30 35C32.7614 35 35 32.7614 35 30C35 27.2386 32.7614 25 30 25C27.2386 25 25 27.2386 25 30C25 32.7614 27.2386 35 30 35Z"
                            fill="white"
                          />
                          <path
                            d="M10 35C12.7614 35 15 32.7614 15 30C15 27.2386 12.7614 25 10 25C7.23858 25 5 27.2386 5 30C5 32.7614 7.23858 35 10 35Z"
                            fill="white"
                          />
                          <path
                            d="M35 30C37.7614 30 40 27.7614 40 25C40 22.2386 37.7614 20 35 20C32.2386 20 30 22.2386 30 25C30 27.7614 32.2386 30 35 30Z"
                            fill="white"
                          />
                          <path
                            d="M5 30C7.76142 30 10 27.7614 10 25C10 22.2386 7.76142 20 5 20C2.23858 20 0 22.2386 0 25C0 27.7614 2.23858 30 5 30Z"
                            fill="white"
                          />
                          <path
                            d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl mb-2">Comida</h4>
                      <p className="text-sm mb-4">
                        Queremos que nuestra boda sea un gran encuentro
                        familiar, así que la comida será a la medida. ¡Habrá
                        opciones para todos los gustos y disfrutes de este día
                        con nosotros!
                      </p>
                      <p className="text-xs italic">
                        (De comida típica tendrás en la mesa para compartir)
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="inline-block mb-4">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-auto"
                        >
                          <path
                            d="M30 0H10C8.89543 0 8 0.89543 8 2V6C8 7.10457 8.89543 8 10 8H30C31.1046 8 32 7.10457 32 6V2C32 0.89543 31.1046 0 30 0Z"
                            fill="white"
                          />
                          <path
                            d="M28 10H12C10.8954 10 10 10.8954 10 12V38C10 39.1046 10.8954 40 12 40H28C29.1046 40 30 39.1046 30 38V12C30 10.8954 29.1046 10 28 10Z"
                            fill="white"
                          />
                          <path
                            d="M20 15C21.6569 15 23 13.6569 23 12C23 10.3431 21.6569 9 20 9C18.3431 9 17 10.3431 17 12C17 13.6569 18.3431 15 20 15Z"
                            fill="white"
                          />
                          <path
                            d="M20 25C21.6569 25 23 23.6569 23 22C23 20.3431 21.6569 19 20 19C18.3431 19 17 20.3431 17 22C17 23.6569 18.3431 25 20 25Z"
                            fill="white"
                          />
                          <path
                            d="M20 35C21.6569 35 23 33.6569 23 32C23 30.3431 21.6569 29 20 29C18.3431 29 17 30.3431 17 32C17 33.6569 18.3431 35 20 35Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl mb-2">Bebida</h4>
                      <p className="text-sm mb-4">
                        Para hacer de nuestra boda un momento único, hemos
                        optado por no incluir bebidas alcohólicas.
                      </p>
                      <p className="text-xs italic">
                        (Habrá por supuesto otras bebidas refrescantes en esta
                        ocasión)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bible verse */}
              <div className="text-center italic text-[#5E3C10] mb-16 px-4">
                <p className="text-lg">
                  Más valen dos que uno, porque obtienen más fruto de su
                  esfuerzo. Si caen, el uno levanta al otro.
                </p>
                <p className="text-sm mt-2">Eclesiastés 4:9-10</p>
              </div>

              {/* Photo album */}
              <div className="mb-16">
                <div className="text-center mb-8 bg-[#C19C67] py-4 rounded-t-md">
                  <h3 className="text-white text-sm">Álbum de fotos</h3>
                  <h2 className="text-white text-2xl">Momentos únicos</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {albumImages.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-gray-200 rounded-md overflow-hidden cursor-pointer relative group"
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setIsCarouselOpen(true);
                      }}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 16L8.586 11.414C8.96106 11.0391 9.46967 10.8284 10 10.8284C10.5303 10.8284 11.0389 11.0391 11.414 11.414L16 16M14 14L15.586 12.414C15.9611 12.0391 16.4697 11.8284 17 11.8284C17.5303 11.8284 18.0389 12.0391 18.414 12.414L20 14M14 8H14.01M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-[#C19C67]/80 text-white px-3 py-1 rounded-full text-sm">
                          Ver foto
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Playlists */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="text-center">
                  <div className="inline-block mb-4">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto"
                    >
                      <circle cx="20" cy="20" r="20" fill="#C19C67" />
                      <path
                        d="M20 10C14.486 10 10 14.486 10 20C10 25.514 14.486 30 20 30C25.514 30 30 25.514 30 20C30 14.486 25.514 10 20 10ZM24.3105 24.8605C24.0895 25.214 23.6355 25.326 23.282 25.105C20.508 23.426 17.018 23.018 13.6435 24.0465C13.242 24.1645 12.8245 23.9225 12.7065 23.521C12.5885 23.1195 12.8305 22.702 13.232 22.584C17.018 21.4295 20.9 21.9015 24.066 23.832C24.4195 24.053 24.5315 24.507 24.3105 24.8605ZM25.724 21.6505C25.4445 22.0885 24.8755 22.2285 24.4375 21.949C21.2635 20.0185 16.4975 19.4035 12.9985 20.6C12.5045 20.7635 11.9775 20.4895 11.814 19.9955C11.6505 19.5015 11.9245 18.9745 12.4185 18.811C16.4535 17.4365 21.7355 18.1295 25.4255 20.364C25.8635 20.6435 26.0035 21.2125 25.724 21.6505ZM25.8475 18.3215C22.0385 16.0865 15.3125 15.8215 11.396 16.9915C10.8145 17.1825 10.1995 16.8525 10.0085 16.271C9.8175 15.6895 10.1475 15.0745 10.729 14.8835C15.2255 13.5525 22.6535 13.8615 27.0695 16.4285C27.5955 16.7465 27.7685 17.4275 27.4505 17.9535C27.1325 18.4795 26.4515 18.6525 25.9255 18.3345L25.8475 18.3215Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h3 className="text-[#5E3C10] text-xl mb-2">
                    Nuestra Playlist Spotify
                  </h3>
                  <p className="text-[#787878] text-sm mb-4">
                    Agregá a nuestra playlist y recomendá las canciones que no
                    pueden faltar en nuestra boda
                  </p>
                  <a
                    href="https://open.spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2 bg-[#F2F2ED] text-[#9E7C4F] rounded-full text-sm border border-[#C19C67]"
                  >
                    IR A SPOTIFY
                  </a>
                </div>

                <div className="text-center">
                  <div className="inline-block mb-4">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto"
                    >
                      <circle cx="20" cy="20" r="20" fill="#C19C67" />
                      <path
                        d="M29.582 13.1871C29.3961 12.5376 29.0579 11.9451 28.5951 11.4622C28.1323 10.9794 27.5559 10.6177 26.9175 10.4062C25.0175 9.84375 20 9.84375 20 9.84375C20 9.84375 14.9825 9.84375 13.0825 10.4062C12.4441 10.6177 11.8677 10.9794 11.4049 11.4622C10.9421 11.9451 10.6039 12.5376 10.418 13.1871C10 15.1437 10 19.9999 10 19.9999C10 19.9999 10 24.8562 10.418 26.8128C10.6039 27.4623 10.9421 28.0548 11.4049 28.5377C11.8677 29.0205 12.4441 29.3822 13.0825 29.5937C14.9825 30.1562 20 30.1562 20 30.1562C20 30.1562 25.0175 30.1562 26.9175 29.5937C27.5559 29.3822 28.1323 29.0205 28.5951 28.5377C29.0579 28.0548 29.3961 27.4623 29.582 26.8128C30 24.8562 30 19.9999 30 19.9999C30 19.9999 30 15.1437 29.582 13.1871ZM17.2727 24.5453V15.4546L24.0909 19.9999L17.2727 24.5453Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h3 className="text-[#5E3C10] text-xl mb-2">
                    Nuestra Playlist Youtube
                  </h3>
                  <p className="text-[#787878] text-sm mb-4">
                    Agregá a nuestra playlist y recomendá las canciones que no
                    pueden faltar en nuestra boda
                  </p>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2 bg-[#F2F2ED] text-[#9E7C4F] rounded-full text-sm border border-[#C19C67]"
                  >
                    IR A YOUTUBE
                  </a>
                </div>
              </div>

              {/* Gifts section */}
              <div className="bg-white rounded-md p-8 mb-16 text-center shadow-sm">
                <div className="inline-block mb-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      d="M33.3333 20V35H6.66667V20"
                      stroke="#C19C67"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M36.6667 11.6667H3.33334V20H36.6667V11.6667Z"
                      stroke="#C19C67"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 35V11.6667"
                      stroke="#C19C67"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 11.6667H12.5C11.3949 11.6667 10.3351 11.2277 9.55373 10.4463C8.77236 9.66493 8.33334 8.60507 8.33334 7.50001C8.33334 6.39495 8.77236 5.33509 9.55373 4.55372C10.3351 3.77235 11.3949 3.33334 12.5 3.33334C18.3333 3.33334 20 11.6667 20 11.6667Z"
                      stroke="#C19C67"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 11.6667H27.5C28.6051 11.6667 29.6649 11.2277 30.4463 10.4463C31.2276 9.66493 31.6667 8.60507 31.6667 7.50001C31.6667 6.39495 31.2276 5.33509 30.4463 4.55372C29.6649 3.77235 28.6051 3.33334 27.5 3.33334C21.6667 3.33334 20 11.6667 20 11.6667Z"
                      stroke="#C19C67"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-[#5E3C10] text-xl mb-4">Regalos</h3>
                <p className="text-[#787878] text-sm mb-6">
                  Tu presencia es el mejor regalo para nosotros, si quisieras
                  hacernos un regalo, te dejamos nuestra cuenta bancaria para
                  que puedas realizarlo.
                </p>
                <button
                  onClick={() => setShowGiftModal(true)}
                  className="inline-flex items-center justify-center px-6 py-2 bg-[#C19C67] text-white rounded-full text-sm"
                >
                  MÁS INFORMACIÓN
                </button>
              </div>

              {/* Confirmation */}
              <div className="text-center mb-16">
                <div className="inline-block mb-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      d="M36.6667 6.66666H3.33334C2.41286 6.66666 1.66667 7.41285 1.66667 8.33333V31.6667C1.66667 32.5871 2.41286 33.3333 3.33334 33.3333H36.6667C37.5871 33.3333 38.3333 32.5871 38.3333 31.6667V8.33333C38.3333 7.41285 37.5871 6.66666 36.6667 6.66666Z"
                      stroke="#C19C67"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.66667 15H38.3333"
                      stroke="#C19C67"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-[#5E3C10] text-xl mb-2">
                  Confirmación de asistencia
                </h3>
                <p className="text-[#787878] text-sm mb-6">
                  Por favor, confirmanos tu asistencia antes del 30 de agosto
                  para poder organizarnos mejor.
                </p>
                <a
                  href="https://wa.me/5491112345678?text=Hola%20Franco%20y%20Abigail,%20confirmo%20mi%20asistencia%20a%20su%20boda.%20Mi%20nombre%20es:"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#C19C67] text-white rounded-full text-sm shadow-md hover:bg-[#9E7C4F] transition-colors"
                >
                  <Check size={18} className="mr-2" />
                  CONFIRMAR ASISTENCIA
                </a>
              </div>

              {/* Footer */}
              <footer className="text-center pb-10">
                <h2 className="font-serif text-3xl text-[#9E7C4F] mb-4">
                  Franco & Abigail
                </h2>
                <p className="text-[#787878] text-sm">
                  ¡Gracias por ser parte de nuestro día especial!
                </p>
              </footer>
            </section>

            {/* Gift Modal */}
            <GiftModal
              isOpen={showGiftModal}
              onClose={() => setShowGiftModal(false)}
            />

            {/* Image Carousel */}
            <ImageCarousel
              isOpen={isCarouselOpen}
              onClose={() => setIsCarouselOpen(false)}
              images={albumImages}
              initialIndex={currentImageIndex}
            />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

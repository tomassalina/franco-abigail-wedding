import { useState } from "react";
import ImageCarousel from "../image-carousel";
import Image from "next/image";

const albumImages = [
  { src: "/images/carousel-1.jpg", className: "object-[50%_20%]" },
  { src: "/images/carousel-2.jpg", className: "object-[50%_65%]" },
  { src: "/images/carousel-3.jpg", className: "object-[50%_20%]" },
  { src: "/images/carousel-4.jpg", className: "object-[50%_20%]" },
  { src: "/images/carousel-5.jpg", className: "object-[50%_40%]" },
  { src: "/images/carousel-6.jpg", className: "object-[50%_15%]" },
];

export default function PhotoAlbumSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  return (
    <div className="px-4 md:px-10">
      <div className="mb-2 md:mb-8 lg:mb-16">
        <div className="text-center mb-2 md:mb-4 lg:mb-8 py-4">
          <h3 className="md:mb-2 font-playfair font-medium text-xl md:text-2xl lg:text-4xl text-white">
            Álbum de fotos
          </h3>
          <h2 className="text-white text-2xl md:text-3xl lg:text-5xl">
            Momentos únicos
          </h2>
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
                <Image
                  src={image.src}
                  alt={`Photo ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className={image.className}
                />
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
      {/* Image Carousel */}
      <ImageCarousel
        isOpen={isCarouselOpen}
        onClose={() => setIsCarouselOpen(false)}
        images={albumImages}
        initialIndex={currentImageIndex}
      />
    </div>
  );
}

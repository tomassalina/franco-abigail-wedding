import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="rounded-2xl overflow-hidden relative">
      <div className="relative">
        <div className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
          <Image
            src="/images/hero.image.png"
            alt="Franco y Abigail"
            width={800}
            height={400}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 bg-gradient-to-t from-black/50 to-transparent text-white text-center">
          <h2 className="text-2xl md:text-5xl font-playfair font-normal mb-1">
            ¡Nos casamos!
          </h2>
          <p className="text-sm md:text-base font-normal">
            y queremos compartirlo con vos
          </p>
        </div>
      </div>
    </div>
  );
}

import CountdownTimer from "../countdown-timer";
import { LocationIcon } from "@/components/icons";

export default function DateAndLocationSection() {
  return (
    <div className="max-w-2xl mx-auto text-center mb-10">
      <h3 className="mb-1 font-playfair text-accent-foreground tracking-wider uppercase text-xl">
        Agendá la fecha
      </h3>
      <p className="text-3xl text-card-foreground mb-6">13 de septiembre</p>

      <div className="py-10 px-4 bg-white rounded-3xl">
        <CountdownTimer targetDate="2025-09-13T18:00:00" />
      </div>

      <div className="text-center my-16">
        <div className="inline-block mb-4">
          <LocationIcon />
        </div>
        <div className="text-foreground">
          <h3 className="mb-1 font-playfair text-4xl">Ceremonia</h3>
          <p className="mb-2 text-2xl font-medium">
            La Quinta Eventos <br /> Gral.Las Heras, Bs.As.
          </p>
          <p className="mb-4 text-lg">13 de septiembre, 16hs</p>
        </div>
        <a
          href="https://maps.app.goo.gl/rfQVJR8o9YBuzuBC6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-2 bg-[#EFEEEE] rounded-full text-sm uppercase border border-foreground"
        >
          Ubicación
        </a>
      </div>
    </div>
  );
}

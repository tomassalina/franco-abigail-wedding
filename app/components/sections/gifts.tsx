import { useState } from "react";
import GiftModal from "../gift-modal";
import { GiftBoxIcon } from "@/components/icons";

export default function GiftsSection() {
  const [showGiftModal, setShowGiftModal] = useState(false);

  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 text-center shadow-sm">
        <div className="inline-block">
          <GiftBoxIcon />
        </div>
        <h3 className="font-playfair text-3xl text-primary mb-4">Regalos</h3>
        <div className="mb-4 md:mb-8 text-sm md:text-base">
          <p>Tu presencia es lo más importante para nosotros.</p>
          <p>
            Si además deseas hacernos un regalo, podes ayudarnos con nuestra
            luna de miel.
          </p>
        </div>
        <button
          onClick={() => setShowGiftModal(true)}
          className="inline-flex items-center justify-center px-6 py-2 bg-secondary text-white rounded-full text-base font-medium cursor-pointer"
        >
          Más información
        </button>
      </div>

      <GiftModal
        isOpen={showGiftModal}
        onClose={() => setShowGiftModal(false)}
      />
    </div>
  );
}

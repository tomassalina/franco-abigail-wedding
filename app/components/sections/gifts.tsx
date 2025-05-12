import { useState } from "react";
import GiftModal from "../gift-modal";
import { GiftBoxIcon } from "@/components/icons";

export default function GiftsSection() {
  const [showGiftModal, setShowGiftModal] = useState(false);

  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 mb-16 text-center shadow-sm">
        <div className="inline-block">
          <GiftBoxIcon />
        </div>
        <h3 className="font-playfair text-3xl text-primary mb-4">Regalos</h3>
        <p className="mb-8">
          Tu presencia es lo más importante para nosotros.
          <br />
          Si además deseas hacernos un regalo, puedes ayudarnos con
          <br />
          nuestra luna de miel.
        </p>
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

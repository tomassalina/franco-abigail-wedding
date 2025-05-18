"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Copy, X } from "lucide-react";
import { useState } from "react";

interface GiftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const account = {
  cbu: "3840200500000015960892",
  alias: "FRAN.ABI.2025",
  holder: "Nicole Abigail Agüero",
};

export default function GiftModal({ isOpen, onClose }: GiftModalProps) {
  const [isCopying, setIsCopying] = useState(false);

  const handleCopy = () => {
    setIsCopying(true);
    navigator.clipboard.writeText(account.cbu).then(() => {
      setTimeout(() => {
        setIsCopying(false);
      }, 2000);
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-white rounded-lg py-12 px-8 max-w-2xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={25} className="text-accent-foreground" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col md:flex-row justify-between gap-2 md:gap-20"
            >
              <h3 className="w-2/12 font-playfair text-xl md:text-3xl text-secondary">
                Cuenta Bancaria
              </h3>
              <div className="w-10/12 flex flex-col gap-2 md:gap-4 text-sm md:text-base">
                <div>
                  <p>Caja de ahorro en pesos</p>
                  <p>Titular: {account.holder}</p>
                  <p>Alias: {account.alias}</p>
                </div>
                <div>
                  <h4>CBU:</h4>
                  <p>{account.cbu}</p>
                </div>
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-1 mt-2 text-xs md:text-sm font-medium cursor-pointer ${
                    isCopying ? "text-green-500" : "text-icon"
                  }`}
                >
                  {isCopying ? (
                    <>
                      <CheckCircle />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy />
                      Copiar CBU
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            <hr className="mt-4 mb-4 md:mt-10 md:mb-6" />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row justify-between gap-1 md:gap-20"
            >
              <h3 className="md:w-2/12 font-playfair text-xl md:text-3xl text-secondary">
                Mesa de regalos
              </h3>
              <div className="md:w-10/12 text-sm md:text-base">
                <p>
                  En caso de que prefieras regalar en efectivo u otro regalo,
                  vas a tener disponible una mesa para dejar tu regalo y cajita
                  con sobres en la quinta a tu disposición.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

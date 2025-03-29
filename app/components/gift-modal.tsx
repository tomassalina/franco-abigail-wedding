"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface GiftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GiftModal({ isOpen, onClose }: GiftModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-white rounded-lg p-6 max-w-md w-full relative"
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
              <X size={20} />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-6"
            >
              <h3 className="text-xl text-[#5E3C10] font-medium mb-2">
                Información Bancaria
              </h3>
              <p className="text-[#787878] text-sm">
                Si deseas hacernos un regalo, puedes realizarlo a través de la
                siguiente cuenta:
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#F9F5EF] p-4 rounded-md mb-6"
            >
              <div className="mb-3">
                <p className="text-sm text-[#787878] mb-1">Banco:</p>
                <p className="text-[#5E3C10] font-medium">
                  Banco Nación Argentina
                </p>
              </div>

              <div className="mb-3">
                <p className="text-sm text-[#787878] mb-1">Titular:</p>
                <p className="text-[#5E3C10] font-medium">Franco & Abigail</p>
              </div>

              <div className="mb-3">
                <p className="text-sm text-[#787878] mb-1">CBU:</p>
                <p className="text-[#5E3C10] font-medium">
                  0000000000000000000000
                </p>
              </div>

              <div>
                <p className="text-sm text-[#787878] mb-1">Alias:</p>
                <p className="text-[#5E3C10] font-medium">
                  BODA.FRANCO.ABIGAIL
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <motion.button
                onClick={onClose}
                className="inline-flex items-center justify-center px-6 py-2 bg-[#C19C67] text-white rounded-full text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cerrar
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

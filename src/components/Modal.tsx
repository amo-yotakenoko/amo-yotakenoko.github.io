import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  content: React.ReactNode;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.5 },
};

const modalVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.1, ease: "easeInOut" as any },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: { delay: 0.1, ease: "easeInOut" as any },
  },
};

const Modal: React.FC<ModalProps> = ({ content, onClose }) => {
  // ESCキーで閉じる
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence mode="wait">
      {content && (
        <>
          {/* 背景 */}
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* モーダル本体 */}
          <motion.div
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
             bg-calm p-6 rounded-xl shadow-2xl
             w-full max-w-[90vw] max-h-[90vh] overflow-y-auto
             text-ebony"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()} // モーダル内クリックで閉じない
          >
            {/* 閉じるボタン */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>

            {/* 中身 */}
            {content}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;

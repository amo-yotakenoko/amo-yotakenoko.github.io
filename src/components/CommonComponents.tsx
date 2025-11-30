import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({
  title,
  className,
}: {
  title: String;
  className?: string;
}) => {
  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="mx-auto w-fit border-b-4 border-mint pt-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={titleVariants}
    >
      <h1
        className={`font-asimovian text-center text-4xl px-4 ${className || ""}`}
      >
        {title}
      </h1>
    </motion.div>
  );
};

function Button({ text, onClick }: { text: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="   flex items-center justify-center gap-2
    py-2 px-4
    rounded-md
    border-3 border-ebony
    text-white text-base font-medium
    shadow
    bg-transparent
    transition-all duration-300
    hover:brightness-110"
    >
      <span className="relative font-asimovian color-calm">{text}</span>
    </button>
  );
}

export { SectionTitle, Button };

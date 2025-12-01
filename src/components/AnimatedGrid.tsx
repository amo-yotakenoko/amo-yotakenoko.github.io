import React from "react";
import { motion } from "framer-motion";

interface AnimatedGridProps {
  items: { id: string; src: string; alt: string; content: React.ReactNode }[];
  colsClass: string;
  setModalContent: (content: React.ReactNode) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const AnimatedGrid: React.FC<AnimatedGridProps> = ({
  items,
  colsClass,
  setModalContent,
}) => {
  return (
    <motion.div
      className={`grid ${colsClass} gap-4 p-2`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="
         
          "
          variants={itemVariants}
          onClick={() => setModalContent(item.content)}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover   
             aspect-video
            overflow-hidden
            rounded-xl
            shadow-md
            transform
            transition-transform
            duration-200
            hover:-translate-y-2
            hover:shadow-xl
            cursor-pointer"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedGrid;

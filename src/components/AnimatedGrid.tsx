import React from "react";
import { motion } from "framer-motion";

interface AnimatedGridProps {
  items: any[];
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
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className="relative group cursor-pointer
             transition-transform duration-300
          hover:-translate-y-2
           shadow-md
           hover:shadow-xl
     
           "
          style={{ zIndex: items.length - index }}
          // variants={itemVariants}
          onClick={() => setModalContent(item.content)}
        >
          <div
            className="
      absolute bottom-0 w-full text-lg bg-calm text-ebony rounded-b-xl
      z-0
p-1
       transition-transform duration-300
         group-hover:translate-y-full
         scale-y-0 
         group-hover:scale-y-100
    "
          >
            {item.hasOwnProperty("explanation") ? item.explanation : item.alt}
          </div>

          <img
            src={item.src}
            alt={item.alt}
            className="
      w-full h-full object-cover
      rounded-t-xl 

      rounded-b-xl group-hover:rounded-b-none duration-300

     
      z-10 relative
    pointer-events-none
    "
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedGrid;

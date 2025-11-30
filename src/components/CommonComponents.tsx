import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title }: { title: String }) => {
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
      <h1 className="font-asimovian text-center text-4xl px-4">{title}</h1>
    </motion.div>
  );
};

export default SectionTitle;

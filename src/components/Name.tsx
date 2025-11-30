import { useState } from "react";
import { motion } from "framer-motion";

function Name() {
  return (
    <>
      <section className=" ">
        <div className="flex item-center justify-between text-calm">
          <div className="space-y-8">
            <motion.h2
              className="lg:text-9xl font-bold text-6xl "
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0,
                stiffness: 200,
              }}
            >
              <img
                src="/images/name.svg"
                alt="TakedaKazuki"
                className="w-[800px] h-auto"
              />
            </motion.h2>
            <motion.p
              className="font-semibold "
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0,
                stiffness: 250,
              }}
            ></motion.p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Name;

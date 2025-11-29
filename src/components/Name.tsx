import { useState } from "react";
import { motion } from "framer-motion";

function Name() {
  return (
    <>
      <section className="lg:py48 py-32 ">
        <div className="flex item-center justify-between ">
          <div className="space-y-8">
            <motion.h2
              className="lg:text-9xl font-bold text-6xl lg:max-w-[40rem] "
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
                stiffness: 200,
                damping: 10,
              }}
            >
              Takeda Kazuki
            </motion.h2>
            <motion.p
              className="font-semibold "
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.8,
                stiffness: 200,
                damping: 10,
              }}
            >
              転職したい
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Name;

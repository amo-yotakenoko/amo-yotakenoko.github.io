import { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
function App() {
  return (
    <>
      <main className="h-screen gb-slate-900 bg-slate-800">
        <div className="container mx-auto ">
          <motion.header
            className="flex justify-between items-center text-white h-16"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              duration: 1,
              delay: 1,
              stiffness: 200,
            }}
          >
            <span className="font-bold text-2xl">サイト名</span>
            <nav>
              <ul className="flex gap-8">
                <li>ホーム</li>
                <li>サービス</li>
                <li>会社情報</li>
                <li>お問い合わせ</li>
              </ul>
            </nav>
          </motion.header>
          <section className="lg:py48 py-32 text-white">
            <div className="flex item-center justify-between ">
              <div className="space-y-8">
                <motion.h2
                  className="text-white lg:text-9xl font-bold text-6xl lg:max-w-[40rem] "
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    stiffness: 200,
                    damping: 10,
                  }}
                >
                  武田和樹
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
                ></motion.p>
                <div className="flex gap-4">
                  <button className="py-2 px-3 rounded-md border-2 my-4 hover:translate-y-1 duration-150">
                    <span className="font-bold">まずは無料相談から！</span>
                  </button>
                  <button className="py-2 px-3 rounded-md border-2 my-4  hover:translate-y-1 duration-150">
                    <span className="font-bold">Samples</span>
                  </button>
                </div>
              </div>

              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  stiffness: 200,
                  damping: 10,
                }}
                className="w-1/2 h-96  "
              ></motion.div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;

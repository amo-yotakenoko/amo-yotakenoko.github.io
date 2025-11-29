import { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <>
      <motion.header
        className="flex justify-between items-center  h-16"
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
    </>
  );
}
export default Header;

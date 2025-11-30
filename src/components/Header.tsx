import { useState } from "react";
import { motion } from "framer-motion";
import ScrollingMarquee from "./ScrollingMarquee.tsx";
import Name from "./Name.tsx";
function Header() {
  return (
    <>
      <div className="relative w-full">
        <div>
          <ScrollingMarquee reverse={false} offset={0} />
          <ScrollingMarquee reverse={true} offset={-0.5} />
          <ScrollingMarquee reverse={false} offset={0} />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute container mx-auto">
            <Name />
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;

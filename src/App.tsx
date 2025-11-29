import { useState } from "react";
import { motion } from "framer-motion";
import ThreeModel from "./components/ThreeModel.tsx";
import Header from "./components/Header.tsx";
import Name from "./components/Name.tsx";
function App() {
  return (
    <>
      <main className="h-screen gb-slate-900 bg-slate-800">
        <div className="container mx-auto ">
          <Header />
          <Name />
        </div>
      </main>
    </>
  );
}

export default App;

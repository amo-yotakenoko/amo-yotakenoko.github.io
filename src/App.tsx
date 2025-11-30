import { useState } from "react";
import { motion } from "framer-motion";
import ThreeModel from "./components/ThreeModel.tsx";
import Header from "./components/Header.tsx";
import Name from "./components/Name.tsx";

function App() {
  return (
    <>
      <main className="h-screen bg-brown text-calm">
        <Header />
        <div className="container mx-auto ">
          <Name />
        </div>
      </main>
    </>
  );
}

export default App;

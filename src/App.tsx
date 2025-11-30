import { useState } from "react";
import { motion } from "framer-motion";
import ThreeModel from "./components/ThreeModel.tsx";
import Header from "./components/Header.tsx";
import Name from "./components/Name.tsx";
import { History } from "./components/history.tsx";
import About from "./components/About.tsx";
import Application from "./components/Contents.tsx";

function App() {
  const [modalContent, setModalContent] = useState(null);
  return (
    <>
      <main className="w-full bg-brown text-calm ">
        <Header />
        <div className="container mx-auto ">
          <About />
          {/* <History /> */}
          <Application />
        </div>
      </main>
    </>
  );
}

export default App;

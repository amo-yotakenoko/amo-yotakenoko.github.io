import { useState } from "react";
import About from "./components/About.tsx";
import Application from "./components/Contents.tsx";
import Header from "./components/Header.tsx";
import Modal from "./components/Modal.tsx";

function App() {
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

  return (
    <>
      <main className="w-full bg-brown text-calm ">
        <Header />
        <div className="container mx-auto ">
          <About />
          <Application setModalContent={setModalContent} />
        </div>
        <Modal content={modalContent} onClose={() => setModalContent(null)} />
      </main>
    </>
  );
}

export default App;

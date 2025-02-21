import { useEffect, useState } from 'react';
import "../styles.css";



export default function BaseClassName () {
    const [inputBuffer, setInputBuffer] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    useEffect(() => {
      const detect1337 = (event) => {
        setInputBuffer((prev) => {
          const newBuffer = (prev + event.key).slice(-4); // Behåll endast de senaste 4 tecknen
          if (newBuffer.includes("1337")) {
            setIsModalOpen(true);
            return ""; // Rensa bufferten
          }
          return newBuffer;
        });
      };
  
      document.addEventListener("keydown", detect1337);
      return () => document.removeEventListener("keydown", detect1337);
    }, []);

    const closeModal = () => setIsModalOpen(false);


    return (
        <div>
      {isModalOpen && (
        <div className={`modal ${isModalOpen ? "show" : ""}`} onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Hacker Mode Activated!</h2>
            <p>Du skrev 1337! Du är en riktig hacker! 🎉</p>
            
            </div>
        </div>
      )}
    </div>
    );
};

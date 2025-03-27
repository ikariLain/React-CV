import React, { useState, useEffect } from 'react'
import Salamander from '../assets/Salamander_bank_logo.jpg'
import Database from '../assets/Database_logo.jpg'

const Projects = () => {
  const [modal, setModal] = useState(null);

  const openModal = (modalName) => {
    setModal(modalName);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModal(null);
    document.body.style.overflow = 'auto';
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div>
      <h1>Projects</h1>    
      <section className="portfolio-section">
        <h2>Portfolio</h2>
        
        <div className="project-grid">
          <div className="project-card">
            <h3>Salamander Bank</h3>
            <img src={Salamander} alt="Salamander Bank skärmdump" />
            <div className="project-links">
              <button onClick={() => openModal('salamanderModal')} className="read-more-btn">Läs mer</button>
            </div>
          </div>

          <div className="project-card">
            <h3>Individuellt Databasprojekt</h3>
            <img src={Database} alt="Databasprojekt skärmdump"/>
            <div className="project-links">
              <button onClick={() => openModal('databaseModal')} className="read-more-btn">Läs mer</button>
            </div>
          </div>
        </div>

        {/* Salamander Modal */}
        <div 
          className={`modal ${modal === 'salamanderModal' ? 'active' : ''}`} 
          onClick={handleOutsideClick}
        >
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Salamander Bank</h2>
              <p>Salamander Bank är en konsolbaserad bankapplikation utformad för att hantera konton och utföra transaktioner. Den låter användare skapa konton med e-postverifiering, logga in, hantera bankkonton, överföra pengar med SMS-notifikationer, växla valutor och visa transaktionshistorik. Administratörer kan skapa användarkonton.</p>
              <p>Teknologier: C#, .NET</p>
            <a href="https://github.com/Marremelad/SalamanderBank" target="_blank" rel="noopener noreferrer" className="modal-link">Besök GitHub Repository</a>
          </div>
        </div>

        {/* Database Modal */}
        <div 
          className={`modal ${modal === 'databaseModal' ? 'active' : ''}`} 
          onClick={handleOutsideClick}
        >
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Individuellt Databasprojekt</h2>
              <p>Det individuella databasprojektet är en C#-konsolapplikation som hanterar information om studenter och personal. Projektet är strukturerat med flera komponenter, inklusive en data-mapp för datakällor och databashantering, en models-mapp för datamodeller.</p>
              <p>Teknologier: C#, SQL, Entity Framework</p>
            <a href="https://github.com/ikariLain/Individuellt-databasprojekt" target="_blank" rel="noopener noreferrer" className="modal-link">Besök GitHub Repository</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
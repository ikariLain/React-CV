import React, { Component } from 'react'
import Salamander from '../assets/Salamander_bank_logo.jpg'
import Database from '../assets/Database_logo.jpg'


 const Projects = () => {
    return (
      <div>
        <h1>Projects</h1>    
<section class="portfolio-section">
    <h2>Portfolio</h2>
    
    <div class="project-grid">
        <div class="project-card">
            <h3>Salamander Bank</h3>
            <img src={Salamander} alt="Projekt 1 skärmdump" />
            <div class="project-links">
                <button onclick="openModal('salamanderModal')" class="read-more-btn">Läs mer</button>
            </div>
        </div>

        <div class="project-card">
            <h3>Individuellt Databasprojekt</h3>
            <img src={Database} alt="Projekt 2 skärmdump"/>
            <div class="project-links">
                <button onclick="openModal('databaseModal')" class="read-more-btn">Läs mer</button>
            </div>
        </div>
    </div>

    <div id="salamanderModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal('salamanderModal')">&times;</span>
            <h2>Salamander Bank</h2>
            <p>Salamander Bank är en konsolbaserad bankapplikation utformad för att hantera konton och utföra transaktioner. Den låter användare skapa konton med e-postverifiering, logga in, hantera bankkonton, överföra pengar med SMS-notifikationer, växla valutor och visa transaktionshistorik. Administratörer kan skapa användarkonton.</p>
            <p>Teknologier: C#, .NET</p>
            <a href="https://github.com/Marremelad/SalamanderBank" target="_blank" class="modal-link">Besök GitHub Repository</a>
        </div>
    </div>

    <div id="databaseModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal('databaseModal')">&times;</span>
            <h2>Individuellt Databasprojekt</h2>
            <p>Det individuella databasprojektet är en C#-konsolapplikation som hanterar information om studenter och personal. Projektet är strukturerat med flera komponenter, inklusive en data-mapp för datakällor och databashantering, en models-mapp för datamodeller.</p>
            <p>Teknologier: C#, SQL, Entity Framework</p>
            <a href="https://github.com/ikariLain/Individuellt-databasprojekt" target="_blank" class="modal-link">Besök GitHub Repository</a>
        </div>
    </div>
</section>

      </div>
    )
  }


export default Projects
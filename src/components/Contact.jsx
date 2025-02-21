import React, { Component } from 'react'
import ImgPainting from "../assets/Sea_painting.jpg"
import "../styles.css"

const Contact = () => {
    return (
      <div class="contact-container">
      <h1>Kontakta Mig</h1>
      <img src={ImgPainting} class="painting"/>
      
      <div class="contact-info">

          <div class="contact-item">
              <i class="fab fa-linkedin"></i>
              <h3>Linkedin</h3>
              <p><a href="https://www.linkedin.com/in/matheus-torrico-076364182/" target="_blank">LinkedIn Profil</a></p>
          </div>
          
          <div class="contact-item">
              <i class="fab fa-github"></i>
              <h3>Github</h3>
              <p><a href="https://www.linkedin.com/in/matheus-torrico-076364182/" target="_blank">GitHub Profil</a></p>
          </div>
      </div>
  </div>
    )
}

export default Contact
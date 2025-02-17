import React, { Component } from 'react'
import { hydrateRoot } from 'react-dom/client'
import painting from '../assets/painting_for_index.jpg'

const  Home = () => {
  
    return (
      
    <div>
        <h1 class="animate-title">Welcome to my CV website</h1>

          <div className="painting">
            <img src={painting} alt="Painting for index" /> {/* Visa bilden */}
          </div>

    </div>    
    )
  }


export default Home
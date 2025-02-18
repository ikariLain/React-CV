import React from 'react';
import painting from '../assets/painting_for_index.jpg';
import { hydrateRoot } from 'react-dom/client'
import Egg from "./EasterEgg.jsx";


const Home = () => {
  return (
    <div>
        <h1 className="animate-title">Welcome to my CV website</h1>
          <div className="painting">
            <img src={painting} alt="Painting for index" /> 
          </div>
          <Egg />
    </div>    
  
    );
  }


export default Home
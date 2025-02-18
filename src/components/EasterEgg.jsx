import React, { useState, useEffect } from 'react';
import eggImg from "../assets/Pokemon-egg.png";
import "./eggStyle.css";
import "../styles.css";

const EasterEgg = () => {
    const [isEggVisible, setIsEggVisible] = useState(false);
    const [isEggFound, setIsEggFound] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const eggFoundStatus = localStorage.getItem('easterEggFound');
        if (eggFoundStatus) {
            setIsEggFound(true);
            setIsEggVisible(true);
        }
    }, []);

    const handleEggZoneEnter = () => {
        setIsEggVisible(true);
    };

    const handleEggZoneLeave = () => {
        if (!isEggFound) {
            setIsEggVisible(false);
        }
    };

    const handleEggClick = (e) => {
        e.preventDefault();
        console.log('Egg clicked!');
        
        localStorage.setItem('easterEggFound', 'true');
        setIsEggFound(true);
        setIsAnimating(true);
        
        document.body.style.transition = 'background-image 1s ease-in-out';
        document.body.style.backgroundImage = `url("${eggImg}")`;
        
        setIsModalOpen(true);
        
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Stäng modalen om användaren klickar utanför den
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.classList.contains('modal')) {
                setIsModalOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className="easter-egg-container">
                <div 
                    className="egg-zone"
                    onMouseEnter={handleEggZoneEnter}
                    onMouseLeave={handleEggZoneLeave}
                >
                    <img 
                        src={eggImg} 
                        alt="Easter Egg" 
                        className="hidden-egg"
                        onClick={handleEggClick}
                        //Kommer rotera ägget vid click
                        style={{ 
                            animation: isAnimating ? 'eggFound 1s forwards' : 'none'
                            }}
                    />
                </div>
            </div>
            
            {/* Modal */}
            {isModalOpen && (
                <div className={`modal ${isModalOpen ? 'show' : ''}`}>
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Grattis!</h2>
                        <p>Du hittade ett påskägg! 🎉</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EasterEgg;

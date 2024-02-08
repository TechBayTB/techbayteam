import React from 'react'
import './Home.css'

export default function Home() {

    const handleNavigation = (link) => {
        const element = document.getElementById(link);
        const offset = 120; // Puedes ajustar este valor según sea necesario
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: "smooth"
        });
    };

    return (
        <div id='background'>
            <div id='home'>
                <h3 id='title1'>TECHBAY TEAM</h3>
                <h1 id='title2' className='homeTitle'>¿QUERÉS TU SITIO WEB?</h1>
                <h1 id='title3' className='homeTitle'>ESE ES NUESTRO TRABAJO.</h1>
                <div id='divHome'>
                    <h4 id='title4'>Desarrollamos Software</h4> 
                    <button id='homeButton' onClick={() => handleNavigation('about-me')}><img id='buttonIMG' src={require('../../assets/flecha.png')}/></button>
                </div>
            </div>
        </div>
)}

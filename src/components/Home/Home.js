import React , { useContext } from "react";
import './Home.css'
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import { HomeSpanish, HomeEnglish } from "./HomeText";

export default function Home() {

    const { language } = useContext(LanguageContext)

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
                <h1 id='title2' className='homeTitle'>{language === LanguageTypes.SPANISH ? HomeSpanish.title1 : HomeEnglish.title1}</h1>
                <h1 id='title3' className='homeTitle'>{language === LanguageTypes.SPANISH ? HomeSpanish.title2 : HomeEnglish.title2}</h1>
                <div id='divHome'>
                    <h4 id='title4'>{language === LanguageTypes.SPANISH ? HomeSpanish.title3 : HomeEnglish.title3}</h4> 
                    <button id='homeButton' onClick={() => handleNavigation('about-me')}><img id='buttonIMG' src={require('../../assets/flecha.png')}/></button>
                </div>
            </div>
        </div>
)}

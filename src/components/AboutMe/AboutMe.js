import { useContext } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './AboutMe.css'
import { AboutMeEnglish, AboutMeSpanish } from "./AboutMeText";
const AboutMe = () => {
    const { language } = useContext(LanguageContext)

    return (
        <>
            <div className="AboutMe" id='about-me'>
                <h2 className="title">{language === LanguageTypes.SPANISH ? AboutMeSpanish.h2 : AboutMeEnglish.h2}</h2>
                <p>{language === LanguageTypes.SPANISH ? AboutMeSpanish.p : AboutMeEnglish.p}</p>
                <p>{language === LanguageTypes.SPANISH ? AboutMeSpanish.p2 : AboutMeEnglish.p2}</p>
            </div>
        </>
    );
}

export default AboutMe; 
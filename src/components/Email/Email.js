import { useContext } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './Email.css'
import { EmailSpanish, EmailEnglish } from "./EmailText";

const Email = () => {
    const { language } = useContext(LanguageContext)

    return (
        <>
            <div className="Email" id='Email'>
                <h2 className="title">{language === LanguageTypes.SPANISH ? EmailSpanish.h2 : EmailEnglish.h2}</h2>
                <p>{language === LanguageTypes.SPANISH ? EmailSpanish.p : EmailEnglish.p}</p>
                <center><img id='emailIMG' src={require('../../assets/email.png')}/></center>
            </div>
        </>
    );
}

export default Email; 
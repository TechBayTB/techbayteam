import { useContext } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './ToggleLanguage.css'


const ToggleLanguage = ({ responsive }) => {

    const { language, changeLanguage } = useContext(LanguageContext);

    const change = () => {
        const ball = document.getElementById('ball');

        if (language === LanguageTypes.SPANISH) {
            ball.style.transform = "translateX(24px)"   
            changeLanguage()
        } else {
            ball.style.transform = "translateX(0px)"
            changeLanguage()
        }
    }
    return (
        <>

            <div className="container_toggle" style={{ responsive }}>
                <input type="checkbox" className="checkbox" onChange={() => change()} id="chk" />
                <label className="label" for="chk">
                    <p className="label_text">ESP</p>
                    <p className="label_text">ENG</p>
                    <div className="ball" id="ball">
                        {language === LanguageTypes.SPANISH ?
                            <div id='icono_idioma' alt='bandera' />
                            :
                            <div id='icono_idioma' alt='bandera' />
                        }
                    </div>
                </label>
            </div>
        </>
    )
}

export default ToggleLanguage;
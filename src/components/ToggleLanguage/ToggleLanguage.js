import { useContext } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './ToggleLanguage.css'
import IconoArg from '../../assets/argentina.png'
import IconoUK from '../../assets/reino-unido.png'

const ToggleLanguage = ({ responsive }) => {

    const { language, changeLanguage } = useContext(LanguageContext);

    const change = () => {
        const iconoBandera = document.getElementById('icono_idioma');
        const ball = document.getElementById('ball');

        if (language === LanguageTypes.SPANISH) {
            ball.style.transform = "translateX(24px)"
            iconoBandera.src = IconoArg
            changeLanguage()
        } else {
            ball.style.transform = "translateX(0px)"
            iconoBandera.src = IconoUK
            changeLanguage()
        }
    }
    return (
        <>

            <div className="container_toggle" style={{ responsive }}>
                <input type="checkbox" className="checkbox" onChange={() => change()} id="chk" />
                <label className="label" for="chk">
                    <p className="label_text">ESP</p>
                    <p className="label_text">EN</p>
                    <div className="ball" id="ball">
                        {language === LanguageTypes.SPANISH ?
                            <img id='icono_idioma' src={IconoUK} alt='bandera' />
                            :
                            <img id='icono_idioma' src={IconoArg} alt='bandera' />
                        }
                    </div>
                </label>
            </div>
        </>
    )
}

export default ToggleLanguage;
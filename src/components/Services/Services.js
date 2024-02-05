import { useContext } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import './Services.css'
import Reason from "./components/Services/Reason";
import { reasonES, reasonEN } from "./ServicesText";

const Services = () => {
    const { language } = useContext(LanguageContext);

    // Crear un array de datos para cada instancia de Title
    

    const reason = language === LanguageTypes.SPANISH ? reasonES : reasonEN;

    const title = language === LanguageTypes.SPANISH ? "SERVICIOS" : "SERVICES";
    
    return (
        <>
            <div className="background" id="servicios">
                <div className="Services" id="Services">
                    <h2 className="title">{title}</h2>
                    <div className="services-container" id="services-container">
                        {reason.map((data, index) => (
                            <Reason
                                key={index}
                                logo={data.logo}
                                title={data.title}
                                descrip={data.descrip}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}


export default Services; 
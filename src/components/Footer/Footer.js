import { useContext } from 'react';
import LanguageContext from '../../Context/Language';
import { LanguageTypes } from '../Types/LanguageTypes';
import './Footer.css'
import { FooterEnglish, FooterSpanish } from './FooterText';
const Footer = () => {

    const { language } = useContext(LanguageContext)
    const handleNavigation = (link) => {
        document.getElementById(link).scrollIntoView({ behavior: "smooth" })
    }

    return (
        <>
            <div id='footerBackground'>
                <div class="footer">
                    <ul>
                        <li id='footerTechbay'>
                            <h2>TECHBAY</h2>
                            <p>{language === LanguageTypes.SPANISH ? FooterSpanish.text : FooterEnglish.text}</p>
                        </li>
                        <li>
                            <h2>SERVICIOS</h2>
                            <div className='footerGrid'>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('contact')}>Consulta</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('servicios')}>Diseño</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('servicios')}>Desarrollo</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('servicios')}>Lanzamiento</p>
                            </div>
                        </li>
                        <li>
                            <h2>SOBRE NOSOTROS</h2>
                            <div className='footerGrid'>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('')}>¿Quienes somos?</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('')}>Misión</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('')}>Visión</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('Comments')}>Nuestros Clientes</p>
                            </div>
                        </li>
                        <li>
                            <h2>CONTACTO</h2>
                            <div className='footerGrid'>
                                <p>TechBay</p>
                                <p>+54 9 15  5471  7868</p>
                                <p>techbayteam@gmail.com</p>
                                <p>Buenos Aires, Argentina</p>
                            </div>
                        </li>
                    </ul>
                    <div id='footerLogos'>
                        <p>Logos</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer; 
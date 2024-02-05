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
            <footer class="footer">
                <ul>
                    <li>
                        <h2>TECHBAY</h2>
                        <p>{language === LanguageTypes.SPANISH ? FooterSpanish.text : FooterEnglish.text}</p>
                    </li>
                    <li>
                        <h2>SERVICIOS</h2>
                        <p onClick={() => handleNavigation('')}>Diseño</p>
                        <p onClick={() => handleNavigation('')}>Desarrollo</p>
                        <p onClick={() => handleNavigation('')}>Lanzamiento</p>
                    </li>
                    <li>
                        <h2>SOBRE NOSOTROS</h2>
                        <p onClick={() => handleNavigation('')}>¿Quienes somos?</p>
                        <p onClick={() => handleNavigation('')}>Nuestros Clientes</p>
                        <p onClick={() => handleNavigation('')}>Contáctanos</p>
                    </li>
                    <li>
                        <h2>CONTACTO</h2>
                        <p>techbayteam@gmail.com</p>
                        <p>+54 9 15  5471  7868</p>
                        <p>Buenos Aires, Argentina</p>
                    </li>
                </ul>
            </footer>
            <footer class="footer">
                <div class="main-footer-container">
                    <div class="main-footer">
                        <ul class="footer-right">
                            <li id='footerPaula'>
                                <h2 class="footer-titles" id="h2_footer_resources">TECHBAY</h2>
                                <ul class="footer-box">
                                    <li><p>{language === LanguageTypes.SPANISH ? FooterSpanish.text : FooterEnglish.text}</p></li>
                                </ul>
                            </li>
                            <li className='footers'>
                                <h2 class="footer-titles" id="h2_footer_resources">SERVICIOS</h2>
                                <ul class="footer-box">
                                    <li><p onClick={() => handleNavigation('Translation')}>Diseño</p></li>
                                    <li><p onClick={() => handleNavigation('Courses')} >Desarrollo</p></li>
                                    <li><p onClick={() => handleNavigation('Firma')}>Lanzamiento</p></li>
                                </ul>
                            </li>
                            <li className='footers'>
                                <h2 class="footer-titles" id="h2_footer_us">SOBRE NOSOTROS</h2>
                                <ul class="footer-box">
                                    <li><p onClick={() => handleNavigation('about-me')}>¿Quienes somos?</p></li>
                                    <li><p onClick={() => handleNavigation('education')}>Nuestros Clientes</p></li>
                                    <li><p onClick={() => handleNavigation('contact')}>Contáctanos</p></li>
                                </ul>
                            </li>
                            <li className='footers'>
                                <h2 class="footer-titles" id="h2_footer_contact">CONTACTO</h2>
                                <ul class="footer-box">
                                    <li><p>techbayteam@gmail.com</p></li>
                                    <li><p >+54 9 15  5471  7868</p></li>
                                    <li><p>Buenos Aires, Argentina</p></li>
                                </ul>
                            </li>
                        </ul>
                        <div class="footer-bottom">
                            <p id="rights">LOGOS</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer; 
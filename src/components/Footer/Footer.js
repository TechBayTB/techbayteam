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
                            <h2>{language === LanguageTypes.SPANISH ? FooterSpanish.title1 : FooterEnglish.title1}</h2>
                            <div className='footerGrid'>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('contact')}>{language === LanguageTypes.SPANISH ? FooterSpanish.text1 : FooterEnglish.text1}</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('servicios')}>{language === LanguageTypes.SPANISH ? FooterSpanish.text2 : FooterEnglish.text2}</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('servicios')}>{language === LanguageTypes.SPANISH ? FooterSpanish.text3 : FooterEnglish.text3}</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('servicios')}>{language === LanguageTypes.SPANISH ? FooterSpanish.text4 : FooterEnglish.text4}</p>
                            </div>
                        </li>
                        <li>
                            <h2>{language === LanguageTypes.SPANISH ? FooterSpanish.title2 : FooterEnglish.title2}</h2>
                            <div className='footerGrid'>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('about-me')}>{language === LanguageTypes.SPANISH ? FooterSpanish.text5 : FooterEnglish.text5}</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('about-me')}>{language === LanguageTypes.SPANISH ? FooterSpanish.text6 : FooterEnglish.text6}</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('about-me')}>{language === LanguageTypes.SPANISH ? FooterSpanish.text7 : FooterEnglish.text7}</p>
                                <p style={{cursor: "pointer"}} onClick={() => handleNavigation('Comments')}>{language === LanguageTypes.SPANISH ? FooterSpanish.text8 : FooterEnglish.text8}</p>
                            </div>
                        </li>
                        <li>
                            <h2>{language === LanguageTypes.SPANISH ? FooterSpanish.title3 : FooterEnglish.title3}</h2>
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
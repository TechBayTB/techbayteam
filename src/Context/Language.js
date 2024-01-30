import React,{ useState } from "react";
import { LanguageTypes } from "../components/Types/LanguageTypes";

const  LanguageContext = React.createContext();


export const LanguageContextProvider = ({ children }) =>{
    const [language , setLanguage] = useState(LanguageTypes.SPANISH)
    
    //const token = localStorage.getItem('language') ? localStorage.getItem('language') : localStorage.setItem('language', language)
    
    // token && setLanguage(token)
    // (function (){
    //     const local = localStorage.getItem('language')
    //     if(local){
    //         setLanguage(local)
    //     }else localStorage.setItem('language', language)
    // }())

    const changeLanguage = () =>{
        if(language === LanguageTypes.SPANISH){
            setLanguage(LanguageTypes.ENGLISH)
        }else{
            setLanguage(LanguageTypes.SPANISH)
        }
        localStorage.setItem('language', language)
    }

    return(
        <LanguageContext.Provider 
        value={{
            language,
            changeLanguage,
        }}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContext
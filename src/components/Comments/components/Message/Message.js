import { useContext } from "react";
import LanguageContext from "../../../../Context/Language";
import { LanguageTypes } from "../../../Types/LanguageTypes";
import './Message.css'
// import { EducationEnglish, EducationSpanish } from "./TitleText";
const Message = ({comment, name}) => {
    const { language } = useContext(LanguageContext)

    return (
        <>
            <div className="message-container">
                <p className="comment">{comment}</p>
                <p className="name">{name}</p>
            </div>
        </>
    );
}

export default Message; 
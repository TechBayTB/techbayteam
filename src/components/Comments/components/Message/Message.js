import { useContext } from "react";
import LanguageContext from "../../../../Context/Language";
import { LanguageTypes } from "../../../Types/LanguageTypes";
import './Message.css'
// import { EducationEnglish, EducationSpanish } from "./TitleText";
const Message = ({logo, comment, name}) => {
    const { language } = useContext(LanguageContext)

    return (
        <>
            <div className="message-container">
                <div>
                    <img id='messageIMG' src={require(`../../../../assets/${logo}`)}/>
                    <p className="name">{name}</p>
                </div>
                <p className="comment">{comment}</p>
            </div>
        </>
    );
}

export default Message; 
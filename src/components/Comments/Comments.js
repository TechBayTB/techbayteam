import { useContext, useState } from "react";
import LanguageContext from "../../Context/Language";
import { LanguageTypes } from "../Types/LanguageTypes";
import "./Comments.css";
import Message from "./components/Message/Message";
import { titlesDataEsp, titlesDataEnglish } from "./CommentsText";

const Comments = () => {
  const { language } = useContext(LanguageContext);



  let titlesData = (language === LanguageTypes.SPANISH) ? titlesDataEsp : titlesDataEnglish;


  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="Comments" id="Comments">
        <div className="comments-container">
          <button className="comments-button" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + titlesData.length) % titlesData.length)}>
            &lt;
          </button>
          <Message logo={titlesData[currentIndex].logo} comment={titlesData[currentIndex].comment} name={titlesData[currentIndex].name} />
          <button className="comments-button" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % titlesData.length)}>&gt;</button>
        </div>
        <div className="indicators-container">
          {titlesData.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "indicator active" : "indicator"}
              onClick={() => handleIndicatorClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comments;
import { useState } from "react";

const FaqElement = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    // console.log("tıklandı");
    setShowAnswer((pre) => !pre);
    // console.log(faq.id, showAnswer);
  };

  let answer = showAnswer && <p>{faq.answer}</p>;

  return (
    <>
      <div className="question-wrapper" onClick={handleClick}>
        <div className="question-text">
          <p className="question">{faq.question}</p>
          <p className="icon">{showAnswer ? "-" : "+"}</p>
        </div>
        <div className="answer">{answer}</div>
      </div>
    </>
  );
};
export default FaqElement;

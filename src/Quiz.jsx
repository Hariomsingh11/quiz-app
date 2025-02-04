import { useState } from "react";
import { resultInitialState } from "./constants";
import AnswerTimer from "./AnswerTimer";

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState(resultInitialState);
    const [showResult, setShowResult] = useState(false);
    const [showAnswerTimer, setShowAnswerTimer] = useState(true);
    const[inputAnswer,setInputAnswer]=useState('');

    const { question, choices, correctAnswer, type } = questions[currentQuestion];

    const onAnwserClick = (choice, index) => {
        setAnswerIdx(index);
        if (choice === correctAnswer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    };

    const onClickNext = (finalAnswer) => {
        setAnswerIdx(null);
        setShowAnswerTimer(false);
        setResult((prev) =>
            finalAnswer
                ? {
                    ...prev,
                    score: prev.score + 5,
                    correctAnswers: prev.correctAnswers + 1,
                }
                : {
                    ...prev,
                    wrongAnswers: prev.wrongAnswers + 1,
                }
        );
        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setCurrentQuestion(0);
            setShowResult(true);
        }


        setTimeout(() => {
            setShowAnswerTimer(true);
        })
    };


    const onTryAgain = () => {
        setResult(resultInitialState);
        setShowResult(false);
    };

    const handletimeup = () => {
        setAnswer(false);
        onClickNext(false);
    };

    const handleInputChange=(evt)=>{
        setInputAnswer(evt.target.value);

        if(evt.target.value===correctAnswer){
            setAnswer(true);
        }else{
            setAnswer(false);
        }
    }

    const getAnswerUI =()=>{

        if(type==='FIB'){
            return <input value={inputAnswer} onChange={handleInputChange}/>
        }

        return(  <ul>
            {
                choices.map((choice, index) => (
                    <li
                        onClick={() => onAnwserClick(choice, index)}
                        key={choice}
                        className={answerIdx === index ? 'selected-answer' : null}
                    >
                        {choice}
                    </li>
                ))}
        </ul>)
    }

    return (
        <div className="quiz-container">
            {!showResult ? (<>

                {showAnswerTimer && <AnswerTimer duration={10} onTimeup={handletimeup} />}
                <span className="active-question-no">{currentQuestion + 1}</span>
                <span className="total-question">/{questions.length}</span>
                <h2>{question}</h2>
               {getAnswerUI()}
                <div className="footer">
                    <button onClick={() => onClickNext(answer)} disabled={(type === "FIB" && !inputAnswer) || (type !== "FIB" && answerIdx === null)}>
                        {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                    </button>

                </div>
            </>
            ) : (
                <div className="result">
                    <h3>Result</h3>
                    <p>
                        Total Questions:<span>{questions.length}</span>
                    </p>
                    <p>
                        Total Score:<span>{result.score}</span>
                    </p>
                    <p>
                        Correct Answers:<span>{result.correctAnswers}</span>
                    </p>
                    <p>
                        Wrong Answers:<span>{result.wrongAnswers}</span>
                    </p>

                    <button onClick={onTryAgain}>Try again</button>

                </div>)}

        </div>
    );
};

export default Quiz;
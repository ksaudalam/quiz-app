import React from "react";
import "./App.css";
import questions from "./Quizdata";
import QuizResult from "./QuizResult";
import { useState } from "react";

const Quizz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const handleAnswerOption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 5);
      setCorrectAns(correctAns + 1);
    }
  };
  const handleNextOption = () => {
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion<questions.length){
    setCurrentQuestion(nextQuestion);
    }else{
      setShowResult(true)
    }
  }; 

  return (
    <>
      <div className="app">
        {showResult?(<QuizResult score={score} correctAns={correctAns}/>):( 
        <>
        <div className="question-section">
          <h5>Score:{score}</h5>
          <div className="question-count">
            <span>
              Question {currentQuestion + 1} of {questions.length}{" "}
            </span>
          </div>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
        </div>
        <div className="answer-section">
          {questions[currentQuestion].answerOptions.map((ans, i) => {
            return (
              <button key={i} onClick={()=>handleAnswerOption(ans.isCorrect)}>
                {ans.answerText}
              </button>
            );
          })}

          <div className="actions">
            <button>Quit</button>
            <button onClick={handleNextOption}>Next</button>
          </div>
        </div>
        </>)}
       
      </div>
    </>
  );
};

export default Quizz;

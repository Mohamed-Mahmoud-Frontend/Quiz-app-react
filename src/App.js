import React, { useState } from "react";
import './App.css'
const App = () => {
  const questions = [
    {
      questionsText: 'Which HTML tag is used to define an internal style sheet?',
      answerOption: [
        { answerText: "<style>", inCorrect: true },
        { answerText: "<script>", inCorrect: false },
        { answerText: "<headStyle>", inCorrect: false },
        { answerText: "<css>", inCorrect: false },
      ],
    },
    {
      questionsText: 'What does CSS stand for?',
      answerOption: [
        { answerText: "Computer Style Sheets", inCorrect: false },
        { answerText: "Creative Style Sheets", inCorrect: false },
        { answerText: "Cascading Style Sheets", inCorrect: true },
        { answerText: "Colorful Style Sheets", inCorrect: false },
      ],
    },
    {
      questionsText: 'Which is the correct CSS syntax?',
      answerOption: [
        { answerText: "{body:color=black;}", inCorrect: false },
        { answerText: "{body;color:black;}", inCorrect: false },
        { answerText: "body:color=black;", inCorrect: false },
        { answerText: "body {color: black;}", inCorrect: true },
      ],
    },
    {
      questionsText: 'How do you insert a comment in a CSS file?',
      answerOption: [
        { answerText:'\' this is a comment', inCorrect: false },
        { answerText:'/* this is a comment */', inCorrect: true },
        { answerText: '// this is a comment', inCorrect: false },
        { answerText: '// this is a comment //', inCorrect: false },
      ],
    },
    {
      questionsText: 'Which property is used to change the background color?',
      answerOption: [
        { answerText:'color', inCorrect: false },
        { answerText: 'bgcolor', inCorrect: false },
        { answerText: 'background-color', inCorrect: true },
        { answerText: 'bgColor', inCorrect: false },
      ],
    },
    {
      questionsText: 'How do you add a background color for all <h1> elements?',
      answerOption: [
        { answerText: 'all.h1 {background-color:#FFFFFF;}', inCorrect: false },
        { answerText: 'h1.setAll {background-color:#FFFFFF;}', inCorrect: false },
        { answerText: 'h1.all {background-color:#FFFFFF;}', inCorrect: false },
        { answerText:'h1 {background-color:#FFFFFF;}', inCorrect: true },
      ],
    },
  ];
  const [currentQuestion ,setCurrentQuestion] = useState(0);
  const [showScore , setShowScore] = useState(false);
  const [score ,setScore] = useState(0);
  


  const handleClick =(inCorrect)=>{
      if(inCorrect ===true){
    setScore(score + 1)
  }
    const nextQuestion = currentQuestion + 1;
    if( nextQuestion < questions.length){
    setCurrentQuestion(nextQuestion);
 }else{
  setShowScore(true)
 }
  };
  
  
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
you scored {score} out of {questions.length}
        </div>
      ) : (
        <>
        <div className="question-section ">
          <div className="question-count">
            <span> Question {currentQuestion +1}</span>/{questions.length}
          </div>
          <div className="question-text">{questions[currentQuestion].questionsText}
          
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOption.map((answerOption) => (
              <button onClick={()=>handleClick(answerOption.inCorrect) }>{answerOption.answerText}</button>
            ))}</div>
        </div>
        </>
      )}
    </div>
  );
};

export default App;

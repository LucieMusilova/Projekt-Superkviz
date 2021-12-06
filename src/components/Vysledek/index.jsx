import React from 'react';
import './style.css';
import correctImg from "./correct.svg";
import incorrectImg from "./incorrect.svg";

const Vysledek = ({item, correct, choice}) => {
  

  return (
    <>
        <div className="evaluation">

          <h2 className="evaluation__title">Tvoje hodnocení</h2>

          <div className="evaluation__content">

            <div className="results">

            {item?.questions.map((q, index) =>
              <div className="result" key={index}>
                <img className="result__icon" src={q.answers[q.correctAnswer] === choice[q.id - 1] ? correctImg : incorrectImg} alt={q.answers[q.correctAnswer] === choice[q.id - 1] ? "dobře" : "špatně"}/>
       
                <div className="result__content">
                  <h3 className="result__title">{q.title}</h3>
                  <p className="result__answer">Tvoje odpověď: {choice[q.id - 1]}</p>
                  <p className={q.answers[q.correctAnswer] === choice[q.id - 1] ? "result__answer result__answer--incorrect" : "result__answer result__answer--correct"}>Správná odpověď: {q.answers[q.correctAnswer]}</p>
                </div>
              </div>
            )}


              <div className="results__count">
                Správně máš {correct} ze {item?.questions.length} otázek.
              </div>

            </div>

            <div className="success-rate">
              {Math.round(correct/item?.questions.length * 100)} %
            </div>

          </div>

        </div> 
    </>

  )
}

export default Vysledek;
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import './style.css';

const Detail = () => {
  const {id} = useParams();
  const [item, setItem] = useState([]);
  const [i, setI] = useState(0);

  const fetchData = () => {
    fetch(`https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quiz/${id}.json`)
    .then(response => response.json())
    .then(data => {
      setItem(data);
    })
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(item)

  return (
    <div className="question">

      <p className="question__number">Otázka {item.questions[i]} / {item.length}</p>

      <h2 className="question__title">{item.questions[i].title}</h2>

      <div className="question__content">
        <img className="question__image" src={item.questions[i].image} alt="Ilustrační obrázek"/>

        <div className="question__answers">
          <button className="question__answer">{item.questions[i].answers[0]}</button>
          <button className="question__answer">{item.questions[i].answers[1]}</button>
          <button className="question__answer">{item.questions[i].answers[2]}</button>
        </div>
      </div>

    </div>
  )
}

export default Detail;
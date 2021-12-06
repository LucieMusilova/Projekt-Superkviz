import React, {useEffect} from 'react';
import { useParams, Link} from 'react-router-dom';

import './style.css';

const Detail = ({getData, item, getChoice, i}) => {
  const {id} = useParams();

  const fetchData = () => {
    fetch(`https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quiz/${id}.json`)
    .then(response => response.json())
    .then(data => {
      getData(data);
    })
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleClick = (choosed) => {
    getChoice(choosed)
  };
  


  return (
    <>
     {(item !== null || undefined) ? 
      <div className="question">
    
        <p className="question__number">Otázka {i + 1} / {item.questions.length}</p>

        <h2 className="question__title">{item.questions[i].title}</h2>

        <div className="question__content">
          <img className="question__image" src={item.questions[i].image} alt="Ilustrační obrázek"/>

          <div className="question__answers">
          <Link to={ i + 1 < item.questions.length ? `/kvizy/${id}` : '/kvizy/vysledek' } className="question__answer" onClick={() => handleClick(0)}>{item.questions[i].answers[0]}</Link>
          <Link to={ i + 1 < item.questions.length ? `/kvizy/${id}` : '/kvizy/vysledek' } className="question__answer" onClick={() => handleClick(1)}>{item.questions[i].answers[1]}</Link>
          <Link to={ i + 1 < item.questions.length ? `/kvizy/${id}` : '/kvizy/vysledek' } className="question__answer" onClick={() => handleClick(2)}>{item.questions[i].answers[2]}</Link>
          </div>
        </div>
      </div>: null}   
    </>
  )
}

export default Detail;
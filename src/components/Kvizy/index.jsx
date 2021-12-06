import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Kvizy = () => {
  const [quiz, setQuiz] = useState([]);

  const fetchData = () => {
    fetch('https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quizes.json')
    .then(response => response.json())
    .then(data => {
      setQuiz(data);
    })
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (

		<div className="quiz-list">

      {quiz.map((q) =>
        <div className="quiz-item" key={q.id}>
          <img className="quiz-item__image" src={q.image} alt={q.title} />
          <div className="quiz-item__content">
            <h2 className="quiz-item__title">{q.title}</h2>
            <p className="quiz-item__questions">{q.questions} otázek</p>
            <Link to={`/kvizy/${q.id}`} className="quiz-item__link" onClick={() => {window.location.href=`/kvizy/${q.id}`}}>Spustit kvíz</Link>
          </div>
        </div>
      )}
		</div>
  )
}

export default Kvizy;
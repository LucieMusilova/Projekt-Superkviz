import React, {useState, useEffect} from 'react';
import './style.css';

const Zebricek = () => {
  const [person, setPerson] = useState([]);

  const fetchData = () => {
    fetch('https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/topscore.json')
    .then(response => response.json())
    .then(data => {
      setPerson(data);
    })
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="topscore">

      <h2 className="topscore__title">Žebříček nejlepších</h2>

      <ul className="topscore__list">
        {person.map((per, index) =>

          <li className="topscore__item" key={index}>
            <span className="topscore__name">{per.name}</span>
            <span className="topscore__score">{per.score}</span>
          </li>
        )}

      </ul>

    </div>
  )
}

export default Zebricek;
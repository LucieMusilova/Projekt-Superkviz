import React, {useState} from 'react';
import { render } from 'react-dom';
import './style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Kvizy from './components/Kvizy'
import Zebricek from './components/Zebricek'
import Detail from './components/Detail'
import Vysledek from './components/Vysledek'

const App = () => {
  const [item, setItem] = useState(null);
  const [i, setI] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [choice, setChoice] = useState([]);



  const getData = (data) => {
    setItem(data)
  }


  const getChoice = (choosed) => {
    item.questions[i].correctAnswer === choosed ? setCorrect(correct + 1) : setCorrect(correct);
    setChoice(choice => choice.concat(item.questions[i].answers[choosed]));
    setI(i+1);
  }

  console.log(correct);
  console.log(choice);

  return (
    <BrowserRouter>
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/kvizy" element={<Kvizy />} />
          <Route path="/kvizy/:id" element={<Detail getData={getData} getChoice={getChoice} item={item} i={i}/>} />
          <Route path="/kvizy/vysledek" element={<Vysledek item={item} correct={correct} choice={choice}/>} />
          <Route path="/zebricek" element={<Zebricek />} />
          
        </Routes>
      </main>
      
      <Footer />
      
    </BrowserRouter>
  )
};

render(<App />, document.querySelector('#app'));

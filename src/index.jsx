import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Kvizy from './components/Kvizy'
import Zebricek from './components/Zebricek'
import Detail from './components/Detail'

const App = () => (
  <BrowserRouter>
    <Header />

    <main className="main">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kvizy" element={<Kvizy />} />
        <Route path="/kvizy/:id" element={<Detail />} />
        <Route path="/zebricek" element={<Zebricek />} />
        
      </Routes>
    </main>
    
    <Footer />
    
  </BrowserRouter>

);

render(<App />, document.querySelector('#app'));

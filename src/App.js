import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/home';
import Quotes from './components/Quotes';
import Header from './components/header';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quotes" element={<Quotes />} />
    </Routes>
  </>
);

export default App;

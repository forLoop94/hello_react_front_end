import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Greeting from './Greeting.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;

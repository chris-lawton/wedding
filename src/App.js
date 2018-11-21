import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

const App = () => (
  <div className="App">
    <img className="leaves leaves--top" src="/images/leaves-2.png" alt="Tropical Leaves" />
    <Header />
    <Main />
    <img className="leaves leaves--bottom" src="/images/leaves-1.png" alt="Tropical Leaves" />
  </div>
)

export default App;

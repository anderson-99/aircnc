import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

import Routes from './routes';

//tudo dentro do function App é o React
function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from '../src/components/header/nav.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
      </Router>
    </div>
  );
}

export default App;

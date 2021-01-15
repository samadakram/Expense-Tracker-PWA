import React from 'react';
import './App.css';

// Import Components
import { Header } from './Components/Header';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <h5>Balance</h5>
      </div>
    </div>
  );
}

export default App;

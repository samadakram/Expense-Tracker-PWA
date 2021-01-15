import React from 'react';
import './App.css';

// Import Components
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

// Import Components
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';

import { GlobalProvider } from './Context/GlobalContext';
import firebase from './firebase';

function App() {

  const messaging = firebase.messaging();
  messaging.requestPermission().then( () => {
    return messaging.getToken()
  }).then((token)=> {
    console.log('Token', token)
  })

  return (
    <GlobalProvider>
      <div className="container">
      <Header/>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

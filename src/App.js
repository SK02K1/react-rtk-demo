import './App.css';
import React from 'react';
import { Bakery } from './features/cake/Bakery';
import { IceCreamParlour } from './features/iceCream/IceCreamParlour';

function App() {
  return (
    <div className='App'>
      <Bakery />
      <IceCreamParlour />
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import { Bakery } from './features/cake/Bakery';
import { IceCreamParlour } from './features/iceCream/IceCreamParlour';
import { UsersListing } from './features/users/UsersListing';

function App() {
  return (
    <div className='App'>
      <Bakery />
      <IceCreamParlour />
      <UsersListing />
    </div>
  );
}

export default App;

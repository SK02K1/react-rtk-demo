import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cakeOrdered } from './cakeSlice';
import { selectCakesCount } from './cakeSlice';

export const Bakery = () => {
  const cakesCounter = useSelector(selectCakesCount);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Bakery</h1>
      <p>no. of cakes available: {cakesCounter}</p>
      <div>
        <button
          onClick={() => dispatch(cakeOrdered())}
          disabled={cakesCounter === 0}
        >
          Order Cake
        </button>
      </div>
    </div>
  );
};

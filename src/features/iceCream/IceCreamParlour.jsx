import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIceCreamCount, iceCreamOrdered } from './iceCreamSlice';

export const IceCreamParlour = () => {
  const iceCreamCounter = useSelector(selectIceCreamCount);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        margin: '1rem auto',
        padding: '1rem',
        borderRadius: '5px',
        background: '#ccc',
        width: 'max-content',
      }}
    >
      <h2>Ice Cream Parlour</h2>
      <p>no. of ice-creams available: {iceCreamCounter}</p>
      <button onClick={() => dispatch(iceCreamOrdered())}>
        Order Ice-Cream
      </button>
    </div>
  );
};

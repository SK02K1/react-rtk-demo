import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cakeOrdered, cakeRestocked } from './cakeSlice';
import { selectCakesCount } from './cakeSlice';

export const Bakery = () => {
  const [restockValue, setRestockValue] = useState(1);
  const cakesCounter = useSelector(selectCakesCount);
  const dispatch = useDispatch();

  const restockHandler = (e) => {
    e.preventDefault();
    dispatch(cakeRestocked({ restockValue }));
  };

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
      <h2>Bakery</h2>
      <p>no. of cakes available: {cakesCounter}</p>
      <form onSubmit={restockHandler}>
        <div>
          <button
            type='button'
            onClick={() => dispatch(cakeOrdered())}
            disabled={cakesCounter === 0}
          >
            Order Cake
          </button>
          <div style={{ margin: '1rem' }}>
            <input
              onChange={(e) => setRestockValue(Number(e.target.value))}
              type='number'
              name='restock-value'
              value={restockValue}
              min={1}
              id='restock-value'
              placeholder='Enter restock value'
              required
            />
            <button type='submit'>Restock Cakes</button>
          </div>
        </div>
      </form>
    </div>
  );
};

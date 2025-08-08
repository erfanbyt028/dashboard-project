import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice';

const TableScreen = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState('');

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
      <h2 className="text-xl font-semibold">Counter (Redux Toolkit)</h2>
      <div className="flex items-center gap-4">
        <button className="px-3 py-1 rounded bg-gray-100" onClick={() => dispatch(decrement())}>-</button>
        <span className="text-lg font-bold w-10 text-center">{value}</span>
        <button className="px-3 py-1 rounded bg-gray-100" onClick={() => dispatch(increment())}>+</button>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          className="border rounded px-2 py-1"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="px-3 py-1 rounded bg-teal-500 text-white"
          onClick={() => dispatch(incrementByAmount(Number(amount)))}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
};

export default TableScreen;

"use client";

import { useState } from "react";

// Child Counter Component
const Counter = ({ count, increment, decrement, reset }) => {
  return (
    <div className="flex flex-col items-center p-4 mb-4">
      <h1 className="text-lg font-bold mb-2">Count: {count}</h1>
      <div className="flex space-x-2">
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          disabled={count <= 0}
          className={`${
            count <= 0 ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
          } text-white px-3 py-1 rounded`}
        >
          Decrement
        </button>
        <button
          onClick={reset}
          disabled={count <= 0}
          className={`${
            count <= 0 ? "bg-gray-400" : "bg-gray-500 hover:bg-gray-600"
          } text-white px-3 py-1 rounded`}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

// Parent Counter Container
const MultiCounter = () => {
  const [counters, setCounters] = useState([0, 0, 0]);

  const updateCounter = (index, value) => {
    const newCounters = [...counters];
    newCounters[index] = value;
    setCounters(newCounters);
  };

  return (
    <div className="p-8 bg-gray-100 ">
      <div className="mb-10 flex gap-5 justify-center">
        <div className="text-xl font-semibold">Counter: {counters[2]}</div>
        <div className="text-xl font-semibold">Counter: {counters[1]}</div>
        <div className="text-xl font-semibold">Counter: {counters[0]}</div>
      </div>

      <Counter
        count={counters[0]}
        increment={() => updateCounter(0, counters[0] + 1)}
        decrement={() => updateCounter(0, counters[0] - 1)}
        reset={() => updateCounter(0, 0)}
      />

      <Counter
        count={counters[1]}
        increment={() => updateCounter(1, counters[1] + 1)}
        decrement={() => updateCounter(1, counters[1] - 1)}
        reset={() => updateCounter(1, 0)}
      />

      <Counter
        count={counters[2]}
        increment={() => updateCounter(2, counters[2] + 1)}
        decrement={() => updateCounter(2, counters[2] - 1)}
        reset={() => updateCounter(2, 0)}
      />
    </div>
  );
};

export default MultiCounter;

"use client";

import { useState } from "react";

// Child Container
const Counter = ({ count, increment, decrement, reset, index }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-white p-4 rounded-lg shadow-lg w-1/3 mx-auto mb-8">
      <h1 className="text-3xl font-bold mb-5">
        Counter {index + 1}: {count}
      </h1>
      <div className="flex space-x-4">
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          disabled={count <= 0}
          className={`${
            count <= 0 ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
          } text-white px-4 py-2 rounded`}
        >
          Decrement
        </button>
        <button
          onClick={reset}
          disabled={count <= 0}
          className={`${
            count <= 0 ? "bg-gray-400" : "bg-gray-500 hover:bg-gray-600"
          } text-white px-4 py-2 rounded`}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

// Parent Container
const MultiCounter = () => {
  const [counters, setCounters] = useState([0, 0, 0]);

  const updateCounter = (index, value) => {
    const newCounters = [...counters];
    newCounters[index] = value;
    setCounters(newCounters);
  };

  return (
    <div className="flex flex-col bg-gray-100">
      {/* Top Counter Containers */}
      <div className="flex justify-around items-center mt-5">
        {counters.map((count, index) => (
          <div
            key={index}
            className="text-center text-2xl font-bold p-4 bg-white shadow-lg rounded-lg w-1/4"
          >
            Counter {index + 1}: {count}
          </div>
        ))}
      </div>

      {/* Bottom Counter Containers */}
      <div className="flex flex-col justify-center items-center gap-5 mt-10 mb-10">
        {counters.map((count, index) => (
          <Counter
            key={index}
            count={count}
            increment={() => updateCounter(index, count + 1)}
            decrement={() => updateCounter(index, count - 1)}
            reset={() => updateCounter(index, 0)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default MultiCounter;

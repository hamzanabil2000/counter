"use client";

import { useState, useEffect } from "react";
import randomColor from "randomcolor";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("white");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    if (count === 0) {
      setBgColor("white");
    } else {
      setBgColor(randomColor());
    }
  }, [count]);

  return (
    <div
      className="flex flex-col h-screen"
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="text-3xl font-bold text-center mt-7">A Counter App</h1>
      <div
        className="flex flex-col items-center justify-center text-center"
        style={{ marginTop: "185px" }}
      >
        <h1 className="text-3xl font-bold mb-5">Counter: {count}</h1>
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
    </div>
  );
};

export default Counter;

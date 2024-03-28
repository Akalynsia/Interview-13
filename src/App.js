import React, { useEffect, useState } from "react";

function App() {
  return <CustomProgram />;
}

const half = (number) => number / 2;
const double = (number) => number * 2;
const increment = (number) => number + 1;
const decrement = (number) => number - 1;

const CustomProgram = () => {
  // KODUNUZU BURAYA EKLEYİN
  const [program, setProgram] = useState([]);
  const [startValue, setStartValue] = useState("");
  const [result, setResult] = useState("");

  const addToProgram = (operation) => {
    setProgram([...program, operation]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempResult = parseFloat(startValue);
    program.forEach((operation) => {
      switch (operation) {
        case "half":
          tempResult = half(tempResult);
          break;
        case "double":
          tempResult = double(tempResult);
          break;
        case "increment":
          tempResult = increment(tempResult);
          break;
        case "decrement":
          tempResult = decrement(tempResult);
          break;
        default:
          break;
      }
    });
    setResult(tempResult);
    setStartValue("");
    setProgram([]);
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Calculator</h1>
      <div className="space-x-2 mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => addToProgram("half")}
        >
          Half
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => addToProgram("double")}
        >
          Double
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => addToProgram("increment")}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => addToProgram("decrement")}
        >
          Decrement
        </button>
      </div>
      <ul className="mb-4">
        {program.map((operation, index) => (
          <li key={index}>{operation}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="mb-4">
        <label className="block mb-2">
          Start Value:
          <input
            className="border border-gray-300 px-2 py-1 rounded"
            type="number"
            value={startValue}
            onChange={(e) => setStartValue(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Submit
        </button>
      </form>
      {result && <p className="font-bold">Result: {result}</p>}
    </div>
  );
};

export default App;

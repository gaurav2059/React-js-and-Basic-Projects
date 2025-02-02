import { useState } from "react";

function App() {
  const [color, setColor] = useState("color");

  return (
    <div
      className="w-full h-screen transition-all duration-200"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-white text-center pt-20">Current Color: {color}</h1>

      <div className="flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
          onClick={() => {
            setColor("red");
            console.log("Color changed to red");
          }}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>

        <button
          onClick={() => {
            setColor("blue");
            console.log("Color changed to blue");
          }}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>

        <button
          onClick={() => {
            setColor("green");
            console.log("Color changed to green");
          }}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>

        <button
          onClick={() => {
            setColor("black");
            console.log("Color changed to black");
          }}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "black" }}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

const RandomColor = () => {
  const [type, setType] = useState("HEX");
  const [color, setColor] = useState("#000000");
  function handleHex() {
    let hex = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    setType("HEX");
    setColor(hexColor);
  }

  function handleRGB() {
    let rgbcolor = "rgb";
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    rgbcolor += `(${r},${g},${b})`;
    setColor(rgbcolor);
    setType("RGB");
  }

  function handleRandom() {
    let random = Math.floor(Math.random() * 2 + 1);
    if (random == 1) {
      handleHex();
    } else {
      handleRGB();
    }
  }
  return (
    <div
      style={{
        background: color,
        height: "100vh",
        width: "100vw",
        alignItems: "center",
      }}
    >
      <div className="flex gap-5 justify-center pt-10">
        <button
          onClick={() => handleHex()}
          style={{
            background: "red",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Generate random HEX Color
        </button>
        <button
          onClick={() => handleRGB()}
          style={{
            background: "white",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Generate random RGB Color
        </button>
        <button
          onClick={() => {
            handleRandom();
          }}
          style={{
            background: "blue",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Generate random Color
        </button>
      </div>
      <div className="flex flex-col items-center text-white content-center mt-56">
        <h1 className="text-5xl font-bold mb-24">
          {type == "HEX" ? <h1>Hex Color</h1> : <h1>Rgb Color</h1>}
        </h1>
        <h1 className="text-6xl font-bold ">{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;

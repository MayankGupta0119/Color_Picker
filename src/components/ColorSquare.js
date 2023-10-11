// ColorSquare.js
import React, { useState } from "react";
import "./colorsquare.css";

export default function ColorSquare(props) {
  const { color, toggleColorPicker } = props;
  const [active1, setActive1] = useState(true);

  const handleClick = () => {
    document.body.style.backgroundColor = color;
    setActive1(!active1);
    toggleColorPicker(!active1);
  };

  return (
    <div
      className="square"
      active1={active1}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
}

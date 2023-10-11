// ColorPicker.js
import React, { useState } from "react";
import ColorSquare from "./ColorSquare";
import "./colorpicker.css";

export default function ColorPicker(props) {
  const { colors } = props;
  const [active, setActive] = useState(false);

  const toggleColorPicker = (isActive) => {
    setActive(isActive);
  };

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="con1">
        {active ? (
          <div className="color-picker">
            {colors.map((color, index) => (
              <ColorSquare
                color={color}
                key={index}
                toggleColorPicker={toggleColorPicker}
              />
            ))}
          </div>
        ) : null}
        <button onClick={handleActive}>Pick a Color</button>
      </div>
    </>
  );
}

import React from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";

function App() {
  const colors = [
    "red",
    "rgba(2,254,1,255)",
    "blue",
    "yellow",
    "#ff00fe",
    "#00fefe",
    "#fea500",
    "#81007f",
    "#ffc0cb",
    "green",
    "#fe6245",
    "#01cdd1",
    "#8b4512",
    "#ff8b00",
    "#4682b4",
    "#fed700",
  ];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;

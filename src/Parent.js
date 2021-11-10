import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, serChildrenColor] = useState("#FFF");

  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    serChildrenColor(newChildColor)
  }
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color = {childrenColor} onChangeColor={handleChangeColor} />
      <Child color = {childrenColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;

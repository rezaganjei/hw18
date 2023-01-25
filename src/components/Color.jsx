import React, { useState } from "react";
import classes from "./Color.module.css";

const Color = () => {
  const [data, setData] = useState([]);
  const clickHandler = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const newColor = {
      width: "200px",
      height: "60px",
      backgroundColor: `rgb(${red},${green},${blue})`,
    };
    setData((prevData) => {
      return [...prevData, newColor];
    });
  };
  return (
    <>
      <button className={classes.addBtn} onClick={clickHandler}>
        Add Color
      </button>
      {data.map((item) => {
        return (
          <div style={item} key={Math.random()}>
            {item.backgroundColor}
          </div>
        );
      })}
    </>
  );
};

export default Color;

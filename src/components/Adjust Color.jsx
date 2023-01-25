import React, { useState } from "react";
import classes from "./AdjustColor.module.css";

const AdjustColor = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const redIncreaseHandler = () => {
    if (red < 255) {
      setRed((prev) => {
        return prev + 1;
      });
    }
  };
  const redDecreaseHandler = () => {
    if (red > 0) {
      setRed((prev) => {
        return prev - 1;
      });
    }
  };
  const greenIncreaseHandler = () => {
    if (green < 255) {
      setGreen((prev) => {
        return prev + 1;
      });
    }
  };
  const greenDecreaseHandler = () => {
    if (green > 0) {
      setGreen((prev) => {
        return prev - 1;
      });
    }
  };
  const blueIncreaseHandler = () => {
    if (blue < 255) {
      setBlue((prev) => {
        return prev + 1;
      });
    }
  };
  const blueDecreaseHandler = () => {
    if (blue > 0) {
      setBlue((prev) => {
        return prev - 1;
      });
    }
  };
  return (
    <>
      <div className={classes.colors}>
        Red
        <button className={classes.btn} onClick={redIncreaseHandler}>
          Increase Red
        </button>
        <button className={classes.btn} onClick={redDecreaseHandler}>
          Decrease Red
        </button>
      </div>
      <div className={classes.colors}>
        Green
        <button className={classes.btn} onClick={greenIncreaseHandler}>
          Increase Green
        </button>
        <button className={classes.btn} onClick={greenDecreaseHandler}>
          Decrease Green
        </button>
      </div>
      <div className={classes.colors}>
        Blue
        <button className={classes.btn} onClick={blueIncreaseHandler}>
          Increase Blue
        </button>
        <button className={classes.btn} onClick={blueDecreaseHandler}>
          Decrease Blue
        </button>
      </div>
      <div
        style={{
          width: "60px",
          height: "60px",
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></div>
    </>
  );
};
export default AdjustColor;

import React from "react";
import "./Square.css";

export default function Square(props) {
  // const [value, setValue] = useState(null);

  // function handleClick() {
  //   setValue("X");
  // }

  return (
    <button onClick={props.onSquareClick} className="square glow-on-hover">
      {props.value}
    </button>
  );
}

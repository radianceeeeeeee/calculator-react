import React, { useState } from "react";

export default function Calculator() {
  const [equation, setEquation] = useState("0");
  const [answer, setAnswer] = useState(0);

  function pressButton(value) {
    let newEquation;

    switch (value) {
      case "C":
        if (equation.length === 1) {
          newEquation = "0";
          break;
        }
        newEquation = equation.substring(0, equation.length - 1);
        break;
      case "AC":
        if (equation === "0") {
          setAnswer(0);
        }
        newEquation = "0";
        break;
      case "Ans":
        if (
          answer === 0 ||
          answer === "Invalid equation" ||
          answer === "NaN" ||
          answer === "Infinity" ||
          answer === "-Infinity"
        ) {
          newEquation = equation;
          break;
        }

        if (equation !== "0") {
          newEquation = equation + answer.toString();
        } else {
          newEquation = answer.toString();
        }
        break;
      case ".":
        if (equation !== "0") {
          newEquation = equation + value;
        } else {
          newEquation = "0.";
        }
        break;
      case "00":
        if (equation !== "0") {
          newEquation = equation + value;
        } else {
          newEquation = "0";
        }
        break;
      case "=":
        newEquation = equation;
        let newAnswer;

        try {
          newAnswer = eval(newEquation);
        } catch (e) {
          newAnswer = "Invalid equation";
        }
        setAnswer(newAnswer.toString());
        break;
      default:
        if (equation === "0") {
          if (
            value === "/" ||
            value === "*" ||
            value === "+" ||
            value === "-"
          ) {
            newEquation = equation + value;
            break;
          }
          newEquation = value;
          break;
        }
        newEquation = equation + value;
        break;
    }
    setEquation(newEquation);
  }

  return (
    <div>
      <div className="Screen">
        <div className="Equation">{equation}</div>
        <div className="Answer">{answer}</div>
      </div>
      <div className="Grid">
        <div className="Row">
          <button className="Button" onClick={() => pressButton("C")}>
            C
          </button>
          <button className="Button" onClick={() => pressButton("AC")}>
            AC
          </button>
          <button className="Button" onClick={() => pressButton("Ans")}>
            Ans
          </button>
          <button className="Button" onClick={() => pressButton("/")}>
            /
          </button>
        </div>
        <div className="Row">
          <button className="Button" onClick={() => pressButton("7")}>
            7
          </button>
          <button className="Button" onClick={() => pressButton("8")}>
            8
          </button>
          <button className="Button" onClick={() => pressButton("9")}>
            9
          </button>
          <button className="Button" onClick={() => pressButton("*")}>
            *
          </button>
        </div>
        <div className="Row">
          <button className="Button" onClick={() => pressButton("4")}>
            4
          </button>
          <button className="Button" onClick={() => pressButton("5")}>
            5
          </button>
          <button className="Button" onClick={() => pressButton("6")}>
            6
          </button>
          <button className="Button" onClick={() => pressButton("-")}>
            -
          </button>
        </div>
        <div className="Row">
          <button className="Button" onClick={() => pressButton("3")}>
            3
          </button>
          <button className="Button" onClick={() => pressButton("2")}>
            2
          </button>
          <button className="Button" onClick={() => pressButton("1")}>
            1
          </button>
          <button className="Button" onClick={() => pressButton("+")}>
            +
          </button>
        </div>
        <div className="Row">
          <button className="Button" onClick={() => pressButton("0")}>
            0
          </button>
          <button className="Button" onClick={() => pressButton("00")}>
            00
          </button>
          <button className="Button" onClick={() => pressButton(".")}>
            .
          </button>
          <button className="Button" onClick={() => pressButton("=")}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

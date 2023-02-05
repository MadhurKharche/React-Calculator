import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const backspace = (_e) => {
    setResult(result.slice(0, -1));
  };

  const clear = (_e) => {
    setResult("");
  };

  const calculate = (_e) => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Syntax Error");
    }
  };

  return (
    <>
      <div className="dabba">
        <form>
          <input className="textinp" type="text" value={result} />
        </form>
        <div className="keypad">
          <button onClick={clear} className="highlight span bn" id="clear">
            Clear
          </button>
          <button onClick={backspace} className="highlight bn" id="backspace">
            C
          </button>
          <button name="/" className="highlight bn" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" className="bn" onClick={handleClick}>
            7
          </button>
          <button name="8" className="bn" onClick={handleClick}>
            8
          </button>
          <button name="9" className="bn" onClick={handleClick}>
            9
          </button>
          <button name="*" className="highlight bn" onClick={handleClick}>
            &times;
          </button>
          <button name="4" className="bn" onClick={handleClick}>
            4
          </button>
          <button name="5" className="bn" onClick={handleClick}>
            5
          </button>
          <button name="6" className="bn" onClick={handleClick}>
            6
          </button>
          <button name="-" className="highlight bn" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" className="bn" onClick={handleClick}>
            1
          </button>
          <button name="2" className="bn" onClick={handleClick}>
            2
          </button>
          <button name="3" className="bn" onClick={handleClick}>
            3
          </button>
          <button name="+" className="highlight bn" onClick={handleClick}>
            +
          </button>
          <button name="0" className="bn" onClick={handleClick}>
            0
          </button>
          <button name="." className="bn" onClick={handleClick}>
            .
          </button>
          <button onClick={calculate} className="highlight bn span1">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;

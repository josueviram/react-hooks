import React, { useState, useCallback, useEffect } from "react";
import "../../App.css";

function UseCallbackExample1() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunction was changed.");
  }, [someFunction]);

  return (
    <div className="App">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <hr />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}

export default UseCallbackExample1;

import React, {useState, useMemo} from 'react';
import '../App.css';

const hardCalculate = (number: number) => {
  console.log("difficult calculate");
  for (let i=0; i < 9999999; i++) {}
  return number + 10000;
}

const easyCalculate = (number: number) => {
  console.log("easy calculate");
  return number + 1;
}

function Example1() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber)
  }, [hardNumber]);
  const easySum = easyCalculate(easyNumber);

  return (
    <div className="App">
      <h3>Difficult calculator</h3>
      <input type="number" value={hardNumber} onChange={(e) => setHardNumber(parseInt(e.target.value))} />
      <span> + 10000 = {hardSum} </span>

      <h3>Easy calculator</h3>
      <input type="number" value={easyNumber} onChange={(e) => setEasyNumber(parseInt(e.target.value))} />
      <span> + 10000 = {easySum} </span>
    </div>
  );
}

export default Example1;

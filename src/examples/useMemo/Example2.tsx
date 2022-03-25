import React, {useState, useMemo, useEffect} from 'react';
import '../App.css';

function Example2() {
  const [number, setNumber] = useState(0);
  const [isUS, setIsUS] = useState(true);

  // const location: string = isUS ? 'United State' : 'Oversea';
  const location = useMemo(() => {
    return {
      country: isUS ? 'United States' : 'Oversea',
    }
  }, [isUS])

  useEffect(() => {
    console.log("useEffect called.")
  }, [location])

  return (
    <div className="App">
      <h3>How many times do you eat?</h3>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <hr />
      <h3>Where are you?</h3>
      <p>Country: {location.country}</p>
      <button onClick={() => setIsUS(!isUS)}>Get on the plane!</button>
    </div>
  );
}

export default Example2;

import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [height, setheight] = useState();
  const [weight, setweight] = useState();
  const [bmi, setbmi] = useState(0);
  
  useEffect(() => {
    setbmi(weight / (height * height));
  }, [height, weight]);


  return (
    <div className="App">
     <form action="" className="">
          <label htmlFor="">
            enter weight:
            <input
              type="text"
              className=""
              placeholder="enter weight"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="">
            enter height:
            <input
              type="text"
              className=""
              placeholder="enter height"
              value={height}
              onChange={(e) => setheight(e.target.value)}
            />
          </label>

          <div className="">bmi :  {bmi}</div>
        </form>
    </div>
  );
}

export default App;

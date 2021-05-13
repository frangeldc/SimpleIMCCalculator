import { useState } from "react";
import "./Calculator.css";

const Calculator = (props) => {
  const [height, setHeight] = useState(1.7);
  const [weight, setWeight] = useState(80);

  let IMC = weight / (height * height);

  const heightChangeHandler = (event) => {
    setHeight(event.target.value);
  };

  const weightChangeHandler = (event) => {
    setWeight(event.target.value);
  };

  return (
    <div>
      <div className="Container">
        <div>
          <p>Height (m):</p>
          <form>
            <input
              type="text"
              placeholder="(ex:1.70)"
              onChange={heightChangeHandler}
            />
          </form>
        </div>
        <div>
          <p>Weight (kg):</p>
          <form>
            <input
              type="text"
              placeholder="(ex: 80)"
              onChange={weightChangeHandler}
            />
          </form>
        </div>
        <div className="Result">
          <p>Your height: {height}m</p>
          <p>Your weight: {weight}kg</p>
          <p>Your IMC: {IMC.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

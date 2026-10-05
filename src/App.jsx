import { useState } from "react";
import "./App.css";

function App() {
  const [step, setstep] = useState(1);
  const array = ["Step 1: learn React", 
    "Step 2: Earn for Future", 
    "Step 3: Invest Your Income"
  ];

  return (
    <div className="container">
      <Steps array={array} step={step} />
      <h1>{array[step - 1]}</h1>
      <Button step={step} setstep={setstep} />
    </div>
  );
}

export default App;

function Steps({ step }) {
  return (
    <div className="step">
      <span className={step == 1 ? "selected" : ""}>1</span>
      <span className={step == 2 ? "selected" : ""}>2</span>
      <span className={step == 3 ? "selected" : ""}>3</span>
    </div>
  );
}

function Button({ setstep, step }) {
  return (
    <div className="buttons">
      <button onClick={() => setstep(step == 1 ? 3 : step - 1)}>Previews</button>
      <button onClick={() => setstep(step == 3 ? 1 : step + 1)}>Next</button>
    </div>
  );
}

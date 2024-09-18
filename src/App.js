import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Step />
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(0);
  const [counts, setCount] = useState(step);
  const date = new Date("18 september 2024");
  date.setDate(date.getDate() + counts);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <input
          value={step}
          onClick={(e) => setStep(+e.target.value)}
          onChange={(e) => setStep(+e.target.value)}
          type="range"
          min={0}
          max={10}
        />
        <p>{step}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button onClick={() => setCount((currentCount) => currentCount - step)}>
          -
        </button>
        <input value={counts} onChange={(e) => setCount(+e.target.value)} />
        <button onClick={() => setCount((currentCount) => currentCount + step)}>
          +
        </button>
      </div>
      <p>
        {` ${Math.abs(counts)} ${
          counts < 0 ? "day ago" : "DAYS FROM NOW IS"
        }  ${date.toDateString()}`}
      </p>
      <button
        onClick={() => {
          setCount(0);
          setStep(0);
        }}
      >
        Reset
      </button>
    </>
  );
}

import { useState } from "react"
import './index.css';


export default function App() {
  return <div className="App">
    <Count />
  </div>
}


function Count() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  function incStep() {
    setStep(s => s + 1)
  }
  function decStep() {
    if (step > 1) setStep(s => s - 1)
  }
  function incCount() {
    setCount(c => c + step)
  }
  function decCount() {
    setCount(c => c - step)
  }
  const date = new Date();
  let day = date.getDate();
  date.setDate(day + count)


  return (
    <>
      <label for="step">Step</label>
      <input type="range" name="step" min="1" max="100" step='1' onChange={(e) => setStep(Number(e.target.value))}></input ><label for="step">{step}</label>
      <br />

      {/* 
      <button onClick={decStep}>-</button>
      <span>Step: {step}</span>
      <button onClick={incStep}>+</button> */}

      <br />

      <button onClick={decCount}>-</button>
      <span>Count: {count}</span>
      <button onClick={incCount}>+</button>

      <br />
      {
        count === 0
          ? <p>Today is {date.toDateString()} </p>
          : count > 0
            ?
            <p>{count} days from today is {date.toDateString()} </p>
            :
            <p>{Math.abs(count)} days ago was {date.toDateString()} </p>
      }


    </>)
}

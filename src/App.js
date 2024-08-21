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

  // function incStep() {
  //   setStep(s => s + 1)
  // }
  // function decStep() {
  //   if (step > 1) setStep(s => s - 1)
  // }
  function incCount() {
    setCount(c => c + step)
  }
  function decCount() {
    setCount(c => c - step)
  }
  const date = new Date();
  let day = date.getDate();
  date.setDate(day + count)

  function onReset() {
    setCount(0)
    setStep(1)

  }

  return (
    <>
      <div>
        <div>
          <label for="step">Step</label>
          <input type="range" name="step" min="1" max="10" step='1' value={step} onChange={(e) => setStep(Number(e.target.value))} />
          <label for="step">{step}</label>

          {/*  Old version of Step Input
      <button onClick={decStep}>-</button>
      <span>Step: {step}</span>
      <button onClick={incStep}>+</button> */}
        </div>


        <div>
          <label for='count'>Count</label>
          <button onClick={decCount}>-</button>
          <input name='count' type="number" value={count} onChange={e => setCount(Number(e.target.value))} />
          {/*  Old version of Count Input */}
          {/* <span>Count: {count}</span> */}
          <button onClick={incCount}>+</button>
        </div>
        {
          count === 0
            ? <p><span> Today is {date.toDateString()} </span></p>
            : count > 0
              ?
              <p><span>{count} days from today is {date.toDateString()}</span> </p>
              :
              <p><span>{Math.abs(count)} days ago was {date.toDateString()}</span> </p>
        }

        {(count !== 0 || step !== 1) ?
          <div>
            <button onClick={onReset}>Reset</button>
          </div> : null}

      </div>

    </>)
}

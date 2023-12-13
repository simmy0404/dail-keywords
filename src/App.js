import { keywords } from "./config";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [key, setKey] = useState("");
  const [count, setCount] = useState(0);
  const [isTimesUp, setIsTimesUp] = useState(true);

  function setTimesUpFunc() {
    setIsTimesUp(false);
    setTimeout(() => {
      setIsTimesUp(true);
    }, 2000);
  }

  function changeInputValue(keyClicked) {
    if (key === keyClicked.key) {
      if (isTimesUp) {
        setCount(1);
        setValue(value + keyClicked.keyData[0]);
      } else {
        let idx;
        if ((count + 1) % keyClicked.keyData.length === 0) {
          idx = keyClicked.keyData.length - 1;
        } else {
          idx = ((count + 1) % keyClicked.keyData.length) - 1;
        }
        setCount(count + 1);
        let myvalue = value.slice(0, value.length - 1);
        setValue(myvalue + keyClicked.keyData[idx]);

      }
      setTimesUpFunc();
    } else {
      setValue(value + keyClicked.keyData[0]);
      setKey(keyClicked.key);
      setCount(1);
    }
  }

  function clearMsg(){
    let myvalue = value.slice(0, value.length - 1);
    setValue(myvalue);
  }

  function addSpace(){
    setValue(value + " ")
  }

  return (
    <div className="dail-wrapper">
      <h1>Old Mobile Dailpad</h1>
      <input className="dail-input" type="text" value={value} placeholder="Type your msg here..." />
      <div className="dail-box">
        {keywords.map((val) => {
          return (
            <div
              className="key-wrapper"
              onClick={() => {
                changeInputValue(val);
              }}
            >
              <div className="key-value">{val.key}</div>
              <div className="key-data">{val.keyData}</div>
            </div>
          );
        })}
        <button  className="dail-space" onClick={()=>setValue(value+",")}>,</button>
        <button  className="dail-space" onClick={addSpace}>Space</button>
      <button  className="dail-clear" onClick={clearMsg}>clear</button>
      </div>

      <div className="dail-btn">

      </div>

    </div>
  );
}

export default App;

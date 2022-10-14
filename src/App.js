import { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from './components/AddIcon';
import Text from './components/Text';
import Operator from './components/Operator';
import './index.css'

function App() {
  const [calculation, setCalculation] = useState([0, "+", 0])
  const [result, setResult] = useState("0")
  
  function addNewCalculation(operator, number) {
    setCalculation(old => [...old, operator])
    setCalculation(old => [...old, 0])
  }

  function showResult() {
    setResult(eval(calculation.join("")).toLocaleString())
  }

  return (
    <div className='main'>
      <div className='entries'>
        {
          calculation.map((calc, index) => {
            if(['+', '-', '*', '/'].includes(calc)) {
              return <Operator text={calc} id={index} setCalc={setCalculation} showRes={showResult}/>
            } else {
              return <Text number={calc} index={index} setCalc={setCalculation} showRes={showResult}/>
            }
          })
        }
        <Button startIcon={<AddIcon/>} style={{color: 'black'}} onClick={() => addNewCalculation("+", 0)}>Add a new input</Button>

      </div>

      <Button onClick={showResult} style={{fontSize: '1.5em'}} variant="outlined">Calculate</Button>
      
      <p id="result">{result}</p>
    </div>
  );
}

export default App;
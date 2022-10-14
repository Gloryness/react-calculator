import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from './components/AddIcon';
import Operator from './components/Operator';
import './index.css'

function App() {
  return (
    <div className='entries'>
      <TextField placeholder="0" width="40"/>
      <Operator text="-"/>
      <TextField placeholder="0" width="40"/>
      <Button startIcon={<AddIcon/>} style={{color: 'black'}}>Add a new input</Button>

    </div>
  );
}

export default App;
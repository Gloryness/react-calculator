import { useState } from 'react'
import TextField from '@mui/material/TextField';

export default function Text({ number, index, setCalc, showRes }) {
    const [value, setValue] = useState(number)

    function handleInput(event) {
        setValue(event.target.value)

        setCalc(old => {
          old[index] = parseInt(event.target.value)
          return old
        })

        showRes()
      }

    return (
        <TextField key={index} onChange={handleInput}
                   placeholder="0" value={value} width="40" type="number" variant="standard"/>
    )
}

import { useState } from 'react'
import TextField from '@mui/material/TextField';

export default function Text({ number, index, setCalc, showRes }) {
    const [value, setValue] = useState(number)

    function handleInput(event) {
        if (event.target.value !== "") {
            setValue(event.target.value)

            setCalc(old => {
            old[index] = parseFloat(event.target.value)
            return old
            })

            showRes()
        } else {
            setValue(old => old)
        }
      }

    return (
        <TextField key={index} onChange={handleInput}
                   placeholder="0" value={value} width="40" type="number" variant="standard"/>
    )
}

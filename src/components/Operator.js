import { useState } from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { v4 as uuidv4 } from 'uuid';

export default function Operator({ text, id, setCalc, showRes }) {
    const [value, setValue] = useState(text);

    const handleChange = (event) => {
        setValue(event.target.value);

        setCalc(old => {
            old[id] = event.target.value
            return old
        })

        showRes()
    };

    return (
        <Select key={uuidv4()} value={value} label="Operator" onChange={handleChange}>
            <MenuItem value="+" key={uuidv4()}>+</MenuItem>
            <MenuItem value="-" key={uuidv4()}>-</MenuItem>
            <MenuItem value="*" key={uuidv4()}>*</MenuItem>
            <MenuItem value="/" key={uuidv4()}>/</MenuItem>
        </Select>
    )
}

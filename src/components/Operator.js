import React from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { v4 as uuidv4 } from 'uuid';

export default function Operator({ text }) {
    const [value, setValue] = React.useState(text);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        // <Button style={{fontSize: '2em', color: 'black', borderColor: 'black', padding: 0}} variant="outlined">
        //     {text}
        // </Button>
        <Select id={uuidv4()} value={value} label="Operator" onChange={handleChange}>
            <MenuItem value="+">+</MenuItem>
            <MenuItem value="-">-</MenuItem>
            <MenuItem value="*">*</MenuItem>
            <MenuItem value="/">/</MenuItem>
        </Select>
    )
}

import { useState } from 'react';
import {
    TextField,
    MenuItem,
} from '@mui/material';

export default function SelectField() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="p-1">
            <label htmlFor="select-field" className="block text-sm font-medium text-gray-700">
                Select field
            </label>
            <TextField
                id="select-field"
                select
                value={value}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                className="mt-1"
                helperText="Helper text"
                size='small'
                disabled={true}
            >
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
            </TextField>
        </div>
    );
}
import { TextField } from '@mui/material';
import { useState } from 'react';

export default function NumberField() {
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="p-1">
            <label htmlFor="number-field" className="block text-sm font-medium text-gray-700">
                Number field
            </label>
            <TextField
                id="number-field"
                type="number"
                value={value}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                className="mt-1"
                helperText="Helper text"
                size='small'
                disabled={true}
            />
        </div>
    );
}
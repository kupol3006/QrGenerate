import { useState } from 'react';
import { TextField, MenuItem } from '@mui/material';

export default function SelectField({ form }) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="p-4">
            <label htmlFor="select-field" className="block text-sm font-medium text-gray-700">
                {form?.label || 'Select field'} {form?.required === true && <span className='text-black'>*</span>}
            </label>
            <TextField
                id="select-field"
                select
                value={value}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                className="mt-1"
                helperText={form?.helperText || 'Helper text'}
                size='small'
                disabled={false}
            >
                {form?.options?.length > 0 ? (
                    form.options.map((option, index) => (
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>
                    ))
                ) : (
                    <MenuItem value=''>None</MenuItem>
                )}
            </TextField>
        </div>
    );
}
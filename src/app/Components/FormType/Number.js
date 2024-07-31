import { TextField } from '@mui/material';
import { stringify } from 'postcss';
import { useState } from 'react';

export default function NumberField({ form }) {
    const [value, setValue] = useState(null);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="p-4">
            <label htmlFor="number-field" className="block text-sm font-medium text-gray-700">
                {form?.label || 'Number field'} {form?.required === true && <span className='text-black'>*</span>}
            </label>
            <TextField
                id="number-field"
                type="number"
                value={value}
                onChange={handleChange}
                placeholder={`${form?.placeholder}` || ''}
                fullWidth
                variant="outlined"
                className="mt-1"
                helperText={form?.helperText || 'Helper text'}
                size='small'
                disabled={false}
                required={form?.required || false}
            />
        </div>
    );
}
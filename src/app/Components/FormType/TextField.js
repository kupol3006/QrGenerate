import { TextField } from '@mui/material';
import { useState } from 'react';

export default function MyTextField({ form, value, onChange, error, helperText }) {
    return (
        <div className="p-4">
            <label htmlFor="text-field" className="block text-sm font-medium text-gray-700">
                {form?.label || 'Text field'} {form?.required === true && <span className='text-black'>*</span>}
            </label>
            <TextField
                id="text-field"
                type="text"
                value={value}
                onChange={onChange}
                placeholder={form?.placeholder || ''}
                fullWidth
                variant="outlined"
                className="mt-1"
                helperText={error ? helperText : form?.helperText || 'Helper text'}
                size='small'
                error={!!error}
                disabled={false}
                required={form?.required || false}
            />
        </div>
    );
}

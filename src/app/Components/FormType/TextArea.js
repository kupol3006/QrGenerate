import { useState } from 'react';
import { TextField } from '@mui/material';

export default function TextArea({ form, value, onChange, error, helperText }) {
    return (
        <div className="p-4">
            <label htmlFor="text-area" className="block text-sm font-medium text-gray-700">
                {form?.label || 'Text Area'} {form?.required === true && <span className='text-black'>*</span>}
            </label>
            <TextField
                id="text-area"
                placeholder="Value here..."
                multiline
                rows={2} // Chỉnh số dòng hiển thị ban đầu ở đây
                value={value}
                onChange={onChange}
                fullWidth
                variant="outlined"
                className="mt-1"
                helperText={error ? helperText : form?.helperText || 'Helper text'}
                size='small'
                error={!!error}
            />
        </div>
    );
}

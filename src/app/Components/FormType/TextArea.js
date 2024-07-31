import { useState } from 'react';
import { TextField } from '@mui/material';

export default function TextArea({ form }) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="p-4">
            <label htmlFor="text-area" className="block text-sm font-medium text-gray-700">
                {form?.label || 'Text Area'}
            </label>
            <TextField
                id="text-area"
                placeholder="Value here..."
                multiline
                rows={2} // Chỉnh số dòng hiển thị ban đầu ở đây
                value={value}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                className="mt-1"
                helperText={form?.helperText || 'Helper text'}
                size='small'
                disabled={true}
            />
        </div>
    );
}
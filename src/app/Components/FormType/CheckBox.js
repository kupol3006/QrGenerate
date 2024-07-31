import { useState } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

export default function CheckboxField({ form }) {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className="p-6">
            <FormControlLabel
                control={
                    <Checkbox
                        checked={form?.checked || false}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        size='small'
                        disabled={false}
                        required={form?.required || false}
                    />
                }
                label={form?.label || 'Checkbox field'}
            />
            <p className="text-sm text-gray-500">{form?.helperText || "Helper text"}</p>
        </div>
    );
}
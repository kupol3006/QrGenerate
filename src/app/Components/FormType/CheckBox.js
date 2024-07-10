import { useState } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

export default function CheckboxField() {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className="p-1">
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        size='small'
                        disabled={true}
                    />
                }
                label="Checkbox field"
            />
            <p className="text-sm text-gray-500">Helper text</p>
        </div>
    );
}
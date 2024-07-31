import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DateField({ form }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleChange = (newValue) => {
        setSelectedDate(newValue);
    };

    return (
        <div className="p-4">
            <label htmlFor="date-field" className="block text-sm font-medium text-gray-700">
                {form?.label || 'Date field'}
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    id="date-field"
                    value={selectedDate}
                    onChange={handleChange}
                    disabled={false}
                    slots={{
                        textField: (params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                className="mt-1"
                                helperText={form?.helpertext || 'Pick a date'}
                                fullWidth
                                size='small'
                            />
                        ),
                    }}
                />
            </LocalizationProvider>
        </div>
    );
}

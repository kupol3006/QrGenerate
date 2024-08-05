import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function DateField({ form, value, onChange, error, helperText }) {
    // Ensure the value is a valid date or null
    const dateValue = value ? dayjs(value) : null;

    return (
        <div className="p-4">
            <label htmlFor="date-field" className="block text-sm font-medium text-gray-700">
                {form?.label || 'Date field'} {form?.required === true && <span className='text-black'>*</span>}
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    id="date-field"
                    value={dateValue}
                    onChange={onChange}
                    disabled={false}
                    slots={{
                        textField: (params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                className="mt-1"
                                helperText={error ? helperText : form?.helperText || 'Pick a date'}
                                fullWidth
                                size='small'
                                error={!!error}
                            />
                        ),
                    }}
                />
            </LocalizationProvider>
        </div>
    );
}

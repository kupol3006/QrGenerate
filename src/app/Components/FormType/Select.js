import { TextField, MenuItem } from '@mui/material';

export default function SelectField({ form, value, onChange, error, helperText }) {
    return (
        <div className="p-4">
            <label htmlFor="select-field" className="block text-sm font-medium text-gray-700">
                {form?.label || 'Select field'} {form?.required === true && <span className='text-red-600'>*</span>}
            </label>
            <TextField
                id="select-field"
                select
                value={value}
                onChange={onChange}
                fullWidth
                variant="outlined"
                className="mt-1"
                helperText={error ? helperText : form?.helperText || 'Helper text'}
                size='small'
                error={error}
                disabled={false}
                required={form?.required || false}
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

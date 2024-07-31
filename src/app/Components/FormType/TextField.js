import { TextField } from '@mui/material';

export default function MyTextField({ form }) {

    return (
        <div className="p-4">
            <label htmlFor="my-text-field" className="block text-sm font-medium text-gray-700">
                {form?.label || 'My Text Field'} {form?.required === true && <span className='text-black'>*</span>}
            </label>
            <TextField
                id="my-text-field"
                placeholder={`${form?.placeholder}` || 'Value here...'}
                fullWidth
                variant="outlined"
                className="mt-1"
                helperText={form?.helperText || 'Helper text'}
                size='small'
                disabled={false}
            />
        </div>
    );
}
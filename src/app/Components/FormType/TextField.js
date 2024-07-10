import { TextField } from '@mui/material';

export default function MyTextField() {
    return (
        <div className="p-1">
            <label htmlFor="my-text-field" className="block text-sm font-medium text-gray-700">
                Text field
            </label>
            <TextField
                id="my-text-field"
                placeholder="Value here..."
                fullWidth
                variant="outlined"
                className="mt-1"
                helperText="Helper text"
                size='small'
                disabled={true}
            />
        </div>
    );
}
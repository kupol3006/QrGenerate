import { FormControlLabel, Checkbox, FormHelperText, FormControl } from '@mui/material';

export default function CheckBox({ form, checked, onChange, error, helperText }) {
    return (
        <div className="p-6">
            <FormControl error={error} component="fieldset">
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={onChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                            size='small'
                            disabled={false}
                            required={form?.required || false}
                        />
                    }
                    label={form?.label || 'Checkbox field'}
                />
                <FormHelperText>{error ? helperText : form?.helperText || 'Helper text'}</FormHelperText>
            </FormControl>
        </div>
    );
}

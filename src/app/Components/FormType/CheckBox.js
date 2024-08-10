import React from 'react';
import { FormControlLabel, Checkbox, FormHelperText, FormControl, Typography } from '@mui/material';

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
                        />
                    }
                    label={
                        <span>
                            {form?.label || 'Checkbox field'}
                            {form?.required && (
                                <Typography component="span" className='ml-1 text-red-600'>
                                    *
                                </Typography>
                            )}
                        </span>
                    }
                />
                <FormHelperText>{error ? helperText : form?.helperText || 'Helper text'}</FormHelperText>
            </FormControl>
        </div>
    );
}

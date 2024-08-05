'use client';
import React, { useState } from 'react';
import MyTextField from '../Components/FormType/TextField';
import NumberField from '../Components/FormType/Number';
import DateField from '../Components/FormType/DateField';
import SelectField from '../Components/FormType/Select';
import CheckBox from '../Components/FormType/CheckBox';
import TextArea from '../Components/FormType/TextArea';
import { useSelector } from 'react-redux';
import { Button, Alert } from '@mui/material';

export default function Form() {
    const formElements = useSelector((state) => state.formBuilder.formElement);

    // Initialize state for form values and errors
    const initialFormState = formElements.reduce((acc, form) => {
        acc[form.id] = form.type === 'checkbox' ? false : '';
        return acc;
    }, {});

    const initialErrorState = formElements.reduce((acc, form) => {
        acc[form.id] = '';
        return acc;
    }, {});

    const [formValues, setFormValues] = useState(initialFormState);
    const [formErrors, setFormErrors] = useState(initialErrorState);

    const handleInputChange = (id, value) => {
        setFormValues(prevState => ({
            ...prevState,
            [id]: value
        }));
        setFormErrors(prevState => ({
            ...prevState,
            [id]: ''
        }));
    };

    const handleSubmit = () => {
        const errors = {};
        formElements.forEach(form => {
            if (form.required && !formValues[form.id]) {
                errors[form.id] = `${form.label || 'This field'} is required`;
            }
        });

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            console.log('Form values:', formValues);
            // You can add further logic to handle form submission, like sending data to a server.
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-white">
            <div className='w-full h-[60px] bg-white shadow flex justify-center items-center'>
                <h1 className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text hover:cursor-pointer">
                    FormName
                </h1>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg shadow-blue-700 w-[50%] mt-[50px] mb-[50px]">
                {formElements.map((form) => {
                    const error = formErrors[form.id];
                    switch (form.type) {
                        case 'text':
                            return <MyTextField key={form.id} form={form} value={formValues[form.id]} onChange={(e) => handleInputChange(form.id, e.target.value)} error={!!error} helperText={error} />;
                        case 'number':
                            return <NumberField key={form.id} form={form} value={formValues[form.id]} onChange={(e) => handleInputChange(form.id, e.target.value)} error={!!error} helperText={error} />;
                        case 'date':
                            return <DateField key={form.id} form={form} value={formValues[form.id]} onChange={(newValue) => handleInputChange(form.id, newValue)} error={!!error} helperText={error} />;
                        case 'select':
                            return <SelectField key={form.id} form={form} value={formValues[form.id]} onChange={(e) => handleInputChange(form.id, e.target.value)} error={!!error} helperText={error} />;
                        case 'checkbox':
                            return <CheckBox key={form.id} form={form} checked={formValues[form.id]} onChange={(e) => handleInputChange(form.id, e.target.checked)} error={!!error} helperText={error} />;
                        case 'textarea':
                            return <TextArea key={form.id} form={form} value={formValues[form.id]} onChange={(e) => handleInputChange(form.id, e.target.value)} error={!!error} helperText={error} />;
                        default:
                            return null;
                    }
                })}
                {Object.keys(formErrors).length > 0 && (
                    <Alert severity="error" className="mt-4">
                        Please fill out all required fields.
                    </Alert>
                )}
                <div className='flex justify-center'>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ marginTop: '10px', width: '95%', backgroundColor: '#111827', '&:hover': { backgroundColor: '#111827' } }}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}

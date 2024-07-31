import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import CheckBox from "../FormType/CheckBox";
import DateField from "../FormType/DateField";
import NumberField from "../FormType/Number";
import MyTextField from "../FormType/TextField";
import SelectField from "../FormType/Select";
import TextArea from "../FormType/TextArea";

const FormPreview = ({ open, handleClose }) => {
    const formElements = useSelector((state) => state.formBuilder.formElement);

    return (
        <Dialog open={open} onClose={handleClose} sx={{ height: 'calc(100vh - 10%)' }}>

            <DialogTitle className="bg-gray-200">
                <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Form preview</span>
                    <IconButton onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </div>
            </DialogTitle>
            <DialogContent
                className="bg-[url(https://upload.wikimedia.org/wikipedia/commons/9/9f/Graph-paper.svg)]"
                style={{ backgroundSize: '10px 10px' }}
            >
                <div className="bg-white mt-3 p-4 rounded-md shadow-md">
                    <p className="text-gray-600">This is how your form will look like to your users.</p>
                    {/* Form content */}
                    {formElements.map((form) => {
                        switch (form.type) {
                            case 'text':
                                return <MyTextField key={form.id} form={form} />;
                            case 'number':
                                return <NumberField key={form.id} form={form} />;
                            case 'date':
                                return <DateField key={form.id} form={form} />;
                            case 'select':
                                return <SelectField key={form.id} form={form} />;
                            case 'checkbox':
                                return <CheckBox key={form.id} form={form} />;
                            case 'textarea':
                                return <TextArea key={form.id} form={form} />;
                            default:
                                return null;
                        }
                    })}
                    {/* End of form content */}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default FormPreview;
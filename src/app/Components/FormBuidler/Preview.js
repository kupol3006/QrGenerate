import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';

const FormPreview = ({ open, handleClose }) => {
    const formElements = useSelector((state) => state.formBuilder.formElement);

    return (
        <Dialog open={open} onClose={handleClose}>
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
                <div className="bg-white p-4 rounded-md shadow-md">
                    <p className="text-gray-600">This is how your form will look like to your users.</p>
                    {/* Form content */}
                    <div className="mt-4">
                        {/* Text field */}
                        <div className="mb-4">
                            <label htmlFor="textField" className="block text-sm font-medium text-gray-700">
                                Text field
                            </label>
                            <input
                                type="text"
                                id="textField"
                                className="mt-1 p-2 border rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Value here..."
                            />
                            <p className="text-xs text-gray-500">Helper text</p>
                        </div>

                        {/* Number field */}
                        <div className="mb-4">
                            <label htmlFor="numberField" className="block text-sm font-medium text-gray-700">
                                Number field
                            </label>
                            <input
                                type="number"
                                id="numberField"
                                className="mt-1 p-2 border rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                                defaultValue={0}
                            />
                            <p className="text-xs text-gray-500">Helper text</p>
                        </div>

                        {/* Text area */}
                        <div className="mb-4">
                            <label htmlFor="textArea" className="block text-sm font-medium text-gray-700">
                                Text area
                            </label>
                            <textarea
                                id="textArea"
                                className="mt-1 p-2 border rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Value here..."
                            ></textarea>
                            <p className="text-xs text-gray-500">Helper text</p>
                        </div>

                        {/* Date field */}
                        <div className="mb-4">
                            <label htmlFor="dateField" className="block text-sm font-medium text-gray-700">
                                Date field
                            </label>
                            <input
                                type="date"
                                id="dateField"
                                className="mt-1 p-2 border rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <p className="text-xs text-gray-500">Pick a date</p>
                        </div>

                        {/* Select field */}
                        <div className="mb-4">
                            <label htmlFor="selectField" className="block text-sm font-medium text-gray-700">
                                Select field
                            </label>
                            <select
                                id="selectField"
                                className="mt-1 p-2 border rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                {/* Options */}
                            </select>
                            <p className="text-xs text-gray-500">Helper text</p>
                        </div>

                        {/* Checkbox field */}
                        <div className="mb-4">
                            <input
                                type="checkbox"
                                id="checkboxField"
                                className="mr-2"
                            />
                            <label htmlFor="checkboxField" className="text-sm font-medium text-gray-700">
                                Checkbox field
                            </label>
                            <p className="text-xs text-gray-500">Helper text</p>
                        </div>
                    </div>
                    {/* End of form content */}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default FormPreview;
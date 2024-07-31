import React, { useState } from 'react';
import { Modal, TextField, Button } from '@mui/material';

const CreateFormModal = ({ open, handleGenerate }) => {
    // const [open, setOpen] = useState(false);
    const [description, setDescription] = useState('');

    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const handleNameChange = (event) => setName(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);

    const handleSubmit = () => {
        // Perform form submission logic here (e.g., send data to API)
        console.log('Form submitted:', { description });
        // handleClose();
        handleGenerate(description);
    };

    return (
        <>
            {/* <button
                onClick={handleOpen}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Create Form
            </button> */}

            <Modal open={open} onClose={handleGenerate}>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-8"
                    style={{ width: 400 }}
                >
                    <h2 className="text-2xl font-bold mb-4">Create landing page by AI </h2>
                    <p className="text-gray-600 mb-4">
                        Create a landing page by AI with the following information
                    </p>
                    <TextField
                        // label="Description"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={description}
                        onChange={handleDescriptionChange}
                        className="mb-4"
                    />
                    <div className="flex justify-end">
                        <Button variant="contained" color='secondary' onClick={handleSubmit} fullWidth sx={{ marginTop: '10px' }}>
                            Generate
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default CreateFormModal;
import React, { useState } from 'react';
import { Modal, TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const CreateLP = ({ open, handleClose }) => {
    // const [open, setOpen] = useState(false);
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const router = useRouter();


    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const handleNameChange = (event) => setName(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);

    const handleSubmit = () => {
        // Perform form submission logic here (e.g., send data to API)
        console.log('Form submitted:', { description });
        router.push('/Landingpage');
        // handleClose();
    };

    return (
        <>
            {/* <button
                onClick={handleOpen}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Create Form
            </button> */}

            <Modal open={open} onClose={handleClose}>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-8"
                    style={{ width: 440 }}
                >
                    <h2 className="text-2xl font-bold mb-4">Create landing page</h2>
                    <p className="text-gray-600 mb-4">
                        Create a new landing page to start collecting responses
                    </p>
                    <label>Landing Page Name</label>
                    <TextField
                        // label="Description"
                        variant="outlined"
                        fullWidth
                        multiline
                        // rows={4}
                        value={description}
                        onChange={handleNameChange}
                        className="mb-4"
                        size='large'
                    />
                    <div className="flex justify-end">
                        <Button variant="contained" onClick={handleSubmit} fullWidth sx={{ marginTop: '10px', backgroundColor: '#111827', '&:hover': { backgroundColor: '#111827' } }}>
                            save
                        </Button>
                    </div>
                </div>
            </Modal >
        </>
    );
};

export default CreateLP;
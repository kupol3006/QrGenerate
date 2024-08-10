import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

const PopUpPublish = ({ open, handleOpenPublish }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const handlePublishForm = () => {
        router.push('/Builder');
    }


    return (
        <div>
            <Dialog
                open={open}
                onClose={handleOpenPublish}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" className="text-lg font-medium">
                    Are you absolutely sure?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" className="text-sm">
                        This action cannot be undone. After publishing you will not be able to edit this form.
                        <br />
                        By publishing this form you will make it available to the public and you will be able to collect submissions.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOpenPublish} className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded">
                        Cancel
                    </Button>
                    <Button onClick={handlePublishForm} className="bg-[#111827] hover:bg-[#1f2937] text-white font-medium py-2 px-4 rounded">
                        Proceed
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default PopUpPublish;
import * as React from 'react';
import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export default function SessionExpiredPopup() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="text-center font-bold text-lg">Your session has expired</DialogTitle>
      <DialogContent className="text-center">
        <div className="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-blue-500">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20.5A2.5 2.5 0 0 1 23 19.5V4.5A2.5 2.5 0 0 1 20.5 2H6.5A2.5 2.5 0 0 1 4 4.5V19.5z" />
            <path d="M16 4v16" />
            <path d="M8 8v8" />
            <circle cx="12" cy="12" r="2" />
            <path d="M12 14l-6-6h12" />
          </svg>
        </div>
        <p className="text-gray-600">Please refresh the page.</p>
      </DialogContent>
      <DialogActions className="justify-center">
        <Button variant="contained" color="primary" onClick={handleClose}>Refresh</Button>
      </DialogActions>
    </Dialog>
  );
}
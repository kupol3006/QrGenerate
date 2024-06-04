'use client';
// components/Link.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import QRCode from 'qrcode.react';
import { useDispatch } from 'react-redux';

const LinkQRGenerator = () => {
    const [text, setText] = useState('');
    const [qrValue, setQrValue] = useState('');

    const handleGenerate = () => {
        setQrValue(text);
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={2}
            m={2}
            border={1}
            borderRadius={2}
            borderColor="grey.300"
        >
            <Typography variant="h4" gutterBottom>
                Generate QR Code
            </Typography>
            <TextField
                label="Enter text"
                variant="outlined"
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleGenerate}
                fullWidth
            >
                Generate QR Code
            </Button>
            {qrValue && (
                <Box mt={4}>
                    <QRCode value={qrValue} />
                </Box>
            )}
        </Box>
    );
};

export default LinkQRGenerator;
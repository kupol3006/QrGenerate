'use client';
// components/Link.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import QrCode2SharpIcon from '@mui/icons-material/QrCode2Sharp';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '../redux/slices/qrCodeSlice';

const LinkQRGenerator = () => {
    const dispatch = useDispatch();
    const [text1, setText1] = useState('');
    const [qrValue, setQrValue] = useState('');
    const text = useSelector((state) => state.qrCode.text);

    const handleGenerate = () => {
        setQrValue(text1);
        dispatch(setText(text1));
    };

    return (
        <Box
            // display="flex"
            // flexDirection="column"
            // alignItems="center"
            // justifyContent="center"
            p={2}
            m={2}
        >
            <Typography variant="h5" gutterBottom lineHeight={'10px'} fontWeight={'bold'} sx={{ '@media (max-width: 600px)': { textAlign: 'center' } }}>
                Nhập địa chỉ website
            </Typography>
            <TextField
                // label="Nhập địa chỉ website"
                placeholder='Nhập địa chỉ website'
                variant="outlined"
                value={text1}
                onChange={(e) => setText1(e.target.value)}
                fullWidth
                size='small'
                margin="normal"
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '20px', // Điều chỉnh độ cong góc
                    },
                    '& .MuiInputBase-input': {
                        // padding: '10px 10px', // Điều chỉnh padding
                        fontSize: '16px', // Điều chỉnh font chữ
                    },
                }}
            />
            <Grid container justifyContent="flex-end">
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#00BCD4', // Màu xanh của button
                        color: '#fff',
                        borderRadius: '4px',
                        boxShadow: 'none', // Loại bỏ box shadow
                        padding: '8px 16px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        textTransform: 'none', // Không chuyển chữ hoa
                        '&:hover': {
                            backgroundColor: '#00ACC1', // Màu xanh đậm hơn khi hover
                        },
                        borderRadius: '20px', // Điều chỉnh độ cong góc
                    }}
                    onClick={handleGenerate}
                >
                    <QrCode2SharpIcon sx={{ marginRight: '2px' }} />
                    Tạo QR Code
                </Button>
            </Grid>
            {/* {
                qrValue && (
                    <Box mt={4}>
                        <QRCode value={qrValue} />
                    </Box>
                )
            } */}
        </Box >
    );
};

export default LinkQRGenerator;
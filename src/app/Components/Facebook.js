// components/QRCodeGenerator.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';
import QRCode from 'react-qrcode-logo';
import QrCode2SharpIcon from '@mui/icons-material/QrCode2Sharp';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '../redux/slices/qrCodeSlice';

const FacebookForm = () => {
    const dispatch = useDispatch();
    const [link, setLink] = useState('');
    const [qrCodeValue, setQrCodeValue] = useState('');

    const handleGenerateQRCode = () => {
        // setQrCodeValue(link);
        dispatch(setText(link));
    };

    return (
        <Box sx={{ width: '100%', maxWidth: '800px', margin: '0 auto', mt: 4 }}>
            <Typography variant="h5" fontWeight={'bold'} lineHeight={''}>Chia sẻ lên tường</Typography>
            <div className='flex items-center justify-between gap-4'>
                <Typography variant="h6" sx={{ fontSize: '16px' }}>Link bài viết cần đăng lên tường</Typography>
                <TextField
                    placeholder="Link bài viết cần đăng lên tường"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
            </div>
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
                        marginTop: '10px',
                    }}
                    onClick={handleGenerateQRCode}
                >
                    <QrCode2SharpIcon sx={{ marginRight: '2px' }} />
                    Tạo QR Code
                </Button>
            </Grid>
        </Box>
    );
};

export default FacebookForm;
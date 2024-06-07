// components/QRCodeGenerator.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid, FormControl, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import QRCode from 'react-qrcode-logo';
import QrCode2SharpIcon from '@mui/icons-material/QrCode2Sharp';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '../redux/slices/qrCodeSlice';

const BitcoinForm = () => {
    const dispatch = useDispatch();
    const [cryptoType, setCryptoType] = useState('bitcoin');
    const [amount, setAmount] = useState('');
    const [address, setAddress] = useState('');
    const [label, setLabel] = useState('');
    const [qrCodeValue, setQrCodeValue] = useState('');

    const handleGenerateQRCode = () => {
        const qrCodeStr = `${cryptoType}:${address}?amount=${amount}&label=${encodeURIComponent(label)}`;
        // setQrCodeValue(qrCodeStr);
        dispatch(setText(qrCodeStr));
    };

    return (
        <Box sx={{ width: '100%', maxWidth: '800px', margin: '0 auto', mt: 4 }}>
            <Typography variant="h5" fontWeight={'bold'} lineHeight={''}>Tạo QR Code Bitcoin</Typography>
            <FormControl component="fieldset" sx={{ mt: 2, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ fontSize: '18px' }}>Tiền điện tử</Typography>
                <RadioGroup
                    row
                    value={cryptoType}
                    onChange={(e) => setCryptoType(e.target.value)}
                    sx={{ ml: 10 }}
                >
                    <FormControlLabel value="bitcoin" control={<Radio />} label="Bitcoin" />
                    <FormControlLabel value="bitcoincash" control={<Radio />} label="Bitcoin Cash" />
                    <FormControlLabel value="ether" control={<Radio />} label="Ether" />
                    <FormControlLabel value="litecoin" control={<Radio />} label="Litecoin" />
                    <FormControlLabel value="dash" control={<Radio />} label="Dash" />
                </RadioGroup>
            </FormControl>
            <div className='flex gap-6 items-center justify-between'>
                <Typography variant="h6" sx={{ fontSize: '18px' }}>Số lượng</Typography>
                <TextField
                    placeholder='Số lượng'
                    variant="outlined"
                    sx={{ width: 630 }}
                    margin="normal"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div className='flex gap-6 items-center justify-between'>
                <Typography variant="h6" sx={{ fontSize: '18px' }}>Địa chỉ ví nhận</Typography>
                <TextField
                    placeholder='Địa chỉ ví nhận'
                    variant="outlined"
                    sx={{ width: 630 }}
                    margin="normal"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div className='flex gap-6 items-center justify-between'>
                <Typography variant="h6" sx={{ fontSize: '18px' }}>Nôi dung</Typography>
                <TextField
                    placeholder="Nội dung"
                    variant="outlined"
                    sx={{ width: 630 }}
                    margin="normal"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
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

export default BitcoinForm;
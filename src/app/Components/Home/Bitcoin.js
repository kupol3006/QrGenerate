// components/QRCodeGenerator.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid, FormControl, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import QRCode from 'react-qrcode-logo';
import QrCode2SharpIcon from '@mui/icons-material/QrCode2Sharp';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '../../redux/slices/qrCodeSlice';

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
        <Box sx={{ width: '100%', maxWidth: '800px', margin: '0 auto', mt: 4, paddingLeft: '1px', paddingRight: '1px', '@media (max-width: 1280px)': { paddingLeft: 5, paddingRight: 5 } }}>
            <Typography variant="h5" fontWeight={'bold'} lineHeight={''} sx={{ '@media (max-width: 600px)': { textAlign: 'center' } }}>Tạo QR Code Bitcoin</Typography>
            <FormControl component="fieldset" sx={{ mt: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', '@media (max-width: 600px)': { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' } }}>
                <Typography variant="h6" sx={{ fontSize: '15px', width: '170px' }}>Tiền điện tử</Typography>
                <RadioGroup
                    row
                    value={cryptoType}
                    onChange={(e) => setCryptoType(e.target.value)}
                    sx={{ ml: 10 }}
                >
                    <FormControlLabel value="bitcoin" control={<Radio />} label="Bitcoin" sx={{ '.MuiFormControlLabel-label': { fontSize: '13px' } }} />
                    <FormControlLabel value="bitcoincash" control={<Radio />} label="Bitcoin Cash" sx={{ '.MuiFormControlLabel-label': { fontSize: '13px' } }} />
                    <FormControlLabel value="ether" control={<Radio />} label="Ether" sx={{ '.MuiFormControlLabel-label': { fontSize: '13px' } }} />
                    <FormControlLabel value="litecoin" control={<Radio />} label="Litecoin" sx={{ '.MuiFormControlLabel-label': { fontSize: '13px' } }} />
                    <FormControlLabel value="dash" control={<Radio />} label="Dash" sx={{ '.MuiFormControlLabel-label': { fontSize: '13px' } }} />
                </RadioGroup>
            </FormControl>
            <div className='flex flex-col gap-1 items-start justify-start sm:flex-row sm:justify-between sm:gap-6 sm:items-center'>
                <Typography variant="h6" sx={{ fontSize: '15px', width: '170px' }}>Số lượng</Typography>
                <TextField
                    placeholder='Số lượng'
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    size='small'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div className='flex flex-col gap-1 items-start justify-start sm:flex-row sm:justify-between sm:gap-6 sm:items-center'>
                <Typography variant="h6" sx={{ fontSize: '15px', width: '170px' }}>Địa chỉ ví nhận</Typography>
                <TextField
                    placeholder='Địa chỉ ví nhận'
                    variant="outlined"
                    // sx={{ width: 630 }}
                    fullWidth
                    margin="normal"
                    size='small'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div className='flex flex-col gap-1 items-start justify-start sm:flex-row sm:justify-between sm:gap-6 sm:items-center'>
                <Typography variant="h6" sx={{ fontSize: '15px', width: '170px' }}>Nôi dung</Typography>
                <TextField
                    placeholder="Nội dung"
                    variant="outlined"
                    // sx={{ width: 630 }}
                    fullWidth
                    margin="normal"
                    size='small'
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
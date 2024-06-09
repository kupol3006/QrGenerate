// components/QRCodeGenerator.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid, FormControl, FormControlLabel, RadioGroup, Radio, Checkbox } from '@mui/material';
import { QRCode } from 'react-qrcode-logo';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '../redux/slices/qrCodeSlice';
import QrCode2SharpIcon from '@mui/icons-material/QrCode2Sharp';
import { display } from '@mui/system';


const WifiForm = () => {
    const dispatch = useDispatch();
    const [ssid, setSsid] = useState('');
    const [password, setPassword] = useState('');
    const [encryption, setEncryption] = useState('WPA');
    const [hidden, setHidden] = useState(false);
    const [qrCodeValue, setQrCodeValue] = useState('');

    const handleGenerateQRCode = () => {
        const hiddenStr = hidden ? 'true' : 'false';
        const qrCodeStr = `WIFI:T:${encryption};S:${ssid};P:${password};H:${hiddenStr};;`;
        dispatch(setText(qrCodeStr));
    };

    return (
        <Box sx={{ width: '100%', maxWidth: '800px', margin: '0 auto', mt: 0, padding: '15px' }}>
            <Typography variant="h5" fontWeight={'bold'} lineHeight={''} sx={{ '@media (max-width: 600px)': { textAlign: 'center' } }}>Tạo QR Code Wifi</Typography>
            <div className='flex flex-col gap-0 items-start justify-between mt-[20px] sm:flex-row sm:items-center sm:gap-6'>
                <Typography variant="h6" className='w-[150px] text-[15px]' >Tên wifi</Typography>
                <Box sx={{ width: '100%', display: 'flex', gap: '10px' }}>
                    <TextField
                        // label="Tên wifi"
                        placeholder='Nhập tên wifi của bạn'
                        variant="outlined"
                        // sx={{ width: 550 }}
                        fullWidth
                        margin="normal"
                        size='small'
                        value={ssid}
                        onChange={(e) => setSsid(e.target.value)}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={hidden}
                                onChange={(e) => setHidden(e.target.checked)}
                            />
                        }
                        label="Wifi ẩn"
                        sx={{ '.MuiFormControlLabel-label': { fontSize: '13px', width: '50px' } }}
                    />
                </Box>
            </div>
            <div className='flex flex-col gap-0 items-start justify-between sm:flex-row sm:items-center sm:gap-6'>
                <Typography variant="h6" className='w-[150px] text-[15px]'>Mật khẩu</Typography>
                <TextField
                    placeholder='Nhập mật khẩu wifi của bạn'
                    variant="outlined"
                    // sx={{ width: 690 }}
                    fullWidth
                    margin="normal"
                    size='small'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <FormControl component="fieldset" sx={{ mt: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', '@media (max-width: 600px)': { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' } }} >
                <Typography variant="h6" className='w-[110px] text-[15px]'>Mã hoá</Typography>
                <RadioGroup
                    row
                    value={encryption}
                    onChange={(e) => setEncryption(e.target.value)}
                    sx={{ ml: 5, '@media (max-width: 600px)': { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 0 } }}
                >
                    <FormControlLabel value="nopass" control={<Radio />} label="Không mã hoá" sx={{ '.MuiFormControlLabel-label': { fontSize: '13px' } }} />
                    <FormControlLabel value="WPA" control={<Radio />} label="WPA/WPA2" sx={{ '.MuiFormControlLabel-label': { fontSize: '13px' } }} />
                    <FormControlLabel value="WEP" control={<Radio />} label="WEP" sx={{ '.MuiFormControlLabel-label': { fontSize: '13px' } }} />
                </RadioGroup>
            </FormControl>
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
            {qrCodeValue && (
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" component="h2">
                        Mã QR Code của bạn!
                    </Typography>
                    <Grid container justifyContent="center" sx={{ mt: 2 }}>
                        <QRCode value={qrCodeValue} />
                    </Grid>
                </Box>
            )}
        </Box>
    );
};

export default WifiForm;
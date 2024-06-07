// components/QRCodeGenerator.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid, FormControl, FormControlLabel, RadioGroup, Radio, Checkbox } from '@mui/material';
import { QRCode } from 'react-qrcode-logo';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '../redux/slices/qrCodeSlice';
import QrCode2SharpIcon from '@mui/icons-material/QrCode2Sharp';


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
        <Box sx={{ width: '100%', maxWidth: '800px', margin: '0 auto', mt: 2 }}>
            <Typography variant="h5" fontWeight={'bold'} lineHeight={''}>Tạo QR Code Wifi</Typography>
            <div className='flex gap-6 items-center justify-between'>
                <Typography variant="h6">Tên wifi</Typography>
                <TextField
                    // label="Tên wifi"
                    placeholder='Nhập tên wifi của bạn'
                    variant="outlined"
                    sx={{ width: 550 }}
                    margin="normal"
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
                />
            </div>
            <div className='flex gap-6 items-center justify-between'>
                <Typography variant="h6">Mật khẩu</Typography>
                <TextField
                    placeholder='Nhập mật khẩu wifi của bạn'
                    variant="outlined"
                    sx={{ width: 690 }}
                    margin="normal"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <FormControl component="fieldset" sx={{ mt: 2, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Typography variant="h6">Mã hoá</Typography>
                <RadioGroup
                    row
                    value={encryption}
                    onChange={(e) => setEncryption(e.target.value)}
                    sx={{ ml: 5 }}
                >
                    <FormControlLabel value="nopass" control={<Radio />} label="Không mã hoá" />
                    <FormControlLabel value="WPA" control={<Radio />} label="WPA/WPA2" />
                    <FormControlLabel value="WEP" control={<Radio />} label="WEP" />
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
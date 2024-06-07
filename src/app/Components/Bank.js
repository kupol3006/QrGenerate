import React, { useState, useEffect } from 'react';
import { QRCode } from 'react-qrcode-logo';
import {
    TextField,
    Autocomplete,
    Button,
    Typography,
    Box,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiBank } from '../redux/slices/qrCodeSlice';

const BankForm = () => {
    const dispatch = useDispatch();
    const [selectedBank, setSelectedBank] = useState(null);
    const [accountNumber, setAccountNumber] = useState('');
    const [accountName, setAccountName] = useState('');
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');
    const [qrCodeValue, setQrCodeValue] = useState('');
    const banks = useSelector((state) => state.qrCode.data);

    useEffect(() => {
        async function fetchData() {
            await dispatch(fetchApiBank()).unwrap();
        }
        fetchData();
    }, []);

    const handleBankChange = (event, newValue) => {
        event.preventDefault();
        setSelectedBank(newValue);
    };

    const handleGenerateQRCode = () => {
        const qrData = {
            bankCode: selectedBank ? selectedBank.code : '',
            accountNumber: accountNumber,
            accountName: accountName,
            amount: amount,
            description: description,
        };

        // Tạo chuỗi QR code từ dữ liệu (ví dụ sử dụng JSON.stringify)
        // const qrCodeString = JSON.stringify(qrData);
        // const qrCodeString = `STK:${accountNumber}|AMT:${amount}|CONTENT:${encodeURIComponent(description)}|BANK:${encodeURIComponent(selectedBank ? selectedBank.code : '')}`;
        // Tạo chuỗi VietQR theo cấu trúc cơ bản (có thể cần điều chỉnh theo ngân hàng)
        const vietQRString = `000201010212${selectedBank.code}0010A0000007270122000616018187237970208QRIBFTTA53037045405${amount}5802VN6280804${description}6304595D`; // Điều chỉnh các trường

        setQrCodeValue(vietQRString);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
            }}
        >
            <Typography variant="h5" gutterBottom>
                Tạo mã QR Code chuyển khoản ngân hàng
            </Typography>

            <Autocomplete
                disablePortal
                id="bank-select"
                options={banks}
                getOptionLabel={(option) => `${option.shortName} - ${option.name}`}
                renderOption={(props, option) => (
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        <img
                            loading="lazy"
                            width="70"
                            src={option.logo}
                            srcSet={`${option.logo} 2x`}
                            alt=""
                        />
                        {`${option.shortName} - ${option.name}`}
                    </Box>
                )}
                onChange={handleBankChange}
                sx={{ width: 400, marginBottom: 2 }}
                renderInput={(params) => (
                    <TextField {...params} label="Ngân hàng" />
                )}
            />

            <TextField
                label="Số tài khoản"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                sx={{ width: 400, marginBottom: 2 }}
            />

            <TextField
                label="Tên chủ tài khoản"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                sx={{ width: 400, marginBottom: 2 }}
            />

            <TextField
                label="Số tiền cần chuyển"
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                sx={{ width: 400, marginBottom: 2 }}
            />

            <TextField
                label="Nội dung chuyển khoản"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ width: 400, marginBottom: 2 }}
            />

            <Button
                variant="contained"
                onClick={() => handleGenerateQRCode()}
                sx={{ marginBottom: 2 }}
            >
                Tạo QR Code
            </Button>

            {qrCodeValue && (
                <Box>
                    <QRCode value={qrCodeValue} logoImage={selectedBank ? selectedBank.logo : ''} />
                </Box>
            )}
        </Box>
    );
};

export default BankForm;
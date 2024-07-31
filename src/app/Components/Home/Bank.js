import React, { useState, useEffect } from 'react';
import { QRCode } from 'react-qrcode-logo';
import {
    TextField,
    Autocomplete,
    Button,
    Typography,
    Box,
    Grid,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiBank, setText, setUserBank } from '../../redux/slices/qrCodeSlice';
import { VietQR } from 'vietqr';
import QrCode2SharpIcon from '@mui/icons-material/QrCode2Sharp';
import { remove as removeDiacritics } from 'diacritics';
import { ToastContainer, toast, Flip } from 'react-toastify';

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
        const accountName1 = removeDiacritics(accountName).toUpperCase();
        const description1 = removeDiacritics(description).toUpperCase();
        const qrData = {
            bankCode: selectedBank ? selectedBank.bin : '',
            accountNumber: accountNumber,
            accountName: accountName1,
            amount: amount,
            description: description1,
            bankName: selectedBank ? selectedBank.name : '',
            bankLogo: selectedBank ? selectedBank.logo : '',
        };
        let vietQR = new VietQR({
            clientID: 'de8a0804-a76d-41e5-8ad6-31503ce7d5f4',
            apiKey: '17c29f09-4ea2-4417-b9c2-7f020d35de42',
        });
        vietQR.genQRCodeBase64({
            bank: qrData.bankCode,
            accountName: qrData.accountName,
            accountNumber: qrData.accountNumber,
            amount: qrData.amount,
            memo: qrData.description,
            template: 'qr_only',
        })
            .then((data) => {
                setQrCodeValue(data.data.data.qrCode);
                dispatch(setText(data.data.data.qrCode));
                dispatch(setUserBank(qrData));
                console.log('QR code generated:', data.data.data.qrCode);
            })
            .catch((err) => {
                console.error('Error generating QR code:', err);
                toast.error('Vui lòng kiểm tra lại thông tin chuyển khoản!', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                    transition: Flip,
                });
            });

        // setQrCodeValue(vietQRString);
    };

    return (
        <Box sx={{ width: '100%', maxWidth: '800px', margin: '0 auto', mt: 4, paddingLeft: '1px', paddingRight: '1px', '@media (max-width: 1280px)': { paddingLeft: 5, paddingRight: 5 } }}>
            <Typography variant="h5" fontWeight={'bold'} lineHeight={''} sx={{ '@media (max-width: 600px)': { textAlign: 'center' } }}>Tạo mã QR Code chuyển khoản ngân hàng</Typography>

            <div className='flex flex-col gap-1 items-start justify-between mt-[20px] sm:flex-row sm:gap-6'>
                <Typography variant="h6" sx={{ fontSize: '15px', width: '210px' }}>Ngân hàng</Typography>
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
                    sx={{ width: '100%', marginBottom: 2 }}
                    renderInput={(params) => (
                        <TextField {...params} placeholder="Ngân hàng" size='small' />
                    )}
                />
            </div>

            <div className='flex flex-col gap-1 items-start justify-between mt-[20px] sm:flex-row sm:gap-6'>
                <Typography variant="h6" sx={{ fontSize: '15px', width: '210px' }}>Số tài khoản</Typography>
                <TextField
                    size='small'
                    fullWidth
                    placeholder="Số tài khoản"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
            </div>

            <div className='flex flex-col gap-1 items-start justify-between mt-[20px] sm:flex-row sm:gap-6'>
                <Typography variant="h6" sx={{ fontSize: '15px', width: '210px' }}>Tên chủ tài khoản</Typography>
                <TextField
                    size='small'
                    placeholder="Tên chủ tài khoản"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    sx={{ width: '100%', marginBottom: 2 }}
                />
            </div>

            <div className='flex flex-col gap-1 items-start justify-between mt-[20px] sm:flex-row sm:gap-6'>
                <Typography variant="h6" sx={{ fontSize: '15px', width: '210px' }}>Số tiền cần chuyển</Typography>
                <TextField
                    size='small'
                    placeholder="Số tiền cần chuyển"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                    sx={{ width: '100%', marginBottom: 2 }}
                />

            </div>
            <div className='flex flex-col gap-1 items-start justify-between mt-[20px] sm:flex-row sm:gap-6'>
                <Typography variant="h6" sx={{ fontSize: '15px', width: '210px' }}>Nội dung chuyển khoản</Typography>
                <TextField
                    size='small'
                    placeholder="Nội dung chuyển khoản"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ width: '100%', marginBottom: 2 }}
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
                        marginBottom: '5px',
                    }}
                    onClick={handleGenerateQRCode}
                >
                    <QrCode2SharpIcon sx={{ marginRight: '2px' }} />
                    Tạo QR Code
                </Button>
            </Grid>

            {/* {qrCodeValue && (
                <Box>
                    <QRCode value={qrCodeValue} logoImage={selectedBank ? selectedBank.logo : ''} />
                </Box>
            )} */}
        </Box>
    );
};

export default BankForm;
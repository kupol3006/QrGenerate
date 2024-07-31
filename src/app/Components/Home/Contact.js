'use client';
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import QrCode2SharpIcon from '@mui/icons-material/QrCode2Sharp';
import { useDispatch } from 'react-redux';
import { setText } from '../../redux/slices/qrCodeSlice';
import { margin } from '@mui/system';

const FlexBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    // marginBottom: '6px',
    '@media (max-width: 600px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        // justifyContent: 'center',

    },
}));

const ContactForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        phone: '',
        fax: '',
        email: '',
        company: '',
        jobTitle: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        website: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const vCard = `BEGIN:VCARD\nVERSION:3.0\nN:${formData.lastName};${formData.firstName};;;\nFN:${formData.firstName} ${formData.lastName}\nTEL;TYPE=CELL:${formData.mobile}\nTEL;TYPE=WORK:${formData.phone}\nTEL;TYPE=FAX:${formData.fax}\nEMAIL;TYPE=INTERNET:${formData.email}\nORG:${formData.company}\nTITLE:${formData.jobTitle}\nADR;TYPE=WORK,PREF:;;${formData.address};${formData.city};;${formData.zip};${formData.country}\nURL:${formData.website}\nEND:VCARD`;
        dispatch(setText(vCard));
    };

    return (
        <form onSubmit={handleSubmit} >
            <Box display="flex" flexDirection="column" marginTop={4} paddingRight={5} paddingLeft={5} sx={{ '@media (max-width: 600px)': { display: 'flex', flexDirection: 'column' } }}>
                <FlexBox className='flex flex-row'>
                    <Typography variant="h5" fontWeight="bold" sx={{ '@media (max-width: 600px)': { textAlign: 'center' } }}>
                        QR Code Liên Hệ (vCard QR Code)
                    </Typography>
                </FlexBox>

                <FlexBox className='mt-[10px]'>
                    <Typography variant="h6" sx={{ width: '180px', fontSize: '16px' }}>
                        Họ tên
                    </Typography>
                    <Box className='w-full flex'>
                        <Box flex={1} mr={1} >
                            <TextField
                                placeholder="Tên"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                fullWidth
                                size="small"
                                margin="normal"
                            />
                        </Box>
                        <Box flex={1}>
                            <TextField
                                placeholder="Họ"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                fullWidth
                                size="small"
                                margin="normal"
                            />
                        </Box>
                    </Box>
                </FlexBox>

                <FlexBox>
                    <Typography variant="h6" sx={{ width: '180px', fontSize: '16px' }}>
                        Số điện thoại
                    </Typography>
                    <Box className='w-full flex'>
                        <Box flex={1} >
                            <TextField
                                placeholder="Số điện thoại di động"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                fullWidth
                                size="small"
                                margin="normal"
                            />
                        </Box>
                    </Box>
                </FlexBox>

                <FlexBox>
                    <Box className='w-full flex'>
                        <Box flex={1} mr={1} ml={18.8} sx={{ '@media (max-width: 600px)': { marginLeft: 0 } }}>
                            <TextField
                                placeholder="Số điện thoại cố định"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                fullWidth
                                size="small"
                                margin="normal"
                            />
                        </Box>
                        <Box flex={1}>
                            <TextField
                                placeholder="Số fax"
                                name="fax"
                                value={formData.fax}
                                onChange={handleChange}
                                fullWidth
                                size="small"
                                margin="normal"
                            />
                        </Box>
                    </Box>
                </FlexBox>

                <FlexBox>
                    <Typography variant="h6" sx={{ width: '180px', fontSize: '16px' }}>
                        Email
                    </Typography>
                    <Box className='w-full flex'>
                        <Box flex={1}>
                            <TextField
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                fullWidth
                                size='small'
                                margin="normal"
                            />
                        </Box>
                    </Box>
                </FlexBox>
                <FlexBox>
                    <Typography variant="h6" sx={{ width: '180px', fontSize: '16px' }}>
                        Công ty
                    </Typography>
                    <Box className='w-full flex'>
                        <Box flex={1} mr={1}>
                            <TextField
                                placeholder="Tên công ty"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                fullWidth
                                size='small'
                                margin="normal"
                            />
                        </Box>
                        <Box flex={1}>
                            <TextField
                                placeholder="Chức vụ"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                fullWidth
                                size='small'
                                margin="normal"
                            />
                        </Box>
                    </Box>

                </FlexBox>
                <FlexBox>
                    <Typography variant="h6" sx={{ width: '180px', fontSize: '16px' }}>
                        Địa chỉ
                    </Typography>
                    <Box className='w-full flex'>
                        <Box flex={1}>
                            <TextField
                                placeholder="Địa chỉ"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                fullWidth
                                size='small'
                                margin="normal"
                            />
                        </Box>
                    </Box>
                </FlexBox>
                <FlexBox>
                    <Typography variant="h6" sx={{ width: '180px', fontSize: '16px' }}>Thành phố</Typography>
                    <Box className='w-full flex'>
                        <Box flex={1} mr={1}>
                            <TextField
                                placeholder="Thành phố"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                fullWidth
                                size='small'
                                margin="normal"
                            />
                        </Box>
                        <Box flex={1}>
                            <TextField
                                placeholder="Mã bưu điện"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                fullWidth
                                size='small'
                                margin="normal"
                            />
                        </Box>
                    </Box>
                </FlexBox>
                <FlexBox>
                    <Typography variant="h6" sx={{ width: '180px', fontSize: '16px' }}>Quốc gia</Typography>
                    <Box className='w-full flex'>
                        <Box flex={1}>
                            <TextField
                                placeholder="Quốc gia"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                fullWidth
                                size='small'
                                margin="normal"
                            />
                        </Box>
                    </Box>
                </FlexBox>
                <FlexBox>
                    <Typography variant="h6" sx={{ width: '180px', fontSize: '16px' }}>Website</Typography>
                    <Box className='w-full flex'>
                        <Box flex={1}>
                            <TextField
                                placeholder="Website"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                fullWidth
                                size='small'
                                margin="normal"
                            />
                        </Box>
                    </Box>
                </FlexBox>
                <Grid container justifyContent="flex-end">
                    <Button
                        variant="contained"
                        type='submit'
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
                            // marginBottom: '10px',
                        }}
                        onClick={handleSubmit}
                    >
                        <QrCode2SharpIcon sx={{ marginRight: '2px' }} />
                        Tạo QR Code
                    </Button>
                </Grid>
            </Box>
        </form>
    );
}
export default ContactForm;         
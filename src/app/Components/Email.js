'use client'
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { styled } from '@mui/material/styles';
import QrCode2SharpIcon from '@mui/icons-material/QrCode2Sharp';
import { useDispatch } from 'react-redux';
import { setText } from '../redux/slices/qrCodeSlice';

const GridItems = styled(Grid)(({ theme }) => ({
    display: 'flex',
    // justifyContent: 'center',
    height: '50px',
    // maxHeight: '20px',
    alignItems: 'center',
}));

const EmailForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        body: '',
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Tạo chuỗi vCard từ dữ liệu form
        // const vCard = `BEGIN:VCARD\nVERSION:3.0\nN:${formData.lastName};${formData.firstName};;;\nFN:${formData.firstName} ${formData.lastName}\nTEL;TYPE=CELL:${formData.mobile}\nTEL;TYPE=WORK:${formData.phone}\nTEL;TYPE=FAX:${formData.fax}\nEMAIL;TYPE=INTERNET:${formData.email}\nORG:${formData.company}\nTITLE:${formData.jobTitle}\nADR;TYPE=WORK,PREF:;;${formData.address};${formData.city};;${formData.zip};${formData.country}\nURL:${formData.website}\nEND:VCARD`;
        const mailtoLink = `mailto:${formData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.body)}`;
        dispatch(setText(mailtoLink));
        // Gọi API tạo QR Code ở đây (ví dụ: sử dụng qrcode.react)
        // ...
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={0} display={'flex'} alignItems={'end'} marginTop={4} paddingLeft={5} paddingRight={5}>
                <GridItems item xs={12} sm={12}>
                    <Typography variant="h5" fontWeight={'bold'} lineHeight={''} sx={{ '@media (max-width: 600px)': { textAlign: 'center' } }}>QR Code Liên Hệ (vCard QR Code)</Typography>
                </GridItems>
                <GridItems item xs={12} sm={2}>
                    <Typography variant="h6" sx={{ fontSize: '15px' }}>Email</Typography>
                </GridItems>
                <GridItems item xs={12} sm={10}>
                    <TextField
                        placeholder='emailcuaban@gmail.com'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        size='small'
                        margin="normal"
                    />
                </GridItems>
                <GridItems item xs={12} sm={2}>
                    <Typography variant="h6" sx={{ fontSize: '15px' }}>Tiêu đề email</Typography>
                </GridItems>
                <GridItems item xs={12} sm={10}>
                    <TextField
                        placeholder='Nhập tiêu đề email'
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        fullWidth
                        size='small'
                        margin="normal"
                    />
                </GridItems>
                <GridItems item xs={12} sm={2}>
                    <Typography variant="h6" sx={{ fontSize: '15px' }}>Nội dung</Typography>
                </GridItems>
                <GridItems item xs={12} sm={10}>
                    <TextField
                        placeholder='Nhập nội dung email'
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        fullWidth
                        size='small'
                        margin="normal"
                    />
                </GridItems>
                <Grid container xs={12} justifyContent="flex-end">
                    <Button
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
                            marginBottom: '10px',
                        }}
                        type="submit"
                    >
                        <QrCode2SharpIcon sx={{ marginRight: '2px' }} />
                        Tạo QR Code
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default EmailForm;
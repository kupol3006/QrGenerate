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

        // Tạo chuỗi vCard từ dữ liệu form
        const vCard = `BEGIN:VCARD\nVERSION:3.0\nN:${formData.lastName};${formData.firstName};;;\nFN:${formData.firstName} ${formData.lastName}\nTEL;TYPE=CELL:${formData.mobile}\nTEL;TYPE=WORK:${formData.phone}\nTEL;TYPE=FAX:${formData.fax}\nEMAIL;TYPE=INTERNET:${formData.email}\nORG:${formData.company}\nTITLE:${formData.jobTitle}\nADR;TYPE=WORK,PREF:;;${formData.address};${formData.city};;${formData.zip};${formData.country}\nURL:${formData.website}\nEND:VCARD`;
        dispatch(setText(vCard));
        // Gọi API tạo QR Code ở đây (ví dụ: sử dụng qrcode.react)
        // ...
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={0} display={'flex'} alignItems={'end'} paddingLeft={'40px'} paddingRight={'40px'}>
                <GridItems item xs={12} sm={12}>
                    <Typography variant="h5" fontWeight={'bold'} lineHeight={''}>QR Code Liên Hệ (vCard QR Code)</Typography>
                </GridItems>

                <GridItems item xs={12} sm={2}>
                    <Typography variant="h6">Họ tên</Typography>
                </GridItems>
                <GridItems item xs={12} sm={5}>
                    <TextField
                        placeholder='Tên'
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        fullWidth
                        size='small'
                        margin="normal"
                    />
                </GridItems>
                <GridItems item xs={12} sm={5}>
                    <TextField
                        placeholder='Họ'
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        fullWidth
                        size='small'
                        margin="normal"
                    />
                </GridItems>

                <GridItems item xs={12} sm={2}>
                    <Typography variant="h6">Số điện thoại</Typography>
                </GridItems>
                <GridItems item xs={12} sm={10}>
                    <TextField
                        placeholder='Số điện thoại di động'
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        fullWidth
                        size='small'
                        margin="normal"
                    />
                </GridItems>
                <GridItems item xs={12} sm={2}></GridItems>
                <GridItems item xs={12} sm={5}>
                    <TextField
                        placeholder="Số điện thoại cố định"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        fullWidth
                        size='small'
                        margin="normal"
                    />
                </GridItems>
                <GridItems item xs={12} sm={5}>
                    <TextField
                        placeholder="Số fax"
                        name="fax"
                        value={formData.fax}
                        onChange={handleChange}
                        fullWidth
                        size='small'
                        margin="normal"
                    />
                </GridItems>
                <GridItems item xs={12} sm={2}>
                    <Typography variant="h6">Email</Typography>
                </GridItems>
                <GridItems item xs={10}>
                    <TextField
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        size='small'
                        margin="normal"
                    />
                </GridItems>
                <GridItems item xs={12} sm={2}>
                    <Typography variant="h6">Công việc</Typography>
                </GridItems>
                <GridItems item xs={12} sm={5}>
                    <TextField
                        placeholder="Công ty"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        fullWidth
                        size='small'
                        margin="normal"
                    />
                </GridItems>
                <GridItems item xs={12} sm={5}>
                    <TextField
                        placeholder="Chức vụ"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        fullWidth
                        size='small'
                        margin="normal"
                    />
                </GridItems>
                <GridItems item xs={12} sm={2}>
                    <Typography variant="h6">Địa chỉ</Typography>
                </GridItems>
                <GridItems item xs={10}>
                    <TextField
                        placeholder="Địa chỉ"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        fullWidth
                        size='small'
                        margin="normal"
                    />
                </GridItems>
                <GridItems item xs={12} sm={2}>
                    <Typography variant="h6">Thành phố</Typography>
                </GridItems>
                <GridItems item xs={12} sm={5}>
                    <TextField
                        placeholder="Thành phố"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        fullWidth
                        size='small'
                        margin="normal"
                    />
                </GridItems>
                <GridItems item xs={12} sm={5}>
                    <TextField
                        placeholder="Mã Zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        fullWidth
                        size='small'
                        margin="normal"
                    />
                </GridItems>
                <GridItems item xs={12} sm={2}>
                    <Typography variant="h6">Quốc gia</Typography>
                </GridItems>
                <GridItems item xs={10}>
                    <TextField
                        placeholder="Quốc gia"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        fullWidth
                        size='small'
                        margin="normal"
                    />
                </GridItems>
                <GridItems item xs={12} sm={2}>
                    <Typography variant="h6">Website</Typography>
                </GridItems>
                <GridItems item xs={10}>
                    <TextField
                        placeholder="Website"
                        name="website"
                        value={formData.website}
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

export default ContactForm;
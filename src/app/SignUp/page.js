'use client'
import React, { useState } from 'react';
// import Head from 'next/head';
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Select, MenuItem } from '@mui/material';
import { toast, Flip } from 'react-toastify';
import Header from '../Components/Header';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    purpose: '',
    otherPurpose: '',
    qrQuantity: '',
    landingPageQuantity: '',
    formQuantity: '',
    userType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password pattern: 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Phone pattern: starts with 0, followed by 9 or 10 digits
    const phonePattern = /^0\d{9,10}$/;

    // Validate fields
    if (!formData.name || !formData.phone || !formData.email || !formData.password || !formData.purpose || !formData.qrQuantity || !formData.landingPageQuantity || !formData.formQuantity || !formData.userType) {
      toast.error('Vui lòng điền đầy đủ thông tin.', {
        position: 'top-right',
        autoClose: 3000,
        transition: Flip,
      });
      return;
    }

    if (!emailPattern.test(formData.email)) {
      toast.error('Email không hợp lệ.', {
        position: 'top-right',
        autoClose: 3000,
        transition: Flip,
      });
      return;
    }

    if (!passwordPattern.test(formData.password)) {
      toast.error('Mật khẩu phải chứa ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt.', {
        position: 'top-right',
        autoClose: 3000,
        transition: Flip,
      });
      return;
    }

    if (!phonePattern.test(formData.phone)) {
      toast.error('Số điện thoại không hợp lệ.', {
        position: 'top-right',
        autoClose: 3000,
        transition: Flip,
      });
      return;
    }

    console.log(formData);
  };

  return (
    <div className='sm:w-[100%] md:w-[60%] xl:w-[40%] mx-auto mt-[80px]'>
      {/* <Head>
        <title>Đăng ký sử dụng QR Builder</title>
      </Head> */}
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-4">Đăng ký sử dụng QR Builder</h1>
        {/* <h2 className="text-xl text-center mb-8">Vui lòng điền thông tin dưới đây để chúng tôi có thể hỗ trợ bạn tốt hơn</h2> */}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <TextField
              size="small"
              fullWidth
              label="Họ tên"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nhập họ tên của bạn"
              required
            />
          </div>
          <div className="form-group">
            <TextField
              size="small"
              fullWidth
              label="Số điện thoại"
              name="phone"
              variant="outlined"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Nhập số điện thoại của bạn"
              required
            />
          </div>
          <div className="form-group">
            <TextField
              size="small"
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Nhập địa chỉ email của bạn"
              required
            />
          </div>
          <div className="form-group">
            <TextField
              size="small"
              fullWidth
              label="Mật khẩu"
              name="password"
              variant="outlined"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Nhập mật khẩu của bạn"
              required
            />
          </div>
          <div className="form-group">
            <FormControl component="fieldset">
              <FormLabel component="legend">Mục tiêu sử dụng:</FormLabel>
              <RadioGroup row name="purpose" value={formData.purpose} onChange={handleChange}>
                <FormControlLabel value="Marketing" control={<Radio />} label="Marketing" />
                <FormControlLabel value="Sales" control={<Radio />} label="Sales" />
                <FormControlLabel value="Support" control={<Radio />} label="Support" />
                <FormControlLabel value="Project Management" control={<Radio />} label="Project Management" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
              {formData.purpose === 'Other' && (
                <TextField
                  size="small"
                  fullWidth
                  name="otherPurpose"
                  variant="outlined"
                  value={formData.otherPurpose}
                  onChange={handleChange}
                  placeholder="Vui lòng nhập mục tiêu của bạn"
                  className="mt-2"
                />
              )}
            </FormControl>
          </div>

          <div className="form-group">
            <FormControl fullWidth>
              <FormLabel>Số lượng QR khởi tạo hàng tháng:</FormLabel>
              <Select
                size="small"
                name="qrQuantity"
                value={formData.qrQuantity}
                onChange={handleChange}
                required
              >
                <MenuItem value="1-5">1-5</MenuItem>
                <MenuItem value="6-10">6-10</MenuItem>
                <MenuItem value="11-25">11-25</MenuItem>
                <MenuItem value="26-50">26-50</MenuItem>
                <MenuItem value="51-100">51-100</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="form-group">
            <FormControl fullWidth>
              <FormLabel>Số lượng Landing Page khởi tạo hàng tháng:</FormLabel>
              <Select
                size="small"
                name="landingPageQuantity"
                value={formData.landingPageQuantity}
                onChange={handleChange}
                required
              >
                <MenuItem value="1-5">1-5</MenuItem>
                <MenuItem value="6-10">6-10</MenuItem>
                <MenuItem value="11-25">11-25</MenuItem>
                <MenuItem value="26-50">26-50</MenuItem>
                <MenuItem value="51-100">51-100</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="form-group">
            <FormControl fullWidth>
              <FormLabel>Số lượng Form (Survey, Feedback…) khởi tạo hàng tháng:</FormLabel>
              <Select
                size="small"
                name="formQuantity"
                value={formData.formQuantity}
                onChange={handleChange}
                required
              >
                <MenuItem value="1-5">1-5</MenuItem>
                <MenuItem value="6-10">6-10</MenuItem>
                <MenuItem value="11-25">11-25</MenuItem>
                <MenuItem value="26-50">26-50</MenuItem>
                <MenuItem value="51-100">51-100</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="form-group">
            <FormControl component="fieldset">
              <FormLabel component="legend">Loại người dùng:</FormLabel>
              <RadioGroup row name="userType" value={formData.userType} onChange={handleChange} required>
                <FormControlLabel value="Personal" control={<Radio />} label="Personal" />
                <FormControlLabel value="Business" control={<Radio />} label="Business" />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="form-group">
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Đăng ký
            </Button>
          </div>
        </form>

        {/* <div className="footer text-center mt-8">
          <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
          <p>Contact us at: info@example.com</p>
        </div> */}
      </div>
    </div>
  );
};

export default Register;


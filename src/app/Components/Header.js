import React from 'react';
import { AppBar, Toolbar, styled, Typography } from '@mui/material';
import Link from "next/link";
import { color, width } from '@mui/system';
import Image from 'next/image';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#fff', // Thay đổi màu sắc ở đây
    boxShadow: 'none', // Bỏ hiệu ứng đổ bóng
    height: '64px', // Điều chỉnh chiều cao ở đây
    borderBottom: '3px solid rgba(0, 0, 0, 0.12)', // Thêm đường viền dưới
}));

const Header = () => {
    return (
        <StyledAppBar position="fixed" className='w-full flex justify-between items-center'>
            <Toolbar className='2xl:w-[1280px] w-[100%] '>
                <Link href="/" underline="hover" style={{ marginRight: 20, display: 'flex', alignItems: 'center', color: '#000000', fontWeight: 'bold', flexGrow: 1 }}>
                    <Image src="/LOGO.png" alt="logo" width={50} height={50} className='w-[40px] sm:w-[50px]' />
                    <Typography variant="h6" style={{ display: 'inline-block', marginLeft: 10, fontWeight: 'bold', color: '#692873' }} className='text-[12px] sm:text-[15px]'>
                        QR Code Generator
                    </Typography>
                </Link>
                <Link href="/" underline="hover" style={{ marginRight: 20, color: '#000000', fontWeight: 'bold', }} className='text-[12px] sm:text-[15px]'>
                    Tạo QR Code
                </Link>
                <Link href="/Scan" color="#000000" underline="hover" style={{ marginRight: 20, color: '#000000', fontWeight: 'bold' }} className='text-[12px] sm:text-[15px]'>
                    Quét QR Code
                </Link>
                <Link href="/Login" color="#000000" underline="hover" style={{ marginRight: 20, color: '#000000', fontWeight: 'bold' }} className='text-[12px] sm:text-[15px]'>
                    Đăng ký
                </Link>
                <Link href="/SignUp" color="#000000" underline="hover" style={{ color: '#000000', fontWeight: 'bold' }} className='text-[12px] sm:text-[15px]'>
                    Đăng nhập
                </Link>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Header;
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
            <Toolbar className='max-w-[1280px] min-w-[1280px] ma'>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Image src="/logo.jpg" alt="logo" width={150} height={150} />
                </Typography>
                <Link href="/" underline="hover" style={{ marginRight: 20, color: '#000000', fontWeight: 'bold' }}>
                    Tạo QR Code
                </Link>
                <Link href="" color="#000000" underline="hover" style={{ color: '#000000', fontWeight: 'bold' }}>
                    Quét QR Code
                </Link>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Header;
import React from 'react';
import {
    AppBar, Toolbar, styled, Typography, Avatar, Menu, MenuItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material';
import Link from "next/link";
import { color, width } from '@mui/system';
import Image from 'next/image';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#fff', // Thay đổi màu sắc ở đây
    boxShadow: 'none', // Bỏ hiệu ứng đổ bóng
    height: '64px', // Điều chỉnh chiều cao ở đây
    borderBottom: '3px solid rgba(0, 0, 0, 0.12)', // Thêm đường viền dưới
}));

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    return (
        <StyledAppBar position="fixed" className='w-full flex justify-between items-center'>
            <Toolbar className='2xl:w-[1280px] w-[100%] '>
                <Link href="/" underline="hover" style={{ marginRight: 20, display: 'flex', alignItems: 'center', color: '#000000', fontWeight: 'bold', flexGrow: 1 }}>
                    <Image src="/logo-teca.png" alt="logo" width={90} height={90} className='w-auto sm:w-auto' />
                    <Typography variant="h6" style={{ display: 'inline-block', marginLeft: 10, fontWeight: 'bold', color: '#692873' }} className='text-[12px] sm:text-[15px]'>
                        QR Code Generator
                    </Typography>
                </Link>
                {/* <Link href="/" underline="hover" style={{ marginRight: 20, color: '#000000', fontWeight: 'bold', }} className='text-[12px] sm:text-[15px]'>
                    Tạo QR Code
                </Link> */}
                <Link href="/Scan" color="#000000" underline="hover" style={{ marginRight: 20, color: '#000000', fontWeight: 'bold' }} className='text-[12px] sm:text-[15px]'>
                    Quét QR Code
                </Link>
                {/* <Link href="/SignUp" color="#000000" underline="hover" style={{ marginRight: 20, color: '#000000', fontWeight: 'bold' }} className='text-[12px] sm:text-[15px]'>
                    Đăng ký
                </Link> */}
                {/* <Link href="/Login" color="#000000" underline="hover" style={{ color: '#000000', fontWeight: 'bold' }} className='text-[12px] sm:text-[15px]'>
                    Đăng nhập
                </Link> */}
                <Avatar
                    // src={userData?.picture}
                    // alt={userData?.name}
                    onClick={handleAvatarClick}
                    style={{ cursor: 'pointer' }}
                />
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem>
                        <ListItemText>
                            <Link href="/SignUp" color="#000000" underline="hover" style={{ color: '#000000', fontWeight: 'bold' }} className='text-[12px] sm:text-[15px]'>
                                Đăng ký
                            </Link>
                            {/* <Typography variant="body2">{userData?.email}</Typography> */}
                        </ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        {/* <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon> */}
                        <ListItemText>
                            <Link href="/Login" color="#000000" underline="hover" style={{ color: '#000000', fontWeight: 'bold' }} className='text-[12px] sm:text-[15px]'>
                                Đăng nhập
                            </Link>
                        </ListItemText>
                    </MenuItem>
                    {/* <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sign out" />
                    </MenuItem> */}
                </Menu>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Header;
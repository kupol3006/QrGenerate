"use client";
import React, { useState, useEffect } from 'react';
import {
  Settings,
  Search,
  StarBorder,
  NotificationsNone,
  Person,
  Mail,
  ChatBubbleOutline,
  Logout,
  HelpOutline,
  AttachMoney,
} from '@mui/icons-material';
import { Avatar, Menu as MuiMenu, MenuItem as MuiMenuItem } from '@mui/material';
import { Button, TextField, IconButton } from '@mui/material';
import Cookies from 'js-cookie';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [userData, setUserData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [anchorEl1, setAnchorEl1] = useState(null);
    const [openCreateForm, setOpenCreateForm] = useState(false);
    const [openCreateLandingPage, setOpenCreateLandingPage] = useState(false);

    useEffect(() => {
        const token = Cookies.get('google_token');
        const user = Cookies.get('google_user');
        if (token && user) {
            setIsLoggedIn(true);
            setUserData(JSON.parse(user));
        }
    }, []);
    const handleLogout = () => {
        Cookies.remove('google_token');
        Cookies.remove('google_user');
        setIsLoggedIn(false);
        setUserData(null);
        setAnchorEl1(null);
        router.push('/Login');
    };


  return (
    <header className="bg-transparent py-1 xl:px-[110px] flex justify-between items-center px-8">
      <div className="flex items-center">
        <TextField
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-md py-2 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          size='small'
          InputProps={{
            startAdornment: (
              <Search className="text-gray-500" />
            ),
            sx: {
              borderRadius: '18px',
            },
          }}
        >
          
        </TextField>
      </div>
      <div className="flex items-center">
        <IconButton className="relative mr-6">
          <NotificationsNone className="text-gray-500 cursor-pointer" />
        </IconButton>
        <div>
      <Avatar
        alt={userData?.name}
        src={userData?.picture}
        className="cursor-pointer"
        onClick={handleClick}
      />
      <MuiMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{ marginTop: '5px' }}
        PaperProps={{
          sx: {
            width: '220px', // Điều chỉnh độ rộng menu
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)', // Thêm box shadow
            borderRadius: '8px', // Bo tròn góc menu
            '& .MuiMenuItem-root': { // Thay đổi style cho MenuItem
              padding: '12px 16px', // Điều chỉnh padding
              gap: '12px', // Khoảng cách giữa icon và text
              fontWeight: '500',
            },
          },
        }}
      >
        <div className='flex flex-col gap-2 p-2'>
          <div className='flex items-center justify-between px-2'>
            <div className='flex items-center gap-2'>
              <Avatar alt={userData?.name}
        src={userData?.picture} 

        />
              <div>
                <p className='text-sm font-medium'>{userData?.name}</p>
                <p className='text-xs text-[#7B7F9E]'>Admin</p>
              </div>
            </div>
          </div>
          <hr className='border-t border-[#E5E7EB] mx-2' />
        </div>
        <MuiMenuItem onClick={handleClose} className='text-[#524E5E] hover:bg-[#F5F5F5]'>
          <Person className="mr-2" /> My Profile
        </MuiMenuItem>
        <MuiMenuItem onClick={handleClose} className='text-[#524E5E] hover:bg-[#F5F5F5]'>
          <Settings className="mr-2" /> Settings
        </MuiMenuItem>
        <MuiMenuItem onClick={handleClose} className='text-[#524E5E] hover:bg-[#F5F5F5]'>
          <AttachMoney className="mr-2" /> Pricing
        </MuiMenuItem>
        <MuiMenuItem onClick={handleClose} className='text-[#524E5E] hover:bg-[#F5F5F5]'>
          <HelpOutline className="mr-2" /> FAQ
        </MuiMenuItem>
        <div className="px-2 py-3">
          <Button
            variant="contained"
            color="error"
            startIcon={<Logout />}
            fullWidth
            sx={{
              boxShadow: 'none', // Loại bỏ box shadow mặc định
              borderRadius: '8px', // Bo tròn góc button
              textTransform: 'none', // Không viết hoa chữ
              fontWeight: '500', // Độ dày chữ
            }}
          >
            Logout
          </Button>
        </div>
      </MuiMenu>
    </div>
      </div>
    </header>
  );
};
export default Header;
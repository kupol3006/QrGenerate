"use client";
import React, { useState, useEffect, useRef } from 'react';
import {
  Settings,
  NotificationsNone,
  Person,
  AttachMoney,
  Logout,
  HelpOutline,
} from '@mui/icons-material';
import { Avatar, Menu as MuiMenu, MenuItem as MuiMenuItem, IconButton, Button } from '@mui/material';
import Cookies from 'js-cookie';

const Header = ({ scrollContainerRef }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll status
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle avatar click to open/close the menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Scroll event listener to manage background change on scroll
  useEffect(() => {
    const token = Cookies.get('google_token');
    const user = Cookies.get('google_user');
    if (token && user) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        // Lấy giá trị scrollTop của phần tử scroll
        const scrollTop = scrollContainerRef.current._container.scrollTop;
        console.log('scrollTop:', scrollTop);

        if (scrollTop > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    const container = scrollContainerRef.current?._container; // Lấy phần tử scroll
    if (container) {
      container.addEventListener('scroll', handleScroll); // Sử dụng sự kiện 'scroll' của phần tử DOM
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll); // Cleanup sự kiện khi component unmount
      }
    };
  }, [scrollContainerRef]);


  // Handle logout
  const handleLogout = () => {
    Cookies.remove('google_token');
    Cookies.remove('google_user');
    Cookies.remove('token');
    window.location.href = 'Login';
  };

  return (
    <header
      className={`lg:w-[79.5%] w-full h-[60px] flex justify-center items-center fixed z-10 transition-all duration-700 ${isScrolled ? 'bg-white shadow-xl px-3' : 'bg-transparent'
        }`}
    >
      <div className="w-full h-[60px] flex justify-end items-center px-2">
        {/* Notification Icon */}
        <IconButton className="relative mr-6">
          <NotificationsNone className="text-gray-500 cursor-pointer" />
        </IconButton>

        {/* User Avatar with Menu */}
        <div>
          <Avatar
            alt={userData?.name}
            src={userData?.picture}
            className="cursor-pointer"
            onClick={handleClick}
          />

          <MuiMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              sx: {
                width: '220px',
                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                '& .MuiMenuItem-root': {
                  padding: '12px 16px',
                  gap: '12px',
                  fontWeight: '500',
                },
              },
            }}
          >
            {/* User Info */}
            <div className='flex flex-col gap-2 p-2'>
              <div className='flex items-center justify-between px-2'>
                <div className='flex items-center gap-2'>
                  <Avatar alt={userData?.name} src={userData?.picture} />
                  <div>
                    <p className='text-sm font-medium'>{userData?.name}</p>
                    <p className='text-xs text-[#7B7F9E]'>Admin</p>
                  </div>
                </div>
              </div>
              <hr className='border-t border-[#E5E7EB] mx-2' />
            </div>

            {/* Menu Items */}
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

            {/* Logout Button */}
            <div className="px-2 py-3">
              <Button
                variant="contained"
                color="error"
                startIcon={<Logout />}
                fullWidth
                sx={{
                  boxShadow: 'none',
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontWeight: '500',
                }}
                onClick={handleLogout}
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
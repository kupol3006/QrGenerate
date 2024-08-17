// ComponentDashboard/MenuResponsive.js
'use client';
import Link from 'next/link';
import {
  TextFields,
  GridView,
  CreditCard,
  ViewInAr,
  Menu as MenuIcon,
  KeyboardArrowDown,
  KeyboardArrowUp,
  CircleOutlined as CircleOutlinedIcon,
} from '@mui/icons-material';
import {
  Drawer,
  List,
  IconButton,
  Box,
} from '@mui/material';
import { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import DynamicFormOutlinedIcon from '@mui/icons-material/DynamicFormOutlined';
import FormatAlignJustifyOutlinedIcon from '@mui/icons-material/FormatAlignJustifyOutlined';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import Image from 'next/image';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';

const menuItems = [
  {
    label: 'QR Code Manager', 
    type: 'divider',
  },
  {
    label: 'QR Code Manager',
    href: '#2',
    icon: <QrCode2OutlinedIcon />,
    subCategories: [
      { label: 'List', href: '#2/list' },
      { label: 'Create', href: '#2/create' },
      { label: 'Reporting', href: '#2/reporting' },
    ],
  },
  {
    label: 'Gamification',
    href: '#11',
    icon: <SportsEsportsOutlinedIcon />,
    subCategories: [
      { label: 'List', href: '#11/list' },
      { label: 'Create', href: '/Gamification' },
      { label: 'Reporting', href: '#11/reporting' },
    ],
  },
  {
    label: 'Landing Page',
    href: '#3',
    icon: <WebOutlinedIcon />,
    subCategories: [
      { label: 'List', href: '#3/list' },
      { label: 'Create', href: '#3/create' },
      { label: 'Reporting', href: '#3/reporting' },
    ],
  },
  {
    label: 'Form Builder',
    href: '#4',
    icon: <DynamicFormOutlinedIcon />,
    subCategories: [
      { label: 'List', href: '#4/list' },
      { label: 'Create', href: '#4/create' },
      { label: 'Submitted Form', href: '#4/submitted-form' },
      { label: 'Reporting', href: '#4/reporting' },
    ],
  },
  {
    label: 'Form Template',
    href: '#5',
    icon: <FormatAlignJustifyOutlinedIcon />,
    subCategories: [
      { label: 'List', href: '#5/list' },
      { label: 'Create', href: '#5/create' },
    ],
  },
  {
    label: 'Workflow',
    type: 'divider',
  },
  {
    label: 'Workflow',
    href: '#6',
    icon: <SchemaOutlinedIcon />,
    subCategories: [
      { label: 'List', href: '#6/list' },
      { label: 'Create', href: '#6/create' },
      { label: 'Reporting', href: '#6/reporting' },
    ],
  },
  {
    label: 'User Manager',
    type: 'divider',
  },
  {
    label: 'Role Manager',
    href: '#7',
    icon: <ManageAccountsOutlinedIcon />,
    subCategories: [
      { label: 'List', href: '#7/list' },
      { label: 'Create', href: '#7/create' },
    ],
  },
  {
    label: 'User manager',
    href: '#8',
    icon: <PersonOutlineOutlinedIcon />,
    subCategories: [
      { label: 'List', href: '#8/list' },
      { label: 'Create', href: '#8/create' },
    ],
  },
  {
    label: 'Account Setting',
    href: '#9',
    icon: <AccountBoxOutlinedIcon />,
    subCategories: [
      { label: 'Email Setting', href: '#9/email-setting' },
      { label: 'SMS Setting', href: '#9/sms-setting' },
      { label: 'Zalo OA/ZNS Setting', href: '#9/zalo-setting' },
      { label: 'Payment Setting', href: '#9/payment-setting' },
      { label: 'Captcha Setting', href: '#9/captcha-setting' },
      { label: 'Google Calendar Setting', href: '#9/google-calendar-setting' },
      { label: 'Google Map Setting', href: '#9/google-map-setting' },
    ],
  },
];

const MenuItem = ({
  href,
  icon,
  children,
  active,
  onClick,
  isOpen,
  toggleOpen,
  subCategories,
  activeSubCategory,
  onSubCategoryClick,
}) => (
  <div>
    <div
      className={`flex items-center p-2 rounded-tr-[20px] rounded-br-[20px] pl-6 mt-1 mb-1 hover:bg-[#ECEDF3] cursor-pointer ${
        active
          ? 'bg-gradient-to-r from-custom-purple-light to-custom-purple-dark shadow-lg text-white'
          : 'text-custom-gray'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-2">{children}</span>
      {subCategories && (
        <KeyboardArrowDown
          className={`ml-auto transform transition-transform duration-1000 ease-in-out ${
            isOpen ? 'rotate-0' : 'rotate-180'
          }`}
        />
      )}
    </div>
    {subCategories && (
      <ul
        className={`transition-[max-height,opacity,transform] duration-[2000ms] ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[1000px] opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-2'
        }`}
      >
        {subCategories.map((subCategory, subIndex) => (
          <li key={subIndex}>
            <Link href={subCategory.href} legacyBehavior>
              <a
                className={`flex items-center p-2 rounded-tr-[20px] rounded-br-[20px] pl-6 mt-1 mb-1 hover:bg-[#ECEDF3] cursor-pointer ${
                  activeSubCategory === subCategory.href
                    ? 'bg-gradient-to-r from-custom-purple-light to-custom-purple-dark shadow-lg text-white'
                    : 'text-custom-gray'
                }`}
                onClick={() => onSubCategoryClick(subCategory.href)}
              >
                <CircleOutlinedIcon
                  sx={{ fontSize: 12 }}
                  className="mr-2 ml-1"
                />
                {subCategory.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const MenuResponsive = ({ activeCategory, onCategoryChange }) => {
  const [open, setOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState({});
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const toggleCategory = (href) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [href]: !prevState[href],
    }));
  };

  const handleSubCategoryClick = (subCategoryHref) => {
    setActiveSubCategory(subCategoryHref);
    onCategoryChange(subCategoryHref); // Cập nhật activeCategory khi click subCategory
    toggleDrawer(false); // Đóng drawer sau khi chọn
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        className="absolute z-50 top-3 left-6"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <div
          className="w-64 h-screen bg-[#F4F5FA] rounded-md mb-6 p-4 pl-0 custom-scrollbar  overflow-auto"
          onClick={toggleDrawer(true)}
          onKeyDown={toggleDrawer(true)}
        >
          <div className="text-[#524E5E] text-2xl font-bold mb-0 ml-8 flex items-center">
        <Image src="/logo-teca-icon.png" alt="logo" width={50} height={50} />
        TECA
      </div>
      

          <List>
          <Box
        className='flex items-center p-2 rounded-tr-[20px] rounded-br-[20px] pl-6 mt-1 mb-1 bg-gradient-to-r from-[#006699] to-[#39B54A] shadow-lg text-white cursor-pointer'
        
      >
        <HomeOutlinedIcon className='mr-2'/>
        Dashboard
      </Box>
            {menuItems.map((item, index) => {
              if (item.type === 'divider') {
                return (
                  <div
                    key={index}
                    className="relative text-gray-500 text-sm mt-6 mb-2 pl-6"
                  >
                    <span className="relative z-10 bg-[#F4F5FA] p-1">
                      {item.label}
                    </span>
                    <span className="absolute inset-y-[10px] left-0 w-full border-t border-gray-300"></span>
                  </div>
                );
              }

              return (
                <MenuItem
                  key={index}
                  href={item.href}
                  icon={item.icon}
                  active={activeCategory === item.href}
                  onClick={() => {
                    onCategoryChange(item.href);
                    if (item.subCategories) {
                      toggleCategory(item.href);
                    } else {
                      toggleDrawer(false); // Đóng drawer nếu không có subCategory
                    }
                  }}
                  isOpen={openCategories[item.href]}
                  toggleOpen={() => toggleCategory(item.href)}
                  subCategories={item.subCategories}
                  activeSubCategory={activeSubCategory}
                  onSubCategoryClick={handleSubCategoryClick}
                >
                  {item.label}
                </MenuItem>
              );
            })}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default MenuResponsive;
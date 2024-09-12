// ComponentDashboard/Menu.js
'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  ErrorOutline as ErrorOutlineOutlinedIcon,
  TextFields,
  GridView,
  CreditCard,
  ViewInAr,
} from '@mui/icons-material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Box } from '@mui/material';

import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import DynamicFormOutlinedIcon from '@mui/icons-material/DynamicFormOutlined';
import FormatAlignJustifyOutlinedIcon from '@mui/icons-material/FormatAlignJustifyOutlined';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import  Image from 'next/image';
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
      { label: 'Create', href: '/Landingpage' },
      { label: 'Reporting', href: '#3/reporting' },
    ],
  },
  {
    label: 'Form Builder',
    href: '#4',
    icon: <DynamicFormOutlinedIcon />,
    subCategories: [
      { label: 'List', href: '#4/list' },
      { label: 'Create', href: '/FormBuilder' },
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
      className={`flex items-center p-[8px] rounded-tr-[20px] rounded-br-[20px] pl-6 mt-1 mb-1 hover:bg-[#E5E5EB] cursor-pointer ${
        active
          ? 'bg-[#E5E5EB] text-custom-gray' // Sử dụng màu của active category
          : 'text-custom-gray'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-2">{children}</span>
      {subCategories && (
        <KeyboardArrowDown
          className={`ml-auto transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'rotate-0' : 'rotate-[-90deg]'
          }`}
        />
      )}
    </div>
    {subCategories && (
      <ul
        className={`transition-[max-height,opacity,transform] duration-[750ms] ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[1000px] opacity-100 transform' : 'max-h-0 opacity-100 transform'
        }`}
      >
        {subCategories.map((subCategory, subIndex) => (
          <li key={subIndex}>
            <Link href={subCategory.href} legacyBehavior>
              <a
                className={`flex items-center p-1 rounded-tr-[20px] rounded-br-[20px] pl-6 mt-1 mb-1 hover:bg-[#ECEDF3] cursor-pointer ${
                  activeSubCategory === subCategory.href
                    ? 'bg-gradient-to-r from-[#006699] to-[#39B54A] shadow-lg text-white' // Sử dụng màu của active category
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

const Menu = ({ activeCategory, activeSubCategory, onCategoryChange, onSubCategoryChange, setActiveCategory, setActiveSubCategory }) => {
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (href) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [href]: !prevState[href],
    }));
    console.log('Active category:', activeCategory);
  };

  // Inside your component
  useEffect(() => {
    console.log('Active sub category updated:', activeSubCategory);
  }, [activeSubCategory]);
    

  const handleSubCategoryClick = (subCategoryHref) => {
    setActiveSubCategory(subCategoryHref); // Cập nhật activeSubCategory khi click subCategory
    onSubCategoryChange(subCategoryHref);
    console.log('Active sub category:', activeSubCategory);
    
  };

  return (
    <div className="w-70 h-screen bg-transparent rounded-md p-4 pl-0 custom-scrollbar overflow-auto">
      <div className="text-[#524E5E] text-2xl font-bold mb-8 mt-2 ml-8 flex items-center">
        <Image src="/logo-teca.png" alt="logo" width={120} height={120} />
      </div>

      {menuItems.map((item, index) => {
  if (item.type === 'divider') {
    return (
      <div key={index} className="relative text-gray-500 text-sm mt-6 mb-2 pl-6">
        <span className="relative z-10 bg-[#F4F5FA] p-1">{item.label}</span>
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
            }
          }}
          isOpen={openCategories[item.href]}
          toggleOpen={() => toggleCategory(item.href)}
          subCategories={item.subCategories}
          activeSubCategory={activeSubCategory}
          // onSubCategoryClick={(subCategoryHref) => {
          //   handleSubCategoryClick(subCategoryHref);
          //   onCategoryChange(item.href);
          // }}
          onSubCategoryClick={(subCategoryHref) => handleSubCategoryClick(subCategoryHref)}
        >
          {item.label}
        </MenuItem>
      );
    })}
    </div>
  );
};

export default Menu;
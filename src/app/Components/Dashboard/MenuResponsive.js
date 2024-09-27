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
import { useEffect, useState } from 'react';
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
import PerfectScrollbar from 'react-perfect-scrollbar';

const menuItems = [
  {
    label: 'QR Code Manager',
    href: 'QrCodeManager',
    icon: <QrCode2OutlinedIcon />,
    subCategories: [
      { label: 'List', href: '/QrCodeManager/list' },
      { label: 'Create', href: '/QrCodeManager/create' },
      { label: 'Reporting', href: '/QrCodeManager/reporting' },
    ],
  },
  {
    label: 'Gamification',
    href: 'Gamification',
    icon: <SportsEsportsOutlinedIcon />,
    subCategories: [
      { label: 'List', href: '/Gamification/list' },
      { label: 'Create', href: '/Gamification' },
      { label: 'Reporting', href: '/Gamification/reporting' },
    ],
  },
  {
    label: 'Landing Page',
    href: 'Landingpage',
    icon: <WebOutlinedIcon />,
    subCategories: [
      { label: 'List', href: '/Landingpage/list' },
      { label: 'Create', href: '/Landingpage' },
      { label: 'Reporting', href: '/Landingpage/reporting' },
    ],
  },
  {
    label: 'Form Builder',
    href: 'FormBuilder',
    icon: <DynamicFormOutlinedIcon />,
    subCategories: [
      { label: 'List', href: '/FormBuilder/list' },
      { label: 'Create', href: '/FormBuilder/Create' },
      { label: 'Submitted Form', href: '/FormBuilder/submitted-form' },
      { label: 'Reporting', href: '/FormBuilder/reporting' },
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
          ? 'bg-[#E5E5EB] text-custom-gray'
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
            {/* <Link href={subCategory.href} legacyBehavior> */}
              <a
                className={`flex items-center p-1 rounded-tr-[20px] rounded-br-[20px] pl-6 mt-1 mb-1 hover:bg-[#ECEDF3] cursor-pointer ${
                  activeSubCategory === subCategory.href
                    ? 'bg-gradient-to-r from-[#006699] to-[#39B54A] shadow-lg text-white'
                    : 'text-custom-gray'
                }`}
                onClick={(event) => onSubCategoryClick(subCategory.href, href, event)}
              >
                <CircleOutlinedIcon
                  sx={{ fontSize: 12 }}
                  className="mr-2 ml-1"
                />
                {subCategory.label}
              </a>
            {/* </Link> */}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const MenuResponsive = ({ activeCategory, activeSubCategory, onCategoryChange, onSubCategoryChange, setActiveCategory, setActiveSubCategory, onCreateClick }) => {
  const [open, setOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState({});

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const toggleCategory = (href) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [href]: !prevState[href],
    }));
    console.log('Active category:', href);
  };

  useEffect(() => {
    console.log('subCategories:', activeSubCategory);
  }, [activeSubCategory]);

  const handleSubCategoryClick = (subCategoryHref, categoryHref, event) => {
    // event.preventDefault();
    const newUrl = `/Dashboard${subCategoryHref}`;
    window.history.pushState(null, '', newUrl); // Cập nhật URL mà không chuyển trang
  
    if (subCategoryHref === '/FormBuilder/Create') {
      onCreateClick();
    }
  
    setActiveSubCategory(subCategoryHref);
    onSubCategoryChange(subCategoryHref);
  
    console.log('Active SubCategory:', subCategoryHref);
    console.log('Active Category:', categoryHref);
  
    toggleDrawer(false)();
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
        <PerfectScrollbar>
          <div
            className="w-64 min-h-screen max-h-[3000vh] bg-[#F4F5FA] rounded-md mb-6 p-4  pl-0 overflow-hidden overflow-auto"
            onClick={toggleDrawer(true)}
            onKeyDown={toggleDrawer(true)}
          >
            <div className="text-[#524E5E] text-2xl font-bold mb-0 ml-8 flex items-center">
              <Image src="/logo-teca.png" alt="logo" width={120} height={120} />
            </div>
            <List>
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
                      }
                    }}
                    isOpen={openCategories[item.href]}
                    toggleOpen={() => toggleCategory(item.href)}
                    subCategories={item.subCategories}
                    activeSubCategory={activeSubCategory}
                    onSubCategoryClick={(subCategoryHref, event) =>
                      handleSubCategoryClick(subCategoryHref, item.href, event)
                    }
                  >
                    {item.label}
                  </MenuItem>
                );
              })}
            </List>
          </div>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
};

export default MenuResponsive;
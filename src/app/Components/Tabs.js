'use client';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';
import SmsSharpIcon from '@mui/icons-material/SmsSharp';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import WifiIcon from '@mui/icons-material/Wifi';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import LocalAtmSharpIcon from '@mui/icons-material/LocalAtmSharp';
import { setLink } from '../redux/slices/qrCodeSlice';
import { useDispatch } from 'react-redux';
import { updateImageObject } from '../redux/slices/qrCodeSlice';

const TabsGrid = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '3px',
    width: '100%',
}));

const StyledButton = styled(Button)(({ theme, selected }) => ({
    minWidth: '40px',
    maxWidth: '160px',
    minHeight: '30px',
    maxHeight: '90px',
    fontWeight: 'bold',
    color: selected ? '#0284c7' : '#0EA5E9',
    fontSize: '15px',
    textTransform: 'none',
    borderBottom: selected ? '2px solid #0284c7' : '2px solid transparent',
    // backgroundColor: selected ? '#E0F2FE' : 'transparent',
    '&:hover': {
        backgroundColor: '#E0F2FE',
    },
}));

const CustomizedTabs = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
        dispatch(setLink(newValue));
        dispatch(updateImageObject({ id: 7, src: '/frame100.svg', alt: 'QR Code' }));
        // console.log(`newValue: ${newValue}, value: ${value}`);
    };

    const tabs = [
        { label: 'Link', icon: <LinkIcon sx={{ fontSize: '17px' }} /> },
        { label: 'Contact', icon: <ContactEmergencyIcon sx={{ fontSize: '17px' }} /> },
        { label: 'Text', icon: <ArticleIcon sx={{ fontSize: '17px' }} /> },
        { label: 'Email', icon: <EmailIcon sx={{ fontSize: '17px' }} /> },
        { label: 'SMS', icon: <SmsSharpIcon sx={{ fontSize: '17px' }} /> },
        { label: 'Wifi', icon: <WifiIcon sx={{ fontSize: '17px' }} /> },
        { label: 'Bitcoin', icon: <CurrencyBitcoinIcon sx={{ fontSize: '17px' }} /> },
        { label: 'Facebook', icon: <FacebookSharpIcon sx={{ fontSize: '17px' }} /> },
        { label: 'Chuyển khoản', icon: <LocalAtmSharpIcon sx={{ fontSize: '17px' }} /> },
    ];

    return (
        <TabsGrid>
            {tabs.map((tab, index) => (
                <StyledButton
                    key={index}
                    selected={value === index}
                    onClick={() => handleChange(index)}
                    startIcon={tab.icon}
                    className='rounded-[0px]'
                >
                    {tab.label}
                </StyledButton>
            ))}
        </TabsGrid>
    );
};

export default CustomizedTabs;
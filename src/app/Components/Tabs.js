'use client';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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
import { useDispatch, useSelector } from 'react-redux';

// Tạo styled components
const StyledTabs = styled(Tabs)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: '#0ea5e9',
    minHeight: '30px',
    '& .MuiTabs-indicator': {
        backgroundColor: '#0284c7',
        height: '11px',
    },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
    minWidth: '60px',
    maxWidth: '90px',
    minHeight: '30px',
    fontWeight: 'bold',
    color: '#0EA5E9',
    fontSize: '15px',
    textTransform: 'none',
}));

const CustomizedTabs = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        dispatch(setLink(newValue));
        console.log(`newValue: ${newValue}, value: ${value}`);
    };

    return (
        <StyledTabs
            value={value}
            onChange={handleChange}
            // variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '30px', width: '876px' }}
        >
            <StyledTab icon={<LinkIcon sx={{ fontSize: '17px', marginTop: '5px', marginRight: '5px' }} />} label="Link" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', maxWidth: '70px', marginLeft: '12px' }} />
            <StyledTab icon={<ContactEmergencyIcon sx={{ fontSize: '17px', marginTop: '5px', marginRight: '5px' }} />} label="Contact" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', maxWidth: '82px', marginLeft: '12px' }} />
            <StyledTab icon={<ArticleIcon sx={{ fontSize: '17px', marginTop: '5px', marginRight: '5px' }} />} label="Text" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', maxWidth: '70px', marginLeft: '12px' }} />
            <StyledTab icon={<EmailIcon sx={{ fontSize: '17px', marginTop: '5px', marginRight: '5px' }} />} label="Email" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', maxWidth: '72px', marginLeft: '12px' }} />
            <StyledTab icon={<SmsSharpIcon sx={{ fontSize: '17px', marginTop: '5px', marginRight: '5px' }} />} label="SMS" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', maxWidth: '74px', marginLeft: '12px' }} />
            <StyledTab icon={<WifiIcon sx={{ fontSize: '17px', marginTop: '5px', marginRight: '5px' }} />} label="Wifi" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', maxWidth: '60px', marginLeft: '12px' }} />
            <StyledTab icon={<CurrencyBitcoinIcon sx={{ fontSize: '17px', marginTop: '5px', marginRight: '5px' }} />} label="Bitcoin" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', maxWidth: '74px', marginLeft: '12px' }} />
            <StyledTab icon={<FacebookSharpIcon sx={{ fontSize: '17px', marginTop: '5px', marginRight: '5px' }} />} label="Facebook" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', maxWidth: '100px', marginLeft: '12px' }} />
            <StyledTab icon={<LocalAtmSharpIcon sx={{ fontSize: '17px', marginTop: '5px', marginRight: '5px' }} />} label="Chuyển khoản" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', maxWidth: '163px' }} />
            {/* Thêm các tab khác ở đây */}
        </StyledTabs>
    );
};

export default CustomizedTabs;
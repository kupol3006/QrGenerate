'use client';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LinkIcon from '@mui/icons-material/Link';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import ArticleIcon from '@mui/icons-material/Article';
import WifiIcon from '@mui/icons-material/Wifi';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

// Tạo styled components
const StyledTabs = styled(Tabs)({
    backgroundColor: 'transparent',
    height: '50px',
    '& .MuiTabs-indicator': {
        backgroundColor: 'blue',
        height: 12,
    },
});

const StyledTab = styled(Tab)(({ theme }) => ({
    minWidth: 120,
    fontWeight: theme.typography.fontWeightRegular,
}));

const CustomizedTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(`newValue: ${newValue}, value: ${value}`);
    };

    return (
        <StyledTabs
            value={value}
            onChange={handleChange}
            // variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}
        >
            <StyledTab icon={<LinkIcon />} label="Link" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '50px' }} />
            <StyledTab icon={<ContactEmergencyIcon />} label="Contact" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '50px' }} />
            <StyledTab icon={<ArticleIcon />} label="Text" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '50px' }} />
            <StyledTab icon={<WifiIcon />} label="Wifi" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '50px' }} />
            <StyledTab icon={<CurrencyBitcoinIcon />} label="Bitcoin" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '50px' }} />
            {/* Thêm các tab khác ở đây */}
        </StyledTabs>
    );
};

export default CustomizedTabs;
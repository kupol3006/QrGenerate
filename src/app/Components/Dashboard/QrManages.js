import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { QRCode } from 'react-qrcode-logo';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import LinkIcon from '@mui/icons-material/Link';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Divider from '@mui/material/Divider';

export default function BusinessCard() {
    return (
        <Box
            sx={{
                height: '152px',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                border: '1px solid #ccc',
                padding: 1,
                backgroundColor: '#FFFFFF',
            }}
        >
            <Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', mb: 1 }}>
                    <Typography variant="body2" className='text-[#797D80] text-[12px] ml-11'>FormBuilder</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>

                        <HouseOutlinedIcon sx={{ mr: 1, color: '#797D80' }} fontSize='large' />
                        <Typography variant="h6" className='text-[#797D80] font-semibold'>My Business Page</Typography>
                    </Box>
                </Box>

                <Box className='w-[400px] grid grid-cols-2 ml-1'>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <FolderOutlinedIcon sx={{ mr: 1, color: '#797D80' }} fontSize='small' />
                        <Typography variant="body2" className='text-[#797D80]'>No folder</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <LinkIcon sx={{ mr: 1, color: '#797D80' }} fontSize='small' />
                        <Typography variant="body2" className='text-[#797D80]'>qrco.de/bfGZ8N</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTimeIcon sx={{ mr: 1, color: '#797D80' }} fontSize='small' />
                        <Typography variant="caption" className='text-[#797D80]'>Jul 29, 2024</Typography>
                    </Box>
                </Box>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ height: '100px', marginTop: '20px' }} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box className='flex flex-col justify-center items-start mr-4'>
                    <Typography variant="body1" sx={{ marginRight: 0 }}>0</Typography>
                    <Typography variant="caption" sx={{ marginRight: 0 }}>Scans</Typography>
                    <Button variant="text" sx={{ padding: '4px 0px' }} endIcon={<ArrowForwardIcon sx={{ marginLeft: '-7px' }} />}>Detail</Button>
                </Box>
                <QRCode value="https://www.google.com" size={120} />
                <Button variant="outlined" sx={{ marginLeft: 2, color: 'black' }}>Download</Button>
            </Box>
        </Box>
    );
}

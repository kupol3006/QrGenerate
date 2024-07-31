'use client';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { TextField } from '@mui/material';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function MenuDrawer({ open, handleDrawerClose }) {
    const theme = useTheme();

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: '#616568',
                    marginTop: '64px',
                },

            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader className='py-9'>
                <div className="relative">
                    <SearchOutlinedIcon className="absolute top-1/2 left-[190px] transform -translate-y-1/2 text-gray-400 z-10" />
                    <TextField
                        className="w-full rounded-[30px] bg-[#53585B] border-none"
                        placeholder="Search QR Codes..."
                        InputProps={{
                            sx: {
                                color: '#fff',
                                '&::placeholder': {
                                    color: '#fff',
                                    backgroundColor: '#53585B',
                                },
                                borderRadius: '30px',
                                border: 'none',
                                backgroundColor: '#53585B',
                            },
                        }}
                        fullWidth
                        size='small'
                    />
                </div>
            </DrawerHeader>
            {/* <Divider /> */}
            <List className='flex flex-col items-center justify-center gap-1'>
                {['All', 'Active', 'Paused'].map((text, index) => (
                    <ListItem key={text} sx={{ width: '95%', height: '35px', '&:hover': { bgcolor: '#797D80' }, padding: 0 }}>
                        <ListItemButton sx={{ color: '#fff', padding: '2px 10px' }}>
                            <ListItemIcon sx={{ color: '#A4A6A8', mr: '-6px', fontSize: '0px' }}>
                                {text === 'All' && <FormatListBulletedIcon />}
                                {text === 'Active' && <svg fill="#A4A6A8" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Wave_Pulse_1" data-name="Wave Pulse 1">
                                        <path d="M8.974,18h0a1.446,1.446,0,0,1-1.259-.972L5.872,12.883c-.115-.26-.262-.378-.349-.378H2.562a.5.5,0,1,1,0-1H5.523a1.444,1.444,0,0,1,1.263.972l1.839,4.145c.116.261.258.378.349.378h0c.088,0,.229-.113.344-.368L13.7,6.956A1.423,1.423,0,0,1,14.958,6h0a1.449,1.449,0,0,1,1.26.975l1.839,4.151c.11.249.259.379.349.379h3.028a.5.5,0,0,1,0,1H18.41a1.444,1.444,0,0,1-1.263-.975L15.308,7.379c-.116-.261-.259-.378-.35-.379h0c-.088,0-.229.114-.344.368l-4.385,9.676A1.437,1.437,0,0,1,8.974,18Z" />
                                    </g>
                                </svg>}
                                {text === 'Paused' && <PauseCircleOutlineIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{ padding: 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
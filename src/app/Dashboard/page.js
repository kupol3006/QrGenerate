'use client';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuDrawer from '../Components/Dashboard/Menu'; // Import the new MenuDrawer component
import Button from '@mui/material/Button';
import { Link, Chip, Divider, Avatar, TextField } from '@mui/material';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useRouter } from 'next/navigation';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Cookies from 'js-cookie';
import AddIcon from '@mui/icons-material/Add';
import BusinessCard from '../Components/Dashboard/QrManages';
import CreateForm from '../Components/FormBuidler/PopUpCreateForm';
import CreateLP from '../Components/LandingPage/PopUpCreateLP';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
const qrCodeData = [
    {
        id: 1,
        name: 'My Business Page',
        url: 'qrco.de/bfGZ8N',
        scans: 0,
        createdAt: 'Jul 29, 2024',
        activeDays: 13,
    },
];

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const router = useRouter();
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

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [anchorEl, setAnchorEl] = useState(null);
    const open1 = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (url) => {
        router.push(url);
    };

    const handleAvatarClick = (event) => {
        setAnchorEl1(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl1(null);
    };

    const handleCloseCreate = () => {
        setOpenCreateForm(false);
        setOpenCreateLandingPage(false);
    }

    return (
        <Box sx={{ display: 'flex' }} >

            <CssBaseline />
            <AppBar position="fixed" sx={{ backgroundColor: '#fff' }}>
                <Toolbar className='flex justify-between'>
                    <Box className='h-full flex justify-center items-center'>
                        <Image src="/QrGeneratePro.svg" alt="logo" width={210} height={50} />
                        <Divider orientation="vertical" flexItem sx={{ height: '20px', marginTop: '10px', marginLeft: 2, borderRightWidth: '1px' }} />
                        {open ? <IconButton
                            color="default"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ ml: 2 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#00BFFF' width="22" height="22" viewBox="0 0 22 11"> == $0
                                <path className="a" d="M22,18H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2ZM23,7a1,1,0,0,0-1-1H10a1,1,0,0,0,0,2H22A1,1,0,0,0,23,7Zm0,5a1,1,0,0,0-1-1H10a1,1,0,0,0,0,2H22A1,1,0,0,0,23,12ZM6.707,16.707a1,1,0,0,0,0-1.414L3.414,12,6.707,8.707A1,1,0,1,0,5.293,7.293l-4,4a1,1,0,0,0,0,1.414l4,4a1,1,0,0,0,1.414,0Z" transform="translate(-1 -6)"></path>
                            </svg>
                        </IconButton>
                            :
                            <IconButton
                                color="default"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ ml: 2 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill='#00BFFF' width="22" height="22" viewBox="0 0 22 11" > == $0
                                    <path className="a" d="M2,6H14a1,1,0,0,1,0,2H2A1,1,0,0,1,2,6ZM1,17a1,1,0,0,0,1,1H14a1,1,0,0,0,0-2H2A1,1,0,0,0,1,17Zm0-5a1,1,0,0,0,1,1H14a1,1,0,0,0,0-2H2A1,1,0,0,0,1,12ZM17.293,7.293a1,1,0,0,0,0,1.414L20.586,12l-3.293,3.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414l-4-4a1,1,0,0,0-1.414,0Z" transform="translate(-1 -6)"></path>
                                </svg>
                            </IconButton>
                        }
                    </Box>
                    <Box className='h-full flex justify-center items-center'>
                        <Avatar
                            src={userData?.picture}
                            alt={userData?.name}
                            onClick={handleAvatarClick}
                            style={{ cursor: 'pointer' }}
                            sx={{ width: 32, height: 32, backgroundColor: '#00BFFF' }}
                        />
                        <Menu
                            anchorEl={anchorEl1}
                            open={Boolean(anchorEl1)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem>
                                <ListItemIcon>
                                    <Avatar
                                        src={userData?.picture}
                                        alt={userData?.name}
                                        style={{ cursor: 'pointer' }}
                                        sx={{ width: 32, height: 32, marginRight: 2 }}
                                    />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography variant="h6" className="text-xl font-bold">
                                        {userData?.name}
                                    </Typography>
                                    <Typography variant="body2">{userData?.email}</Typography>
                                </ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Manage account" />
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primary="Sign out" />
                            </MenuItem>
                        </Menu>
                    </Box>


                </Toolbar>
            </AppBar>
            <MenuDrawer open={open} handleDrawerClose={handleDrawerClose} />
            <Main open={open} className='w-full h-screen bg-[#F7F7F7]'>
                <DrawerHeader />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px 3px',
                        backgroundColor: '#f5f5f5' // Màu nền nhẹ
                    }}
                >
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                        All QR Codes (1)
                    </Typography>

                    <div className="relative">
                        <Button
                            id="options-button"
                            aria-controls={open ? 'options-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            variant="contained"
                            onClick={handleClick}
                            className="bg-[#90C52D] text-white rounded-none"
                            color='success'
                            startIcon={<AddIcon className='mr-0' />}
                            sx={{ fontSize: '12px', width: '170px' }}
                        >
                            create qr code
                        </Button>
                        <Menu
                            id="options-menu"
                            anchorEl={anchorEl}
                            open={open1}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'options-button',
                            }}
                        >
                            <MenuItem onClick={() => { setOpenCreateForm(true) }}>
                                <ListItemIcon>
                                    <ListAltIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>FormBuilder</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={() => { setOpenCreateLandingPage(true) }}>
                                <ListItemIcon>
                                    <NewspaperIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>LandingPage</ListItemText>
                            </MenuItem>

                        </Menu>
                    </div>
                </Box>
                <Box className='p-0'>
                    <BusinessCard />
                </Box>
            </Main>
            <CreateForm open={openCreateForm} handleClose={handleCloseCreate} />
            <CreateLP open={openCreateLandingPage} handleClose={handleCloseCreate} />
        </Box>
    );
}
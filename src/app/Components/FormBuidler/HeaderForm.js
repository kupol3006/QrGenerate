import { useState, useEffect } from 'react';
import {
    Switch, Button, Avatar, Menu, MenuItem, Typography,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material';
import PublishIcon from '@mui/icons-material/Publish';
import Cookies from 'js-cookie';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/navigation';

const PageHeader = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [userData, setUserData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const router = useRouter();

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
        setAnchorEl(null);
        router.push('/Login');
    };

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // Implement logic to toggle your application's dark mode
    };

    return (
        <header className="w-full flex justify-between items-center py-2 px-6 bg-white border-[#E5E7EB] border-b-[1px]">
            <h1
                className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text hover:cursor-pointer"
                onClick={() => router.push('/CreateForm')}
            >
                FormBuilder
            </h1>

            <div className="flex flex-col items-center">
                <Avatar
                    src={userData?.picture}
                    alt={userData?.name}
                    onClick={handleAvatarClick}
                    style={{ cursor: 'pointer' }}
                    sx={{ width: 32, height: 32 }}
                />
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
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
            </div>
        </header>
    );
};

export default PageHeader;

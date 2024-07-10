import { useState } from 'react';
import { Switch, Button } from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material';
import PublishIcon from '@mui/icons-material/Publish';

const PageHeader = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // Implement logic to toggle your application's dark mode
    };

    return (
        <header className="w-full flex justify-between items-center py-4 px-6 bg-white border-[#E5E7EB] border-b-[1px]">
            <h1 className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text hover:cursor-pointer">PageForm</h1>


        </header>
    );
};

export default PageHeader;
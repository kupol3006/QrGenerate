'use client';
import { useState } from 'react';
import FormElements from '../Components/FormBuidler/FormElement';
import { Box } from '@mui/system';
import { DndContext } from '@dnd-kit/core';

const Home = () => {
    const [formElements, setFormElements] = useState([]);

    const handleElementDrop = (element) => {
        setFormElements([...formElements, element]);
    };

    return (
        <DndContext>
            <div className="flex h-screen pt-[50px]">
                <Box className='w-[80%] h-screen'>

                </Box>
                <FormElements />
            </div>
        </DndContext>
    );
};

export default Home;
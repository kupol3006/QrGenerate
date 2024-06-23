'use client';
import { useState } from 'react';
import Sidebar from '../Components/FormBuidler/Sidebar';
import FormArea from '../Components/FormBuidler/FormArea';
import FormElementsList from '../Components/FormBuidler/FormElementsList';

const Home = () => {
    const [formElements, setFormElements] = useState([]);

    const handleElementDrop = (element) => {
        setFormElements([...formElements, element]);
    };

    return (
        <div className="flex h-screen pt-[90px]">
            <Sidebar onElementDrop={handleElementDrop} />
            <FormArea formElements={formElements} />
            <FormElementsList />
        </div>
    );
};

export default Home;
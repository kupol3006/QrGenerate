'use client';
import React from 'react';
import { useState } from 'react';
import FormElements from '../Components/FormBuidler/FormElement';
import { Box } from '@mui/system';
import { DndContext, KeyboardSensor, MouseSensor, PointerSensor, TouchSensor, closestCenter, closestCorners } from '@dnd-kit/core';
import { SortableContext, horizontalListSortingStrategy, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Form from '../Components/FormBuidler/Form';
import { useSensor, useSensors } from '@dnd-kit/core';
import HeaderForm from '../Components/FormBuidler/HeaderForm';
import PublishIcon from '@mui/icons-material/Publish';

const Home = () => {
    // const [formElements, setFormElements] = useState([]);
    const [formElementData, setFormElementData] = React.useState(
        [
            {
                id: 1,
                icon: (
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"></path>
                    </svg>
                ),
                title: 'Text Field',
                required: false,
                placeholder: 'Enter your text here',
                label: 'Text Field',
                name: 'text',
                type: 'text',
                value: ''
            },
            {
                id: 2,
                icon: (
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.873 11.297V4.142H1.699L0 5.379v1.137l1.64-1.18h.06v5.961h1.174Zm3.213-5.09v-.063c0-.618.44-1.169 1.196-1.169.676 0 1.174.44 1.174 1.106 0 .624-.42 1.101-.807 1.526L4.99 10.553v.744h4.78v-.99H6.643v-.069L8.41 8.252c.65-.724 1.237-1.332 1.237-2.27C9.646 4.849 8.723 4 7.308 4c-1.573 0-2.36 1.064-2.36 2.15v.057h1.138Zm6.559 1.883h.786c.823 0 1.374.481 1.379 1.179.01.707-.55 1.216-1.421 1.21-.77-.005-1.326-.419-1.379-.953h-1.095c.042 1.053.938 1.918 2.464 1.918 1.478 0 2.642-.839 2.62-2.144-.02-1.143-.922-1.651-1.551-1.714v-.063c.535-.09 1.347-.66 1.326-1.678-.026-1.053-.933-1.855-2.359-1.845-1.5.005-2.317.88-2.348 1.898h1.116c.032-.498.498-.944 1.206-.944.703 0 1.206.435 1.206 1.07.005.64-.504 1.106-1.2 1.106h-.75v.96Z"></path>
                    </svg>
                ),
                title: 'Number Field',
                required: false,
                placeholder: 'Enter your number here',
                label: 'Number Field',
                name: 'number',
                type: 'number',
                value: ''
            },
            {
                id: 3,
                icon: (
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4.5A2.5 2.5 0 0 1 2.5 2h11A2.5 2.5 0 0 1 16 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5v-7zM2.5 3A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3h-11zm10.854 4.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0zm0 2.5a.5.5 0 0 1 0 .708l-.5.5a.5.5 0 0 1-.708-.708l.5-.5a.5.5 0 0 1 .708 0z"></path>
                    </svg>
                ),
                title: 'TextArea Field',
                required: false,
                placeholder: 'Enter your text here',
                label: 'TextArea Field',
                name: 'textarea',
                type: 'textarea',
                value: ''
            },
            {
                id: 4,
                icon: (
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z"></path>
                        <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"></path>
                    </svg>
                ),
                title: 'Date Field',
                required: false,
                placeholder: 'Enter your date here',
                label: 'Date Field',
                name: 'date',
                type: 'date',
                value: ''
            },
            {
                id: 5,
                icon: (
                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" className="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.49999 3.09998C7.27907 3.09998 7.09999 3.27906 7.09999 3.49998C7.09999 3.72089 7.27907 3.89998 7.49999 3.89998H14.5C14.7209 3.89998 14.9 3.72089 14.9 3.49998C14.9 3.27906 14.7209 3.09998 14.5 3.09998H7.49999ZM7.49998 5.1C7.27907 5.1 7.09998 5.27908 7.09998 5.5C7.09998 5.72091 7.27907 5.9 7.49998 5.9H14.5C14.7209 5.9 14.9 5.72091 14.9 5.5C14.9 5.27908 14.7209 5.1 14.5 5.1H7.49998ZM7.1 7.5C7.1 7.27908 7.27909 7.1 7.5 7.1H14.5C14.7209 7.1 14.9 7.27908 14.9 7.5C14.9 7.72091 14.7209 7.9 14.5 7.9H7.5C7.27909 7.9 7.1 7.72091 7.1 7.5ZM7.49998 9.1C7.27907 9.1 7.09998 9.27908 7.09998 9.5C7.09998 9.72091 7.27907 9.9 7.49998 9.9H14.5C14.7209 9.9 14.9 9.72091 14.9 9.5C14.9 9.27908 14.7209 9.1 14.5 9.1H7.49998ZM7.09998 11.5C7.09998 11.2791 7.27907 11.1 7.49998 11.1H14.5C14.7209 11.1 14.9 11.2791 14.9 11.5C14.9 11.7209 14.7209 11.9 14.5 11.9H7.49998C7.27907 11.9 7.09998 11.7209 7.09998 11.5ZM2.5 9.25003L5 6.00003H0L2.5 9.25003Z" fill="currentColor"></path>
                    </svg>
                ),
                title: 'Select Field',
                required: false,
                placeholder: 'Select your option',
                label: 'Select Field',
                name: 'select',
                type: 'select',
                value: ''
            },
            {
                id: 6,
                icon: (
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M405.333 64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V106.667C448 83.198 428.802 64 405.333 64zm-192 298.667L106.667 256l29.864-29.864 76.802 76.802 162.136-162.136 29.864 29.865-192 192z"></path>
                    </svg>
                ),
                title: 'CheckBox Field',
                required: false,
                placeholder: 'Select your option',
                label: 'CheckBox Field',
                name: 'checkbox',
                type: 'checkbox',
                value: ''
            },
        ]
    );

    function arrayMove(array, from, to) {
        const newArray = [...array];
        const item = newArray.splice(from, 1)[0];
        newArray.splice(to, 0, item);
        return newArray;
    }
    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active && over && active.id !== over.id) {
            setFormElementData((formElementData) => {
                const oldIndex = formElementData.findIndex((formElementData) => formElementData.id === active.id);
                const newIndex = formElementData.findIndex((formElementData) => formElementData.id === over.id);

                return arrayMove(formElementData, oldIndex, newIndex);
            });
        }
        console.log('formElementData', formElementData);
    };
    return (
        <div className="min-h-screen">
            <HeaderForm />
            <div className="flex justify-end items-center px-4 py-2">
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-md mr-2 flex items-center border-black border-[1px]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                    </svg>
                    Preview
                </button>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-md mr-2 flex items-center border-black border-[1px]">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z"></path>
                        <path d="M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2h-8v-5z"></path>
                    </svg>
                    Save
                </button>
                <button class="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white font-bold py-2 px-4 rounded-md flex items-center">
                    <PublishIcon className="h-5 w-5 mr-2" />
                    Publish
                </button>
            </div>
            <Box className='flex pt-[0px]'>
                <Box className='w-[80%] h-screen bg-[url(https://upload.wikimedia.org/wikipedia/commons/9/9f/Graph-paper.svg)] flex justify-center p-4'>
                    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
                        <Form formElementData={formElementData} />
                    </DndContext>
                </Box>
                <FormElements formElementData={formElementData} />
            </Box>
        </div>
    );
};

export default Home;
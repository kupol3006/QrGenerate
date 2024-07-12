'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import FormElements from '../Components/FormBuidler/FormElement';
import { Box } from '@mui/system';
import { DndContext, KeyboardSensor, MouseSensor, PointerSensor, TouchSensor, closestCenter, closestCorners } from '@dnd-kit/core';
import { SortableContext, horizontalListSortingStrategy, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Form from '../Components/FormBuidler/Form';
import { useSensor, useSensors } from '@dnd-kit/core';
import HeaderForm from '../Components/FormBuidler/HeaderForm';
import PublishIcon from '@mui/icons-material/Publish';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormElement } from '../redux/slices/formBuilderSlice';
import ElementProperties from '../Components/FormBuidler/ElementProp';

const Home = () => {
    const dispatch = useDispatch();
    const formElements1 = useSelector((state) => state.formBuilder.formElement)
    const [formElements, setFormElements] = React.useState(formElements1);
    const formElementData1 = useSelector((state) => state.formBuilder.formElementData)
    const [formElementData, setFormElementData] = React.useState(
        formElementData1
    );
    useEffect(() => {
        setFormElements(formElements1);
        // dispatch(updateFormElement(formElements));
    }, [formElements1]);
    function arrayMove(array, from, to) {
        const newArray = [...array];
        const item = newArray.splice(from, 1)[0];
        newArray.splice(to, 0, item);
        return newArray;
    }
    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active && over && active.id !== over.id) {
            setFormElements((formElements) => {
                const oldIndex = formElements.findIndex((formElements) => formElements.id === active.id);
                const newIndex = formElements.findIndex((formElements) => formElements.id === over.id);

                return arrayMove(formElements, oldIndex, newIndex);

            });

        }

        console.log('formElements', formElements);
        console.log('event', event);
    };
    return (
        <div className="min-h-screen">
            <HeaderForm />
            <div className="flex justify-end items-center px-4 py-2">
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-md mr-2 flex items-center border-black border-[1px]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    Preview
                </button>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-md mr-2 flex items-center border-black border-[1px]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z"></path>
                        <path d="M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2h-8v-5z"></path>
                    </svg>
                    Save
                </button>
                <button className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white font-bold py-2 px-4 rounded-md flex items-center">
                    <PublishIcon className="h-5 w-5 mr-2" />
                    Publish
                </button>
            </div>
            <Box className='flex pt-[0px]'>
                <Box className='w-[80%] h-screen bg-[url(https://upload.wikimedia.org/wikipedia/commons/9/9f/Graph-paper.svg)] flex justify-center p-4'>
                    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
                        <Form formElements={formElements} />
                    </DndContext>
                </Box>
                {/* <FormElements formElementData={formElementData} /> */}
                <ElementProperties />
            </Box>
        </div>
    );
};

export default Home;
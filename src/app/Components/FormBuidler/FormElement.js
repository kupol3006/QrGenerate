import { useState } from 'react';
import { DndContext, useDraggable } from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

const FormElements = ({ formElementData }) => {
    return (
        // <DndContext>
        // <SortableContext items={formElementData.map((element, index) => `item-${index}`)} strategy={sortableKeyboardCoordinates}>
        <div className="bg-gray-100 p-2 pt-4 w-[20%] h-screen">
            <h5 className="text-[20px] font-bold mb-4">Form elements</h5>
            <div className="grid grid-cols-2 gap-4">
                {formElementData.map((element, index) => (
                    <div key={index} id={`item-${index}`} className='relative overflow-hidden'>
                        <div className="bg-white rounded-md shadow-md w-[110px] h-[110px] gap-2 flex flex-col justify-center items-center">
                            {element.icon}
                            <h2 className="text-[12px] font-medium">{element.title}</h2>
                        </div>
                        <div className='w-[110px] h-[110px] absolute top-0 left-0 z-1 opacity-0 flex flex-col justify-center items-center bg-[#EAECEE] hover:opacity-100 transition-all duration-1000 cursor-pointer select-none'>
                            Click here
                        </div>
                    </div>
                ))}
            </div>
        </div>
        // </SortableContext>
        // </DndContext>
    );
};

export default FormElements;

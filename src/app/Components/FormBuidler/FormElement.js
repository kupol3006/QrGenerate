import { useState } from 'react';
import { DndContext, useDraggable } from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

const DraggableElement = ({ id, children }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({
        id: id,
    });

    return (
        <div ref={setNodeRef} style={{ transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`, transition }} {...listeners} {...attributes}>
            {children}
        </div>
    );
};

const FormElements = ({ formElementData }) => {
    return (
        // <DndContext>
        // <SortableContext items={formElementData.map((element, index) => `item-${index}`)} strategy={sortableKeyboardCoordinates}>
        <div className="bg-gray-100 p-2 pt-4 w-[20%] h-screen">
            <h5 className="text-[20px] font-bold mb-4">Form elements</h5>
            <div className="grid grid-cols-2 gap-4">
                {formElementData.map((element, index) => (
                    <div key={index} id={`item-${index}`}>
                        <div className="bg-white rounded-md shadow-md w-[110px] h-[110px] gap-2 flex flex-col justify-center items-center">
                            {element.icon}
                            <h2 className="text-[12px] font-medium">{element.title}</h2>
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
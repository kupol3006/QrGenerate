import { useState } from 'react';
import { DndContext, useDraggable } from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { useSelector, useDispatch } from 'react-redux';
import { pushFormElement } from '../../redux/slices/formBuilderSlice'

const FormElements = ({ formElementData }) => {
    const dispatch = useDispatch();
    const handlePushForm = (formElememt) => {
        dispatch(pushFormElement(formElememt));
    }
    const renderIcon = (iconName) => {
        switch (iconName) {
            case 'TextField':
                return (
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"></path>
                    </svg>
                );
            case 'NumberField':
                return (
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.873 11.297V4.142H1.699L0 5.379v1.137l1.64-1.18h.06v5.961h1.174Zm3.213-5.09v-.063c0-.618.44-1.169 1.196-1.169.676 0 1.174.44 1.174 1.106 0 .624-.42 1.101-.807 1.526L4.99 10.553v.744h4.78v-.99H6.643v-.069L8.41 8.252c.65-.724 1.237-1.332 1.237-2.27C9.646 4.849 8.723 4 7.308 4c-1.573 0-2.36 1.064-2.36 2.15v.057h1.138Zm6.559 1.883h.786c.823 0 1.374.481 1.379 1.179.01.707-.55 1.216-1.421 1.21-.77-.005-1.326-.419-1.379-.953h-1.095c.042 1.053.938 1.918 2.464 1.918 1.478 0 2.642-.839 2.62-2.144-.02-1.143-.922-1.651-1.551-1.714v-.063c.535-.09 1.347-.66 1.326-1.678-.026-1.053-.933-1.855-2.359-1.845-1.5.005-2.317.88-2.348 1.898h1.116c.032-.498.498-.944 1.206-.944.703 0 1.206.435 1.206 1.07.005.64-.504 1.106-1.2 1.106h-.75v.96Z"></path>
                    </svg>
                );
            case 'TextAreaField':
                return (
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4.5A2.5 2.5 0 0 1 2.5 2h11A2.5 2.5 0 0 1 16 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5v-7zM2.5 3A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3h-11zm10.854 4.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0zm0 2.5a.5.5 0 0 1 0 .708l-.5.5a.5.5 0 0 1-.708-.708l.5-.5a.5.5 0 0 1 .708 0z"></path>
                    </svg>
                );
            case 'DateField':
                return (
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z"></path>
                        <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.223H5.71V7.746H4.582v-.607h3.584v.607H8.447z"></path>
                    </svg>
                );
            case 'SelectField':
                return (
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M7 10l5 5 5-5H7z"></path>
                    </svg>
                );
            case 'CheckBoxField':
                return (
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="h-8 w-8 text-primary cursor-grab" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M512 64C264.64 64 64 264.64 64 512s200.64 448 448 448 448-200.64 448-448S759.36 64 512 64zM512 128c211.2 0 384 172.8 384 384s-172.8 384-384 384-384-172.8-384-384S300.8 128 512 128zM710.4 416.8 451.2 676 332.8 558.4c-12.8-12.8-33.6-12.8-46.4 0s-12.8 33.6 0 46.4l147.2 147.2c6.4 6.4 14.4 9.6 22.4 9.6 8 0 16-3.2 22.4-9.6L755.2 463.2c12.8-12.8 12.8-33.6 0-46.4S723.2 404 710.4 416.8z"></path>
                    </svg>
                );
            default:
                return null;
        }
    };
    return (
        // <DndContext>
        // <SortableContext items={formElementData.map((element, index) => `item-${index}`)} strategy={sortableKeyboardCoordinates}>
        <div className="w-full h-full p-2 pt-4">
            <h5 className="text-[17px] text-[#6b7280] font-bold mb-4">Form elements</h5>
            <div className="grid grid-cols-2 gap-4">
                {formElementData.map((element, index) => (
                    <div key={index} id={`item-${index}`} className='w-[120px] h-[120px] relative' onClick={() => { handlePushForm(element) }}>
                        <div className="bg-white rounded-md border-[2px] h-[120px] gap-2 flex flex-col justify-center items-center">
                            {renderIcon(element.icon)}
                            <h2 className="text-[12px] font-medium">{element.title}</h2>
                        </div>
                        <div className='w-full h-[120px] border-[1px] rounded-md absolute top-0 left-0 z-1 opacity-0 flex flex-col justify-center items-center bg-white hover:opacity-95 transition-all duration-1000 cursor-pointer select-none'>
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
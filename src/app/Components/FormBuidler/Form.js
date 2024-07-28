import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Box, Typography, IconButton, Button } from '@mui/material';
import FormItem from './FormItem';
import { useDispatch, useSelector } from 'react-redux';
import { setIsShowElementProperties, setFormElementChosen } from '../../redux/slices/formBuilderSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

const Form = ({ formElements }) => {
    const dispatch = useDispatch();
    // const [isDragging, setIsDragging] = useState(false);

    // const handleElementChange = (element, event) => {
    //     if (isDragging) return;
    //     event.stopPropagation();
    //     dispatch(setFormElementChosen(element));
    //     dispatch(setIsShowElementProperties(true));
    // };

    // const handleDragStart = () => {
    //     setIsDragging(true);
    // };

    // const handleDragEnd = () => {
    //     setIsDragging(true);
    // };

    return (
        <Box
            className="xl:w-[920px] w-[95%] min-h-[400px] border-4 border-dashed border-gray-500 rounded-lg flex flex-col items-center justify-start gap-2 overflow-x-hidden overflow-y-auto p-4 "
            sx={{ backgroundColor: 'white' }}
        >
            <SortableContext items={formElements} strategy={verticalListSortingStrategy}>
                {formElements.map((item) => (
                    <div
                        key={item.id}
                        className='w-full relative'
                    // onPointerDown={(e) => handleElementChange(item, e)}
                    // onDrag={handleDragStart}
                    // onDrop={handleDragEnd}
                    >
                        <FormItem form={item} className=' cursor-pointer ' />
                    </div>
                ))}
            </SortableContext>
        </Box>
    );
};

export default Form;
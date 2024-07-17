import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Box, Typography, IconButton, Button } from '@mui/material';
import FormItem from './FormItem';
import { useDispatch, useSelector } from 'react-redux';
import { setIsShowElementProperties, setFormElementChosen } from '../../redux/slices/formBuilderSlice';
import DeleteIcon from '@mui/icons-material/Delete';

const Form = ({ formElements }) => {
    const dispatch = useDispatch();

    const handleElementChange = (element, event) => {
        event.stopPropagation();
        dispatch(setFormElementChosen(element));
        dispatch(setIsShowElementProperties(true));
    };


    return (
        <Box
            className="w-[95%] min-h-[400px] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-start gap-2 overflow-x-hidden overflow-y-auto p-4 "
            sx={{ backgroundColor: 'white' }}
        >
            <SortableContext items={formElements} strategy={verticalListSortingStrategy}>
                {formElements.map((item) => (
                    <div className='w-full relative' onPointerDown={(e) => handleElementChange(item, e)}>
                        <FormItem key={item.id} form={item} className=' cursor-pointer ' />
                    </div>
                ))}
            </SortableContext>
        </Box>
    );
};

export default Form;
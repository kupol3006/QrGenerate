import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Box, Typography } from '@mui/material';
import FormItem from './FormItem';

const Form = ({ formElements }) => {

    return (
        <Box
            className="w-[95%] min-h-[600px] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-start gap-2 overflow-x-hidden overflow-y-auto p-4"
            sx={{ backgroundColor: 'white' }}
        >
            <SortableContext items={formElements} strategy={verticalListSortingStrategy}>
                {formElements.map((item) => (
                    <FormItem key={item.id} form={item} />
                ))}
            </SortableContext>
        </Box>
    );
};

export default Form;
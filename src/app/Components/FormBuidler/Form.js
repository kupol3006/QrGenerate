// FILE: Form.js
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Box, Typography } from '@mui/material';

const Form = ({ formElements, setFormElements }) => {
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            const oldIndex = formElements.findIndex((item) => item.id === active.id);
            const newIndex = formElements.findIndex((item) => item.id === over.id);

            setFormElements((items) => arrayMove(items, oldIndex, newIndex));
        }
    };

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <Box
                className="w-[80%] h-screen border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center"
                sx={{ backgroundColor: 'white' }}
            >
                <SortableContext items={formElements}>
                    {/* Render form elements here */}

                    {formElements.length === 0
                        ?
                        (
                            <Typography
                                variant="h6"
                                className="text-gray-500"
                            >
                                Drop here
                            </Typography>
                        )
                        :
                        formElements?.map((element, index) => (
                            <Box key={index} className="border-2 border-dashed border-gray-300 rounded-lg p-4 m-4">
                                {element.title}
                            </Box>
                        ))
                    }


                </SortableContext>
            </Box>
        </DndContext>
    );
};

export default Form;
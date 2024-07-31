import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDispatch } from "react-redux";
import { setIsShowElementProperties, setFormElementChosen } from "../../redux/slices/formBuilderSlice";
import { Typography, Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useCallback, useRef } from "react";
import CheckBox from "../FormType/CheckBox";
import DateField from "../FormType/DateField";
import NumberField from "../FormType/Number";
import MyTextField from "../FormType/TextField";
import SelectField from "../FormType/Select";
import TextArea from "../FormType/TextArea";

const FormItem = ({ form }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: form.id });
    const dispatch = useDispatch();
    const [isDragging, setIsDragging] = useState(false);
    const dragStartPosition = useRef({ x: 0, y: 0 });

    const handleElementChange = useCallback((element, event) => {
        event.stopPropagation();
        dispatch(setFormElementChosen(element));
        dispatch(setIsShowElementProperties(true));
    }, [dispatch]);

    const handleMouseDown = useCallback((event) => {
        dragStartPosition.current = { x: event.clientX, y: event.clientY };
        setIsDragging(false);
    }, []);

    const handleMouseUp = useCallback((event) => {
        const dragDistance = Math.sqrt(
            Math.pow(event.clientX - dragStartPosition.current.x, 2) +
            Math.pow(event.clientY - dragStartPosition.current.y, 2)
        );

        if (!isDragging && dragDistance < 5) { // Adjust the threshold as necessary
            handleElementChange(form, event);
        }

        setIsDragging(false);
    }, [handleElementChange, isDragging, form]);

    const handleMouseMove = useCallback(() => {
        setIsDragging(true);
    }, []);

    return (
        <div className="w-[100%] border rounded-lg bg-gray-50"
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={{
                transform: CSS.Transform.toString(transform),
                transition,
                userSelect: 'none',
                cursor: 'grab',
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <div className='w-full h-[120px] relative'>
                {form.type === 'text' && <MyTextField className='cursor-grab' form={form} />}
                {form.type === 'number' && <NumberField className='cursor-grab' form={form} />}
                {form.type === 'textarea' &&
                    (
                        <div className="py-1 px-4">
                            <label htmlFor="text-area" className="block text-sm font-medium text-gray-700">
                                {form?.label || 'Text Area'}
                            </label>
                            <TextField
                                id="text-area"
                                placeholder="Value here..."
                                multiline
                                rows={2} // Chỉnh số dòng hiển thị ban đầu ở đây
                                // value={value}
                                // onChange={handleChange}
                                fullWidth
                                variant="outlined"
                                className="mt-1"
                                helperText={form?.helperText || 'Helper text'}
                                size='small'
                                disabled={true}
                            />
                        </div>
                    )
                }
                {form.type === 'date' && <DateField className='cursor-grab' form={form} />}
                {form.type === 'select' && <SelectField className='cursor-grab' form={form} />}
                {form.type === 'checkbox' && <CheckBox className='cursor-grab' form={form} />}
                <div className='w-full h-full absolute rounded-lg top-0 left-0 flex justify-center items-center bg-gray-100 opacity-0 hover:opacity-85 transition-all duration-500 select-none cursor-grab'>
                    <Typography
                        className='w-[90%] text-center cursor-grab text-gray-600'
                    >
                        Click for properties or drag to move
                    </Typography>
                    <Button className="w-[10%] h-full bg-red-500 text-white hover:bg-red-700">
                        <DeleteIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FormItem;

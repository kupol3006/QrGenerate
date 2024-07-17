import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
// import { TextField } from "@mui/material";
import CheckBox from "../FormType/CheckBox";
import DateField from "../FormType/DateField";
import NumberField from "../FormType/Number";
import MyTextField from "../FormType/TextField";
import SelectField from "../FormType/Select";
import TextArea from "../FormType/TextArea";
import { useDispatch } from "react-redux";
import { setIsShowElementProperties, setFormElementChosen } from "../../redux/slices/formBuilderSlice";
import { Box, Typography, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const FormItem = ({ form }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: form.id });
    const dispatch = useDispatch();
    const handleElementChange = (element, event) => {
        event.stopPropagation();
        dispatch(setFormElementChosen(element));
        dispatch(setIsShowElementProperties(true));
    };

    return (
        <div className="w-[100%] p-[10px] border border-gray-300 rounded-lg bg-gray-200"
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={{
                transform: CSS.Transform.toString(transform),
                transition,
                userSelect: 'none',
                cursor: 'grab',
            }}
        // onClick={onClick}
        >
            {form.type === 'text' && (
                <div className='w-full relative '>
                    <MyTextField className='cursor-grab' />
                    <div className='w-full h-full absolute rounded-lg top-0 flex justify-center items-center bg-gray-100 opacity-0 hover:opacity-100 transition-all duration-500 select-none cursor-grab'>
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
            )}
            {form.type === 'number' && (
                <div className='w-full relative '>
                    <NumberField className='cursor-grab' />
                    <div className='w-full h-full absolute rounded-lg top-0 flex justify-center items-center bg-gray-100 opacity-0 hover:opacity-100 transition-all duration-500 select-none cursor-grab'>
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
            )}
            {form.type === 'textarea' && (
                <div className='w-full relative '>
                    <TextArea className='cursor-grab' />
                    <div className='w-full h-full absolute rounded-lg top-0 flex justify-center items-center bg-gray-100 opacity-0 hover:opacity-100 transition-all duration-500 select-none cursor-grab'>
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
            )}
            {form.type === 'date' && (
                <div className='w-full relative '>
                    <DateField className='cursor-grab' />
                    <div className='w-full h-full absolute rounded-lg top-0 flex justify-center items-center bg-gray-100 opacity-0 hover:opacity-100 transition-all duration-500 select-none cursor-grab'>
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
            )}
            {form.type === 'select' && (
                <div className='w-full relative '>
                    <SelectField className='cursor-grab' />
                    <div className='w-full h-full absolute rounded-lg top-0 flex justify-center items-center bg-gray-100 opacity-0 hover:opacity-100 transition-all duration-500 select-none cursor-grab'>
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
            )}
            {form.type === 'checkbox' && (
                <div className='w-full relative '>
                    <CheckBox className='cursor-grab' />
                    <div className='w-full h-full absolute rounded-lg top-0 flex justify-center items-center bg-gray-100 opacity-0 hover:opacity-100 transition-all duration-500 select-none cursor-grab'>
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
            )}

        </div>
    );
};

export default FormItem;
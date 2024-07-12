import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
// import { TextField } from "@mui/material";
import CheckBox from "../FormType/CheckBox";
import DateField from "../FormType/DateField";
import NumberField from "../FormType/Number";
import MyTextField from "../FormType/TextField";
import SelectField from "../FormType/Select";
import TextArea from "../FormType/TextArea";

const FormItem = ({ form }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: form.id });
    return (
        <div className="w-[100%] p-[10px] border border-gray-300 rounded-lg bg-gray-200"
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={{
                transform: CSS.Transform.toString(transform),
                transition,
                // userSelect: 'none',
            }}
        >
            {form.type === 'text' && (
                <MyTextField />
            )}
            {form.type === 'number' && (
                <NumberField />
            )}
            {form.type === 'textarea' && (
                <TextArea />
            )}
            {form.type === 'date' && (
                <DateField />
            )}
            {form.type === 'select' && (
                <SelectField />
            )}
            {form.type === 'checkbox' && (
                <CheckBox />
            )}

        </div>
    );
};

export default FormItem;
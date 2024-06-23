'use client';
import { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const FormElement = ({
    id,
    type,
    content,
    onDragEnd,
    ...props
}) => {
    const [isDragging, setIsDragging] = useState(false);

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        id,
        data: {
            type,
            content
        }
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`p-2 my-2 border rounded-md ${isDragging ? 'opacity-50' : ''}`}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
        >
            {/* Hiển thị nội dung của FormElement */}
            {type === "text" && <input type="text" placeholder={content} className="w-full" />}
            {type === "button" && <button>{content}</button>}
            {type === "checkbox" && <input type="checkbox" />}
            {type === "radio" && <input type="radio" />}
            {type === "select" && <select>{content}</select>}
            {type === "textarea" && <textarea placeholder={content} className="w-full" />}
            {type === "date" && <input type="date" />}
            {type === "number" && <input type="number" />}
            {type === "email" && <input type="email" />}
            {type === "submit" && <input type="submit" value={content} />}

            {/* ... các loại FormElement khác */}
        </div>
    );
};

export default FormElement;
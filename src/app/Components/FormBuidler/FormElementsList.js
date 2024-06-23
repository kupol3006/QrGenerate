'use client';
import { useState } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors
} from '@dnd-kit/core';
import {
    SortableContext,
    arrayMove,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import FormElement from './FormElement';

const FormElementsList = () => {
    const [formElements, setFormElements] = useState([
        // Danh sách các FormElement
        { id: '1', type: 'text', content: 'Text Field' },
        { id: '2', type: 'button', content: 'Button' },
        { id: '3', type: 'checkbox', content: 'Checkbox' },
        { id: '4', type: 'radio', content: 'Radio' },
        { id: '5', type: 'select', content: 'Select' },
        { id: '6', type: 'textarea', content: 'Textarea' },
        { id: '7', type: 'date', content: 'Date' },
        { id: '8', type: 'number', content: 'Number' },
        { id: '9', type: 'email', content: 'Email' },
        { id: '10', type: 'submit', content: 'Submit' },
        // ...
    ]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor)
    );

    const handleDragEnd = ({ active, over }) => {
        if (over && active.id !== over.id) {
            setFormElements((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={formElements.map((item) => item.id)}
                strategy={verticalListSortingStrategy}
            >
                {formElements.map((element) => (
                    <FormElement
                        key={element.id}
                        id={element.id}
                        type={element.type}
                        content={element.content}
                        onDragEnd={handleDragEnd}
                    />
                ))}
            </SortableContext>
        </DndContext>
    );
};

export default FormElementsList;
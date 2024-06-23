// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
'use client';
import FormElement from './FormElement';
const FormArea = ({ formElements, onElementDrop }) => {
    const handleDrop = (event) => {
        // Xử lý khi thả FormElement vào FormArea
        const element = JSON.parse(event.dataTransfer.getData('element'));
        onElementDrop(element);

    };

    return (
        <div
            className="flex-1 bg-blue-100 p-4"
            onDrop={handleDrop}
            onDragOver={(event) => event.preventDefault()}
        >
            {/* Hiển thị các FormElement đã được kéo thả */}
            {formElements.map((element) => (
                <FormElement
                    key={element.id}
                    type={element.type}
                    content={element.content}
                />
            ))}
        </div>
    );
};

export default FormArea;
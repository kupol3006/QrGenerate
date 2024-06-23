'use client';
import FormElement from './FormElement';

const Sidebar = ({ onElementDrop }) => {
    const handleDragStart = (event, element) => {
        // Xử lý khi bắt đầu kéo thả FormElement
        event.dataTransfer.setData('element', JSON.stringify(element));


    };

    return (
        <aside className="bg-gray-200 p-4">
            {/* Danh sách các FormElement có thể kéo thả */}
            <FormElement type="text" content="Text Field" onDragStart={handleDragStart} />
            <FormElement type="button" content="Button" onDragStart={handleDragStart} />
            <FormElement type="checkbox" content="Checkbox" onDragStart={handleDragStart} />
            <FormElement type="radio" content="Radio" onDragStart={handleDragStart} />
            <FormElement type="select" content="Select" onDragStart={handleDragStart} />
            <FormElement type="textarea" content="Textarea" onDragStart={handleDragStart} />
            <FormElement type="date" content="Date" onDragStart={handleDragStart} />
            <FormElement type="number" content="Number" onDragStart={handleDragStart} />
            <FormElement type="email" content="Email" onDragStart={handleDragStart} />
            <FormElement type="submit" content="Submit" onDragStart={handleDragStart} />

            {/* ... */}
        </aside>
    );
};

export default Sidebar;
import React, { useState } from 'react';
import { TextField, Switch, Button, Slider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setIsShowElementProperties } from '../../redux/slices/formBuilderSlice';

const ElementProperties = () => {
    const [label, setLabel] = useState('Select field');
    const [placeholder, setPlaceholder] = useState('Value here...');
    const [helperText, setHelperText] = useState('Helper text');
    const [isRequired, setIsRequired] = useState(false);
    const [rows, setRows] = useState(3);
    const dispatch = useDispatch();
    const formElementChosen = useSelector((state) => state.formBuilder.formElementChosen);

    const handleSliderChange = (event, newValue) => {
        setRows(newValue);
    };

    return (
        <div className="w-full h-[100%] p-4 bg-white shadow-md overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Element properties</h2>
                <button className="text-gray-500 hover:text-gray-700" onClick={() => dispatch(setIsShowElementProperties(false))}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            <div className="mb-4">
                <label htmlFor="label" className="block text-sm font-medium mb-1">
                    Label
                </label>
                <TextField
                    id="label"
                    variant="outlined"
                    fullWidth
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    size='small'
                />
                <p className="text-xs text-gray-500 mt-1">
                    The label of the field. It will be displayed above the field.
                </p>
            </div>

            <div className="mb-4">
                <label htmlFor="placeholder" className="block text-sm font-medium mb-1">
                    Placeholder
                </label>
                <TextField
                    id="placeholder"
                    variant="outlined"
                    fullWidth
                    value={placeholder}
                    onChange={(e) => setPlaceholder(e.target.value)}
                    size='small'
                />
                <p className="text-xs text-gray-500 mt-1">
                    The placeholder of the field.
                </p>
            </div>

            <div className="mb-4">
                <label htmlFor="helperText" className="block text-sm font-medium mb-1">
                    Helper text
                </label>
                <TextField
                    id="helperText"
                    variant="outlined"
                    fullWidth
                    value={helperText}
                    onChange={(e) => setHelperText(e.target.value)}
                    size='small'
                />
                <p className="text-xs text-gray-500 mt-1">
                    The helper text of the field. It will be displayed below the
                    field.
                </p>
            </div>

            {formElementChosen.type === 'select' && (
                <div className="mb-4">
                    <div className='flex justify-between'>
                        <h3 className="text-sm font-medium mb-2">Options</h3>
                        <div className="flex justify-end">
                            <Button
                                variant="outlined"
                                size="small"
                                startIcon={<span>+</span>}
                                sx={{
                                    color: 'black',
                                    borderColor: 'black',
                                    '&:hover': {
                                        borderColor: 'black',
                                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                    },
                                }}
                            >
                                Add
                            </Button>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                        The helper text of the field. It will be displayed below the
                        field.
                    </p>
                </div>
            )}

            {formElementChosen.type === 'textArea' && (
                <div className="mb-4">
                    <label htmlFor="rows" className="block text-sm font-medium text-gray-700">
                        Rows {rows}
                    </label>
                    <Slider
                        id="rows"
                        value={rows}
                        min={1}
                        max={10}
                        onChange={handleSliderChange}
                        className="mt-1"
                        sx={{
                            '& .MuiSlider-track': {
                                backgroundColor: 'black',
                            },
                            '& .MuiSlider-thumb': {
                                color: 'white', // đổi màu thumb nếu cần
                            },
                        }}
                    />
                </div>
            )}

            <div className="w-[100%] mb-4 border-[1px] border-[#E5E7EB] p-2 rounded-[5px]">
                <div className="flex items-center justify-between">
                    <label
                        htmlFor="required"
                        className="block text-sm font-medium mb-1"
                    >
                        Required
                    </label>
                    <Switch
                        id="required"
                        checked={isRequired}
                        onChange={(e) => setIsRequired(e.target.checked)}
                        color="primary"
                    />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                    The helper text of the field. It will be displayed below the
                    field.
                </p>
            </div>

            <Button
                variant="contained"
                fullWidth
                sx={{
                    backgroundColor: '#111827',
                    '&:hover': {
                        backgroundColor: '#282F3C'
                    }
                }}
            >
                Save
            </Button>

        </div>
    );
};

export default ElementProperties;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { customAlphabet } from 'nanoid';

const initialState = {
    formElementData: [
        {
            // id: 1787879878,
            icon: 'TextField',
            title: 'Text Field',
            required: false,
            placeholder: 'Enter your text here',
            label: 'Text Field',
            name: 'text',
            type: 'text',
            value: '',
            helpertext: 'Helper text'
        },
        {
            // id: 22312313,
            icon: 'NumberField',
            title: 'Number Field',
            required: false,
            placeholder: '0',
            label: 'Number Field',
            name: 'number',
            type: 'number',
            value: '',
            helpertext: 'Helper text'
        },
        {
            // id: 3123123,
            icon: 'TextAreaField',
            title: 'TextArea Field',
            required: false,
            placeholder: 'Enter your text here',
            label: 'TextArea Field',
            name: 'textarea',
            type: 'textarea',
            value: '',
            helpertext: 'Helper text'
        },
        {
            // id: 4,
            icon: 'DateField',
            title: 'Date Field',
            required: false,
            label: 'Date Field',
            name: 'date',
            type: 'date',
            value: '',
            helpertext: 'Pick a date'
        },
        {
            // id: 5,
            icon: 'SelectField',
            title: 'Select Field',
            required: false,
            placeholder: 'Value here...',
            label: 'Select Field',
            name: 'select',
            type: 'select',
            value: '',
            option: [],
            helpertext: 'Helper text'
        },
        {
            // id: 6,
            icon: 'CheckBoxField',
            title: 'CheckBox Field',
            required: false,
            placeholder: 'Select your option',
            label: 'CheckBox Field',
            name: 'checkbox',
            type: 'checkbox',
            checked: false,
            helpertext: 'Helper text'
        },
    ],
    formElement: [],
    isShowElementProperties: false,
    formElementChosen: {}
}

export const formBuilderSlice = createSlice({
    name: 'formBuilder',
    initialState,
    reducers: {
        pushFormElement: (state, action) => {
            const nanoid = customAlphabet('0123456789', 10);
            const newElement = { ...action.payload, id: Number(nanoid()) };
            state.formElement.push(newElement);
        },
        updateFormElement: (state, action) => {
            state.formElement = action.payload;
        },
        setIsShowElementProperties: (state, action) => {
            state.isShowElementProperties = action.payload;
        },
        setFormElementChosen: (state, action) => {
            state.formElementChosen = action.payload;
        },
        updateFormChosenElement: (state, action) => {
            const index = state.formElement.findIndex(element => element.id === state.formElementChosen.id);
            if (index !== -1) {
                state.formElement[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
    },
})

// Action creators are generated for each case reducer function
export const { pushFormElement, updateFormElement, setIsShowElementProperties, setFormElementChosen, updateFormChosenElement } = formBuilderSlice.actions

export default formBuilderSlice.reducer
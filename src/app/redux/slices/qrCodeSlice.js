import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchApiBank = createAsyncThunk(
    'apiBank/fetchApiBank',
    async (_, { getState, rejectWithValue }) => {
        try {
            const response = await axios.get('https://api.vietqr.io/v2/banks');
            const data = response.data.data;
            return data
        } catch (error) {
            console.error("Error in createOrder:", error);
            return rejectWithValue(error.message);
        }
    },
)

const initialState = {
    text: '',
    link: 0,
    imageObject: { id: 0, src: '/frame0.svg', alt: 'QR Code' },
    textImage: 'Scan me',
    x: 0,
    y: 0,
    shape: 'squares',
    color: 'black',
    isLoading: false,
    data: [],
    userBank: {},
}

export const qrCodeSlice = createSlice({
    name: 'apiBank',
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload
        },
        setLink: (state, action) => {
            state.link = action.payload
        },
        updateImageObject: (state, action) => {
            state.imageObject = action.payload
        },
        setTextImage: (state, action) => {
            state.textImage = action.payload
        },
        setX: (state, action) => {
            state.x = action.payload
        },
        setY: (state, action) => {
            state.y = action.payload
        },
        setShape: (state, action) => {
            state.shape = action.payload
        },
        setColor: (state, action) => {
            state.color = action.payload
        },
        setUserBank: (state, action) => {
            state.userBank = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchApiBank.pending, (state) => {
                state.isLoading = false
            })
            .addCase(fetchApiBank.fulfilled, (state, action) => {
                state.isLoading = true
                state.data = action.payload
            })
            .addCase(fetchApiBank.rejected, (state) => {
                state.isLoading = false
            })
    },
})

// Action creators are generated for each case reducer function
export const { setText, setLink, updateImageObject, setTextImage, setX, setY, setShape, setColor, setUserBank } = qrCodeSlice.actions

export default qrCodeSlice.reducer
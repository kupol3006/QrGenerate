import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    text: '',
}

export const qrCodeSlice = createSlice({
    name: 'qrCode',
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setText } = qrCodeSlice.actions

export default qrCodeSlice.reducer
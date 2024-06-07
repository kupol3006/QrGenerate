import { configureStore } from '@reduxjs/toolkit'
import qrCodeReducer from './slices/qrCodeSlice'

export const store = configureStore({
    reducer: {
        qrCode: qrCodeReducer,
    },
})
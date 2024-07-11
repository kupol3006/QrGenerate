import { configureStore } from '@reduxjs/toolkit'
import qrCodeReducer from './slices/qrCodeSlice'
import formBuilderReducer from './slices/formBuilderSlice'

export const store = configureStore({
    reducer: {
        qrCode: qrCodeReducer,
        formBuilder: formBuilderReducer,
    },
})
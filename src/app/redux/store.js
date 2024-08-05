import { configureStore } from '@reduxjs/toolkit'
import qrCodeReducer from './slices/qrCodeSlice'
import formBuilderReducer from './slices/formBuilderSlice'
import landingPageReducer from './slices/landingPageSlice'

export const store = configureStore({
    reducer: {
        qrCode: qrCodeReducer,
        formBuilder: formBuilderReducer,
        landingPage: landingPageReducer
    },
})
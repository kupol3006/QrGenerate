import { configureStore } from '@reduxjs/toolkit'
import qrCodeReducer from './slices/qrCodeSlice'
import formBuilderReducer from './slices/formBuilderSlice'
import landingPageReducer from './slices/landingPageSlice'
import authReducer from './slices/authSlice'

export const store = configureStore({
    reducer: {
        qrCode: qrCodeReducer,
        formBuilder: formBuilderReducer,
        landingPage: landingPageReducer,
        auth: authReducer,
    },
})
import { configureStore } from '@reduxjs/toolkit'
import fanReducer from './slices/fanSlice'
import businessReducer from './slices/businessSlice'

export const store = configureStore({
    reducer: {
        fan: fanReducer,
        business: businessReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { configureStore } from '@reduxjs/toolkit'
import fanReducer from './slices/fanSlice'

export const store = configureStore({
    reducer: {
        fan: fanReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
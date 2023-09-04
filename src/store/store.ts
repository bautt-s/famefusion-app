import { configureStore } from '@reduxjs/toolkit'
import fanReducer from './slices/fanSlice'
import businessReducer from './slices/businessSlice'
import celebrityReducer from './slices/celebritySlice'

export const store = configureStore({
    reducer: {
        fan: fanReducer,
        business: businessReducer,
        celebrity: celebrityReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { configureStore } from '@reduxjs/toolkit'
import fanReducer from './slices/fanSlice'
import businessReducer from './slices/businessSlice'
import celebrityReducer from './slices/celebritySlice'
import likesReducer from './slices/likesSlice'
import experiencesReducer from './slices/experiencesSlice'

export const store = configureStore({
    reducer: {
        fan: fanReducer,
        business: businessReducer,
        celebrity: celebrityReducer,
        likes: likesReducer,
        experiences: experiencesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
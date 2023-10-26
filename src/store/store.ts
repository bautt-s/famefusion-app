import { configureStore } from '@reduxjs/toolkit'
import fanReducer from './slices/fanSlice'
import businessReducer from './slices/businessSlice'
import celebrityReducer from './slices/celebritySlice'
import likesReducer from './slices/likesSlice'
import experiencesReducer from './slices/experiencesSlice'
import commonsReducer from './slices/commonsSlice'

export const store = configureStore({
    reducer: {
        fan: fanReducer,
        business: businessReducer,
        celebrity: celebrityReducer,
        likes: likesReducer,
        experiences: experiencesReducer,
        commons: commonsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
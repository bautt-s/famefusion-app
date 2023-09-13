import { StarType } from '@/components/landing/featured-stars'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface likedInterface {
    likedIDs: string[],
    likedCelebrities: StarType[],
    loadedLikes: boolean
}

const initialState: likedInterface = {
    likedCelebrities: [],
    likedIDs: [],
    loadedLikes: false,
}

export const likedSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        mutateLike: (state, action: PayloadAction<StarType>) => {
            if (!state.likedIDs.includes(action.payload.id)) {
                state.likedCelebrities.push(action.payload)
                state.likedIDs.push(action.payload.id)
            } else {
                state.likedCelebrities = state.likedCelebrities.filter(cel => cel.id !== action.payload.id)
                state.likedIDs = state.likedIDs.filter(id => id !== action.payload.id)
            }
        },

        addArray: (state, action: PayloadAction<StarType[]>) => {
            if (!state.likedCelebrities.length && !state.likedIDs.length) {
                state.likedCelebrities = [...state.likedCelebrities, ...action.payload]
                state.likedIDs = [...state.likedIDs, ...action.payload.map(star => star.id)]
                state.loadedLikes = true
            }
        },
    },
})

export const { mutateLike, addArray } = likedSlice.actions

export default likedSlice.reducer
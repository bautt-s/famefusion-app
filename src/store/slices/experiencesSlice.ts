import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface likedInterface {
    likedIDs: string[],
    likedExperiences: any[],
    loadedExperiences: boolean
}

const initialState: likedInterface = {
    likedExperiences: [],
    likedIDs: [],
    loadedExperiences: false,
}

export const experiencesSlice = createSlice({
    name: 'experiences',
    initialState,
    reducers: {
        mutateExperience: (state, action: PayloadAction<any>) => {
            if (!state.likedIDs.includes(action.payload.id)) {
                state.likedExperiences.push(action.payload)
                state.likedIDs.push(action.payload.id)
            } else {
                state.likedExperiences = state.likedExperiences.filter(cel => cel.id !== action.payload.id)
                state.likedIDs = state.likedIDs.filter(id => id !== action.payload.id)
            }
        },

        addArrayExp: (state, action: PayloadAction<any[]>) => {
            if (!state.likedExperiences.length && !state.likedIDs.length) {
                state.likedExperiences = [...state.likedExperiences, ...action.payload]
                state.likedIDs = [...state.likedIDs, ...action.payload.map(star => star.id)]
                state.loadedExperiences = true
            }
        },
    },
})

export const { mutateExperience, addArrayExp } = experiencesSlice.actions

export default experiencesSlice.reducer
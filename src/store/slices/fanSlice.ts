import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface fanInterface {
    fanData: {
        name: string,
        email: string,
        location: string | null,
        birthYear: Date,
        interests: string[],
        selfieImg: string | null,
        locationImg: string | null,
        identityImg: string | null,
        profilePic: string | null,
        userId: string,
    }
}

const initialState: fanInterface = {
    fanData: {
        name: '',
        email: '',
        location: null,
        birthYear: new Date(),
        interests: [],
        selfieImg: null,
        locationImg: null,
        identityImg: null,
        profilePic: null,
        userId: '',
    }
}

export const fanSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        modifyFanData: (state, action: PayloadAction<fanInterface['fanData']>) => {
            state.fanData = action.payload
        }
    },
})

export const { modifyFanData } = fanSlice.actions

export default fanSlice.reducer
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
        userId: string,
        submited: boolean
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
        userId: '',
        submited: false
    }
}

export const fanSlice = createSlice({
    name: 'fan',
    initialState,
    reducers: {
        modifyFanData: (state, action: PayloadAction<fanInterface['fanData']>) => {
            state.fanData = action.payload
        }
    },
})

export const { modifyFanData } = fanSlice.actions

export default fanSlice.reducer
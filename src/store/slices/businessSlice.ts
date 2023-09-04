import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface businessInterface {
    businessData: {
        name: string,
        email: string,
        businessEmail: string,
        location: string | null,
        description: string,
        categories: string[],
        selfieImg: string | null,
        identityImg: string | null,
        profilePic: string | null,
        userId: string,
        submited: boolean
    }
}

const initialState: businessInterface = {
    businessData: {
        name: '',
        email: '',
        businessEmail: '',
        location: null,
        description: '',
        categories: [],
        selfieImg: null,
        identityImg: null,
        profilePic: null,
        userId: '',
        submited: false
    }
}

export const fanSlice = createSlice({
    name: 'business',
    initialState,
    reducers: {
        modifyBusinessData: (state, action: PayloadAction<businessInterface['businessData']>) => {
            state.businessData = action.payload
        }
    },
})

export const { modifyBusinessData } = fanSlice.actions

export default fanSlice.reducer
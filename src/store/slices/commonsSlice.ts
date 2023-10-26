import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface commonsInterface {
    role: 0 | 1 | 2 // fan, cel, business
}

const initialState: commonsInterface = {
    role: 0
}

export const commonsSlice = createSlice({
    name: 'commons',
    initialState,
    reducers: {
        swapRole: (state, action: PayloadAction<any>) => {
            state.role = action.payload
        }
    },
})

export const { swapRole } = commonsSlice.actions

export default commonsSlice.reducer
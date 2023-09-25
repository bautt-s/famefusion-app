import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface expInterface {
    bookedExp: {
        id: string,
        title: string,
        location: string,
        date: Date | null,
        time: number | null,
        price: number | null,
        celebrity: string
    }
}

const initialState: expInterface = {
    bookedExp: {
        id: '',
        title: '',
        location: '',
        date: null,
        time: null,
        price: null,
        celebrity: ''
    }
}

export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        modifyBookedExp: (state, action: PayloadAction<expInterface>) => {
            state.bookedExp = action.payload.bookedExp
        }
    },
})

export const { modifyBookedExp } = bookingSlice.actions

export default bookingSlice.reducer
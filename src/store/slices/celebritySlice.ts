import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface celebrityInterface {
    celebrityData: {
        name: string,
        email: string,
        location: string | null,
        nickname: string,
        biography: string,
        gender: string,
        description: string,
        birthYear: Date,
        media: string[],
        interests: string[],
        categories: string[],
        languages: string[],
        associatedBrands: string[],
        selfieImg: string | null,
        locationImg: string | null,
        identityImg: string | null,
        userId: string,
        websiteLink: string | undefined,
        instagramLink: string | undefined,
        tiktokLink: string | undefined,
        facebookLink: string | undefined,
        youtubeLink: string | undefined,
        twitterLink: string | undefined,
        submited: boolean
    }
}

const initialState: celebrityInterface = {
    celebrityData: {
        name: '',
        nickname: '',
        email: '',
        location: null,
        biography: '',
        gender: '',
        description: '',
        birthYear: new Date(),
        media: [],
        categories: [],
        languages: [],
        interests: [],
        associatedBrands: [],
        selfieImg: null,
        locationImg: null,
        identityImg: null,
        userId: '',
        websiteLink: undefined,
        instagramLink: undefined,
        tiktokLink: undefined,
        facebookLink: undefined,
        youtubeLink: undefined,
        twitterLink: undefined,
        submited: false
    }
}

export const celebritySlice = createSlice({
    name: 'celebrity',
    initialState,
    reducers: {
        modifyCelebrityData: (state, action: PayloadAction<celebrityInterface['celebrityData']>) => {
            state.celebrityData = action.payload
        }
    },
})

export const { modifyCelebrityData } = celebritySlice.actions

export default celebritySlice.reducer
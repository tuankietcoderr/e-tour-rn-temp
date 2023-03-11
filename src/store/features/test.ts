import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Counter {
    value: number
}

const initialState: Counter = {
    value: 0,
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<{ value: number }>) => {
            state.value += action.payload.value
        },
    },
})

export default testSlice.reducer

export const { increment } = testSlice.actions

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { State } from '../../../constants/state'
import { AuthenticationType, Credential, User, UserType } from '../../../schema/User'

export interface AuthState {
    credential: Credential
    status: State
}

const initialState: AuthState = {
    credential: {
        _id: '',
        authenticationType: AuthenticationType.PASSWORD,
        userType: UserType.CLIENT,
        username: '',
        password: '',
        accessToken: '',
        refreshToken: '',
    },
    status: State.IDLE,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<{ credential: Credential }>) => {
            state.credential = action.payload.credential
            state.status = State.IDLE
        },
    },
})

export const { signIn } = authSlice.actions

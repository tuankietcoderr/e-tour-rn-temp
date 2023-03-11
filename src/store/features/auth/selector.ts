import { RootState } from '../..'

export const authCredential = (state: RootState) => state.auth.credential
export const authStatus = (state: RootState) => state.auth.status

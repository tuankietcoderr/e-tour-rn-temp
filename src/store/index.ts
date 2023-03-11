import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './features/auth'
import { testSlice } from './features/test'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        test: testSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

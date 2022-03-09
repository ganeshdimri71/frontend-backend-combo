import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postApi } from '../services/post'
import customerReducer from '../features/customerSlice'



export const store = configureStore( {
    reducer: {
        [ postApi.reducerPath ]: postApi.reducer,
        customersData: customerReducer
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( postApi.middleware )
} )


setupListeners( store.dispatch )
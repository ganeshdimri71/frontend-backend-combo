import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { customerPostApi } from '../services/customerPost'
import { subscriberPostApi } from '../services/subscriberPost'
import customerAndSubscriberReducer from '../features/customerSlice'



export const store = configureStore( {
    reducer: {
        [ customerPostApi.reducerPath ]: customerPostApi.reducer,
        [ subscriberPostApi.reducerPath ]: subscriberPostApi.reducer,
        customerAndSubscriberData: customerAndSubscriberReducer
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( customerPostApi.middleware ),
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( subscriberPostApi.middleware ),
} )


setupListeners( store.dispatch )
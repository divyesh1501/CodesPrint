import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../services/api";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [api.reducerPath]: api.reducer,
    },

    middleware: (getDefualtMiddleware) => getDefualtMiddleware().concat(api.middleware),

})

setupListeners(store.dispatch)
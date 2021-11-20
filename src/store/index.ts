import {configureStore} from '@reduxjs/toolkit'
import {reducers} from "./reducers";

const store = configureStore({
    reducer: reducers,
})
export type RootStore = ReturnType<typeof store.getState>

export default store
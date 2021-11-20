import {userReducer} from "./userReducer";
import {combineReducers} from '@reduxjs/toolkit'
import {postsReducer} from "./postsReducer";

export const reducers = combineReducers({
    userReducer,
    postsReducer
})
export type RootState = ReturnType<typeof reducers>

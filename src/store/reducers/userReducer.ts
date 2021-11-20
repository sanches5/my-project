import {AnyAction} from "@reduxjs/toolkit";
import {AUTH_USER} from "../actions/authUser";
import {user} from "../../Pages/Profile";


const initState:user = {
    id: null,
    firstName: "",
    lastName: "",
    imageProfile: "",
    littleAboutUser: "",
    status: ""
}

export const userReducer = (state = initState , action : AnyAction) => {
    switch (action.type) {
        case AUTH_USER: {
            return {...state, ...action.user}
        }
        default:
            return state
    }
}
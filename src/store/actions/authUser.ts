import {user} from "../../Pages/Profile";
import {AnyAction} from "@reduxjs/toolkit";

export const AUTH_USER:string = "AUTH_USER"

export const setUser = (user: user): AnyAction => ({type:AUTH_USER, user})
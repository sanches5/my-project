import {AnyAction} from "@reduxjs/toolkit";
import {post} from "../../Components/Posts";
import {user} from "../../Pages/Profile";
export const GET_POSTS = "GET_POSTS"
export const ADD_POST = "ADD_POST"
export const REMOVE_POST = "REMOVE_POST"
export const ADD_COMMENT_POST = "ADD_COMMENT_POST"


export const getPosts = (posts: post[] | null): AnyAction => ({type: GET_POSTS, posts})
export const addNewPost = (post: post): AnyAction => ({type: ADD_POST, post})
export const removePostGlobal = (id: number): AnyAction => ({type: REMOVE_POST, id})
export const addNewCommentPost = (comment:string, id: number, user: user): AnyAction => ({type: ADD_COMMENT_POST, id, comment, user})
import {AnyAction} from "@reduxjs/toolkit";
import {ADD_COMMENT_POST, ADD_POST, GET_POSTS, REMOVE_POST} from "../actions/posts";
import {post} from "../../Components/Posts";


const initState: { posts: post[] } = {
    posts: []
}

export const postsReducer = (state = initState, action: AnyAction) => {
    switch (action.type) {
        case GET_POSTS: {
            return {...state, posts: [...action.posts]}
        }
        case ADD_POST: {
            return {...state, posts: [...state.posts, action.post]}
        }
        case REMOVE_POST: {
            return {...state, posts: state.posts.filter(post => post.id !== action.id)}
        }
        case ADD_COMMENT_POST: {
            const upPosts = state.posts.map(post => {
                const testPost = {...post}

                if (testPost.id === action.id) {
                    testPost.comments = [...testPost.comments, {
                        text: action.comment,
                        id: new Date().getTime(),
                        user: {
                            firstName: action.user.firstName,
                            lastName: action.user.lastName,
                            imageProfile: action.user.imageProfile
                        }
                    }]
                }
                return testPost
            })

            return {...state, posts: upPosts}
        }

        default:
            return state
    }
}
import React, {FC, useEffect} from 'react';
import './style.scss'
import Post from "../../Components/Post";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers";
import {addNewCommentPost, getPosts, removePostGlobal} from "../../store/actions/posts";
import {postsDefault} from "../../defaultInfo";
import {user} from "../../Pages/Profile";

export type post = {
    text: string
    id: number
    file: string
    comments: comment[]
}

export type comment = {
    id: number
    user: {
        firstName: string
        lastName: string
        imageProfile: string
    }
    text: string
}

const Posts: FC<{ user: user }> = ({user}) => {

    const {posts}: { posts: post[] } = useSelector((state: RootState) => state.postsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!posts.length) {
            dispatch(getPosts(postsDefault))
        }
    }, [])
    const removePost = (postId: number) => {
        dispatch(removePostGlobal(postId))
    }

    const addComment = (comment: string, postId: number) => {
        dispatch(addNewCommentPost(comment, postId, user))
    }
    return <div className={"posts"}>
        {posts.length ? posts.map((post: post) => (
            <Post
                id={post.id}
                removePost={removePost}
                addComment={addComment}
                comments={post.comments}
                key={post.id}
                text={post.text}
                file={post.file}
            />
        )) : null}
    </div>

};

export default Posts;
import Input from "../Input";
import React, {FC, useState} from "react";
import "./style.scss"
import ExpandText from "../ExpandText";

interface PropsPost {
    file: string
    id: number
    text: string
    removePost: (id: number) => void
    addComment: (comment: string, postId: number) => void
    comments?: {
        id: number
        user: {
            firstName: string
            lastName: string
            imageProfile: string
        }
        text: string
    }[]
}

const Post: FC<PropsPost> = ({file, text, comments, addComment, id, removePost}) => {
    const [comment, setComment] = useState<string>("")

    const handleSaveComment = () => {
        if (comment) {
            addComment(comment, id)
            setComment("")
        }
    }

    return (<div className={"post"}>
        <button className={"removeButton removePost"} onClick={() => removePost(id)}>DELETE post</button>
        <ExpandText text={text}/>
        {file ? <img
            className={"postImage"}
            src={file}
            alt=""/> : null
        }
        <div className={"formComment"}>
            <Input value={comment} onChange={setComment}/>
            <button className={"addButton"} onClick={handleSaveComment}>ADD comment</button>
        </div>
        <div className={"comments"}>
            {comments ? comments.map(comment => (
                <div key={comment.id} className={"comment"}>
                    <div className={"userComment"}>
                        <img
                            width={60}
                            height={60}
                            style={{borderRadius: "50%"}}
                            src={comment.user.imageProfile}
                            alt=""
                        />
                        <div>
                            <div className={"userNamesComment"}>
                                <p>{comment.user.firstName}</p>
                                <p>{comment.user.lastName}</p>
                            </div>
                            <div className={"textComment"}>
                                {comment.text}
                            </div>
                        </div>
                    </div>
                </div>
            )) : null}
        </div>
    </div>)
}

export default Post
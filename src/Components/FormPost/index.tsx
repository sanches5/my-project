import React, {FC, useState} from "react";
import TextArea from "../TextArea";
import InputFile from "../InputFile";
import "./style.scss"
import {post} from "../Posts";

const FormPost: FC<{ createPost: (e: post) => void }> = ({createPost}) => {
    const [textPost, setTextPost] = useState<string>("")
    const [file, setFIle] = useState<string>("")

    const handleSavePost = () => {
        if (textPost) {
            createPost({id: new Date().getTime(), text: textPost, file: file, comments: []})
            setFIle("")
            setTextPost("")
        }
    }

    return (<div className={"formPost"}>
        <TextArea value={textPost} setValue={setTextPost}/>

        <div style={{alignItems: "center", display: "flex", justifyContent: "center"}}>
            {file && <img className={"imageCreatePost"} src={file} alt=""/>}
        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <InputFile setValue={setFIle}/>
              <button
                className={"addButton"}
                onClick={handleSavePost}>
                ADD post
            </button>
        </div>
    </div>)
}

export default FormPost
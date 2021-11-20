import React, {FC, useState} from "react";
import {user} from "../../Pages/Profile";
import {imageUrl} from "../../utils/imageUrl";
import "./style.scss"
import TextArea from "../TextArea";
import InputFile from "../InputFile";

type FormChangeUserProfileProps = {
    user: user
    setCurrentUser: (person: user) => void
}

const FormChangeUserProfile: FC<FormChangeUserProfileProps> = ({user, setCurrentUser}) => {
    const [changeUser, setChangeUser] = useState<user>({...user})

    const handleChangeUser = (field: string, value: string) => {
        setChangeUser({...changeUser, [field]: value})
    }

    const handleSaveChangeUser = () => {
        setCurrentUser(changeUser)
    }

    return (<div className={"formChangeUser"}>
        <label className={"label"} htmlFor="firstName">
            firstName
            <input
                type="text"
                className={"input"}
                id={"firstName"}
                value={changeUser.firstName}
                onChange={(e) => handleChangeUser("firstName", e.target.value)}
            />
        </label>
        <label className={"label"} htmlFor="lastName">
            lastName
            <input
                type="text"
                className={"input"}
                id={"lastName"}
                value={changeUser.lastName}
                onChange={(e) => handleChangeUser("lastName", e.target.value)}
            />
        </label>
        <label className={"label"} htmlFor="status">
            status
            <input
                type="text"
                className={"input"}
                id={"status"}
                value={changeUser.status}
                onChange={(e) => handleChangeUser("status", e.target.value)}
            />
        </label>
        <label className={"label"} htmlFor="littleAboutUser">
            littleAboutUser
            <TextArea
                value={changeUser.littleAboutUser}
                setValue={(value) => handleChangeUser("littleAboutUser", value)}
            />
        </label>
        <InputFile setValue={(s) => handleChangeUser("imageProfile", s)}/>
        {/*<label style={{marginTop: 10, marginBottom: 10}} htmlFor="imageProfile" className="fileUpload">*/}
        {/*    <input*/}
        {/*        type="file"*/}
        {/*        className={"inputFile"}*/}
        {/*        onChange={(e) => handleChangeUser("imageProfile", imageUrl(e))}*/}
        {/*        id={"imageProfile"}/>*/}
        {/*    photo*/}
        {/*</label>*/}
        <img style={{marginBottom: 10}} src={changeUser.imageProfile} alt=""/>
        <button className={"editButton"} onClick={handleSaveChangeUser}>save change</button>
    </div>)
}

export default FormChangeUserProfile
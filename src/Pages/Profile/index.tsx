import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import FormPost from "../../Components/FormPost";
import Modal from "../../Components/Modal";
import FormChangeUserProfile from "../../Components/FormChangeUserProfile";
import {setUser} from "../../store/actions/authUser";
import {RootState} from "../../store/reducers";
import Posts, {post} from "../../Components/Posts";
import './style.scss'
import {addNewPost} from "../../store/actions/posts";
import ExpandText from "../../Components/ExpandText";
import {log} from "util";

export type user = {
    id: number | null
    imageProfile: string
    firstName: string
    lastName: string
    status: string
    littleAboutUser: string
}

const user: user = {
    id: 1,
    imageProfile: "https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
    firstName: "ALEX",
    lastName: "TREND",
    status: "i am brazer",
    littleAboutUser: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Dolorem dolorum ea illo labore molestiae nesciunt obcaecati quas sapiente totam veritatis.
        Consequatur dicta enim iusto labore, magnam modi nam nemo recusandae. `
}

const Profile = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [textVisible, setTextVisible] = useState<boolean>(false)
    const [changeUser, setChangeUser] = useState<boolean>(false)
    const dispatch = useDispatch()
    const currentUser = useSelector((state: RootState) => state.userReducer)

    useEffect(() => {
        dispatch(setUser(user))
    }, [])
    console.log(currentUser)
    const addPost = (post: post) => {
        dispatch(addNewPost(post))
        setVisible(false)
    }

    const changeProfile = (newProfile: user) => {
        setChangeUser(false)
        dispatch(setUser(newProfile))
    }

    return (
        <div className={"profile"}>
            <div className={"userProfile"}>
                <img src={currentUser.imageProfile} width={150}
                     height={150} style={{borderRadius: "50%"}} alt=""/>
                <div className={"userInfo"}>
                    <div className={"userNames"}>
                        <h1>{currentUser.firstName}</h1>
                        <h1>{currentUser.lastName}</h1>
                    </div>
                    <p className={"useStatus"}>
                        {currentUser.status}
                    </p>
                    <div className={"userBlock"}>
                        <ExpandText text={currentUser.littleAboutUser}/>
                    </div>
                </div>
            </div>
            <hr/>
            <button style={{marginRight: 20}} onClick={() => setVisible(true)} className={"addButton"}>create Post
            </button>
            <button onClick={() => setChangeUser(true)} className={"editButton"}>Edit Profile</button>

            <Modal setVisible={setChangeUser} visible={changeUser}>
                {currentUser.id && <FormChangeUserProfile setCurrentUser={changeProfile} user={currentUser}/>}
            </Modal>

            <Modal setVisible={setVisible} visible={visible}>
                <FormPost createPost={addPost}/>
            </Modal>

            <Posts user={currentUser}/>
        </div>
    );
};

export default Profile;
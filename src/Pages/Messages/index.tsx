import React, {useState} from 'react';
import './style.scss'

type user = {
    id: number
    firstName: string
    lastName: string
    image: string
}

type message = {
    id: number
    userId: number
    text: string
    date: Date
}

const initialMessages: message[] = [
    {id: 1, userId: 1, text: "message-1", date: new Date()},
    {id: 2, userId: 2, text: "message-2", date: new Date()},
    {id: 3, userId: 1, text: "message-3", date: new Date()},
    {id: 4, userId: 2, text: "message-4", date: new Date()}
]

const initialUsers: user[] = [
    {id: 1, firstName: "Alex", lastName: "Vladimir", image: ""},
    {id: 2, firstName: "Bob", lastName: "John", image: ""},
    {id: 3, firstName: "Jon", lastName: "Ronald", image: ""},
]

const Messages = () => {
    const [textMessage, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<message[]>(initialMessages);
    const [users, setUsers] = useState<user[]>(initialUsers);
    const [profileUser, setProfileUser] = useState<user>({id: 5, image: "", lastName: "Admin", firstName: "Admin"});


    return (
        <div className={"messages"}>
            <div className={""}>
                <div className={"searchUser"}>
                    find user
                    <input type="text"/>
                </div>
                <div className={"listUsers"}>
                    {users.map(user => (
                        <div key={user.id} className={"user"}>
                            <div>image</div>
                            <h1>{user.firstName}</h1>
                            <h1>{user.lastName}</h1>
                        </div>
                    ))}
                </div>
            </div>

            <div className={"chat"}>
                <div className={"messagesWithUser"}>
                    {messages.map(message => (
                        <div key={message.id} className={`message ${profileUser.id === message.userId ? "messageLeft" : "messageLeft"}`}>
                            <p>{message.text}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Messages;

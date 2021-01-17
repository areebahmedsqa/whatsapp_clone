import { Avatar } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import './SidebarChat.css';
import db from './firebase';

function SidebarChat({ id, name, addNewChat}) {

    const [seed, setseed] = useState("");

    useEffect(() => {
        setseed(Math.floor(Math.random()*5000));
}, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat room");

        if (roomName) {
            db.collection('rooms').add({
                name: roomName
            })
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last message....</p>
            </div>
        </div>
):(
    <div onClick={createChat}
    className="sidebarChat">
        <h2>Add new Chat</h2>
    </div>

);
}

export default SidebarChat

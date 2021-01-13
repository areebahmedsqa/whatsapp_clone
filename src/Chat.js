import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic'
import React, { useEffect, useState } from 'react'
import './Chat.css';

function Chat() {

    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
}   , []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You typed >>> ', input);
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reciever"}`}>
                    <span className="chat__name">Areeb Ahmed</span>
                    Hello! how are you?
                    <span className="chat__timestamp">2:02 a.m</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticon/>
                <form>
                    <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit" >Send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
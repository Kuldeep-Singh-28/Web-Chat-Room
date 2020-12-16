import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, Search } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import db from '../../firebase';
import "./Chat.css";


function Chat() {

    const [seed, setSeed] = useState("");
    const [Input, setInput] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        if (roomId) {
            db.collection("rooms").doc(roomId).onSnapshot(snapshot => (setRoomName(snapshot.data().name)));
        }
    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 6000));
    }, [])

    // const 

    const sendMessage = (e) => {
        e.preventDefault();
        setInput("")
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <Search />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && 'chat__reciever'}`}>
                    <span className="chat__name">Kuldeep Singh</span>
                Hello guys
                <span className="chat__timestamp">3:00 PM</span></p>

            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form >
                    <input onChange={(e) => setInput(e.target.value)} value={Input} type="text" placeholder="Type a message " />
                    <button type="submit" onClick={sendMessage}>Send</button>
                </form>
                <Mic />

            </div>
        </div>
    )
}

export default Chat

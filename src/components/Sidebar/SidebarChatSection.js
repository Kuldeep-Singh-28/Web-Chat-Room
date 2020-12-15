import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import "./SidebarChatSection.css";

function SidebarChatSection({addNewChat}) {

    const [seed, setSeed] = useState("");
    const createChat = () =>{
        const roomName = prompt("Please enter your name for chat!! ")
        if (roomName) {
            // DB.....
        }
    };

    useEffect(() =>{
        setSeed(Math.floor(Math.random() * 6000));
    }, [])

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>last message </p>
            </div>
        </div>
    ): (
        <div className="sidebarChat" onClick={createChat}>
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChatSection

import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import db from '../../firebase';
import "./SidebarChatSection.css";

function SidebarChatSection({ id, name, addNewChat }) {

    const [seed, setSeed] = useState("");
    const createChat = () => {
        const roomName = prompt("Please enter your name for chat!! ")
        if (roomName) {
            // DB.....
            db.collection("rooms").add({
                name: roomName,
            });
        }
    };

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 6000));
    }, [])

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>last message </p>
                </div>
            </div>
        </Link>
    ) : (
            <div className="sidebarChat" onClick={createChat}>
                <h2>Add New Chat</h2>
            </div>
        )
}

export default SidebarChatSection

import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined, Unsubscribe } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../DataLayer/StateProvider';
import db from '../../firebase';
import "./Sidebar.css";
import SidebarChatSection from './SidebarChatSection';

function Sidebar() {

    const [rooms, setRooms] = useState([]);
  const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
            setRooms(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),

            })))
        );

        return () => {
            unsubscribe();
        }

    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL}/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchBox">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start" />
                </div>
            </div>
            <div className="sidebar__chats">
            <SidebarChatSection addNewChat/>
                {rooms.map(room => (
                    <SidebarChatSection key={room.id} id={room.id} name={room.data.name}  />
                ))}
            </div>
        </div>
    )
}

export default Sidebar

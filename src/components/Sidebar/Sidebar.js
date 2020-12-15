import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from 'react'
import "./Sidebar.css";
import SidebarChatSection from './SidebarChatSection';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
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
                <SidebarChatSection />
                <SidebarChatSection />
            </div>
        </div>
    )
}

export default Sidebar

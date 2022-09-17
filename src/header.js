import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import linkedinLogo from "./asset/linkedinLogo.png"
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOption from "./headerOption"
import Lake from "./asset/lake.jpg"

const Header = () => {
    return (
        <div className='header'>
            <div className='header-left'>
                <img src={linkedinLogo} alt="Linkedin" />
                <div className='header-search'>
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header-right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={Lake} title="Me" />
            </div>

        </div>
    )
}

export default Header
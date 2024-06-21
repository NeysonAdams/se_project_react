import React from 'react';
import avatar from '../../assets/avatar.png'
import "./SideBar.css"

const SideBar = ({}) =>{
    return(
        <div className="sidebar">
            <span className="sidebar__avatar" >
                <img className="sidebar__avatar-image" src={avatar} alt="User Avatar" />
            </span>
            <p className="sidebar__username" to="/se_project_react/profile">Terrence Tegegne</p>
        </div>
    )
}

export default SideBar;
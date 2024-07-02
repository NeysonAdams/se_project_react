import React, {useContext} from 'react';
import avatar from '../../assets/avatar.png'

import CurrentUserContext from '../../context/CurrentUserContext';
import "./SideBar.css"

const SideBar = ({onEditOpen, onLogOut}) =>{
    const {currentUser} = useContext(CurrentUserContext);
    return(
        
        <div className="sidebar">
            <span className='sidebar__raw'>
            <div className="sidebar__avatar" >
                <img className="sidebar__avatar-image" src={currentUser.avatar} alt="User Avatar" />
            </div>
            <p className="sidebar__username" >{currentUser.name}</p>
            </span>
            <div className='sidebar__buttons'>
                <button className="sidebar__button" onClick={onEditOpen}>Change profile data</button>
                <button className="sidebar__button" onClick={onLogOut}>Log out</button>
            </div>
        </div>
    )
}

export default SideBar;
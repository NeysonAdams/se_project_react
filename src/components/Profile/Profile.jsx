import React from 'react';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';

import CurrentUserContext from '../../context/CurrentUserContext';
import './Profile.css'

const Profile =({cardsData, onItemModalOpen, onModalFormOpen, onEditOpen, onLogOut, onLike})=>{

    return (
        <div className='profile'>
            <SideBar onEditOpen={onEditOpen} onLogOut={onLogOut}/>
            <ClothesSection cardsData={cardsData} onItemModalOpen={onItemModalOpen} onModalFormOpen={onModalFormOpen} onLike={onLike}/>
        </div>
    )

}

export default Profile
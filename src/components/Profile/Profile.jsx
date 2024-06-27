import React from 'react';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';
import './Profile.css'

const Profile =({cardsData, onItemModalOpen, onModalFormOpen})=>{

    return (
        <div className='profile'>
            <SideBar/>
            <ClothesSection cardsData={cardsData} onItemModalOpen={onItemModalOpen} onModalFormOpen={onModalFormOpen}/>
        </div>
    )

}

export default Profile
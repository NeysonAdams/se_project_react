import React from 'react';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';
import './Profile.css'

const Profile =({cardsData, onItemModalOpen})=>{

    return (
        <div className='profile'>
            <SideBar/>
            <ClothesSection cardsData={cardsData} onItemModalOpen={onItemModalOpen}/>
        </div>
    )

}

export default Profile
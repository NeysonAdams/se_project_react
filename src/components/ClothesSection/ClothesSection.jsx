import React from 'react';
import ItemCard from '../ItemCard/ItemCard';

import './ClothesSection.css'

const ClothesSection =({cardsData, onItemModalOpen, onModalFormOpen})=>{

    return (
        <div className='clothes'>
            <div className='clothes__title'>
                <p className='clothes__title-label'>Your items</p>
                <button className='clothes__title-button' type='button' onClick={onModalFormOpen}>+ Add new</button>
            </div>
            <ul className="clothes__grid">
                {cardsData.map((item) => (
                    <ItemCard key={item._id} item={item} onItemModalOpen={onItemModalOpen}/>
                ))}
            </ul>
        </div>
    )

}

export default ClothesSection
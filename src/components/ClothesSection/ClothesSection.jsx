import React, { useContext} from 'react';
import ItemCard from '../ItemCard/ItemCard';

import './ClothesSection.css'
import CurrentUserContext from '../../context/CurrentUserContext';

const ClothesSection =({cardsData, onItemModalOpen, onModalFormOpen, onLike})=>{
    
   const {currentUser} = useContext(CurrentUserContext);
    return (
        <div className='clothes'>
            <div className='clothes__title'>
                <p className='clothes__title-label'>Your items</p>
                <button className='clothes__title-button' type='button' onClick={onModalFormOpen}>+ Add new</button>
            </div>
            <ul className="clothes__grid">
                {cardsData.map((item) => item.owner === currentUser._id && (
                    <ItemCard key={item._id} item={item} onItemModalOpen={onItemModalOpen} onLike={onLike}/>
                ))}
            </ul>
        </div>
    )

}

export default ClothesSection
import React from 'react';
import "./ItemCard.css"

const ItemCard = ({item, onItemModalOpen})=>{
    const curentItem = item;

    const handleItemClick = () => {
        onItemModalOpen(curentItem);
      };

    return (
        <li className='card' onClick={handleItemClick}>
            <img className='card__image' src={curentItem.link} alt={curentItem.name} />
            <p className='card__label'>{curentItem.name}</p>
        </li>
    );
}
export default ItemCard;
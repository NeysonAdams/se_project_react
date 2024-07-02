import React, {useContext} from 'react';
import "./ItemCard.css"
import CurrentUserContext from '../../context/CurrentUserContext';

const ItemCard = ({item, onItemModalOpen, onLike})=>{
    
    const {currentUser} = useContext(CurrentUserContext);
    const curentItem = item;
    const isLiked = item.likes.includes(currentUser._id);
    const itemLikeButtonClassName = 'card__like-button-active'
    
    const handleItemClick = (event) => {
        if(event.target.name==='like-button') return;
        onItemModalOpen(curentItem);
      };

    const handleLike = ()=>{
        onLike({id:curentItem._id, isLiked: isLiked});
    }

    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
      };

    return (
        <li className='card' onClick={handleItemClick}>
            <img className='card__image' src={curentItem.imageUrl} alt={curentItem.name} />
            <div className='card__title'>
                <p className='card__label'>{curentItem.name}</p>
                {!isEmpty(currentUser) &&(
                    <button 
                        name='like-button'
                        className={`card__like-button ${isLiked ? itemLikeButtonClassName:''}`}
                        onClick={handleLike}>
                    </button>
                )}
            </div>
        </li>
    );
}
export default ItemCard;
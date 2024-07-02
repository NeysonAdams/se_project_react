import React, { useContext, useEffect,useRef } from 'react';
import "./ItemModal.css"
import { useEscape } from '../../utils/popupUtils';
import CurrentUserContext from '../../context/CurrentUserContext';

const ItemModal = ({data, onClose, onDelete})=>{
   const {currentUser} = useContext(CurrentUserContext);
   const isOwn = data.owner === currentUser._id;
    useEscape(onClose);

      const handleOverlayClick = (event) => {
        if (event.target.classList.contains('modal')) {
          onClose();
        }
      };

    const handleDeleteItem = ()=>{
      onDelete(data);
      onClose();
    }

    return(
        <div className='modal' onClick={handleOverlayClick}>
            <div className='modal__container-image'>
                <div className='modal__image-mask'>
                    <img className='modal__image' src={data.imageUrl} alt={data.name}/>
                </div>
                <button className="modal__close-button" type="button" onClick={onClose}></button>
                <div className='modal_image__ttile-container'>
                  <p className='modal_image-title'>{data.name}</p>
                  <button type='button' className={` modal_image__delete ${isOwn ? 'modal_image__delete_visible' : 'modal_image__delete_hidden'}`}  onClick={handleDeleteItem}>Delete Item</button>
                </div>
                <p className='modal__image-weather'>Weather: {data.weather}</p>
            </div>
        </div>
    );
}

export default ItemModal;
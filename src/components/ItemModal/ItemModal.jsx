import React, { useEffect } from 'react';
import "./ItemModal.css"

const ItemModal = ({data, onClose, onDelete})=>{

    useEffect(() => {
        const handleEscapeClose = (event) => {
          if (event.key === 'Escape') {
            onClose();
          }
        };
    
        document.addEventListener('keydown', handleEscapeClose);
        return () => {
          document.removeEventListener('keydown', handleEscapeClose);
        };
      }, [onClose]);

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
                  <button type='button' className='modal_image__delete' onClick={handleDeleteItem}>Delete Item</button>
                </div>
                <p className='modal__image-weather'>Weather: {data.weather}</p>
            </div>
        </div>
    );
}

export default ItemModal;
import React, { useEffect } from 'react';
import "./ItemModal.css"

const ItemModal = ({data, onClose})=>{

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

    return(
        <div className='modal' onClick={handleOverlayClick}>
            <div className='modal__container-image'>
                <div className='modal__image-mask'>
                    <img className='modal__image' src={data.link} alt={data.name}/>
                </div>
                <button className="modal__close-button" type="button" onClick={onClose}></button>
                <p className='modal_image-title'>{data.name}</p>
                <p className='modal__image-weather'>Weather: {data.weather}</p>
            </div>
        </div>
    );
}

export default ItemModal;
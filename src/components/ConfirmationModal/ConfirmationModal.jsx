import React, { useEffect } from 'react';
import "./ConfirmationModal.css"

const ConfirmationModal = ({isOpen, onConfirm, onClose})=>{

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
        isOpen &&(
            <div className='modal' onClick={handleOverlayClick}>
                <div className='modal__container'>
                    <button className="modal__close-button" type="button" onClick={onClose}></button>
                    <p className='modal__confirm-title'>Are you sure you want to delete this item?
                    This action is irreversible.</p>
                    <button className='modal__confirm-button' type="button" onClick={onConfirm}>Yes, delete item</button>
                    <button className='modal__close-confirm' type="button" onClick={onClose}>Cancel</button>
                </div>
            </div>
        )
    )
}

export default ConfirmationModal;
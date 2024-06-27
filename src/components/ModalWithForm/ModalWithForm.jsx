import React, { useEffect } from 'react';
import './ModalWithForm.css'
import { useEscape } from '../../utils/popupUtils';

const ModalWithForm = ({ title, name, buttonText, onClose, onSubmit, children })=>
{
    useEscape(onClose)

      const handleOverlayClick = (event) => {
        if (event.target.classList.contains('modal')) {
          onClose();
        }
      };

      const handleSubmit = (event) => {
        onSubmit(event);
      };
      
    
    return (
        <div className={`modal modal_type_${name}`} onClick={handleOverlayClick}>
            <div className='modal__container'>
                <p className='modal__title'>{title}</p>
                <button className="modal__close-button" type="button" onClick={onClose}></button>
                <form className="modal__form" name={name} onSubmit={handleSubmit}>
                    {children}
                    <fieldset className='modal__fieldset'>
                        <button className="modal__submit-button" type="submit">{buttonText}</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default ModalWithForm;
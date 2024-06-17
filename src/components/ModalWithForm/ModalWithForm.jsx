import React, { useEffect } from 'react';
import './ModalWithForm.css'

const ModalWithForm = ({ title, name, buttonText, onClose, onSubmit, children })=>
{
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

      const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const newCardData = {
            name: data.nameInput,
            link: data.imageUrl,
            weather: data.options.toLowerCase()
        }
        
        onSubmit(newCardData);
        form.reset();
        onClose();
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
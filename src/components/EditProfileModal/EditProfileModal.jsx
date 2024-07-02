import React, { useState, useEffect, useContext } from 'react';

import CurrentUserContext from '../../context/CurrentUserContext';
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import './EditProfileModal.css'


const EditProfileModal = ({isOpen, onUpdate, onCloseModal}) => {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const {currentUser} = useContext(CurrentUserContext);
    
    useEffect(()=>{
      if(isOpen){
          setName(currentUser.name);
          setImageUrl(currentUser.avatar);
      }
  }, [isOpen]);

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleImageUrlChange = (event) => {
      setImageUrl(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const user = {
          name: name,
          avatar: imageUrl
      };
      onUpdate(user);
  };

    return (
      isOpen && ( 
        <ModalWithForm
        title="Change profile data"
        name="edit"
        buttonText="Save changes"
        onClose={onCloseModal}
        onSubmit={handleSubmit}
      >
        <fieldset className='modal__fieldset'>
          <label htmlFor='nameInput' className="modal__form-label">Name*</label>
          <input 
                onChange={handleNameChange}
                id='nameInput' 
                type='text' 
                name='nameInput' 
                className='modal__form-input' 
                placeholder='Name' 
                value={name}
                minLength={3} required />
        </fieldset>
        <fieldset className='modal__fieldset'>
          <label htmlFor='urlInput' className="modal__form-label" >Avatar*</label>
          <input 
                onChange={handleImageUrlChange}
                id='urlInput' 
                type='url' 
                name='urlInput'
                value={imageUrl} 
                className='modal__form-input' 
                placeholder='Avatar URL' required/>
        </fieldset>
      </ModalWithForm>
    ));
  };

  export default EditProfileModal;
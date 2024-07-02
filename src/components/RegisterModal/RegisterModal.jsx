import React, { useState, useEffect } from 'react';

import ModalWithForm from '../ModalWithForm/ModalWithForm'
import './RegisterModal.css'


const RegisterModal = ({isOpen, onSighUp, onCloseModal}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(()=>{
      if(isOpen){
          setEmail('')
          setName('');
          setImageUrl('');
          setPassword('');
      }
  }, [isOpen]);

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleImageUrlChange = (event) => {
      setImageUrl(event.target.value);
    };

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const newUser = {
          email:email,
          name: name,
          avatar: imageUrl,
          password: password
      };
      onSighUp(newUser);
  };

    return (
      isOpen && ( 
        <ModalWithForm
        title="Sign Up"
        name="sugnup"
        buttonText="Sign Up"
        onClose={onCloseModal}
        onSubmit={handleSubmit}
      >
        <fieldset className='modal__fieldset'>
          <label htmlFor='emailReg' className="modal__form-label">Email*</label>
          <input 
                onChange={handleEmailChange}
                id='emailReg' 
                type='email' 
                name='emailInput' 
                className='modal__form-input' 
                placeholder='Email' required />
        </fieldset>
        <fieldset className='modal__fieldset'>
          <label htmlFor='passwordReg' className="modal__form-label" >Password*</label>
          <input 
                onChange={handlePasswordChange}
                id='passwordReg' 
                type='password' 
                name='passwordInput' 
                className='modal__form-input' 
                placeholder='Password' 
                required/>
        </fieldset>
        <fieldset className='modal__fieldset'>
          <label htmlFor='nameInput' className="modal__form-label">Name*</label>
          <input 
                onChange={handleNameChange}
                id='nameInput' 
                type='text' 
                name='nameInput' 
                className='modal__form-input' 
                placeholder='Name' 
                minLength={3} required />
        </fieldset>
        <fieldset className='modal__fieldset'>
          <label htmlFor='urlInput' className="modal__form-label" >Avatar URL*</label>
          <input 
                onChange={handleImageUrlChange}
                id='urlInput' 
                type='url' 
                name='urlInput' 
                className='modal__form-input' 
                placeholder='Avatar URL' required/>
        </fieldset>
      </ModalWithForm>
    ));
  };

  export default RegisterModal;
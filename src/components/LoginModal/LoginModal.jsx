import React, { useState, useEffect } from 'react';

import ModalWithForm from '../ModalWithForm/ModalWithForm'
import './LoginModal.css'


const LoginModal = ({isOpen, onSignIn, onCloseModal}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        if(isOpen){
            setEmail('');
            setPassword('');
        }
    }, [isOpen]);

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const user = {
          email:email,
          password: password
      };
      onSignIn(user);
  };

    return (isOpen && ( 
      <ModalWithForm
        title="Log In"
        name="login"
        buttonText="Log In"
        onClose={onCloseModal}
        onSubmit={handleSubmit}
      >
        <fieldset className='modal__fieldset'>
          <label htmlFor='email' className="modal__form-label">Email*</label>
          <input 
                onChange={handleEmailChange}
                id='email' 
                type='email' 
                name='emailInput' 
                className='modal__form-input' 
                placeholder='Email' required />
        </fieldset>
        <fieldset className='modal__fieldset'>
          <label htmlFor='passwordInput' className="modal__form-label" >Password*</label>
          <input 
                onChange={handlePasswordChange}
                id='passwordInput' 
                type='password' 
                name='passwordInput' 
                className='modal__form-input' 
                placeholder='Password' 
                required/>
        </fieldset>
      </ModalWithForm>
    ));
  };

  export default LoginModal;
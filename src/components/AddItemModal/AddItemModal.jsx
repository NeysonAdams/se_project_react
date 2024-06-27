import React, { useState, useEffect } from 'react';

import ModalWithForm from '../ModalWithForm/ModalWithForm'
import "./AddItemModal.css"

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [weather, setWeather] = useState('');

    useEffect(()=>{
        if(isOpen){
            setName('');
            setImageUrl('');
            setWeather('');
        }
    }, [isOpen]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleImageUrlChange = (event) => {
        setImageUrl(event.target.value);
    };

    const handleWeatherChange = (event) => {
        setWeather(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            name: name,
            imageUrl: imageUrl,
            weather: weather.toLowerCase()
        };
        onAddItem(newItem);
    };

    return (
        isOpen && ( 
        <ModalWithForm 
        title="New garment"
        name="add-garment"
        buttonText="Add garment"
        onClose={onCloseModal}
        onSubmit={handleSubmit}>
            <fieldset className='modal__fieldset'>
                <label htmlFor='nameInput' className="modal__form-label">Name</label>
                <input id='nameInput' type='text' 
                    onChange={handleNameChange} 
                    name='nameInput' 
                    className='modal__form-input' 
                    placeholder='Name'
                    value={name} 
                    minLength={3} required />
            </fieldset>
            <fieldset className='modal__fieldset'>
                <label htmlFor='imageUrl' className="modal__form-label" >Image</label>
                <input 
                    id='imageUrl' 
                    type='url' 
                    name='imageUrl'
                    value={imageUrl}
                    onChange={handleImageUrlChange} 
                    className='modal__form-input' 
                    placeholder='Image URL' required/>
            </fieldset>
            <fieldset className='modal__fieldset'>
                <legend className="modal__form-label">Select the weather type:</legend>
                <span>
                <input id='hot'
                    className="modal__form-radio" 
                    type="radio" 
                    name="options" 
                    value="Hot" 
                    checked={weather === 'Hot'}
                    onChange={handleWeatherChange}/> 
                <label htmlFor='hot' className="modal__form-label-radio"> Hot</label>
                </span>
                <span>
                <input 
                    id='warm' 
                    className="modal__form-radio"
                    type="radio" 
                    name="options" 
                    value="Warm" 
                    checked={weather === 'Warm'}
                    onChange={handleWeatherChange}/>
                <label htmlFor='warm' className="modal__form-label-radio"> Warm</label>
                </span>
                <span>
                <input id='cold' className="modal__form-radio" type="radio" name="options" value="Cold" 
                    checked={weather === 'Cold'}
                    onChange={handleWeatherChange}/>
                <label htmlFor='cold' className="modal__form-label-radio"> Cold</label>
                </span>
            </fieldset>
        </ModalWithForm>
    ));
}

export default AddItemModal;
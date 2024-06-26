import React from 'react';
import './GarmentForm.css'

const GarmentForm = () => {
  return (
    <>
      <fieldset className='modal__fieldset'>
        <label htmlFor='nameInput' className="modal__form-label">Name</label>
        <input id='nameInput' type='text' name='nameInput' className='modal__form-input' placeholder='Name' minLength={3} required />
      </fieldset>
      <fieldset className='modal__fieldset'>
        <label htmlFor='imageUrl' className="modal__form-label" >Image</label>
        <input id='imageUrl' type='url' name='imageUrl' className='modal__form-input' placeholder='Image URL' required/>
      </fieldset>
      <fieldset className='modal__fieldset'>
        <legend className="modal__form-label">Select the weather type:</legend>
        <span>
          <input id='hot' className="modal__form-radio" type="radio" name="options" value="Hot" defaultChecked /> 
          <label htmlFor='hot' className="modal__form-label-radio"> Hot</label>
        </span>
        <span>
          <input id='warm' className="modal__form-radio" type="radio" name="options" value="Warm" />
          <label htmlFor='warm' className="modal__form-label-radio"> Warm</label>
        </span>
        <span>
          <input id='cold' className="modal__form-radio" type="radio" name="options" value="Cold" />
          <label htmlFor='cold' className="modal__form-label-radio"> Cold</label>
        </span>
      </fieldset>
    </>
  );
};

export default GarmentForm;
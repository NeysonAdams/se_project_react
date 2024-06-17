import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/Logo.svg';
import avatar from '../../assets/avatar.png'

const Header = ({weatherData, onOpenModal}) =>{
   const [currentDate, setCurrentDate] = useState('June 15');

   useEffect(() => {
    const date = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
    setCurrentDate(date);
   },[]);

    return (
        <header className="header">
          <div className='header__component'>
            <img className="header__logo" src={logo} alt='logo'/>
            <p className="header__date-location">
              {currentDate}, {weatherData ? weatherData.location : '...'}</p>
          </div>
          <div className='header__component'>
            <button className="header__button" type='button' onClick={onOpenModal}>
            + Add clothes
            </button>
            <span className="header__username">Terrence Tegegne</span>
            <div className="header__avatar" >
                <img className="header__avatar-image" src={avatar} alt="User Avatar" />
            </div>
          </div>
        </header>
      );
}

export default Header;
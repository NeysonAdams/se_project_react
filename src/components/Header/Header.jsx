import React, { useState, useEffect ,useContext} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/Logo.svg';
import avatar from '../../assets/avatar.png'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import CurrentUserContext from '../../context/CurrentUserContext';

const Header = ({weatherData, onOpenModal, isSignIn, onRegistrationOpen, onLoginOpen}) =>{
  
  const {currentUser} = useContext(CurrentUserContext);
   const [currentDate, setCurrentDate] = useState('June 15');
   useEffect(() => {
    
    const date = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
    setCurrentDate(date);
   },[]);

    return (
        <header className="header">
          <div className='header__component'>
            <Link to="/">
              <img className="header__logo" src={logo} alt='logo'/>
            </Link>
            <p className="header__date-location">
              {currentDate}, {weatherData ? weatherData.location : '...'}</p>
          </div>
          <div className='header__component'>
            <ToggleSwitch/>
            { isSignIn && (
              <>
                <button className="header__button" type='button' onClick={onOpenModal}>
                + Add clothes
                </button>
                  <Link className="header__username" to="/profile">{currentUser.name}</Link>
                <div className="header__avatar" >
                    <img className="header__avatar-image" src={currentUser.avatar} alt="User Avatar" />
                </div>
            </>
            )}
            {!isSignIn && (
              <>
                <button className="header__button" type='button' onClick={onRegistrationOpen}>
                SignUP
                </button>
                <button className="header__button" type='button' onClick={onLoginOpen}>
                  Login
                </button>
              </>
            )}
          </div>
        </header>
      );
}

export default Header;
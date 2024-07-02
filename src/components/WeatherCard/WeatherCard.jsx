import React, { useState, useEffect, useContext } from 'react';
import "./WeatherCard.css";

import clouds_daily from "../../assets/cloudsun.svg";
import sun from "../../assets/sun.svg";
import rain from "../../assets/rain.svg";
import thunder from "../../assets/thunderstorm.svg";
import snow from "../../assets/snow.svg";
import fog from "../../assets/fog.svg";


import nightClouds from "../../assets/night_cloud.svg";
import moon from "../../assets/moon.svg";
import nightRain from "../../assets/night_rain.svg";
import nightThunder from "../../assets/night_thunderstorm.svg";
import nightSnow from "../../assets/night_snow.svg";

import CurrentTemperatureUnitContext from '../../context/CurrentTemperatureUnitContext';

const WeatherCard = ({ temperature, weather }) => {
  const {currentTemperatureUnit, handleToggleSwitchChange} = useContext(CurrentTemperatureUnitContext);
    const [skyStatus, setSkyStatus] = useState("weather-card__clear_sky");

    const isDayTime = () => {
      const now = new Date();
      const hour = now.getHours();
     return hour >= 6 && hour < 18;
    };

    useEffect(()=>{
      if(isDayTime()){
        if(weather === 'Clear' || weather === 'Clouds')
          setSkyStatus("weather-card__clear_sky");
        else
          setSkyStatus("weather-card__mainly_sky");
      }else{
        setSkyStatus("weather-card__nightly_sky");
      }
    },[weather])

    

    return (
      <div className={`weather-card ${skyStatus}`}>
        <p className='weather-card__temperature'>{temperature}</p>
        <img className='weather-card__icon-sun' src={sun} alt='sun icon'/>
        { (weather === "Clouds" ) && isDayTime() && (
          <img className='weather-card__icon' src={clouds_daily} alt='clouds icon'/>
            
        )
        }
        { (weather == "Clear" || weather === "Clouds" ) && isDayTime() && (
            <img className='weather-card__icon-sun' src={sun} alt='sun icon'/>
        )
        }
        { (weather === "Rain" || weather === "Drizzle" ) && isDayTime() && (
          <img className='weather-card__icon-precipitation' src={rain} alt='rain icon'/>
            
        )}
        { (weather === "Thunderstorm" ) && isDayTime() && (
          <img className='weather-card__icon-precipitation' src={thunder} alt='rain icon'/>
            
        )}
        { (weather === "Snow" ) && isDayTime() && (
          <img className='weather-card__icon-precipitation' src={snow} alt='rain icon'/>
            
        )}

        { (weather === "Clouds" ) && !isDayTime() && (
            <img className='weather-card__icon' src={nightClouds} alt='clouds icon'/>
        )
        }
        { (weather === "Clear" || weather === "Clouds") && !isDayTime() && (
            <img className='weather-card__icon-sun' src={moon} alt='sun icon'/>
        )
        }
        
        { (weather === "Rain" || weather === "Drizzle") && !isDayTime() && (
          <img className='weather-card__icon-precipitation' src={nightRain} alt='rain icon'/>
            
        )}
        { (weather === "Thunderstorm" ) && !isDayTime() && (
          <img className='weather-card__icon-precipitation' src={nightThunder} alt='rain icon'/>
            
        )}
        { (weather === "Snow" ) && !isDayTime() && (
          <img className='weather-card__icon-precipitation' src={nightSnow} alt='rain icon'/>
            
        )}
        { (weather === "Fog" ) && (
          <img className='weather-card__icon-fog' src={fog} alt='sun icon'/>
            
        )}
      </div>
    );
  };
  
  export default WeatherCard;
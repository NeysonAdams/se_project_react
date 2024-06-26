import React , { useContext } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';
import './Main.css'; 

import CurrentTemperatureUnitContext from '../../context/CurrentTemperatureUnitContext';

const Main = ({cardsData, weatherData, onItemModalOpen})=>{
    
    const {currentTemperatureUnit, handleToggleSwitchChange} = useContext(CurrentTemperatureUnitContext);

    return (
        <main className="main">
            <WeatherCard temperature={weatherData ? weatherData.temperature[currentTemperatureUnit] : '--'}
            weather={weatherData ? weatherData.precipitation : 'Clear'}/>
            <p className='main__grid-label'>
                Today is {weatherData ? weatherData.temperature[currentTemperatureUnit] : '--'} / You may want to wear:
            </p>
            <ul className="main__grid">
                {cardsData.filter((item)=>{
                    return item.weather == weatherData.weather;
                }).map((item) => (
                    <ItemCard key={item._id} item={item} onItemModalOpen={onItemModalOpen}/>
                ))}
            </ul>
        </main>
    )
}

export default Main;
import React , { useContext } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';
import './Main.css'; 

import CurrentTemperatureUnitContext from '../../context/CurrentTemperatureUnitContext';

const Main = ({cardsData, weatherData, onItemModalOpen})=>{
    
    const {currentTemperatureUnit, handleToggleSwitchChange} = useContext(CurrentTemperatureUnitContext);
    
    const temperature = weatherData ? weatherData.temperature[currentTemperatureUnit] : '--';
    const weather = weatherData ? weatherData.precipitation : 'Clear';
    const weatherType = weatherData ? weatherData.weather : null;

    return (
        <main className="main">
            <WeatherCard temperature={temperature} weather={weather} />
            <p className='main__grid-label'>
                Today is {temperature} / You may want to wear:
            </p>
            <ul className="main__grid">
                {
                    cardsData.filter((item) => {
                        return weatherType ? item.weather === weatherType : false;
                    }).map((item) => (
                        <ItemCard key={item._id} item={item} onItemModalOpen={onItemModalOpen} />
                    ))
                }
            </ul>
        </main>
    );
}

export default Main;
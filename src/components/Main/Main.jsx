import React , { useState, useEffect } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';
import './Main.css'; 

const Main = ({cardsData, weatherData, onItemModalOpen})=>{
    

    return (
        <main className="main">
            <WeatherCard temperature={weatherData ? weatherData.temperature : '--'}
            weather={weatherData ? weatherData.precipitation : 'Clear'}/>
            <p className='main__grid-label'>
                Today is {weatherData ? weatherData.temperature : '--'}°F / You may want to wear:
            </p>
            <ul className="main__grid">
                {cardsData.map((item) => (
                    <ItemCard key={item._id} item={item} onItemModalOpen={onItemModalOpen}/>
                ))}
            </ul>
        </main>
    )
}

export default Main;
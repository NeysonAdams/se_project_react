import { latitude, longitude, apiKey } from "./constants";

const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}&units=imperial`

const getWeatherState = (temperature)=>{
    if (temperature >= 86) {
        return 'hot';
      } else if (temperature >= 66 && temperature <= 85) {
        return 'warm';
      } else if (temperature <= 65) {
        return 'cold';
      }
}

const getDataFromApi = (jsonData) =>
{
    return {
        temperature:{
          F:`${Math.round(jsonData.main.temp)}°F`,
          C:`${Math.round((jsonData.main.temp - 32) * 5/9)}°C`
        } ,
        precipitation: jsonData.weather[0].main,
        weather: getWeatherState(jsonData.main.temp),
        location: jsonData.name
    }
}

export const getWeather = ()=>{
    return fetch(endpoint)
    .then(res=>{
        if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Error: ${res.status}`);
    })
    .then(jsonData => getDataFromApi(jsonData));
}
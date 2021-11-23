import React from "react";

const WeatherCard2 = (props) => {
    const {weather} = props;
    const iconName = weather?.weather[0].icon;

    return(
         <div>
             <div className="card">
                 <div className="container">
                     <h4><b>{weather?.name}</b></h4>
                     <p> Humidity :  {weather ?.main?.humidity}</p>
                     <p> Country : {weather?.sys?.country}</p>
                     <img className="iconContainer" src = {'http://openweathermap.org/img/w/'+ iconName + '.png' }/>
                 </div>
             </div>
         </div>


    );

}
export default WeatherCard2;

 /*fetchWeather2 = {fetchWeatherForTomorrow}/> */
         //<WeatherCard2 weather = {weather} city = {city} />
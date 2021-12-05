import React from "react";

const WeatherCard2 = (props) => {

    //1. this will display the weather for the surrounding first city
    //2. this will use the city generate lat and long and also use it to
      const {cityDetails} = props;
    return(
             <div className="card">
                 <div className="container">
                      <p> {cityDetails?.list[1]?.name} </p>
                      <p> Temperature: {cityDetails?.list[1]?.main.temp} </p>
                      <p> Feels Like: {cityDetails?.list[1]?.main?.feels_like} </p>
                      <p> Minimum Temperature:  {cityDetails?.list[1]?.main.temp_min} </p>
                      <p> Maximum Temperature:  {cityDetails?.list[1]?.main.temp_max} </p>
                      <p> {cityDetails?.list[1]?.main.humidity}</p>
                      <p>Weather Condition: {cityDetails?.list[1]?.weather[0]?.description}</p>
                 </div>
             </div>
    );

}
export default WeatherCard2;

 /*fetchWeather2 = {fetchWeatherForTomorrow}/> */
         //<WeatherCard2 weather = {weather} city = {city} />
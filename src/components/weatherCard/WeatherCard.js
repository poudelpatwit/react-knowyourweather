import React from "react";
//this will display the tiles of the weather
//3 different tiles for 3 days ahead.
// a side bar that will keep track of the city names and will later refill it when clicked
// a donation plus a cute footer maybe just use it in main.js
//main.js is the main layout of the entire project

const WeatherCard = (props) => {

    //some varibles to store data received from the api call
   const {weather} = props;
   const iconName = weather?.weather[0].icon;

  return (
      <div className="card">
          <div className="container">
          {/*this is where all the weather data is being displayed from the api call*/}
                  <h4><b>{weather?.name}</b></h4>
                  <p> <b>Country : {weather?.sys?.country}</b> </p>
                  <p> {weather?.weather[0].main} </p>
                  <p> Temperature: {weather?.main?.temp} </p>
                  <span> Feels Like : {weather?.main?.feels_like} </span>
                  <p> Clouds : {weather?.clouds?.all}% </p>
                  <p> Minimum Temperature: {weather?.main?.temp_min} </p>
                  <span> Maximum Temperature: {weather?.main?.temp_max} </span>
                  <p> Wind Speed: {weather?.wind?.speed} </p>
                  <p> Humidity :  {weather?.main?.humidity}</p>
                  <img className="iconContainer" src = {'http://openweathermap.org/img/w/'+ iconName + '.png'}/>
                  <p> {weather?.weather[0]?.description.toUpperCase()}</p>
          </div>
      </div>
  );
}
export default WeatherCard;
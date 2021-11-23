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
                  <h4><b>{weather?.name}</b></h4>
                  <p> Humidity :  {weather?.main?.humidity}</p>
                  <p> Country : {weather?.sys?.country}</p>
                  <img className="iconContainer" src = {'http://openweathermap.org/img/w/'+ iconName + '.png' }/>
          </div>
      </div>


  );
}

export default WeatherCard;
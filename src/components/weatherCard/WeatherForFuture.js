import React from "react";
const WeatherForFuture = (props) => {
/* 1.here we will display the weather for next 10 days using the openweathermap one call api
   2. We will exclude the minutely data and we will only huse the hourly data and for the next 7 hours
   3. we will also use the alerts in this or next one for the daily data
   4. we will also have to implement a weather data for the surrounding two cities which we will implement it somehow
   5. at first the welcome page should be visible and then when the user enters the data we will render all the components
*/
const {weather} = props;
//here i can call a function to fetch the sorrunding two cities and call it later
return(
             <div className="card">
                 <div className="container">
                    <p> Here we will display the hourly weather data for couple of hours  </p>
                    <p> {weather?. coord?.lon} </p>
                 </div>
             </div>
);
}
export default WeatherForFuture;
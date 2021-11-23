import React, {useState} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import WeatherCard from "../components/weatherCard/WeatherCard";
//import WeatherCard2 from "../components/weatherCard/weatherCard2";
//import all the components here
import SearchBar from "../components/searchBar/SearchBar";
import {default as axios} from "axios";


function Main() {

        const [city, updateCity] = useState();
        const [weather, updateWeather] = useState();
        /*const [weatherForTomorrow, updateWeatherForTomorrow] = useState(); */

        const fetchWeather =  async (e) =>
              {
        const axios = require('axios').default;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
        )
            .then(resp => {
                console.log(resp.data);
                updateWeather(resp.data);
            })
            .catch(err => {
                // Handle Error Here
                console.error(err);
            });
                     }

                     //create a function to get weather for tomorrow using a different field in the link

           /*
        const fetchWeatherForTomorrow = async (e) => {
            navigator.geolocation.getCurrentPosition(function(position) {

                console.log("Latitude is :", position.coords.latitude);
                const lat = position.coords.latitude;
                console.log("Longitude is :", position.coords.longitude);
                const long = position.coords.longitude
            });
            const axios = require('axios').default;
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
            )
                .then(resp => {
                    console.log(resp.data);
                    updateWeatherForTomorrow(resp.data);
                })
                .catch(err => {
                    // Handle Error Here
                    console.error(err);
                });

        }
            */
    return (
        <div>
         <SearchBar  updateCity = {updateCity} fetchWeather = {fetchWeather}  />

         <WeatherCard  weather={ weather} city = {city} />


        </div>
            );
}
export default Main;
import React, {useState} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import WeatherCard from "../components/weatherCard/WeatherCard";

//import all the components here
import SearchBar from "../components/searchBar/SearchBar";
import {default as axios} from "axios";


function Main() {

        const [city, updateCity] = useState();
        const [weather, updateWeather] = useState();

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
    return (
        <div>
         <SearchBar  updateCity = {updateCity} fetchWeather = {fetchWeather}/>
         <WeatherCard  weather={ weather} city = {city} />
        </div>
            );
}
export default Main;
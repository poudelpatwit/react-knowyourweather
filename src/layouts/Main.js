import React, {useState} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";

//import Footer here
import Footer from "../components/footer/footer";
//weathercards import
import WeatherCard from "../components/weatherCard/WeatherCard";
import WeatherCard2 from "../components/weatherCard/weatherCard2";
import WeatherCard3 from "../components/weatherCard/WeatherCard3";

//import all the components here
import SearchBar from "../components/searchBar/SearchBar";

import WeatherForFuture from "../components/weatherCard/WeatherForFuture";
import WeatherDaily from "../components/weatherCard/WeatherDaily";
import {default as axios} from "axios";

function Main() {

        //openweathermap api key
        var OPEN_WEATHER_API_KEY = "fe4feefa8543e06d4f3c66d92c61b69c";
        var GEO_CODE_API = "2c857ccaba884d4b8378f6de0e309bfa";

        //first component variables
        const [city, updateCity] = useState();


        const [weather, updateWeather] = useState();

        //constant to store the lat long information
        const [lat, updateLatitude] = useState();
        const [long, updateLong] = useState();


        const [latlong, setLatLong]= useState();




        //function to make the api call using the city name
        /*const [weatherForTomorrow, updateWeatherForTomorrow] = useState(); */
        const fetchWeather =  async (e) =>
              {
        const axios = require('axios').default;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}`,
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


            /*

             //this will be the function to get lat long from the input city
             const getLatLong = async (e) =>{

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
         <SearchBar  updateCity = {updateCity} fetchWeather = {fetchWeather} />
         <WeatherCard  weather={weather} city = {city} />
         <WeatherForFuture weather = {weather}   />
         <WeatherDaily/>
         <WeatherCard2 />
         <WeatherCard3 />
         <Footer/>
        </div>
            );
}
export default Main;
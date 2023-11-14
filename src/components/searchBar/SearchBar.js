import React from "react";
import { Button, Form, Input } from "semantic-ui-react";

const SearchBar = (props) => {
    const { updateCity, fetchWeather, getNearbyCities } = props;
    return (
        <div className="search-container">
            <div className="searchDiv">
                <Form onSubmit={fetchWeather} className="weather-form">
                    <input className="searchBar" onChange={(e) => updateCity(e.target.value)} placeholder="Enter your city" /><br></br>
                    <button className="searchButton" type={"submit"}>Submit </button>
                </Form>
                <div className="searchDiv2">
                    <button className="searchButton2" onClick={getNearbyCities}> Nearby Weather Data </button>
                </div>
            </div>
        </div>
    );
};
export default SearchBar;

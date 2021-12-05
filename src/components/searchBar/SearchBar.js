import React from "react";
import {Button, Form, Input} from "semantic-ui-react";

const SearchBar = (props) => {
    const {updateCity, fetchWeather, getNearbyCities} = props;
    return (
        <div className="searchDiv">
            <Form onSubmit = {fetchWeather}>
            <input className="searchBar"  onChange={(e) => updateCity(e.target.value)} placeholder = "Enter your city: "/>
            <button className="searchButton" type={"submit"}>Submit </button>
            </Form>
             <div className="searchDiv2">
            <button className = "searchButton2" onClick = {getNearbyCities}> Nearby Weather Data </button>
            </div>
        </div>
    );
};
export default SearchBar;

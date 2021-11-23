import React from "react";
import {Button, Form, Input} from "semantic-ui-react";

const SearchBar = (props) => {
    const {updateCity, fetchWeather} = props;
    return (
        <div className="searchDiv">
            <Form onSubmit = {fetchWeather}>
            <input className="searchBar"  onChange={(e) => updateCity(e.target.value)} placeholder = "Enter your city: "/>
            <button className="searchButton" type={"submit"}>Submit </button>
            </Form>
        </div>
    );
};
export default SearchBar;

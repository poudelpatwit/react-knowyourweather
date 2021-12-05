import React from "react";

//this is just the footer class that does not use any function
//this is just the component to display the footer of the page

//import ContactIcons
import ContactIcons from "../contact/ContactIcons";


//problems
//1. fix the footer to be in the bottom of the page
const Footer = () => {
return(
//import the icons
        <div className="footer">
        <ContactIcons />
        </div>
);
};
export default Footer;
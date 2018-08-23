import React from "react";

import SiteLogo from "../../Assests/Images/burger-logo.png";

import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{ height: props.height }}>
        <img src={SiteLogo} alt="Burger App" />
    </div>
);

export default logo;
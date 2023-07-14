import React, { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const NavbarHandler = (props) => {
    const location = useLocation();
    // Add routes to show navbar here
    let showNavbarRoutes = ["/new/rating"];

    console.log("NAVBAR HANDLER", location)
    console.log(location.pathname.includes(showNavbarRoutes))
    return (
        <Fragment>{location.pathname.includes(showNavbarRoutes) ? props.children : null}</Fragment>
    )

}

export default NavbarHandler;
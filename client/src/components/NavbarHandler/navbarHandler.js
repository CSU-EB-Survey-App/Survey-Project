import React, { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const NavbarHandler = (props) => {
    const location = useLocation();

    const [showNavBar, setShowNavBar] = useState(false);

    useEffect(() => {
        console.log("LOCATION: ", location)
        if (location.pathname !== "/") {
            setShowNavBar(true)
        }
    }, [location])
    return (
        <Fragment>{showNavBar ? props.children : null}</Fragment>
    )

}

export default NavbarHandler;
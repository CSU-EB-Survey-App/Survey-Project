import React, { Fragment } from "react";
import { useLocation } from "react-router";

const NavbarHandler = (props) => {
  const location = useLocation();
  // Add routes to show navbar here

  let showNavbarRoutes = [
    "/new/rating",
    "/dashboard",
    "/new/poll",
    "/ratings",
    "/polls",
    "/account/:id",
    "/settings",
  ];

  // console.log("NAVBAR HANDLER", location);
  // console.log(
  //   showNavbarRoutes.some((route) => location.pathname.includes(route))
  // );

  return (
    <Fragment>
      {showNavbarRoutes.some((route) => location.pathname.includes(route))
        ? props.children
        : null}
    </Fragment>
  );
};

export default NavbarHandler;

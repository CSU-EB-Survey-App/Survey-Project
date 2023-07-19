import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';


const PrivateRoutes = () => {
  // Check session storage for token
    let auth = localStorage.getItem("token");
    console.log("PRIVATE ROUTE AUTH TOKEN: ", auth);
     
    return (
      auth ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoutes;
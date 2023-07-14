import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';


const PrivateRoutes = () => {
  // Check session storage for token
    let auth = {'token': true}
     
    return (
      auth.token ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoutes;
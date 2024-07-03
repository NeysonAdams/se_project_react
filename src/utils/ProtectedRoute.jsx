import React from 'react';
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, isLoggedIn, ...rest }) => {
    const navigate = useNavigate();
    return isLoggedIn ? (
            <Component {...props} />
          ) : navigate("/");
  };
  
  export default ProtectedRoute;
import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({
    user,
    redirectPath = '/',
    children,
  }:any) => {

    const location = useLocation();
    const path = location.pathname;

    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
}

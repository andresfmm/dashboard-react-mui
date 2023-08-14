// NATIVE
import React, { useState } from 'react';


// INSTALLED
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';


// CUSTOM
import { Main } from '../modules/main/Main';
import { Forms } from '../pages/Forms';
import { Cards } from '../pages/Cards';
import { Tables } from '../pages/Tables';
import { LoginPage2 } from '../pages/LoginPage2';
import { Login1 } from '../pages/Login1';


export const PrivateRoutes = () => {

  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} > 
          <Route path="tables" element={<Tables />} />
          <Route path="forms" element={<Forms />} />
          <Route path="cards" element={<Cards />} />
          <Route path="login" element={<Login1 />} />
         <Route path="login-2" element={<LoginPage2 />} />
          <Route path="*"  element={<Navigate to={'/'} replace />} />
        </Route>

      </Routes>
    </>
  )
}

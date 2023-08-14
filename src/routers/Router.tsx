// NATIVE
import React, { useState } from 'react';



// INSTALLED
import { Route, Routes, BrowserRouter, Navigate, useLocation } from 'react-router-dom';



// CUSTOM
import { Main } from '../modules/main/Main';
import { Forms } from '../pages/Forms';
import { Cards } from '../pages/Cards';
import { Login1 } from '../pages/Login1';
import { ListUsers } from '../pages/ListUsers';
import { Tables } from '../pages/Tables';
import { BasicGrid } from '../pages/BasicGrid';
import { LoginPage2 } from '../pages/LoginPage2';


export const Router = () => {

  const location = useLocation();
  const path = location.pathname;

  return (
    <Routes> 
      <Route path="/" element={<BasicGrid />} />
      <Route path="tables" element={<Tables />} />
      <Route path="forms" element={<Forms />} />
      <Route path="cards" element={<Cards />} />
      <Route path="login" element={<Login1 />} />
      <Route path="login-2" element={<LoginPage2 />} />
      <Route path="*"  element={<Navigate to={'/'} replace />} />
    </Routes>
  )
}

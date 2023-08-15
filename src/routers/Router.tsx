// NATIVE



// INSTALLED
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';



// CUSTOM
import { Cards } from '../pages/Cards';
import { Login1 } from '../pages/Login1';
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
      <Route path="cards" element={<Cards />} />
      <Route path="login" element={<Login1 />} />
      <Route path="login-2" element={<LoginPage2 />} />
      <Route path="*"  element={<Navigate to={'/'} replace />} />
    </Routes>
  )
}

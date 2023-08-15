// NATIVE


// INSTALLED
import { Route, Routes, useLocation } from 'react-router-dom';


// CUSTOM
import { LoginPage } from '../pages/LoginPage';

export const PublicRoutes = () => {

  const location = useLocation();
  const path = location.pathname;
  
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/*" element={<LoginPage />} />
    </Routes>
  )
}

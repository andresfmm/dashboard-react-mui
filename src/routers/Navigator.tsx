// NATIVE
import React, { useEffect, useState } from 'react';


// INSTALLED
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


// CUSTOM
import { login } from '../store/auth';
import { PublicRoutes } from './PublicRoutes';
import { Preload } from '../components/Preload';
import { PrivateRoutes } from './PrivateRoutes';
import { ProtectedRoute } from './ProtectedRoute';
import { IAuth, ILoading } from '../commons/interfaces';
import { useCheckToken } from '../hooks/useCheckToken';





export const Navigator = () => {


  const dispatch = useDispatch();

  // REDUX
  const initialState   = useSelector( ( state:IAuth) => state.auth );
  const { status }:any  = useSelector( (state:ILoading) => state.loading );

  const [isLogged,   setIsLogged] = useState<any>(undefined)
  const [ initCheckToken ] = useCheckToken();

  useEffect(() => {
    checkToken();
  }, [initialState]);


  const checkToken = async () => {

    const user:any = await initCheckToken();

    
   if(user.token) {
      setIsLogged(true);
      await dispatch( login( user ));
    }else{
      setIsLogged(false);
    } 
    
  }


  return (
    <>

      {
        status  === 'checking'  && <Preload/>
      }
      
      
     
      <BrowserRouter> 
        <Routes>
          {
            ( isLogged )
            ? 
            <Route element={<ProtectedRoute user={isLogged} />}>
                <Route path="/*" element={<PrivateRoutes />} />
            </Route>
            :
            <Route path="/*" element={<PublicRoutes/>}/>
          }
        </Routes>
      </BrowserRouter>
    </>
  )
}

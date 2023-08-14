// NATIVE 

// INSTALLED 
import axios from 'axios';

// CUSTOM 
import { getUrlBase } from './helpers';

import { hasErrorRequest } from '../../store/errors';
import { storageGetCurrentUser } from './Storage';

const intance = axios.create({
    baseURL: getUrlBase()
});



intance.interceptors.request.use(
    async(config) => {

        
        const  user =  await storageGetCurrentUser();

        const { token } = user;

        
        if ( token !== '' || token !== null ) {
            config.headers['Authorization'] = 'Bearer '+token; 
        }

        // config.headers['Accept'] = "application/json";
        // config.headers['Content-Type'] = "application/json";
        // console.log('listaaaaaaaaaaaaaaaaaaaa')
        return config;
    }
);



intance.interceptors.response.use(
    (response) => {
        // console.log('daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ',response)
        // console.log('response 111 ',response)
        // if ( response.status == 401) {
            // localStorage.removeItem(getNameTokenLocalStorage());
            // localStorage.removeItem(getNameUserLocalStorage());
            // location.reload();
        //}
        return response;
    },
    (error) => {

        const errorformatted = {
            code: error.request.status,
            errors: error.response.data
        }
        return Promise.reject(errorformatted);
        
        return error;
        console.log('intance.interceptors 222 ',error.response.data.errors)
        console.log('intance.interceptors 222 ',error.response.data)
        console.log('coññññooooo ',error.response.data.message)
        if ( error.response.data.errors && error.response.data.message ) {
            
        }
        // Promise.reject(error) 
    }
);

export default intance;

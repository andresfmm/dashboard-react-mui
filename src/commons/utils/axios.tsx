// NATIVE 

// INSTALLED 
import axios from 'axios';

// CUSTOM 
import { getUrlBase } from './helpers';

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

        return config;
    }
);



intance.interceptors.response.use(
    (response) => {
        
        return response;
    },
    (error) => {

        const errorformatted = {
            code: error.request.status,
            errors: error.response.data
        }
        return Promise.reject(errorformatted);
        
        
        // Promise.reject(error) 
    }
);

export default intance;

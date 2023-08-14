
// NATIVE 

// INSTALLED 
import { Dispatch } from 'redux';

// CUSTOM 
import { checking, unChecking } from './loadingSlice';



export const checkingPreload = () => {
    return async( dispatch: Dispatch ) => {

        dispatch( checking() );
        
    }
}


export const unCheckingPreload = () => {
    return async( dispatch: Dispatch ) => {

        dispatch( unChecking() );
        
    }
}


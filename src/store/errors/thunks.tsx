
// NATIVE 

// INSTALLED 
import { Dispatch } from 'redux';


// CUSTOM 
import { setErrorRequest } from './errorsSlice';


export const hasErrorRequest = (isError:boolean): any => {
    return async( dispatch: Dispatch ) => {
        dispatch( setErrorRequest(isError) );
    }
}

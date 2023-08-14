
// NATIVE 

// INSTALLED 
import { Dispatch } from 'redux';


// CUSTOM 
import { openDrawer, closeDrawer } from './globalsSlice';



export const openDrawerAction = (): any => {
    return async( dispatch: Dispatch ) => {

        dispatch( openDrawer() );
        
    }
}


export const closeDrawerAction = (): any => {
    return async( dispatch: Dispatch ) => {

        dispatch( closeDrawer() );
        
    }
}


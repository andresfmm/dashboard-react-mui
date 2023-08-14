// NATIVE 


// INSTALLED 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { types } from '../types/types';


// CUSTOM 



/**
 * get user data in localstorage
*/
export const storageGetCurrentUser = async() => {
    const result = await AsyncStorage.getItem( types.storage.userStorage ) || '{}';
    return JSON.parse(result);
}


/**
 * get user data in localstorage
*/
export const storageGetCurrentSpa = async() => {
    const result = await AsyncStorage.getItem( types.storage.spaStorage ) || '{}';
    return JSON.parse(result);
}


/**
 * @param {string} neighborhood - neighborhood is a  string type id neighbordhood
*/
export const updateStorageUserNeighBoorHood = async(neighborhood:string) => {

    const result:any = await storageGetCurrentUser();

    result.neighborhood = neighborhood;

    await AsyncStorage.setItem(types.storage.userStorage, JSON.stringify(result));
    
    return true;
}


/**
 * return the enviromenst storaged
*/
export const getStorageEnviroments = async () => {
    const result = await AsyncStorage.getItem( types.storage.enviromentsStorage ) || '{}';
    return JSON.parse(result);
    
}


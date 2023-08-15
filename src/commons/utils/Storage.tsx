// NATIVE 


// INSTALLED 
import { types } from '../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';


// CUSTOM 



/**
 * get user data in localstorage
*/
export const storageGetCurrentUser = async() => {
    const result = await AsyncStorage.getItem( types.storage.userStorage ) || '{}';
    return JSON.parse(result);
}



// NATIVE

// INSTALLED 

// CUSTOM 
import { storageGetCurrentUser } from "../commons/utils";


export const useCheckToken = () => {

    const initCheckToken = async() => {
        
       const user:any = await storageGetCurrentUser();
       return user;
    }


    return [
        initCheckToken
    ]
     
}
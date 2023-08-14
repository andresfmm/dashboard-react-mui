// NATIVE


// INSTALLED 


// CUSTOM 
import { storageGetCurrentSpa } from "../commons/utils";

export const useCheckSpas = () => {


    const initCheckSpa = async() => {
        
        const spa:any = await storageGetCurrentSpa();
        return spa;
     }
 
 
     return [
        initCheckSpa
     ]
}

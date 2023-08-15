// NATIVE 


// INSTALLED 

// CUSTOM 
import { AxiosAdapter } from "../commons/adapters";
import { ILoginWithEmailPassword } from "../commons/interfaces";


const http = new AxiosAdapter();


export const loginWithEmailPassword = async({ email, password }:ILoginWithEmailPassword) => {
   
    try {
        
        return await http.post<any>('/users/login',{ email, password });

    } catch (error) {
        console.log('loginWithEmailPassword ',error)
    }
}
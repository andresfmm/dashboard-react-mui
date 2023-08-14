// NATIVE 

// INSTALLED 
import  { AxiosInstance } from 'axios';


// CUSTOM 
import intance from '../utils/axios';
import { getUrlBase } from '../utils';
import { IHttpAdapter } from "../interfaces";



export class AxiosAdapter implements IHttpAdapter{

    
    private url_base = getUrlBase();

    private  axios: AxiosInstance = intance;

    

    async get<T>(url: string): Promise<T> {
        
        const  { data }  = await this.axios.get<T>(this.url_base+''+url);
        return data;
    }

    async post<T>(url: string, data_create: any): Promise<T> {
        try {
             const { data } = await this.axios.post<T>(this.url_base+''+url, data_create);
            
             return data;
        } catch (error:any) {


            const resp:any = {
                ok: false,
                code: error.code,
                errors: error.errors
            }
            return resp;
        }
    }
    
    async put<T>(url: string, data_create: any): Promise<T> {

        const { data } = await this.axios.put<T>(this.url_base+''+url, data_create);

        return data;
    }

    async patch<T>(url: string): Promise<T> {
        const { data } = await this.axios.patch<T>(this.url_base+''+url);

        return data;
    }

    async delete<T>(url: string): Promise<T> {

        const { data } = await this.axios.delete<T>(this.url_base+''+url);

        return data;
    }

} 
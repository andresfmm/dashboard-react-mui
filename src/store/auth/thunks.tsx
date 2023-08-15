
// NATIVE 

// INSTALLED 
import AsyncStorage from '@react-native-async-storage/async-storage';

// CUSTOM 
import { logout, login } from './';
import { types } from '../../commons/types/types';
import { checkingPreload, unCheckingPreload } from '../loading';
import { ILoginWithEmailPassword } from '../../commons/interfaces';



export const startLoginWithEmailPassword = ({ email, password }:ILoginWithEmailPassword):any => {

    try {

        return async( dispatch: any  ) => {

            dispatch( checkingPreload() );
            
            if ( email != 'admin@hotmail.com' && password != '123' ) {
                


                dispatch( unCheckingPreload() );
                return { ok: false, message: 'Usuario o password incorrectos'};
            }

            // dispatch( checkingPreload() );
    
            // const result = await  loginWithEmailPassword({ email, password });

            // dispatch( unCheckingPreload() );
    
            // if ( !result ) {
            //     // console.log('wwwwwwwwwwepaaaaaaaaaaaaaa')
            //     dispatch( hasErrorRequest(true) );
            //     return false;
            // }

            const result = {
                "ok": true,
                "status": 200,
                "message": "Bienvenido al sistema.",
                "token": "eyJ0eXAfwefwefwefwefciOiJIUzI1NiJ9.eyJpc3MiOiJodHfwefwefwefwefGVzdC9hcGkvdjEvdXNlcnMvbG9naW4iLCJpYXQiOjE2OTE5NzY3MzcsImV4cCI6MTY5MTk4MDMzNywibmJmIjoxNjkxOTc2NzM3LCJqdGkiOiJGR0h0RFRwcktWYmhOZWdRIiwic3ViIjoiOTliODAzMWQtZjcxMC00NzY5LWI2NzEtMmVlYTA2OTg5OTg3IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.JLfGkMfwefwefwefwefwrWgGdRRNqanRrw",
                "data": {
                    "user": {
                        "name": "user admin",
                        "email": "admin@hotmail.com",
                        "nick_name": "nick user",
                        "src_avatar": null,
                        "cel_phone": null,
                        "address": null
                    }
                }
            }
    
            if ( !result.ok ) return result;
           
            const {  user } = result.data;
            
            const { token } = result;

            const user_storage = {
                displayName: user.name,
                photoURL: user.src_avatar ?? '',
                email: user.email,
                token: token,
                errorMessage: null
            };

           
          
            
            await AsyncStorage.setItem(types.storage.userStorage, JSON.stringify(user_storage));
        
            await dispatch( login( user_storage ));
            dispatch( unCheckingPreload() );
            
        }
        
    } catch (error) {
        console.log('conooooooooooooooooooooooooooooooooooo ', error)
    }
}


export const startLogOut = (): any => {


    try {

        return async( dispatch: any  ) => {

            dispatch( checkingPreload() );
                await AsyncStorage.removeItem(types.storage.userStorage);
                dispatch( logout() );
            dispatch( unCheckingPreload() );
    
        }
        
    } catch (error) {
        console.log('conooooooooooooooooooooooooooooooooooo ', error);
    }

}




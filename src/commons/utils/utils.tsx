// CUSTOM
import { storageGetCurrentUser } from "./Storage"

/**
 * @param {object} object - Object to checkc if any values is empty
*/



export const checkAllValuesObjectAreNotEmpty = ( object:any = {} ) => {

    if(typeof object !== 'object' && object == null){
       return {
          ok: false,
          message: 'Tenemos problemas con el tipo de datos por favor consulte al administrador del sistema'
       }
    } 

    for (const key in object) {

        if ( object[key] == '' || object[key] == undefined) {
            return {
                ok: false,
                message: 'Por favor permite el acceso a el token del dispositivo, esto con el fin de por enviarte las notificacione.'
             }
        }
        
    }

    return {
        ok: true,
        message: 'No hay problema'
     }
}


export const getUserNameLetters = async() => {

    const user = await storageGetCurrentUser();
    
    const user_name = user.displayName ? user.displayName.split(" ") : 'user'.split(" ");

    let letters;

    if ( user_name.length == 1 ) {
        letters = user_name[0].charAt(0);
    }

    if ( user_name.length == 2 ) {
        letters = user_name[0].charAt(0)+user_name[1].charAt(0);
    }

    return letters.toUpperCase();

}



export const getFirstLetterUper = (value:string) => {

    if(value == '' || value == undefined) return '';

    return value.charAt(0).toUpperCase()

}


export const allFirstLetterUpper = (value:string) => {

    if(value == '' || value == undefined) return '';
    
    const words = value.split(" ");

    for (let index = 0; index < words.length; index++) {
        words[index] = words[index] ? words[index].toLowerCase(): '';
         words[index] = words[index] ? words[index][0].toUpperCase() + words[index].substring(1) : '';
         
    }
 
    return words.join(" ");

}

export const getLocalDate = () => {

    const event = new Date();
    const options:any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return event.toLocaleDateString('es-CO', options)
}


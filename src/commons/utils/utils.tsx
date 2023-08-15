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





/**
 * @param {string} string - validate email
*/
export const EmailValidator = (email: string) => {
    const re = /\S+@\S+\.\S+/
    if (!email) return "Email no debe estar vacio."
    if (!re.test(email)) return 'Ooops! Email invalido.'
    return ''
}


/**
 * @param {string} string - validate password
*/
export const PasswordValidator = (password: string)  => {

    const length_password = 3;
    if (!password) return "Password no debe estar vacio."
    if (password.length < length_password) return `Password must be at least ${length_password} characters long.`
    return ''
}


/**
 * @param {string} string - validate name
*/
export const NameValidator = (name: string) => {
    if (!name) return "Nombre no puede estar vacio."
    return ''
}



/**
 * @param {string} string - validate Length of text area 
*/
export const LengthValidator = (message: string) => {
    const length_password = 400;
    if (!message) return "El mensaje no puede estar vacio."
    if (message.length >= length_password) return `Mensaje debe ser maximo de  ${length_password} caracteres.`
    return ''
}
  
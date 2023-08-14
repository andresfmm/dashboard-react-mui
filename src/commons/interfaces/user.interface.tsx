

export interface ILoginWithEmailPassword {
    email: string,
    password: string
}

export interface IRegisterWithEmailPassword {
    name: string,
    email: string,
    password: string,
    password_confirmation: string
}

export interface IUpdateProfile {
    name: string,
    password: string,
    password_confirmation: string,
    neighborhood: string
}


export interface IRestorePassword {
    email: string
}




// GOOGLE
export interface IRegisterWithGoogle {
    name: string,
    email: string,
    password: string,
    password_confirmation: string
}
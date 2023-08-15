

export interface IAuth {
    auth: IUserData
    
}


export interface IUserData {
    status:  string, // 'checking', 'not-authenticated', 'authenticated'
    uid:  string,
    email:  string,
    displayName:  string
    photoURL:  string,
    token: string,
    errorMessage:  object;
}



export interface ILoading {
    loading: string
}

export interface IStatusLoading {
    status: string
}




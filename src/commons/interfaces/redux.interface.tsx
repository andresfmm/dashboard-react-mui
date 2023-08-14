

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


export interface IStorageAudios {
    audio_id: string,
    audio_name: string,
    audio_src: string,
    audio_image_src: string,
    pivot: {
        fk_spa_id: string,
        fk_audio_id: string
    }
}


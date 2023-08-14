// NATIVE 

// INSTALLED 

// CUSTOM 
import { enviroments } from '../../enviroments/enviroments';

export const calculateWindowSize = (windowWidth: number): string => {
    if (windowWidth >= 1200) {
        return 'lg';
    }
    if (windowWidth >= 992) {
        return 'md';
    }
    if (windowWidth >= 768) {
        return 'sm';
    }
    return 'xs';
};



export const getNameUserLocalStorage = () => {
    return '84d3feedd9edd55eb08140fbb6ab27d2';
}

export const getNameTokenLocalStorage = () => {
    return '7d86c317589771c786de7774f55e1ed7';
}

export const getUrlBase = () => {
    return enviroments.URL_BASE;
}

export const getUrlImages = () => {
    return enviroments.URL_BASE_IMAGES;
}


export const getUrlAvatarPlataforma = () => {
    return enviroments.URL_BASE_IMAGES+'/spa-plataforma';
}

export const getUrlImageHotel = () => {
    return enviroments.URL_BASE_IMAGES+'/spa-image';
}

export const getUrlAvatarSpa = () => {
    return enviroments.URL_BASE_IMAGES+'/spa-avatar';
}

export const getUrlEnviroments = () => {
    return enviroments.URL_BASE_IMAGES+'/enviroment';
}

export const getUrlAudio = () => {
    return enviroments.URL_BASE_IMAGES+'/image-audio';
}

export const getUrlSrcAudio = () => {
    return enviroments.URL_BASE_IMAGES+'/src-audio';
}


export const createArrayErrorsValidtions = ( list = [] ):any => {

    let errors:string[] = [];
    for (const property in list) {

        if ( list[property] ) {
             errors.push(list[property][0]);
        }
    }
    return errors;
}
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        token: null,
        errorMessage: null,
    },
    reducers: {
        login: ( state, { payload } ) => {
            /* eslint-disable-line */
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.token = payload.token;
            state.errorMessage = null
        },
        logout: ( state ) => {
            /* eslint-disable-line */
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.token = null;
            state.errorMessage = null
        }
        
    }
});


// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;
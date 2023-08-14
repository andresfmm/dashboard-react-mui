import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        status: 'un-checking', //  'un-checking', 'cheking'
    },
    reducers: {
        checking: ( state ) => {
            state.status = 'checking' //  'un-checking', 'cheking'
        },
        unChecking: (state) => {
            state.status = 'un-checking';
        },
        
    }
});


// Action creators are generated for each case reducer function
export const { checking, unChecking } = loadingSlice.actions;
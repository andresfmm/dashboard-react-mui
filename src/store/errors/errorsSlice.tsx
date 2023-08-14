import { createSlice } from '@reduxjs/toolkit';

export const errorsSlice = createSlice({
    name: 'errors',
    initialState: {
        error: false
    },
    reducers: {
        setErrorRequest: ( state, { payload } ) => {
            state.error = payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { setErrorRequest } = errorsSlice.actions;
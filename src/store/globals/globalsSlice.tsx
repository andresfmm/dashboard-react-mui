import { createSlice } from '@reduxjs/toolkit';

export const globalsSlice = createSlice({
    name: 'globals',
    initialState: {
        drawer: true
    },
    reducers: {
        openDrawer: ( state ) => {
            state.drawer = true;
        },
        closeDrawer: (state ) => {
            state.drawer = false;
        },
        
    }
});


// Action creators are generated for each case reducer function
export const { openDrawer, closeDrawer } = globalsSlice.actions;
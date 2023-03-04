import {createSlice} from "@reduxjs/toolkit";

const defaultPopupConfig = {
    status : '',
    title : '',
    message : ''
}


const popupMessageSlice = createSlice({
    name : "popupMessage",
    initialState : defaultPopupConfig,
    reducers : {
        success(state , actions){
            state.status = 'success';
            state.title = actions.title;
            state.message = actions.message;
        },
        error(state, actions){
            state.status = 'error';
            state.title = actions.title;
            state.message = actions.message;
        },
        reset(state){
            state.status = '';
            state.title = '';
            state.message = '';
        }
    }
});

export const popupMessageActions = popupMessageSlice.actions;

export default popupMessageSlice;
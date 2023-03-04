import { createSlice } from "@reduxjs/toolkit";

//DEFAULT SPEED GOES HERE
const defaultSpeed = 200;

const initialState = {
    animationSpeed : parseInt(localStorage.getItem("animationSpeed")) || defaultSpeed,
    processing : false,
    isAnimatedPlayed : localStorage.getItem("isAnimationPlayed") || false,
    totalAnimation : 0, // For tracking the total number of elements , the animation is going on
    currentAnimation : 0 // For track the current progress of the animation
}


const animationSlice = createSlice({
    name : 'animation', 
    initialState, 
    reducers : {
        update(state, actions){
            state.animationSpeed = actions.payload.speed;
        },
        enableProcessing(state){
            state.processing = true;
        },
        disabledProcessing(state){
            state.processing = false;
        },
        reset(state){
            state.animationSpeed = defaultSpeed;
        },
        resetTrack(state){
            state.totalAnimation = 0;
            state.currentAnimation = 0;
        },
        setTotalTrack(state , actions){
            state.totalAnimation += actions.payload.amount;
        },
        setCurrentTrack(state, actions){
            state.currentAnimation += actions.payload.amount
        }
    }
})


export const animationActions= animationSlice.actions;

export default animationSlice;
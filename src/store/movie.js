import {createSlice} from "@reduxjs/toolkit";
import avatar from "../assets/avatar.jpg";
import blackAdam from "../assets/blackAdam.jpg";
import moonfall from "../assets/moonfall.jpg";
import dbs from "../assets/dbs.jpg";



const defaultMovies = {
    movies : [
        {id : 'blackAdam' , image : blackAdam , price : 50 , name : 'Black Adam' , description : "Who is stronger ???"},
        {id : 'avatar2' , image : avatar , price : 50 , name : 'Avatar 2' , description : "Explore the adventure"},
        {id : 'moonfall' , image : moonfall , price : 50 , name : 'Moonfall' , description : "The horror in space"},
        {id : 'dbs' , image : dbs , price : 50 ,  name : 'Dragon ball super : super hero' , description : "The greatest hero of all time"},
    ],
    booked : null
}


const movieSlice = createSlice({
    name : "movie",
    initialState : defaultMovies,
    reducers : {
       booked : (state , actions)=>{
        state.booked = {...state.movies[actions.payload.movieIndex] , index : actions.payload.movieIndex};
       },
       cancel(state){
        state.booked = null;
       }
    }
});

export const movieActions = movieSlice.actions;

export default movieSlice;
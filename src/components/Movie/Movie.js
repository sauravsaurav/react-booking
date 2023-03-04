import classes from "./Movie.module.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useState , useCallback } from "react";
import { movieActions } from "../../store/movie";

const Movie = ()=>{
    const dispatch = useDispatch();
    const booked = useSelector(state => state.movie.booked);

    const movies = useSelector(state => state.movie.movies);
    const [currentIndex , setCurrentIndex] = useState((booked ? booked.index :  0));



    const bookMovieHandler = useCallback((e)=>{
        e.preventDefault();
        dispatch(movieActions.booked({movieIndex : currentIndex}));
    },[currentIndex , dispatch ]);


    const nextMovieHandler = useCallback((e)=>{
        if(currentIndex === (movies.length - 1)){
            setCurrentIndex(0);
            return;
        }
        setCurrentIndex(prevState => prevState+1);
    },[currentIndex,movies.length]);

    const prevMovieHandler = useCallback((e)=>{
        if(currentIndex === 0){
            setCurrentIndex((movies.length - 1));
            return;
        }
        setCurrentIndex(prevState => prevState-1);
    },[currentIndex,movies.length]);


    const cancelMovieHandler = ()=>{
        dispatch(movieActions.cancel());
    }
   
    return (
        <React.Fragment>
            <div className={classes.movieContainer}>
                <div className={`${classes.moviePoster}`}>
                    <img src = {movies[currentIndex].image} alt={movies[currentIndex].name} height="100" width="100"/>
                    {
                        (!booked || (booked.id !== movies[currentIndex].id)) && 
                        <button className={classes.bookNow} onClick={bookMovieHandler}>Book Now</button>
                    }
                    {
                        (booked && (booked.id === movies[currentIndex].id)) && 
                        <button className={classes.cancelNow} onClick={cancelMovieHandler}>Cancel</button>
                    }
                </div>                
            </div>
            <button className={`${classes.abs} ${classes.nextButton}`} onClick={nextMovieHandler}>➡️</button>
            <button className={`${classes.abs} ${classes.prevButton}`} onClick={prevMovieHandler}>⬅️</button>
        </React.Fragment>
    )
}

export default Movie;
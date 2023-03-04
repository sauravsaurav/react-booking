import classes from "./Checkout.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ()=>{
    

    const bookedMovie = useSelector(state => state.movie.booked);
    const bookedSeats = useSelector(state => state.seat.booked)
    const navigate = useNavigate();

    useEffect(()=>{
        if(bookedSeats.totalBooked === 0 || !bookedMovie){
            console.log("Running the useffect")
            navigate('/',{replace:true})
        }
    },[]);
    
    return (
        <div className={classes.checkoutContainer}>
            <div className = {classes.leftContainer}>
                <center><img src={!bookedMovie ? '' : bookedMovie.image} height ="100" width = "100" alt={bookedMovie ? bookedMovie.description: ''}/></center>
                <br/>
                <h3>&nbsp;&nbsp;{!bookedMovie ? '' : bookedMovie.name}</h3>
                <span>&nbsp;&nbsp;{!bookedMovie ? '' : bookedMovie.description}</span>
                <hr/>
                {bookedSeats.blockASeats.length !== 0 && <p>Block A :  {bookedSeats.blockASeats.length} seat(s) booked</p>}
                {bookedSeats.blockBSeats.length !== 0 && <p>Block B :  {bookedSeats.blockBSeats.length} seat(s) booked</p>}
                {bookedSeats.blockCSeats.length !== 0 && <p>Block C :  {bookedSeats.blockCSeats.length} seat(s) booked</p>}
                {bookedSeats.blockDSeats.length !== 0 && <p>Block D :  {bookedSeats.blockDSeats.length} seat(s) booked</p>}
                {bookedSeats.blockESeats.length !== 0 && <p>Block E :  {bookedSeats.blockESeats.length} seat(s) booked</p>}
            </div>
            <div className = {classes.rightContainer}>
                <h2>Checkout form goes here...</h2>
                <h1>Under Development</h1>
            </div>
        </div>
    )
}

export default Checkout;
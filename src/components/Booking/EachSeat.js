import classes from "./EachSeat.module.css";
import {  useCallback } from "react";
import PeopleAvailable from "../../assets/amongUs-available.png";
import PeopleBooked from "../../assets/amongUs-notAvailable.png";
import React from "react";
import { seatActions } from "../../store/seatsConfiguration";
import { useDispatch, useSelector } from "react-redux";
/**
 * 
 * Available means : You can book , Not available means already booked
 * Booked means : You booked the current one. Set Available to true and booked to true for booking , set booked to false, avilable to false
 */


const EachSeat = React.memo((props)=>{
    const dispatch = useDispatch();
    const currentSeat = useSelector(state => state.seat.booked[props.blockNumber]);
    const isBooked = currentSeat.indexOf(parseInt(props.seatNumber)) !== -1;
    const seatClass =  `${props.isAvailable === true ? classes.isAvailable : classes.notAvailable} ${classes.eachSeat} `;
    const bookedClass = `${isBooked === true ? classes.booked : '' }` ;
    const toggleBookingHandler = useCallback((isAvailable)=>{
        if(!isAvailable) return;
        dispatch(seatActions.toggleBooking({blockNumber : props.blockNumber , seatNumber : parseInt(props.seatNumber)}));
    },[props.blockNumber,props.seatNumber , dispatch]);
  
    return (
        <div className={`${seatClass} ${bookedClass}`} onClick={toggleBookingHandler.bind(null , props.isAvailable)}>
            <div className={classes.backSeat}></div>
            <div className={classes.leftHandle}></div>
            <div className={classes.rightHandle}></div>
            <div className={classes.sitting}>
                {props.seatNumber}
                {(isBooked && props.isAvailable) && <div className={classes.woosh}><img src={PeopleAvailable} alt="Booking Person" height = "50" width = "50"/></div>}
                {!props.isAvailable && <div className={classes.woosh}><img src={PeopleBooked} alt="Booked Person " height = "50" width = "50"/></div>}
            </div>
            <div className={classes.bottomHandle}></div>
        </div>
    )
});

export default (EachSeat);
import classes from "./Hall.module.css";
import EachSeat from "./EachSeat";
import React, { useCallback, useEffect, useState } from "react";
import Button from "../UI/Button";
import { animationActions } from "../../store/animationConfig";
import { seatActions } from "../../store/seatsConfiguration";
import {useSelector , useDispatch} from "react-redux";
import PopulateModal from "./PopulateModal";
import LeftCurtain from "../../assets/left_curtain.png";
import RightCurtain from "../../assets/right_curtain.png";
import { useNavigate } from "react-router-dom";


const Hall = (props)=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isBooked = useSelector(state=>state.movie.booked);

    useEffect(()=>{
        if(!isBooked)
        navigate('/',{
            replace:true
        })
    })


    //For checking if the animation is processing 
    const animationIsProcessing = useSelector(state => state.animation.processing) ;
    

    //Sitting arrangements, fetching from the state
    const seatA = useSelector(state => state.seat.blockASeats);
    const seatB = useSelector(state => state.seat.blockBSeats);
    const seatC = useSelector(state => state.seat.blockCSeats);
    const seatD = useSelector(state => state.seat.blockDSeats);
    const seatE = useSelector(state => state.seat.blockESeats);
    const booked = useSelector(state => state.seat.booked.totalBooked);

    // For showing or hiding the populate modal
    const [showPopulateModal , setShowPopulateModal] = useState(false);

    //Actions buttons
    const [buttonsObject , setButtonObject] = useState([]);

    // Getting the speed of the animation and setting it with the speed of the animation of the hall
    const animationSpeed = useSelector(state=>state.animation.animationSpeed);
    const [speed , setSpeed] = useState(animationSpeed);


    // Implement the transition group later on
    useEffect(()=>{
        if(seatA.current !== 0 || seatB.current !== 0 || seatC.current !== 0 || seatD.current !== 0 || seatA.current !== 0)
            return ;

        ((seat, block)=>{
            for(let x = 1 ; x <= seatA.temp ; x++){
                ((time,obj)=>{
                    setTimeout(()=>{
                        if(x === 1){
                            dispatch(animationActions.setTotalTrack({amount : 1}));
                        }
                        if(x === seatA.temp){
                            dispatch(animationActions.setCurrentTrack({amount : 1}));
                        }
                        dispatch(seatActions.increase({
                            seatNumber : 'blockASeats',
                            totalAmount : x
                        }));
                    },time)
                })((x+1) * animationSpeed , seatA.temp);
            }
        })(seatA.temp , 'blockASeats');
        
        ((seat, block)=>{
            for(let x = 1 ; x <= seatB.temp ; x++){
                ((time,obj)=>{
                    setTimeout(()=>{
                        if(x === 1){
                            dispatch(animationActions.setTotalTrack({amount : 1}));
                        }
                        if(x === seatB.temp){
                            dispatch(animationActions.setCurrentTrack({amount : 1}));
                        }
                        dispatch(seatActions.increase({
                            seatNumber : 'blockBSeats',
                            totalAmount : x
                        }));
                    },time)
                })((x+1) * animationSpeed , seatB.temp);
            }
        })(seatB.temp , 'blockBSeats');

        ((seat, block)=>{
            for(let x = 1 ; x <= seatC.temp ; x++){
                ((time,obj)=>{
                    setTimeout(()=>{
                        
                        if(x === 1){
                            dispatch(animationActions.setTotalTrack({amount : 1}));
                        }
                        if(x === seatC.temp){
                            dispatch(animationActions.setCurrentTrack({amount : 1}));
                        }
                        dispatch(seatActions.increase({
                            seatNumber : 'blockCSeats',
                            totalAmount : x
                        }));
                    },time)
                })((x+1) * animationSpeed , seatC.temp);
            }
        })(seatC.temp , 'blockCSeats');

        ((seat, block)=>{
            for(let x = 1 ; x <= seatD.temp ; x++){
                ((time,obj)=>{
                    setTimeout(()=>{
                        if(x === 1){
                            dispatch(animationActions.setTotalTrack({amount : 1}));
                        }
                        if(x === seatD.temp){
                            dispatch(animationActions.setCurrentTrack({amount : 1}));
                        }
                        dispatch(seatActions.increase({
                            seatNumber : 'blockDSeats',
                            totalAmount : x
                        }));
                    },time)
                })((x+1) * animationSpeed , seatD.temp);
            }
        })(seatD.temp , 'blockDSeats');

        ((seat, block)=>{
            for(let x = 1 ; x <= seatE.temp ; x++){
                ((time,obj)=>{
                    setTimeout(()=>{
                        if(x === 1){
                            dispatch(animationActions.setTotalTrack({amount : 1}));
                        }
                        if(x === seatE.temp){
                            dispatch(animationActions.setCurrentTrack({amount : 1}));
                        }
                        dispatch(seatActions.increase({
                            seatNumber : 'blockESeats',
                            totalAmount : x
                        }));
                    },time)
                })((x+1) * animationSpeed , seatE.temp);
            }
        })(seatE.temp , 'blockESeats');

    },[seatA.temp , seatB.temp , seatC.temp ,seatD.temp  ,seatE.temp , animationSpeed , dispatch]);
    

    //Calculating the total available , from the store(capacity - total booked)
    let totalAvailable = (seatA.seats.length + seatB.seats.length + seatC.seats.length + seatD.seats.length  + seatE.seats.length ) ;

    // //Calculating the total booked , from the store ( totalbooked)
    let totalBooked = booked

    // For auto populating the seats.
    const populateAllHandler = useCallback((populateAll = true , capacityObject = {})=>{
        // For Clearing all the booked seats , before starting populating the seats
        dispatch(seatActions.clearBooking());
        
        dispatch(seatActions.increaseTemp({
            seatNumber : 'blockASeats',
            totalAmount : populateAll === true ? seatA.capacity : parseInt(capacityObject.seatA)
        }));
        dispatch(seatActions.increaseTemp({
            seatNumber : 'blockBSeats',
            totalAmount : populateAll === true ? seatB.capacity : parseInt(capacityObject.seatB)
        }));
        dispatch(seatActions.increaseTemp({
            seatNumber : 'blockCSeats',
            totalAmount : populateAll === true ? seatC.capacity : parseInt(capacityObject.seatC)
        }));
        dispatch(seatActions.increaseTemp({
            seatNumber : 'blockDSeats',
            totalAmount : populateAll === true ? seatD.capacity : parseInt(capacityObject.seatD)
        }));
        dispatch(seatActions.increaseTemp({
            seatNumber : 'blockESeats',
            totalAmount : populateAll === true ? seatE.capacity : parseInt(capacityObject.seatE)
        }));
    },[]);

    const clearSeats = useCallback(()=>{
        dispatch(seatActions.reset());
    },[dispatch]);


    const togglePopulateModalHandler = ()=>{
        setShowPopulateModal(prevState => !prevState)
    }

    useEffect(()=>{
        let buttonsArrays = [
            {cl:classes.manual, text : "Populate Manually" , handler : togglePopulateModalHandler, uniqueid:'btn1'},
            {cl:classes.all, text : "Populate All" , handler : populateAllHandler.bind(null, true , {}) , uniqueid : 'btn2'},
            {cl:classes.clear, text : "Clear All" , handler : clearSeats , id : 'btn5'},
        ];

        for(let x = 0 ; x < buttonsArrays.length  ; x++){
            ((time,obj)=>{
                setTimeout(()=>{
                    setButtonObject((prevState)=>{
                        return [
                            ...prevState,
                            {cl : obj.cl , text : obj.text , handler : obj.handler}
                        ]
                    })
                },time)
            })((x+1) * animationSpeed , buttonsArrays[x]);
        }
    },[ populateAllHandler ]);


   

  
    let seatASitting  = seatA.seats.map(seat=> <EachSeat seatNumber={seat.seatNumber} blockNumber={seat.blockNumber} key={seat.id} uniqueId={seat.id}  isAvailable={seat.isAvailable}/>);
    let seatBSitting  = seatB.seats.map(seat=> <EachSeat seatNumber={seat.seatNumber} blockNumber={seat.blockNumber} key={seat.id}  isAvailable={seat.isAvailable}/>);;
    let seatCSitting  = seatC.seats.map(seat=> <EachSeat seatNumber={seat.seatNumber} blockNumber={seat.blockNumber} key={seat.id}  isAvailable={seat.isAvailable}/>);;
    let seatDSitting  = seatD.seats.map(seat=> <EachSeat seatNumber={seat.seatNumber} blockNumber={seat.blockNumber} key={seat.id}  isAvailable={seat.isAvailable}/>);;
    let seatESitting  = seatE.seats.map(seat=> <EachSeat seatNumber={seat.seatNumber} blockNumber={seat.blockNumber} key={seat.id}  isAvailable={seat.isAvailable}/>);;

  
   


    // For changing the speed of the animation
    const animationSpeedChangeHandler = useCallback((e)=>{
        e.preventDefault();
        setSpeed(e.target.value);
    },[]);

    const changeAnimationSpeedHandler = useCallback((e)=>{
        dispatch(animationActions.update({
            speed 
        }))
    },[dispatch,speed]);

    const newCapacityHandler = (obj)=>{
        setShowPopulateModal(false);
        clearSeats();
        populateAllHandler(false, obj);
        
    }
  
    return (
        <React.Fragment>
            {
                buttonsObject.map((eachButton)=><Button disabled={animationIsProcessing} key={`${eachButton.uniqueid} ${eachButton.cl}`} class={`${classes.absoluteButtons} ${eachButton.cl}`} onClick={eachButton.handler} text={eachButton.text}/>)
            }
            <span  disabled={animationIsProcessing} key={`${Math.random()} ${classes.booked}`} className={`${classes.booked}`} style={{position:'absolute'}}>{`Total Booked : ${totalBooked}`}</span>
            <span  disabled={animationIsProcessing} key={`${Math.random()} ${classes.available}`} className={`${classes.available}`} style={{position:'absolute'}}>{`Total Seats : ${totalAvailable}`}</span>
            {showPopulateModal && <PopulateModal 
                                seatACapacity={seatA.capacity}
                                seatBCapacity={seatB.capacity}
                                seatCCapacity={seatC.capacity}
                                seatDCapacity={seatD.capacity}
                                seatECapacity={seatE.capacity}
                                setNewCapacity={newCapacityHandler}
                                onCloseModal = {togglePopulateModalHandler}
            />}
            <div className="sliderContainer">
                <input type = "range" min={100} max={1000} value={speed} onChange={animationSpeedChangeHandler} disabled={animationIsProcessing}/> <br/>
                <button onClick={changeAnimationSpeedHandler} disabled={animationIsProcessing}>Speed = {speed}ms</button>
            </div>
            <div className={` ${classes.gridContainer}`}>
                    <img src={LeftCurtain} alt="Left curtain" className={classes.leftCurtain} height="80" width="80"/>
                    <img src={RightCurtain} alt="Left curtain" className={classes.rightCurtain} height="80" width="80"/>
                    <div className={classes.item1}>
                        <h2>Block A</h2>
                        {seatASitting}
                    </div>
                    <div className={classes.item2}>
                        <h2>Block B</h2>
                        {seatBSitting}
                    </div>
                    <div className={classes.item3}>
                        <h2>Block C</h2>
                        {seatCSitting}
                    </div>  
                    <div className={classes.item4}>
                        <h2>Block D</h2>
                        {seatDSitting}
                    </div>
                    <div className={classes.item5}>
                        <h2>Block E</h2>
                        {seatESitting}
                    </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(Hall);
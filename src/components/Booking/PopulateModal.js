import React from "react";
import classes from "./PopulateModal.module.css";
import { useState , useCallback } from "react";


const PopulateModal = (props)=>{
    const [seatA, setSeatAState] = useState(0);
    const [seatB, setSeatBState] = useState(0);
    const [seatC, setSeatCState] = useState(0);
    const [seatD, setSeatDState] = useState(0);
    const [seatE, setSeatEState] = useState(0);


    const changeSeatACapacityHandler = useCallback((e)=>{
        setSeatAState(e.target.value)    
    },[])

    const changeSeatBCapacityHandler = useCallback((e)=>{
        setSeatBState(e.target.value)    
    },[])

    const changeSeatCCapacityHandler = useCallback((e)=>{
        setSeatCState(e.target.value)    
    },[])

    const changeSeatDCapacityHandler = useCallback((e)=>{
        setSeatDState(e.target.value)    
    },[])

    const changeSeatECapacityHandler = useCallback((e)=>{
        setSeatEState(e.target.value)    
    },[])

    return (
        <div className={classes.modalContainer}>
            <div className={classes.modal}>
                <div className={` ${classes.gridContainer}`}>
                        <div className={classes.item1}>
                            <h2>Block A</h2>
                            <center>
                                <input type="range" min={1} max={props.seatACapacity}  value={seatA} onChange={changeSeatACapacityHandler}/>
                                <div>
                                    Current Capacity = {seatA}
                                </div>
                            </center>
                        </div>
                        <div className={classes.item2}>
                            <h2>Block B</h2>
                            <center>
                                <input type="range" min={1} max={props.seatBCapacity}  value={seatB} onChange={changeSeatBCapacityHandler}/>
                                <div>
                                    Current Capacity = {seatB}
                                </div>
                            </center>
                        </div>
                        <div className={classes.item3}>
                            <h2>Block C</h2>
                            <center>
                                <input type="range" min={1} max={props.seatCCapacity}  value={seatC} onChange={changeSeatCCapacityHandler}/>
                                <div>
                                    Current Capacity = {seatC}
                                </div>
                            </center>
                        </div>  
                        <div className={classes.item4}>
                            <h2>Block D</h2>
                            <center>
                                <input type="range" min={1} max={props.seatDCapacity}  value={seatD} onChange={changeSeatDCapacityHandler}/>
                                <div>
                                    Current Capacity = {seatD}
                                </div>
                            </center>
                        </div>
                        <div className={classes.item5}>
                            <h2>Block E</h2>
                            <center>
                                <input type="range" min={1} max={props.seatECapacity}  value={seatE} onChange={changeSeatECapacityHandler}/>
                                <div>
                                    Current Capacity = {seatE}
                                </div>
                            </center>
                        </div>
                </div>
                <center>
                <button className={classes.apply} onClick={props.setNewCapacity.bind(null , {seatA , seatB , seatC , seatD , seatE})}>Apply Changes</button>
                <button className={classes.cancel} onClick={props.onCloseModal}>Cancel</button>
                </center>
            </div>
            <div className={classes.overlay} onClick={props.onCloseModal}></div>

        </div>
    )
}

export default PopulateModal;
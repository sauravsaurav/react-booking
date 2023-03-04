import {createSlice} from "@reduxjs/toolkit";


const maxDefault = {
    blockASeats : {
        id: "seatA",
        capacity : 40,
        current : localStorage.getItem("seatAValue") || 0,
        temp : 0 ,// for animation, 
        seats : [] // For keeping the track of booking and availability
    },
    blockBSeats : {
        id: "seatB",
        capacity : 8,
        current : localStorage.getItem("seatBValue") || 0,
        temp : 0 ,// for animation
        seats : [] // For keeping the track of booking and availability
    },
    blockCSeats : {
        id: "seatC",
        capacity : 22, 
        current : localStorage.getItem("seatCValue") ||  0,
        temp : 0 ,// for animation
        seats : [] // For keeping the track of booking and availability
    },
    blockDSeats : {
        id: "seatD",
        capacity : 8,
        current : localStorage.getItem("seatDValue") ||  0,
        temp : 0 ,// for animation
        seats : [] // For keeping the track of booking and availability
    },
    blockESeats : {
        id: "seatE",
        capacity : 40,
        current : localStorage.getItem("seatEValue") ||  0,
        temp : 0 ,// for animation
        seats : [] // For keeping the track of booking and availability
    },
    booked : {
        totalBooked: 0,
        blockASeats : [],
        blockBSeats : [],
        blockCSeats : [],
        blockDSeats : [],
        blockESeats : []
    }
}


const seatSlice = createSlice({
    name : "seat",
    initialState : maxDefault,
    reducers : {
        increaseTemp(state , actions){
            state[actions.payload.seatNumber].temp = actions.payload.totalAmount;
        },
        increase(state , actions){
            state[actions.payload.seatNumber].current = actions.payload.totalAmount;
            state[actions.payload.seatNumber].seats.push({
                id : actions.payload.seatNumber+"-"+actions.payload.totalAmount,
                blockNumber : actions.payload.seatNumber,
                seatNumber : actions.payload.totalAmount,
                isAvailable : Math.random() > 0.5 , 
                // isBooked : false
            })
        },
        reset(state){
            state.blockASeats.current = 0;
            state.blockASeats.temp = 0;
            state.blockASeats.seats = [];
            state.blockBSeats.current = 0;
            state.blockBSeats.temp = 0;
            state.blockBSeats.seats = [];
            state.blockCSeats.current = 0;
            state.blockCSeats.temp = 0;
            state.blockCSeats.seats = [];
            state.blockDSeats.current = 0;
            state.blockDSeats.temp = 0;
            state.blockDSeats.seats = [];
            state.blockESeats.current = 0;
            state.blockESeats.temp = 0;
            state.blockESeats.seats = [];
        },
        toggleBooking(state , actions){
            if(state.booked[actions.payload.blockNumber].indexOf(parseInt(actions.payload.seatNumber)) !== -1){
                console.log("Removing the item");
                // Removing the existing booked seat
                state.booked[actions.payload.blockNumber] = state.booked[actions.payload.blockNumber].filter((el)=> el !== parseInt(actions.payload.seatNumber));
                state.booked.totalBooked--;
            }else{
                console.log("Adding the item")
                //Pushing the existing booked seat
                state.booked[actions.payload.blockNumber].push(parseInt(actions.payload.seatNumber));
                state.booked.totalBooked++;
            }
        },
        clearBooking(state , actions){
            state.booked.totalBooked = 0;
            state.booked.blockASeats = [];
            state.booked.blockBSeats = [];
            state.booked.blockCSeats = [];
            state.booked.blockDSeats = [];
            state.booked.blockESeats = [];
        }
    }
});

export const seatActions = seatSlice.actions;

export default seatSlice;
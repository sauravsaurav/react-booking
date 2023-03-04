import { configureStore } from "@reduxjs/toolkit";
import animationSlice from "./animationConfig";
import popupMessageSlice from "./popupMessageConfiguration";
import seatSlice from "./seatsConfiguration";
import movieSlice from "./movie";


const store = configureStore({
    reducer : {
        animation : animationSlice.reducer,
        popupMessage : popupMessageSlice.reducer,
        seat : seatSlice.reducer,
        movie : movieSlice.reducer
    }
})

export default store;
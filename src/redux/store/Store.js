import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./silice/counterSlice";


export default  configureStore({
    reducer:{
        countert: counterSlice
    }
})
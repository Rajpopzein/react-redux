import { createSlice } from "@reduxjs/toolkit";


// creating conterslice as a referance for the createslice function
export const contersilce = createSlice({
    name: "countmod",
    // Initializing a defalut value or initial value
    initialState:{
        count: 0
    },
    //Actions to be performed will be defined here
    reducers:{
        increment : state => {state.count += 1},
        decrement : state => {state.count -= 1}
    }
})

// exporting the action seperatly 
export const {increment, decrement} = contersilce.actions

// exporting reducer
export default contersilce.reducer



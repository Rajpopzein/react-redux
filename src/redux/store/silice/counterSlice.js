import { createSlice } from "@reduxjs/toolkit";

export const contersilce = createSlice({
    name: "countmod",
    initialState:{
        count: 0
    },
    reducers:{
        increment : state => {state.count += 1},
        decrement : state => {state.count -= 1}
    }
})

export const {increment, decrement} = contersilce.actions

export default contersilce.reducer



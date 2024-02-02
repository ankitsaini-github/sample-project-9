import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState={counter: 0,showcounter:true}

const counterSlice=createSlice({
  name:'counter',
  initialState,
  reducers:{
    increment(state,action){
      state.counter=state.counter+action.payload
    },
    decrement(state,action){
      state.counter=state.counter-action.payload
    },
    togglecounter(state){
      state.showcounter=!state.showcounter
    },
  }
})


const store = configureStore({
  reducer : counterSlice.reducer
});

export const counterActions=counterSlice.actions;
export default store;

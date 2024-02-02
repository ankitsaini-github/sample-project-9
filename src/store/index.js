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

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer : {counter:counterSlice.reducer, auth:authSlice.reducer}
});

export const counterActions=counterSlice.actions;
export const authActions = authSlice.actions;
export default store;

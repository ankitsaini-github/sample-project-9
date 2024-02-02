import { legacy_createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment5") {
    return {
      counter: state.counter + 5,
    };
  }
  if (action.type === "decrement5") {
    return {
      counter: state.counter - 5,
    };
  }
  if (action.type === "incrementby2") {
    return {
      counter: state.counter + 2,
    };
  }
  if (action.type === "decrementby2") {
    return {
      counter: state.counter - 2,
    };
  }
  return state;
};

const store = legacy_createStore(counterReducer);

export default store;

const redux = require("redux");
const counterReducer = (state = { counter: 0 }, action) => {
  let updatedstate=state.counter
  if(action.type==='increment')
    updatedstate+=1;
  if(action.type==='decrement')
    updatedstate-=1;
  return {
    counter: updatedstate,
  };
};
const store = redux.legacy_createStore(counterReducer);

const counterSubscriber = () => {
  const lateststate = store.getState();
  console.log(lateststate);
};
store.subscribe(counterSubscriber);
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
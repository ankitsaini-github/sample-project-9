import {useDispatch, useSelector} from 'react-redux'
import {counterActions} from '../store/index'
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter)
  const show=useSelector(state=>state.showcounter)
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.togglecounter())
  };
  const incrementHandler=() => { 
    dispatch(counterActions.increment(2))
  }
  const decrementHandler=() => {
    dispatch(counterActions.decrement(2))
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment by 2</button>
        <button onClick={decrementHandler}>Decrement by 2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

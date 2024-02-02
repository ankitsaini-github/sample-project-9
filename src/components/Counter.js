import {useDispatch, useSelector} from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter)
  const toggleCounterHandler = () => {};
  const incrementHandler=() => { 
    dispatch({type:'incrementby2'})
  }
  const decrementHandler=() => {
    dispatch({type:'decrementby2'})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment by 2</button>
        <button onClick={decrementHandler}>Decrement by 2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

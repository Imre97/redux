import {useSelector, useDispatch} from 'react-redux'
import classes from './Counter.module.css';
import {counterActions} from '../store/counter'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const active = useSelector(state => state.counter.active)

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const increaseByFive = () => {
    dispatch(counterActions.increase(10))
  }


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter(!active))
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {active && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseByFive}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

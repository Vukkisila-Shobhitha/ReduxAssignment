import { useDispatch, useSelector } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state);
   
  const incrementCounter = () => {
    dispatch({ type: 'INCR'});
  }
  const decrementCounter = () => {
    dispatch({ type: 'DECR'});
  }
  const resetCounter = () => {
    dispatch({ type: 'RESET'});
  }
  return (
    <div>
      <div>
        <p>Counter: { 
          counter ? counter.counter : 0
         }</p>
      </div>

      <div>
        <button
          onClick={
            () => dispatch({ type: 'INCR' })
          }
        >
          plus
        </button>

        <button
          onClick={
            () => dispatch({ type: 'DECR' })
          }
        >
          minus
        </button>
        <button
          onClick={
            () => dispatch({ type: 'RESET' })
          }
        >
          zero
        </button>
      </div>
    </div>
  )
}


export default App;
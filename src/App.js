import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/store/silice/counterSlice";

function App() {
  const counter = useSelector((state) => state.countert.count);
  const dispatch = useDispatch();

  const increments = () => {
    dispatch(increment())
  }

  const decrements = () => {
    dispatch(decrement())
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>This</h1>
        <h2>{counter}</h2>
        <button onClick={increments}>Increment</button>
        <button onClick={decrements}>Decrement</button>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";

export const CounterApp = ({ count, increment, decrement }) => {

    const counts = useSelector(state=> state.count)
    const dispatch = useDispatch();

  return (
    <div>
      {count}
      <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
      <button onClick={decrement}>-</button>
      {counts}
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

import React, { useReducer } from 'react'
                                    // useReducer is a React Hook that lets you add a reducer to your component.
                                    // const [state, dispatch] = useReducer(reducer, initialArg, init?)

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// pure function 
function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.payload };
    case DECREMENT:
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => dispatch({ type: INCREMENT, payload: 2 })}>+</button>
                <h1>{state.count}</h1>
                <button onClick={() => dispatch({ type: DECREMENT, payload: 1 })} >-</button>
            </div>
        </>
    )
}

import React, { useState } from 'react'
                                          // useState is a React Hook that lets you add a state variable to your component.

export default function UseState() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  const [text, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>
          You pressed me {count} times
        </button>
      </div>
      <div>
        <input value={text} onChange={handleChange} />
        <p>You typed: {text}</p>
        <button onClick={() => setText('hello')}>
          Reset
        </button>
      </div >
    </>
  )
} 

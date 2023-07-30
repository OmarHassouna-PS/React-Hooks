
import React, { useRef } from 'react'
                                        // useRef is a React Hook that lets you reference a value that’s not needed for rendering.

export default function UseRef() {
    let ref = useRef(0);
    let inputRef = useRef(0);

    function handleClick() {
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!');

        inputRef.current.focus();
        // console.log(inputRef) // {current: input} it return object has input reference
        // console.log(inputRef.current) // input reference
    }

    return (
        <>
            <button onClick={handleClick}>
                Click me!
            </button>

            <input ref={inputRef} />
        </>
    );
}
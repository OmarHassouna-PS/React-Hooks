import React, { useEffect, useState } from 'react'
                                            // useEffect is a React Hook that lets you synchronize a component with an external system..

export default function UseEffect() {
    const [count, setState] = useState(0);

    const handleClick = () => setState((c) => c + 1);


    // componentDidMount:
    // The useEffect hook with an empty dependency array ([]) as the second argument will be executed only after the initial render of the component,
    // simulating the behavior of componentDidMount. It is called when the component is first mounted to the DOM.

        // useEffect(() => {
        //     // Code to be executed after the initial render
        // }, []);

    // componentDidUpdate:
    //  By providing dependencies to the useEffect hook, you can control when it should be executed.
    //  When the specified dependencies change, the useEffect hook is triggered, similar to componentDidUpdate.
    //  It is called after a re-render of the component.

        // useEffect(() => {
        //     // Code to be executed after each render or when specific dependencies change
        // }, [dependency1, dependency2, ...]);

    // componentWillUnmount:
    // The useEffect hook can also return a cleanup function that will be executed when the component is unmounted or before the next execution of the effect.
    // This is similar to the cleanup logic performed in componentWillUnmount.

        // useEffect(() => {
        //     // Code to be executed after the initial render
        
        //     return () => {
        //         // Cleanup logic to be executed before unmounting or next effect execution
        //     };
        // }, []);

    // --------------------------------------------- //

    // Once a component is rendered, this method is called
    // replace componentDidMount And componentDidUpdate
    useEffect(() => {
        console.log('replace componentDidMount And componentDidUpdate without array dependency [X]')
    })

    // Once a component is rendered or change count, this method is called
    // replace componentDidMount And componentDidUpdate
    useEffect(() => {
        console.log('replace componentDidMount And componentDidUpdate with array dependency [count]')
    }, [count])

    
    // Once a component is rendered, this method is called
    // replace componentDidMount And componentWillUnmount
    useEffect(() => {
        console.log('componentDidMount And componentWillUnmount with empty array dependency  []')

        return () => {
            // Cleanup logic to be executed before unmounting or next effect execution
            console.log('cleanup')
        };
    }, [])

    // Once a component is rendered, this method is called
    // replace componentDidMount
    useEffect(() => {
        console.log('componentDidMount')
    }, [])



    return (
        <>
            <button onClick={handleClick}>
                You pressed me {count} times
            </button>
        </>
    );
}
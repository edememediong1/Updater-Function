import { useState } from "react"

export default function Updater(){
    const [count, setCount] = useState(0);

    function handleIncrement(){
        setCount(count + 1);
    }

    function handleDecrement(){
        setCount(count - 1);
    }

    function handleClear(){
        setCount(0);
    }

    return(
        <>
            <h1>{count}</h1>
            <input type='submit' onClick={handleIncrement}>Increment</input>
            <input type='submit' onClick={handleDecrement}>Decrement</input>
            <input type='submit' onClick={handleClear}>Clear</input>
        </>
    )
}
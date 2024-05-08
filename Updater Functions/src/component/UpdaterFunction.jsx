import { useState } from "react"

export default function Updater(){
    const [count, setCount] = useState(0);

    function handleIncrement(){
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    function handleDecrement(){
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function handleClear(){
        setCount(0);
    }

    return(
        <section>
            <h1>{count}</h1>
            <button type='submit' onClick={handleIncrement}>Increase</button>
            <button type='submit' onClick={handleDecrement}>Decrease</button>
            <button type='submit' onClick={handleClear}>Clear</button>
        </section>
    )
}
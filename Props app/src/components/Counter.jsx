import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        

        setCount(count - 1)
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
} 
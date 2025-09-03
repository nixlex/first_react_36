import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)

    function increment() {
        if (count < 10) {
            setCount(count + 1)

        }
    }

    function decrement() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>

            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>

        </div>
    )

}
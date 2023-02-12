import { useState } from "react"

export const useCounter = (initVal = 0) => {
    
    const [count, setCount] = useState(initVal);

    // Increase Count
    const increase = () => {
        setCount(count + 1)
    }

    // Decrease count
    const decrease = () => {
        setCount(count - 1)
    }

    // Reset Count
    const reset = () => {
        setCount(initVal)
    }

    return { count, increase, decrease, reset }
}

import React, {useState, useEffect} from "react";

const counterKey = "counter";

function ButtonWithCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count === 0)
        {
            setCount(parseInt(localStorage.getItem(counterKey)))
        } else
        {
            localStorage.setItem(counterKey, count)
        }
    }, [count]);

    return (
        <>
            <p>Click counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Clickable button
            </button>
        </>
    );
}

export default ButtonWithCounter;
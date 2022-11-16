import React, {useState} from "react";

function ButtonWithCounter() {
    const [count, setCount] = useState(0);
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
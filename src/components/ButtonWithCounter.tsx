import React, {useContext} from "react";
import {CountContext} from "../CounterContext";


function ButtonWithCounter() {
    const countContext = useContext(CountContext)
    return (
        <>
            <button onClick={() => countContext.setCount(countContext.count + 1)}>
                Clickable button
            </button>
        </>
    );
}

export default ButtonWithCounter;
import React, {useContext} from "react";
import {CountContext} from "../CounterContext";

function CountDisplay() {
    const count = useContext(CountContext)
    return (
        <>
            <p>Counter value : {count.count} </p>

        </>
    );
}

export default CountDisplay;
import React, {useState, useEffect} from "react";

const counterKey = "counter";

function ComponentTree() {

    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count === 0) {
            setCount(parseInt(localStorage.getItem(counterKey)))
        } else {
            localStorage.setItem(counterKey, count)
        }
    }, [count]);

    return (
        <>
            <Component2 setCount={setCount} count={count}></Component2>
            <Component3 count={count}></Component3>
        </>
    );
}

function Component2(props) {
    return (
        <>
            <button onClick={() => props.setCount(props.count + 1)}>
                Clickable button
            </button>
        </>
    );
}


function Component3(props) {
    return (
        <>
            <p> This is component 3 speaking </p>
            <Component4 count={props.count}></Component4>
        </>
    );
}

function Component4(props) {
    return (
        <>
            <p>Counter value : {props.count} </p>

        </>
    );
}

export default ComponentTree;
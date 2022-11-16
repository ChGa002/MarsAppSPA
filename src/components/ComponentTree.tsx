import React, {useState, useEffect, useContext} from "react";

const counterKey = "counter";

const CountContext = React.createContext({
    count: 0,
    setCount: (count :number) => {}
});

function ComponentTree() {
    const [count, setCount] = useState(0);

    useEffect(() => {

        if (count === 0) {
           setCount(parseInt(localStorage.getItem(counterKey) || '0'));
        } else {
            localStorage.setItem(counterKey, count.toString());
        }
    }, [count]);

    return (
        <CountContext.Provider value={{count, setCount}}>
            <Component2></Component2>
            <Component3></Component3>
        </CountContext.Provider>
    );
}

function Component2() {

    const context = useContext(CountContext);
    return (
        <>
            <button onClick={() => context.setCount(context.count + 1)} >
                Clickable button
            </button>
        </>
    );
}


function Component3() {
    return (
        <>
            <p> This is component 3 speaking </p>
            <Component4></Component4>
        </>
    );
}

function Component4() {
    return (
        <>
            <p>Counter value : {useContext(CountContext).count} </p>

        </>
    );
}

export default ComponentTree;
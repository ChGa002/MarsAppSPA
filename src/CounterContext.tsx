import React, { createContext, useState, useEffect } from "react";

// create context
const CountContext = createContext({
    count: 0,
    setCount: (count: number) => {}
});

const counterKey = "counter";

const CountContextProvider = ({ children }: { children: any }) => {
    // the value that will be given to the context
    const [count, setCount] = useState(0);

    useEffect(() => {

        if (count === 0) {
            setCount(parseInt(localStorage.getItem(counterKey) || '0'));
        } else {
            localStorage.setItem(counterKey, count.toString());
        }
    }, [count]);
    return (
        // the Provider gives access to the context to its children
        <CountContext.Provider value={{count, setCount}}>
            {children}
        </CountContext.Provider>
    );
};

export { CountContext, CountContextProvider };
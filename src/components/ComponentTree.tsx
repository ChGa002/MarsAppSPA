import React from "react";
import {CountContextProvider} from "../CounterContext";
import ButtonWithCounter from "./ButtonWithCounter";
import TextDisplay from "./TextDisplay";

function ComponentTree() {
    return (
        <CountContextProvider>
            <ButtonWithCounter/>
            <TextDisplay/>
        </CountContextProvider>
    );
}

export default ComponentTree;
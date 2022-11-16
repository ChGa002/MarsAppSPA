import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NASA from "./components/NASA";
import TitleParagraphImageComponent from "./components/TitleParagraphImageComponent";
import ButtonWithCounter from "./components/ButtonWithCounter";
import ComponentTree from "./components/ComponentTree";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                {/*<ButtonWithCounter></ButtonWithCounter>*/}
                {/*<TitleParagraphImageComponent title={"Just a cat"} p1={"paragraph1"} p2={"paragraph2"}*/}
                {/*                              image={"http://placekitten.com/200/300"}></TitleParagraphImageComponent>*/}

                {/*<NASA></NASA>*/}
                <ComponentTree></ComponentTree>
            </header>
        </div>
    );
}

export default App;

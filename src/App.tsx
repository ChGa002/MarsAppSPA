import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentTree from "./components/ComponentTree";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <ComponentTree></ComponentTree>
            </header>
        </div>
    );
}

export default App;
